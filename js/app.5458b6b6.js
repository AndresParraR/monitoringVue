(function(t){function e(e){for(var n,a,s=e[0],c=e[1],l=e[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({Dashboard:"Dashboard"}[t]||t)+"."+{Dashboard:"248b2147"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={Dashboard:1};a[t]?e.push(a[t]):0!==a[t]&&r[t]&&e.push(a[t]=new Promise((function(e,r){for(var n="css/"+({Dashboard:"Dashboard"}[t]||t)+"."+{Dashboard:"5d79876c"}[t]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===n||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var n=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete a[t],f.parentNode.removeChild(f),r(i)},f.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){a[t]=0})));var n=o[t];if(0!==n)if(n)e.push(n[2]);else{var i=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var r=o[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/monitoringVue/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"1a12":function(t,e,r){},3085:function(t,e,r){"use strict";r("3a28")},"3a28":function(t,e,r){},5271:function(t,e,r){t.exports=r.p+"img/elephant.d8a2645e.jpg"},"56d7":function(t,e,r){"use strict";r.r(e),r.d(e,"coordinatesBus",(function(){return ct}));r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("router-view")],1)},o=[],i={name:"App",data:function(){return{}}},s=i,c=(r("034f"),r("2877")),l=r("6544"),u=r.n(l),d=r("7496"),f=Object(c["a"])(s,a,o,!1,null,null,null),v=f.exports;u()(f,{VApp:d["a"]});r("d3b7"),r("3ca3"),r("ddb0");var m=r("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fill-height"},[n("Navbar"),n("v-content",{staticStyle:{"background-color":"rgba(0,0,0, .01)",height:"100%"}},[n("v-container",{attrs:{fluid:""}},[n("v-row",{attrs:{stlyle:"height: 100% !important"}},[n("v-col",{staticStyle:{padding:"0px 12px"},attrs:{cols:"12"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",[n("router-view")],1)],1)],1)],1)],1)],1),n("v-menu",{attrs:{"offset-x":"",transition:"slide-y-transition","open-on-hover":!1,"close-on-content-click":!1,"content-class":"menu-settings"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"black",fab:"",dark:"",bottom:"",right:"",absolute:""}},"v-btn",a,!1),r),[n("v-icon",[t._v("settings")])],1)]}}])},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"400",outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("v-color-picker",{attrs:{"dot-size":"25","swatches-max-height":"200","hide-inputs":""},model:{value:t.$store.state.styleFocused["background-color"],callback:function(e){t.$set(t.$store.state.styleFocused,"background-color",e)},expression:"$store.state.styleFocused['background-color']"}}),n("v-divider")],1)],1),n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"d-flex justify-center align-center flex-row"},t._l(t.$store.state.listImages,(function(e,a){return n("v-card",{key:a,staticClass:"mx-auto",attrs:{"max-width":"80",height:"100"},on:{click:function(r){return t.$store.dispatch("CLICK_IMG",e)}}},[n("v-img",{style:e.isFocused&&t.styledFocusImg,attrs:{height:"100",src:r("7584")("./"+e.src)}})],1)})),1),n("v-divider")],1)],1)],1)],1)],1)},h=[],b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("v-app-bar",{attrs:{id:"app-bar",absolute:"",app:"",color:"transparent",flat:"",height:"75"}},[n("v-btn",{staticClass:"btn-app-bar",attrs:{fab:""},on:{click:function(e){t.drawer=!t.drawer}}},[n("v-icon",[t._v(t._s(t.drawer?"mdi-dots-vertical":"mdi-view-list"))])],1),n("v-spacer"),n("v-toolbar-title",{domProps:{textContent:t._s(t.nameTitle)}}),n("v-spacer"),n("div",{staticClass:"mx-3"},[n("v-btn",{style:{"background-color":t.$store.state.colour},attrs:{icon:""}},[n("v-icon",[t._v("mdi-view-dashboard")])],1),n("v-btn",{attrs:{icon:"",color:"black"}},[n("v-badge",{attrs:{color:"red",content:"5"}},[n("v-icon",[t._v("notifications")])],1)],1),n("v-menu",{staticClass:"boder-r",attrs:{"offset-y":"",transition:"slide-y-transition","open-on-hover":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({attrs:{color:"black",icon:""}},"v-btn",a,!1),r),[n("v-icon",[t._v("person")])],1)]}}])},[n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"200",outlined:""}},[n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-content",[n("div",{staticClass:"overline mb-1",staticStyle:{"text-align":"center","white-space":"normal"}},[t._v(" Profile ")]),n("div",{staticClass:"overline mb-1",staticStyle:{"text-align":"center","white-space":"normal"}},[t._v(" Settings ")]),n("v-divider")],1)],1),n("v-card-actions",{staticStyle:{"justify-content":"center"}},[n("v-btn",{attrs:{outlined:"",rounded:"",text:""}},[t._v(" Log Out ")])],1)],1)],1)],1)],1),n("v-navigation-drawer",{attrs:{dark:"",app:"","overlay-opacity":100,"mobile-break-point":"960",width:"260"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-img",{staticClass:"img-contain-drawer",attrs:{"aspect-ratio":"2",src:r("7584")("./"+t.$store.state.imgSrc),height:"100%",gradient:"to bottom, rgba(0,0,0,.6), rgba(0,0,0,.7)"}},[n("v-list-item",{staticClass:"pady-15"},[n("v-list-item-action",[n("v-icon",[t._v("mdi-vuejs")])],1),n("v-list-item-content",[n("v-list-item-title",{staticClass:"title-drawer"},[t._v("Vue Js")])],1)],1),n("v-divider"),n("v-list-item",{staticStyle:{padding:"15px 5px"}},[n("v-list-item-avatar",[n("v-img",{attrs:{src:"https://randomuser.me/api/portraits/men/85.jpg"}})],1),n("v-list-item-title",[t._v("John Leider")])],1),n("v-divider"),t._v(" "+t._s(t.$store.state.colour)+" "),t._l(t.$store.state.links,(function(e){return n("v-list-item",{key:e.title,staticClass:"mt-7",staticStyle:{"border-radius":".25rem",color:"#FFF !important"},style:e.isFocused&&t.$store.state.styleFocused,attrs:{router:"",to:e.route},on:{click:function(r){t.$store.dispatch("CLICK_LINK",e),t.clickLink()}}},[n("v-list-item-action",[n("v-icon",{staticClass:"icon-navbar"},[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2)],1)],1)},g=[],y=(r("b0c0"),{created:function(){this.nameTitle=this.$router.currentRoute.name},data:function(){return{drawer:null,expandOnHover:!1,nameTitle:null}},methods:{clickLink:function(){this.nameTitle=this.$router.currentRoute.name}}}),_=y,C=(r("5dfc"),r("3085"),r("40dc")),k=r("4ca6"),w=r("8336"),x=r("b0af"),j=r("99d9"),V=r("ce7e"),I=r("132d"),O=r("adda"),L=r("da13"),S=r("1800"),E=r("8270"),F=r("5d23"),N=r("e449"),D=r("f774"),T=r("2fa4"),$=r("2a7f"),A=Object(c["a"])(_,b,g,!1,null,"5f280d4c",null),K=A.exports;u()(A,{VAppBar:C["a"],VBadge:k["a"],VBtn:w["a"],VCard:x["a"],VCardActions:j["a"],VDivider:V["a"],VIcon:I["a"],VImg:O["a"],VListItem:L["a"],VListItemAction:S["a"],VListItemAvatar:E["a"],VListItemContent:F["a"],VListItemTitle:F["b"],VMenu:N["a"],VNavigationDrawer:D["a"],VSpacer:T["a"],VToolbarTitle:$["a"]});var P={components:{Navbar:K},data:function(){return{styledFocusImg:{border:"3px solid #18D9DF"}}}},M=P,B=(r("b49e"),r("62ad")),G=r("03a4"),J=r("a523"),R=r("a75b"),U=r("0fd9"),W=Object(c["a"])(M,p,h,!1,null,null,null),H=W.exports;u()(W,{VBtn:w["a"],VCard:x["a"],VCol:B["a"],VColorPicker:G["a"],VContainer:J["a"],VContent:R["a"],VDivider:V["a"],VIcon:I["a"],VImg:O["a"],VListItem:L["a"],VListItemContent:F["a"],VMenu:N["a"],VRow:U["a"]}),n["a"].use(m["a"]);var q=[{path:"/",redirect:"/dashboard",name:"Home",component:H,children:[{path:"/dashboard",name:"Dashboard",component:function(){return r.e("Dashboard").then(r.bind(null,"ec95"))}}]}],z=new m["a"]({mode:"history",base:"/monitoringVue/",routes:q}),Q=z,X=(r("159b"),r("7db0"),r("2f62")),Y=r("e11e");n["a"].use(X["a"]);var Z=new X["a"].Store({state:{io:{},links:[{icon:"mdi-view-dashboard",title:"Dashboard",route:"/dashboard",isFocused:!0}],listImages:[{src:"tree.jpg",isFocused:!0},{src:"elephant.jpg",isFocused:!1},{src:"deer.jpg",isFocused:!1}],imgSrc:"tree.jpg",loading:!1,styleFocused:{"background-color":"#000"},marker:Object(Y["latLng"])(47.3131387,-1.319423),center:Object(Y["latLng"])(47.3131387,-1.319423),listRoles:["Administrator","Workstation","Guard"],dataUsers:[{id:1,firstName:"John",lastName:"Doe",email:"johndoe@gmail.com",roleName:"Administrator",active:!1},{id:2,firstName:"Alejandro",lastName:"Test",email:"alejandrotest@gmail.com",roleName:"Workstation",active:!0}],someValues:[20,60,10,80,30,65,100]},mutations:{CLICK_LINK:function(t,e){t.links.forEach((function(t){return t.isFocused=t.title==e.title}))},CLICK_IMG:function(t,e){t.listImages.forEach((function(t){return t.isFocused=t.src==e.src}));var r=t.listImages.find((function(t){return 1==t.isFocused}));t.imgSrc=r.src},SOCKET_NEW_COORDINATES:function(t,e){t.marker=Object(Y["latLng"])(parseFloat(e.lat),parseFloat(e.lng)),t.center=t.marker,ct.$emit("coordinatesChanged"),console.log(t,e)},SOCKET_NEW_VALUES:function(t,e){e.forEach((function(t){return parseInt(t)})),t.someValues=e,console.log(t,e)}},actions:{CLICK_LINK:function(t,e){var r=t.commit;r("CLICK_LINK",e)},CLICK_IMG:function(t,e){var r=t.commit;r("CLICK_IMG",e)}},modules:{}}),tt=r("f309");n["a"].use(tt["a"]);var et=new tt["a"]({}),rt=(r("d1e78"),r("2909")),nt=r("d4ec"),at=r("bee2"),ot=(r("b64b"),r("caad"),r("2532"),r("daa8")),it=function(){function t(e){Object(nt["a"])(this,t),this.io=Object(ot["a"])(e.connection),this.store=e.vuex.store,this.prefix=e.vuex.prefix,this.createSocketsOn()}return Object(at["a"])(t,[{key:"createSocketsOn",value:function(){var t=this;Object(rt["a"])(Object.keys(this.store._mutations)).forEach((function(e){e.includes(t.prefix)&&t.io.on(e.substring(t.prefix.length),(function(r){t.store.commit(e,r)}))}))}}]),t}(),st=it,ct=new n["a"];n["a"].prototype.$socket=new st({connection:"https://briefcase-api-node.herokuapp.com",vuex:{store:Z,prefix:"SOCKET_"}}),n["a"].config.productionTip=!1,new n["a"]({router:Q,store:Z,vuetify:et,render:function(t){return t(v)}}).$mount("#app")},"5dfc":function(t,e,r){"use strict";r("1a12")},7584:function(t,e,r){var n={"./deer.jpg":"f781","./elephant.jpg":"5271","./tree.jpg":"f9ca"};function a(t){var e=o(t);return r(e)}function o(t){if(!r.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id="7584"},"77f2":function(t,e,r){},"85ec":function(t,e,r){},b49e:function(t,e,r){"use strict";r("77f2")},f781:function(t,e,r){t.exports=r.p+"img/deer.836b2cef.jpg"},f9ca:function(t,e,r){t.exports=r.p+"img/tree.b3d09edc.jpg"}});
//# sourceMappingURL=app.5458b6b6.js.map