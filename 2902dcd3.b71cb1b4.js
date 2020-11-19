(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(f,c(c({ref:t},s),{},{components:n})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),a=(n(0),n(107)),i={title:"Opting out of Storage",slug:"/datastructures/opting-out"},c={unversionedId:"datastructures/opting-out",id:"datastructures/opting-out",isDocsHomePage:!1,title:"Opting out of Storage",description:"Opting-out of Storage",source:"@site/docs/datastructures/opting-out.md",slug:"/datastructures/opting-out",permalink:"/ink-docs/datastructures/opting-out",editUrl:"https://github.com/ink-docs/edit/master/docs/datastructures/opting-out.md",version:"current",sidebar:"reference",previous:{title:"Spread & Packed",permalink:"/ink-docs/datastructures/spread-packed-layout"},next:{title:"Dynamic Allocation",permalink:"/ink-docs/datastructures/dynamic-allocation"}},u=[{value:"Opting-out of Storage",id:"opting-out-of-storage",children:[]}],s={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"opting-out-of-storage"},"Opting-out of Storage"),Object(a.b)("p",null,"If you are in need of storing some temporary information across method and message boundaries ink! will have your back with the ",Object(a.b)("inlineCode",{parentName:"p"},"ink_storage::Memory")," abstraction. It allows you to simply opt-out of using the storage for the wrapped entity at all and thus is very similar to Solidity's very own ",Object(a.b)("inlineCode",{parentName:"p"},"memory")," annotation."),Object(a.b)("p",null,"An example below:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"#[ink(storage)]\npub struct OptedOut {\n    a: i32,\n    b: ink_storage::Lazy<i32>,\n    c: ink_storage::Memory<i32>,\n}\n")),Object(a.b)("p",null,"The the above example ",Object(a.b)("inlineCode",{parentName:"p"},"a")," and ",Object(a.b)("inlineCode",{parentName:"p"},"b")," are normal storage entities, however, ",Object(a.b)("inlineCode",{parentName:"p"},"c")," on the other hand side will never load from or store to contract storage and will always be reset to the default value of its ",Object(a.b)("inlineCode",{parentName:"p"},"i32")," type for every contract call.\nIt can be accesses from all ink! messages or methods via ",Object(a.b)("inlineCode",{parentName:"p"},"self.c")," but will never manipulate the contract storage and thus acts wonderfully as some shared local information."))}l.isMDXComponent=!0}}]);