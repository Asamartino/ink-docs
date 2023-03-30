"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?o.createElement(m,c(c({ref:t},p),{},{components:n})):o.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={title:"Contracts on Rococo",hide_title:!0,slug:"/testnet"},c=void 0,i={unversionedId:"testnet/overview",id:"testnet/overview",title:"Contracts on Rococo",description:"Rococo is a testnet for",source:"@site/docs/testnet/overview.md",sourceDirName:"testnet",slug:"/testnet",permalink:"/testnet",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/testnet/overview.md",tags:[],version:"current",frontMatter:{title:"Contracts on Rococo",hide_title:!0,slug:"/testnet"},sidebar:"reference",previous:{title:"Kickstart your project!",permalink:"/inkubator-overview"},next:{title:"Faucet",permalink:"/faucet"}},s={},l=[{value:"What is the Contracts parachain?",id:"what-is-the-contracts-parachain",level:2},{value:"How can I use it?",id:"how-can-i-use-it",level:2},{value:"(1) Create an Account",id:"1-create-an-account",level:3},{value:"(2) Get Testnet Tokens",id:"2-get-testnet-tokens",level:3},{value:"(3) Deploy Your Contract",id:"3-deploy-your-contract",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("img",{src:"/img/title/testnet.svg",className:"titlePic"}),(0,a.kt)("h1",{id:"contracts-on-rococo"},"Contracts on Rococo"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/build-pdk#rococo-testnet"},"Rococo")," is a testnet for\nPolkadot and Kusama parachains.\nWe have a live testnet named Contracts as a parachain online there."),(0,a.kt)("img",{src:"/img/contracts-on-polkadot-js.png",alt:"Smart contracts parachain on Rococo"}),(0,a.kt)("h2",{id:"what-is-the-contracts-parachain"},"What is the Contracts parachain?"),(0,a.kt)("p",null,"It's a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate"},"Substrate")," parachain for smart\ncontracts. We configured it to use Substrate's smart contracts module \u2013 the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate/tree/master/frame/contracts"},(0,a.kt)("inlineCode",{parentName:"a"},"contracts")),"\npallet \u2013 in a default configuration."),(0,a.kt)("p",null,"The code for this parachain can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cumulus/tree/master/parachains/runtimes/contracts/contracts-rococo"},"in the ",(0,a.kt)("inlineCode",{parentName:"a"},"cumulus")," repository"),".\nOur parachain uses the Rococo relay chain's native token (",(0,a.kt)("inlineCode",{parentName:"p"},"ROC"),") instead of having its own token.\nDue to this you'll need ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC")," in order to deploy contracts on our testnet."),(0,a.kt)("h2",{id:"how-can-i-use-it"},"How can I use it?"),(0,a.kt)("h3",{id:"1-create-an-account"},"(1) Create an Account"),(0,a.kt)("p",null,"As a first step, you should create an account. This can be done via command-line\ntools (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"subxt"),") or via a wallet (e.g. with the ",(0,a.kt)("inlineCode",{parentName:"p"},"polkadot-js")," browser extension).\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-account-generation"},"here")," for a detailed guide."),(0,a.kt)("h3",{id:"2-get-testnet-tokens"},"(2) Get Testnet Tokens"),(0,a.kt)("img",{src:"/img/chest.svg",alt:"image of a treasure chest",className:"faucetHeroImage"}),(0,a.kt)("p",null,"As a second step, you have to get ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC")," testnet tokens through the ",(0,a.kt)("a",{parentName:"p",href:"/faucet"},"Rococo Faucet"),"."),(0,a.kt)("p",null,"Alternatively, you can use the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-tokens-on-the-rococo-testnet"},"Element chat room"),".\nYou must send a message like this (Note the ",(0,a.kt)("inlineCode",{parentName:"p"},":1002")," after the wallet address):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"!drip YOUR_SS_58_ADDRESS:1002\n")),(0,a.kt)("p",null,"The number ",(0,a.kt)("inlineCode",{parentName:"p"},"1002")," is the parachain ID of Contracts on Rococo, by supplying it you instruct the\nfaucet to teleport ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC")," tokens directly to your account on the parachain.\nIf you have some tokens on the Rococo relay chain, you can teleport them to the Contracts parachain on your own. Read more on teleporting assets ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-teleport"},"here"),"."),(0,a.kt)("p",null,"If everything worked out, the teleported ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC")," tokens will show up in your account.\nIn case you are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"polkadot-js")," frontend, you can see them under\n",(0,a.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/accounts"},'the "Accounts" tab for Contracts'),"."),(0,a.kt)("img",{src:"/img/roc-in-wallet.png",alt:"Rococo testnet tokens in wallet"}),(0,a.kt)("h3",{id:"3-deploy-your-contract"},"(3) Deploy Your Contract"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("inlineCode",{parentName:"p"},"ROC")," on Contracts you can deploy a contract ",(0,a.kt)("em",{parentName:"p"},"nearly")," as you would with\na local developer node.\nThe only difference is that you can't use pre-endowed accounts like ",(0,a.kt)("inlineCode",{parentName:"p"},"Alice")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Bob"),",\nyou have to use the one you generated instead."),(0,a.kt)("img",{src:"/img/deployment-acc.png",alt:"Deploy a smart contract on Rococo/Polkadot"}),(0,a.kt)("p",null,"You can also deploy your contract from the command-line via ",(0,a.kt)("inlineCode",{parentName:"p"},"cargo-contract"),".\nMake sure you are in the folder of your contract and that it has been\nbuilt recently. Then execute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'cargo contract upload --suri "your twelve or twenty-four words"\ncargo contract instantiate --suri \u2026 --constructor new --args true\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"new")," in this case would be a constructor method exposed by the contract,\n",(0,a.kt)("inlineCode",{parentName:"p"},"--args")," would be any arguments the constructor expects."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract/blob/master/docs/extrinsics.md#commands"},"the ",(0,a.kt)("inlineCode",{parentName:"a"},"cargo-contract")," docs"),"\nfor a more detailed documentation."))}d.isMDXComponent=!0}}]);