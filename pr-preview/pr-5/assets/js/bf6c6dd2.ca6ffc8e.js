"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[6035],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),d=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=d(a),k=r,c=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?n.createElement(c,o(o({ref:e},m),{},{components:a})):n.createElement(c,o({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1593:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(3117),r=(a(7294),a(3905));const l={title:"JSON Output",sidebar_position:100},o=void 0,i={unversionedId:"command-reference/json-output",id:"version-2.5.0/command-reference/json-output",title:"JSON Output",description:"The odo commands that output some content generally accept a -o json flag to output this content in a JSON format, suitable for other programs to parse this output more easily.",source:"@site/versioned_docs/version-2.5.0/command-reference/json-output.md",sourceDirName:"command-reference",slug:"/command-reference/json-output",permalink:"/odo-gh-actions/docs/2.5.0/command-reference/json-output",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/versioned_docs/version-2.5.0/command-reference/json-output.md",tags:[],version:"2.5.0",sidebarPosition:100,frontMatter:{title:"JSON Output",sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Common Flags",permalink:"/odo-gh-actions/docs/2.5.0/command-reference/flags"},next:{title:"Deploying a Java Open Liberty application with PostgreSQL",permalink:"/odo-gh-actions/docs/2.5.0/tutorials/deploying-java-app-with-database"}},p={},d=[],m={toc:d};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"odo")," commands that output some content generally accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"-o json")," flag to output this content in a JSON format, suitable for other programs to parse this output more easily."),(0,r.kt)("p",null,"The output structure is similar to Kubernetes resources, with ",(0,r.kt)("inlineCode",{parentName:"p"},"kind"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"apiVersion"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata")," ,",(0,r.kt)("inlineCode",{parentName:"p"},"spec")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"status")," fields."),(0,r.kt)("p",null,"List commands return a ",(0,r.kt)("inlineCode",{parentName:"p"},"List")," resource, containing an ",(0,r.kt)("inlineCode",{parentName:"p"},"items")," (or similar) field listing the items of the list, each item being also similar to Kubernetes resources."),(0,r.kt)("p",null,"Delete commands return a ",(0,r.kt)("inlineCode",{parentName:"p"},"Status")," resource; see the ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/status/"},"Status Kubernetes resource"),"."),(0,r.kt)("p",null,"Other commands return a resource associated with the command (",(0,r.kt)("inlineCode",{parentName:"p"},"Application"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Storage"),"', ",(0,r.kt)("inlineCode",{parentName:"p"},"URL"),", etc)."),(0,r.kt)("p",null,"The exhaustive list of commands accepting the ",(0,r.kt)("inlineCode",{parentName:"p"},"-o json")," flag is currently:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"commands"),(0,r.kt)("th",{parentName:"tr",align:null},"Kind (version)"),(0,r.kt)("th",{parentName:"tr",align:null},"Kind (version) of list items"),(0,r.kt)("th",{parentName:"tr",align:null},"Complete content?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo application describe"),(0,r.kt)("td",{parentName:"tr",align:null},"Application (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo application list"),(0,r.kt)("td",{parentName:"tr",align:null},"List (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Application (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo catalog list components"),(0,r.kt)("td",{parentName:"tr",align:null},"List (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"missing")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo catalog list services"),(0,r.kt)("td",{parentName:"tr",align:null},"List (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"ClusterServiceVersion (operators.coreos.com/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"?")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo catalog describe component"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"missing")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo catalog describe service"),(0,r.kt)("td",{parentName:"tr",align:null},"CRDDescription (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo component create"),(0,r.kt)("td",{parentName:"tr",align:null},"Component (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo component describe"),(0,r.kt)("td",{parentName:"tr",align:null},"Component (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo component list"),(0,r.kt)("td",{parentName:"tr",align:null},"List (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Component (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo config view"),(0,r.kt)("td",{parentName:"tr",align:null},"DevfileConfiguration (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo debug info"),(0,r.kt)("td",{parentName:"tr",align:null},"OdoDebugInfo (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo env view"),(0,r.kt)("td",{parentName:"tr",align:null},"EnvInfo (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo preference view"),(0,r.kt)("td",{parentName:"tr",align:null},"PreferenceList (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo project create"),(0,r.kt)("td",{parentName:"tr",align:null},"Project (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo project delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Status (v1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo project get"),(0,r.kt)("td",{parentName:"tr",align:null},"Project (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo project list"),(0,r.kt)("td",{parentName:"tr",align:null},"List (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Project (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo registry list"),(0,r.kt)("td",{parentName:"tr",align:null},"List (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"missing")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo service create"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo service describe"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo service list"),(0,r.kt)("td",{parentName:"tr",align:null},"List (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Service"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo storage create"),(0,r.kt)("td",{parentName:"tr",align:null},"Storage (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo storage delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Status (v1)"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"n/a")),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo storage list"),(0,r.kt)("td",{parentName:"tr",align:null},"List (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"Storage (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"odo url list"),(0,r.kt)("td",{parentName:"tr",align:null},"List (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"URL (odo.dev/v1alpha1)"),(0,r.kt)("td",{parentName:"tr",align:null},"yes")))))}u.isMDXComponent=!0}}]);