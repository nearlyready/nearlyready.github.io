(function(e){function t(t){for(var r,a,c=t[0],s=t[1],l=t[2],p=0,d=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},i={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),i=n.n(r);i.a},1:function(e,t){},2:function(e,t){},3490:function(e,t,n){"use strict";var r=n("5378"),i=n.n(r);i.a},5378:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isReady?n("div",[n("Particles",{attrs:{properties:e.getParticlesProps()}})],1):e._e()])},o=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("canvas",{attrs:{id:e.properties.id,"data-paper-hidpi":"off"}})},c=[],s=(n("4160"),n("159b"),{props:["properties"],mounted:function(){var e=document.getElementById(this.properties.id),t=window.devicePixelRatio||1;console.log(t),e.width=this.properties.width,e.height=this.properties.height,paper.setup(e);for(var n=e.width/40,r=n,i=e.width-n,o=i-r,a=n,c=e.height-n,s=c-a,l=.1,u=100,p=[],d=function(e,t,n){var r=Math.abs(e.x-t.x),i=Math.abs(e.y-t.y);return!(r>n||i>n)&&(2^r)+(2^i)<(2^n)},f=function(e,t,n){var r=[e,t],i=[],o=[];n&&(r.forEach((function(e){e.isColliding=!0,e.isInfected?i.push(e):o.push(e)})),1===i.length&&(o[0].isInfected=Math.random()<l));var a=i.length>0;r.forEach((function(e){a&&(e.isNearInfected=!0),e.circle.style=Object.assign(v(e.isColliding,e.isNearInfected),e.circle.style),e.circle.style=Object.assign(h(e.isInfected),e.circle.style)}))},h=function(e){return{fillColor:e?"pink":"white"}},v=function(e,t){return{strokeColor:e?t?"red":"black":"grey",strokeWidth:.4*n}},w=1,y=0;y<u;y++){var g=r+Math.random()*o,m=a+Math.random()*s,b={speed:2.5*Math.random(),circle:new Path.Circle(g,m,n),isColliding:!1,isInfected:y<w,isNearInfected:!1};b.circle.style=h(b.isInfected),p.push(b)}view.onFrame=function(e){p.forEach((function(t,o){t.isColliding=!1,t.isNearInfected=!1;for(var s=0;s<o;s++){var l=t,u=p[s],h=d(l.circle.position,u.circle.position,2*n);f(l,u,h)}var v=e.delta,w=new Point(0,1*v*t.speed*100);w.angle=360*Math.random();var y=t.circle.position,g=y.x+w.x;g=g<r?r+(r-g):g>i?i-(g-i):g;var m=y.y+w.y;m=m<a?a+(a-m):m>c?c-(m-c):m,t.circle.position=[g,m]}))},view.draw()}}),l=s,u=(n("3490"),n("2877")),p=Object(u["a"])(l,a,c,!1,null,null,null),d=p.exports,f=n("2222"),h=n.n(f),v={name:"App",components:{Particles:d},data:function(){return{isReady:!1}},methods:{getParticlesProps:function(){return{id:"particles",width:this.canvasDimension,height:this.canvasDimension,isReady:this.isReady}}},mounted:function(){this.canvasDimension=.5*Math.min(window.innerWidth,window.innerHeight),h.a.install(window),console.log(window.paper),this.isReady=!0}},w=v,y=(n("034f"),Object(u["a"])(w,i,o,!1,null,null,null)),g=y.exports,m=n("2f62");r["a"].use(m["a"]);var b=new m["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:b,render:function(e){return e(g)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.cbaad316.js.map