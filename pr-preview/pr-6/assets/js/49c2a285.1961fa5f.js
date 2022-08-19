"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[7111],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3605:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(3117),o=(n(7294),n(3905));const i={title:"Kubernetes",sidebar_position:1},a="Setting up a Kubernetes cluster",s={unversionedId:"overview/cluster-setup/kubernetes",id:"overview/cluster-setup/kubernetes",title:"Kubernetes",description:"Introduction",source:"@site/docs/overview/cluster-setup/kubernetes.md",sourceDirName:"overview/cluster-setup",slug:"/overview/cluster-setup/kubernetes",permalink:"/odo-gh-actions/docs/overview/cluster-setup/kubernetes",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/docs/overview/cluster-setup/kubernetes.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Kubernetes",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/odo-gh-actions/docs/overview/installation"},next:{title:"OpenShift",permalink:"/odo-gh-actions/docs/overview/cluster-setup/openshift"}},l={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:2},{value:"(OPTIONAL) Installing the Service Binding Operator",id:"optional-installing-the-service-binding-operator",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Confirming your Storage Provisioning functionality",id:"confirming-your-storage-provisioning-functionality",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-a-kubernetes-cluster"},"Setting up a Kubernetes cluster"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"This guide is helpful in setting up a development environment intended to be used with ",(0,o.kt)("inlineCode",{parentName:"p"},"odo"),"; this setup is not recommended for a production environment."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"odo")," can be used with ANY Kubernetes cluster. However, this development environment will ensure complete coverage of all features of ",(0,o.kt)("inlineCode",{parentName:"p"},"odo"),"."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You have a Kubernetes cluster set up (such as ",(0,o.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),")"),(0,o.kt)("li",{parentName:"ul"},"You have admin privileges to the cluster")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important notes:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"odo")," will use the ",(0,o.kt)("strong",{parentName:"p"},"default"),"  storage provisioning on your cluster. If it has not been set correctly, see our ",(0,o.kt)("a",{parentName:"p",href:"#troubleshooting"},"troubleshooting guide")," for more details."),(0,o.kt)("h2",{id:"optional-installing-the-service-binding-operator"},"(OPTIONAL) Installing the Service Binding Operator"),(0,o.kt)("p",null,"Service Binding Operator is required to bind an application with microservices."),(0,o.kt)("p",null,"Visit ",(0,o.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/service-binding-operator"},"Service Binding Operator on OperatorHub.io")," or the ",(0,o.kt)("a",{parentName:"p",href:"https://redhat-developer.github.io/service-binding-operator/userguide/getting-started/installing-service-binding.html#installing-on-kubernetes"},"official documentation")," of Service Binding Operator to see how you can install it on your Kubernetes cluster."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"confirming-your-storage-provisioning-functionality"},"Confirming your Storage Provisioning functionality"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"odo")," deploys with ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Persistent Volume Claims"),". By default, when you install a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"StorageClass")," such as ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/#glusterfs"},"GlusterFS"),", it will ",(0,o.kt)("em",{parentName:"p"},"not")," be set as the default."),(0,o.kt)("p",null,"You must set it as the default storage provisioner by modifying the annotation your StorageClass:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get StorageClass -A\nkubectl edit StorageClass/YOUR-STORAGE-CLASS -n YOUR-NAMESPACE\n")),(0,o.kt)("p",null,"And add the following annotation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'annotation:\n  storageclass.kubernetes.io/is-default-class: "true"\n')))}c.isMDXComponent=!0}}]);