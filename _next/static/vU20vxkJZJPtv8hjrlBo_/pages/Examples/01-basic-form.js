(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{162:function(e,a,n){"use strict";n.r(a);var t=n(0),p=n.n(t),s=n(3),o=n(10);function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,a){return(l=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var i=function(e){function a(){var e,n,t,p,s,o,m;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var l=arguments.length,i=new Array(l),N=0;N<l;N++)i[N]=arguments[N];return t=this,n=!(p=(e=c(a)).call.apply(e,[this].concat(i)))||"object"!==r(p)&&"function"!=typeof p?u(t):p,s=u(u(n)),m={},(o="state")in s?Object.defineProperty(s,o,{value:m,enumerable:!0,configurable:!0,writable:!0}):s[o]=m,n}var n,t,s;return function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&l(e,a)}(a,p.a.Component),n=a,(t=[{key:"render",value:function(){var e=this;return p.a.createElement(o.a,{saveButton:"Login",onSave:function(a){return e.setState({credentials:a})},fields:[{path:["email"],label:"Email"},{path:["password"],label:"Password",type:"password"},{path:["rememberMe"],label:"Remember me",type:"checkbox"}]})}}])&&m(n.prototype,t),s&&m(n,s),a}(),N=n(21);function g(e,a){if(null==e)return{};var n,t,p=function(e,a){if(null==e)return{};var n,t,p={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||(p[n]=e[n]);return p}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}n.d(a,"attributes",function(){return f}),n.d(a,"Example",function(){return X}),n.d(a,"Spy",function(){return k});var E,T,f={title:"Basic Form"},M=Object(N.a)(i),D=(T=2,function(e){if(Array.isArray(e))return e}(E=M)||function(e,a){var n=[],t=!0,p=!1,s=void 0;try{for(var o,r=e[Symbol.iterator]();!(t=(o=r.next()).done)&&(n.push(o.value),!a||n.length!==a);t=!0);}catch(e){p=!0,s=e}finally{try{t||null==r.return||r.return()}finally{if(p)throw s}}return n}(E,T)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()),X=D[0],k=D[1];a.default=function(e){var a=e.components;g(e,["components"]);return p.a.createElement(s.MDXTag,{name:"wrapper",components:a},p.a.createElement(s.MDXTag,{name:"h4",components:a},"Basic form"),p.a.createElement(s.MDXTag,{name:"p",components:a},"A very basic sign in form."),p.a.createElement(s.MDXTag,{name:"h6",components:a},"Code"),p.a.createElement(s.MDXTag,{name:"pre",components:a,props:{className:"language-jsx"}},p.a.createElement(s.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"code",props:{className:"token tag"}},p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token tag"}},p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"<"),"FormHelper"),"\n  ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token attr-name"}},"saveButton"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token attr-value"}},p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"="),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},'"'),"Login",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},'"')),"\n  ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token attr-name"}},"onSave"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token script language-javascript"}},p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token script-punctuation punctuation"}},"="),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"{"),"credentials ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token operator"}},"=>")," ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token keyword"}},"this"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"."),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token function"}},"setState"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"("),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"{"),"credentials",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"}"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},")"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"}")),"\n  ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token attr-name"}},"fields"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token script language-javascript"}},p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token script-punctuation punctuation"}},"="),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"{"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"["),"\n    ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"{"),"path",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},":")," ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"["),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token string"}},"'email'"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"]"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},",")," label",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},":")," ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token string"}},"'Email'"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"}"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},","),"\n    ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"{"),"path",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},":")," ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"["),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token string"}},"'password'"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"]"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},",")," label",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},":")," ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token string"}},"'Password'"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},",")," type",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},":")," ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token string"}},"'password'"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"}"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},","),"\n    ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"{"),"path",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},":")," ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"["),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token string"}},"'rememberMe'"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"]"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},",")," label",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},":")," ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token string"}},"'Remember me'"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},",")," type",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},":")," ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token string"}},"'checkbox'"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"}"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},","),"\n  ",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"]"),p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"}")),"\n",p.a.createElement(s.MDXTag,{name:"span",components:a,parentName:"span",props:{className:"token punctuation"}},"/>")),"\n")),p.a.createElement(s.MDXTag,{name:"h6",components:a},"Demo"),p.a.createElement("div",null,p.a.createElement(X,null)),p.a.createElement(s.MDXTag,{name:"h6",components:a},"State"),p.a.createElement("div",null,p.a.createElement("p",null,p.a.createElement(k,null))))}},400:function(e,a,n){__NEXT_REGISTER_PAGE("/Examples/01-basic-form",function(){return e.exports=n(162),{page:e.exports.default}})}},[[400,1,0]]]);