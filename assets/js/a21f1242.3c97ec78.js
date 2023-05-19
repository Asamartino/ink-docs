"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8447],{3905:(t,n,e)=>{e.d(n,{Zo:()=>f,kt:()=>m});var i=e(7294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,i,o=function(t,n){if(null==t)return{};var e,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var c=i.createContext({}),l=function(t){var n=i.useContext(c),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},f=function(t){var n=l(t.components);return i.createElement(c.Provider,{value:n},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(t,n){var e=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,f=s(t,["components","mdxType","originalType","parentName"]),d=l(e),p=o,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return e?i.createElement(m,a(a({ref:n},f),{},{components:e})):i.createElement(m,a({ref:n},f))}));function m(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var r=e.length,a=new Array(r);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=t,s[d]="string"==typeof t?t:o,a[1]=s;for(var l=2;l<r;l++)a[l]=e[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,e)}p.displayName="MDXCreateElement"},2472:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=e(7462),o=(e(7294),e(3905));const r={title:"Getting Started",slug:"/frontend/notifications",description:"Add notifications for transaction state changes."},a="Notifications",s={unversionedId:"frontend/notifications/getting-started",id:"frontend/notifications/getting-started",title:"Getting Started",description:"Add notifications for transaction state changes.",source:"@site/docs/frontend/notifications/getting-started.mdx",sourceDirName:"frontend/notifications",slug:"/frontend/notifications",permalink:"/frontend/notifications",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/notifications/getting-started.mdx",tags:[],version:"current",frontMatter:{title:"Getting Started",slug:"/frontend/notifications",description:"Add notifications for transaction state changes."},sidebar:"reference",previous:{title:"ChainId",permalink:"/frontend/chains/chain-id"},next:{title:"Configuration",permalink:"/frontend/notifications/configuration"}},c={},l=[{value:"Installation",id:"installation",level:2},{value:"Configure tsconfig.json",id:"configure-tsconfigjson",level:2},{value:"Add NotificationsProvider",id:"add-notificationsprovider",level:2},{value:"Configuring Notifications",id:"configuring-notifications",level:2}],f={toc:l},d="wrapper";function u(t){let{components:n,...e}=t;return(0,o.kt)(d,(0,i.Z)({},f,e,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"notifications"},"Notifications"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useink/notifications")," is an extension of ",(0,o.kt)("inlineCode",{parentName:"p"},"useink")," that provides an opinionated state\nmanagement system for tracking the changing status of a transaction. When you add a\nnotification it will live until the configured time to live has expired then will\nautomatically be removed from state. This is useful for temporarily displaying a\nnotification then having it removed in the view. ",(0,o.kt)("inlineCode",{parentName:"p"},"useink/notifications")," does not contain\nany UI elements. It only tracks state. You can use this in combination with UI libraries\nor components of your choice."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You must first ",(0,o.kt)("a",{parentName:"p",href:"/frontend/getting-started#installation"},"install useink"),".\n",(0,o.kt)("inlineCode",{parentName:"p"},"useink/notifications")," has its own import path in the"),(0,o.kt)("h2",{id:"configure-tsconfigjson"},"Configure tsconfig.json"),(0,o.kt)("p",null,"You must set ",(0,o.kt)("inlineCode",{parentName:"p"},"moduleResolution")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"nodenext"),". This feature allows your application to\ndiscover the ",(0,o.kt)("inlineCode",{parentName:"p"},"useink/notifications")," import paths defined in the ",(0,o.kt)("strong",{parentName:"p"},"useink")," ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "moduleResolution": "nodenext",\n  }\n}\n')),(0,o.kt)("h2",{id:"add-notificationsprovider"},"Add NotificationsProvider"),(0,o.kt)("p",null,"Notification state management is not in useink by default. You must wrap your application\nwith ",(0,o.kt)("inlineCode",{parentName:"p"},"<NotificationsProvider>"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { NotificationsProvider } from 'useink/notifications'\n\nconst FIVE_SECONDS = 5000\nconst HALF_A_SECOND = 500\n\nfunction App({ children }) {\n  return (\n    <NotificationsProvider config={{\n      expiration: FIVE_SECONDS, // default. This can be omitted\n      checkInterval: : HALF_A_SECOND, // default. This can be omitted\n    }}>\n      <MyRoutes />\n    </NotificationsProvider>\n  )\n}\n\nexport default App\n")),(0,o.kt)("h2",{id:"configuring-notifications"},"Configuring Notifications"),(0,o.kt)("p",null,"If you want Notifications to live in state for ever, or until you remove them you can set the"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { NotificationsProvider } from 'useink/notifications'\n\nconst FIVE_SECONDS = 5000\nconst HALF_A_SECOND = 500\n\nfunction App({ children }) {\n  return (\n    <NotificationsProvider config={{\n      expiration: FIVE_SECONDS, // default. This can be omitted\n      checkInterval: : HALF_A_SECOND, // default. This can be omitted\n    }}>\n      <MyRoutes />\n    </NotificationsProvider>\n  )\n}\n\nexport default App\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/frontend/notifications/configuration"},"configuration")," to learn about custom and default settings."))}u.isMDXComponent=!0}}]);