(function(t){function o(o){for(var n,r,s=o[0],c=o[1],l=o[2],h=0,d=[];h<s.length;h++)r=s[h],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(o);while(d.length)d.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,o=0;o<i.length;o++){for(var e=i[o],n=!0,s=1;s<e.length;s++){var c=e[s];0!==a[c]&&(n=!1)}n&&(i.splice(o--,1),t=r(r.s=e[0]))}return t}var n={},a={app:0},i=[];function r(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return t[o].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=n,r.d=function(t,o,e){r.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,o){if(1&o&&(t=r(t)),8&o)return t;if(4&o&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)r.d(e,n,function(o){return t[o]}.bind(null,n));return e},r.n=function(t){var o=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(o,"a",o),o},r.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},r.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=o,s=s.slice();for(var l=0;l<s.length;l++)o(s[l]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,o,e){t.exports=e("56d7")},"034f":function(t,o,e){"use strict";var n=e("85ec"),a=e.n(n);a.a},"1cbf":function(t,o,e){},3131:function(t,o,e){},3972:function(t,o,e){"use strict";var n=e("3131"),a=e.n(n);a.a},"56d7":function(t,o,e){"use strict";e.r(o),e.d(o,"bus",(function(){return J}));e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),a=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{attrs:{id:"app"}},[t.isReady?e("Graphic"):t._e()],1)},i=[],r=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"main-holder"},[e("div",{ref:"ch",staticClass:"canvas-panel"},[e("canvas",{attrs:{id:"graphic-canvas","data-paper-hidpi":"off"}})]),e("div",{staticClass:"control-panel"},[e("div",{staticClass:"mode-buttons-holder"},[e("div",{staticClass:"mode-button",class:{"mode-button-selected":"zoom"!==t.touchMode},on:{click:function(o){return t.setMode("swap")}}},[e("i",{staticClass:"material-icons not-selectable"},[t._v("swap_horiz")])]),e("div",{staticClass:"mode-button",class:{"mode-button-selected":"zoom"===t.touchMode&&"zoom-plus"===t.zoomSign},on:{click:function(o){return t.setMode("zoom-plus")}}},[e("i",{staticClass:"material-icons not-selectable"},[t._v("add")])]),e("div",{staticClass:"mode-button",class:{"mode-button-selected":"zoom"===t.touchMode&&"zoom-minus"===t.zoomSign},on:{click:function(o){return t.setMode("zoom-minus")}}},[e("i",{staticClass:"material-icons not-selectable"},[t._v("remove")])])]),t._m(0),e("div",{staticClass:"control-buttons-holder"},[e("div",{staticClass:"control-button",on:{click:function(o){return t.showPopup()}}},[e("i",{staticClass:"material-icons not-selectable"},[t._v("settings")])]),e("div",{staticClass:"control-button",on:{click:function(o){return t.reset()}}},[e("i",{staticClass:"material-icons not-selectable"},[t._v("refresh")])]),e("div",{staticClass:"control-button",on:{click:function(o){return t.showInfo()}}},[e("i",{staticClass:"material-icons not-selectable"},[t._v("help")])])])]),e("div",{staticClass:"overlay",class:{hidden:t.overlayIsHidden}},[e("div",{staticClass:"overlay-text"},[t._v("CALCULATING")])]),e("div",{staticClass:"popup-holder",class:{hidden:t.infoIsHidden}},[e("h1",[t._v("About")]),e("div",{staticClass:"popup-scroller"},[t._v(" Blah blah blah. v1.1 ")]),e("div",{staticClass:"popup-buttons-holder"},[e("span",{staticClass:"popup-button",on:{click:function(o){return t.hideInfo()}}},[t._v("OK")])])]),e("div",{staticClass:"popup-holder",class:{hidden:t.popupIsHidden}},[e("h1",[t._v("Settings")]),e("div",{staticClass:"popup-scroller"},[e("h3",[t._v("Zoom")]),e("div",{staticClass:"popup-group"},[e("Slider",{attrs:{uniqueRef:"colorWidthSlider",param:t.getZoomParam()}})],1),e("div",{staticClass:"popup-separator"}),e("h3",[t._v("Colors")]),e("div",{staticClass:"popup-group"},[e("Slider",{attrs:{uniqueRef:"colorWidthSlider",param:t.getColorWidthParam()}}),e("Slider",{attrs:{uniqueRef:"colorRepeatsSlider",param:t.getColorRepeatsParam()}})],1),e("div",{staticClass:"popup-group"},[e("div",{staticClass:"color-holder"},[e("Color",{attrs:{colors:t.colors}})],1)])]),e("div",{staticClass:"popup-buttons-holder"},[e("span",{staticClass:"popup-button",on:{click:function(o){return t.update()}}},[t._v("OK")])])])])},s=[function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"title-holder"},[e("div",{staticClass:"hTitle"},[t._v("FRACTAL")]),e("div",{staticClass:"hSubtitle"},[t._v("explorer")])])}],c=(e("99af"),e("4160"),e("b0c0"),e("159b"),e("d4ec")),l=e("bee2");function u(t,o){return{x:t.x+o.x,y:t.y+o.y}}function h(t){return t.x*t.x+t.y*t.y}function d(t){return Math.pow(h(t),.5)}function p(t){var o=d(t);return{r:o,theta:0===o?0:Math.atan2(t.y,t.x)}}function f(t){return{x:t.r*Math.cos(t.theta),y:t.r*Math.sin(t.theta)}}function m(t,o){return{r:Math.pow(t.r,o),theta:o*t.theta}}function g(t,o){var e=p(t),n=m(e,o);return f(n)}var v=function(){function t(o,e){Object(c["a"])(this,t),this.threshold=o,this.iterate=e}return Object(l["a"])(t,[{key:"calculateEscape",value:function(t,o,e){var n=0,a=t;while(n<e-1){if(d(a)>this.threshold)break;a=this.iterate(a,o),n++}return n}}]),t}();var C=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{ref:"cph",attrs:{id:"color-picker"}})},b=[],y=e("a900"),x={name:"Color",date:function(){return{colorPicker:null}},props:["colors"],methods:{select:function(){var t=[];this.colorPicker.colors.forEach((function(o){t.push(o.rgb)})),console.log(t),J.$emit("update-colors",t)}},mounted:function(){var t=this.$refs.cph;this.colorPicker=new y["a"].ColorPicker("#color-picker",{colors:this.colors,width:t.offsetWidth});var o=this;this.colorPicker.on("color:change",(function(t){console.log(t);var e=[];o.colorPicker.colors.forEach((function(t){e.push(t.rgb)})),console.log(e),J.$emit("update-colors",e)}))}},M=x,w=e("2877"),R=Object(w["a"])(M,C,b,!1,null,"5f643da7",null),S=R.exports,k=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"slider-outer"},[e("div",{staticClass:"slider-text"},[t._v(t._s(t.param.name)+":"+t._s(t.tidyValue(t.current)))]),e("div",{staticClass:"slider-holder"},[e("svg",{ref:t.uniqueRef,staticClass:"slider-svg",attrs:{width:"100%",height:"100%"}})])])},_=[],z=e("7407"),P=e.n(z),W=e("fb3a"),I=e.n(W),O={name:"Slider",props:["uniqueRef","param"],data:function(){return{current:this.param.default,delta:.1*(this.param.max-this.param.min),rangeMin:null,rangeMax:null}},methods:{tidyValue:function(t){return Math.floor(t)},valueToRange:function(t){return this.rangeMin+this.scaleFactor*(t-this.param.min)},rangeToValue:function(t){return this.param.min+(t-this.rangeMin)/this.scaleFactor},emitUpdate:function(){var t={name:this.param.key,value:this.param.isDiscrete?Math.floor(this.current):this.current};J.$emit("update-param",t)}},mounted:function(){console.log(I.a);var t=this.$refs[this.uniqueRef],o=t.clientWidth,e=t.clientHeight,n=P()(t),a=.5*e,i=.8*e,r=.01*o,s=.99*o,c=s-r,l=c/5,u=i,h=a-u/2,d=.2*u,p=r,f=s-l;this.rangeMin=p,this.rangeMax=f,this.scaleFactor=(this.rangeMax-this.rangeMin)/(this.param.max-this.param.min);var m=this.valueToRange(this.current),g=n.line(r,a,s,a);g.attr({stroke:"black",strokeWidth:i/2,opacity:.2});var v=n.rect(m,h,l,u,d,d);v.attr({stroke:"grey",strokeWidth:1}),v.addClass("handle");var C=null,b=this;I()(v.node).draggable({listeners:{start:function(t){C=+v.attr("x")},move:function(t){var o=C+ +t.dx;o<p&&(o=p),o>f&&(o=f),v.attr("x",o),b.current=b.rangeToValue(o),C=o},end:function(t){console.log(t.type),b.emitUpdate()}}})}},H=O,j=(e("b511"),Object(w["a"])(H,k,_,!1,null,null,null)),$=j.exports,T=(e("d3b7"),e("25f0"),e("2909")),E=function(){function t(o,e){Object(c["a"])(this,t),this.colors=o,this.params=e,this.colorMap=this.createColorMap()}return Object(l["a"])(t,[{key:"setColors",value:function(t){this.colors=t,this.colorMap=this.createColorMap()}},{key:"setParams",value:function(t){this.params=t,this.colorMap=this.createColorMap()}},{key:"RGBToHex",value:function(t,o,e){return t=t.toString(16),o=o.toString(16),e=e.toString(16),1==t.length&&(t="0"+t),1==o.length&&(o="0"+o),1==e.length&&(e="0"+e),"#"+t+o+e}},{key:"getRGBMix",value:function(t,o,e){var n=[],a=["r","g","b"];return a.forEach((function(a){n.push(Math.floor(t[a]+(1-e)*(o[a]-t[a])))})),n}},{key:"createColorMap",value:function(){var t={},o=0,e=0,n=1;this.maxIterations=this.params.nColorRepeatsMax*this.params.colorWidthMax*(this.colors.length-1);for(var a=0;a<this.maxIterations;a++){o===this.params.colorWidth&&(e=n,n++,n===this.colors.length-1&&(n=0),o=0);var i=(this.params.colorWidth-o)/this.params.colorWidth;t[a]=this.RGBToHex.apply(this,Object(T["a"])(this.getRGBMix(this.colors[e],this.colors[n],i))),o++}for(var r=0;r<this.params.colorWidth;r++){var s=(this.params.colorWidth-r)/this.params.colorWidth;t[r+this.maxIterations]=this.RGBToHex.apply(this,Object(T["a"])(this.getRGBMix(this.colors[this.colors.length-2],this.colors[this.colors.length-1],s)))}return t}},{key:"getColor",value:function(t,o){var e=t-(o-this.params.colorWidth);return e>0?this.colorMap[this.maxIterations+e]:this.colorMap[t]}}]),t}(),B={name:"Graphic",props:{},components:{Color:S,Slider:$},data:function(){return{colors:[{r:100,g:0,b:0},{r:255,g:150,b:150},{r:255,g:255,b:255},{r:0,g:0,b:0}],isReady:!1,popupIsHidden:!0,infoIsHidden:!0,overlayIsHidden:!0,touchMode:"zoom",zoomSign:"zoom-plus"}},methods:{reset:function(){J.$emit("reset")},setMode:function(t){console.log(t),"swap"===t?this.touchMode="swap":(this.touchMode="zoom",this.zoomSign=t,console.log(this.zoomSign))},showPopup:function(){this.popupIsHidden=!1,this.overlayIsHidden=!1,this.updateState={zoomChanged:!1,colorsChanged:!1,paramsChanged:!1}},showInfo:function(){this.infoIsHidden=!1,this.overlayIsHidden=!1},hideInfo:function(){this.infoIsHidden=!0,this.overlayIsHidden=!0},update:function(){this.updateState.colorsChanged||this.updateState.paramsChanged?J.$emit("update"):(this.popupIsHidden=!0,this.overlayIsHidden=!0)},getZoomParam:function(){return{isDiscrete:!0,name:"Zoom Multiplier",key:"zoomMultiplier",min:1,max:50,default:10}},getColorWidthParam:function(){return{isDiscrete:!0,name:"Color Width",key:"colorWidth",min:5,max:100,default:50}},getColorRepeatsParam:function(){return{isDiscrete:!0,name:"Color Repeats",key:"nColorRepeats",min:1,max:10,default:1}}},mounted:function(){var t=this,o=this.$refs.ch;console.log([o.offsetHeight,o.offsetWidth]),console.log([this.touchMode,this.zoomSign]);var e=document.getElementById("graphic-canvas");e.width=Math.floor(o.offsetWidth),e.height=Math.floor(o.offsetHeight);var n,a,i,r,s,c,l,h,d=e.getContext("2d"),p=this,f=0,m=e.width,C=e.height,b=0,y=function(){return(m-f)/(a-n)},x=function(){return(b-C)/(r-i)},M=function(){return{xMin:n,xMax:a,xRangeMin:f,xRangeMax:m,xScaleFactor:s,yMin:i,yMax:r,yRangeMin:C,yRangeMax:b,yScaleFactor:c}},w=function(t,o,e,l){console.log("setBounds"),n=t,a=o,i=e,r=l,s=y(),c=x(),console.log(M())},R=function(){var t=e.height/e.width;w(-2.5,2.5,-2.5*t,2.5*t)},S=function(t){return(t-f)/s+n},k=function(t){return(t-C)/c+i},_=function(){l=p.colors},z=function(){10,h="main"};R(),_(),z();for(var P=function(){return"zoom-plus"===p.zoomSign?$.zoomMultiplier:1/$.zoomMultiplier},W=function(t,o,e){console.log({zoomFactor:e}),console.log(M());var n=(m-f)/e,a=(b-C)/e;console.log({insetRangeWidth:n,insetRangeHeight:a});var i=S(t-n/2),r=S(t+n/2),s=k(o-a/2),c=k(o+a/2);w(i,r,s,c)},I=function(t,o,e){console.log("reframeToDomainPoint");var s=(a-n)/e,c=(r-i)/e;console.log({xDomainWidth:s,yDomainWidth:c}),w(t-s/2,t+s/2,o-c/2,o+c/2)},O=2,H=function(t,o){return u(g(t,2),o)},j=new v(O,H),$={nColorRepeats:this.getColorRepeatsParam().default,colorWidth:this.getColorWidthParam().default,nColorRepeatsMax:this.getColorRepeatsParam().max,colorWidthMax:this.getColorWidthParam().max,zoomMultiplier:this.getZoomParam().default},T=function(){return $.nColorRepeats*$.colorWidth*(p.colors.length-1)},B=T(),G=new E(l,$),A=[],F=f;F<m;F++){for(var q=[],D=b;D<C;D++){d.fillStyle="black",d.fillRect(F,D,1,1);var N={xRange:F,yRange:D};q.push(N)}A.push(q)}var Z=function(t){p.popupIsHidden=!0,p.overlayIsHidden=!1,setTimeout((function(){A.forEach((function(o,e){o.forEach((function(n,a){t(n,e,a),e===A.length-1&&a===o.length-1&&(p.overlayIsHidden=!0)}))}))}),1)},V=function(t){var o=j.calculateEscape(t.iterationParams.z0,t.iterationParams.c,B);d.fillStyle=G.getColor(o,B),d.fillRect(t.xRange,t.yRange,1,1),t.escape=o};function L(t,o,e){var n=t.getBoundingClientRect();return{xRange:o-n.left*(t.width/n.width),yRange:e-n.top*(t.height/n.height)}}var U=function t(o){console.log([o,p.touchMode,p.zoomSign]),Z((function(t,e,n){var a,i,r={x:S(e),y:k(n)};o?(a=r,i=o):(a={x:0,y:0},i=r),t.iterationParams={z0:a,c:i},V(t)})),e.onmousedown=function(n){var a=L(e,n.clientX,n.clientY),i={x:S(a.xRange),y:k(a.yRange)};"zoom"===p.touchMode?W(a.xRange,a.yRange,P()):(console.log("Non-zoom interaction. Bounds will be reset to initial value."),R(),"main"===h?(console.log("Switching to Julia set view."),h="julia"):(console.log("Swapping back to main view, zoom to: ".concat(o.x,", ").concat(o.y)),h="main",I(o.x,o.y,100))),"main"===h?t():t(o||i)}},K=function(){Z((function(t,o,e){d.fillStyle=G.getColor(t.escape,B),d.fillRect(t.xRange,t.yRange,1,1)}))},X=function(){Z((function(t,o,e){V(t)}))},Y=function(){R(),_(),z(),U()};J.$on("reset",(function(){Y()})),U(),this.isReady=!0,J.$on("update-colors",(function(o){t.updateState.colorsChanged=!0,l=o,console.log(t.updateState)})),J.$on("update-param",(function(o){console.log(o.name),"zoomMultiplier"!==o.name&&(t.updateState.paramsChanged=!0),$[o.name]=o.value,console.log(t.updateState)})),J.$on("update",(function(){t.updateState.colorsChanged&&G.setColors(l),t.updateState.paramsChanged?(G.setParams($),B=T(),X()):t.updateState.colorsChanged&&K()}))}},G=B,A=(e("3972"),Object(w["a"])(G,r,s,!1,null,"249d957f",null)),F=A.exports,q=(e("2ef0"),{name:"App",components:{Graphic:F},data:function(){return{isReady:!1}},mounted:function(){window.onorientationchange=function(){console.log("Orientation change."),window.location.reload()},window.onresize=function(){console.log("Resize."),setTimeout((function(){window.location.reload()}),200)},this.isReady=!0}}),D=q,N=(e("034f"),Object(w["a"])(D,a,i,!1,null,null,null)),Z=N.exports,V=e("9483");Object(V["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),n["a"].config.productionTip=!1;var J=new n["a"];new n["a"]({render:function(t){return t(Z)}}).$mount("#app")},"85ec":function(t,o,e){},b511:function(t,o,e){"use strict";var n=e("1cbf"),a=e.n(n);a.a}});
//# sourceMappingURL=app.ccd9bc61.js.map