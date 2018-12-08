import {ReactNode, isValidElement} from 'react'
import {Field, FieldConfig} from './index'
import {required as requiredError} from './validation'

export type Omit<T, U> = Pick<T, Exclude<keyof T, U>>

/**
 * Check if two arrays are equal (same length and all elements are ===)
 */
export function isEqual(a: Array<any>, b: Array<any>) {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

export function isValid<T>(
  fields: Array<FieldConfig<T, any> | ReactNode>,
  updatedObject: T,
) {
  const validatedFields = [] as Array<Field<T>>
  let valid = true

  for (const field of fields) {
    if (!field || isValidElement(field)) {
      validatedFields.push(field)
      continue
    }

    const typedField = field as FieldConfig<T, any>

    const value = getValue(typedField.path, updatedObject)
    const required =
      typeof typedField.required === 'function'
        ? typedField.required(updatedObject)
        : typedField.required

    if (required && (value === '' || value === null || value === undefined)) {
      valid = false
      validatedFields.push(
        Object.assign({}, typedField, {validationError: requiredError}),
      )
      continue
    }

    let fieldValid = true
    if (typedField.validations) {
      for (const [type, validation] of Object.entries(typedField.validations)) {
        if (
          value &&
          validation.test &&
          !validation.test(value, updatedObject)
        ) {
          fieldValid = false
          validatedFields.push(
            Object.assign({}, typedField, {validationError: type}),
          )
          break
        }
      }
      if (!fieldValid) {
        valid = false
        continue
      }
    }

    if (typedField.error) {
      valid = false
    }

    if (typedField.validationError) {
      valid = false
    }

    if (fieldValid) {
      validatedFields.push(typedField)
    }
  }

  return {validatedFields, valid}
}

export function getValue<
  T,
  A extends keyof T,
  B extends keyof T[A],
  C extends keyof T[A][B]
>(path: [A, B, C], object: T): T[A][B][C]
export function getValue<T, A extends keyof T, B extends keyof T[A]>(
  path: [A, B],
  object: T,
): T[A][B]
export function getValue<T, A extends keyof T>(path: [A], object: T): T[A]
export function getValue(path: Array<string | number>, object: any): any
export function getValue(path: Array<string | number>, object: any): any {
  return path.reduce((object, key) => object && object[key], object)
}

export type Key = string | number

export function clone<T>(object: T): T {
  return Array.isArray(object) ? [...object] : {...(object as any)}
}

export function updateIn<E, T extends Array<E>>(
  index: number,
  newValue: E,
  object: T,
): T
export function updateIn<T, K extends keyof T>(
  path: K,
  newValue: T[K],
  object: T,
): T
export function updateIn<T, KA extends keyof T, KB extends keyof T[KA]>(
  path: [KA, KB],
  newValue: T[KA][KB],
  object: T,
): T
export function updateIn<
  T,
  KA extends keyof T,
  KB extends keyof T[KA],
  KC extends keyof T[KA][KB]
>(path: [KA, KB, KC], newValue: T[KA][KB][KC], object: T): T
export function updateIn<
  T,
  KA extends keyof T,
  KB extends keyof T[KA],
  KC extends keyof T[KA][KB],
  KD extends keyof T[KA][KB][KC]
>(path: [KA, KB, KC, KD], newValue: T[KA][KB][KC][KD], object: T): T
export function updateIn<
  T,
  KA extends keyof T,
  KB extends keyof T[KA],
  KC extends keyof T[KA][KB],
  KD extends keyof T[KA][KB][KC],
  KE extends keyof T[KA][KB][KC][KD]
>(path: [KA, KB, KC, KD, KE], newValue: T[KA][KB][KC][KD][KE], object: T): T
export function updateIn(path: Array<Key>, newValue: any, object: any): any
export function updateIn(path: Key | Array<Key>, newValue: any, object: any) {
  if (Array.isArray(path) && path.length > 1) {
    newValue = updateIn(path.slice(1) as any, newValue, (object || {})[path[0]])
  }

  const key = Array.isArray(path) ? path[0] : path
  const cloned = clone(object)
  cloned[key] = newValue

  return cloned
}
