(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8+s/":function(e,t,r){"use strict";var n,a=r("q1tI"),i=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var o=a.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),s()},o.componentDidUpdate=function(){s()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},o.render=function(){return i.createElement(n,this.props)},a}(a.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(f,"canUseDOM",c),f}}},"9Dj+":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),a=r.n(n),i=r("A2+M"),o=r("ma3e"),c={twitter:{fr:"https://twitter.com/exorde_fr",en:"https://twitter.com/exorde_en"},linkedin:"https://www.linkedin.com/company/exorde",reddit:"https://www.reddit.com/r/Exorde/",facebook:"https://www.facebook.com/Exorde-102932808116053"},u=r("kLJV"),l=r.n(u),s=function(e){var t=e.brand;return a.a.createElement(t,{className:"text-6xl"})},f=function(e){var t=e.locale;return a.a.createElement("div",{className:"bg-black-dark text-white p-8"},a.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 text-center md:text-left"},a.a.createElement("div",{className:"flex flex-col items-center "},a.a.createElement("img",{src:l.a,className:"max-h-24"}),a.a.createElement("h3",{className:"font-brand pt-2 text-white-off"},"EXORDE")),a.a.createElement("div",null,a.a.createElement("h3",null,"Contact"),a.a.createElement("ul",{className:"pt-5"},a.a.createElement("li",null,a.a.createElement("a",{href:"mailto:exordedao@gmail.com"},"exordedao@gmail.com")))),a.a.createElement("div",null,a.a.createElement("h3",null,"Legal"),a.a.createElement("ul",{className:"pt-5"},a.a.createElement("li",null,"Terms"),a.a.createElement("li",null,"Privacy"),a.a.createElement("li",null,"Cookies preferences"))),a.a.createElement("div",null,a.a.createElement("h3",null,"Socials"),a.a.createElement("ul",{className:"pt-5 flex flex-wrap justify-center md:justify-start md:w-32"},a.a.createElement("li",null,a.a.createElement("a",{href:c.twitter[t],target:"_blank",rel:"noreferrer"},a.a.createElement(s,{brand:o.g}))),a.a.createElement("li",null,a.a.createElement("a",{href:c.facebook,target:"_blank",rel:"noreferrer"},a.a.createElement(s,{brand:o.b}))),a.a.createElement("li",null,a.a.createElement("a",{href:c.linkedin,target:"_blank",rel:"noreferrer"},a.a.createElement(s,{brand:o.d}))),a.a.createElement("li",null,a.a.createElement("a",{href:c.reddit,target:"_blank",rel:"noreferrer"},a.a.createElement(s,{brand:o.e})))))),a.a.createElement("p",{className:"pt-10 text-center text-xs"},"© Exorde Labs - ",(new Date).getFullYear()))},p=r("Wbzz"),d=r("TYdL"),m=r.n(d),y=[{id:"home",label:"Home",url:""},{id:"economics",label:"Economics",url:""}],b=function(e){var t=e.open;return a.a.createElement("div",{id:"sidebar",className:(t?"visible":"invisible")+" bg-white absolute h-screen w-full top-0 pt-20 z-40"},a.a.createElement("ul",{className:"text-center text-blue-dark font-semibold text-4xl pt-20"},y.map((function(e){return a.a.createElement("li",{className:"p-4"},e.label)}))))},h=function(){var e=Object(n.useState)(!1),t=e[0],r=(e[1],Object(n.useState)(0)),i=r[0],o=r[1],c=function(){return o(window.pageYOffset)};return Object(n.useEffect)((function(){return window.addEventListener("scroll",c),function(){window.removeEventListener("scroll",c)}})),a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"fixed pr-6 pl-6 pt-2 pb-2 h-20 w-full flex items-center z-50  "+(i>0?"shadow bg-white":"bg-transparent")},a.a.createElement(p.Link,{to:"/",className:"h-full min-w-max mr-auto"},a.a.createElement("img",{src:m.a,alt:"exorde logo",className:"h-full"}))),a.a.createElement(b,{open:t}))},M=r("qhky"),g=r("YwZP"),T=function(e){var t=e.title,r=e.description,n=e.image,i=e.locale,o=Object(g.useLocation)().pathname,u=Object(p.useStaticQuery)(w).site.siteMetadata,l=u.defaultTitle,s=u.titleTemplate,f=u.defaultDescription,d=u.siteUrl,m=u.defaultImage,y=u.twitterUsername,b={title:t||l,description:r||f,image:""+d+(n||m),url:""+d+o};return a.a.createElement(M.a,{title:b.title,titleTemplate:s},a.a.createElement("meta",{name:"description",content:b.description}),a.a.createElement("meta",{name:"image",content:b.image}),b.url&&a.a.createElement("meta",{property:"og:url",content:b.url}),b.title&&a.a.createElement("meta",{property:"og:title",content:b.title}),b.description&&a.a.createElement("meta",{property:"og:description",content:b.description}),b.image&&a.a.createElement("meta",{property:"og:image",content:b.image}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:creator",content:i&&c.twitter[i]?c.twitter[i]:y}),b.title&&a.a.createElement("meta",{name:"twitter:title",content:b.title}),b.description&&a.a.createElement("meta",{name:"twitter:description",content:b.description}),b.image&&a.a.createElement("meta",{name:"twitter:image",content:b.image}))},w="4202924991";t.default=function(e){var t=e.data,r=e.pageContext.locale;return a.a.createElement("div",{className:"relative overflow-hidden"},a.a.createElement(T,{title:t.mdx.frontmatter.metadata.title,description:t.mdx.frontmatter.metadata.description,image:t.mdx.frontmatter.metadata.image.publicURL,locale:r}),a.a.createElement(h,null),a.a.createElement(i.MDXRenderer,{frontmatter:t.mdx.frontmatter},t.mdx.body),a.a.createElement(f,{locale:r}))}},"A2+M":function(e,t,r){var n=r("X8hv");e.exports={MDXRenderer:n}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,r){var n=r("WkPL");e.exports=function(e){if(Array.isArray(e))return n(e)}},RIqP:function(e,t,r){var n=r("Ijbi"),a=r("EbDI"),i=r("ZhPi"),o=r("Bnag");e.exports=function(e){return n(e)||a(e)||i(e)||o()}},SksO:function(e,t){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(t,n)}e.exports=r},TYdL:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MzYuMjQgMTEyOC4yOSI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiNjNmM4ZDk7fS5jbHMtMntmaWxsOiM3Mzg2YjM7fS5jbHMtM3tmaWxsOiMzNTM2NzM7fS5jbHMtNHtmaWxsOiMyZDI2NTk7fS5jbHMtNXtmb250LXNpemU6MTc4LjMycHg7ZmlsbDojMWQxZDFiO2ZvbnQtZmFtaWx5OklrYXJvcy1SZWd1bGFyLCBJa2Fyb3MgU2Fuczt9LmNscy02e2xldHRlci1zcGFjaW5nOi0wLjA0ZW07fS5jbHMtN3tsZXR0ZXItc3BhY2luZzotMC4wNWVtO30uY2xzLTh7bGV0dGVyLXNwYWNpbmc6LTAuMDRlbTt9LmNscy05e2xldHRlci1zcGFjaW5nOjBlbTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkZpY2hpZXIgMTE8L3RpdGxlPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkNhbHF1ZV8xLTIiIGRhdGEtbmFtZT0iQ2FscXVlIDEiPjxnIGlkPSJsb2dvcyI+PHBvbHlnb24gY2xhc3M9ImNscy0xIiBwb2ludHM9IjE3LjkyIDU5Mi45NSAzMTguMTIgNTE5Ljg3IDMxOC4xMiAwIDE3LjkyIDU5Mi45NSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIzMTguMTIgMCAzMTguMTIgNTE5Ljg3IDYxOC4zMiA1OTIuOTUgMzE4LjEyIDAiLz48cG9seWdvbiBjbGFzcz0iY2xzLTMiIHBvaW50cz0iMTcuOTIgNjEyLjYyIDMxOC4xMiA3NDcuODMgMzE4LjEyIDUzOS41NCAxNy45MiA2MTIuNjIiLz48cG9seWdvbiBjbGFzcz0iY2xzLTQiIHBvaW50cz0iNjE4LjMyIDYxMi42MiAzMTguMTIgNzQ3LjgzIDMxOC4xMiA1MzkuNTQgNjE4LjMyIDYxMi42MiIvPjxwYXRoIGNsYXNzPSJjbHMtNCIgZD0iTTc3LDM0OC44NHMtNjEuNjEsMzUuMjQtMzguNDcsNTYuNGMyMS4zOSwxOS41NiwxMTAuMywzNy4xMSwyNTEuMjkuMjcsMjAzLjkzLTUzLjI4LDI3My45LTEyMS4xMywyOTEuMzctMTQ4LjE0cy0xMDItMTYtMTAyLTE2bC0xLjA2LDIuMjFzMTAxLTUuNjUsOTIsNy44OGMtMzIsNDguMTktMTk1LjQ0LDEwOC41Ni0yNzMuMzksMTMzLjA3LTc4Ljc1LDI0Ljc3LTE3Ny41MywzMy4xMS0yMjAuMywyNC44LTQxLjYzLTguMDgtMjUuMS0yOS43Ni0xNi4yLTM5LjQ0LDguNzQtOS41MSwxNy41My0xOSwxNy41My0xOVoiLz48dGV4dCBjbGFzcz0iY2xzLTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgOTU2LjIxKSI+PHRzcGFuIGNsYXNzPSJjbHMtNiI+RTwvdHNwYW4+PHRzcGFuIHg9Ijg1Ljk1IiB5PSIwIj5YTzwvdHNwYW4+PHRzcGFuIGNsYXNzPSJjbHMtNyIgeD0iMzMxLjQ5IiB5PSIwIj5SPC90c3Bhbj48dHNwYW4gY2xhc3M9ImNscy04IiB4PSI0MzUuNjMiIHk9IjAiPkQ8L3RzcGFuPjx0c3BhbiBjbGFzcz0iY2xzLTkiIHg9IjU0My41MiIgeT0iMCI+RTwvdHNwYW4+PC90ZXh0PjwvZz48L2c+PC9nPjwvc3ZnPg=="},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}},X8hv:function(e,t,r){var n=r("sXyB"),a=r("RIqP"),i=r("lSNA"),o=r("8OQS");function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=r("q1tI"),s=r("7ljp").mdx,f=r("BfwJ").useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,i=o(e,["scope","children"]),c=f(t),p=l.useMemo((function(){if(!r)return null;var e=u({React:l,mdx:s},c),t=Object.keys(e),i=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(a(t),[""+r])).apply(void 0,[{}].concat(a(i)))}),[r,t]);return l.createElement(p,u({},i))}},ZhPi:function(e,t,r){var n=r("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}},b48C:function(e,t){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}},bmMU:function(e,t){var r="undefined"!=typeof Element,n="function"==typeof Map,a="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,u,l,s;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(u=c;0!=u--;)if(!e(t[u],o[u]))return!1;return!0}if(n&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;for(s=t.entries();!(u=s.next()).done;)if(!e(u.value[1],o.get(u.value[0])))return!1;return!0}if(a&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(s=t.entries();!(u=s.next()).done;)if(!o.has(u.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(u=c;0!=u--;)if(t[u]!==o[u])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(l=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(o,l[u]))return!1;if(r&&t instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!t.$$typeof)&&!e(t[l[u]],o[l[u]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},kLJV:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDkuMTcgMTM1Ljk4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2M2YzhkOTt9LmNscy0ye2ZpbGw6IzczODZiMzt9LmNscy0ze2ZpbGw6IzM1MzY3Mzt9LmNscy00e2ZpbGw6IzJkMjY1OTt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPkZpY2hpZXIgMTI8L3RpdGxlPjxnIGlkPSJDYWxxdWVfMiIgZGF0YS1uYW1lPSJDYWxxdWUgMiI+PGcgaWQ9IkNhbHF1ZV8xLTIiIGRhdGEtbmFtZT0iQ2FscXVlIDEiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIwIDEwNy44MiA1NC41OSA5NC41MyA1NC41OSAwIDAgMTA3LjgyIi8+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjU0LjU5IDAgNTQuNTkgOTQuNTMgMTA5LjE3IDEwNy44MiA1NC41OSAwIi8+PHBvbHlnb24gY2xhc3M9ImNscy0zIiBwb2ludHM9IjAgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAwIDExMS4zOSIvPjxwb2x5Z29uIGNsYXNzPSJjbHMtNCIgcG9pbnRzPSIxMDkuMTcgMTExLjM5IDU0LjU5IDEzNS45OCA1NC41OSA5OC4xMSAxMDkuMTcgMTExLjM5Ii8+PHBhdGggY2xhc3M9ImNscy00IiBkPSJNMTAuNzQsNjMuNDNzLTExLjIsNi40MS03LDEwLjI1YzMuODksMy41NiwyMC4wNiw2Ljc1LDQ1LjY5LDAsMzcuMDgtOS42OSw0OS44LTIyLDUzLTI2Ljk0cy0xOC41NC0yLjkxLTE4LjU0LTIuOTFsLS4xOS40czE4LjM3LTEsMTYuNzMsMS40M2MtNS44Miw4Ljc2LTM1LjU0LDE5Ljc0LTQ5LjcxLDI0LjJzLTMyLjI4LDYtNDAuMDYsNC41MUMzLjA4LDczLDYuMDksNjksNy43LDY3LjI2bDMuMTktMy40NVoiLz48L2c+PC9nPjwvc3ZnPg=="},lSNA:function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return ye}));r("E9XD");var n,a,i,o,c=r("17x9"),u=r.n(c),l=r("8+s/"),s=r.n(l),f=r("bmMU"),p=r.n(f),d=r("q1tI"),m=r.n(d),y=r("YVoz"),b=r.n(y),h="bodyAttributes",M="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),j="cssText",v="href",x="http-equiv",E="innerHTML",I="itemprop",L="name",O="property",N="rel",S="src",A="target",C={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",z="defer",k="encodeSpecialCharacters",D="onChangeClientState",Y="titleTemplate",H=Object.keys(C).reduce((function(e,t){return e[C[t]]=t,e}),{}),R=[T.NOSCRIPT,T.SCRIPT,T.STYLE],G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},_=function(e){var t=K(e,T.TITLE),r=K(e,Y);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=K(e,P);return t||n||void 0},Q=function(e){return K(e,D)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},q=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var i=n[a].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},V=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+G(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||r===N&&"canonical"===e[r].toLowerCase()||u===N&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==E&&c!==j&&c!==I||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o++){var c=i[o],u=b()({},n[c],a[c]);n[c]=u}return e}),[]).reverse()},K=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,ie=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,n),ue(T.HTML,a),ce(f,p);var d={baseTag:le(T.BASE,r),linkTags:le(T.LINK,i),metaTags:le(T.META,o),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},m={},y={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(y[e]=d[e].oldTags)})),t&&t(),u(e,m,y)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ue(T.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==o.join(",")&&r.setAttribute("data-react-helmet",o.join(","))}},le=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===E)r.innerHTML=t.innerHTML;else if(n===j)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return o=t,r.isEqualNode(e)}))?a.splice(o,1):i.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[C[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[m.a.createElement(T.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),i=oe(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+X(i,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+X(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case h:case M:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=C[e]||e;if(r===E||r===j){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===E||e===j)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+X(n[t],r)+'"';return e?e+" "+a:a}),""),i=n.innerHTML||n.cssText||"",o=-1===R.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,n),bodyAttributes:pe(h,r,n),htmlAttributes:pe(M,a,n),link:pe(T.LINK,i,n),meta:pe(T.META,o,n),noscript:pe(T.NOSCRIPT,c,n),script:pe(T.SCRIPT,u,n),style:pe(T.STYLE,l,n),title:pe(T.TITLE,{title:f,titleAttributes:p},n)}},me=s()((function(e){return{baseTag:q([v,A],e),bodyAttributes:J(h,e),defer:K(e,z),encode:K(e,k),htmlAttributes:J(M,e),linkTags:V(T.LINK,[N,v],e),metaTags:V(T.META,[L,w,x,O,I],e),noscriptTags:V(T.NOSCRIPT,[E],e),onChangeClientState:Q(e),scriptTags:V(T.SCRIPT,[S,E],e),styleTags:V(T.STYLE,[j],e),title:_(e),titleAttributes:J(g,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){ie(e,(function(){ae=null}))})):(ie(e),ae=null)}),de)((function(){return null})),ye=(a=me,o=i=function(e){function t(){return Z(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,i=e.nestedChildren;return W({},n,((t={})[r.type]=[].concat(n[r.type]||[],[W({},a,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(n.type){case T.TITLE:return W({},a,((t={})[n.type]=o,t.titleAttributes=W({},i),t));case T.BODY:return W({},a,{bodyAttributes:W({},i)});case T.HTML:return W({},a,{htmlAttributes:W({},i)})}return W({},a,((r={})[n.type]=W({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=W({},t);return Object.keys(e).forEach((function(t){var n;r=W({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[H[r]||r]=e[r],t}),t)}(B(a,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=B(e,["children"]),n=W({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(a,n)},U(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),i.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=a.peek,i.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);ye.renderStatic=ye.rewind}).call(this,r("yLpj"))},sXyB:function(e,t,r){var n=r("SksO"),a=r("b48C");function i(t,r,o){return a()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,r){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return r&&n(i,r.prototype),i},i.apply(null,arguments)}e.exports=i}}]);
//# sourceMappingURL=component---src-components-layout-tsx-05ff2481056bcdcc7071.js.map