(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"BasicForm",function(){return s});var r=n(0),o=n.n(r),a=n(10);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s=function(e){function t(){var e,n,r,o,a,i,l;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,p=new Array(s),y=0;y<s;y++)p[y]=arguments[y];return r=this,n=!(o=(e=c(t)).call.apply(e,[this].concat(p)))||"object"!==u(o)&&"function"!=typeof o?f(r):o,a=f(f(n)),l={},(i="state")in a?Object.defineProperty(a,i,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[i]=l,n}var n,r,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;return o.a.createElement(a.a,{saveButton:"Login",onSave:function(t){return e.setState({credentials:t})},fields:[{path:["email"],label:"Email"},{path:["password"],label:"Password",type:"password"},{path:["rememberMe"],label:"Remember me",type:"checkbox"}]})}}])&&i(n.prototype,r),s&&i(n,s),t}()},21:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var r=n(0),o=n.n(r);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){var t;return e.prototype.setState=function(e){var n;t&&t.setState(e);for(var r=arguments.length,a=new Array(r>1?r-1:0),u=1;u<r;u++)a[u-1]=arguments[u];(n=o.a.Component.prototype.setState).call.apply(n,[this,e].concat(a))},[e,function(e){function n(e){var r,o,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,(r=!(u=i(n).call(this,e))||"object"!==a(u)&&"function"!=typeof u?l(o):u).state={},t=l(l(r)),r}var r,f,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(n,o.a.Component),r=n,(f=[{key:"render",value:function(){return JSON.stringify(this.state)}}])&&u(r.prototype,f),s&&u(r,s),n}()]}},295:function(e,t,n){"use strict";n.r(t),n.d(t,"attributes",function(){return s}),n.d(t,"Example",function(){return m}),n.d(t,"Spy",function(){return b});var r=n(0),o=n.n(r),a=n(3),u=n(157),i=n(21);function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l,f,s={title:"Basic Form"},p=Object(i.a)(u.BasicForm),y=(f=2,function(e){if(Array.isArray(e))return e}(l=p)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(l,f)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),m=y[0],b=y[1];t.default=function(e){var t=e.components;c(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h4",components:t},"Basic form"),o.a.createElement(a.MDXTag,{name:"p",components:t},"A very basic sign in form."),o.a.createElement(a.MDXTag,{name:"h6",components:t},"Code"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<FormHelper\n  saveButton=\"Login\"\n  onSave={credentials => this.setState({credentials})}\n  fields={[\n    {path: ['email'], label: 'Email'},\n    {path: ['password'], label: 'Password', type: 'password'},\n    {path: ['rememberMe'], label: 'Remember me', type: 'checkbox'},\n  ]}\n/>\n")),o.a.createElement(a.MDXTag,{name:"h6",components:t},"Demo"),o.a.createElement("div",null,o.a.createElement(m,null)),o.a.createElement(a.MDXTag,{name:"h6",components:t},"State"),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement(b,null))))}},3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(58);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(33);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=i(n(0)),a=i(n(59)),u=i(n(1));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,a.default)({}),l=c.Provider,f=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(f,null,function(t){return o.default.createElement(e,r({components:n||t},a))})}};var s=function(e){var t=e.components,n=e.children;return o.default.createElement(l,{value:t},n)};s.propTypes={components:u.default.object.isRequired,children:u.default.element.isRequired},t.default=s},400:function(e,t,n){__NEXT_REGISTER_PAGE("/Examples/01-basic-form",function(){return e.exports=n(295),{page:e.exports.default}})},58:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),u=l(a),i=l(n(69)),c=n(33);function l(e){return e&&e.__esModule?e:{default:e}}var f={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,c=e.children,l=e.components,s=void 0===l?{}:l,p=e.Layout,y=e.layoutProps,m=s[n+"."+t]||s[t]||f[t]||t;return p?((0,i.default)(this,p),u.default.createElement(p,r({components:s},y),u.default.createElement(m,a,c))):u.default.createElement(m,a,c)}}]),t}();t.default=(0,c.withMDXComponents)(s)},59:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(0)),o=a(n(60));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},60:function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(u(r),u(n(1))),a=u(n(61));u(n(62));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=1073741823;t.default=function(e,t){var n,u,s="__create-react-context-"+(0,a.default)()+"__",p=function(e){function n(){var t,r,o,a;i(this,n);for(var u=arguments.length,l=Array(u),f=0;f<u;f++)l[f]=arguments[f];return t=r=c(this,e.call.apply(e,[this].concat(l))),r.emitter=(o=r.props.value,a=[],{on:function(e){a.push(e)},off:function(e){a=a.filter(function(t){return t!==e})},get:function(){return o},set:function(e,t){o=e,a.forEach(function(e){return e(o,t)})}}),c(r,t)}return l(n,e),n.prototype.getChildContext=function(){var e;return(e={})[s]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(u=r)?0!==a||1/a==1/u:a!=a&&u!=u)?o=0:(o="function"==typeof t?t(n,r):f,0!=(o|=0)&&this.emitter.set(e.value,o))}var a,u},n.prototype.render=function(){return this.props.children},n}(r.Component);p.childContextTypes=((n={})[s]=o.default.object.isRequired,n);var y=function(t){function n(){var e,r;i(this,n);for(var o=arguments.length,a=Array(o),u=0;u<o;u++)a[u]=arguments[u];return e=r=c(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!=((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},c(r,e)}return l(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=null==t?f:t},n.prototype.componentDidMount=function(){this.context[s]&&this.context[s].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=null==e?f:e},n.prototype.componentWillUnmount=function(){this.context[s]&&this.context[s].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[s]?this.context[s].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return y.contextTypes=((u={})[s]=o.default.object,u),{Provider:p,Consumer:y}},e.exports=t.default},61:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(57))},62:function(e,t,n){"use strict";var r=n(63);e.exports=r},63:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o}},[[400,1,0]]]);