"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[4128],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(o),h=r,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return o?n.createElement(m,a(a({ref:t},d),{},{components:o})):n.createElement(m,a({ref:t},d))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},4720:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=o(3117),r=(o(7294),o(3905));const i={sidebar_position:1,title:"InTrOdUcTiOn"},a=void 0,l={unversionedId:"introduction",id:"introduction",title:"InTrOdUcTiOn",description:"What is odo?",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/odo-gh-actions/docs/introduction",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/docs/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"InTrOdUcTiOn"},sidebar:"tutorialSidebar",next:{title:"Features",permalink:"/odo-gh-actions/docs/overview/features"}},s={},p=[{value:"What is odo?",id:"what-is-odo",level:3},{value:"What is &quot;inner loop&quot; and &quot;outer loop&quot;?",id:"what-is-inner-loop-and-outer-loop",level:3},{value:"Why should I use <code>odo</code>?",id:"why-should-i-use-odo",level:3},{value:"How is odo different from <code>kubectl</code> and <code>oc</code>?",id:"how-is-odo-different-from-kubectl-and-oc",level:3}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"what-is-odo"},"What is odo?"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"odo")," is a fast, iterative and straightforward CLI tool for developers who write, build, and deploy applications on Kubernetes."),(0,r.kt)("p",null,"We abstract the complex concepts of Kubernetes so you can focus on one thing: ",(0,r.kt)("inlineCode",{parentName:"p"},"code"),"."),(0,r.kt)("p",null,"Choose your favourite framework and ",(0,r.kt)("inlineCode",{parentName:"p"},"odo")," will deploy it ",(0,r.kt)("em",{parentName:"p"},"fast")," and ",(0,r.kt)("em",{parentName:"p"},"often")," to your container orchestrator cluster."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"odo")," is focused on ",(0,r.kt)("a",{parentName:"p",href:"./introduction#what-is-inner-loop-and-outer-loop"},"inner loop")," development as well as tooling that would help users transition to the ",(0,r.kt)("a",{parentName:"p",href:"./introduction#what-is-inner-loop-and-outer-loop"},"outer loop"),"."),(0,r.kt)("p",null,"Brendan Burns, one of the co-founders of Kubernetes, said in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.redhat.com/cms/managed-files/cm-oreilly-kubernetes-patterns-ebook-f19824-201910-en.pdf"},"book Kubernetes Patterns"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It (Kubernetes) is the foundation on which applications will be built, and it provides a large library of APIs and tools for building these applications, but it does little to provide the application or container developer with any hints or guidance for how these various pieces can be combined into a complete, reliable system that satisfies their business needs and goals.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"odo")," satisfies that need by making Kubernetes development ",(0,r.kt)("em",{parentName:"p"},"super easy")," for application developers and cloud engineers."),(0,r.kt)("h3",{id:"what-is-inner-loop-and-outer-loop"},'What is "inner loop" and "outer loop"?'),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"inner loop")," consists of local coding, building, running, and testing the application -- all activities that you, as a developer, can control. "),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"outer loop")," consists of the larger team processes that your code flows through on its way to the cluster: code reviews, integration tests, security and compliance, and so on. "),(0,r.kt)("p",null,"The inner loop could happen mostly on your laptop. The outer loop happens on shared servers and runs in containers, and is often automated with continuous integration/continuous delivery (CI/CD) pipelines. "),(0,r.kt)("p",null,"Usually, a code commit to source control is the transition point between the inner and outer loops."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"(",(0,r.kt)("a",{parentName:"em",href:"https://developers.redhat.com/blog/2020/06/16/enterprise-kubernetes-development-with-odo-the-cli-tool-for-developers#improving_the_developer_workflow"},"Source"),")")),(0,r.kt)("h3",{id:"why-should-i-use-odo"},"Why should I use ",(0,r.kt)("inlineCode",{parentName:"h3"},"odo"),"?"),(0,r.kt)("p",null,"You should use ",(0,r.kt)("inlineCode",{parentName:"p"},"odo")," if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You love frameworks such as Node.js, Spring Boot or dotNet"),(0,r.kt)("li",{parentName:"ul"},"Your application is intended to run in a Kubernetes-like infrastructure"),(0,r.kt)("li",{parentName:"ul"},"You don't want to spend time fighting with DevOps and learning Kubernetes in order to deploy to your enterprise infrastructure")),(0,r.kt)("p",null,"If you are an application developer wishing to deploy to Kubernetes easily, then ",(0,r.kt)("inlineCode",{parentName:"p"},"odo")," is for you."),(0,r.kt)("h3",{id:"how-is-odo-different-from-kubectl-and-oc"},"How is odo different from ",(0,r.kt)("inlineCode",{parentName:"h3"},"kubectl")," and ",(0,r.kt)("inlineCode",{parentName:"h3"},"oc"),"?"),(0,r.kt)("p",null,"Both ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubectl"},(0,r.kt)("inlineCode",{parentName:"a"},"kubectl"))," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/openshift/oc/"},(0,r.kt)("inlineCode",{parentName:"a"},"oc"))," require deep understanding of Kubernetes and OpenShift concepts."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"odo")," is different as it focuses on application developers and cloud engineers. Both ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"oc")," are DevOps oriented tools and help in deploying applications to and maintaining a Kubernetes cluster provided you know Kubernetes well."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"odo")," is not meant to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maintain a production Kubernetes cluster"),(0,r.kt)("li",{parentName:"ul"},"Perform sysadmin tasks against a Kubernetes cluster")))}u.isMDXComponent=!0}}]);