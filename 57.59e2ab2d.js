(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{108:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(110),c=n(113),l=n(21),i=n(142),s=n(2),u=n(6),p=n(112),m=n(111),y=n(136),d=n(128),f=n(133),b=n(134),h=n(135),g=n(132),v=n(117),k=n(120),j=n(58),O=n.n(j);var E=function e(t,n){return"link"===t.type?Object(y.a)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function N(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,y=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),d=c.items,f=c.label,b=E(c,m),h=(n=b,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!b&&c.collapsed)})),v=g[0],k=g[1];Object(a.useEffect)((function(){b&&!h&&v&&k(!1)}),[b,h,v]);var j=Object(a.useCallback)((function(e){e.preventDefault(),k((function(e){return!e}))}),[k]);return 0===d.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&b},t[O.a.menuLinkText]=!i,t)),onClick:i?j:void 0,href:i?"#!":void 0},y),f),r.a.createElement("ul",{className:"menu__list"},d.map((function(e){return r.a.createElement(x,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:m})}))))}function C(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),c=t.href,l=t.label,i=E(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(v.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:c},Object(k.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function x(e){switch(e.item.type){case"category":return r.a.createElement(N,e);case"link":default:return r.a.createElement(C,e)}}var w=function(e){var t,n,o=e.path,l=e.sidebar,i=e.sidebarCollapsible,u=void 0===i||i,y=Object(a.useState)(!1),k=y[0],j=y[1],E=Object(m.a)().navbar,N=E.title,C=E.hideOnScroll,w=Object(c.a)().isClient,P=Object(h.a)(),T=P.logoLink,_=P.logoLinkProps,S=P.logoImageUrl,I=P.logoAlt,D=Object(d.a)().isAnnouncementBarClosed,L=Object(g.a)().scrollY;Object(f.a)(k);var M=Object(b.a)();return Object(a.useEffect)((function(){M===b.b.desktop&&j(!1)}),[M]),r.a.createElement("div",{className:Object(p.a)(O.a.sidebar,(t={},t[O.a.sidebarWithHideableNavbar]=C,t))},C&&r.a.createElement(v.a,Object(s.a)({tabIndex:-1,className:O.a.sidebarLogo,to:T},_),null!=S&&r.a.createElement("img",{key:w,src:S,alt:I}),null!=N&&r.a.createElement("strong",null,N)),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive",O.a.menu,(n={"menu--show":k},n[O.a.menuWithAnnouncementBar]=!D&&0===L,n))},r.a.createElement("button",{"aria-label":k?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!k)}},k?r.a.createElement("span",{className:Object(p.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:O.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(x,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:u,activePath:o})})))))},P={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},T={Prism:n(19).a,theme:P};function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var I=/\r\n|\r|\n/,D=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},L=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},M=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=S({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=S({},n,{backgroundColor:null}),r};function B(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var A=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),_(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?M(e.theme,e.language):void 0;return t.themeDict=n})),_(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=S({},B(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?S({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),_(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),_(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=S({},B(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?S({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),_(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=L(u,p.type),p.alias&&(u=L(u,p.alias)),s=p.content),"string"==typeof s){var m=s.split(I),y=m.length;l.push({types:u,content:m[0]});for(var d=1;d<y;d++)D(l),i.push(l=[]),l.push({types:u,content:m[d]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return D(l),i}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),R=n(158),z=n.n(R),W=n(159),F=n.n(W),$={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},J=n(123),H=function(){var e=Object(m.a)().prism,t=Object(J.a)().isDarkTheme,n=e.theme||$,a=e.darkTheme||n;return t?a:n},U=n(59),X=n.n(U),Y=/{([\d,-]+)}/,q=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},G=/title=".*"/,K=function(e){var t=e.children,n=e.className,o=e.metastring,c=Object(m.a)().prism,l=Object(a.useState)(!1),i=l[0],u=l[1],y=Object(a.useState)(!1),d=y[0],f=y[1];Object(a.useEffect)((function(){f(!0)}),[]);var b=Object(a.useRef)(null),h=[],g="",v=H();if(o&&Y.test(o)){var k=o.match(Y)[1];h=F.a.parse(k).filter((function(e){return e>0}))}o&&G.test(o)&&(g=o.match(G)[0].split("title=")[1].replace(/"+/g,""));var j=n&&n.replace(/language-/,"");!j&&c.defaultLanguage&&(j=c.defaultLanguage);var O=t.replace(/\n$/,"");if(0===h.length&&void 0!==j){for(var E,N="",C=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return q(["js","jsBlock"]);case"jsx":case"tsx":return q(["js","jsBlock","jsx"]);case"html":return q(["js","jsBlock","html"]);case"python":case"py":return q(["python"]);default:return q()}}(j),x=t.replace(/\n$/,"").split("\n"),w=0;w<x.length;){var P=w+1,_=x[w].match(C);if(null!==_){switch(_.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=P+",";break;case"highlight-start":E=P;break;case"highlight-end":N+=E+"-"+(P-1)+","}x.splice(w,1)}else w+=1}h=F.a.parse(N),O=x.join("\n")}var S=function(){z()(O),u(!0),setTimeout((function(){return u(!1)}),2e3)};return r.a.createElement(A,Object(s.a)({},T,{key:String(d),theme:v,code:O,language:j}),(function(e){var t,n,a=e.className,o=e.style,c=e.tokens,l=e.getLineProps,u=e.getTokenProps;return r.a.createElement(r.a.Fragment,null,g&&r.a.createElement("div",{style:o,className:X.a.codeBlockTitle},g),r.a.createElement("div",{className:X.a.codeBlockContent},r.a.createElement("button",{tabIndex:0,ref:b,type:"button","aria-label":"Copy code to clipboard",className:Object(p.a)(X.a.copyButton,(t={},t[X.a.copyButtonWithTitle]=g,t)),onClick:S},i?"Copied":"Copy"),r.a.createElement("div",{className:Object(p.a)(a,X.a.codeBlock,(n={},n[X.a.codeBlockWithTitle]=g,n))},r.a.createElement("div",{className:X.a.codeBlockLines,style:o},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return h.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},n),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},u({token:e,key:t})))})))}))))))}))},Q=(n(60),n(61)),V=n.n(Q),Z=function(e){return function(t){var n,a=t.id,o=Object(u.a)(t,["id"]),c=Object(m.a)().navbar.hideOnScroll;return a?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(p.a)("anchor",(n={},n[V.a.enhancedAnchor]=!c,n)),id:a}),o.children,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):r.a.createElement(e,o)}},ee=n(62),te=n.n(ee),ne={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(K,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(v.a,e)},pre:function(e){return r.a.createElement("div",Object(s.a)({className:te.a.mdxCodeBlock},e))},h1:Z("h1"),h2:Z("h2"),h3:Z("h3"),h4:Z("h4"),h5:Z("h5"),h6:Z("h6")},ae=n(144),re=n(119),oe=n(63),ce=n.n(oe),le=n(137);function ie(e){var t,n,a=e.currentDocRoute,l=e.versionMetadata,s=e.children,u=Object(c.a)(),p=u.siteConfig,m=u.isClient,y=l.pluginId,d=l.permalinkToSidebar,f=l.docsSidebars,b=l.version,h=d[a.path],g=f[h];return r.a.createElement(i.a,{key:m,searchMetadatas:{version:b,tag:Object(le.b)(y,b)}},r.a.createElement("div",{className:ce.a.docPage},g&&r.a.createElement("div",{className:ce.a.docSidebarContainer,role:"complementary"},r.a.createElement(w,{key:h,sidebar:g,path:a.path,sidebarCollapsible:null===(t=null===(n=p.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:ce.a.docMainContainer},r.a.createElement(o.a,{components:ne},s))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(re.matchPath)(a.pathname,e)}));return o?r.a.createElement(ie,{currentDocRoute:o,versionMetadata:n},Object(l.a)(t)):r.a.createElement(ae.default,e)}},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},y=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),y=a,d=p["".concat(c,".").concat(y)]||p[y]||m[y]||o;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},159:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],c=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=c);for(var l=n;l!=r;l+=c)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);