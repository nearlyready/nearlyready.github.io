(function(e){function t(t){for(var n,a,s=t[0],l=t[1],d=t[2],c=0,u=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&u.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,d||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],n=!0,s=1;s<i.length;s++){var l=i[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=n,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(i,n,function(t){return e[t]}.bind(null,n));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var p=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("85ec"),r=i.n(n);r.a},1:function(e,t){},2:function(e,t){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"rotator"}},[i("div",{ref:"parent",staticClass:"half-holder"},[e.isReady?i("Particles",{attrs:{properties:e.getParticlesProps(),parameters:e.getParticlesParams()}}):e._e()],1),e.isReady?i("div",{staticClass:"half-holder"},e._l(e.getSliderParams(),(function(t){return i("Slider",{key:t.key,attrs:{parameters:t,properties:e.getSliderProps(t)}})})),1):e._e()])])},o=[],a=(i("4160"),i("159b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("canvas",{attrs:{id:e.properties.id,"data-paper-hidpi":"off"}})}),s=[],l={props:["properties","parameters"],mounted:function(){var e=document.getElementById(this.properties.id);e.width=this.properties.width,e.height=this.properties.height,paper.setup(e);for(var t=e.width/40,i=t,n=e.width-t,r=n-i,o=t,a=e.height-t,s=a-o,l=.1,d=100,p=[],c=function(e,t,i){var n=Math.abs(e.x-t.x),r=Math.abs(e.y-t.y);return!(n>i||r>i)&&(2^n)+(2^r)<(2^i)},u=function(e,t,i){var n=[e,t],r=[],o=[];i&&(n.forEach((function(e){e.isColliding=!0,e.isInfected?r.push(e):o.push(e)})),1===r.length&&(o[0].isInfected=Math.random()<l));var a=r.length>0;n.forEach((function(e){a&&(e.isNearInfected=!0),e.circle.style=Object.assign(f(e.isColliding,e.isNearInfected),e.circle.style),e.circle.style=Object.assign(h(e.isInfected),e.circle.style)}))},h=function(e){return{fillColor:e?"pink":"white"}},f=function(e,i){return{strokeColor:e?i?"red":"black":"grey",strokeWidth:.4*t}},v=1,g=0;g<d;g++){var m=i+Math.random()*r,y=o+Math.random()*s,w={speed:2.5*Math.random(),circle:new Path.Circle(m,y,t),isColliding:!1,isInfected:g<v,isNearInfected:!1};w.circle.style=h(w.isInfected),p.push(w)}view.onFrame=function(e){p.forEach((function(r,s){r.isColliding=!1,r.isNearInfected=!1;for(var l=0;l<s;l++){var d=r,h=p[l],f=c(d.circle.position,h.circle.position,2*t);u(d,h,f)}var v=e.delta,g=new Point(0,1*v*r.speed*100);g.angle=360*Math.random();var m=r.circle.position,y=m.x+g.x;y=y<i?i+(i-y):y>n?n-(y-n):y;var w=m.y+g.y;w=w<o?o+(o-w):w>a?a-(w-a):w,r.circle.position=[y,w]}))},view.draw()}},d=l,p=i("2877"),c=Object(p["a"])(d,a,s,!1,null,null,null),u=c.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("canvas",{attrs:{id:e.properties.id,"data-paper-hidpi":"off"}})},f=[],v={props:["properties","parameters"],mounted:function(){console.log(JSON.stringify(this.parameters));var e=this.parameters,t=document.getElementById(this.properties.id);t.width=this.properties.width,t.height=this.properties.height,paper.setup(t);var i=this.properties.weights,n=t.height/(i.paddingTop+i.paddingBottom+i.paddingMiddle+i.titleFontSize+i.slotWidth),r=n*i.paddingTop,o=(i.paddingBottom,n*i.titleFontSize),a=n*i.paddingMiddle,s=n*i.slotWidth,l=r+o,d=l+a,p=0*s,c=new PointText(new Point(p,l));c.justification="left",c.fillColor="grey",c.fontSize=o,c.fontWeight="bold";var u=function(t){c.content=e.title+": "+Math.round(100*e.value)/100};u();var h=d+s/2,f=s/2,v=t.width-s/2,g="lightgray",m=new Path.Line(new Point(f,h),new Point(v,h));m.style={strokeColor:g,strokeWidth:s,strokeCap:"round"},m.style.strokeColor=g,m.style.strokeWidth=s;var y=f,w=v,P=(w-y)/(e.max-e.min),b=function(t){var i=(e.max-e.min)*(t-y)/(w-y);return i},x=function(t){var i=y+P*(t-e.min);return i},k=.4*s,S=k/10,M="white",O="grey",C=x(e.value),j=new Path.Circle(C,h,k);j.style={strokeColor:O,strokeWidth:S,fillColor:M};var _=null;j.onMouseDown=function(e){_=e.point.x},j.onMouseDrag=function(t){var i=t.point.x,n=j.position.x+i-_;j.position.x=n<y?y:n>w?w:n,_=i,e.value=b(j.position.x),u()}}},g=v,m=Object(p["a"])(g,h,f,!1,null,null,null),y=m.exports,w=i("2222"),P=i.n(w),b={name:"App",components:{Particles:u,Slider:y},data:function(){return{isReady:!1,params:this.initializeParams()}},methods:{initializeParams:function(){var e=[{key:"speed",title:"Speed",value:5,min:0,max:10},{key:"population",title:"Population",value:20,min:1,max:100},{key:"mortality",title:"Mortality",value:8,min:0,max:10},{key:"contagiousness",title:"Contagiousness",value:20,min:1,max:100},{key:"speed_range",title:"Speed Range",value:45,min:0,max:100},{key:"etc1",title:"Population",value:50,min:1,max:200},{key:"etc2",title:"Speed",value:1,min:0,max:10}];return e.forEach((function(e){e.resetValue=e.value})),e},getParticlesProps:function(){return{id:"particles",width:.8*this.divWidth,height:.8*this.divHeight,isReady:this.isReady}},getSliderProps:function(e){var t=Object.assign(e,{id:e.key+"-slider",width:.8*this.divWidth,height:this.divHeight/5,weights:{paddingTop:2,paddingBottom:0,titleFontSize:2,paddingMiddle:1,slotWidth:3}});return t},getSliderParams:function(){return this.params},getParticlesParams:function(){var e={};return this.params.forEach((function(t){e[t.key]=t})),console.log(e),e}},mounted:function(){this.canvasDimension=.9*Math.min(window.innerWidth,window.innerHeight),this.parentDiv=this.$refs["parent"],P.a.install(window),console.log(window.paper),this.isReady=!0,this.field="speed",this.divWidth=this.$refs.parent.offsetWidth,this.divHeight=this.$refs.parent.offsetHeight}},x=b,k=(i("034f"),Object(p["a"])(x,r,o,!1,null,null,null)),S=k.exports,M=i("2f62");n["a"].use(M["a"]);var O=new M["a"].Store({state:{},mutations:{},actions:{},modules:{}});n["a"].config.productionTip=!1,new n["a"]({store:O,render:function(e){return e(S)}}).$mount("#app")},"85ec":function(e,t,i){}});
//# sourceMappingURL=app.da9c3045.js.map