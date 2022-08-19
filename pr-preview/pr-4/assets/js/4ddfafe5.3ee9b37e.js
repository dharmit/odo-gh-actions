"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[8840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),g=o,y=u["".concat(l,".").concat(g)]||u[g]||p[g]||i;return r?n.createElement(y,a(a({ref:t},c),{},{components:r})):n.createElement(y,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(3117),o=(r(7294),r(3905));const i={title:"odo registry",sidebar_position:8},a=void 0,s={unversionedId:"command-reference/registry",id:"version-2.5.0/command-reference/registry",title:"odo registry",description:"odo uses the portable devfile format to describe the components. odo can connect to various devfile registries to download devfiles for different languages and frameworks.",source:"@site/versioned_docs/version-2.5.0/command-reference/registry.md",sourceDirName:"command-reference",slug:"/command-reference/registry",permalink:"/odo-gh-actions/docs/2.5.0/command-reference/registry",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/versioned_docs/version-2.5.0/command-reference/registry.md",tags:[],version:"2.5.0",sidebarPosition:8,frontMatter:{title:"odo registry",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"odo link",permalink:"/odo-gh-actions/docs/2.5.0/command-reference/link"},next:{title:"odo service",permalink:"/odo-gh-actions/docs/2.5.0/command-reference/service"}},l={},d=[{value:"Listing the registries",id:"listing-the-registries",level:2},{value:"Adding a registry",id:"adding-a-registry",level:2},{value:"Deleting a registry",id:"deleting-a-registry",level:2},{value:"Updating a registry",id:"updating-a-registry",level:2}],c={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"odo uses the portable ",(0,o.kt)("em",{parentName:"p"},"devfile")," format to describe the components. odo can connect to various devfile registries to download devfiles for different languages and frameworks."),(0,o.kt)("p",null,"You can connect to publicly available devfile registries, or you can install your own ",(0,o.kt)("a",{parentName:"p",href:"../architecture/secure-registry"},"Secure Registry"),"."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"odo registry")," command to manage the registries used by odo to retrieve devfile information."),(0,o.kt)("h2",{id:"listing-the-registries"},"Listing the registries"),(0,o.kt)("p",null,"You can use the following command to list the registries currently contacted by odo:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"odo registry list\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ odo registry list\nNAME                       URL                             SECURE\nDefaultDevfileRegistry     https://registry.devfile.io     No\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DefaultDevfileRegistry")," is the default registry used by odo; it is provided by the ",(0,o.kt)("a",{parentName:"p",href:"https://devfile.io"},"devfile.io")," project."),(0,o.kt)("h2",{id:"adding-a-registry"},"Adding a registry"),(0,o.kt)("p",null,"You can use the following command to add a registry:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"odo registry add\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ odo registry add StageRegistry https://registry.stage.devfile.io\nNew registry successfully added\n")),(0,o.kt)("p",null,"If you are deploying your own Secure Registry, you can specify the personal access token to authenticate to the secure registry with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--token")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ odo registry add MyRegistry https://myregistry.example.com --token <access_token>\nNew registry successfully added\n")),(0,o.kt)("h2",{id:"deleting-a-registry"},"Deleting a registry"),(0,o.kt)("p",null,"You can delete a registry with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"odo registry delete\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ odo registry delete StageRegistry\n? Are you sure you want to delete registry "StageRegistry" Yes\nSuccessfully deleted registry\n')),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--force")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"-f"),") flag to force the deletion of the registry without confirmation."),(0,o.kt)("h2",{id:"updating-a-registry"},"Updating a registry"),(0,o.kt)("p",null,"You can update the URL and/or the personal access token of a registry already registered with the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"odo registry update\n")),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ odo registry update MyRegistry https://otherregistry.example.com --token <other_access_token>\n? Are you sure you want to update registry "MyRegistry" Yes\nSuccessfully updated registry\n')),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--force")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"-f"),") flag to force the update of the registry without confirmation."))}p.isMDXComponent=!0}}]);