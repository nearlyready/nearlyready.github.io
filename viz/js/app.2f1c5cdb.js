(function(e){function t(t){for(var r,a,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&p.push(n[a][0]),n[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],r=!0,s=1;s<i.length;s++){var l=i[s];0!==n[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=i[0]))}return e}var r={},n={app:0},o=[];function a(t){if(r[t])return r[t].exports;var i=r[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=e,a.c=r,a.d=function(e,t,i){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(i,r,function(t){return e[t]}.bind(null,r));return i},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var r=i("85ec"),n=i.n(r);n.a},1:function(e,t){},2:function(e,t){},2811:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t),i.d(t,"bus",(function(){return E}));i("e260"),i("e6cf"),i("cca6"),i("a79d");var r=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",[e.isReady?i("Particles",{ref:"particles",attrs:{properties:e.getParticlesProps(),parameters:e.getParticlesParams()}}):e._e()],1),i("div",{staticClass:"popup-holder",class:{hidden:!e.menuIsShowing}},[i("div",{staticClass:"top-right icon-holder-popup",on:{click:function(t){return e.clickHideMenu()}}},[i("i",{staticClass:"material-icons"},[e._v("close")])]),i("div",{staticClass:"mini-heading"},[e._v("EPIDEMIC SIMULATOR")]),i("h2",[e._v(e._s(e.menuItems[e.menuItemNo].title))]),i("div",{ref:"pholder",staticClass:"popup-content"},[i("div",{ref:"sh",staticClass:"slider-holder"},[0===e.menuItemNo?[e.isReady?e._e():void 0,e.isReady?e._l(e.getSliderParams(),(function(t){return i("Slider",{key:t.key,attrs:{parameters:t,properties:e.getSliderProps(t)}})})):e._e()]:e._e()],2),1===e.menuItemNo?i("div",[i("p",[e._v("Blahblahblah.")])]):e._e(),i("div",[e.isReady?i("div",[i("Graph",{class:[2===e.menuItemNo?e.selectedClass:e.notSelectedClass]})],1):e._e()])])]),i("div",{staticClass:"reset-button icon-holder"},[i("div",{on:{click:function(t){return e.clickReset()}}},[i("i",{staticClass:"material-icons"},[e._v("refresh")])])]),e.menuIsShowing?e._e():i("div",{staticClass:"top-right icon-holder"},[i("div",{on:{click:function(t){return e.clickShowMenu(0)}}},[i("i",{staticClass:"material-icons"},[e._v("settings")])]),i("div",{on:{click:function(t){return e.clickShowMenu(1)}}},[i("i",{staticClass:"material-icons"},[e._v("info")])]),i("div",{on:{click:function(t){return e.clickShowMenu(2)}}},[i("i",{staticClass:"material-icons"},[e._v("timeline")])])])])},o=[],a=(i("4160"),i("159b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("canvas",{attrs:{id:e.properties.id,"data-paper-hidpi":"off"}})}),s=[],l={props:["properties","parameters"],methods:{triggerReset:function(){this.resetRequired=!0}},mounted:function(){this.resetRequired=!1;var e=-1,t=-2,i=-3,r=this.parameters,n=document.getElementById(this.properties.id);n.width=this.properties.width,n.height=this.properties.height,paper.setup(n);var o=new Path.Rectangle({point:[0,0],size:[n.width,n.height]});o.fillColor="#ddeeff";var a=project.activeLayer,s=function(){return r["transmission_distance"].value*n.width/100},l=function(){return r["transmission_probability"].value},c=0,u=n.width,d=u-c,p=0,h=n.height,f=h-p,v=l(),m=200,g=.1/m,y=100,C=1,w=[],k=Math.min(n.height,n.width)/100,b=s(),_=b,P=0,x=0,S=function(e,t,i){var r=Math.abs(e.x-t.x),n=Math.abs(e.y-t.y);return!(r>i||n>i)&&(2^r)+(2^n)<(2^i)},R=function(e,t,r){var n=[e,t],o=[],a=[];r&&(n.forEach((function(e){e.isInteracting=!0,e.timeToRecovery>=0?o.push(e):e.timeToRecovery===i&&a.push(e)})),1===o.length&&1===a.length&&(a[0].timeToRecovery=Math.random()<v?m:a[0].timeToRecovery,o[0].mayInfectImminently=!0)),n.forEach((function(e){M(e),e.innerCircle.style=Object.assign(I(e.timeToRecovery),e.innerCircle.style)}))},I=function(r){var n=.1*k,o={fillColor:"#e74c3c",strokeWidth:2*n,strokeColor:"#c0392b"};return r===t?(o.fillColor="#2c3e50",o.strokeColor="grey"):r===e?(o.fillColor="#f1c40f",o.strokeColor="#f39c12"):r===i&&(o.fillColor="white",o.strokeColor="black"),o},M=function(e){var t=e.outerCircle,i=.2*k;t.opacity=1;var r={strokeColor:"blue",strokeWidth:0,dashArray:[1,2],fillColor:null};e.isInteracting&&(e.mayInfectImminently?(t.opacity=.5,r={strokeColor:"#c0392b",strokeWidth:2*i,dashArray:[5*i,5*i],fillColor:"lightgray"}):r={strokeColor:"#2980b9",strokeWidth:i,dashArray:[1,5],fillColor:null}),e.outerCircle.style=r},T=function(e){var t=r["average_speed"].value,i=r["speed_range"].value;if(y>1){var n=t*(1-i),o=2*i*t/(y-1);t=n+e*o}return t},j=function(){b=s(),w.forEach((function(e){var t=0,i=0;if(e.innerCircle)t=e.innerCircle.position.x,i=e.innerCircle.position.y,e.outerCircle.remove();else{t=c+Math.random()*d,i=p+Math.random()*f;var r=new Path.Circle(t,i,k);a.addChild(r),e.innerCircle=r,e.innerCircle.style=I(e.timeToRecovery),e.direction=360*Math.random()}var n=new Path.Circle(t,i,b);a.addChild(n),n.insertAbove(o),e.outerCircle=n}))},O=function(){for(var e=0;e<y;e++){var t={index:e,speed:T(e),isInteracting:!1,timeToRecovery:e<C?m:i,mayInfectImminently:!1};w.push(t)}j()},W=function(){w.forEach((function(e){e.innerCircle.remove(),e.outerCircle.remove()})),w=[]};O();var $=this,A=0,N=0;view.onFrame=function(e){if(P=e.time,$.resetRequired&&(W(),O(),$.resetRequired=!1,N++,A=P),w.length===y){var i=0;v=l(),w.forEach((function(e,r){e.speed=T(r),b=s(),_!=b&&(j(),_=b);var n=e.timeToRecovery;n>=0&&(Math.random()<g?(e.timeToRecovery=t,e.innerCircle.insertAbove(o),Object.assign(I(e.timeToRecovery),e.innerCircle.style)):e.timeToRecovery--);e.isInteracting=!1,e.mayInfectImminently=!1;for(var a=0;a<r;a++){var l=e,d=w[a],f=S(l.innerCircle.position,d.innerCircle.position,b);R(l,d,f)}if(e.timeToRecovery===m)i++;else if(e.timeToRecovery!==t){var v=P-x,y=new Point(0,1*v*e.speed*100);y.angle=e.direction;var C=e.innerCircle.position,k=C.x+y.x,M=C.y+y.y;k<c?(k=c+(c-k),y.x=-y.x):k>u&&(k=u-(k-u),y.x=-y.x),M<p?(M=p+(p-M),y.y=-y.y):M>h&&(M=h-(M-h),y.y=-y.y),e.direction=y.angle+20*(.5-Math.random()),e.innerCircle.position=[k,M],e.outerCircle.position=[k,M]}})),E.$emit("redrawn",{resetCount:N,t:P-A,x:i}),x=P}},view.draw()}},c=l,u=i("2877"),d=Object(u["a"])(c,a,s,!1,null,null,null),p=d.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("canvas",{attrs:{id:e.properties.id,"data-paper-hidpi":"off"}})},f=[],v={props:["properties","parameters"],mounted:function(){var e=this.parameters,t=(this.$refs.sh,document.getElementById(this.properties.id));console.log(this.properties),t.width=this.properties.width,t.height=this.properties.height,paper.setup(t);var i=this.properties.weights,r=t.height/(i.paddingTop+i.paddingBottom+i.paddingMiddle+i.titleFontSize+i.slotWidth),n=r*i.paddingTop,o=(i.paddingBottom,r*i.titleFontSize),a=r*i.paddingMiddle,s=r*i.slotWidth,l=n+o,c=l+a,u=0*s,d=new PointText(new Point(u,l));d.justification="left",d.fillColor="black",d.fontFamily="Open Sans",d.fontSize=o;var p=function(t){d.content=e.title+": "+Math.round(100*e.value)/100};p();var h=c+s/2,f=s/2,v=t.width-s/2,m="black",g=new Path.Line(new Point(f,h),new Point(v,h));g.style={strokeColor:m,strokeWidth:s,strokeCap:"round"},g.style.strokeColor=m,g.style.strokeWidth=s;var y=f,C=v,w=(C-y)/(e.max-e.min),k=function(t){var i=(e.max-e.min)*(t-y)/(C-y);return i},b=function(t){var i=y+w*(t-e.min);return i},_=1.25*s,P=_/10,x="white",S="black",R=b(e.value),I=new Path.Circle(R,h,_);I.style={strokeColor:S,strokeWidth:P,fillColor:x};var M=null;I.onMouseDown=function(e){M=e.point.x},I.onMouseDrag=function(t){var i=t.point.x,r=I.position.x+i-M;I.position.x=r<y?y:r>C?C:r,M=i,e.value=k(I.position.x),p()}}},m=v,g=Object(u["a"])(m,h,f,!1,null,null,null),y=g.exports,C=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"gh",staticClass:"graph-holder"},[i("canvas",{attrs:{id:"graph-canvas","data-paper-hidpi":"off"}})])},w=[],k={props:[],methods:{},mounted:function(){var e=document.getElementById("graph-canvas"),t=this.$refs.gh,i=t.offsetWidth,r=t.offsetHeight;e.width=i,e.height=r,paper.setup(e);var n=paper.project.activeLayer,o=paper.project;console.log("initial: "+n._id);var a=.05,s={n:0,e:i*a,s:r*a,w:i*a},l=[],c=4,u=2,d=0,p=45,h=s.w,f=i-s.e,v=(f-h)/(p-d),m=0,g=12,y=r-s.s,C=s.n,w=(C-y)/(g-m),k=function(e,t){return{t:h+v*(e-d),x:y+w*(t-m)}},b=function(e){var t=new Path;t.strokeColor="red",t.strokeWidth=3;var i=_(k(0,0));t.add(i);var r=_(k(0,e));return t.add(r),t},_=function(e){return new Point(e.t,e.x)},P=function(e){return{resetCount:e,xCumulative:1,bucketStart:0,bucketEnd:u,curve:b()}},x=1,S=0;while(S<=g){var R=new Path;R.strokeColor="lightblue",R.strokeWidth=1,R.add(_(k(d,S))),R.add(_(k(p,S))),S+=x}x=1;var I=0;while(I<=p){var M=new Path;M.strokeColor="lightblue",M.strokeWidth=1,M.add(_(k(I,m))),M.add(_(k(I,g))),I+=x}P(0);var T=0,j=T+u,O=0,W=1,$=b(W);E.$on("redrawn",(function(e){if(paper.project.activeLayer._id!==n._id&&(console.log("setup"),o.activate(),n.activate()),e.resetCount!==O&&($.strokeColor="black",l.push($),l>c&&curves.pop(),l.forEach((function(e){e.opacity=.5*e.opacity})),O=e.resetCount,T=0,j=T+u,W=1,$=b(W)),e.t<p)if(e.t<j){W+=e.x,$.removeSegment($.segments.length-1);var t=_(k(e.t,W));$.add(t)}else{var i=_(k(e.t,0));$.add(i),W=0,T=j,j+=u}}))}},b=k,_=(i("8e60"),Object(u["a"])(b,C,w,!1,null,null,null)),P=_.exports,x=i("2222"),S=i.n(x),R={name:"App",components:{Particles:p,Slider:y,Graph:P},data:function(){return{isReady:!1,params:this.initializeParams(),resetTrigger:!1,menuIsShowing:!1,menuItemNo:2,menuItems:[{iconName:"settings",title:"Controls"},{iconName:"info",title:"About"},{iconName:"timeline",title:'"The Curve"'}],selectedClass:"selected",notSelectedClass:"not-selected"}},methods:{initializeParams:function(){var e=[{key:"average_speed",title:"Average Speed",value:.5,min:0,max:2},{key:"speed_range",title:"Speed Range",value:.5,min:0,max:1},{key:"transmission_distance",title:"Transmission Distance",value:5,min:0,max:20},{key:"transmission_probability",title:"Transmission Probability",value:.1,min:0,max:1}];return e.forEach((function(e){e.resetValue=e.value})),e},getParticlesProps:function(){return{id:"particles",width:.99*window.innerWidth,height:.99*window.innerHeight,isReady:this.isReady}},getSliderProps:function(e){var t=Object.assign(e,{id:e.key+"-slider",width:.8*this.$refs.sh.offsetWidth,height:this.$refs.sh.offsetHeight/5,weights:{paddingTop:2,paddingBottom:4,titleFontSize:5,paddingMiddle:3,slotWidth:4}});return t},getSliderParams:function(){return this.params},getParticlesParams:function(){var e={};return this.params.forEach((function(t){e[t.key]=t})),e},clickReset:function(){this.$refs.particles.triggerReset()},clickShowMenu:function(e){this.menuIsShowing=!0,this.menuItemNo=e},clickHideMenu:function(){this.menuIsShowing=!1}},mounted:function(){S.a.install(window),this.isReady=!0,console.log(this.$refs.sh.offsetWidth)}},I=R,M=(i("034f"),Object(u["a"])(I,n,o,!1,null,null,null)),T=M.exports,j=i("2f62");r["a"].use(j["a"]);var O=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1;var E=new r["a"];new r["a"]({store:O,render:function(e){return e(T)}}).$mount("#app")},"85ec":function(e,t,i){},"8e60":function(e,t,i){"use strict";var r=i("2811"),n=i.n(r);n.a}});
//# sourceMappingURL=app.2f1c5cdb.js.map