"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[83],{2348:function(n,t,r){r.d(t,{C:function(){return c},Y:function(){return u}});var e,a,o=r(168),i=r(5706),c=i.Z.button(e||(e=(0,o.Z)(["\n  margin-top: 10px;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #1a9c00;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  &:hover,\n  &:focus {\n    background-color: #20be00;\n  }\n"]))),u=i.Z.button(a||(a=(0,o.Z)(["\n  display: flex;\n  padding: 8px 16px;\n  border: 0px;\n  border-radius: 4px;\n  text-decoration: none;\n  background-color: #1a9c00;\n  color: white;\n  font-weight: 500;\n  font-size: 16px;\n  justify-content: center;\n  /* flex-direction: column; */\n  align-items: center;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.09);\n    color: white;\n    background-color: #1a9c00;\n  }\n"])))},3114:function(n,t,r){r.d(t,{O:function(){return m}});var e,a,o,i,c=r(7689),u=r(1087),s=r.p+"static/media/noposter.8720e6748db7f1da66c2.png",p=r(168),f=r(5706),d=f.Z.div(e||(e=(0,p.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 220px);\n  justify-content: space-around;\n  gap: 20px;\n"]))),x=f.Z.div(a||(a=(0,p.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14),\n    0px 2px 1px -1px rgba(191, 84, 84, 0.12);\n\n  > a {\n    text-decoration: none;\n  }\n\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),l=f.Z.h4(o||(o=(0,p.Z)(["\n  padding: 4px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  align-content: center;\n  color: black;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n"]))),h=f.Z.img(i||(i=(0,p.Z)(["\n  display: block;\n  width: 100%;\n  height: 90%;\n  object-fit: cover;\n"]))),g=r(184),m=function(n){var t=n.movies,r=(0,c.TH)();return(0,g.jsx)(d,{children:t.map((function(n){var t=n.title,e=n.release_date,a=n.poster_path,o=n.id,i=null===a?"".concat(s):"".concat("https://image.tmdb.org/t/p/w300","/").concat(a);return(0,g.jsx)(x,{children:(0,g.jsxs)(u.rU,{to:"/movies/".concat(o),state:{from:r},children:[(0,g.jsx)(h,{src:i,alt:t}),(0,g.jsxs)(l,{children:[t,", ",e.slice(0,4)]})]})},o)}))})}},4916:function(n,t,r){r.d(t,{ER:function(){return x},Jh:function(){return f},Pg:function(){return p},XT:function(){return s},_r:function(){return d}});var e=r(5861),a=r(4687),o=r.n(a),i=r(1243),c="fc79b9c24904503e15894f783d71423b",u="https://api.themoviedb.org/3/movie/",s=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:c,page:t,total_pages:12}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u+String(t)),{params:{api_key:c}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u+String(t),"/credits"),{params:{api_key:c}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(o().mark((function n(t){var r,e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u+String(t),"/reviews"),{params:{api_key:c}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,e.Z)(o().mark((function n(t,r){var e,a;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:c,query:t,page:r}});case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()},4361:function(n,t,r){r.r(t),r.d(t,{default:function(){return l}});var e=r(3433),a=r(5861),o=r(9439),i=r(4687),c=r.n(i),u=r(2791),s=r(3114),p=r(4916),f=r(2348),d=r(184),x=function(n){var t=n.clickBtn;return(0,d.jsx)(f.C,{type:"button",onClick:t,children:"Load More"})},l=function(){var n=(0,u.useState)([]),t=(0,o.Z)(n,2),r=t[0],i=t[1],f=(0,u.useState)(1),l=(0,o.Z)(f,2),h=l[0],g=l[1],m=(0,u.useState)(!1),b=(0,o.Z)(m,2),v=b[0],w=b[1];(0,u.useEffect)((function(){!function(){var n=(0,a.Z)(c().mark((function n(){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.XT)(h);case 3:t=n.sent,r=t.results,a=t.total_pages,w(h<Math.ceil(a/66)),i((0,e.Z)(r)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}()()}),[h]);return(0,d.jsxs)("main",{children:[(0,d.jsx)("h2",{children:"Trending today"}),(0,d.jsx)(s.O,{movies:r}),v&&(0,d.jsx)(x,{clickBtn:function(){g((function(n){return n+1}))}})]})}}}]);
//# sourceMappingURL=83.ac41a069.chunk.js.map