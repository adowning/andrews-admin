webpackJsonp([3],{"1d42":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("7109"),n=(r("YaEn"),r("1nuA"),{name:"LayoutDefault",data:function(){return{leftDrawerOpen:!0,search:" ",footer:!0,batteryStatus:"determining..."}},computed:{userIsAuthenticated:function(){return null!==this.$store.getters.user&&void 0!==this.$store.getters.user},myData:function(){return this.$store.getters.myData},user:function(){return this.$store.getters.user},error:function(){return this.$store.getters.error},onlineUsers:function(){return this.$store.getters.onlineUsers}},watch:{user:function(t){console.log("USER CHANGED"),console.log(t),null!=t&&void 0!=t||this.$router.push("/login")}},created:function(){window.addEventListener("batterystatus",this.updateBatteryStatus,!1),this.$store.dispatch("loadOnlineUsers")},beforeDestroy:function(){window.removeEventListener("batterystatus",this.updateBatteryStatus,!1)},methods:{clockOut:function(){this.$store.dispatch("clockUserOutDeputy",{}).then(function(){}).catch(function(t){console.log(t)})},clockIn:function(){this.$store.dispatch("clockUserInDeputy",{}).then(function(){}).catch(function(t){console.log(t)})},updateBatteryStatus:function(t){this.batteryStatus="Level: "+t.level+", plugged: "+t.isPlugged},logOut:function(t){var e=this;this.$store.dispatch("signUserOut",{}).then(function(){o.Notify.create("You have been loged out"),e.$router.push({path:"/"})}).catch(function(t){console.log(t)})},beforeDestroy:function(){window.removeEventListener("batterystatus",this.updateBatteryStatus,!1)}}}),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("q-layout",{attrs:{view:"lHh Lpr fFf"}},[r("q-layout-header",[r("q-toolbar",{attrs:{color:"primary"}},[r("q-btn",{attrs:{flat:"",dense:"",round:""},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[r("q-icon",{attrs:{name:"menu"}})],1),t._v(" "),r("q-toolbar-title"),t._v(" "),r("q-search",{staticClass:"q-mr-xl",attrs:{inverted:"",color:"none",value:"x"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),r("span",[t._v(t._s(t.user.username))]),t._v(" "),r("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"exit to app",label:"Logout"},on:{click:function(e){t.logOut()}}})],1)],1),t._v(" "),r("q-layout-drawer",{attrs:{"content-class":"bg-grey-2"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[r("div",[r("q-toolbar-title",{staticClass:"row justify-center q-mt-md"},[t._v("\n          Andrews Group\n          ")])],1),t._v(" "),r("div",{staticClass:"row justify-center",attrs:{id:"profile"}},[r("div",{staticClass:"q-pt-lg",attrs:{row:""}},[r("img",{staticClass:"avatar img-thumbnail hidden-print inline-block",attrs:{src:t.user.photoURL}})])]),t._v(" "),r("div",{staticClass:"row justify-center q-pt-sm"},[r("span",{staticStyle:{color:"white"}},[r("strong",[t._v(t._s(t.user.username))])])]),t._v(" "),r("div",{staticClass:"row justify-center "},[t.user.isClockedIn?r("span",{staticStyle:{color:"purple"}},[t._v("Clocked In")]):r("span",{staticClass:"q-body-1"},[t._v("No scheduled shifts")])]),t._v(" "),r("div",{staticClass:"row justify-center q-mt-md"},[t.user.isClockedIn?[t.user.isContractor?[t._v("\n\t\t\t\t\tcontractor\n\t\t\t\t")]:t._e(),t._v(" "),t.user.isContractor?t._e():[r("q-btn",{attrs:{size:"sm",color:"secondary",label:"Start Break"}}),t._v(" "),r("p",{staticStyle:{"padding-left":"5px"}}),t._v(" "),r("q-btn",{attrs:{size:"sm",color:"secondary",label:"Clock Out"},on:{click:function(e){t.clockOut()}}})]]:r("q-btn",{attrs:{size:"sm",color:"secondary",label:"Clock In"},on:{click:function(e){t.clockIn()}}})],2),t._v(" "),r("hr"),t._v(" "),r("div",{attrs:{row:""}},[r("q-list",{attrs:{"no-border":"",link:""}},[r("q-item",{attrs:{to:"/liveview"}},[r("q-item-side",{attrs:{icon:"local shipping"}}),t._v(" "),r("q-item-main",{attrs:{label:"Live View"}})],1),t._v(" "),r("q-item",{attrs:{to:"/dashboard"}},[r("q-item-side",{attrs:{icon:"local shipping"}}),t._v(" "),r("q-item-main",{attrs:{label:"Dashboard"}})],1),t._v(" "),r("q-collapsible",{attrs:{indent:"",icon:"devices other",label:"Assets"}},[r("q-item",{attrs:{to:"/hardware"}},[r("q-item-main",{attrs:{label:"Hardware"}})],1),t._v(" "),r("q-item",{attrs:{to:"/consumables"}},[r("q-item-main",{attrs:{label:"Consumables"}})],1),t._v(" "),r("q-item",{attrs:{to:"/groups"}},[r("q-item-main",{attrs:{label:"Groups"}})],1)],1),t._v(" "),r("q-item",{attrs:{to:"/workshop"}},[r("q-item-side",{attrs:{icon:"build"}}),t._v(" "),r("q-item-main",{attrs:{label:"Work Shop"}})],1),t._v(" "),r("q-collapsible",{attrs:{indent:"",icon:"person",label:"Employees"}},[r("q-item",{attrs:{to:"/directory"}},[r("q-item-main",{attrs:{label:"Directory"}})],1),t._v(" "),r("q-item",{attrs:{to:"/profile?id="+t.user.emp_id}},[r("q-item-main",{attrs:{label:"My Profile"}})],1)],1),t._v(" "),r("q-item",{attrs:{to:"/services"}},[r("q-item-side",{attrs:{icon:"assignment"}}),t._v(" "),r("q-item-main",{attrs:{label:"Documents"}})],1),t._v(" "),r("q-item",{attrs:{to:"/logs"}},[r("q-item-side",{attrs:{icon:"list"}}),t._v(" "),r("q-item-main",{attrs:{label:"Logs"}})],1)],1)],1)]),t._v(" "),r("q-page-container",[r("router-view")],1),t._v(" "),r("q-layout-footer",{model:{value:t.footer,callback:function(e){t.footer=e},expression:"footer"}},[r("q-toolbar",{staticStyle:{"background-color":"#b48ead !important",color:"#4c566a"},attrs:{inverted:"ios"===t.$q.theme}},[r("q-toolbar-title",{staticClass:"q-caption"})],1)],1)],1)},a=[];s._withStripped=!0;var i=r("XyMi"),c=!1;var l=function(t){c||r("bJzG")},u=Object(i.a)(n,s,a,!1,l,"data-v-186857e1",null);u.options.__file="src/components/default.vue";e.default=u.exports},"1nuA":function(t,e,r){"use strict";e.decode=e.parse=r("kMPS"),e.encode=e.stringify=r("xaZU")},"3F6j":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"\nimg.avatar[data-v-186857e1] {\n\twidth: 100px;\n\theight: 100px;\n\tborder-radius: 50%;\n\tbox-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 1px rgba(0, 0, 0, 0.14),\n\t\t0 2px 1px -1px rgba(0, 0, 0, 0.12);\n\tvertical-align: bottom;\n}\n#profile[data-v-186857e1] {\n\theight: 120px;\n}\n",""])},bJzG:function(t,e,r){var o=r("3F6j");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,r("rjj0").default)("24e6539e",o,!1,{})},kMPS:function(t,e,r){"use strict";function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}t.exports=function(t,e,r,s){e=e||"&",r=r||"=";var a={};if("string"!=typeof t||0===t.length)return a;var i=/\+/g;t=t.split(e);var c=1e3;s&&"number"==typeof s.maxKeys&&(c=s.maxKeys);var l=t.length;c>0&&l>c&&(l=c);for(var u=0;u<l;++u){var p,d,f,v,m=t[u].replace(i,"%20"),b=m.indexOf(r);b>=0?(p=m.substr(0,b),d=m.substr(b+1)):(p=m,d=""),f=decodeURIComponent(p),v=decodeURIComponent(d),o(a,f)?n(a[f])?a[f].push(v):a[f]=[a[f],v]:a[f]=v}return a};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},xaZU:function(t,e,r){"use strict";var o=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};t.exports=function(t,e,r,i){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?s(a(t),function(a){var i=encodeURIComponent(o(a))+r;return n(t[a])?s(t[a],function(t){return i+encodeURIComponent(o(t))}).join(e):i+encodeURIComponent(o(t[a]))}).join(e):i?encodeURIComponent(o(i))+r+encodeURIComponent(o(t)):""};var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)};function s(t,e){if(t.map)return t.map(e);for(var r=[],o=0;o<t.length;o++)r.push(e(t[o],o));return r}var a=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}}});