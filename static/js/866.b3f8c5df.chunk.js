"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[866],{866:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),a=n(439),c=n(757),u=n.n(c),i=n(86),s=n(689),o=n(791),p="Reviews_reviewsContainer__S2d5o",f="Reviews_reviewsList__1BB-J",v="Reviews_reviewCard__WKZv1",h=n(184),d=function(){var e=(0,s.UO)().movieId,t=(0,o.useState)([]),n=(0,a.Z)(t,2),c=n[0],d=n[1],l=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.tx)(t);case 2:n=e.sent,d(n.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){l(e)}),[e]),(0,h.jsx)("section",{children:0===c.length?(0,h.jsx)("p",{style:{textAlign:"center"},children:"There are yet no reviews for this movie."}):(0,h.jsxs)("div",{className:p,children:[(0,h.jsx)("h1",{children:"Reviews"}),(0,h.jsx)("ul",{className:f,children:c.map((function(e){return(0,h.jsxs)("li",{className:v,children:[(0,h.jsx)("span",{style:{fontWeight:700},children:"Author:"})," ",e.author,(0,h.jsx)("p",{children:e.content})]},e.id)}))})]})})}},86:function(e,t,n){n.d(t,{Hg:function(){return o},TP:function(){return p},qF:function(){return s},tx:function(){return v},zv:function(){return f}});var r=n(861),a=n(757),c=n.n(a),u=n(243),i="3a711e6a1a38cf2c1f9aa15317eef8a6",s=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=866.b3f8c5df.chunk.js.map