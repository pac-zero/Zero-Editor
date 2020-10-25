(this["webpackJsonpzero-editor"]=this["webpackJsonpzero-editor"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8BAMAAAAnEK9/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURVFRUTMzM3nhs84AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhSURBVEjHY6AYCOIBAqPyo/Kj8qPyo/Kj8sNUnhLAwAAAui1roY+vV8MAAAAASUVORK5CYII="},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(5),l=n.n(r),i=n(1),c=n(2),u=n(4),s=n(3),m=(n(13),n(14),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"onShowHide",value:function(e){var t,n=e.currentTarget,o="header"===n.className?n.parentElement:null===(t=n.parentElement)||void 0===t?void 0:t.parentElement;if(o){var a=o.getElementsByClassName("content")[0],r=o.getElementsByClassName("header")[0];if(r&&a){var l=r.getElementsByTagName("button")[0];if(l)"none"===a.style.display?(a.style.display="block",l.textContent="-"):(a.style.display="none",l.textContent="+")}}}},{key:"render",value:function(){return a.a.createElement("div",{className:"node-menu-category"},a.a.createElement("div",{className:"header",onClick:this.onShowHide},a.a.createElement("span",null,this.props.title),a.a.createElement("button",{disabled:!0},"-")),a.a.createElement("div",{className:"content"},this.props.children))}}]),n}(a.a.Component)),h=n(7),d=(n(15),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"createDragItem",value:function(){var e=h.Guid.toString(),t=document.createElement("div");return t.id=e,t.style.position="absolute",t.style.zIndex="9995",t.style.width="100px",t.style.height="25px",l.a.render(a.a.createElement(n,{name:this.props.name,color:this.props.color}),t),t}},{key:"onItemDropped",value:function(e,t){console.log(e,t)}},{key:"onMouseDown",value:function(e){var t=this.createDragItem();function n(e,n){t.style.left="".concat(e-50,"px"),t.style.top="".concat(n-12.5,"px")}document.body.append(t),n(e.pageX,e.pageY);var o=this;function a(e){document.removeEventListener("mousemove",r),t.onmouseup=null,t.remove(),o.onItemDropped(e.pageX,e.pageY)}function r(e){n(e.pageX,e.pageY)}document.addEventListener("mousemove",r),t.onmouseup=a,t.onmouseleave=a}},{key:"render",value:function(){return a.a.createElement("div",{className:"node-menu-item",onMouseDown:this.onMouseDown.bind(this),style:{backgroundImage:"linear-gradient(to right, ".concat(this.props.color,", #111)")}},a.a.createElement("div",null,this.props.name))}}]),n}(a.a.Component)),p=(n(16),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{id:"node-selector-menu"},a.a.createElement("input",{type:"text",placeholder:"search nodes..."}),a.a.createElement("hr",null),a.a.createElement(m,{title:"Data"},a.a.createElement(d,{name:"Number",color:"#bc316d"}),a.a.createElement(d,{name:"Toggle",color:"#31bc87"}),a.a.createElement(d,{name:"Vector",color:"#3151bc"}),a.a.createElement(d,{name:"Angle",color:"#5831bc"}),a.a.createElement(d,{name:"Color",color:"#bc31ba"})),a.a.createElement(m,{title:"Entity"},a.a.createElement(d,{name:"Model",color:"#8e8e8e"})),a.a.createElement(m,{title:"Model"}),a.a.createElement(m,{title:"Effects"}),a.a.createElement(m,{title:"Modifiers"}))}}]),n}(a.a.Component)),f=(n(17),n(18),n(19),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"onResetTransform",value:function(){this.props.graph.setTransform(0,0,1)}},{key:"onChangeX",value:function(e){var t=parseInt(e.target.value);isNaN(t)||this.props.graph.setTransform(t,null,null)}},{key:"onChangeY",value:function(e){var t=parseInt(e.target.value);isNaN(t)||this.props.graph.setTransform(null,t,null)}},{key:"onChangeZ",value:function(e){var t=parseFloat(e.target.value);isNaN(t)||this.props.graph.setTransform(null,null,t)}},{key:"setInputFilter",value:function(e,t){var n=function(n){if(!t(e.value))return n.preventDefault(),!1};["input","keydown","keyup","mousedown","mouseup","select","contextmenu","drop"].forEach((function(t){return e.addEventListener(t,n)}))}},{key:"componentDidMount",value:function(){var e=/^-?[0-9]*\.?[0-9]*$/,t=document.getElementById("graph-control-x"),n=document.getElementById("graph-control-y"),o=document.getElementById("graph-control-z");t&&n&&o&&(this.setInputFilter(t,(function(t){return e.test(t)})),this.setInputFilter(n,(function(t){return e.test(t)})),this.setInputFilter(o,(function(t){return e.test(t)})))}},{key:"render",value:function(){return a.a.createElement("div",{id:"graph-controls"},a.a.createElement("button",{onMouseDown:this.onResetTransform.bind(this)},"\u27f2"),a.a.createElement("label",{htmlFor:"graph-control-x"},"X"),a.a.createElement("input",{id:"graph-control-x",type:"text",placeholder:"X",defaultValue:"0",onChange:this.onChangeX.bind(this)}),a.a.createElement("label",{htmlFor:"graph-control-y"},"Y"),a.a.createElement("input",{id:"graph-control-y",type:"text",placeholder:"Y",defaultValue:"0",onChange:this.onChangeY.bind(this)}),a.a.createElement("label",{htmlFor:"graph-control-z"},"Z"),a.a.createElement("input",{id:"graph-control-z",type:"text",placeholder:"Z",defaultValue:"10.00",onChange:this.onChangeZ.bind(this)}))}}]),n}(a.a.Component)),v=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).currentZoom=1,e.mouseDown=!1,e.initialGrabX=0,e.initialGrabY=0,e.xOffset=0,e.yOffset=0,e}return Object(c.a)(n,[{key:"updateTransform",value:function(){var e=document.getElementById("graph");e&&(e.style.transform="translateX(".concat(-this.xOffset,"px) translateY(").concat(-this.yOffset,"px) scale(").concat(this.currentZoom,")"));var t=document.getElementById("graph-controls");if(t){var n=t.getElementsByTagName("input"),o=n[0],a=n[1],r=n[2];o.value=(this.xOffset/this.currentZoom).toFixed(0),a.value=(this.yOffset/this.currentZoom).toFixed(0),r.value=(10*this.currentZoom).toFixed(2)}}},{key:"setTransform",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=5e3*this.currentZoom+250;if(null!=e){var a=5e3*this.currentZoom+250;this.xOffset=e>a?a:e<-o?-o:e}if(null!=t){var r=5e3*this.currentZoom+250;this.yOffset=t>r?r:t<-o?-o:t}null!=n&&(this.currentZoom=n>=5?5:n),this.updateTransform()}},{key:"onWheel",value:function(e){e.preventDefault(),e.deltaY>0?this.currentZoom-=.01:e.deltaY<0&&(this.currentZoom+=.01),this.currentZoom=this.currentZoom>=5?5:this.currentZoom,this.currentZoom=this.currentZoom<=.2?.2:this.currentZoom,this.updateTransform()}},{key:"getMouseX",value:function(e){return window.Event?e.pageX:e.clientX+(document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft)}},{key:"getMouseY",value:function(e){return window.Event?e.pageY:e.clientY+(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)}},{key:"onMouseDown",value:function(e){this.mouseDown=!0,document.body.style.cursor="grabbing",this.initialGrabX=this.getMouseX(e)+this.xOffset,this.initialGrabY=this.getMouseY(e)+this.yOffset}},{key:"onMouseUp",value:function(){this.mouseDown=!1,document.body.style.cursor="auto"}},{key:"onMouseMove",value:function(e){if(this.mouseDown){var t=this.getMouseX(e),n=this.getMouseY(e);this.setTransform(this.initialGrabX-t,this.initialGrabY-n,this.currentZoom)}}},{key:"componentDidMount",value:function(){var e=document.getElementById("graph");e&&(e.onwheel=this.onWheel.bind(this),e.onmousedown=this.onMouseDown.bind(this),e.onmouseup=this.onMouseUp.bind(this),e.onmouseleave=this.onMouseUp.bind(this),e.onmousemove=this.onMouseMove.bind(this))}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(f,{graph:this}),a.a.createElement("div",{id:"graph",style:{width:1e4,height:1e4,left:-(5e3-window.innerWidth/2),top:-(5e3-window.innerHeight/2)}},a.a.createElement("canvas",null)))}}]),n}(a.a.Component),y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).nodeTable=void 0,o.nodeTable=new Map,o}return Object(c.a)(n,[{key:"loadPacJson",value:function(e){}},{key:"compileToPacJson",value:function(){return""}},{key:"save",value:function(){}},{key:"load",value:function(e){}},{key:"onLoadProject",value:function(e){}},{key:"onSaveProject",value:function(e){}},{key:"onImportPac3",value:function(e){}},{key:"onExportPac3",value:function(e){}},{key:"render",value:function(){return a.a.createElement("div",{id:"editor"},a.a.createElement("div",{id:"editor-menu"},a.a.createElement("div",null,a.a.createElement("button",{onClick:this.onLoadProject},"Load Project"),a.a.createElement("button",{onClick:this.onSaveProject},"Save Project")),a.a.createElement("div",null,a.a.createElement("button",{onClick:this.onImportPac3},"Import PAC3"),a.a.createElement("button",{onClick:this.onExportPac3},"Export PAC3")),a.a.createElement("h1",null,"Zero Editor")),a.a.createElement(p,null),a.a.createElement(v,null))}}]),n}(a.a.Component);n(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.6bc3b82b.chunk.js.map