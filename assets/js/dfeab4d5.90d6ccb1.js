"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[3185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=n(3117),r=(n(7294),n(3905));const a={title:"Create URLs using odo",sidebar_position:2,sidebar_label:"Create URL"},i=void 0,s={unversionedId:"using-odo/create-url",id:"version-2.5.0/using-odo/create-url",title:"Create URLs using odo",description:"In the previous section we created two components \u2014 a Spring Boot application (backend) listening on port 8080 and a Nodejs application (frontend) listening on port 3000 \u2014 and pushed them to the Kubernetes cluster. These are also the respective default ports (8080 for Spring Boot and 3000 for Nodejs) for Spring Boot and Nodejs component types. In this guide, we will create URLs to access these components from the host system.",source:"@site/versioned_docs/version-2.5.0/using-odo/create-url.md",sourceDirName:"using-odo",slug:"/using-odo/create-url",permalink:"/docs/2.5.0/using-odo/create-url",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/versioned_docs/version-2.5.0/using-odo/create-url.md",tags:[],version:"2.5.0",sidebarPosition:2,frontMatter:{title:"Create URLs using odo",sidebar_position:2,sidebar_label:"Create URL"},sidebar:"tutorialSidebar",previous:{title:"Creating components",permalink:"/docs/2.5.0/using-odo/create-component"},next:{title:"odo build-images",permalink:"/docs/2.5.0/command-reference/build-images"}},l={},p=[{value:"OpenShift",id:"openshift",level:2},{value:"Kubernetes",id:"kubernetes",level:2},{value:"Backend component",id:"backend-component",level:3},{value:"Frontend component",id:"frontend-component",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the ",(0,r.kt)("a",{parentName:"p",href:"./create-component"},"previous section")," we created two components \u2014 a Spring Boot application (",(0,r.kt)("inlineCode",{parentName:"p"},"backend"),") listening on port 8080 and a Nodejs application (",(0,r.kt)("inlineCode",{parentName:"p"},"frontend"),") listening on port 3000 \u2014 and pushed them to the Kubernetes cluster. These are also the respective default ports (8080 for Spring Boot and 3000 for Nodejs) for Spring Boot and Nodejs component types. In this guide, we will create URLs to access these components from the host system."),(0,r.kt)("p",null,"Note that the URLs we create in this section will only help you access the components in web browser; the application itself won't be usable till we create some services and links which we will cover in the next section."),(0,r.kt)("h2",{id:"openshift"},"OpenShift"),(0,r.kt)("p",null,"If you are using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/code-ready/crc"},"Code Ready Containers (CRC)")," or another form of OpenShift cluster, odo has already created URLs for you by using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.openshift.com/container-platform/latest/networking/routes/route-configuration.html"},"OpenShift Routes")," feature. Execute ",(0,r.kt)("inlineCode",{parentName:"p"},"odo url list")," from the component directory of the ",(0,r.kt)("inlineCode",{parentName:"p"},"backend")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"frontend")," components to get the URLs odo created for these components. If you observe the ",(0,r.kt)("inlineCode",{parentName:"p"},"odo push")," output closely, odo prints the URL in it as well."),(0,r.kt)("p",null,"Below are example ",(0,r.kt)("inlineCode",{parentName:"p"},"odo url list")," outputs for the backend and frontend components. Note that URLs would be different in your case:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# backend component\n$ odo url list\nFound the following URLs for component backend\nNAME         STATE      URL                                            PORT     SECURE     KIND\n8080-tcp     Pushed     http://8080-tcp-app-myproject.hostname.com     8080     false      route\n\n# frontend component\n$ odo url list\nFound the following URLs for component frontend\nNAME          STATE      URL                                             PORT     SECURE     KIND\nhttp-3000     Pushed     http://http-3000-app-myproject.hostname.com     3000     false      route\n\n")),(0,r.kt)("h2",{id:"kubernetes"},"Kubernetes"),(0,r.kt)("p",null,"If you are using a Kubernetes cluster, you will have to create a URL using ",(0,r.kt)("inlineCode",{parentName:"p"},"odo url")," command. This is because odo can not assume the host information to be used to create a URL. To be able to create URLs on a Kubernetes cluster, please make sure that you have ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/cluster-setup/kubernetes/#enabling-ingress"},"Ingress Controller")," installed."),(0,r.kt)("p",null,"If you are working on a ",(0,r.kt)("a",{parentName:"p",href:"../getting-started/cluster-setup/kubernetes"},"minikube"),", Ingress can be enabled using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"minikube addons enable ingress\n")),(0,r.kt)("p",null,"If you are working on any other kind of Kubernetes cluster, please check with your cluster administrator to enable the Ingress Controller. In this guide, we cover URL creation for minikube setup. For any other Kubernetes cluster, please replace ",(0,r.kt)("inlineCode",{parentName:"p"},"$(minikube ip).nip.io")," in below commands with the host information for your specific cluster."),(0,r.kt)("h3",{id:"backend-component"},"Backend component"),(0,r.kt)("p",null,"Our backend component, which is based on Spring Boot, listens on port 8080. ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the directory for this component and execute below command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"odo url create --port 8080 --host $(minikube ip).nip.io\nodo push\n")),(0,r.kt)("p",null,'odo follows a "create & push" workflow for most commands. But in this case, adding ',(0,r.kt)("inlineCode",{parentName:"p"},"--now")," flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"odo url create")," could reduce two commands into a single command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"odo url create --port 8080 --host $(minikube ip).nip.io --now\n")),(0,r.kt)("h3",{id:"frontend-component"},"Frontend component"),(0,r.kt)("p",null,"Our frontend component, which is based on Nodejs, listens on port 3000. ",(0,r.kt)("inlineCode",{parentName:"p"},"cd")," into the directory for this component and execute below command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"odo url create --port 3000 --host $(minikube ip).nip.io\nodo push\n")),(0,r.kt)("p",null,"Again, if you would prefer to get this done in a single command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"odo url create --port 3000 --host $(minikube ip).nip.io --now\n")))}u.isMDXComponent=!0}}]);