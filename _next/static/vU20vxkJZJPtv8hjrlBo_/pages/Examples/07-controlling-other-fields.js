(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{160:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),p=n(3),s=n(10),c=n(684);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,a){return(u=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}var d=function(e){function a(){var e,n,t,o;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var p=arguments.length,s=new Array(p),c=0;c<p;c++)s[c]=arguments[c];return t=this,n=!(o=(e=l(a)).call.apply(e,[this].concat(s)))||"object"!==m(o)&&"function"!=typeof o?i(t):o,N(i(i(n)),"state",{}),n}var n,t,p;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&u(e,a)}(a,o.a.Component),n=a,(t=[{key:"render",value:function(){var e=this;return o.a.createElement(s.a,{inputComponent:c.a,style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},onSave:function(a){return e.setState({user:a})},value:this.state.user,fields:[{path:["name"],icon:"face",label:"Name",onChange:function(a){var n=e.state.user||{};return n.name===n.displayName?function(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(a){N(e,a,n[a])})}return e}({},a,{displayName:a.name}):a}},{path:["displayName"],icon:"account_circle",label:"Display Name"}]})}}])&&r(n.prototype,t),p&&r(n,p),a}(),g=n(21);function E(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(a,"attributes",function(){return k}),n.d(a,"Example",function(){return f}),n.d(a,"Spy",function(){return y});var D,T,k={title:"Controlling other fields"},M=Object(g.a)(d),X=(T=2,function(e){if(Array.isArray(e))return e}(D=M)||function(e,a){var n=[],t=!0,o=!1,p=void 0;try{for(var s,c=e[Symbol.iterator]();!(t=(s=c.next()).done)&&(n.push(s.value),!a||n.length!==a);t=!0);}catch(e){o=!0,p=e}finally{try{t||null==c.return||c.return()}finally{if(o)throw p}}return n}(D,T)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),f=X[0],y=X[1];a.default=function(e){var a=e.components;E(e,["components"]);return o.a.createElement(p.MDXTag,{name:"wrapper",components:a},o.a.createElement(p.MDXTag,{name:"h4",components:a},"Controlling other fields"),o.a.createElement(p.MDXTag,{name:"p",components:a},"Sometimes you need to controll other fields based on the field the user typed in.\nMaybe to provide a default value or to display a preview of something."),o.a.createElement(p.MDXTag,{name:"h6",components:a},"Code"),o.a.createElement(p.MDXTag,{name:"pre",components:a,props:{className:"language-jsx"}},o.a.createElement(p.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"<"),"FormHelper\n  inputComponent",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"TextField",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n  style",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"display",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'flex'"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," flexDirection",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'column'"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," alignItems",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'flex-start'"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n  onSave",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"user ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"this"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token function"}},"setState"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"("),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"user",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},")"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n  value",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"this"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"user",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n  fields",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"="),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),"\n    ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n      path",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'name'"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n      icon",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'face'"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n      label",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'Name'"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n      onChange",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," updated ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=>")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"\n        ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"const")," oldUser ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"=")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"this"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"state",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"user ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"||")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n\n        ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token comment"}},"// Update the displayName only if it matches with the previous name"),"\n        ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token keyword"}},"return")," oldUser",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"name ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"===")," oldUser",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"displayName\n          ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"?")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"..."),"updated",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," displayName",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," updated",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"."),"name",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n          ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," updated\n      ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n    ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n    ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"{"),"path",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"["),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'displayName'"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," icon",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'account_circle'"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},",")," label",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},":")," ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token string"}},"'Display Name'"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},","),"\n  ",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"]"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token punctuation"}},"}"),"\n",o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},"/"),o.a.createElement(p.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token operator"}},">"),"\n")),o.a.createElement(p.MDXTag,{name:"h6",components:a},"Demo"),o.a.createElement("div",null,o.a.createElement(f,null)),o.a.createElement(p.MDXTag,{name:"h6",components:a},"State"),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement(y,null))))}},526:function(e,a,n){__NEXT_REGISTER_PAGE("/Examples/07-controlling-other-fields",function(){return e.exports=n(160),{page:e.exports.default}})}},[[526,1,0]]]);