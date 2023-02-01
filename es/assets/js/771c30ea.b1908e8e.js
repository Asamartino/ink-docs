"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[862],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={title:"Funciones de Entorno",slug:"/basics/environment-functions"},o=void 0,l={unversionedId:"basics/env-functions",id:"version-4.0.0-alpha.1/basics/env-functions",title:"Funciones de Entorno",description:"ink! expone una serie de funciones de entorno.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/basics/env-functions.md",sourceDirName:"basics",slug:"/basics/environment-functions",permalink:"/es/4.0.0-alpha.1/basics/environment-functions",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/basics/env-functions.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"Funciones de Entorno",slug:"/basics/environment-functions"},sidebar:"reference",previous:{title:"Contratos Actualizables",permalink:"/es/4.0.0-alpha.1/basics/upgradeable-contracts"},next:{title:"Chain Environment Types",permalink:"/es/4.0.0-alpha.1/basics/chain-environment-types"}},s={},c=[],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"ink! expone una serie de funciones de entorno.\nPuedes encontrar una descripci\xf3n completa ",(0,r.kt)("a",{parentName:"p",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/#functions"},"aqu\xed"),"."),(0,r.kt)("p",null,"En ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]"),"  utiliza ",(0,r.kt)("inlineCode",{parentName:"p"},"Self::env()")," para acceder a esos,\nen ",(0,r.kt)("inlineCode",{parentName:"p"},"#[ink(message)]")," utiliza ",(0,r.kt)("inlineCode",{parentName:"p"},"self.env()"),".\nPor ejemplo ",(0,r.kt)("inlineCode",{parentName:"p"},"Self::env().caller()")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"self.env().caller()"),"."),(0,r.kt)("p",null,"Algunas funciones \xfatiles incluyen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.caller.html"},(0,r.kt)("inlineCode",{parentName:"a"},"caller()")),": Devuelve la direcci\xf3n de la persona que llama del contrato ejecutado."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.account_id.html"},(0,r.kt)("inlineCode",{parentName:"a"},"account_id()")),": Devuelve el account ID del contrato ejecutado."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.balance.html"},(0,r.kt)("inlineCode",{parentName:"a"},"balance()")),": Devuelve el balance del contrato ejecutado."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.block_number.html"},(0,r.kt)("inlineCode",{parentName:"a"},"block_number()")),": Devuelve el n\xfamero de bloque actual."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.emit_event.html"},(0,r.kt)("inlineCode",{parentName:"a"},"emit_event(\u2026)")),": Emite un evento con los datos del evento dado."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.transfer.html"},(0,r.kt)("inlineCode",{parentName:"a"},"transfer(\u2026)")),": Transfiere valor desde el contrato hasta el account ID del destino."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/fn.hash_bytes.html"},(0,r.kt)("inlineCode",{parentName:"a"},"hash_bytes(\u2026)")),": Realiza el hash criptogr\xe1fico de la entrada dada y almacena el resultado en la salida."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rs/ink_env/4.0.0-beta/ink_env/#functions"},"\u2026and many more"),".")))}u.isMDXComponent=!0}}]);