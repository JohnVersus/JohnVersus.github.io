(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(e,t){"use strict";t.Z=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},3454:function(e,t,n){"use strict";var i,r;e.exports=(null==(i=n.g.process)?void 0:i.env)&&"object"==typeof(null==(r=n.g.process)?void 0:r.env)?n.g.process:n(7663)},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5075)}])},8045:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(9361).Z,r=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n,c=e.src,s=e.sizes,p=e.unoptimized,g=void 0!==p&&p,x=e.priority,S=void 0!==x&&x,E=e.loading,N=e.lazyRoot,k=e.lazyBoundary,I=e.className,L=e.quality,O=e.width,T=e.height,R=e.style,C=e.objectFit,P=e.objectPosition,q=e.onLoadingComplete,M=e.placeholder,H=void 0===M?"empty":M,D=e.blurDataURL,W=l(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),B=u.useContext(h.ImageConfigContext),V=u.useMemo(function(){var e=v||B||f.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort(function(e,t){return e-t}),n=e.deviceSizes.sort(function(e,t){return e-t});return a({},e,{allSizes:t,deviceSizes:n})},[B]),Z=s?"responsive":"intrinsic";"layout"in W&&(W.layout&&(Z=W.layout),delete W.layout);var U=z;if("loader"in W){if(W.loader){var F=W.loader;U=function(e){e.config;var t=l(e,["config"]);return F(t)}}delete W.loader}var G="";if(function(e){var t;return"object"==typeof e&&(w(e)||void 0!==e.src)}(c)){var Q=w(c)?c.default:c;if(!Q.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(D=D||Q.blurDataURL,G=Q.src,(!Z||"fill"!==Z)&&(T=T||Q.height,O=O||Q.width,!Q.height||!Q.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}c="string"==typeof c?c:G;var X=!S&&("lazy"===E||void 0===E);(c.startsWith("data:")||c.startsWith("blob:"))&&(g=!0,X=!1),b.has(c)&&(X=!1),V.unoptimized&&(g=!0);var J=r(u.useState(!1),2),K=J[0],Y=J[1],$=r(m.useIntersection({rootRef:void 0===N?null:N,rootMargin:k||"200px",disabled:!X}),3),ee=$[0],et=$[1],en=$[2],ei=!X||et,er={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},eo={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ea=!1,ec=j(O),es=j(T),el=j(L),eu=Object.assign({},R,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:P}),ed="blur"!==H||K?{}:{backgroundSize:C||"cover",backgroundPosition:P||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(D,'")')};if("fill"===Z)er.display="block",er.position="absolute",er.top=0,er.left=0,er.bottom=0,er.right=0;else if(void 0!==ec&&void 0!==es){var ef=es/ec,em=isNaN(ef)?"100%":"".concat(100*ef,"%");"responsive"===Z?(er.display="block",er.position="relative",ea=!0,eo.paddingTop=em):"intrinsic"===Z?(er.display="inline-block",er.position="relative",er.maxWidth="100%",ea=!0,eo.maxWidth="100%",t="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(ec,"%27%20height=%27").concat(es,"%27/%3e")):"fixed"===Z&&(er.display="inline-block",er.position="relative",er.width=ec,er.height=es)}var eh={src:y,srcSet:void 0,sizes:void 0};ei&&(eh=_({config:V,src:c,unoptimized:g,layout:Z,width:ec,quality:el,sizes:s,loader:U}));var ep=c,eg="imagesizes";eg="imageSizes";var ev=(i(n={},"imageSrcSet",eh.srcSet),i(n,eg,eh.sizes),i(n,"crossOrigin",W.crossOrigin),n),eb=u.default.useLayoutEffect,ey=u.useRef(q),ex=u.useRef(c);u.useEffect(function(){ey.current=q},[q]),eb(function(){ex.current!==c&&(en(),ex.current=c)},[en,c]);var ew=a({isLazy:X,imgAttributes:eh,heightInt:es,widthInt:ec,qualityInt:el,layout:Z,className:I,imgStyle:eu,blurStyle:ed,loading:E,config:V,unoptimized:g,placeholder:H,loader:U,srcString:ep,onLoadingCompleteRef:ey,setBlurComplete:Y,setIntersection:ee,isVisible:ei,noscriptSizes:s},W);return u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{style:er},ea?u.default.createElement("span",{style:eo},t?u.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:t}):null):null,u.default.createElement(A,Object.assign({},ew))),S?u.default.createElement(d.default,null,u.default.createElement("link",Object.assign({key:"__nimg-"+eh.src+eh.srcSet+eh.sizes,rel:"preload",as:"image",href:eh.srcSet?void 0:eh.src},ev))):null)};var a=n(6495).Z,c=n(2648).Z,s=n(1598).Z,l=n(7273).Z,u=s(n(7294)),d=c(n(5443)),f=n(9309),m=n(7190),h=n(9977);n(3794);var p=n(2392);function g(e){return"/"===e[0]?e.slice(1):e}var v={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",dangerouslyAllowSVG:!1,unoptimized:!1},b=new Set,y="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",x=new Map([["default",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality;return n.endsWith(".svg")&&!t.dangerouslyAllowSVG?n:"".concat(p.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(i,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,n=e.src,i=e.width,r=e.quality,o=new URL("".concat(t.path).concat(g(n))),a=o.searchParams;return a.set("auto",a.getAll("auto").join(",")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||i.toString()),r&&a.set("q",r.toString()),o.href}],["cloudinary",function(e){var t,n=e.config,i=e.src,r=e.width,o=["f_auto","c_limit","w_"+r,"q_"+(e.quality||"auto")].join(",")+"/";return"".concat(n.path).concat(o).concat(g(i))}],["akamai",function(e){var t=e.config,n=e.src,i=e.width;return"".concat(t.path).concat(g(n),"?imwidth=").concat(i)}],["custom",function(e){var t=e.src;throw Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(e){return void 0!==e.default}function _(e){var t=e.config,n=e.src,i=e.unoptimized,r=e.layout,a=e.width,c=e.quality,s=e.sizes,l=e.loader;if(i)return{src:n,srcSet:void 0,sizes:void 0};var u=function(e,t,n,i){var r=e.deviceSizes,a=e.allSizes;if(i&&("fill"===n||"responsive"===n)){for(var c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(i);l)s.push(parseInt(l[2]));if(s.length){var l,u,d=.01*(u=Math).min.apply(u,o(s));return{widths:a.filter(function(e){return e>=r[0]*d}),kind:"w"}}return{widths:a,kind:"w"}}return"number"!=typeof t||"fill"===n||"responsive"===n?{widths:r,kind:"w"}:{widths:o(new Set([t,2*t].map(function(e){return a.find(function(t){return t>=e})||a[a.length-1]}))),kind:"x"}}(t,a,r,s),d=u.widths,f=u.kind,m=d.length-1;return{sizes:s||"w"!==f?s:"100vw",srcSet:d.map(function(e,i){return"".concat(l({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:i+1).concat(f)}).join(", "),src:l({config:t,src:n,quality:c,width:d[m]})}}function j(e){return"number"==typeof e?e:"string"==typeof e?parseInt(e,10):void 0}function z(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",i=x.get(n);if(i)return i(e);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(f.VALID_LOADERS.join(", "),". Received: ").concat(n))}function S(e,t,n,i,r,o){e&&e.src!==y&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch(function(){}).then(function(){if(e.parentNode&&(b.add(t),"blur"===i&&o(!0),null==r?void 0:r.current)){var n=e.naturalWidth,a=e.naturalHeight;r.current({naturalWidth:n,naturalHeight:a})}}))}var A=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),i=e.qualityInt,r=e.layout,o=e.className,c=e.imgStyle,s=e.blurStyle,d=e.isLazy,f=e.placeholder,m=e.loading,h=e.srcString,p=e.config,g=e.unoptimized,v=e.loader,b=e.onLoadingCompleteRef,y=e.setBlurComplete,x=e.setIntersection,w=e.onLoad,j=e.onError,z=(e.isVisible,e.noscriptSizes),A=l(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return m=d?"lazy":m,u.default.createElement(u.default.Fragment,null,u.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":r,className:o,style:a({},c,s),ref:u.useCallback(function(e){x(e),(null==e?void 0:e.complete)&&S(e,h,r,f,b,y)},[x,h,r,f,b,y,]),onLoad:function(e){S(e.currentTarget,h,r,f,b,y),w&&w(e)},onError:function(e){"blur"===f&&y(!0),j&&j(e)}})),(d||"blur"===f)&&u.default.createElement("noscript",null,u.default.createElement("img",Object.assign({},A,_({config:p,src:h,unoptimized:g,layout:r,width:n,quality:i,sizes:z,loader:v}),{decoding:"async","data-nimg":r,style:c,className:o,loading:m}))))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t,n=e.rootRef,l=e.rootMargin,u=e.disabled||!a,d=i(r.useState(!1),2),f=d[0],m=d[1],h=i(r.useState(null),2),p=h[0],g=h[1];return r.useEffect(function(){if(a){if(!u&&!f&&p&&p.tagName){var e,t,i,r,d,h,g;return t=function(e){return e&&m(e)},d=(r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},i=s.find(function(e){return e.root===n.root&&e.margin===n.margin});if(i&&(t=c.get(i)))return t;var r=new Map;return t={id:n,observer:new IntersectionObserver(function(e){e.forEach(function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e),elements:r},s.push(n),c.set(n,t),t}(i={root:null==n?void 0:n.current,rootMargin:l})).id,h=r.observer,(g=r.elements).set(p,t),h.observe(p),function(){if(g.delete(p),h.unobserve(p),0===g.size){h.disconnect(),c.delete(d);var e=s.findIndex(function(e){return e.root===d.root&&e.margin===d.margin});e>-1&&s.splice(e,1)}}}}else if(!f){var v=o.requestIdleCallback(function(){return m(!0)});return function(){return o.cancelIdleCallback(v)}}},[p,u,l,n,f]),[g,f,r.useCallback(function(){m(!1)},[])]};var r=n(7294),o=n(9311),a="function"==typeof IntersectionObserver,c=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5075:function(e,t,n){"use strict";n.r(t);var i=n(5893),r=n(9008),o=n.n(r),a=n(5675),c=n.n(a),s=n(214),l=n.n(s),u=n(3454),d=function(){return(0,i.jsxs)("div",{className:l().container,children:[(0,i.jsxs)(o(),{children:[(0,i.jsx)("title",{children:"Create Next App"}),(0,i.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,i.jsx)("link",{rel:"icon",href:"".concat(u.env.NEXT_PUBLIC_FAVICON,"/favicon.ico")})]}),(0,i.jsxs)("main",{className:l().main,children:[(0,i.jsxs)("h1",{className:l().title,children:["Welcome to ",(0,i.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,i.jsxs)("p",{className:l().description,children:["Get started by editing"," ",(0,i.jsx)("code",{className:l().code,children:"pages/index.tsx"})]}),(0,i.jsxs)("div",{className:l().grid,children:[(0,i.jsxs)("a",{href:"https://nextjs.org/docs",className:l().card,children:[(0,i.jsx)("h2",{children:"Documentation →"}),(0,i.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,i.jsxs)("a",{href:"https://nextjs.org/learn",className:l().card,children:[(0,i.jsx)("h2",{children:"Learn →"}),(0,i.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,i.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:l().card,children:[(0,i.jsx)("h2",{children:"Examples →"}),(0,i.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,i.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:l().card,children:[(0,i.jsx)("h2",{children:"Deploy →"}),(0,i.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,i.jsx)("footer",{className:l().footer,children:(0,i.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,i.jsx)("span",{className:l().logo,children:(0,i.jsx)(c(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})};t.default=d},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},7663:function(e){!function(){var t={229:function(e){var t,n,i,r=e.exports={};function o(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===o||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:o}catch(e){t=o}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(i){n=a}}();var s=[],l=!1,u=-1;function d(){l&&i&&(l=!1,i.length?s=i.concat(s):u=-1,s.length&&f())}function f(){if(!l){var e=c(d);l=!0;for(var t=s.length;t;){for(i=s,s=[];++u<t;)i&&i[u].run();u=-1,t=s.length}i=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(i){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new m(e,t)),1!==s.length||l||c(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}},a=!0;try{t[e](o,o.exports,i),a=!1}finally{a&&delete n[e]}return o.exports}i.ab="//";var r=i(229);e.exports=r}()},9008:function(e,t,n){e.exports=n(5443)},5675:function(e,t,n){e.exports=n(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);