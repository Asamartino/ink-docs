"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(o,".").concat(d)]||m[d]||c[d]||s;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={title:"#[ink(message)]",slug:"/macros-attributes/message"},i=void 0,l={unversionedId:"macros-attributes/message",id:"macros-attributes/message",title:"#[ink(message)]",description:"Applicable to methods.",source:"@site/docs/macros-attributes/message.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/message",permalink:"/macros-attributes/message",draft:!1,editUrl:"https://github.com/ink-docs/edit/master/docs/macros-attributes/message.md",tags:[],version:"current",frontMatter:{title:"#[ink(message)]",slug:"/macros-attributes/message"},sidebar:"reference",previous:{title:"#[ink(impl)]",permalink:"/macros-attributes/impl"},next:{title:'#[ink(namespace = "\u2026")]',permalink:"/macros-attributes/namespace"}},o={},p=[{value:"Messages Return Value",id:"messages-return-value",level:2},{value:"Example",id:"example",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Applicable to methods."),(0,r.kt)("p",null,"Flags a method for the ink! storage struct as message making it available to the API for calling the contract. "),(0,r.kt)("p",null,"Note that all public functions must use the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," attribute"),(0,r.kt)("p",null,"There must be at least one ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," defined method."),(0,r.kt)("p",null,"Methods flagged with ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," are special in that they are dispatchable\nupon contract invocation. The set of ink! messages defined for an ink! smart contract\ndefine its API surface with which users are allowed to interact."),(0,r.kt)("p",null,"An ink! smart contract can have multiple such ink! messages defined."),(0,r.kt)("p",null,"An ink! message with a ",(0,r.kt)("inlineCode",{parentName:"p"},"&self")," receiver may only read state whereas an ink! message\nwith a ",(0,r.kt)("inlineCode",{parentName:"p"},"&mut self")," receiver may mutate the contract's storage."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(message)]\npub fn purely_reading(&self, from: AccountId) {\n    // actual implementation\n}\n\n#[ink(message)]\npub fn mutates_storage(&mut self, from: AccountId) {\n    // actual implementation\n}\n")),(0,r.kt)("h2",{id:"messages-return-value"},"Messages Return Value"),(0,r.kt)("p",null,"The return value of a message needs to implement ",(0,r.kt)("inlineCode",{parentName:"p"},"scale::Encode"),"."),(0,r.kt)("p",null,"It is notable that the collections under ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_storage")," \u2012 such as e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"HashMap")," \u2012\ndon't implement ",(0,r.kt)("inlineCode",{parentName:"p"},"scale::Encode"),". This means you can't just return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Vec")," from an ink! message.\nThis restriction is intentional \u2012 returning a complete data structure with a potentially unbounded\ncontent is an anti-pattern for smart contracts. Just think about the unpredicatble gas costs."),(0,r.kt)("p",null,"If you ",(0,r.kt)("em",{parentName:"p"},"really really")," need to return a data structure in its entirety then use the ones from\n",(0,r.kt)("inlineCode",{parentName:"p"},"ink_prelude")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ink_prelude::vec::Vec"),"). Those implement ",(0,r.kt)("inlineCode",{parentName:"p"},"scale::Encode"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Given the ",(0,r.kt)("inlineCode",{parentName:"p"},"Flipper")," contract definition above we add some ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," definitions\nas follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message)]\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n")))}c.isMDXComponent=!0}}]);