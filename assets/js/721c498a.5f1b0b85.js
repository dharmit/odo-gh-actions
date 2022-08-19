"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[9247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,f=d["".concat(l,".").concat(u)]||d[u]||p[u]||r;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=n(3117),o=(n(7294),n(3905));const r={title:"odo list"},i=void 0,c={unversionedId:"command-reference/list",id:"command-reference/list",title:"odo list",description:"odo list command is useful for getting information about components running on a specific namespace.",source:"@site/docs/command-reference/list.md",sourceDirName:"command-reference",slug:"/command-reference/list",permalink:"/docs/command-reference/list",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/docs/command-reference/list.md",tags:[],version:"current",frontMatter:{title:"odo list"},sidebar:"tutorialSidebar",previous:{title:"odo list namespace",permalink:"/docs/command-reference/list-namespace"},next:{title:"odo logs",permalink:"/docs/command-reference/logs"}},l={},s=[{value:"Available flags",id:"available-flags",level:2}],m={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"odo list")," command is useful for getting information about components running on a specific namespace."),(0,o.kt)("p",null,"If the command is executed from a directory containing a Devfile, it also displays the command\ndefined in the Devfile as part of the list, prefixed with a star(*)."),(0,o.kt)("p",null,"For each component, the command displays:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"its name,"),(0,o.kt)("li",{parentName:"ul"},"its project type,"),(0,o.kt)("li",{parentName:"ul"},"on which mode it is running (None, Dev, Deploy, or both), not that None is only applicable to the component\ndefined in the local Devfile,"),(0,o.kt)("li",{parentName:"ul"},"by which application the component has been deployed.")),(0,o.kt)("h2",{id:"available-flags"},"Available flags"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--namespace")," - Namespace to list the components from (optional). By default, the current namespace defined in kubeconfig is used"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-o json")," - Outputs the list in JSON format. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/command-reference/json-output"},"JSON output")," for more information")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"use of cache")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"odo list")," makes use of cache for performance reasons. This is the same cache that is referred by ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl")," command\nwhen you do ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl api-resources --cached=true"),". As a result, if you were to install an Operator/CRD on the\nKubernetes cluster, and create a resource from it using odo, you might not see it in the ",(0,o.kt)("inlineCode",{parentName:"p"},"odo list")," output. This\nwould be the case for 10 minutes timeframe for which the cache is considered valid. Beyond this 10 minutes, the\ncache is updated anyway."),(0,o.kt)("p",{parentName:"div"},"If you would like to invalidate the cache before the 10 minutes timeframe, you could manually delete it by doing:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rm -rf ~/.kube/cache/discovery/api.crc.testing_6443/\n")),(0,o.kt)("p",{parentName:"div"},"Above example shows how to invalidate the cache for a CRC cluster. Note that you will have to modify the ",(0,o.kt)("inlineCode",{parentName:"p"},"api.crc.\ntesting_6443")," part based on the cluster you are working against."))))}p.isMDXComponent=!0}}]);