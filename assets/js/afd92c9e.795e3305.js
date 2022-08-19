"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,h=d["".concat(s,".").concat(g)]||d[g]||c[g]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6593:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(3117),a=(n(7294),n(3905));const o={title:"Kubernetes",sidebar_position:1},i="Setting up a Kubernetes cluster",l={unversionedId:"getting-started/cluster-setup/kubernetes",id:"version-2.5.0/getting-started/cluster-setup/kubernetes",title:"Kubernetes",description:"Introduction",source:"@site/versioned_docs/version-2.5.0/getting-started/cluster-setup/kubernetes.md",sourceDirName:"getting-started/cluster-setup",slug:"/getting-started/cluster-setup/kubernetes",permalink:"/docs/2.5.0/getting-started/cluster-setup/kubernetes",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/versioned_docs/version-2.5.0/getting-started/cluster-setup/kubernetes.md",tags:[],version:"2.5.0",sidebarPosition:1,frontMatter:{title:"Kubernetes",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/2.5.0/getting-started/installation"},next:{title:"OpenShift",permalink:"/docs/2.5.0/getting-started/cluster-setup/openshift"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Summary",id:"summary",level:2},{value:"Installing an Ingress controller",id:"installing-an-ingress-controller",level:2},{value:"Minikube",id:"minikube",level:3},{value:"NGINX Ingress",id:"nginx-ingress",level:3},{value:"Other Ingress controllers",id:"other-ingress-controllers",level:3},{value:"Installing the Operator Lifecycle Manager (OLM)",id:"installing-the-operator-lifecycle-manager-olm",level:2},{value:"Installing an Operator",id:"installing-an-operator",level:3},{value:"Verifying the Operator installation",id:"verifying-the-operator-installation",level:3},{value:"Troubleshooting the Operator installation",id:"troubleshooting-the-operator-installation",level:3},{value:"Checking to see if an Operator has been installed",id:"checking-to-see-if-an-operator-has-been-installed",level:3},{value:"(Optional) Installing the Service Binding Operator",id:"optional-installing-the-service-binding-operator",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Confirming your Ingress Controller functionality",id:"confirming-your-ingress-controller-functionality",level:3},{value:"Confirming your Storage Provisioning functionality",id:"confirming-your-storage-provisioning-functionality",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setting-up-a-kubernetes-cluster"},"Setting up a Kubernetes cluster"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This guide is helpful in setting up a development environment intended to be used with ",(0,a.kt)("inlineCode",{parentName:"p"},"odo"),"; this setup is not recommended for a production environment."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"odo")," can be used with ANY Kubernetes cluster. However, this development environment will ensure complete coverage of all features of ",(0,a.kt)("inlineCode",{parentName:"p"},"odo"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You have a Kubernetes cluster set up (such as ",(0,a.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"minikube"),")"),(0,a.kt)("li",{parentName:"ul"},"You have admin privileges to the cluster")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important notes:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"odo")," will use the ",(0,a.kt)("strong",{parentName:"p"},"default")," ingress and storage provisioning on your cluster. If they have not been set correctly, see our ",(0,a.kt)("a",{parentName:"p",href:"../cluster-setup/kubernetes#troubleshooting"},"troubleshooting guide")," for more details."),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An Ingress controller in order to use ",(0,a.kt)("inlineCode",{parentName:"li"},"odo url create")),(0,a.kt)("li",{parentName:"ul"},"Operator Lifecycle Manager in order to use ",(0,a.kt)("inlineCode",{parentName:"li"},"odo service create")),(0,a.kt)("li",{parentName:"ul"},"(Optional) Service Binding Operator in order to use ",(0,a.kt)("inlineCode",{parentName:"li"},"odo link"))),(0,a.kt)("h2",{id:"installing-an-ingress-controller"},"Installing an Ingress controller"),(0,a.kt)("p",null,"Creating an Ingress controller is required to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"odo url create")," feature."),(0,a.kt)("p",null,"This can be enabled by installing ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/"},"an Ingress addon as per the Kubernetes documentation")," such as: the built-in one on ",(0,a.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"minikube")," or ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/"},"NGINX Ingress"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IMPORTANT:")," ",(0,a.kt)("inlineCode",{parentName:"p"},"odo")," cannot specify an Ingress controller and will use the ",(0,a.kt)("em",{parentName:"p"},"default")," Ingress controller. "),(0,a.kt)("p",null,"If you are unable to access your components, check that your ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/#i-have-only-one-ingress-controller-in-my-cluster-what-should-i-do"},"default Ingress controller")," has been set correctly."),(0,a.kt)("h3",{id:"minikube"},"Minikube"),(0,a.kt)("p",null,"To install an Ingress controller on a minikube cluster, enable the ",(0,a.kt)("strong",{parentName:"p"},"ingress")," addon with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"minikube addons enable ingress\n")),(0,a.kt)("h3",{id:"nginx-ingress"},"NGINX Ingress"),(0,a.kt)("p",null,"To enable the Ingress feature on a Kubernetes cluster ",(0,a.kt)("em",{parentName:"p"},"other than minikube"),", we reccomend to use the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/deploy/"},"NGINX Ingress controller"),"."),(0,a.kt)("p",null,"On the default installation method, you will need to set NGINX Ingress as your ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/#i-have-only-one-ingress-controller-in-my-cluster-what-should-i-do"},"default Ingress controller"),", so ",(0,a.kt)("inlineCode",{parentName:"p"},"odo")," may deploy URLs correctly."),(0,a.kt)("h3",{id:"other-ingress-controllers"},"Other Ingress controllers"),(0,a.kt)("p",null,"For a list of all available Ingress controllers see the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/"},"the Ingress controller documentation"),"."),(0,a.kt)("p",null,"To learn more about enabling this feature on your cluster, see the ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/ingress/#prerequisites"},"Ingress prerequisites")," on the official kubernetes documentation."),(0,a.kt)("h2",{id:"installing-the-operator-lifecycle-manager-olm"},"Installing the Operator Lifecycle Manager (OLM)"),(0,a.kt)("p",null,"Installing the Operator Lifecycle Manager (OLM) is required to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"odo service create")," feature."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://olm.operatorframework.io/"},"Operator Lifecycle Manager (OLM)")," is an open source toolkit to manage Kubernetes native applications, called Operators, in a streamlined and scalable way."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"odo")," utilizes Operators in order to create and link services to applications."),(0,a.kt)("p",null,"The following command will install OLM cluster-wide as well as create two new namespaces: ",(0,a.kt)("inlineCode",{parentName:"p"},"olm")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"operators"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sL https://github.com/operator-framework/operator-lifecycle-manager/releases/download/v0.20.0/install.sh | bash -s v0.20.0\n")),(0,a.kt)("p",null,"Running the script will take some time to install all the necessary resources in the Kubernetes cluster including the ",(0,a.kt)("inlineCode",{parentName:"p"},"OperatorGroup")," resource."),(0,a.kt)("p",null,"Note: Check the OLM ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/operator-framework/operator-lifecycle-manager/releases/"},"release page")," for the latest release."),(0,a.kt)("h3",{id:"installing-an-operator"},"Installing an Operator"),(0,a.kt)("p",null,"Installing an Operator allows you to install a service such as Postgres, Redis or DataDog."),(0,a.kt)("p",null,"To install an operator from the OperatorHub website:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Visit the ",(0,a.kt)("a",{parentName:"li",href:"https://operatorhub.io"},"OperatorHub")," website."),(0,a.kt)("li",{parentName:"ol"},"Search for an Operator of your choice."),(0,a.kt)("li",{parentName:"ol"},"Navigate to its detail page."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Install"),"."),(0,a.kt)("li",{parentName:"ol"},"Follow the instruction in the installation popup. Please make sure to install the Operator in your desired namespace or cluster-wide, depending on your choice and the Operator capability."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#verifying-the-operator-installation"},"Verify the Operator installation"),".")),(0,a.kt)("h3",{id:"verifying-the-operator-installation"},"Verifying the Operator installation"),(0,a.kt)("p",null,"Once the Operator is successfully installed on the cluster, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"odo")," to verify the Operator installation and see the CRDs associated with it; run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"odo catalog list services\n")),(0,a.kt)("p",null,"The output may look similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"odo catalog list services\nServices available through Operators\nNAME                                CRDs\ndatadog-operator.v0.6.0             DatadogAgent, DatadogMetric, DatadogMonitor\nservice-binding-operator.v0.9.1     ServiceBinding, ServiceBinding\n")),(0,a.kt)("p",null,"If you do not see your installed Operator in the list, follow the ",(0,a.kt)("a",{parentName:"p",href:"#troubleshoot-the-operator-installation"},"troubleshooting guide")," to find the issue and debug it."),(0,a.kt)("h3",{id:"troubleshooting-the-operator-installation"},"Troubleshooting the Operator installation"),(0,a.kt)("p",null,"There are two ways to confirm that the Operator has been installed properly."),(0,a.kt)("p",null,"The examples you may see in this guide use ",(0,a.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/datadog-operator"},"Datadog Operator")," and ",(0,a.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/service-binding-operator"},"Service Binding Operator"),"."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify that its pod started and is in \u201cRunning\u201d state."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n operators\n")),(0,a.kt)("p",{parentName:"li"},"The output may look similar to:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n operators\nNAME                                       READY   STATUS    RESTARTS   AGE\ndatadog-operator-manager-5db67c7f4-hgb59   1/1     Running   0          2m13s\nservice-binding-operator-c8d7587b8-lxztx   1/1     Running   5          6d23h\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify that the ClusterServiceVersion (csv) resource is in Succeeded or Installing phase."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get csv -n operators\n")),(0,a.kt)("p",{parentName:"li"},"The output may look similar to:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get csv -n operators\nNAME                              DISPLAY                    VERSION   REPLACES                          PHASE\ndatadog-operator.v0.6.0           Datadog Operator           0.6.0     datadog-operator.v0.5.0           Succeeded\nservice-binding-operator.v0.9.1   Service Binding Operator   0.9.1     service-binding-operator.v0.9.0   Succeeded\n")),(0,a.kt)("p",{parentName:"li"},"If you see the value under PHASE column to be anything other than ",(0,a.kt)("em",{parentName:"p"},"Installing")," or ",(0,a.kt)("em",{parentName:"p"},"Succeeded"),", please take a look at the pods in ",(0,a.kt)("inlineCode",{parentName:"p"},"olm")," namespace and ensure that the pod starting with name ",(0,a.kt)("inlineCode",{parentName:"p"},"operatorhubio-catalog")," is in Running state:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pods -n olm\nNAME                                READY   STATUS             RESTARTS   AGE\noperatorhubio-catalog-x24dq         0/1     CrashLoopBackOff   6          9m40s\n")),(0,a.kt)("p",{parentName:"li"},"If you see output like above where the pod is in CrashLoopBackOff state or any other state other than Running, delete the pod:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl delete pods/<operatorhubio-catalog-name> -n olm\n")))),(0,a.kt)("h3",{id:"checking-to-see-if-an-operator-has-been-installed"},"Checking to see if an Operator has been installed"),(0,a.kt)("p",null,"For this example, we will check the ",(0,a.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/postgresql"},"PostgreSQL Operator")," installation."),(0,a.kt)("p",null,"Check ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get csv")," to see if your Operator exists:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get csv                         \nNAME                      DISPLAY                           VERSION   REPLACES                  PHASE\npostgresoperator.v5.0.3   Crunchy Postgres for Kubernetes   5.0.3     postgresoperator.v5.0.2   Succeeded\n")),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"PHASE")," is something other than ",(0,a.kt)("inlineCode",{parentName:"p"},"Succeeded"),", you won't see it in ",(0,a.kt)("inlineCode",{parentName:"p"},"odo catalog list services")," output, and you won't be able to create a working Operator backed service out of it either. You will have to wait patiently until ",(0,a.kt)("inlineCode",{parentName:"p"},"PHASE")," says ",(0,a.kt)("inlineCode",{parentName:"p"},"Suceeded"),"."),(0,a.kt)("h2",{id:"optional-installing-the-service-binding-operator"},"(Optional) Installing the Service Binding Operator"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"odo")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://operatorhub.io/operator/service-binding-operator"},"Service Binding Operator")," to provide the ",(0,a.kt)("inlineCode",{parentName:"p"},"odo link")," feature which helps to connect an odo component to a service or another component."),(0,a.kt)("p",null,"The Service Binding Operator is ",(0,a.kt)("em",{parentName:"p"},"optional")," and is used to provide extra metadata support for ",(0,a.kt)("inlineCode",{parentName:"p"},"odo")," deployments."),(0,a.kt)("p",null,"Operators can be installed in a specific namespace or across the cluster-wide."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create -f https://operatorhub.io/install/service-binding-operator.yaml\n")),(0,a.kt)("p",null,"Running the command will create the necessary resource in the ",(0,a.kt)("inlineCode",{parentName:"p"},"operators")," namespace."),(0,a.kt)("p",null,"If you want to access this resource from other namespaces as well, add your target namespace to ",(0,a.kt)("inlineCode",{parentName:"p"},".spec.targetNamespaces")," list in the ",(0,a.kt)("inlineCode",{parentName:"p"},"service-binding-operator.yaml")," file before running ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl create"),"."),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"#verifying-the-operator-installation"},"Verifying the Operator installation")," to ensure that the Operator was installed successfully."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"confirming-your-ingress-controller-functionality"},"Confirming your Ingress Controller functionality"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"odo")," will use the ",(0,a.kt)("em",{parentName:"p"},"default")," Ingress Controller. By default, when you install an Ingress Controller such as ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/"},"NGINX Ingress"),", it will ",(0,a.kt)("em",{parentName:"p"},"not")," be set as the default."),(0,a.kt)("p",null,"You must set it as the default Ingress Controller by modifying the annotation your IngressClass:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get IngressClass -A\nkubectl edit IngressClass/YOUR-INGRESS -n YOUR-NAMESPACE\n")),(0,a.kt)("p",null,"And add the following annotation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'annotation:\n  ingressclass.kubernetes.io/is-default-class: "true"\n')),(0,a.kt)("h3",{id:"confirming-your-storage-provisioning-functionality"},"Confirming your Storage Provisioning functionality"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"odo")," deploys with ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/"},"Persistent Volume Claims"),". By default, when you install a ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"StorageClass")," such as ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/#glusterfs"},"GlusterFS"),", it will ",(0,a.kt)("em",{parentName:"p"},"not")," be set as the default."),(0,a.kt)("p",null,"You must set it as the default storage provisioner by modifying the annotation your StorageClass:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get StorageClass -A\nkubectl edit StorageClass/YOUR-STORAGE-CLASS -n YOUR-NAMESPACE\n")),(0,a.kt)("p",null,"And add the following annotation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'annotation:\n  storageclass.kubernetes.io/is-default-class: "true"\n')))}c.isMDXComponent=!0}}]);