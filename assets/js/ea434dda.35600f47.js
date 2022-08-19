"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[4192],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(t),u=i,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||a;return t?o.createElement(h,r(r({ref:n},d),{},{components:t})):o.createElement(h,r({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=t[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5134:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=t(3117),i=(t(7294),t(3905));const a={title:"odo v3-alpha1 Released",authors:[{name:"Parthvi Vala",url:"https://github.com/valaparthvi",image_url:"https://github.com/valaparthvi.png"},{name:"Philippe Martin",url:"https://github.com/feloy",image_url:"https://github.com/feloy.png"}],tags:["release"],slug:"odo-v3-alpha1-release"},r=void 0,l={permalink:"/blog/odo-v3-alpha1-release",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/blog/2022-05-02-odo-v3-alpha1.md",source:"@site/blog/2022-05-02-odo-v3-alpha1.md",title:"odo v3-alpha1 Released",description:"v3-alpha1 of odo has been released!",date:"2022-05-02T00:00:00.000Z",formattedDate:"May 2, 2022",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:9.3,truncated:!0,authors:[{name:"Parthvi Vala",url:"https://github.com/valaparthvi",image_url:"https://github.com/valaparthvi.png",imageURL:"https://github.com/valaparthvi.png"},{name:"Philippe Martin",url:"https://github.com/feloy",image_url:"https://github.com/feloy.png",imageURL:"https://github.com/feloy.png"}],frontMatter:{title:"odo v3-alpha1 Released",authors:[{name:"Parthvi Vala",url:"https://github.com/valaparthvi",image_url:"https://github.com/valaparthvi.png",imageURL:"https://github.com/valaparthvi.png"},{name:"Philippe Martin",url:"https://github.com/feloy",image_url:"https://github.com/feloy.png",imageURL:"https://github.com/feloy.png"}],tags:["release"],slug:"odo-v3-alpha1-release"},prevItem:{title:"Binding an external service with odo v3",permalink:"/blog/binding-external-service-with-odo-v3"},nextItem:{title:"odo 2.5.0 Released",permalink:"/blog/odo-250-release"}},p={authorsImageUrls:[void 0,void 0]},s=[{value:"An example of a Devfile",id:"an-example-of-a-devfile",level:2},{value:"Devfile registry",id:"devfile-registry",level:2},{value:"Introducing <code>odo</code> v3",id:"introducing-odo-v3",level:2},{value:"Initializing a project",id:"initializing-a-project",level:3},{value:"The development phase",id:"the-development-phase",level:2},{value:"The deployment phase",id:"the-deployment-phase",level:2},{value:"Demo",id:"demo",level:2}],d={toc:s};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"v3-alpha1")," of odo has been released!"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"odo")," is a tool that aims to simplify the life of developers working on cloud-native applications."),(0,i.kt)("p",null,"Thanks to the emergence of the ",(0,i.kt)("a",{parentName:"p",href:"https://devfile.io/"},"Devfile")," open standard, which has been accepted as a CNCF Sandbox project (January 2022), odo v3 is now entirely based on this open standard."),(0,i.kt)("p",null,"The goal of the Devfile standard is to define the structure of applications and how developers can work on them."),(0,i.kt)("p",null,"A single Devfile defines the smallest building block of an application, that a developer can: build, run, test, debug and deploy. In a cloud-native environment, we generally talk about a micro-service. "),(0,i.kt)("p",null,"Firstly, the Devfile describes the container that is needed to be deployed on a cluster during the development phases, along with the commands to execute on this container to build, run, test and debug the program, assuming the sources have been synchronized into the container."),(0,i.kt)("p",null,"Secondly, the Devfile provides the instructions to build the container image ready for production, along with the Kubernetes resources to deploy to the cluster."),(0,i.kt)("h2",{id:"an-example-of-a-devfile"},"An example of a Devfile"),(0,i.kt)("p",null,"To illustrate, here is a simple yet complete Devfile, usable for a Node.js micro-service:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'schemaVersion: 2.2.0\nmetadata:\n  description: Stack with NodeJS 12\n  displayName: NodeJS Runtime\n  language: nodejs\n  name: my-nodejs-app\n  projectType: nodejs\nvariables:\n  CONTAINER_IMAGE: quay.io/phmartin/myimage\ncomponents:\n- name: runtime\n  container:\n    endpoints:\n    - name: http-3000\n      targetPort: 3000\n    - name: debug-5858\n      targetPort: 5858\n    image: registry.access.redhat.com/ubi8/nodejs-14:latest\n    memoryLimit: 1024Mi\n    mountSources: true\n    sourceMapping: /project\n- name: outerloop-build\n  image:\n    dockerfile:\n      buildContext: ${PROJECT_ROOT}\n      rootRequired: false\n      uri: ./Dockerfile\n    imageName: "{{CONTAINER_IMAGE}}"\n- name: outerloop-deployment\n  kubernetes:\n    inlined: |\n      kind: Deployment\n      apiVersion: apps/v1\n      metadata:\n        name: my-node\n      spec:\n        replicas: 1\n        selector:\n          matchLabels:\n            app: node-app\n        template:\n          metadata:\n            labels:\n              app: node-app\n          spec:\n            containers:\n              - name: my-node\n                image: {{CONTAINER_IMAGE}}\n                ports:\n                  - name: http\n                    containerPort: 3001\n                    protocol: TCP\n                resources:\n                  limits:\n                    memory: "1024Mi"\n                    cpu: "500m"\n- name: outerloop-service\n  kubernetes:\n    inlined: |\n      apiVersion: v1\n      kind: Service\n      metadata:\n        name: svc\n      spec:\n        ports:\n        - name: "3000"\n          port: 3000\n          protocol: TCP\n          targetPort: 3000\n        selector:\n          app: node-app\n        type: ClusterIP\ncommands:\n- id: install\n  exec:\n    commandLine: npm install\n    component: runtime\n    group:\n      isDefault: true\n      kind: build\n    workingDir: /project\n- id: run\n  exec:\n    commandLine: npm start\n    component: runtime\n    group:\n      isDefault: true\n      kind: run\n    workingDir: /project\n- id: debug\n  exec:\n    commandLine: npm run debug\n    component: runtime\n    group:\n      isDefault: true\n      kind: debug\n    workingDir: /project\n- id: test\n  exec:\n    commandLine: npm test\n    component: runtime\n    group:\n      isDefault: true\n      kind: test\n    workingDir: /project\n- id: deploy\n  composite:\n    commands:\n    - build-image\n    - k8s-deployment\n    - k8s-service\n    group:\n      isDefault: true\n      kind: deploy\n- id: build-image\n  apply:\n    component: outerloop-build\n- id: k8s-deployment\n  apply:\n    component: outerloop-deployment\n- id: k8s-service\n  apply:\n    component: outerloop-service\nstarterProjects:\n- name: nodejs-starter\n  git:\n    remotes:\n      origin: https://github.com/odo-devfiles/nodejs-ex.git\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"runtime")," component defines the container that will be deployed to support the program in development. Specifically, it will use the image ",(0,i.kt)("inlineCode",{parentName:"p"},"registry.access.redhat.com/ubi8/nodejs-14:latest"),", and sources should be placed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"/project")," directory of the container. Two endpoints are also defined, one to access the micro-service, the other to help the debugger attach to the process, during debugging sessions."),(0,i.kt)("p",null,"The commands ",(0,i.kt)("inlineCode",{parentName:"p"},"install"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"debug")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," indicate which commands to execute to respectively build, execute, debug and test the application. For example, the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," command will be executed in the container to build the application, then ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," will be executed to start the application."),(0,i.kt)("p",null,"To deploy the micro-service, the component ",(0,i.kt)("inlineCode",{parentName:"p"},"outerloop-build")," indicates how to build the production image (by using ",(0,i.kt)("inlineCode",{parentName:"p"},"./Dockerfile"),", and creating an image whose name is defined by the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"CONTAINER_IMAGE")," defined at the beginning of the devfile). Then, two other components ",(0,i.kt)("inlineCode",{parentName:"p"},"outerloop-deployment")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"outerloop-service")," define the Kubernetes resources to deploy to the cluster. Note that the first one defines a Deployment that will help deploy a container using the image built with the previous ",(0,i.kt)("inlineCode",{parentName:"p"},"outerloop-build")," component. And, the second ",(0,i.kt)("inlineCode",{parentName:"p"},"outerloop-service")," component will help expose the deployment created by ",(0,i.kt)("inlineCode",{parentName:"p"},"outerloop-deployment")," component."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"starterProjects")," section at the end of the Devfile indicates a list of starter projects, that can be downloaded to have an example of program deployable with this Devfile."),(0,i.kt)("h2",{id:"devfile-registry"},"Devfile registry"),(0,i.kt)("p",null,"We can see through the previous example that a Devfile is generic enough, with only a few specific values, like the endpoints and the image names. A Devfile written for a specific language and framework can be used by most of the programs written using this language and framework, with minimum personalization."),(0,i.kt)("p",null,"A Devfile registry is available at ",(0,i.kt)("a",{parentName:"p",href:"https://registry.devfile.io"},"https://registry.devfile.io"),", containing Devfiles for a large variety of languages and frameworks, and you can deploy your own registry to make accessible your own Devfiles."),(0,i.kt)("h2",{id:"introducing-odo-v3"},"Introducing ",(0,i.kt)("inlineCode",{parentName:"h2"},"odo")," v3"),(0,i.kt)("p",null,"You can find the instructions to install ",(0,i.kt)("inlineCode",{parentName:"p"},"odo")," v3-alpha1 from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/redhat-developer/odo/releases/tag/v3.0.0-alpha1"},"this release page"),". The binaries are accessible ",(0,i.kt)("a",{parentName:"p",href:"https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v3.0.0~alpha1/"},"here"),"."),(0,i.kt)("h3",{id:"initializing-a-project"},"Initializing a project"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"odo init")," command is the first command to use, before starting to use ",(0,i.kt)("inlineCode",{parentName:"p"},"odo")," with your project. The goal of this first step is to get a suitable Devfile for your project."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"odo init")," will search for Devfiles in the Devfile registries. By default, ",(0,i.kt)("inlineCode",{parentName:"p"},"odo")," is configured to access only one Devfile registry (the one specified above), and you can modify the Devfile registries ",(0,i.kt)("inlineCode",{parentName:"p"},"odo")," is accessing using the command ",(0,i.kt)("inlineCode",{parentName:"p"},"odo preference registry"),"."),(0,i.kt)("p",null,"This ",(0,i.kt)("inlineCode",{parentName:"p"},"odo init")," command offers two modes, either interactive, or manual. The interactive mode will help you discover the appropriate Devfile. To use the interactive mode, you just need to enter ",(0,i.kt)("inlineCode",{parentName:"p"},"odo init")," in your command line."),(0,i.kt)("p",null,"If you execute this command from a directory containing sources, ",(0,i.kt)("inlineCode",{parentName:"p"},"odo")," will try to recognize the language and framework you are using, will search into the Devfile registries that you have configured for the most appropriate Devfile, and give you the choice to use it, or to search for another one. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ odo init\n  __\n /  \\__     Initializing new component\n \\__/  \\    Files: Source code detected, a Devfile will be determined based upon source code autodetection\n /  \\__/    odo version: v3.0.0-alpha1\n \\__/\n\nInteractive mode enabled, please answer the following questions:\nBased on the files in the current directory odo detected\nLanguage: javascript\nProject type: nodejs\nThe devfile "nodejs" from the registry "DefaultDevfileRegistry" will be downloaded.\n? Is this correct? (Y/n) \n')),(0,i.kt)("p",null,"If you answer ",(0,i.kt)("inlineCode",{parentName:"p"},"No")," here, or if you run the ",(0,i.kt)("inlineCode",{parentName:"p"},"odo init")," command from an empty directory, ",(0,i.kt)("inlineCode",{parentName:"p"},"odo init")," will help you choose the appropriate Devfile. The command will also help you make some personalization on the Devfile, by personalizing the endpoints and the environment variables for the container that will be deployed during the development phase."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'? Select language: javascript\n? Select project type: Node.js Runtime\n \u2713  Downloading devfile "nodejs" from registry "DefaultDevfileRegistry" [961ms]\nCurrent component configuration:\nContainer "runtime":\n  Opened ports:\n   - 3000\n  Environment variables:\n? Select container for which you want to change configuration? NONE - configuration is correct\n? Enter component name: my-nodejs-app\n\nYour new component \'my-nodejs-app\' is ready in the current directory.\nTo start editing your component, use \'odo dev\' and open this folder in your favorite IDE.\nChanges will be directly reflected on the cluster.\n')),(0,i.kt)("p",null,"Finally, if you start the ",(0,i.kt)("inlineCode",{parentName:"p"},"odo init")," command from an empty directory, it will give you the choice to download one of the starter projects listed in the Devfile."),(0,i.kt)("h2",{id:"the-development-phase"},"The development phase"),(0,i.kt)("p",null,"Now that a Devfile is present in the current directory, you can run your application in the development mode, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"odo dev")," command. This command will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Deployment")," in the cluster that will help start a container as defined in the Devfile. Then, the sources present in the current directory will be synchronized into the container, and the commands to build and run the application will be executed from inside the container."),(0,i.kt)("p",null,"At the same time, a port-forwarding will be done for each endpoint defined in the Devfile, so you can access the container ports through local ports in your development machine."),(0,i.kt)("p",null,"Finally, ",(0,i.kt)("inlineCode",{parentName:"p"},"odo")," will watch for changes in the current directory. When files are modified, added or deleted, ",(0,i.kt)("inlineCode",{parentName:"p"},"odo")," will synchronize the changes to the container, and will restart the build and run commands from inside the container."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ odo dev\n  __\n /  \\__     Developing using the my-nodejs-app Devfile\n \\__/  \\    Namespace: prj2\n /  \\__/    odo version: v3.0.0-alpha1\n \\__/\n\n\u21aa Deploying to the cluster in developer mode\n \u2713  Waiting for Kubernetes resources [6s]\n \u2713  Syncing files into the container [439ms]\n \u2713  Building your application in container on cluster [3s]\n \u2713  Executing the application [1s]\n\nYour application is now running on the cluster\n - Forwarding from 127.0.0.1:40001 -> 3000\n - Forwarding from 127.0.0.1:40002 -> 5858\n\nWatching for changes in the current directory /home/phmartin/Documents/tests/devto-deploy\nPress Ctrl+c to exit `odo dev` and delete resources from the cluster\n")),(0,i.kt)("p",null,"To be able to debug the application, you will need to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"odo dev --debug")," command instead."),(0,i.kt)("p",null,"When you have finished the development session, you just need to hit Ctrl-c to stop the ",(0,i.kt)("inlineCode",{parentName:"p"},"odo dev")," command. The command won't terminate immediately, as it will delete the resources it has deployed on the cluster before exiting."),(0,i.kt)("h2",{id:"the-deployment-phase"},"The deployment phase"),(0,i.kt)("p",null,"When you are satisfied with your program, you may want to deploy it. The first step would be to build the container image using a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile"),", instead of using a generic image as during the development phase. The second step would be to deploy personalized resources, instead of the Deployment used during the development phase."),(0,i.kt)("p",null,"At the time of this blog post, no Devfile within the default Devfile registry contains instructions for the deployment phase. By using the Devfile provided as an example above, the command ",(0,i.kt)("inlineCode",{parentName:"p"},"odo deploy")," will build the container image using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Dockerfile")," present in the directory, and then deploy a personalized Deployment using the container image and a Service into the cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ odo deploy\n  __\n /  \\__     Deploying the application using my-nodejs-app Devfile\n \\__/  \\    Namespace: prj2\n /  \\__/    odo version: v3.0.0-alpha1\n \\__/\n\n\u21aa Building & Pushing Container: quay.io/phmartin/myimage\n \u2022  Building image locally  ...\nSTEP 1/7: FROM docker.io/library/node:17\nSTEP 2/7: WORKDIR /usr/src/app\n[...]\nSTEP 7/7: CMD [ "node", "server.js" ]\nCOMMIT quay.io/phmartin/myimage\n \u2713  Building image locally [6s]\n \u2022  Pushing image to container registry  ...\n[...]\nWriting manifest to image destination\nStoring signatures\n \u2713  Pushing image to container registry [8s]\n\n\u21aa Deploying Kubernetes Component: my-node\n \u2713  Searching resource in cluster \n \u2713  Creating kind Deployment [50ms]\n\n\u21aa Deploying Kubernetes Component: svc\n \u2713  Searching resource in cluster \n \u2713  Creating kind Service [57ms]\n\nYour Devfile has been successfully deployed\n')),(0,i.kt)("p",null,"At any moment, you can check if a component has been deployed by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"odo list")," command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ odo list\n \u2713  Listing components from namespace 'prj2' [61ms]\n NAME             PROJECT TYPE  RUNNING IN  MANAGED \n * my-nodejs-app  nodejs        Deploy      odo     \n")),(0,i.kt)("p",null,"When you are done with this application or if you want to undeploy it to work on development mode again, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"odo delete component")," to undeploy the component from the cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ odo delete component\nSearching resources to delete, please wait...\nThis will delete "my-nodejs-app" from the namespace "prj2".\n \u2022  The component contains the following resources that will get deleted:\n    - Deployment: my-node\n    - Service: svc\n? Are you sure you want to delete "my-nodejs-app" and all its resources? Yes\nThe component "my-nodejs-app" is successfully deleted from namespace "prj2"\n')),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)("iframe",{width:"740",height:"500",src:"https://www.youtube.com/embed/fw2_cVj3Mv4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}c.isMDXComponent=!0}}]);