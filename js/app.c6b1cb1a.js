(function(t){function e(e){for(var a,o,s=e[0],l=e[1],c=e[2],u=0,p=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function s(t){return l.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d2c3b002"}[t]+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"a1e80be5"}[t]+".css",r=l.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===r))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){c=p[s],u=c.getAttribute("data-href");if(u===a||u===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[t]=0})));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=r[t]=[e,n]}));e.push(a[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(t);var p=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",p.name="ChunkLoadError",p.type=a,p.request=o,n[1](p)}r[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/rebus-hackathon-gh-pages/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var p=0;p<c.length;p++)e(c[p]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"200a":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var a="https://rebus-leadersofdigital-2020.herokuapp.com/api/"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("Drawer",{attrs:{items:t.items},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}}),a("v-app-bar",{attrs:{app:"",color:"#262C40",dark:""}},[a("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),a("img",{attrs:{width:"200",height:"40",src:n("f295")}}),a("Tabs",{attrs:{items:t.items}}),a("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.clickNewTender()}}},[t._v("Есть предложение")]),a("v-avatar",{staticClass:"ma-3",staticStyle:{cursor:"pointer"},attrs:{size:"40",tile:""},on:{click:function(e){return t.clickAvatar()}}},[t.$store.state.user.avatarSmall?t._e():a("v-icon",{attrs:{dark:""}},[t._v("mdi-account")]),t.$store.state.user.avatarSmall?a("v-img",{attrs:{src:t.$store.state.user.avatarSmall}}):t._e()],1)],1),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-footer",{attrs:{app:""}},[t._v(" "+t._s(t.$route.name)+" ")]),a("notifications",{attrs:{group:"notifications"}})],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{app:"","mini-variant":!0,"expand-on-hover":!0}},[n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},[t._l(t.items,(function(e){return n("v-list-item",{key:e.id,attrs:{to:{path:e.path}}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),n("v-divider"),n("v-list-item",{on:{click:function(e){return t.clickExit()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-exit-to-app")])],1),n("v-list-item-content",[n("v-list-item-title",[t._v("Выйти")])],1)],1)],2)],1)},s=[],l="AUTH_REQUEST",c="AUTH_SUCCESS",u="AUTH_ERROR",p="AUTH_LOGOUT",d="LOAD_USER_DATA",m="SET_USER_DATA",f={name:"Drawer",props:{items:Array},data:function(){return{}},methods:{clickExit:function(){var t=this;console.log("exit"),this.$store.dispatch(p).then((function(){console.log("exit AUTH_LOGOUT"),t.$router.push("/login")}))}}},v=f,h=n("2877"),g=n("6544"),b=n.n(g),_=n("ce7e"),w=n("132d"),k=n("8860"),y=n("da13"),O=n("5d23"),T=n("34c3"),E=n("f774"),x=Object(h["a"])(v,i,s,!1,null,"19f0774c",null),A=x.exports;b()(x,{VDivider:_["a"],VIcon:w["a"],VList:k["a"],VListItem:y["a"],VListItemContent:O["a"],VListItemIcon:T["a"],VListItemTitle:O["b"],VNavigationDrawer:E["a"]});var j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{attrs:{dark:""}},t._l(t.items,(function(e){return n("v-tab",{key:e.id,attrs:{to:{path:e.path}}},[t._v(t._s(e.title))])})),1)},S=[],P={name:"Tabs",props:{items:Array},data:function(){return{}}},C=P,V=n("71a3"),L=n("fe57"),$=Object(h["a"])(C,j,S,!1,null,"2258bc8e",null),U=$.exports;b()($,{VTab:V["a"],VTabs:L["a"]});var I={name:"App",components:{Tabs:U,Drawer:A},data:function(){return{drawer:!1,items:[{id:"proposals",title:"Предложения",icon:"mdi-lightbulb",path:"/proposals"},{id:"projects",title:"Проекты",icon:"mdi-star",path:"/projects"},{id:"shop",title:"Магазин",icon:"mdi-star",path:"/shop"}]}},mounted:function(){window.router=this.$router,console.log("router",window.router),this.$store.state.token||this.$router.push("/login"),this.$store.dispatch(d)},methods:{clickNewTender:function(){console.log("clickNewTender")},clickAvatar:function(){this.$router.push("/account")}}},H=I,D=n("7496"),R=n("40dc"),N=n("5bc1"),B=n("8212"),F=n("8336"),M=n("a523"),G=n("553a"),Q=n("adda"),q=n("f6c4"),z=Object(h["a"])(H,o,r,!1,null,null,null),J=z.exports;b()(z,{VApp:D["a"],VAppBar:R["a"],VAppBarNavIcon:N["a"],VAvatar:B["a"],VBtn:F["a"],VContainer:M["a"],VFooter:G["a"],VIcon:w["a"],VImg:Q["a"],VMain:q["a"]});n("d3b7");var K=n("8c4f"),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),t._v(" "+t._s(t.health.alive)+" ")])},X=[],Y=n("bc3a"),Z=n.n(Y),tt=n("200a"),et={name:"Home",components:{},data:function(){return{health:{}}},mounted:function(){this.getHealth()},methods:{getHealth:function(){var t=this,e="";Z.a.get(tt["a"]+"health/"+e).then((function(e){console.log("roger that",e.data),t.health=e.data})).catch((function(t){console.log(t)}))}}},nt=et,at=Object(h["a"])(nt,W,X,!1,null,null,null),ot=at.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"proposals"},[t._v(" Список "),n("ProposalsList")],1)},it=[],st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list",{staticClass:"py-0",attrs:{dense:"",nav:""}},t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{to:{name:"ProposalPage",params:{id:e.id}}}},[n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)},lt=[],ct={name:"ProposalsList",data:function(){return{items:[{id:"123",title:"Поставить цветы у окна"},{id:"125",title:"Работать 4 дня в неделю"},{id:"234",title:"Мини переговорки"}]}}},ut=ct,pt=Object(h["a"])(ut,st,lt,!1,null,"1cd26323",null),dt=pt.exports;b()(pt,{VList:k["a"],VListItem:y["a"],VListItemContent:O["a"],VListItemTitle:O["b"]});var mt={name:"Proposals",components:{ProposalsList:dt}},ft=mt,vt=Object(h["a"])(ft,rt,it,!1,null,"cc456846",null),ht=vt.exports,gt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},bt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rb-ProposalPage"},[n("h1",[t._v("Страница")])])}],_t={name:"ProposalPage",components:{}},wt=_t,kt=Object(h["a"])(wt,gt,bt,!1,null,null,null),yt=kt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rb-Login"},[n("LoginForm")],1)},Tt=[],Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-container",[n("v-text-field",{attrs:{label:"Ваш e-mail",rules:t.emailRules},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginClick()}},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-text-field",{attrs:{label:"Пароль",rules:t.passwordRules,"append-icon":t.showPassword?"mdi-eye":"mdi-eye-off",type:t.showPassword?"text":"password"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.loginClick()},"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){return t.loginClick()}}},[t._v("Поехали!")])],1)],1)},xt=[],At={name:"LoginForm",data:function(){return{valid:!1,email:"kulibin@gpb.ru",emailRules:[function(t){return!!t||"E-mail обязателен"}],password:"",passwordRules:[function(t){return!!t||"Пароль обязателен"}],showPassword:!1}},methods:{loginClick:function(){var t=this;if(this.$refs.form.validate()){var e=this.email,n=this.password;this.$store.dispatch(l,{email:e,password:n}).then((function(){console.log("login OK"),t.$router.push("/proposals")}))}else console.log("login fail")}}},jt=At,St=n("4bd4"),Pt=n("8654"),Ct=Object(h["a"])(jt,Et,xt,!1,null,"1328e5a3",null),Vt=Ct.exports;b()(Ct,{VBtn:F["a"],VContainer:M["a"],VForm:St["a"],VTextField:Pt["a"]});var Lt={name:"Login",components:{LoginForm:Vt}},$t=Lt,Ut=Object(h["a"])($t,Ot,Tt,!1,null,"4619638d",null),It=Ut.exports,Ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rb-Projects"},[t._v(" Проекты ")])},Dt=[],Rt={name:"Projects"},Nt=Rt,Bt=Object(h["a"])(Nt,Ht,Dt,!1,null,"300ba998",null),Ft=Bt.exports,Mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rb-Shop"},[t._v(" Магазин ")])},Gt=[],Qt={name:"Shop"},qt=Qt,zt=Object(h["a"])(qt,Mt,Gt,!1,null,"76ef5eb4",null),Jt=zt.exports;a["default"].use(K["a"]);var Kt,Wt,Xt=[{path:"/",name:"Home",component:ot},{path:"/login",name:"Login",component:It},{path:"/proposals",name:"proposals",component:ht},{path:"/proposals/:id",name:"ProposalPage",component:yt},{path:"/projects",name:"Projects",component:Ft},{path:"/shop",name:"Shop",component:Jt},{path:"/account",name:"Account",component:function(){return n.e("about").then(n.bind(null,"77be"))}}],Yt=new K["a"]({mode:"history",base:"/rebus-hackathon-gh-pages/",routes:Xt}),Zt=Yt,te=n("ade3"),ee=n("2f62");a["default"].use(ee["a"]);var ne=new ee["a"].Store({state:{status:"",token:localStorage.getItem("user-token")||"",user:{avatarSmall:""}},mutations:(Kt={},Object(te["a"])(Kt,l,(function(t){console.log("m   AUTH_REQUEST"),t.status="loading"})),Object(te["a"])(Kt,c,(function(t,e){t.status="success",t.token=e})),Object(te["a"])(Kt,u,(function(t){t.status="error"})),Object(te["a"])(Kt,m,(function(t,e){console.log("userData 3",e),t.user={avatarSmall:e.little_avatar}})),Kt),actions:(Wt={},Object(te["a"])(Wt,l,(function(t,e){var n=t.commit,a=t.dispatch;return console.log("A   AUTH_REQUEST",n,a,e),new Promise((function(t,a){n(l),Z.a.post(tt["a"]+"users/login/",e).then((function(e){console.log("TH");var a=e.data.token;localStorage.setItem("user-token",a),n(c,a),t(e)})).catch((function(t){console.log("CATCH"),n(u,t),localStorage.removeItem("user-token"),a(t)}))}))})),Object(te["a"])(Wt,p,(function(t){var e=t.commit;return new Promise((function(t){console.log("AUTH_LOGOUT done"),e(p),localStorage.removeItem("user-token"),t()}))})),Object(te["a"])(Wt,d,(function(t){var e={method:"get",url:tt["a"]+"users/profile/",headers:{Authorization:"Bearer "+t.state.token}};Z()(e).then((function(e){console.log("LOAD_USER_DATA  loaded",e),t.commit(m,e.data)}))})),Wt),getters:{isAuthenticated:function(t){return!!t.token},authStatus:function(t){return t.status}},modules:{}}),ae=n("f309");a["default"].use(ae["a"]);var oe=new ae["a"]({}),re=n("ee98"),ie=n.n(re);a["default"].config.productionTip=!1,a["default"].use(ie.a),new a["default"]({router:Zt,store:ne,vuetify:oe,render:function(t){return t(J)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},f295:function(t,e,n){t.exports=n.p+"img/logo-white.d88d3333.svg"}});