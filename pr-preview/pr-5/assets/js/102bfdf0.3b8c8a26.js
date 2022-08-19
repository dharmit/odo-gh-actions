"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[1004],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(t),c=a,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return t?o.createElement(h,l(l({ref:n},d),{},{components:t})):o.createElement(h,l({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var s=2;s<i;s++)l[s]=t[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},562:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var o=t(3117),a=(t(7294),t(3905));const i={title:"Devfile Reference",sidebar_position:30},l=void 0,r={unversionedId:"development/devfile",id:"development/devfile",title:"Devfile Reference",description:"Description",source:"@site/docs/development/devfile.md",sourceDirName:"development",slug:"/development/devfile",permalink:"/odo-gh-actions/docs/development/devfile",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/docs/development/devfile.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Devfile Reference",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"odo set namespace",permalink:"/odo-gh-actions/docs/command-reference/set-namespace"},next:{title:"Contributing to odo",permalink:"/odo-gh-actions/docs/development/contribution"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Overview",id:"overview",level:3},{value:"How <code>odo</code> Creates Resources from Devfile",id:"how-odo-creates-resources-from-devfile",level:3},{value:"File Synchronization",id:"file-synchronization",level:3},{value:"Hot Reloading",id:"hot-reloading",level:4},{value:"Full Example",id:"full-example",level:4},{value:"What Commands are Executed in Dev or Deploy",id:"what-commands-are-executed-in-dev-or-deploy",level:3},{value:"File Reference",id:"file-reference",level:2},{value:"Special Variables",id:"special-variables",level:3},{value:"<code>schemaVersion</code>",id:"schemaversion",level:3},{value:"Full Example",id:"full-example-1",level:4},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"Full Example",id:"full-example-2",level:4},{value:"<code>starterProjects</code>",id:"starterprojects",level:3},{value:"Full Example",id:"full-example-3",level:4},{value:"<code>variables</code>",id:"variables",level:3},{value:"Full Example",id:"full-example-4",level:4},{value:"<code>commands</code>",id:"commands",level:3},{value:"Full Example using <code>odo dev</code> capabilities",id:"full-example-using-odo-dev-capabilities",level:4},{value:"Full Example using <code>odo deploy</code> capabilities",id:"full-example-using-odo-deploy-capabilities",level:4},{value:"<code>components</code>",id:"components",level:3},{value:"Full Example using <code>odo dev</code> capabilities",id:"full-example-using-odo-dev-capabilities-1",level:4},{value:"Full Example using <code>odo deploy</code> capabilities",id:"full-example-using-odo-deploy-capabilities-1",level:4},{value:"Full Example",id:"full-example-5",level:3},{value:"Not Yet Implemented",id:"not-yet-implemented",level:3},{value:"Components: Git Checkout",id:"components-git-checkout",level:4},{value:"Components: Devfile Checkout",id:"components-devfile-checkout",level:4},{value:"Components: Kubernetes Endpoints and DeployByDefault",id:"components-kubernetes-endpoints-and-deploybydefault",level:4}],d={toc:s};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"We use the latest ",(0,a.kt)("a",{parentName:"p",href:"https://devfile.io/docs/devfile/2.2.0/user-guide/api-reference/"},"Devfile 2.2.0 reference")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"odo"),"."),(0,a.kt)("p",null,"Below are ",(0,a.kt)("inlineCode",{parentName:"p"},"odo"),"-specific examples regarding the Devfile reference. Everything we have listed below is implemented in the current version of ",(0,a.kt)("inlineCode",{parentName:"p"},"odo"),"."),(0,a.kt)("p",null,"This API Reference uses examples and snippets to help you create your own ",(0,a.kt)("inlineCode",{parentName:"p"},"devfile.yaml")," file for your project."),(0,a.kt)("p",null,"For this reference, we use one singular (working) Node.js example which can be ran from your own environment."),(0,a.kt)("h3",{id:"how-odo-creates-resources-from-devfile"},"How ",(0,a.kt)("inlineCode",{parentName:"h3"},"odo")," Creates Resources from Devfile"),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"odo dev")," is ran, ",(0,a.kt)("inlineCode",{parentName:"p"},"odo")," creates the following Kubernetes resources from ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," (component) and ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," (command) sections of the Devfile:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Deployment for running the containers"),(0,a.kt)("li",{parentName:"ul"},"Service for accessibility ")),(0,a.kt)("h3",{id:"file-synchronization"},"File Synchronization"),(0,a.kt)("p",null,'We use the "inner-loop" process intensively in order to propagate and see changes immediately so you spend less time deploying, and more time writing code. '),(0,a.kt)("p",null,"Below is the loop that ",(0,a.kt)("inlineCode",{parentName:"p"},"odo")," uses for file synchronization:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Deployment and Service resources are created (or updated) on the Kubernetes cluster"),(0,a.kt)("li",{parentName:"ol"},"Files are transfered over to the running container using the Kubernetes API "),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"odo")," watches for file changes locally and repeats Step 1 and 2.")),(0,a.kt)("p",null,'The "loop" is cancelled once the user inputs Ctrl+C.'),(0,a.kt)("h4",{id:"hot-reloading"},"Hot Reloading"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hotReloadCapable")," is a special boolean within ",(0,a.kt)("inlineCode",{parentName:"p"},"exec"),' that allows you to specify if a framework is "hot reloadable".'),(0,a.kt)("p",null,"If set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the container won't be restarted as the framework will handle file changes on its own."),(0,a.kt)("h4",{id:"full-example"},"Full Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"commands:\n  - exec:\n      commandLine: yarn dev\n      component: runtime\n      group:\n        isDefault: true\n        kind: run\n      hotReloadCapable: true\n      workingDir: ${PROJECT_SOURCE}\n    id: build\n")),(0,a.kt)("h3",{id:"what-commands-are-executed-in-dev-or-deploy"},"What Commands are Executed in Dev or Deploy"),(0,a.kt)("p",null,"Each command has a group ",(0,a.kt)("inlineCode",{parentName:"p"},"kind"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- exec:\n    commandLine: npm start\n    component: runtime\n    group:\n      isDefault: true\n      kind: run\n    workingDir: ${PROJECT_SOURCE}\n  id: run\n")),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"odo dev")," is executed, we use: build, run, test and debug."),(0,a.kt)("p",null,"These commands are typically ran within the ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," component that has been defined."),(0,a.kt)("p",null,"The order in which the commands are ran for ",(0,a.kt)("inlineCode",{parentName:"p"},"odo dev")," are:"),(0,a.kt)("ol",{start:0},(0,a.kt)("li",{parentName:"ol"},"The source code is synchronized to the container"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"build"),": We build the program from the sources"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"test"),": NOT YET IMPLEMENTED"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"run"),": The application is ran within the container"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"debug"),": This is ran when ",(0,a.kt)("inlineCode",{parentName:"li"},"odo dev --debug")," is executed")),(0,a.kt)("p",null,"When ",(0,a.kt)("inlineCode",{parentName:"p"},"odo deploy")," is executed, we use: deploy."),(0,a.kt)("p",null,"These commands are typically tied to Kubernetes or OpenShift inline resources. They are defined as a component. However, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"container")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"image")," components as well under the deploy group."),(0,a.kt)("p",null,"The most common deploy scenario is the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"image")," component to build a container"),(0,a.kt)("li",{parentName:"ol"},"Deploy a ",(0,a.kt)("inlineCode",{parentName:"li"},"kubernetes")," component(s) with a Kubernetes resource defined")),(0,a.kt)("h2",{id:"file-reference"},"File Reference"),(0,a.kt)("p",null,"This file reference outlines the ",(0,a.kt)("strong",{parentName:"p"},"major")," components of the Devfile API Reference using ",(0,a.kt)("em",{parentName:"p"},"snippets")," and ",(0,a.kt)("em",{parentName:"p"},"examples"),"."),(0,a.kt)("p",null,"We use practical approach outlining the details of Devfile. The example is a modified version from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/devfile/registry/blob/main/stacks/nodejs/devfile.yaml"},"registry/nodejs")," on GitHub for demonstration purposes."),(0,a.kt)("p",null,"In this example, we are deploying a full Node.js application that is available through both ",(0,a.kt)("inlineCode",{parentName:"p"},"odo dev")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"odo deploy"),". "),(0,a.kt)("p",null,"For a more in-depth detailed outline of Devfile, please refer to the official ",(0,a.kt)("a",{parentName:"p",href:"https://devfile.io/docs/devfile/2.2.0/user-guide/api-reference/"},"Devfile 2.2.0 reference"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Some portions of the Devfile examples are commented out to show what is ",(0,a.kt)("em",{parentName:"p"},"available")," but it does not apply to the practical example."),(0,a.kt)("h3",{id:"special-variables"},"Special Variables"),(0,a.kt)("p",null,"There are two special variables available to use in ",(0,a.kt)("inlineCode",{parentName:"p"},"devfile.yaml"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$PROJECTS_ROOT"),": A path where projects sources are mounted as defined by container component's sourceMapping."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"$PROJECT_SOURCE"),": A path to a project source (",(0,a.kt)("inlineCode",{parentName:"li"},"$PROJECTS_ROOT/"),"). If there are multiple projects, this will point to the directory of the first one.")),(0,a.kt)("p",null,"These are helpful when defining or using multiple sources during development or deployment."),(0,a.kt)("h3",{id:"schemaversion"},(0,a.kt)("inlineCode",{parentName:"h3"},"schemaVersion")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"type: string")," | ",(0,a.kt)("strong",{parentName:"p"},"required"))),(0,a.kt)("p",null,"Devfile schema version. This outlines what version of the schema ",(0,a.kt)("inlineCode",{parentName:"p"},"odo")," will use and validate against."),(0,a.kt)("h4",{id:"full-example-1"},"Full Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"schemaVersion: 2.2.0\n")),(0,a.kt)("h3",{id:"metadata"},(0,a.kt)("inlineCode",{parentName:"h3"},"metadata")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"type: object")," | ",(0,a.kt)("strong",{parentName:"p"},"required"))),(0,a.kt)("p",null,"The metadata of the Devfile describes what the following Devfile is about. Information displayed here is helpful to figure out what the project does."),(0,a.kt)("h4",{id:"full-example-2"},"Full Example"),(0,a.kt)("p",null,"We are describing a simple Node.js app. This information is displayed when running ",(0,a.kt)("inlineCode",{parentName:"p"},"odo registry"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"metadata:\n  description: Stack with Node.js 14\n  name: my-nodejs-app\n  displayName: Node.js Runtime\n  icon: https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg\n  language: javascript\n  projectType: nodejs\n  tags:\n  - NodeJS\n  - Express\n  - ubi8\n  version: 1.0.1\n")),(0,a.kt)("h3",{id:"starterprojects"},(0,a.kt)("inlineCode",{parentName:"h3"},"starterProjects")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"type: object")," | ",(0,a.kt)("strong",{parentName:"p"},"optional"))),(0,a.kt)("p",null,"StarterProjects is a project that can be used as a starting point when bootstrapping new projects."),(0,a.kt)("p",null,"When running ",(0,a.kt)("inlineCode",{parentName:"p"},"odo init"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"odo")," looks at the ",(0,a.kt)("inlineCode",{parentName:"p"},"starterProjects")," object to see if there are any available to initially generate."),(0,a.kt)("p",null,"We support using both ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"zip")," file formats."),(0,a.kt)("h4",{id:"full-example-3"},"Full Example"),(0,a.kt)("p",null,"We will use the starter project from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/odo-devfiles/nodejs-ex"},"odo-devfiles/nodejs-ex")," on GitHub."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"starterProjects:\n- git:\n    remotes:\n      origin: https://github.com/odo-devfiles/nodejs-ex.git\n    # You can also checkout from a specific remote as well as revision / tag\n    # checkoutFrom:\n    #  remote: subproject\n    #  revision: 1.1.0Final\n    \n    # As well as a subdirectory\n    # subDir: demo\n  name: nodejs-starter\n\n# Alternatively, you can also provide a zipfile location\n- zip:\n    location: https://github.com/odo-devfiles/nodejs-ex/archive/refs/tags/0.0.2.zip\n  name: nodejs-zip-starter\n")),(0,a.kt)("h3",{id:"variables"},(0,a.kt)("inlineCode",{parentName:"h3"},"variables")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"type: object")," | ",(0,a.kt)("strong",{parentName:"p"},"optional"))),(0,a.kt)("p",null,"Map of key-value variables used for string replacement in the Devfile."),(0,a.kt)("p",null,"This is important so that you can easily replace variables and make Devfile more ",(0,a.kt)("em",{parentName:"p"},"portable")," between different environments."),(0,a.kt)("h4",{id:"full-example-4"},"Full Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," For the below example to run correctly, change the ",(0,a.kt)("inlineCode",{parentName:"p"},"CONTAINER_IMAGE")," to an accessible container registry."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'variables:\n  CONTAINER_IMAGE: quay.io/MYUSERNAME/nodejs-odo-example\n  RESOURCE_NAME: my-nodejs-app\n  CONTAINER_PORT: "3000"\n  DOMAIN_NAME: nodejs.example.com\n')),(0,a.kt)("h3",{id:"commands"},(0,a.kt)("inlineCode",{parentName:"h3"},"commands")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"type: object")," | ",(0,a.kt)("strong",{parentName:"p"},"required"))),(0,a.kt)("p",null,"Predefined, ready-to-use, devworkspace-related commands"),(0,a.kt)("p",null,"Each command is categorized into five groups: build, run, test, debug and deploy."),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"odo dev"),", we use: build, run, test and debug."),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"odo deploy"),", we use: deploy."),(0,a.kt)("p",null,'For each command categorized, there are three different "properties" you can use, either: ',(0,a.kt)("inlineCode",{parentName:"p"},"exec"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"apply")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"composite"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"exec"),": A CLI command is executed inside an existing component container"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apply"),': A command that consists of "applying" a component definition. Typically Kubernetes inline code.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"composite"),": A composite command that allows executing several sub-commands either sequentially or concurrently")),(0,a.kt)("p",null,"Each command is ran at different points of ",(0,a.kt)("inlineCode",{parentName:"p"},"odo"),"'s execution and is further explained ",(0,a.kt)("a",{parentName:"p",href:"#what-commands-are-executed-in-dev-or-deploy"},"here"),"."),(0,a.kt)("h4",{id:"full-example-using-odo-dev-capabilities"},"Full Example using ",(0,a.kt)("inlineCode",{parentName:"h4"},"odo dev")," capabilities"),(0,a.kt)("p",null,"In the below example, we showcase what commands we would run for ",(0,a.kt)("inlineCode",{parentName:"p"},"odo dev"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'\n# We will go into detail on the "build" part\n# \n# All of these commands are ran in a *container* and at different stages\n# of `odo dev`\ncommands:\n- exec:\n    # The command you want to run\n    commandLine: npm install\n\n    # Which component we are using to run the above command\n    # The component contains the container image we are using\n    component: runtime\n\n    # What group we are running this in, in our case it\'s "build"\n    group:\n\n      # Identifies the default command for a given group kind as there can be multiple\n      # exec\'s for one kind\n      isDefault: true\n      # Executes in the "build" stage of dev\n      kind: build\n\n    # The working directory being used (see "Special Variables")\n    workingDir: ${PROJECT_SOURCE}\n\n  # The to refer to\n  id: install\n\n# Executes in the "run" stage of dev\n- exec:\n    commandLine: npm start\n    component: runtime\n    group:\n      isDefault: true\n      kind: run\n    workingDir: ${PROJECT_SOURCE}\n  id: run\n\n# Executes in the "debug" stage of dev\n- exec:\n    commandLine: npm run debug\n    component: runtime\n    group:\n      isDefault: true\n      kind: debug\n    workingDir: ${PROJECT_SOURCE}\n  id: debug\n\n# Executes in the "test" stage of dev\n- exec:\n    commandLine: npm test\n    component: runtime\n    group:\n      isDefault: true\n      kind: test\n    workingDir: ${PROJECT_SOURCE}\n  id: test\n')),(0,a.kt)("h4",{id:"full-example-using-odo-deploy-capabilities"},"Full Example using ",(0,a.kt)("inlineCode",{parentName:"h4"},"odo deploy")," capabilities"),(0,a.kt)("p",null,"In the below example, we showcase what commands we would run for ",(0,a.kt)("inlineCode",{parentName:"p"},"odo deploy"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# This is the main "composite" command that will run all below commands\ncommands:\n- id: deploy\n  composite:\n    # In this composite, we will run the following commands:\n    commands:\n    - build-image\n    - k8s-deployment\n    - k8s-service\n    - k8s-ingress\n    \n    # This is part of the deploy group and will be executed when running `odo deploy`\n    group:\n      isDefault: true\n      kind: deploy\n\n# In order to run all the commands under composite, we must also define each command:\n# Below are the commands and their respective components that they are "linked" to deploy\n- id: build-image\n  # In this case, we will apply the following outerloop-build component \n  apply:\n    component: outerloop-build\n\n- id: k8s-deployment\n  apply:\n    component: outerloop-deployment\n- id: k8s-service\n  apply:\n    component: outerloop-service\n- id: k8s-ingress\n  apply:\n    component: outerloop-ingress\n')),(0,a.kt)("h3",{id:"components"},(0,a.kt)("inlineCode",{parentName:"h3"},"components")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"type: object")," | ",(0,a.kt)("strong",{parentName:"p"},"required"))),(0,a.kt)("p",null,"List of the devworkspace components, such as editor and plugins, user-provided containers, or other types of components."),(0,a.kt)("p",null,"Each component can be as simple as container to a full Kubernetes inline object."),(0,a.kt)("p",null,"There are four different kinds of components:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"container"),": Allows adding and configuring devworkspace-related containers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"image"),": Allows specifying the definition of an image for outer loop builds"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kubernetes"),": Allows importing into the devworkspace the Kubernetes resources defined in a given manifest"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"openshift"),": Allows importing into the devworkspace the OpenShift resources defined in a given manifest ")),(0,a.kt)("h4",{id:"full-example-using-odo-dev-capabilities-1"},"Full Example using ",(0,a.kt)("inlineCode",{parentName:"h4"},"odo dev")," capabilities"),(0,a.kt)("p",null,"In the below example, we utilize one container component for all ",(0,a.kt)("inlineCode",{parentName:"p"},"odo dev")," commands (build, run, test and debug):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'components:\n- container:\n    # A list of all endpoints to be used.\n    endpoints:\n    - name: http-3000\n      targetPort: 3000\n\n    # The container image\n    image: registry.access.redhat.com/ubi8/nodejs-14:latest\n\n    # Arguments to be passed into the container by default\n    # args: "foo", "bar"\n\n    # The default command to be ran\n    # command: "foo", "bar"\n\n    # Environment variables to be passed into the container\n    # env:\n    #  HELLO: WORLD\n\n    # Limits that can be set\n    memoryLimit: 1024Mi\n    # memoryRequest: 2048Mi\n    # cpuRequest: 250m\n    # cpuLimit: 500m\n\n    # Specify if a container should run in its own separated pod, instead of running as part of the main development environment pod.\n    # By default, this is set to false\n    dedicatedPod: false\n\n    # Annotations can also be passed in too to the Deployment and Service created by this container\n    # annotation:\n    #   service:\n    #     FOO: BAR\n    #   deployment:\n    #     FOO: BAR\n\n    # You can also mount for persistent storage. In our case, we\'ll create "myvol" which mounts to /data\n    # Creating a mount, you will also need to create a "myvol" volume component\n    # volumeMounts:\n    #  - name: myvol\n    #    path: /data\n\n    # Toggles whether or not the project source code should be mounted in the component\n    # By default, this is set to true\n    mountSources: true\n\n    # Optional specification of the path in the container where project sources should be transferred/mounted when mountSources is true. When omitted, the default value of /projects is used.\n    # sourceMapping: /projects\n\n  # The name of the component\n  name: runtime\n\n# In our commented example, if we were to use a volume, we would add the following to our component list:\n# - name: myvol\n#   volume:\n#     size: 3Gi\n')),(0,a.kt)("h4",{id:"full-example-using-odo-deploy-capabilities-1"},"Full Example using ",(0,a.kt)("inlineCode",{parentName:"h4"},"odo deploy")," capabilities"),(0,a.kt)("p",null,"In the below example, we implement a image component as well as multiple Kubernetes inline resources for our ",(0,a.kt)("inlineCode",{parentName:"p"},"odo deploy")," scenario:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'components:\n# This will build AND push the container image locally before deployment\n- name: outerloop-build\n  image:\n\n    # Here we provide the Dockerfile that we are going to be using\n    dockerfile:\n\n      # Where the Dockerfile will be built\n      buildContext: ${PROJECT_SOURCE}\n\n      # If root is going to be required or not\n      rootRequired: false\n\n      # Now we point to where the Dockerfile is located\n      # Here we can either provide: URI, Git or a Devfile Registry\n      uri: ./Dockerfile\n\n    # Provide the image name to be used, in our case, we use the image name from `variables:`\n    imageName: "{{CONTAINER_IMAGE}}"\n    \n    # For auto build, you can define if an image should be built during startup\n    # autoBuild: false\n\n# This will create a Deployment in order to run your container image across\n# the cluster. We provide raw Kubernetes yaml inlined into our devfile.yaml\n- name: outerloop-deployment\n  kubernetes:\n\n    # Below we provide the inline code for our Deployment\n    inlined: |\n      kind: Deployment\n      apiVersion: apps/v1\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: {{RESOURCE_NAME}}\n        template:\n          metadata:\n            labels:\n              app: {{RESOURCE_NAME}}\n          spec:\n            containers:\n              - name: nodejs\n                image: {{CONTAINER_IMAGE}}\n                ports:\n                  - name: http\n                    containerPort: {{CONTAINER_PORT}}\n                    protocol: TCP\n                resources:\n                  limits:\n                    memory: "1024Mi"\n                    cpu: "500m"\n\n# This will create a Service so your Deployment is accessible.\n# Depending on your cluster, you may modify this code so it\'s a\n# NodePort, ClusterIP or a LoadBalancer service.\n- name: outerloop-service\n  kubernetes:\n    inlined: |\n      apiVersion: v1\n      kind: Service\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        ports:\n        - name: "{{CONTAINER_PORT}}"\n          port: {{CONTAINER_PORT}}\n          protocol: TCP\n          targetPort: {{CONTAINER_PORT}}\n        selector:\n          app: {{RESOURCE_NAME}}\n        type: ClusterIP\n\n# Let\'s create an Ingress so we can access the application via a domain name\n- name: outerloop-ingress\n  kubernetes:\n    inlined: |\n      apiVersion: networking.k8s.io/v1\n      kind: Ingress\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        rules:\n          - host: "{{DOMAIN_NAME}}"\n            http:\n              paths:\n                - path: "/"\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: {{RESOURCE_NAME}} \n                      port:\n                        number: {{CONTAINER_PORT}}\n\n# You can also define OpenShift inline resources:\n# - name: outlerloop-openshift-route\n#   openshift:\n#     inlined: |\n#       apiVersion: v1\n#       kind: Route\n#       ...\n')),(0,a.kt)("h3",{id:"full-example-5"},"Full Example"),(0,a.kt)("p",null,"Below is the full example which you can run locally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'schemaVersion: 2.2.0\n\nmetadata:\n  description: Stack with Node.js 14\n  displayName: Node.js Runtime\n  icon: https://nodejs.org/static/images/logos/nodejs-new-pantone-black.svg\n  language: javascript\n  name: my-nodejs-app\n  projectType: nodejs\n  tags:\n  - NodeJS\n  - Express\n  - ubi8\n  version: 1.0.1\n\nstarterProjects:\n- git:\n    remotes:\n      origin: https://github.com/odo-devfiles/nodejs-ex.git\n  name: nodejs-starter\n\nvariables:\n  CONTAINER_IMAGE: quay.io/MYUSERNAME/nodejs-odo-example\n  RESOURCE_NAME: my-nodejs-app\n  CONTAINER_PORT: "3000"\n  DOMAIN_NAME: nodejs.example.com\n\ncommands:\n- id: deploy\n  composite:\n    commands:\n    - build-image\n    - k8s-deployment\n    - k8s-service\n    - k8s-ingress\n    group:\n      isDefault: true\n      kind: deploy\n- id: build-image\n  apply:\n    component: outerloop-build\n- id: k8s-deployment\n  apply:\n    component: outerloop-deployment\n- id: k8s-service\n  apply:\n    component: outerloop-service\n- id: k8s-ingress\n  apply:\n    component: outerloop-ingress\n- exec:\n    commandLine: npm install\n    component: runtime\n    group:\n      isDefault: true\n      kind: build\n    workingDir: ${PROJECT_SOURCE}\n  id: install\n- exec:\n    commandLine: npm start\n    component: runtime\n    group:\n      isDefault: true\n      kind: run\n    workingDir: ${PROJECT_SOURCE}\n  id: run\n- exec:\n    commandLine: npm run debug\n    component: runtime\n    group:\n      isDefault: true\n      kind: debug\n    workingDir: ${PROJECT_SOURCE}\n  id: debug\n- exec:\n    commandLine: npm test\n    component: runtime\n    group:\n      isDefault: true\n      kind: test\n    workingDir: ${PROJECT_SOURCE}\n  id: test\n\ncomponents:\n- name: outerloop-build\n  image:\n    dockerfile:\n      buildContext: ${PROJECT_SOURCE}\n      rootRequired: false\n      uri: ./Dockerfile\n    imageName: "{{CONTAINER_IMAGE}}"\n- name: outerloop-deployment\n  kubernetes:\n    inlined: |\n      kind: Deployment\n      apiVersion: apps/v1\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: {{RESOURCE_NAME}}\n        template:\n          metadata:\n            labels:\n              app: {{RESOURCE_NAME}}\n          spec:\n            containers:\n              - name: {{RESOURCE_NAME}}\n                image: {{CONTAINER_IMAGE}}\n                ports:\n                  - name: http\n                    containerPort: {{CONTAINER_PORT}}\n                    protocol: TCP\n                resources:\n                  limits:\n                    memory: "1024Mi"\n                    cpu: "500m"\n- name: outerloop-service\n  kubernetes:\n    inlined: |\n      apiVersion: v1\n      kind: Service\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        ports:\n        - name: "{{CONTAINER_PORT}}"\n          port: {{CONTAINER_PORT}}\n          protocol: TCP\n          targetPort: {{CONTAINER_PORT}}\n        selector:\n          app: {{RESOURCE_NAME}}\n        type: ClusterIP\n- name: outerloop-ingress\n  kubernetes:\n    inlined: |\n      apiVersion: networking.k8s.io/v1\n      kind: Ingress\n      metadata:\n        name: {{RESOURCE_NAME}}\n      spec:\n        rules:\n          - host: "{{DOMAIN_NAME}}"\n            http:\n              paths:\n                - path: "/"\n                  pathType: Prefix\n                  backend:\n                    service:\n                      name: {{RESOURCE_NAME}} \n                      port:\n                        number: {{CONTAINER_PORT}}\n- container:\n    endpoints:\n    - name: http-3000\n      targetPort: 3000\n    image: registry.access.redhat.com/ubi8/nodejs-14:latest\n    memoryLimit: 1024Mi\n    mountSources: true\n  name: runtime\n')),(0,a.kt)("h3",{id:"not-yet-implemented"},"Not Yet Implemented"),(0,a.kt)("p",null,"All full descriptions of missing specification features can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://devfile.io/docs/devfile/2.2.0/user-guide/api-reference/"},"2.2.0 API Specification"),"."),(0,a.kt)("p",null,"List of Devfile spec features not yet implemented in ",(0,a.kt)("inlineCode",{parentName:"p"},"odo"),":"),(0,a.kt)("h4",{id:"components-git-checkout"},"Components: Git Checkout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'components:\n- name: outerloop-build\n  image:\n    imageName: "{{CONTAINER_IMAGE}}"\n    dockerfile:\n      buildContext: ${PROJECT_SOURCE}\n      rootRequired: false\n      uri: ./Dockerfile\n\n      # NOT YET IMPLEMENTED\n      git:\n        checkoutFrom:\n          remote: subproject\n          revision: 1.0.0Final\n        fileLocation: ./Dockerfile\n        remotes:\n          origin: https://github.com/myusername/exampleproject.git\n')),(0,a.kt)("h4",{id:"components-devfile-checkout"},"Components: Devfile Checkout"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'components:\n- name: outerloop-build\n  image:\n    imageName: "{{CONTAINER_IMAGE}}"\n    dockerfile:\n      buildContext: ${PROJECT_SOURCE}\n      rootRequired: false\n      uri: ./Dockerfile\n\n      # NOT YET IMPLEMENTED\n      devfileRegistry:\n        id: myregistry\n        registryUrl: https://registry.devfile.io\n')),(0,a.kt)("h4",{id:"components-kubernetes-endpoints-and-deploybydefault"},"Components: Kubernetes Endpoints and DeployByDefault"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"components:\n- name: outerloop-deployment\n  kubernetes:\n    # NOT YET IMPLEMENTED\n    # See: https://devfile.io/docs/devfile/2.2.0/user-guide/api-reference/\n    # for full details\n    # endpoints:\n\n    # NOT YET IMPLEMENTED\n    # Defines if the component should be deployed during startup.\n    deployByDefault: false\n\n    # Below we provide the inline code for our Deployment\n    inlined: |\n      kind: Deployment\n      ...\n")))}m.isMDXComponent=!0}}]);