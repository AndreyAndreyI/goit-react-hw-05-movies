"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(t,e,n){n.r(e);var r=n(514),a=n(710),c=n(184);e.default=function(){var t=(0,r.bg)();return(0,c.jsx)("ul",{className:"castList",children:t&&t.length>0?t.map((function(t){return(0,c.jsxs)("li",{className:"castItem",children:[(0,c.jsx)("img",{src:t.profile_path?"https://image.tmdb.org/t/p/w300/".concat(t.profile_path):a,alt:t.name||t.original_name,height:"400",width:"300",className:"castImg"}),(0,c.jsxs)("div",{className:"personsName",children:[(0,c.jsx)("p",{children:t.name||t.original_name}),(0,c.jsxs)("p",{children:["Character:",t.character]})]})]},t.id)})):(0,c.jsx)("p",{className:"reviewsText",children:"We don't find any actors"})})}},514:function(t,e,n){n.d(e,{bg:function(){return s},kg:function(){return i},l8:function(){return o}});var r=n(439),a=n(791),c=n(689),u=n(565),i=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],i=e[1],o=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.Ny)(o).then(i)}),[o]),n},o=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],i=e[1],o=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.Bt)(o).then(i).catch((function(t){return console.log("Something went wrong Home Page")})).finally()}),[o]),n},s=function(){var t=(0,a.useState)(null),e=(0,r.Z)(t,2),n=e[0],i=e[1],o=(0,c.UO)().movieId;return(0,a.useEffect)((function(){(0,u.y)(o).then(i)}),[o]),n}},565:function(t,e,n){n.d(e,{Bt:function(){return h},Ch:function(){return p},Ny:function(){return s},Tg:function(){return o},y:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(912),i="3cc1352acc3f9742a9cfb3f54e0b60a0",o=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},710:function(t,e,n){t.exports=n.p+"static/media/worker.634c743383b17a828f92.png"}}]);
//# sourceMappingURL=247.76e70d00.chunk.js.map