(function(e){function t(t){for(var r,a,s=t[0],c=t[1],l=t[2],p=0,u=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],r=!0,s=1;s<i.length;s++){var c=i[s];0!==n[c]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var r={},n={app:0},o=[];function a(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=r,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=c;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var r=i("85ec"),n=i.n(r);n.a},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"rotator"}},[i("div",{ref:"parent",staticClass:"half-holder"},[e.isReady?i("Particles",{attrs:{properties:e.getParticlesProps(),parameters:e.getParticlesParams()}}):e._e()],1),e.isReady?i("div",{staticClass:"half-holder"},e._l(e.getSliderParams(),(function(t){return i("Slider",{key:t.key,attrs:{parameters:t,properties:e.getSliderProps(t)}})})),1):e._e()])])},o=[],a=(i("4160"),i("159b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("canvas",{attrs:{id:e.properties.id,"data-paper-hidpi":"off"}})}),s=[],c={props:["properties","parameters"],mounted:function(){var e=-1,t=-2,i=-3,r=this.parameters,n=document.getElementById(this.properties.id);n.width=this.properties.width,n.height=this.properties.height,paper.setup(n);for(var o=project.activeLayer,a=function(){return r["transmission_distance"].value*n.width/200},s=function(){return r["transmission_probability"].value},c=0,l=n.width,d=l-c,p=0,u=n.height,h=u-p,f=s(),v=200,m=.1/v,g=100,y=[],w=function(e,t,i){var r=Math.abs(e.x-t.x),n=Math.abs(e.y-t.y);return!(r>i||n>i)&&(2^r)+(2^n)<(2^i)},b=function(e,t,r){var n=[e,t],o=[],a=[];r&&(n.forEach((function(e){e.isInteracting=!0,e.timeToRecovery>=0?o.push(e):e.timeToRecovery===i&&a.push(e)})),1===o.length&&1===a.length&&(a[0].timeToRecovery=Math.random()<f?v:a[0].timeToRecovery));var s=o.length>0;n.forEach((function(e){s&&(e.isNearInfected=!0),e.circle.style=Object.assign(x(e.isInteracting,e.isNearInfected),e.circle.style),e.circle.style=Object.assign(P(e.timeToRecovery),e.circle.style)}))},P=function(r){var n="pink";return r===t?n="black":r===e?n="green":r===i&&(n="white"),{fillColor:n}},x=function(e,t){var i=a();return{strokeColor:e?t?"red":"black":"grey",strokeWidth:.4*i}},k=1,_=function(e){var t=r["average_speed"].value,i=r["speed_range"].value;if(g>1){var n=t*(1-i),o=2*i*t/(g-1);t=n+e*o}return t},T=a(),O=T,R=0;R<g;R++){var S={index:R,speed:_(R),isInteracting:!1,timeToRecovery:R<k?v:i,isNearInfected:!1};y.push(S)}var j=function(){T=a(),y.forEach((function(e){var t=0,i=0;e.circle?(t=e.circle.position.x,i=e.circle.position.y,e.circle.remove()):(t=c+Math.random()*d,i=p+Math.random()*h);var r=new Path.Circle(t,i,T);o.addChild(r),e.circle=r,e.circle.style=P(e.timeToRecovery)}))};j(),view.onFrame=function(e){f=s(),y.forEach((function(i,r){i.speed=_(r),T=a(),O!=T&&(j(),O=T);var n=i.timeToRecovery;n>=0&&(Math.random()<m?(i.timeToRecovery=t,Object.assign(P(i.timeToRecovery),i.circle.style)):i.timeToRecovery--);i.isInteracting=!1,i.isNearInfected=!1;for(var o=0;o<r;o++){var s=i,d=y[o],h=w(s.circle.position,d.circle.position,2*T);b(s,d,h)}if(i.timeToRecovery!==t){var f=e.delta,v=new Point(0,1*f*i.speed*100);v.angle=360*Math.random();var g=i.circle.position,x=g.x+v.x;x=x<c?c+(c-x):x>l?l-(x-l):x;var k=g.y+v.y;k=k<p?p+(p-k):k>u?u-(k-u):k,i.circle.position=[x,k]}}))},view.draw()}},l=c,d=i("2877"),p=Object(d["a"])(l,a,s,!1,null,null,null),u=p.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("canvas",{attrs:{id:e.properties.id,"data-paper-hidpi":"off"}})},f=[],v={props:["properties","parameters"],mounted:function(){console.log(JSON.stringify(this.parameters));var e=this.parameters,t=document.getElementById(this.properties.id);t.width=this.properties.width,t.height=this.properties.height,paper.setup(t);var i=this.properties.weights,r=t.height/(i.paddingTop+i.paddingBottom+i.paddingMiddle+i.titleFontSize+i.slotWidth),n=r*i.paddingTop,o=(i.paddingBottom,r*i.titleFontSize),a=r*i.paddingMiddle,s=r*i.slotWidth,c=n+o,l=c+a,d=0*s,p=new PointText(new Point(d,c));p.justification="left",p.fillColor="grey",p.fontSize=o,p.fontWeight="bold";var u=function(t){p.content=e.title+": "+Math.round(100*e.value)/100};u();var h=l+s/2,f=s/2,v=t.width-s/2,m="lightgray",g=new Path.Line(new Point(f,h),new Point(v,h));g.style={strokeColor:m,strokeWidth:s,strokeCap:"round"},g.style.strokeColor=m,g.style.strokeWidth=s;var y=f,w=v,b=(w-y)/(e.max-e.min),P=function(t){var i=(e.max-e.min)*(t-y)/(w-y);return i},x=function(t){var i=y+b*(t-e.min);return i},k=.4*s,_=k/10,T="white",O="grey",R=x(e.value),S=new Path.Circle(R,h,k);S.style={strokeColor:O,strokeWidth:_,fillColor:T};var j=null;S.onMouseDown=function(e){j=e.point.x},S.onMouseDrag=function(t){var i=t.point.x,r=S.position.x+i-j;S.position.x=r<y?y:r>w?w:r,j=i,e.value=P(S.position.x),u()}}},m=v,g=Object(d["a"])(m,h,f,!1,null,null,null),y=g.exports,w=i("2222"),b=i.n(w),P={name:"App",components:{Particles:u,Slider:y},data:function(){return{isReady:!1,params:this.initializeParams()}},methods:{initializeParams:function(){var e=[{key:"average_speed",title:"Average Speed",value:2,min:0,max:10},{key:"speed_range",title:"Speed Range",value:.5,min:0,max:1},{key:"transmission_distance",title:"Transmission Distance",value:10,min:0,max:20},{key:"transmission_probability",title:"Transmission Probability",value:.1,min:0,max:1}];return e.forEach((function(e){e.resetValue=e.value})),e},getParticlesProps:function(){return{id:"particles",width:.8*this.divWidth,height:.8*this.divHeight,isReady:this.isReady}},getSliderProps:function(e){var t=Object.assign(e,{id:e.key+"-slider",width:.8*this.divWidth,height:this.divHeight/5,weights:{paddingTop:2,paddingBottom:0,titleFontSize:4,paddingMiddle:2,slotWidth:10}});return t},getSliderParams:function(){return this.params},getParticlesParams:function(){var e={};return this.params.forEach((function(t){e[t.key]=t})),console.log(e),e}},mounted:function(){this.canvasDimension=.9*Math.min(window.innerWidth,window.innerHeight),this.parentDiv=this.$refs["parent"],b.a.install(window),console.log(window.paper),this.isReady=!0,this.field="speed",this.divWidth=this.$refs.parent.offsetWidth,this.divHeight=this.$refs.parent.offsetHeight}},x=P,k=(i("034f"),Object(d["a"])(x,n,o,!1,null,null,null)),_=k.exports,T=i("2f62");r["a"].use(T["a"]);var O=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({store:O,render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,t,i){}});
//# sourceMappingURL=app.71718eb0.js.map