"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[2899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3664:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(3117),r=(n(7294),n(3905));const o={title:"odo 2.5.0 Released",author:"Tomas Kral",author_url:"https://github.com/kadel",author_image_url:"https://github.com/kadel.png",tags:["release"],slug:"odo-250-release"},l=void 0,i={permalink:"/blog/odo-250-release",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/blog/2022-01-14-odo-v2.5.0.md",source:"@site/blog/2022-01-14-odo-v2.5.0.md",title:"odo 2.5.0 Released",description:"2.5.0 of odo has been released!",date:"2022-01-14T00:00:00.000Z",formattedDate:"January 14, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:2.285,truncated:!0,authors:[{name:"Tomas Kral",url:"https://github.com/kadel",imageURL:"https://github.com/kadel.png"}],frontMatter:{title:"odo 2.5.0 Released",author:"Tomas Kral",author_url:"https://github.com/kadel",author_image_url:"https://github.com/kadel.png",tags:["release"],slug:"odo-250-release"},prevItem:{title:"odo v3-alpha1 Released",permalink:"/blog/odo-v3-alpha1-release"},nextItem:{title:"odo 2.4.3 Released",permalink:"/blog/odo-243-release"}},p={authorsImageUrls:[void 0]},d=[{value:"Notable changes in odo 2.5.0",id:"notable-changes-in-odo-250",level:2},{value:"Support for ephemeral field in Devfile <code>volumes</code> definition (#5279 @feloy)",id:"support-for-ephemeral-field-in-devfile-volumes-definition-5279-feloy",level:3},{value:"Delete outer loop resources with <code>odo delete --deploy</code>(PR#5276 @valaparthvi)",id:"delete-outer-loop-resources-with-odo-delete---deploypr5276-valaparthvi",level:3},{value:"Add suppport for cpuLimit, cpuRequest and memoryRequest (PR#5252 @anandrkskd)",id:"add-suppport-for-cpulimit-cpurequest-and-memoryrequest-pr5252-anandrkskd",level:3},{value:"Adds mapping support to odo link (PR#5237 @dharmit)",id:"adds-mapping-support-to-odo-link-pr5237-dharmit",level:3}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"2.5.0")," of odo has been released!"),(0,r.kt)("h2",{id:"notable-changes-in-odo-250"},"Notable changes in odo 2.5.0"),(0,r.kt)("h3",{id:"support-for-ephemeral-field-in-devfile-volumes-definition-5279-feloy"},"Support for ephemeral field in Devfile ",(0,r.kt)("inlineCode",{parentName:"h3"},"volumes")," definition (",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/redhat-developer/odo/pull/5279"},"#5279")," ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/feloy"},"@feloy"),")"),(0,r.kt)("p",null,"odo now supports Devfile volumes that are defined as ephemeral. If a volume is defined with ",(0,r.kt)("inlineCode",{parentName:"p"},"ephemeral: true")," odo will create it as a Kubernetes ",(0,r.kt)("inlineCode",{parentName:"p"},"emptyDir")," volume."),(0,r.kt)("p",null,"Example of an ephemeral volume definition inside ",(0,r.kt)("inlineCode",{parentName:"p"},"devfile.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: volume-test\n  volume:\n    size: 1Gi\n    ephemeral: true\n")),(0,r.kt)("h3",{id:"delete-outer-loop-resources-with-odo-delete---deploypr5276-valaparthvi"},"Delete outer loop resources with ",(0,r.kt)("inlineCode",{parentName:"h3"},"odo delete --deploy"),"(",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/redhat-developer/odo/pull/5276"},"PR#5276")," ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/valaparthvi"},"@valaparthvi"),")"),(0,r.kt)("p",null,"You can now delete resources that were deployed using odo deploy via the odo delete --deploy command.\n",(0,r.kt)("inlineCode",{parentName:"p"},"odo delete --all")," now deletes everything from the cluster related to the given Devfile including outer loop resources."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Delete command"),(0,r.kt)("th",{parentName:"tr",align:null},"Deletes resources from cluster"),(0,r.kt)("th",{parentName:"tr",align:null},"Deletes local ",(0,r.kt)("inlineCode",{parentName:"th"},"devfile.yaml")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"odo delete")),(0,r.kt)("td",{parentName:"tr",align:null},"YES (deletes resources created using ",(0,r.kt)("inlineCode",{parentName:"td"},"odo push"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"odo delete --deploy")),(0,r.kt)("td",{parentName:"tr",align:null},"YES (deletes resources created using ",(0,r.kt)("inlineCode",{parentName:"td"},"odo deploy"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"NO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"odo delete --all")),(0,r.kt)("td",{parentName:"tr",align:null},"YES (deletes all resources created by odo)"),(0,r.kt)("td",{parentName:"tr",align:null},"YES")))),(0,r.kt)("h3",{id:"add-suppport-for-cpulimit-cpurequest-and-memoryrequest-pr5252-anandrkskd"},"Add suppport for cpuLimit, cpuRequest and memoryRequest (",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/redhat-developer/odo/pull/5252"},"PR#5252")," ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/anandrkskd"},"@anandrkskd"),")"),(0,r.kt)("p",null,"odo now supports specifying additional resource constraints for ",(0,r.kt)("inlineCode",{parentName:"p"},"container")," components in Devfile as introduced by Devfile v2.1.0."),(0,r.kt)("p",null,"You can use the following constraints:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Devfile container field"),(0,r.kt)("th",{parentName:"tr",align:null},"Kubernetes equivalent in Pod specification (",(0,r.kt)("inlineCode",{parentName:"th"},"spec.containers[]."),")"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"memoryLimit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.limits.memory")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes the maximum allowed memory for the container.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"memoryRequest")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.requests.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes the minimum memory that the container requires.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cpuLimit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.limits.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes the maximum allowed CPU cores for the container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cpuRequest")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"resources.requests.cpu")),(0,r.kt)("td",{parentName:"tr",align:null},"Describes the minimum number of CPU cores that the container requires.")))),(0,r.kt)("p",null,"You can learn more about resource management in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"},"Resource Management for Pods and Containers")," section in ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/"},"Kubernetes documentation")),(0,r.kt)("p",null,"Example of a Devfile container with all available resource constraints:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"components:\n  - name: runtime\n    container:\n      image: registry.access.redhat.com/ubi8/nodejs-12:1-36\n      memoryLimit: 1024Mi\n      memoryRequest: 512Mi\n      cpuLimit: '1'\n      cpuRequest: 200m\n      endpoints:\n        - name: \"3000-tcp\"\n          targetPort: 3000\n      mountSources: true\n")),(0,r.kt)("h3",{id:"adds-mapping-support-to-odo-link-pr5237-dharmit"},"Adds mapping support to odo link (",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/redhat-developer/odo/pull/5237"},"PR#5237")," ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/dharmit"},"@dharmit"),")"),(0,r.kt)("p",null,"You can specify custom Service Binding mappings using ",(0,r.kt)("inlineCode",{parentName:"p"},"odo link")," command."),(0,r.kt)("p",null,"For example, with the following link command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"odo link PostgresCluster/hippo --map pgVersion='{{ .database.spec.postgresVersion }}'\n")),(0,r.kt)("p",null,"Odo will generate ",(0,r.kt)("inlineCode",{parentName:"p"},"ServiceBinding")," resource similar to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: binding.operators.coreos.com/v1alpha1\nkind: ServiceBinding\nmetadata:\n  creationTimestamp: null\n  name: myapp-postgrescluster-hippo\nspec:\n  application:\n    group: apps\n    name: myapp-app\n    resource: deployments\n    version: v1\n  bindAsFiles: false\n  detectBindingResources: true\n  mappings:\n  - name: pgVersion\n    value: '{{ .database.spec.postgresVersion }}'\n  services:\n  - group: postgres-operator.crunchydata.com\n    id: hippo\n    kind: PostgresCluster\n    name: hippo\n    version: v1beta1\n")),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/iH5asqZiMUA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,"You can find more information about how to  ",(0,r.kt)("a",{parentName:"p",href:"https://redhat-developer.github.io/service-binding-operator/userguide/creating-service-bindings/binding-options.html#_compose_custom_binding_data"},"compose custom binding data")," in ",(0,r.kt)("a",{parentName:"p",href:"https://redhat-developer.github.io/service-binding-operator/"},"Service Binding Operator Documentation")),(0,r.kt)("p",null,"As with every release, you can find the full list of changes and bug fixes on the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redhat-developer/odo/releases/tag/v2.5.0"},"GitHub release page")))}m.isMDXComponent=!0}}]);