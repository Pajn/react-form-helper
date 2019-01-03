(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{160:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(3),l=n(10),i=n(684);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,l=new Array(a),i=0;i<a;i++)l[i]=arguments[i];return r=this,n=!(o=(e=s(t)).call.apply(e,[this].concat(l)))||"object"!==c(o)&&"function"!=typeof o?f(r):o,m(f(f(n)),"state",{}),n}var n,r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this;return o.a.createElement(l.a,{inputComponent:i.a,style:{display:"flex",flexDirection:"column",alignItems:"flex-start"},onSave:function(t){return e.setState({user:t})},value:this.state.user,fields:[{path:["name"],icon:"face",label:"Name",onChange:function(t){var n=e.state.user||{};return n.name===n.displayName?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){m(e,t,n[t])})}return e}({},t,{displayName:t.name}):t}},{path:["displayName"],icon:"account_circle",label:"Display Name"}]})}}])&&u(n.prototype,r),a&&u(n,a),t}(),d=n(21);function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"attributes",function(){return v}),n.d(t,"Example",function(){return E}),n.d(t,"Spy",function(){return S});var h,g,v={title:"Controlling other fields"},w=Object(d.a)(y),O=(g=2,function(e){if(Array.isArray(e))return e}(h=w)||function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}(h,g)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),E=O[0],S=O[1];t.default=function(e){var t=e.components;b(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h4",components:t},"Controlling other fields"),o.a.createElement(a.MDXTag,{name:"p",components:t},"Sometimes you need to controll other fields based on the field the user typed in.\nMaybe to provide a default value or to display a preview of something."),o.a.createElement(a.MDXTag,{name:"h6",components:t},"Code"),o.a.createElement(a.MDXTag,{name:"pre",components:t},o.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},"<FormHelper\n  inputComponent={TextField}\n  style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}\n  onSave={user => this.setState({user})}\n  value={this.state.user}\n  fields={[\n    {\n      path: ['name'],\n      icon: 'face',\n      label: 'Name',\n      onChange: updated => {\n        const oldUser = this.state.user || {}\n\n        // Update the displayName only if it matches with the previous name\n        return oldUser.name === oldUser.displayName\n          ? {...updated, displayName: updated.name}\n          : updated\n      },\n    },\n    {path: ['displayName'], icon: 'account_circle', label: 'Display Name'},\n  ]}\n/>\n")),o.a.createElement(a.MDXTag,{name:"h6",components:t},"Demo"),o.a.createElement("div",null,o.a.createElement(E,null)),o.a.createElement(a.MDXTag,{name:"h6",components:t},"State"),o.a.createElement("div",null,o.a.createElement("p",null,o.a.createElement(S,null))))}},526:function(e,t,n){__NEXT_REGISTER_PAGE("/Examples/07-controlling-other-fields",function(){return e.exports=n(160),{page:e.exports.default}})}},[[526,1,0]]]);