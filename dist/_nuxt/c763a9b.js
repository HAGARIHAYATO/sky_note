(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{232:function(t,e,r){"use strict";r.r(e);r(46),r(15),r(227),r(45);var n=r(24),c=r(25),o=r(230),l=r(231),f=r(228),d=r(23),h=r(229),v=r(233),y=r(234);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var j=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},O=function(t){Object(o.a)(r,t);var e=m(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"login",value:function(){this.$auth.login("google")}},{key:"logout",value:function(){this.$auth.logout()}}]),r}(h.Vue),R=O=j([Object(h.Component)({components:{NavLink:v.default,NavBtn:y.default}})],O),x=r(38),component=Object(x.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"flex p-2 justify-between mb-20"},[this._m(0),this._v(" "),e("div",{staticClass:"flex"},[e("nav-link",{attrs:{linkUrl:"/",linkName:"TOP画面"}}),this._v(" "),this.$auth.user?[e("nav-link",{attrs:{linkUrl:"/mypage",linkName:"マイページ"}}),this._v(" "),e("nav-btn",{attrs:{clickFunc:this.logout,linkName:"ログアウト"}})]:[e("nav-btn",{attrs:{clickFunc:this.login,linkName:"ログイン"}})]],2)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{staticClass:"h-12",attrs:{src:"/sky_note.png"}})])}],!1,null,"3c3d66ec",null);e.default=component.exports;installComponents(component,{NavLink:r(233).default,NavBtn:r(234).default,Header:r(232).default})},233:function(t,e,r){"use strict";r.r(e);r(46),r(15),r(227),r(45);var n=r(24),c=r(230),o=r(231),l=r(228),f=r(23),d=r(229);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var v=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},y=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.Vue);v([Object(d.Prop)({type:String,required:!0})],y.prototype,"linkUrl",void 0),v([Object(d.Prop)({type:String,required:!0})],y.prototype,"linkName",void 0);var m=y=v([d.Component],y),j=r(38),component=Object(j.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"border-b-4 border-gray-400 py-2 mx-4 hover:border-black transition-all duration-200",attrs:{to:this.linkUrl}},[e("div",{staticClass:"ml-6"},[this._v("\n    "+this._s(this.linkName)+"\n  ")])])}),[],!1,null,"701ce336",null);e.default=component.exports},234:function(t,e,r){"use strict";r.r(e);r(46),r(15),r(227),r(45);var n=r(24),c=r(230),o=r(231),l=r(228),f=r(23),d=r(229);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var v=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},y=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.Vue);v([Object(d.Prop)({type:Function,required:!0})],y.prototype,"clickFunc",void 0),v([Object(d.Prop)({type:String,required:!0})],y.prototype,"linkName",void 0);var m=y=v([d.Component],y),j=r(38),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"border-b-4 border-gray-400 py-2 mx-4 hover:border-black transition-all duration-200",on:{click:function(e){return e.stopPropagation(),t.clickFunc(e)}}},[r("button",{staticClass:"ml-6 focus:outline-none"},[t._v(t._s(t.linkName))])])}),[],!1,null,"915e7a86",null);e.default=component.exports},243:function(t,e,r){var content=r(275);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("85a04374",content,!0,{sourceMap:!1})},244:function(t,e,r){var content=r(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("2f5cf96f",content,!0,{sourceMap:!1})},245:function(t,e,r){var content=r(279);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(62).default)("cbe06e76",content,!0,{sourceMap:!1})},252:function(t,e,r){"use strict";r.r(e);r(46),r(15),r(227),r(45);var n=r(24),c=r(230),o=r(231),l=r(228),f=r(23),d=r(229),h=r(256);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var y=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},m=function(t){Object(c.a)(r,t);var e=v(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.Vue);y([Object(d.Prop)({required:!0})],m.prototype,"item",void 0);var j=m=y([Object(d.Component)({components:{StarProfile:h.default}})],m),O=(r(278),r(38)),component=Object(O.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mx-auto my-12"},[this.item&&this.item.id?e("div",{staticClass:"starImage mx-auto"},[e("div",{staticClass:"bg-gray-900 rounded-lg"},[e("img",{staticClass:"mx-auto",attrs:{src:this.item.starImage}})]),this._v(" "),e("star-profile",{attrs:{item:this.item}})],1):e("h2",{staticClass:"text-center text-3xl font-bold m-40 text-gray-500"},[this._v("少し待ってから画面をリロードしてください")])])}),[],!1,null,"3791573e",null);e.default=component.exports;installComponents(component,{StarProfile:r(256).default})},256:function(t,e,r){"use strict";r.r(e);r(46),r(15),r(227),r(45);var n=r(24),c=r(230),o=r(231),l=r(228),f=r(23),d=r(229),h=r(260);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var y=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},m=function(t){Object(c.a)(r,t);var e=v(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.Vue);y([Object(d.Prop)({required:!0})],m.prototype,"item",void 0);var j=m=y([Object(d.Component)({components:{TextGroup:h.default}})],m),O=(r(276),r(38)),component=Object(O.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"profileBoard flex border-2 border-gray-400 rounded-lg my-16 justify-start"},[e("img",{staticClass:"imgSize border-2 border-blue-400 rounded-lg bg-black block",attrs:{src:this.item.starIcon}}),this._v(" "),e("text-group",{attrs:{item:this.item}})],1)}),[],!1,null,"68f0cff3",null);e.default=component.exports;installComponents(component,{TextGroup:r(260).default})},260:function(t,e,r){"use strict";r.r(e);r(46),r(15),r(227),r(45);var n=r(24),c=r(230),o=r(231),l=r(228),f=r(23),d=r(229);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var v=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},y=function(t){Object(c.a)(r,t);var e=h(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(d.Vue);v([Object(d.Prop)({required:!0})],y.prototype,"item",void 0);var m=y=v([Object(d.Component)({components:{}})],y),j=(r(274),r(38)),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ml-20 container"},[r("h2",{staticClass:"text-left text-xl font-bold"},[t._v(t._s(t.item.jpName)+" ("+t._s(t.item.direction)+")")]),t._v(" "),r("h3",{staticClass:"text-left text-lg"},[t._v(t._s(t.item.enName))]),t._v(" "),r("p",{staticClass:"break-words text-sm"},[t._v(t._s(t.item.roughly))]),t._v(" "),r("p",{staticClass:"break-words text-xs my-4 p-4 bg-yellow-200 rounded-lg"},[r("b",[t._v("概要")]),t._v(" "+t._s(t.item.content))]),t._v(" "),r("p",{staticClass:"break-words text-xs my-4 p-4 bg-yellow-200 rounded-lg"},[r("b",[t._v("伝承")]),t._v(" "+t._s(t.item.origin))])])}),[],!1,null,"0dbc4e67",null);e.default=component.exports},274:function(t,e,r){"use strict";r(243)},275:function(t,e,r){(e=r(61)(!1)).push([t.i,".profileBoard[data-v-0dbc4e67]{height:374px;padding:10px}.imgSize[data-v-0dbc4e67]{height:350px;width:350px}",""]),t.exports=e},276:function(t,e,r){"use strict";r(244)},277:function(t,e,r){(e=r(61)(!1)).push([t.i,".profileBoard[data-v-68f0cff3]{height:374px;padding:10px}.imgSize[data-v-68f0cff3]{height:350px;width:350px}",""]),t.exports=e},278:function(t,e,r){"use strict";r(245)},279:function(t,e,r){(e=r(61)(!1)).push([t.i,".starImage[data-v-3791573e]{width:70%}",""]),t.exports=e},293:function(t,e,r){"use strict";r.r(e);r(46),r(15),r(227),r(45),r(39);var n=r(3),c=r(24),o=r(25),l=r(230),f=r(231),d=r(228),h=r(23),v=r(232),y=r(252),m=r(229);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var O=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},R=function(t){Object(l.a)(f,t);var e,r=j(f);function f(){var t;return Object(c.a)(this,f),(t=r.apply(this,arguments)).item={},t}return Object(o.a)(f,[{key:"mounted",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})}]),f}(m.Vue),x=R=O([Object(m.Component)({auth:!1,middleware:["query"],components:{Header:v.default,Commentary:y.default},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,n=t.query,t.redirect,"https://livlog.xyz/hoshimiru/constellation",c=encodeURI("https://livlog.xyz/hoshimiru/constellation"),e.next=5,r.$get(c,{params:n}).then((function(t){return{item:t.result[0]}})).catch((function(t){console.error(t)}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()}})],R),_=r(38),component=Object(_.a)(x,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Header"),this._v(" "),e("h2",{staticClass:"text-center font-bold text-xl my-10"},[this._v("星座解説")]),this._v(" "),e("commentary",{attrs:{item:this.item}})],1)}),[],!1,null,"87f47b4e",null);e.default=component.exports;installComponents(component,{Header:r(232).default,Commentary:r(252).default})}}]);