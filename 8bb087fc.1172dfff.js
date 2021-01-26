(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{110:function(t,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return h}));var r=n(0),a=n.n(r);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){c(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=a.a.createContext({}),u=function(t){var e=a.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.a.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return a.a.createElement(a.a.Fragment,{},e)}},d=a.a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,c=t.originalType,o=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||c;return n?a.a.createElement(h,i(i({ref:e},l),{},{components:n})):a.a.createElement(h,i({ref:e},l))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},87:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return u}));var r=n(2),a=n(6),c=(n(0),n(110)),o={title:"Cross-Contract Calling",slug:"/basics/cross-contract-calling"},i={unversionedId:"basics/cross-contract-calling",id:"basics/cross-contract-calling",isDocsHomePage:!1,title:"Cross-Contract Calling",description:"In ink! contracts it is possible to call ink! messages and ink! constructors. So ink! constructors allow",source:"@site/docs/basics/cross-contract-calling.md",slug:"/basics/cross-contract-calling",permalink:"/ink-docs/basics/cross-contract-calling",editUrl:"https://github.com/ink-docs/edit/master/docs/basics/cross-contract-calling.md",version:"current",sidebar:"reference",previous:{title:"Trait Definitions",permalink:"/ink-docs/basics/trait-definitions"},next:{title:"Contract Testing",permalink:"/ink-docs/basics/contract-testing"}},s=[{value:"How it Works",id:"how-it-works",children:[]}],l={rightToc:s};function u(t){var e=t.components,n=Object(a.a)(t,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In ink! contracts it is possible to call ink! messages and ink! constructors. So ink! constructors allow\ndelegation and ink! messages can easily call other ink! messages.\nGiven another ink! contract like, we can call any of its functions."),Object(c.b)("p",null,"See our ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/paritytech/ink/blob/master/examples/delegator/lib.rs"}),Object(c.b)("inlineCode",{parentName:"a"},"delegator example contract")),"\nfor an elaborate example which uses cross-contract calling."),Object(c.b)("h3",{id:"how-it-works"},"How it Works"),Object(c.b)("p",null,"In order to deploy the delegator smart contract we first\nhave to manually put the code of the other contract, receive\nits code hash from the signalled event and put their code hash\ninto our calling smart contract."),Object(c.b)("p",null,"The calling contract looks like this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),'use ink_storage::Lazy;\nuse other_contract::OtherContract;\n\n//--snip--\n#[ink(storage)]\nstruct MyContract {\n    /// The other contract.\n    other_contract: Lazy<OtherContract>,\n}\n\nimpl MyContract {\n    /// Instantiate `MyContract with the given\n    /// sub-contract codes and some initial value.\n    #[ink(constructor)]\n    pub fn new(\n        other_contract_code_hash: Hash,\n    ) -> Self {\n        let other_contract = OtherContract::new(1337)\n            .endowment(total_balance / 4)\n            .code_hash(other_contract_code_hash)\n            .instantiate()\n            .expect("failed at instantiating the `OtherContract` contract");\n        Self {\n            other_contract\n        }\n    }\n\n    /// Calls the other contract.\n    #[ink(message)]\n    pub fn call_other_contract(&self) -> i32 {\n        self.other_contract.get_value()\n    }\n}\n//--snip--\n')),Object(c.b)("p",null,"It's ",Object(c.b)("inlineCode",{parentName:"p"},"Cargo.toml")," contains"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-toml"}),'other_contract = { path = "other_contract", default-features = false, features = ["ink-as-dependency"] }\n')),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"other_contract/Cargo.toml")," contains this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-toml"}),"[features]\nink-as-dependency = []\n")),Object(c.b)("p",null,"Tells the ink! code generator to ",Object(c.b)("strong",{parentName:"p"},"always")," or ",Object(c.b)("strong",{parentName:"p"},"never"),"\ncompile the smart contract as if it was used as a dependency of another ink!\nsmart contract."),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"other_contract/lib.rs"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"#[ink::contract]\npub mod other_contract {\n    /// Storage for the other contract.\n    #[ink(storage)]\n    pub struct OtherContract {\n        value: i32,\n    }\n\n    impl OtherContract {\n        /// Initializes the contract.\n        #[ink(constructor)]\n        pub fn new(value: i32) -> Self {\n            Self { value }\n        }\n\n        /// Returns the current state.\n        #[ink(message)]\n        pub fn get_value(&self) -> i32 {\n            self.value\n        }\n    }\n}\n")))}u.isMDXComponent=!0}}]);