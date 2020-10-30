(this["webpackJsonpzero-editor"]=this["webpackJsonpzero-editor"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(27)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA8BAMAAAAnEK9/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAGUExURVFRUTMzM3nhs84AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAhSURBVEjHY6AYCOIBAqPyo/Kj8qPyo/Kj8sNUnhLAwAAAui1roY+vV8MAAAAASUVORK5CYII="},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(6),i=n.n(a),s=n(1),c=n(2),l=n(5),u=n(4),h=n(3),p=(n(17),n(18),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"onShowHide",value:function(e){var t,n=e.currentTarget,o="header"===n.className?n.parentElement:null===(t=n.parentElement)||void 0===t?void 0:t.parentElement;if(o){var r=o.getElementsByClassName("content")[0],a=o.getElementsByClassName("header")[0];if(a&&r){var i=a.getElementsByTagName("button")[0];if(i)"none"===r.style.display?(r.style.display="block",i.textContent="-"):(r.style.display="none",i.textContent="+")}}}},{key:"render",value:function(){return r.a.createElement("div",{className:"node-menu-category"},r.a.createElement("div",{className:"header",onClick:this.onShowHide},r.a.createElement("span",null,this.props.title),r.a.createElement("button",{disabled:!0},"-")),r.a.createElement("div",{className:"content"},this.props.children))}}]),n}(r.a.Component)),d=n(7),m=(n(19),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"createDragItem",value:function(){var e=d.Guid.toString(),t=document.createElement("div");return t.id=e,t.style.position="absolute",t.style.zIndex="9995",t.style.width="100px",t.style.height="25px",i.a.render(r.a.createElement(n,{name:this.props.name,color:this.props.color,editor:this.props.editor}),t),t}},{key:"onItemDropped",value:function(e,t){var n=this.props.editor.factory.CreateNode(this.props.name);if(null!==n){var o=this.props.editor.graph;if(null!=o){var r=o.pageToGraphCoordinates(e,t),a=r.x,i=r.y;n.setCoordinates(a,i),o.addNode(n)}}}},{key:"onMouseDown",value:function(e){var t=this,n=this.createDragItem();document.body.append(n);var o=function(e,t){n.style.left="".concat(e-50,"px"),n.style.top="".concat(t-12.5,"px")};o(e.pageX,e.pageY);var r=function(e){o(e.pageX,e.pageY)},a=!1,i=function(e){a||(document.removeEventListener("mousemove",r),n.onmouseup=null,n.remove(),t.onItemDropped(e.pageX,e.pageY),a=!0)};document.addEventListener("mousemove",r),n.onmouseup=i;document.addEventListener("mouseout",(function e(t){var n=t.pageX,o=t.pageY;o>=0&&o<=window.innerHeight&&n>=0&&n<=window.innerWidth||(i(t),document.removeEventListener("mouseout",e))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"node-menu-item",onMouseDown:this.onMouseDown.bind(this),style:{backgroundImage:"linear-gradient(to right, ".concat(this.props.color,", #111)")}},r.a.createElement("div",null,this.props.name))}}]),n}(r.a.Component)),f=(n(20),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{id:"node-selector-menu"},r.a.createElement("input",{type:"text",placeholder:"search nodes..."}),r.a.createElement("hr",null),r.a.createElement(p,{title:"Data"},r.a.createElement(m,{name:"Number",color:"#bc316d",editor:this.props.editor}),r.a.createElement(m,{name:"Toggle",color:"#31bc87",editor:this.props.editor}),r.a.createElement(m,{name:"Vector",color:"#3151bc",editor:this.props.editor}),r.a.createElement(m,{name:"Angle",color:"#5831bc",editor:this.props.editor}),r.a.createElement(m,{name:"Color",color:"#bc31ba",editor:this.props.editor})),r.a.createElement(p,{title:"Entity"},r.a.createElement(m,{name:"Model",color:"#8e8e8e",editor:this.props.editor})),r.a.createElement(p,{title:"Model"}),r.a.createElement(p,{title:"Effects"}),r.a.createElement(p,{title:"Modifiers"}))}}]),n}(r.a.Component)),v=n(8),g=(n(21),n(22),n(23),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"onResetTransform",value:function(){this.props.graph.setTransform(0,0,1)}},{key:"onChangeX",value:function(e){var t=parseInt(e.target.value);isNaN(t)||this.props.graph.setTransform(t,null,null)}},{key:"onChangeY",value:function(e){var t=parseInt(e.target.value);isNaN(t)||this.props.graph.setTransform(null,t,null)}},{key:"onChangeZ",value:function(e){var t=parseFloat(e.target.value);isNaN(t)||this.props.graph.setTransform(null,null,t)}},{key:"setInputFilter",value:function(e,t){var n=function(n){if(!t(e.value))return n.preventDefault(),!1};["input","keydown","keyup","mousedown","mouseup","select","contextmenu","drop"].forEach((function(t){return e.addEventListener(t,n)}))}},{key:"componentDidMount",value:function(){var e=/^-?[0-9]*\.?[0-9]*$/,t=document.getElementById("graph-control-x"),n=document.getElementById("graph-control-y"),o=document.getElementById("graph-control-z");t&&n&&o&&(this.setInputFilter(t,(function(t){return e.test(t)})),this.setInputFilter(n,(function(t){return e.test(t)})),this.setInputFilter(o,(function(t){return e.test(t)})))}},{key:"render",value:function(){return r.a.createElement("div",{id:"graph-controls"},r.a.createElement("button",{onMouseDown:this.onResetTransform.bind(this)},"\u27f2"),r.a.createElement("label",{htmlFor:"graph-control-x"},"X"),r.a.createElement("input",{id:"graph-control-x",type:"text",placeholder:"X",defaultValue:"0",onChange:this.onChangeX.bind(this)}),r.a.createElement("label",{htmlFor:"graph-control-y"},"Y"),r.a.createElement("input",{id:"graph-control-y",type:"text",placeholder:"Y",defaultValue:"0",onChange:this.onChangeY.bind(this)}),r.a.createElement("label",{htmlFor:"graph-control-z"},"Z"),r.a.createElement("input",{id:"graph-control-z",type:"text",placeholder:"Z",defaultValue:"10.00",onChange:this.onChangeZ.bind(this)}))}}]),n}(r.a.Component)),y=n(11),b=(n(24),n(25),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"graph-node-property"},r.a.createElement("label",{htmlFor:this.props.id},this.props.name),r.a.createElement("input",{className:"graph-node-property-text-input",id:this.props.id,type:"number",placeholder:this.props.name,defaultValue:this.props.value}))}}]),n}(r.a.Component)),E=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"graph-node-property"},r.a.createElement("input",{id:this.props.id,type:"checkbox",placeholder:this.props.name,defaultChecked:this.props.value}),r.a.createElement("label",{className:"graph-node-property-checkbox-label",htmlFor:this.props.id},this.props.name))}}]),n}(r.a.Component),k=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"graph-node-property"},r.a.createElement("div",null,this.props.name),r.a.createElement("label",{htmlFor:"".concat(this.props.id,"_x")},"X"),r.a.createElement("input",{className:"graph-node-property-text-input",id:"".concat(this.props.id,"_x"),type:"number",placeholder:this.props.name,defaultValue:this.props.value.x}),r.a.createElement("label",{htmlFor:"".concat(this.props.id,"_y")},"Y"),r.a.createElement("input",{className:"graph-node-property-text-input",id:"".concat(this.props.id,"_y"),type:"number",placeholder:this.props.name,defaultValue:this.props.value.y}),r.a.createElement("label",{htmlFor:"".concat(this.props.id,"_z")},"Z"),r.a.createElement("input",{className:"graph-node-property-text-input",id:"".concat(this.props.id,"_z"),type:"number",placeholder:this.props.name,defaultValue:this.props.value.z}))}}]),n}(r.a.Component),O=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"graph-node-property"},r.a.createElement("div",null,this.props.name),r.a.createElement("label",{htmlFor:"".concat(this.props.id,"_roll")},"Roll"),r.a.createElement("input",{className:"graph-node-property-text-input",id:"".concat(this.props.id,"_roll"),type:"number",min:"-360",max:"360",placeholder:this.props.name,defaultValue:this.props.value.roll}),r.a.createElement("label",{htmlFor:"".concat(this.props.id,"_pitch")},"Pitch"),r.a.createElement("input",{className:"graph-node-property-text-input",id:"".concat(this.props.id,"_pitch"),type:"number",min:"-360",max:"360",placeholder:this.props.name,defaultValue:this.props.value.pitch}),r.a.createElement("label",{htmlFor:"".concat(this.props.id,"_yaw")},"Yaw"),r.a.createElement("input",{className:"graph-node-property-text-input",id:"".concat(this.props.id,"_yaw"),type:"number",min:"-360",max:"360",placeholder:this.props.name,defaultValue:this.props.value.yaw}))}}]),n}(r.a.Component),j=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"graph-node-property"},r.a.createElement("div",null,this.props.name),r.a.createElement("label",{htmlFor:"".concat(this.props.id,"_red")},"Red"),r.a.createElement("input",{className:"graph-node-property-text-input",id:"".concat(this.props.id,"_red"),type:"number",min:"0",max:"255",placeholder:this.props.name,defaultValue:this.props.value.red}),r.a.createElement("label",{htmlFor:"".concat(this.props.id,"_green")},"Green"),r.a.createElement("input",{className:"graph-node-property-text-input",id:"".concat(this.props.id,"_green"),type:"number",min:"0",max:"255",placeholder:this.props.name,defaultValue:this.props.value.green}),r.a.createElement("label",{htmlFor:"".concat(this.props.id,"_blue")},"Blue"),r.a.createElement("input",{className:"graph-node-property-text-input",id:"".concat(this.props.id,"_blue"),type:"number",min:"0",max:"255",placeholder:this.props.name,defaultValue:this.props.value.blue}))}}]),n}(r.a.Component),w=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).offsetX=0,e.offsetY=0,e.offsetZoom=0,e}return Object(c.a)(n,[{key:"onMouseDown",value:function(e){var t=this.props.node.getX(),n=this.props.node.getY(),o=this.props.graph.graphToPageCoordinates(t,n),r=this.props.graph.getCurrentZoom();this.offsetX=e.pageX-o.x,this.offsetY=e.pageY-o.y,this.offsetZoom=r,this.props.graph.setSelectedGraphNode(this),this.props.graph.isMoveable=!1}},{key:"onMouseUp",value:function(){this.props.graph.getSelectedGraphNode()===this&&(this.props.graph.setSelectedGraphNode(null),this.props.graph.isMoveable=!0)}},{key:"onMouseMove",value:function(e){this.props.graph.getSelectedGraphNode()===this&&this.updatePosition(e)}},{key:"onClose",value:function(){this.props.graph.removeNode(this.props.node.getId())}},{key:"updatePosition",value:function(e){var t=1+(this.props.graph.getCurrentZoom()-this.offsetZoom)/this.offsetZoom,n=this.props.graph.pageToGraphCoordinates(e.pageX-this.offsetX*t,e.pageY-this.offsetY*t);this.props.node.setCoordinates(n.x,n.y),this.props.graph.updateNodes()}},{key:"componentDidMount",value:function(){var e=document.getElementById("graph");e&&e.addEventListener("mousemove",this.onMouseMove.bind(this))}},{key:"componentWillUnmount",value:function(){var e=document.getElementById("graph");e&&e.removeEventListener("mousemove",this.onMouseMove)}},{key:"renderProperties",value:function(){var e,t=[],n=Object(v.a)(this.props.node.properties.entries());try{for(n.s();!(e=n.n()).done;){var o=Object(y.a)(e.value,2),a=o[0],i=o[1],s="".concat(this.props.node.getId(),"_").concat(a);switch(i.constructor.name){case"Boolean":t.push(r.a.createElement(E,{id:s,key:s,name:a,value:i}));break;case"Number":t.push(r.a.createElement(b,{id:s,key:s,name:a,value:i}));break;case"Vector":t.push(r.a.createElement(k,{id:s,key:s,name:a,value:i}));break;case"Angle":t.push(r.a.createElement(O,{id:s,key:s,name:a,value:i}));break;case"Color":t.push(r.a.createElement(j,{id:s,key:s,name:a,value:i}))}}}catch(c){n.e(c)}finally{n.f()}return t}},{key:"render",value:function(){return r.a.createElement("div",{className:"graph-node",style:{position:"absolute",left:this.props.node.getX(),top:this.props.node.getY(),width:this.props.node.getWidth()}},r.a.createElement("div",{style:{backgroundImage:"linear-gradient(to right, ".concat(this.props.node.getColor(),", #111)"),height:21,cursor:"move"},onMouseDown:this.onMouseDown.bind(this),onMouseUp:this.onMouseUp.bind(this),className:"header"},r.a.createElement("div",null,this.props.node.getName()),r.a.createElement("button",{onClick:this.onClose.bind(this)},"x")),r.a.createElement("div",{className:"content"},this.renderProperties()))}}]),n}(r.a.Component),_=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e)).currentZoom=1,o.mouseDown=!1,o.moveable=!0,o.initialGrabX=0,o.initialGrabY=0,o.xOffset=0,o.yOffset=0,o.nodeTable=void 0,o.selectedGraphNode=null,o.props.editor.graph=Object(l.a)(o),o.nodeTable=new Map,o.state={nodes:[]},o}return Object(c.a)(n,[{key:"getCurrentZoom",value:function(){return this.currentZoom}},{key:"getXOffset",value:function(){return this.xOffset}},{key:"getYOffset",value:function(){return this.yOffset}},{key:"getSize",value:function(){return 1e4}},{key:"setSelectedGraphNode",value:function(e){this.selectedGraphNode=e}},{key:"getSelectedGraphNode",value:function(){return this.selectedGraphNode}},{key:"pageToGraphCoordinates",value:function(e,t){var n=window.innerWidth,o=window.innerHeight,r=this.getCurrentZoom(),a=(this.getXOffset()-n/2)/r,i=(this.getYOffset()-o/2)/r,s=this.getSize()/2;return{x:s+a+e/r,y:s+i+t/r}}},{key:"graphToPageCoordinates",value:function(e,t){var n=window.innerWidth,o=window.innerHeight,r=this.getCurrentZoom(),a=(this.getXOffset()-n/2)/r,i=(this.getYOffset()-o/2)/r,s=this.getSize()/2;return{x:(e-s-a)*r,y:(t-s-i)*r}}},{key:"updateTransform",value:function(){var e=document.getElementById("graph");e&&(e.style.transform="translateX(".concat(-this.xOffset,"px) translateY(").concat(-this.yOffset,"px) scale(").concat(this.currentZoom,")"));var t=document.getElementById("graph-controls");if(t){var n=t.getElementsByTagName("input"),o=n[0],r=n[1],a=n[2];o.value=(this.xOffset/this.currentZoom).toFixed(0),r.value=(this.yOffset/this.currentZoom).toFixed(0),a.value=(10*this.currentZoom).toFixed(2)}}},{key:"setTransform",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this.moveable){var o=5e3*this.currentZoom+250;if(null!=e){var r=5e3*this.currentZoom+250;this.xOffset=e>r?r:e<-o?-o:e}if(null!=t){var a=5e3*this.currentZoom+250;this.yOffset=t>a?a:t<-o?-o:t}null!=n&&(this.currentZoom=n>=5?5:n),this.updateTransform()}}},{key:"addNode",value:function(e){this.nodeTable.set(e.getId(),e),this.state.nodes.push(e),this.updateNodes()}},{key:"removeNode",value:function(e){var t=this.state.nodes.filter((function(t){return t.getId()!==e}));this.nodeTable.delete(e),this.setState({nodes:t}),this.updateTransform()}},{key:"getNode",value:function(e){return this.nodeTable.get(e)}},{key:"updateNodes",value:function(){this.setState({nodes:this.state.nodes}),this.updateTransform()}},{key:"onWheel",value:function(e){e.preventDefault(),e.deltaY>0?this.currentZoom-=.02:e.deltaY<0&&(this.currentZoom+=.02),this.currentZoom=this.currentZoom>=5?5:this.currentZoom,this.currentZoom=this.currentZoom<=.2?.2:this.currentZoom,this.updateTransform(),this.selectedGraphNode&&this.selectedGraphNode.updatePosition(e)}},{key:"getMouseX",value:function(e){return window.Event?e.pageX:e.clientX+(document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft)}},{key:"getMouseY",value:function(e){return window.Event?e.pageY:e.clientY+(document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)}},{key:"onMouseDown",value:function(e){this.mouseDown=!0,document.body.style.cursor="grabbing",this.initialGrabX=this.getMouseX(e)+this.xOffset,this.initialGrabY=this.getMouseY(e)+this.yOffset}},{key:"onMouseUp",value:function(){this.mouseDown=!1,document.body.style.cursor="auto"}},{key:"onMouseMove",value:function(e){if(this.mouseDown){var t=this.getMouseX(e),n=this.getMouseY(e);this.setTransform(this.initialGrabX-t,this.initialGrabY-n,this.currentZoom)}}},{key:"componentDidMount",value:function(){var e=document.getElementById("graph");e&&(e.addEventListener("wheel",this.onWheel.bind(this)),e.addEventListener("mousedown",this.onMouseDown.bind(this)),e.addEventListener("mouseup",this.onMouseUp.bind(this)),e.addEventListener("mouseleave",this.onMouseUp.bind(this)),e.addEventListener("mousemove",this.onMouseMove.bind(this)))}},{key:"renderNodes",value:function(){var e,t=[],n=Object(v.a)(this.state.nodes);try{for(n.s();!(e=n.n()).done;){var o=e.value;t.push(r.a.createElement(w,{key:o.getId().toString(),graph:this,node:o}))}}catch(a){n.e(a)}finally{n.f()}return t}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,{graph:this}),r.a.createElement("div",{id:"graph",style:{width:1e4,height:1e4,left:-(5e3-window.innerWidth/2),top:-(5e3-window.innerHeight/2)}},this.renderNodes(),r.a.createElement("canvas",null)))}},{key:"isMoveable",set:function(e){this.moveable=e},get:function(){return this.moveable}}]),n}(r.a.Component),x=function(){function e(t,n,o){Object(s.a)(this,e),this._roll=void 0,this._pitch=void 0,this._yaw=void 0,this._roll=t,this._pitch=n,this._yaw=o}return Object(c.a)(e,[{key:"toString",value:function(){return"Angle [ roll: ".concat(this._roll," pitch: ").concat(this._pitch," yaw: ").concat(this.yaw," ]")}},{key:"roll",get:function(){return this._roll}},{key:"pitch",get:function(){return this._pitch}},{key:"yaw",get:function(){return this._yaw}}]),e}(),N=function(){function e(t,n,o){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:255;Object(s.a)(this,e),this._red=void 0,this._green=void 0,this._blue=void 0,this._alpha=void 0,this._red=t%255,this._green=n%255,this._blue=o%255,this._alpha=r%255}return Object(c.a)(e,[{key:"toString",value:function(){return"Color [ r: ".concat(this._red," g: ").concat(this._green," b: ").concat(this._blue," ]")}},{key:"red",get:function(){return this._red}},{key:"green",get:function(){return this._green}},{key:"blue",get:function(){return this._blue}},{key:"alpha",get:function(){return this._alpha}}]),e}(),A=function(){function e(t,n,o){Object(s.a)(this,e),this._x=void 0,this._y=void 0,this._z=void 0,this._x=t,this._y=n,this._z=o}return Object(c.a)(e,[{key:"toString",value:function(){return"Vector [ x: ".concat(this._x," y: ").concat(this._y," z: ").concat(this._z," ]")}},{key:"x",get:function(){return this._x}},{key:"y",get:function(){return this._y}},{key:"z",get:function(){return this._z}}]),e}(),C=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,o,r,a){var i;return Object(s.a)(this,n),(i=t.call(this,e,o,r)).properties.set("value",a),i}return Object(c.a)(n,[{key:"value",get:function(){return this.properties.get("value")},set:function(e){this.properties.set("value",e)}}]),n}(function(){function e(t,n,o){Object(s.a)(this,e),this._editor=void 0,this._id=void 0,this.x=void 0,this.y=void 0,this.width=void 0,this.name=void 0,this.color=void 0,this._properties=void 0,this._id=d.Guid.create(),this._editor=t,this.x=0,this.y=0,this.width=125,this.name=n,this.color=o,this._properties=new Map,this._properties.set("enabled",!0),this._properties.set("nsfw",!1)}return Object(c.a)(e,[{key:"setCoordinates",value:function(e,t){this.x=e,this.y=t}},{key:"getId",value:function(){return this._id}},{key:"setId",value:function(e){this._id=e}},{key:"getEditor",value:function(){return this._editor}},{key:"getX",value:function(){return this.x}},{key:"getY",value:function(){return this.y}},{key:"getWidth",value:function(){return this.width}},{key:"getName",value:function(){return this.name}},{key:"getColor",value:function(){return this.color}},{key:"properties",get:function(){return this._properties}}]),e}()),M=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,o){return Object(s.a)(this,n),t.call(this,e,"Vector","#3151bc",o)}return n}(C),Y=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,o){return Object(s.a)(this,n),t.call(this,e,"Angle","#5831bc",o)}return n}(C),I=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,o){return Object(s.a)(this,n),t.call(this,e,"Toggle","#31bc87",o)}return n}(C),Z=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,o){return Object(s.a)(this,n),t.call(this,e,"Number","#bc316d",o)}return n}(C),T=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e,o){return Object(s.a)(this,n),t.call(this,e,"Color","#bc31ba",o)}return n}(C),X=function(){function e(t){Object(s.a)(this,e),this.editor=void 0,this.editor=t}return Object(c.a)(e,[{key:"CreateNode",value:function(e){var t;switch(e){case"Number":t=new Z(this.editor,0);break;case"Toggle":t=new I(this.editor,!1);break;case"Angle":t=new Y(this.editor,new x(0,0,0));break;case"Vector":t=new M(this.editor,new A(0,0,0));break;case"Color":t=new T(this.editor,new N(255,255,255,255));break;default:t=null}return t}}]),e}(),D=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(s.a)(this,n),(o=t.call(this,e))._graph=void 0,o._factory=void 0,o._graph=null,o._factory=new X(Object(l.a)(o)),o}return Object(c.a)(n,[{key:"loadPacJson",value:function(e){}},{key:"compileToPacJson",value:function(){return""}},{key:"save",value:function(){}},{key:"load",value:function(e){}},{key:"onLoadProject",value:function(){}},{key:"onSaveProject",value:function(){}},{key:"onImportPac3",value:function(){}},{key:"onExportPac3",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{id:"editor"},r.a.createElement("div",{id:"editor-menu"},r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onLoadProject},"Load Project"),r.a.createElement("button",{onClick:this.onSaveProject},"Save Project")),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.onImportPac3},"Import PAC3"),r.a.createElement("button",{onClick:this.onExportPac3},"Export PAC3")),r.a.createElement("h1",null,"Zero Editor")),r.a.createElement(f,{editor:this}),r.a.createElement(_,{editor:this}))}},{key:"factory",get:function(){return this._factory}},{key:"graph",get:function(){return this._graph},set:function(e){this._graph=e}}]),n}(r.a.Component);n(26),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.438e12e4.chunk.js.map