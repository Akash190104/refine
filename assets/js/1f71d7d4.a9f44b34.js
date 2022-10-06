"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={id:"useForm",title:"useForm"},i=void 0,l={unversionedId:"api-reference/core/hooks/useForm",id:"api-reference/core/hooks/useForm",title:"useForm",description:"useForm is a hook that allows to manage forms. It has some action methods that create, edit and clone the form. The hook return value comes to according to the called action and it can run different logic depending on the action.",source:"@site/docs/api-reference/core/hooks/useForm.md",sourceDirName:"api-reference/core/hooks",slug:"/api-reference/core/hooks/useForm",permalink:"/docs/api-reference/core/hooks/useForm",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-reference/core/hooks/useForm.md",tags:[],version:"current",lastUpdatedBy:"Alican Erdurmaz",lastUpdatedAt:1665060910,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"useForm",title:"useForm"},sidebar:"someSidebar",previous:{title:"useSelect",permalink:"/docs/api-reference/core/hooks/useSelect"},next:{title:"useExport",permalink:"/docs/api-reference/core/hooks/import-export/useExport"}},p={},d=[{value:"<code>action: &quot;edit&quot;</code>",id:"action-edit",level:3},{value:"<code>action: &quot;create&quot;</code>",id:"action-create",level:3},{value:"<code>action: &quot;clone&quot;</code>",id:"action-clone",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return values",id:"return-values",level:3}],s=(m="PropsTable",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var m;const c={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," is a hook that allows to manage forms. It has some ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," methods that ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," the form. The hook return value comes to according to the called action and it can run different logic depending on the ",(0,r.kt)("inlineCode",{parentName:"p"},"action"),"."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you're looking for a complete form library, Refine supports two form libraries out-of-the-box."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://react-hook-form.com/"},"React Hook Form")," (for Headless users) - ",(0,r.kt)("a",{parentName:"li",href:"/docs/packages/documentation/react-hook-form/useForm"},"Documentation")," - ",(0,r.kt)("a",{parentName:"li",href:"/docs/examples/form/react-hook-form/useForm"},"Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ant.design/components/form/#header"},"Ant Design Form")," (for Ant Design users) - ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/antd/hooks/form/useForm"},"Documentation")," - ",(0,r.kt)("a",{parentName:"li",href:"/docs/examples/form/antd/useForm"},"Example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mantine.dev/form/use-form"},"Mantine Form")," (for Mantine users) - ",(0,r.kt)("a",{parentName:"li",href:"/docs/api-reference/mantine/hooks/form/useForm"},"Documentation")," - ",(0,r.kt)("a",{parentName:"li",href:"/docs/examples/form/mantine/useForm"},"Example"),"\n:::")),(0,r.kt)("h2",{parentName:"admonition",id:"basic-usage"},"Basic Usage"),(0,r.kt)("p",{parentName:"admonition"},"We'll show the basic usage of ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," by adding an creating form."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/posts/create.tsx"',title:'"src/posts/create.tsx"'},'import { useState } from "react";\nimport { useForm } from "@pankod/refine-core";\n\nexport const PostCreate = () => {\n    const [title, setTitle] = useState();\n    const { onFinish } = useForm({\n        action: "create",\n    });\n\n    const onSubmit = (e) => {\n        e.preventDefault();\n        onFinish({ title });\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <input onChange={(e) => setTitle(e.target.value)} />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Returns the ",(0,r.kt)("inlineCode",{parentName:"li"},"mutationResult")," after called the ",(0,r.kt)("inlineCode",{parentName:"li"},"onFinish")," callback."),(0,r.kt)("li",{parentName:"ul"},"Accepts generic type parameters. It is used to define response type of the mutation and query.")),(0,r.kt)("h2",{parentName:"admonition",id:"actions"},"Actions"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," can handle edit, create and clone actions.")),(0,r.kt)("p",null,"By default, it determines the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," from route. In the above example, the route is ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/create")," thus the hook will be called with ",(0,r.kt)("inlineCode",{parentName:"p"},'action: "create"'),". If the route is ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/edit/1"),", the hook will be called with ",(0,r.kt)("inlineCode",{parentName:"p"},'action: "edit"'),"."),(0,r.kt)("p",null,"It can be overridden by passing the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," prop where it isn't possible to determine the action from the route (e.g. when using form in a modal or using a custom route).\n:::"),(0,r.kt)("h3",{id:"action-edit"},(0,r.kt)("inlineCode",{parentName:"h3"},'action: "edit"')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'action: "edit"')," is used for editing an existing record. It requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," for determining the record to edit. By default, it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," from the route. It can be changed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"setId")," function or ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," property."),(0,r.kt)("p",null,"It fetches the record data according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryResult")," for you to fill the form."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useUpdate"},(0,r.kt)("inlineCode",{parentName:"a"},"useUpdate"))," under the hood for mutations on edit mode."),(0,r.kt)("h3",{id:"action-create"},(0,r.kt)("inlineCode",{parentName:"h3"},'action: "create"')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'action: "create"'),"is used for creating a new record that didn't exist before."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useCreate"},(0,r.kt)("inlineCode",{parentName:"a"},"useCreate"))," under the hood for mutations on create mode."),(0,r.kt)("h3",{id:"action-clone"},(0,r.kt)("inlineCode",{parentName:"h3"},'action: "clone"')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'action: "clone"')," is used for cloning an existing record. It requires the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," for determining the record to clone. By default, it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," from the route. It can be changed with the ",(0,r.kt)("inlineCode",{parentName:"p"},"setId")," function."),(0,r.kt)("p",null,"It fetches the record data according to the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," and returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryResult")," for you to fill the form."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useUpdate"},(0,r.kt)("inlineCode",{parentName:"a"},"useUpdate"))," under the hood for mutations on clone mode."),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(s,{module:"@pankod/refine-core/useForm",mdxType:"PropsTable"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,r.kt)("strong",{parentName:"p"},"<",(0,r.kt)("a",{parentName:"strong",href:"/docs/api-reference/core/components/refine-config"},"Refine"),">")," component. ",(0,r.kt)("inlineCode",{parentName:"p"},"useForm")," will use what is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the query that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onFinish"),(0,r.kt)("td",{parentName:"tr",align:null},"Triggers the mutation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(values: TVariables) => Promise<CreateResponse<TData>")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"UpdateResponse<TData>")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"void"),">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<T>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the mutation triggered by calling ",(0,r.kt)("inlineCode",{parentName:"td"},"onFinish")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,r.kt)("inlineCode",{parentName:"a"},"UseMutationResult<T>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formLoading"),(0,r.kt)("td",{parentName:"tr",align:null},"Loading state of form request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"Record id for ",(0,r.kt)("inlineCode",{parentName:"td"},"clone")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"create")," action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseKey")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"id")," setter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirect"),(0,r.kt)("td",{parentName:"tr",align:null},"Redirect function for custom redirections"),(0,r.kt)("td",{parentName:"tr",align:null},"(redirect: ",(0,r.kt)("inlineCode",{parentName:"td"},'"list"'),"|",(0,r.kt)("inlineCode",{parentName:"td"},'"edit"'),"|",(0,r.kt)("inlineCode",{parentName:"td"},'"show"'),"|",(0,r.kt)("inlineCode",{parentName:"td"},'"create"'),"|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," ,idFromFunction?: ",(0,r.kt)("a",{parentName:"td",href:"/docs/api-reference/core/interfaceReferences#basekey"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseKey")),"|",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"),") => ",(0,r.kt)("inlineCode",{parentName:"td"},"data"))))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useModal")," hook allows you to manage a modal. Since it is designed as headless, it only outputs ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"close")," functions and ",(0,r.kt)("inlineCode",{parentName:"p"},"visible")," for state. It expects you to handle the UI."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"visible")," state to show or hide the modal."))}u.isMDXComponent=!0}}]);