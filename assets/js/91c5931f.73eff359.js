"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[3224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,f=m["".concat(c,".").concat(u)]||m[u]||p[u]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(3117),o=(n(7294),n(3905));const i={title:"odo build-images",sidebar_position:1},a=void 0,l={unversionedId:"command-reference/build-images",id:"version-2.5.0/command-reference/build-images",title:"odo build-images",description:"odo can build container images based on Dockerfiles, and push these images to their registries.",source:"@site/versioned_docs/version-2.5.0/command-reference/build-images.md",sourceDirName:"command-reference",slug:"/command-reference/build-images",permalink:"/docs/2.5.0/command-reference/build-images",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/versioned_docs/version-2.5.0/command-reference/build-images.md",tags:[],version:"2.5.0",sidebarPosition:1,frontMatter:{title:"odo build-images",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Create URL",permalink:"/docs/2.5.0/using-odo/create-url"},next:{title:"odo catalog",permalink:"/docs/2.5.0/command-reference/catalog"}},c={},d=[],s={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"odo can build container images based on Dockerfiles, and push these images to their registries."),(0,o.kt)("p",null,"When running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"odo build-images"),", odo searches for all components in the ",(0,o.kt)("inlineCode",{parentName:"p"},"devfile.yaml")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"image")," type, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"components:\n- image:\n    imageName: quay.io/myusername/myimage\n    dockerfile:\n      uri: ./Dockerfile\n      buildContext: ${PROJECTS_ROOT}\n  name: component-built-from-dockerfile\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"uri")," field indicates the relative path of the Dockerfile to use, relative to the directory containing the ",(0,o.kt)("inlineCode",{parentName:"p"},"devfile.yaml"),". The devfile specification indicates that ",(0,o.kt)("inlineCode",{parentName:"p"},"uri")," could also be an HTTP URL, but this case is not supported by odo yet."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"buildContext")," indicates the directory used as build context. The default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"${PROJECTS_ROOT}"),"."),(0,o.kt)("p",null,"For each image component, odo executes either ",(0,o.kt)("inlineCode",{parentName:"p"},"podman")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," (the first one found, in this order), to build the image with the specified Dockerfile, build context and arguments."),(0,o.kt)("p",null,"If the ",(0,o.kt)("inlineCode",{parentName:"p"},"--push")," flag is passed to the command, the images are be pushed to their registries after they are built."))}p.isMDXComponent=!0}}]);