"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[591],{155:function(e,t,n){n.d(t,{O:function(){return s}});var r=n(689),a=n(87),i="MoviesList_moviesList__P6SP5",c="MoviesList_movie__gS8QL",u=n(184),s=function(e){var t=e.movies,n=(0,r.TH)();return(0,u.jsx)("div",{children:(0,u.jsx)("ul",{className:i,children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{id:e.id,to:"/movies/".concat(e.id),state:{from:n},className:c,children:e.original_title})},e.id)}))})})}},591:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(433),a=n(861),i=n(439),c=n(757),u=n.n(c),s=n(86),o=n(791),p=n(155),f={trendingHeader:"HomePage_trendingHeader__WSFcq"},v=n(184),d=function(){var e=(0,o.useState)([]),t=(0,i.Z)(e,2),n=t[0],c=t[1];return(0,o.useEffect)((function(){function e(){return(e=(0,a.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Hg)();case 2:t=e.sent,c((0,r.Z)(t));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,v.jsxs)("div",{className:f.homeContainer,children:[(0,v.jsx)("h1",{className:f.trendingHeader,children:"Trending today"}),(0,v.jsx)(p.O,{movies:n})]})}},86:function(e,t,n){n.d(t,{Hg:function(){return o},TP:function(){return p},qF:function(){return s},tx:function(){return v},zv:function(){return f}});var r=n(861),a=n(757),i=n.n(a),c=n(243),u="3a711e6a1a38cf2c1f9aa15317eef8a6",s=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=591.30bec117.chunk.js.map