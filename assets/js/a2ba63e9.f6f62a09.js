"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[213],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||a;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7155:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(3117),r=(n(7294),n(3905));const a={title:"odo delete",sidebar_position:4},l=void 0,i={unversionedId:"command-reference/delete",id:"version-2.5.0/command-reference/delete",title:"odo delete",description:"odo delete command is useful for deleting resources that are managed by odo.",source:"@site/versioned_docs/version-2.5.0/command-reference/delete.md",sourceDirName:"command-reference",slug:"/command-reference/delete",permalink:"/docs/2.5.0/command-reference/delete",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/versioned_docs/version-2.5.0/command-reference/delete.md",tags:[],version:"2.5.0",sidebarPosition:4,frontMatter:{title:"odo delete",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"odo create",permalink:"/docs/2.5.0/command-reference/create"},next:{title:"odo deploy",permalink:"/docs/2.5.0/command-reference/deploy"}},d={},c=[{value:"Deleting a component",id:"deleting-a-component",level:2},{value:"Un-deploying Devfile Kubernetes components",id:"un-deploying-devfile-kubernetes-components",level:2},{value:"Delete Everything",id:"delete-everything",level:2},{value:"Available Flags",id:"available-flags",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"odo delete")," command is useful for deleting resources that are managed by odo."),(0,r.kt)("h2",{id:"deleting-a-component"},"Deleting a component"),(0,r.kt)("p",null,"To delete a ",(0,r.kt)("em",{parentName:"p"},"devfile")," component, you can execute ",(0,r.kt)("inlineCode",{parentName:"p"},"odo delete"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"odo delete\n")),(0,r.kt)("p",null,"If the component is pushed to the cluster, running the above command will delete the component from the cluster, and it's dependant storage, url, secrets, and other resources.\nIf it is not pushed, the command would exit with an error stating that it could not find the resources on the cluster."),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--force")," flag to avoid the confirmation questions. "),(0,r.kt)("h2",{id:"un-deploying-devfile-kubernetes-components"},"Un-deploying Devfile Kubernetes components"),(0,r.kt)("p",null,"To undeploy the Devfile Kubernetes components deployed with ",(0,r.kt)("inlineCode",{parentName:"p"},"odo deploy")," from the cluster, you can execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"odo delete")," command with ",(0,r.kt)("inlineCode",{parentName:"p"},"--deploy")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"odo delete --deploy\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--force")," flag to avoid the confirmation questions."),(0,r.kt)("h2",{id:"delete-everything"},"Delete Everything"),(0,r.kt)("p",null,"To delete a ",(0,r.kt)("em",{parentName:"p"},"devfile")," component, the Devfile Kubernetes component(deployed via ",(0,r.kt)("inlineCode",{parentName:"p"},"odo deploy"),"), Devfile, and the local configuration, you can execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"odo delete")," command with ",(0,r.kt)("inlineCode",{parentName:"p"},"--all")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"odo delete --all\n")),(0,r.kt)("h2",{id:"available-flags"},"Available Flags"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--force")," - Use this flag to avoid the confirmation questions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-w"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"--wait")," - Use this flag to wait for component deletion, and it's dependant; this does not work with the un-deployment.\nCheck the ",(0,r.kt)("a",{parentName:"li",href:"/docs/2.5.0/command-reference/flags"},"documentation on flags")," to see more flags available.")))}s.isMDXComponent=!0}}]);