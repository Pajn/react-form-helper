webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/Examples/06-validation.example.js":
/*!*************************************************!*\
  !*** ./pages/Examples/06-validation.example.js ***!
  \*************************************************/
/*! exports provided: RealtimeValidation, ServerValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RealtimeValidation", function() { return RealtimeValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerValidation", function() { return ServerValidation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_form_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-form-helper */ "../lib/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_material_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-material-app */ "./node_modules/react-material-app/lib/index.js");
var _jsxFileName = "/home/rasmus/Development/react-form-helper/docs/pages/Examples/06-validation.example.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var RealtimeValidation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RealtimeValidation, _React$Component);

  function RealtimeValidation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RealtimeValidation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RealtimeValidation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  _createClass(RealtimeValidation, [{
    key: "render",
    value: function render() {
      var _this2 = this,
          _validations2;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_form_helper__WEBPACK_IMPORTED_MODULE_1__["FormHelper"], {
        errorOnTouched: this.props.errorOnTouched,
        saveButton: "Save",
        buttonComponent: _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a,
        buttonProps: {
          primary: true
        },
        inputComponent: react_material_app__WEBPACK_IMPORTED_MODULE_3__["TextField"],
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        },
        onSave: function onSave(user) {
          return _this2.setState({
            user: user
          });
        },
        value: this.state.user,
        fields: [{
          path: ['name'],
          icon: 'face',
          label: 'Name',
          required: true,
          validations: _defineProperty({}, react_form_helper__WEBPACK_IMPORTED_MODULE_1__["required"], {
            text: 'Name is required'
          })
        }, {
          path: ['email'],
          icon: 'email',
          label: 'Email',
          required: true,
          validations: (_validations2 = {}, _defineProperty(_validations2, react_form_helper__WEBPACK_IMPORTED_MODULE_1__["required"], {
            text: 'Email is required'
          }), _defineProperty(_validations2, "format", {
            text: 'Must be valid',
            // test takes a function to validate the field.
            // The provided pattern function takes a Regexp and
            // returns a test function.
            test: Object(react_form_helper__WEBPACK_IMPORTED_MODULE_1__["pattern"])(/^[^@]{1,60}@\w{1,50}\.\w{2,15}$/)
          }), _validations2)
        }, {
          path: ['phone'],
          icon: 'phone',
          label: 'Phone',
          validations: {
            format: {
              text: 'Must be valid',
              test: Object(react_form_helper__WEBPACK_IMPORTED_MODULE_1__["pattern"])(/^[0-9]{5,10}$/)
            }
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });
    }
  }]);

  return RealtimeValidation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
var ServerValidation =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(ServerValidation, _React$Component2);

  function ServerValidation() {
    var _getPrototypeOf3;

    var _this3;

    _classCallCheck(this, ServerValidation);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this3 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(ServerValidation)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this3)), "state", {});

    return _this3;
  }

  _createClass(ServerValidation, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_form_helper__WEBPACK_IMPORTED_MODULE_1__["FormHelper"], {
        saveButton: "Save",
        buttonComponent: _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a,
        buttonProps: {
          primary: true
        },
        inputComponent: react_material_app__WEBPACK_IMPORTED_MODULE_3__["TextField"],
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        },
        onSave: function onSave(user) {
          return _this4.setState({
            user: user
          });
        },
        value: {
          email: 'admin@example.com'
        },
        fields: [{
          path: ['email'],
          icon: 'email',
          label: 'Email',
          validationError: 'unique',
          validations: {
            unique: {
              text: 'The email is already registered'
            }
          }
        }],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      });
    }
  }]);

  return ServerValidation;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Examples/06-validation.example")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.3a38427f2453f30e9bd5.hot-update.js.map