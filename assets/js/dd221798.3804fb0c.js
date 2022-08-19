"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[7011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=u(n),f=o,m=l["".concat(p,".").concat(f)]||l[f]||d[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=l;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},789:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(3117),o=(n(7294),n(3905));const i={title:"Only Push Specific Files",sidebar_position:4},a=void 0,s={unversionedId:"user-guides/advanced/pushing-specific-files",id:"user-guides/advanced/pushing-specific-files",title:"Only Push Specific Files",description:"odo uses the odo.dev.push.path related attribute from the devfile's run commands to push only the specified files and folders to the component.",source:"@site/docs/user-guides/advanced/pushing-specific-files.md",sourceDirName:"user-guides/advanced",slug:"/user-guides/advanced/pushing-specific-files",permalink:"/docs/user-guides/advanced/pushing-specific-files",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/docs/user-guides/advanced/pushing-specific-files.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Only Push Specific Files",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Deploying to IBM-Z and Power Architectures",permalink:"/docs/user-guides/advanced/deploying-on-ibm-z-and-power"},next:{title:"Using Devfile Lifecycle Events",permalink:"/docs/user-guides/advanced/using-devfile-lifecycle-events"}},p={},u=[],c={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"odo")," uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"odo.dev.push.path")," related attribute from the devfile's run commands to push only the specified files and folders to the component."),(0,o.kt)("p",null,"The format of the attribute is ",(0,o.kt)("inlineCode",{parentName:"p"},'"odo.dev.push.path:<local_relative_path>": "<remote_relative_path>"'),". We can mention multiple such attributes in the run command's ",(0,o.kt)("inlineCode",{parentName:"p"},"attributes")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'commands:\n  - id: dev-run\n    attributes:\n      "dev.odo.push.path:target/quarkus-app": "remote-target/quarkus-app"\n      "dev.odo.push.path:README.txt": "docs/README.txt"\n    exec:\n      component: tools\n      commandLine: "java -jar remote-target/quarkus-app/quarkus-run.jar -Dquarkus.http.host=0.0.0.0"\n      hotReloadCapable: true\n      group:\n        kind: run\n        isDefault: true\n      workingDir: $PROJECTS_ROOT\n  - id: dev-debug\n    exec:\n      component: tools\n      commandLine: "java -Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=${DEBUG_PORT},suspend=n -jar remote-target/quarkus-app/quarkus-run.jar -Dquarkus.http.host=0.0.0.0"\n      hotReloadCapable: true\n      group:\n        kind: debug\n        isDefault: true\n      workingDir: $PROJECTS_ROOT\n')),(0,o.kt)("p",null,"In the above example the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"quarkus-app")," folder, which is inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," folder, will be pushed to the remote location of ",(0,o.kt)("inlineCode",{parentName:"p"},"remote-target/quarkus-app")," and the file ",(0,o.kt)("inlineCode",{parentName:"p"},"README.txt")," will be pushed to ",(0,o.kt)("inlineCode",{parentName:"p"},"doc/README.txt"),". The local path is relative to the component's local folder. The remote location is relative to the folder containing the component's source code inside the container."))}d.isMDXComponent=!0}}]);