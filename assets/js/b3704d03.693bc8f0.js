"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27221],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,d=u["".concat(s,".").concat(g)]||u[g]||c[g]||a;return n?i.createElement(d,o(o({ref:t},m),{},{components:n})):i.createElement(d,o({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},68230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));n(22053),n(28813);const a={title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",slug:"next-js-environment-variables",authors:"michael",tags:["nextjs","enviroment-variables"],image:"https://refine.dev/img/blog/2022-09-07-next-env/social.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/next-js-environment-variables",source:"@site/blog/2022-09-07-next-env.md",title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",date:"2022-09-07T00:00:00.000Z",formattedDate:"September 7, 2022",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"enviroment-variables",permalink:"/blog/tags/enviroment-variables"}],readingTime:6.48,hasTruncateMarker:!0,authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],frontMatter:{title:"Next.js environment variables",description:"We will take a closer look at environment variables in Next.js",slug:"next-js-environment-variables",authors:"michael",tags:["nextjs","enviroment-variables"],image:"https://refine.dev/img/blog/2022-09-07-next-env/social.png",hide_table_of_contents:!1},prevItem:{title:"refine swag store is now open!",permalink:"/blog/refine-swag-store"},nextItem:{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills"},relatedPosts:[{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:8.005,date:"2022-09-12T00:00:00.000Z"},{title:"Build a Progressive Web App (PWA) with Next.js",permalink:"/blog/next-js-pwa",formattedDate:"September 11, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:18.525,date:"2022-09-11T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:9.48,date:"2022-09-04T00:00:00.000Z"}],authorPosts:[{title:"Nextjs image optimization with examples",permalink:"/blog/using-next-image",formattedDate:"August 17, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:13.225,date:"2022-08-17T00:00:00.000Z"},{title:"Using Material UI DataGrid component with refine app",permalink:"/blog/mui-datagrid-refine",formattedDate:"August 23, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:16.695,date:"2022-08-23T00:00:00.000Z"},{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:9.48,date:"2022-09-04T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Next.js is a React framework that provides many out-of-the-box solutions for building single-page web applications. Under the hood, it handles a lot of tooling and configuration intuitively, making the process of developing applications a breeze."),(0,r.kt)("p",null,"One of the configurations Next.js handles by default are ",(0,r.kt)("strong",{parentName:"p"},"environment variables"),". Built-in support for environment variables got a lot easier in Next.js versions 9.4 and later. This means using environment variables in your applications has become seamless and straightforward."),(0,r.kt)("p",null,"Don't worry if environment variables sound unfamiliar to you. We will take a closer look at them in this article, and explain how they can be used in your Next.js applications."))}c.isMDXComponent=!0},28813:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/deploy-4b2dcaa2b31ab1ffe61cb8a95eea6314.png"},22053:(e,t,n)=>{n.p}}]);