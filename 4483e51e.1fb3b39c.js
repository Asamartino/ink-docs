(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{111:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=o.a.createContext({}),p=function(t){var e=o.a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return o.a.createElement(s.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return o.a.createElement(o.a.Fragment,{},e)}},d=o.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||b[d]||r;return n?o.a.createElement(h,i(i({ref:e},s),{},{components:n})):o.a.createElement(h,i({ref:e},s))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:a,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},161:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/flipper-code-page-5a4372c716551ab9d83ce53b5566eaa0.png"},162:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/flipper-upload-events-b65f62297c5315c3b09855f5cd814fbe.png"},163:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/flipper-instance-events-0fafd9708b94eddcefc87f757fe37311.png"},74:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return l})),n.d(e,"default",(function(){return p}));var a=n(2),o=n(6),r=(n(0),n(111)),c={title:"Deploy Your Contract",slug:"/getting-started/deploy-your-contract"},i={unversionedId:"getting-started/deploying",id:"getting-started/deploying",isDocsHomePage:!1,title:"Deploy Your Contract",description:"Now that we have generated the Wasm binary from our source code and started a Canvas node, we want to deploy this contract onto our Substrate blockchain.",source:"@site/docs/getting-started/deploying.md",slug:"/getting-started/deploy-your-contract",permalink:"/ink-docs/getting-started/deploy-your-contract",editUrl:"https://github.com/ink-docs/edit/master/docs/getting-started/deploying.md",version:"current",sidebar:"reference",previous:{title:"Run a Substrate Node",permalink:"/ink-docs/getting-started/running-substrate"},next:{title:"Call Your Contract",permalink:"/ink-docs/getting-started/calling-your-contract"}},l=[{value:"Putting Your Code on the Blockchain",id:"putting-your-code-on-the-blockchain",children:[]}],s={rightToc:l};function p(t){var e=t.components,c=Object(o.a)(t,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,c,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Now that we have generated the Wasm binary from our source code and started a Canvas node, we want to deploy this contract onto our Substrate blockchain."),Object(r.b)("p",null,"Smart contract deployment on Substrate is a little different than on traditional smart contract blockchains."),Object(r.b)("p",null,"Whereas a completely new blob of smart contract source code is deployed each time you push a contract on other platforms, Substrate opts to optimize this behavior. For example, the standard ERC20 token has been deployed to Ethereum thousands of times, sometimes only with changes to the initial configuration (through the Solidity ",Object(r.b)("inlineCode",{parentName:"p"},"constructor")," function). Each of these instances take up space on the blockchain equivalent to the contract source code size, even though no code was actually changed."),Object(r.b)("p",null,"In Substrate, the contract deployment process is split into two halves:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Putting your code on the blockchain"),Object(r.b)("li",{parentName:"ol"},"Creating an instance of your contract")),Object(r.b)("p",null,"With this pattern, contract code like the ERC20 standard can be put on the blockchain a single time, but instantiated any number of times. No need to continually upload the same source code over and waste space on the blockchain."),Object(r.b)("h2",{id:"putting-your-code-on-the-blockchain"},"Putting Your Code on the Blockchain"),Object(r.b)("p",null,"Here we will upload the contract code and instantiate one copy of the contract on the blockchain:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Upload & Instantiate Contract")," button."),Object(r.b)("li",{parentName:"ul"},"Choose an ",Object(r.b)("strong",{parentName:"li"},"Instantiation account")," (e.g. ALICE)."),Object(r.b)("li",{parentName:"ul"},"Give the contract a descriptive ",Object(r.b)("strong",{parentName:"li"},"Name")," (e.g. Flipper Contract)."),Object(r.b)("li",{parentName:"ul"},"Drag the ",Object(r.b)("inlineCode",{parentName:"li"},"flipper.contract")," file that contains the bundled Wasm blob and metadata into the drag\n& drop area. You will see the UI parse the metadata and showing what functions the contract contains."),Object(r.b)("li",{parentName:"ul"},"Click the ",Object(r.b)("strong",{parentName:"li"},"Constructor Details"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"Contracts code page for deploying Flipper",src:n(161).default})),Object(r.b)("p",null,"Smart contracts exist as an extension of the account system on the blockchain. Thus creating an\ninstance of this contract will create a new ",Object(r.b)("inlineCode",{parentName:"p"},"AccountId")," which will store any balance managed by the\nsmart contract and allow us to interact with the contract."),Object(r.b)("p",null,"Now a screen displays the information that represents our smart contract. We are going to\ninstantiate a copy of the smart contract:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Give the contract instance a ",Object(r.b)("strong",{parentName:"li"},"Contract Name")," (e.g. The First Flipper)."),Object(r.b)("li",{parentName:"ul"},"Accept the default options for the contract ",Object(r.b)("strong",{parentName:"li"},"Instantiation Constructor"),"."),Object(r.b)("li",{parentName:"ul"},"Accept the default options ",Object(r.b)("strong",{parentName:"li"},"Endowment")," of ",Object(r.b)("inlineCode",{parentName:"li"},"1000 Units")," to pay the storage rent, and ",Object(r.b)("strong",{parentName:"li"},"Max Gas Allowed")," of ",Object(r.b)("inlineCode",{parentName:"li"},"200000"),"."),Object(r.b)("li",{parentName:"ul"},"Click on ",Object(r.b)("inlineCode",{parentName:"li"},"Instantiate"))),Object(r.b)("p",null,Object(r.b)("img",{alt:"An image of events from Flipper code upload",src:n(162).default})),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," As mentioned earlier, contract creation involves creation of a new account. As such, you\nmust be sure to give the contract account at least the existential deposit defined by your\nblockchain. We also need to be able to pay the contract's rent (endowment). If we consume all of\nthis deposit, the contract will become a tombstone. We can always refill the contract's balance and\nkeep it on chain.")),Object(r.b)("p",null,"When you click ",Object(r.b)("strong",{parentName:"p"},"Instantiate"),", and in the next confirmation screen ",Object(r.b)("strong",{parentName:"p"},"Sign & Submit"),", you should see\nthe extrinsic ",Object(r.b)("inlineCode",{parentName:"p"},"contracts.instantiateWithCode")," is called, and a flurry of events appear including the\ncreation of a new account (",Object(r.b)("inlineCode",{parentName:"p"},"system.NewAccount"),") and the instantiation of the contract\n(",Object(r.b)("inlineCode",{parentName:"p"},"contracts.Instantiated"),"):"),Object(r.b)("p",null,Object(r.b)("img",{alt:"An image of events from instantiation of Flipper",src:n(163).default})))}p.isMDXComponent=!0}}]);