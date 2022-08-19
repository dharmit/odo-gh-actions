"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"3.0.0 (Beta 2) \ud83d\udea7","banner":null,"badge":true,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Awesome Introduction","href":"/odo-gh-actions/docs/introduction","docId":"introduction"},{"type":"category","label":"Overview","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Features","href":"/odo-gh-actions/docs/overview/features","docId":"overview/features"},{"type":"link","label":"Basics","href":"/odo-gh-actions/docs/overview/basics","docId":"overview/basics"},{"type":"link","label":"Installation","href":"/odo-gh-actions/docs/overview/installation","docId":"overview/installation"},{"type":"category","label":"Cluster Setup","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Kubernetes","href":"/odo-gh-actions/docs/overview/cluster-setup/kubernetes","docId":"overview/cluster-setup/kubernetes"},{"type":"link","label":"OpenShift","href":"/odo-gh-actions/docs/overview/cluster-setup/openshift","docId":"overview/cluster-setup/openshift"}]},{"type":"link","label":"Configuration","href":"/odo-gh-actions/docs/overview/configure","docId":"overview/configure"}]},{"type":"category","label":"User Guides","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Quickstart Guide","href":"/odo-gh-actions/docs/user-guides/quickstart","docId":"user-guides/quickstart"},{"type":"category","label":"Advanced Usage","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Deploying to IBM-Z and Power Architectures","href":"/odo-gh-actions/docs/user-guides/advanced/deploying-on-ibm-z-and-power","docId":"user-guides/advanced/deploying-on-ibm-z-and-power"},{"type":"link","label":"Only Push Specific Files","href":"/odo-gh-actions/docs/user-guides/advanced/pushing-specific-files","docId":"user-guides/advanced/pushing-specific-files"},{"type":"link","label":"Using Devfile Lifecycle Events","href":"/odo-gh-actions/docs/user-guides/advanced/using-devfile-lifecycle-events","docId":"user-guides/advanced/using-devfile-lifecycle-events"}]}]},{"type":"category","label":"Command Reference","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"JSON Output","href":"/odo-gh-actions/docs/command-reference/json-output","docId":"command-reference/json-output"},{"type":"link","label":"odo add binding","href":"/odo-gh-actions/docs/command-reference/add-binding","docId":"command-reference/add-binding"},{"type":"link","label":"odo build-images","href":"/odo-gh-actions/docs/command-reference/build-images","docId":"command-reference/build-images"},{"type":"link","label":"odo completion","href":"/odo-gh-actions/docs/command-reference/completion","docId":"command-reference/completion"},{"type":"link","label":"odo create namespace","href":"/odo-gh-actions/docs/command-reference/create-namespace","docId":"command-reference/create-namespace"},{"type":"link","label":"odo delete component","href":"/odo-gh-actions/docs/command-reference/delete-component","docId":"command-reference/delete-component"},{"type":"link","label":"odo delete namespace","href":"/odo-gh-actions/docs/command-reference/delete-namespace","docId":"command-reference/delete-namespace"},{"type":"link","label":"odo deploy","href":"/odo-gh-actions/docs/command-reference/deploy","docId":"command-reference/deploy"},{"type":"link","label":"odo describe binding","href":"/odo-gh-actions/docs/command-reference/describe-binding","docId":"command-reference/describe-binding"},{"type":"link","label":"odo describe component","href":"/odo-gh-actions/docs/command-reference/describe-component","docId":"command-reference/describe-component"},{"type":"link","label":"odo dev","href":"/odo-gh-actions/docs/command-reference/dev","docId":"command-reference/dev"},{"type":"link","label":"odo init","href":"/odo-gh-actions/docs/command-reference/init","docId":"command-reference/init"},{"type":"link","label":"odo list binding","href":"/odo-gh-actions/docs/command-reference/list-binding","docId":"command-reference/list-binding"},{"type":"link","label":"odo list namespace","href":"/odo-gh-actions/docs/command-reference/list-namespace","docId":"command-reference/list-namespace"},{"type":"link","label":"odo list","href":"/odo-gh-actions/docs/command-reference/list","docId":"command-reference/list"},{"type":"link","label":"odo logs","href":"/odo-gh-actions/docs/command-reference/logs","docId":"command-reference/logs"},{"type":"link","label":"odo preference","href":"/odo-gh-actions/docs/command-reference/preference","docId":"command-reference/preference"},{"type":"link","label":"odo registry","href":"/odo-gh-actions/docs/command-reference/registry","docId":"command-reference/registry"},{"type":"link","label":"odo remove binding","href":"/odo-gh-actions/docs/command-reference/remove-binding","docId":"command-reference/remove-binding"},{"type":"link","label":"odo set namespace","href":"/odo-gh-actions/docs/command-reference/set-namespace","docId":"command-reference/set-namespace"}]},{"type":"category","label":"Developer Reference","collapsible":false,"collapsed":false,"items":[{"type":"link","label":"Devfile Reference","href":"/odo-gh-actions/docs/development/devfile","docId":"development/devfile"},{"type":"link","label":"Contributing to odo","href":"/odo-gh-actions/docs/development/contribution","docId":"development/contribution"}]}]},"docs":{"command-reference/add-binding":{"id":"command-reference/add-binding","title":"odo add binding","description":"Description","sidebar":"tutorialSidebar"},"command-reference/build-images":{"id":"command-reference/build-images","title":"odo build-images","description":"odo can build container images based on Dockerfiles, and push these images to their registries.","sidebar":"tutorialSidebar"},"command-reference/completion":{"id":"command-reference/completion","title":"odo completion","description":"Description","sidebar":"tutorialSidebar"},"command-reference/create-namespace":{"id":"command-reference/create-namespace","title":"odo create namespace","description":"odo create namespace lets you create a namespace/project on your cluster. If you are on a Kubernetes cluster, running the command will create a Namespace resource for you, and for an OpenShift cluster, it will create a Project resource.","sidebar":"tutorialSidebar"},"command-reference/delete-component":{"id":"command-reference/delete-component","title":"odo delete component","description":"odo delete component command is useful for deleting resources that are managed by odo. It deletes the component and its related innerloop, and outerloop resources from the cluster.","sidebar":"tutorialSidebar"},"command-reference/delete-namespace":{"id":"command-reference/delete-namespace","title":"odo delete namespace","description":"odo delete namespace lets you delete a namespace/project on your cluster. If you are on a Kubernetes cluster, running the command will delete a Namespace resource for you, and for an OpenShift cluster, it will delete a Project resource.","sidebar":"tutorialSidebar"},"command-reference/deploy":{"id":"command-reference/deploy","title":"odo deploy","description":"odo can be used to deploy components in a similar manner they would be deployed by a CI/CD system,","sidebar":"tutorialSidebar"},"command-reference/describe-binding":{"id":"command-reference/describe-binding","title":"odo describe binding","description":"Description","sidebar":"tutorialSidebar"},"command-reference/describe-component":{"id":"command-reference/describe-component","title":"odo describe component","description":"odo describe component command is useful for getting information about a component managed by odo.","sidebar":"tutorialSidebar"},"command-reference/dev":{"id":"command-reference/dev","title":"odo dev","description":"Description","sidebar":"tutorialSidebar"},"command-reference/init":{"id":"command-reference/init","title":"odo init","description":"The odo init command is the first command to be executed when you want to bootstrap a new component, using odo. If sources already exist,","sidebar":"tutorialSidebar"},"command-reference/json-output":{"id":"command-reference/json-output","title":"JSON Output","description":"For odo to be used as a backend by graphical user interfaces (GUIs),","sidebar":"tutorialSidebar"},"command-reference/list":{"id":"command-reference/list","title":"odo list","description":"odo list command is useful for getting information about components running on a specific namespace.","sidebar":"tutorialSidebar"},"command-reference/list-binding":{"id":"command-reference/list-binding","title":"odo list binding","description":"Description","sidebar":"tutorialSidebar"},"command-reference/list-namespace":{"id":"command-reference/list-namespace","title":"odo list namespace","description":"Description","sidebar":"tutorialSidebar"},"command-reference/logs":{"id":"command-reference/logs","title":"odo logs","description":"Description","sidebar":"tutorialSidebar"},"command-reference/preference":{"id":"command-reference/preference","title":"odo preference","description":"See Configuration page in \\"Getting Started\\" section for details about odo preference command.","sidebar":"tutorialSidebar"},"command-reference/registry":{"id":"command-reference/registry","title":"odo registry","description":"The odo registry command lists all the Devfile stacks from Devfile registries.","sidebar":"tutorialSidebar"},"command-reference/remove-binding":{"id":"command-reference/remove-binding","title":"odo remove binding","description":"Description","sidebar":"tutorialSidebar"},"command-reference/set-namespace":{"id":"command-reference/set-namespace","title":"odo set namespace","description":"odo set namespace lets you set a namespace/project as the current active one in your local kubeconfig configuration.","sidebar":"tutorialSidebar"},"development/contribution":{"id":"development/contribution","title":"Contributing to odo","description":"* Contributing to code","sidebar":"tutorialSidebar"},"development/devfile":{"id":"development/devfile","title":"Devfile Reference","description":"Description","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Awesome Introduction","description":"What is odo?","sidebar":"tutorialSidebar"},"overview/basics":{"id":"overview/basics","title":"Basics","description":"odo abstracts Kubernetes concepts into a developer friendly terminology; in this document, we will take a look at the following terminologies:","sidebar":"tutorialSidebar"},"overview/cluster-setup/kubernetes":{"id":"overview/cluster-setup/kubernetes","title":"Kubernetes","description":"Introduction","sidebar":"tutorialSidebar"},"overview/cluster-setup/openshift":{"id":"overview/cluster-setup/openshift","title":"OpenShift","description":"Introduction","sidebar":"tutorialSidebar"},"overview/configure":{"id":"overview/configure","title":"Configuration","description":"Configuring odo global settings","sidebar":"tutorialSidebar"},"overview/features":{"id":"overview/features","title":"Features","description":"By using odo, application developers can develop, test, debug, and deploy microservices based applications on Kubernetes without having a deep understanding of the platform.","sidebar":"tutorialSidebar"},"overview/installation":{"id":"overview/installation","title":"Installation","description":"odo can be used as either a CLI tool or an IDE plugin on Mac, Windows or Linux.","sidebar":"tutorialSidebar"},"user-guides/advanced/deploying-on-ibm-z-and-power":{"id":"user-guides/advanced/deploying-on-ibm-z-and-power","title":"Deploying to IBM-Z and Power Architectures","description":"[//]: # (Add prerequisite section)","sidebar":"tutorialSidebar"},"user-guides/advanced/pushing-specific-files":{"id":"user-guides/advanced/pushing-specific-files","title":"Only Push Specific Files","description":"odo uses the odo.dev.push.path related attribute from the devfile\'s run commands to push only the specified files and folders to the component.","sidebar":"tutorialSidebar"},"user-guides/advanced/using-devfile-lifecycle-events":{"id":"user-guides/advanced/using-devfile-lifecycle-events","title":"Using Devfile Lifecycle Events","description":"odo uses devfile to build and deploy components. You can also use devfile events with a component during its lifecycle. The four different types of devfile events are preStart, postStart, preStop and postStop","sidebar":"tutorialSidebar"},"user-guides/quickstart":{"id":"user-guides/quickstart","title":"Quickstart Guide","description":"In this guide, we will be using odo to create a \\"Hello World\\" application.","sidebar":"tutorialSidebar"}}}')}}]);