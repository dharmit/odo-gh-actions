"use strict";(self.webpackChunkodo_dev=self.webpackChunkodo_dev||[]).push([[7736],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var o=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,o,l=function(e,t){if(null==e)return{};var a,o,l={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=l,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return a?o.createElement(h,r(r({ref:t},p),{},{components:a})):o.createElement(h,r({ref:t},p))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var d=2;d<n;d++)r[d]=a[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:(e,t,a)=>{a.d(t,{Z:()=>l});var o=a(7294);function l(e){let{children:t,hidden:a,className:l}=e;return o.createElement("div",{role:"tabpanel",hidden:a,className:l},t)}},9877:(e,t,a)=>{a.d(t,{Z:()=>p});var o=a(3117),l=a(7294),n=a(2389),r=a(650),i=a(6010);const s="tabItem_LplD";function d(e){var t,a,n;const{lazy:d,block:p,defaultValue:c,values:u,groupId:m,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=u?u:k.map((e=>{let{props:{value:t,label:a,attributes:o}}=e;return{value:t,label:a,attributes:o}})),b=(0,r.lx)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===c?c:null!=(t=null!=c?c:null==(a=k.find((e=>e.props.default)))?void 0:a.props.value)?t:null==(n=k[0])?void 0:n.props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:f}=(0,r.UB)(),[y,w]=(0,l.useState)(g),O=[],{blockElementScrollPositionUntilNextRender:H}=(0,r.o5)();if(null!=m){const e=N[m];null!=e&&e!==y&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=O.indexOf(t),o=v[a].value;o!==y&&(H(t),w(o),null!=m&&f(m,o))},x=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]||O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]||O[O.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},h)},v.map((e=>{let{value:t,label:a,attributes:n}=e;return l.createElement("li",(0,o.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>O.push(e),onKeyDown:x,onFocus:T,onClick:T},n,{className:(0,i.Z)("tabs__item",s,null==n?void 0:n.className,{"tabs__item--active":y===t})}),null!=a?a:t)}))),d?(0,l.cloneElement)(k.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function p(e){const t=(0,n.Z)();return l.createElement(d,(0,o.Z)({key:String(t)},e))}},2787:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=a(3117),l=(a(7294),a(3905)),n=a(9877),r=a(8215);const i={title:"Installation",sidebar_position:3},s=void 0,d={unversionedId:"getting-started/installation",id:"version-2.5.0/getting-started/installation",title:"Installation",description:"odo can be used as either a CLI tool or an IDE plugin on Mac, Windows or Linux.",source:"@site/versioned_docs/version-2.5.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/odo-gh-actions/docs/2.5.0/getting-started/installation",editUrl:"https://github.com/redhat-developer/odo/edit/main/docs/website/versioned_docs/version-2.5.0/getting-started/installation.md",tags:[],version:"2.5.0",sidebarPosition:3,frontMatter:{title:"Installation",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/odo-gh-actions/docs/2.5.0/getting-started/basics"},next:{title:"Kubernetes",permalink:"/odo-gh-actions/docs/2.5.0/getting-started/cluster-setup/kubernetes"}},p={},c=[{value:"CLI installation",id:"cli-installation",level:2},{value:"Linux",id:"linux",level:3},{value:"MacOS",id:"macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Installing from source code",id:"installing-from-source-code",level:3},{value:"IDE Installation",id:"ide-installation",level:2},{value:"Installing <code>odo</code> in Visual Studio Code (VSCode)",id:"installing-odo-in-visual-studio-code-vscode",level:3}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"odo")," can be used as either a ",(0,l.kt)("a",{parentName:"p",href:"../getting-started/installation#cli-binary-installation"},"CLI tool")," or an ",(0,l.kt)("a",{parentName:"p",href:"../getting-started/installation#ide-installation"},"IDE plugin")," on Mac, Windows or Linux."),(0,l.kt)("h2",{id:"cli-installation"},"CLI installation"),(0,l.kt)("p",null,"Each release is ",(0,l.kt)("em",{parentName:"p"},"signed"),", ",(0,l.kt)("em",{parentName:"p"},"checksummed"),", ",(0,l.kt)("em",{parentName:"p"},"verified"),", and then pushed to our ",(0,l.kt)("a",{parentName:"p",href:"https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/"},"binary mirror"),"."),(0,l.kt)("p",null,"For more information on the changes of each release, they can be viewed either on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/redhat-developer/odo/releases"},"GitHub")," or the ",(0,l.kt)("a",{parentName:"p",href:"/blog"},"blog"),"."),(0,l.kt)("h3",{id:"linux"},"Linux"),(0,l.kt)(n.Z,{defaultValue:"amd64",values:[{label:"Intel / AMD 64",value:"amd64"},{label:"ARM 64",value:"arm64"},{label:"PowerPC",value:"ppc64le"},{label:"IBM Z",value:"s390x"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"amd64",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"odo")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"amd64")," architecture:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the v2.5.1 release from the mirror:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-linux-amd64 -o odo\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"(Optional) Verify the downloaded binary with the SHA-256 sum:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-linux-amd64.sha256 -o odo.sha256\necho "$(<odo.sha256)  odo" | shasum -a 256 --check\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Install odo:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo install -o root -g root -m 0755 odo /usr/local/bin/odo\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"(Optional) If you do not have root access, you can install ",(0,l.kt)("inlineCode",{parentName:"li"},"odo")," to the local directory and add it to your ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $HOME/bin \ncp ./odo $HOME/bin/odo\nexport PATH=$PATH:$HOME/bin\n# (Optional) Add the $HOME/bin to your shell initialization file\necho 'export PATH=$PATH:$HOME/bin' >> ~/.bashrc\n"))),(0,l.kt)(r.Z,{value:"arm64",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"odo")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"arm64")," architecture:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the v2.5.1 release from the mirror:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-linux-arm64 -o odo\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"(Optional) Verify the downloaded binary with the SHA-256 sum:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-linux-arm64.sha256 -o odo.sha256\necho "$(<odo.sha256)  odo" | shasum -a 256 --check\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Install odo:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo install -o root -g root -m 0755 odo /usr/local/bin/odo\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"(Optional) If you do not have root access, you can install ",(0,l.kt)("inlineCode",{parentName:"li"},"odo")," to the local directory and add it to your ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $HOME/bin \ncp ./odo $HOME/bin/odo\nexport PATH=$PATH:$HOME/bin\n# (Optional) Add the $HOME/bin to your shell initialization file\necho 'export PATH=$PATH:$HOME/bin' >> ~/.bashrc\n"))),(0,l.kt)(r.Z,{value:"ppc64le",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"odo")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"ppc64le")," architecture:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the v2.5.1 release from the mirror:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-linux-ppc64le -o odo\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"(Optional) Verify the downloaded binary with the SHA-256 sum:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-linux-ppc64le.sha256 -o odo.sha256\necho "$(<odo.sha256)  odo" | shasum -a 256 --check\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Install odo:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo install -o root -g root -m 0755 odo /usr/local/bin/odo\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"(Optional) If you do not have root access, you can install ",(0,l.kt)("inlineCode",{parentName:"li"},"odo")," to the local directory and add it to your ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $HOME/bin \ncp ./odo $HOME/bin/odo\nexport PATH=$PATH:$HOME/bin\n# (Optional) Add the $HOME/bin to your shell initialization file\necho 'export PATH=$PATH:$HOME/bin' >> ~/.bashrc\n"))),(0,l.kt)(r.Z,{value:"s390x",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"odo")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"s390x")," architecture:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the v2.5.1 release from the mirror:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-linux-s390x -o odo\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"(Optional) Verify the downloaded binary with the SHA-256 sum:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-linux-s390x.sha256 -o odo.sha256\necho "$(<odo.sha256)  odo" | shasum -a 256 --check\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Install odo:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo install -o root -g root -m 0755 odo /usr/local/bin/odo\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"(Optional) If you do not have root access, you can install ",(0,l.kt)("inlineCode",{parentName:"li"},"odo")," to the local directory and add it to your ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $HOME/bin \ncp ./odo $HOME/bin/odo\nexport PATH=$PATH:$HOME/bin\n# (Optional) Add the $HOME/bin to your shell initialization file\necho 'export PATH=$PATH:$HOME/bin' >> ~/.bashrc\n")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"macos"},"MacOS"),(0,l.kt)(n.Z,{defaultValue:"intel",values:[{label:"Intel",value:"intel"},{label:"Apple Silicon",value:"arm"},{label:"Homebrew",value:"homebrew"}],mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"intel",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"odo")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"amd64")," architecture:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the v2.5.1 release from the mirror:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-darwin-amd64 -o odo\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"(Optional) Verify the downloaded binary with the SHA-256 sum:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-darwin-amd64.sha256 -o odo.sha256\necho "$(<odo.sha256)  odo" | shasum -a 256 --check\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Install odo:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"chmod +x ./odo\nsudo mv ./odo /usr/local/bin/odo\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"(Optional) If you do not have root access, you can install ",(0,l.kt)("inlineCode",{parentName:"li"},"odo")," to the local directory and add it to your ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $HOME/bin \ncp ./odo $HOME/bin/odo\nexport PATH=$PATH:$HOME/bin\n# (Optional) Add the $HOME/bin to your shell initialization file\necho 'export PATH=$PATH:$HOME/bin' >> ~/.bashrc\n"))),(0,l.kt)(r.Z,{value:"arm",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"odo")," on ",(0,l.kt)("inlineCode",{parentName:"p"},"arm64")," architecture:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Download the v2.5.1 release from the mirror:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-darwin-arm64 -o odo\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"(Optional) Verify the downloaded binary with the SHA-256 sum:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-darwin-arm64.sha256 -o odo.sha256\necho "$(<odo.sha256)  odo" | shasum -a 256 --check\n')),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"Install odo:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"chmod +x ./odo\nsudo mv ./odo /usr/local/bin/odo\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"(Optional) If you do not have root access, you can install ",(0,l.kt)("inlineCode",{parentName:"li"},"odo")," to the local directory and add it to your ",(0,l.kt)("inlineCode",{parentName:"li"},"$PATH"),":")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p $HOME/bin \ncp ./odo $HOME/bin/odo\nexport PATH=$PATH:$HOME/bin\n# (Optional) Add the $HOME/bin to your shell initialization file\necho 'export PATH=$PATH:$HOME/bin' >> ~/.bashrc\n"))),(0,l.kt)(r.Z,{value:"homebrew",mdxType:"TabItem"},(0,l.kt)("p",null,"Installing ",(0,l.kt)("inlineCode",{parentName:"p"},"odo")," using ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),":"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install odo:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install odo-dev\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"Verify the version you installed is up-to-date:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"odo version\n")))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"windows"},"Windows"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open a PowerShell terminal")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the v2.5.1 release from the mirror:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-windows-amd64.exe -o odo.exe\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"(Optional) Verify the downloaded binary with the SHA-256 sum:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -L https://developers.redhat.com/content-gateway/rest/mirror/pub/openshift-v4/clients/odo/v2.5.1/odo-windows-amd64.exe.sha256 -o odo.exe.sha256\n# Visually compare the output of both files\nGet-FileHash odo.exe\ntype odo.exe.sha256\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"Add the binary to your ",(0,l.kt)("inlineCode",{parentName:"li"},"PATH"))),(0,l.kt)("h3",{id:"installing-from-source-code"},"Installing from source code"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Clone the repository and cd into it.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/redhat-developer/odo.git\ncd odo\n"))),(0,l.kt)("li",{parentName:"ol"},"Install tools used by the build and test system.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make goget-tools\n"))),(0,l.kt)("li",{parentName:"ol"},"Build the executable from the sources in ",(0,l.kt)("inlineCode",{parentName:"li"},"cmd/odo"),".",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make bin\n"))),(0,l.kt)("li",{parentName:"ol"},"Check the build version to verify that it was built properly.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./odo version\n"))),(0,l.kt)("li",{parentName:"ol"},"Install the executable in the system's GOPATH.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"make install\n"))),(0,l.kt)("li",{parentName:"ol"},"Check the binary version to verify that it was installed properly; verify that it is same as the build version.",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"odo version\n")))),(0,l.kt)("h2",{id:"ide-installation"},"IDE Installation"),(0,l.kt)("h3",{id:"installing-odo-in-visual-studio-code-vscode"},"Installing ",(0,l.kt)("inlineCode",{parentName:"h3"},"odo")," in Visual Studio Code (VSCode)"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=redhat.vscode-openshift-connector"},"OpenShift VSCode extension")," uses both ",(0,l.kt)("inlineCode",{parentName:"p"},"odo")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"oc")," binary to interact with Kubernetes or OpenShift cluster."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Open VS Code."),(0,l.kt)("li",{parentName:"ol"},"Launch VS Code Quick Open (Ctrl+P)"),(0,l.kt)("li",{parentName:"ol"},"Paste the following command:",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-shell"}," ext install redhat.vscode-openshift-connector\n")))))}m.isMDXComponent=!0}}]);