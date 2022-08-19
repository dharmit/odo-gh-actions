"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[8473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8147:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={title:"OpenShift",sidebar_position:2},i="Setting up a OpenShift cluster",l={unversionedId:"getting-started/cluster-setup/openshift",id:"version-2.5.0/getting-started/cluster-setup/openshift",title:"OpenShift",description:"Introduction",source:"@site/versioned_docs/version-2.5.0/getting-started/cluster-setup/openshift.md",sourceDirName:"getting-started/cluster-setup",slug:"/getting-started/cluster-setup/openshift",permalink:"/docs/2.5.0/getting-started/cluster-setup/openshift",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/versioned_docs/version-2.5.0/getting-started/cluster-setup/openshift.md",tags:[],version:"2.5.0",sidebarPosition:2,frontMatter:{title:"OpenShift",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/docs/2.5.0/getting-started/cluster-setup/kubernetes"},next:{title:"Quickstart Guide",permalink:"/docs/2.5.0/getting-started/quickstart"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Summary",id:"summary",level:2},{value:"Installing an Operator",id:"installing-an-operator",level:2},{value:"Verifying the Operator installation",id:"verifying-the-operator-installation",level:3},{value:"(Optional) Installing the Service Binding Operator",id:"optional-installing-the-service-binding-operator",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-openshift-cluster"},"Setting up a OpenShift cluster"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This guide is helpful in setting up a development environment intended to be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"odo"),"; this setup is not recommended for a production environment."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have a OpenShift cluster set up (such as ",(0,a.kt)("a",{parentName:"li",href:"https://crc.dev/crc/#installing-codeready-containers_gsg"},"crc"),")"),(0,a.kt)("li",{parentName:"ul"},"You have admin privileges to the cluster")),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An Operator in order to use ",(0,a.kt)("inlineCode",{parentName:"li"},"odo service")),(0,a.kt)("li",{parentName:"ul"},"(Optional) Service Binding Operator in order to use ",(0,a.kt)("inlineCode",{parentName:"li"},"odo link"))),(0,a.kt)("h2",{id:"installing-an-operator"},"Installing an Operator"),(0,a.kt)("p",null,"Installing an Operator allows you to install a service such as PostgreSQL, Redis or DataDog."),(0,a.kt)("p",null,"To install an Operator from the OpenShift web console:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Login to the OpenShift web console with admin, and navigate to Operators > OperatorHub."),(0,a.kt)("li",{parentName:"ol"},"Make sure that the Project is set to All Projects."),(0,a.kt)("li",{parentName:"ol"},"Search for an Operator of your choice in the search box under ",(0,a.kt)("strong",{parentName:"li"},"All Items"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on the Operator; this should open a side pane."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Install")," button on the side pane; this should open an ",(0,a.kt)("strong",{parentName:"li"},"Install Operator")," page."),(0,a.kt)("li",{parentName:"ol"},"Set the ",(0,a.kt)("strong",{parentName:"li"},"Installation mode"),", ",(0,a.kt)("strong",{parentName:"li"},"Installed Namespace")," and ",(0,a.kt)("strong",{parentName:"li"},"Approval Strategy")," as per your requirement."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Install")," button."),(0,a.kt)("li",{parentName:"ol"},"Wait until the Operator is installed."),(0,a.kt)("li",{parentName:"ol"},"Once the Operator is installed, you should see ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"Installed operator - ready for use")),", and a ",(0,a.kt)("strong",{parentName:"li"},"View Operator")," button appears on the page."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"View Operator")," button; this should take you to Operators > Installed Operators > Operator details page, and you should be able to see details of your Operator.")),(0,a.kt)("h3",{id:"verifying-the-operator-installation"},"Verifying the Operator installation"),(0,a.kt)("p",null,"Once the Operator is successfully installed on the cluster, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"odo")," to verify the Operator installation and see the CRDs associated with it; run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"odo catalog list services\n")),(0,a.kt)("p",null,"The output may look similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"odo catalog list services\nServices available through Operators\nNAME                                CRDs\ndatadog-operator.v0.6.0             DatadogAgent, DatadogMetric, DatadogMonitor\nservice-binding-operator.v0.9.1     ServiceBinding, ServiceBinding\n")),(0,a.kt)("h2",{id:"optional-installing-the-service-binding-operator"},"(Optional) Installing the Service Binding Operator"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"odo")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/service-binding-operator"},"Service Binding Operator")," to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"odo link")," feature which helps to connect an odo component to a service or another component."),(0,a.kt)("p",null,"The Service Binding Operator is ",(0,a.kt)("em",{parentName:"p"},"optional")," and is used to provide extra metadata support for ",(0,a.kt)("inlineCode",{parentName:"p"},"odo")," deployments."),(0,a.kt)("p",null,"To install the Service Binding Operator from the OpenShift web console:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Login to the OpenShift web console with admin, and navigate to Operators > OperatorHub."),(0,a.kt)("li",{parentName:"ol"},"Make sure that the Project is set to All Projects."),(0,a.kt)("li",{parentName:"ol"},"Search for ",(0,a.kt)("em",{parentName:"li"},(0,a.kt)("strong",{parentName:"em"},"Service Binding Operator"))," in the search box under ",(0,a.kt)("strong",{parentName:"li"},"All Items"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Service Binding Operator"),"; this should open a side pane."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Install")," button on the side pane; this should open an ",(0,a.kt)("strong",{parentName:"li"},"Install Operator")," page."),(0,a.kt)("li",{parentName:"ol"},"Make sure the ",(0,a.kt)("strong",{parentName:"li"},"Installation mode"),' is set to "',(0,a.kt)("em",{parentName:"li"},"All namespaces on the cluster(default)"),'"; ',(0,a.kt)("strong",{parentName:"li"},"Installed Namespace"),' is set to "',(0,a.kt)("em",{parentName:"li"},"openshift-operators"),'"; and ',(0,a.kt)("strong",{parentName:"li"},"Approval Strategy"),' is "',(0,a.kt)("em",{parentName:"li"},"Automatic"),'".'),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"Install")," button."),(0,a.kt)("li",{parentName:"ol"},"Wait until the Operator is installed."),(0,a.kt)("li",{parentName:"ol"},"Once the Operator is installed, you should see ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"Installed operator - ready for use")),", and a ",(0,a.kt)("strong",{parentName:"li"},"View Operator")," button appears on the page."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"View Operator")," button; this should take you to Operators > Installed Operators > Operator details page, and you should be able to see details of your Operator.")))}d.isMDXComponent=!0}}]);