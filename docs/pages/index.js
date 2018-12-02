import {App} from 'documittu-template-default/cjs/components/app'
import apiDocs from '../analyze-result.json'

const context = require.context('.', true, /\.mdx$/)

export default () =>
  process.browser ? (
    <App
      title="react-form-helper"
      apiDocs={{data: apiDocs}}
      pages={context
        .keys()
        .map(file => [file, context(file)])
        .reduce((pages, [file, page]) => {
          pages[file] = page
          return pages
        }, {})}
    />
  ) : null
