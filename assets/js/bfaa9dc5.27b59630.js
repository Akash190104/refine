"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||i;return r?a.createElement(d,o(o({ref:t},p),{},{components:r})):a.createElement(d,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},57980:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905)),i=(r(48141),r(59789),r(34068),r(59128));r(37511);const o={title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",slug:"handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",authors:"melih",tags:["refine","e-commerce","strapi","chakra-ui","next.js"],image:"/img/placeholder.png",hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",source:"@site/blog/2022-02-14-refine-ecommerce-blog.md",title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",date:"2022-02-14T00:00:00.000Z",formattedDate:"February 14, 2022",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"e-commerce",permalink:"/blog/tags/e-commerce"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"chakra-ui",permalink:"/blog/tags/chakra-ui"},{label:"next.js",permalink:"/blog/tags/next-js"}],readingTime:11.035,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Next.js E-commerce App with Strapi and Chakra UI",description:"Learn the power of Refine for e-commerce with this quick & easy example. This step-by-step Refine SPA tutorial will get you started in no time.",slug:"handcrafted-nextjs-e-commerce-app-tutorial-strapi-chakra-ui",authors:"melih",tags:["refine","e-commerce","strapi","chakra-ui","next.js"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Top React JS Frameworks Every Developer Should Know",permalink:"/blog/best-react-frameworks"},nextItem:{title:"Implementing Dark Mode In Ant Design Using gulp",permalink:"/blog/how-to-add-darkmode-in-ant-design"},relatedPosts:[{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro",formattedDate:"November 29, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.13,date:"2021-11-29T00:00:00.000Z"},{title:"Best Open-Source Headless CMS to Try for Your Next Application",permalink:"/blog/open-source-headless-cms",formattedDate:"May 5, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.545,date:"2022-05-05T00:00:00.000Z"},{title:"refine swag store is now open!",permalink:"/blog/refine-swag-store",formattedDate:"September 8, 2022",authors:[{name:"Eren Erkalkan",title:"Co-Founder, refine",url:"https://github.com/piyerro",imageURL:"https://github.com/piyerro.png",key:"eren_erkalkan"}],readingTime:3.105,date:"2022-09-08T00:00:00.000Z"}],authorPosts:[{title:"Develop your Own Customizable Invoice Generator with Refine and Strapi | Part I",permalink:"/blog/refine-react-admin-invoice-genarator",formattedDate:"February 22, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:11.205,date:"2022-02-22T00:00:00.000Z"},{title:"ReactJS Frameworks You Should Know Before Start Developing B2B/Internal Application",permalink:"/blog/best-internal-tool-react-frameworks",formattedDate:"March 16, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:4.61,date:"2022-03-16T00:00:00.000Z"},{title:"Refine vs React-Admin Which is Better for Your Project?",permalink:"/blog/refine-vs-react-admin",formattedDate:"November 26, 2021",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:14.575,date:"2021-11-26T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},p=[],m={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{class:"img-container"},(0,n.kt)("div",{class:"window"},(0,n.kt)("div",{class:"control red"}),(0,n.kt)("div",{class:"control orange"}),(0,n.kt)("div",{class:"control green"})),(0,n.kt)("img",{src:i.Z,alt:"basket"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"In this article, we will create the e-commerce client of our ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/multi-tenancy/strapi-v4"},"Strapi-Multitenancy")," admin panel that we have done before."),(0,n.kt)("p",null,"It is now used ",(0,n.kt)("strong",{parentName:"p"},"headless")," with the ",(0,n.kt)("strong",{parentName:"p"},"refine")," 3 version. You can use any UI library you want with the ",(0,n.kt)("strong",{parentName:"p"},"headless")," feature."),(0,n.kt)("p",null,"We will use ",(0,n.kt)("a",{parentName:"p",href:"https://strapi.io/"},"Strapi")," and ",(0,n.kt)("a",{parentName:"p",href:"https://chakra-ui.com/"},"Chakra-UI")," together with ",(0,n.kt)("a",{parentName:"p",href:"/docs/guides-and-concepts/ssr/nextjs/"},(0,n.kt)("strong",{parentName:"a"},"Next.js"))," in our E-commerce client example application."))}u.isMDXComponent=!0},59128:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/basket-d34c963b93a97167b8c5363ff3819152.gif"},37511:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/page_size-0639a0143886236f5c27853b1637cd37.gif"},59789:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/pagination-73f06f762777cdd7bf4775aaead0b39a.gif"},48141:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/products-fe5eec261283889b8ee737133a5091ca.png"},34068:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sample_product-694357cb0a89f95347a6e00171f2300f.png"}}]);