(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{408:function(t,e){function n(t){return Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=408},410:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(411);e.bindHandlers=function(t,e,n){o.validEvents.forEach(function(o){var i=t[o];i.observers.length>0&&("onInit"===o?t.ngZone.run(function(){return i.emit({event:n,editor:e})}):e.on(o.substring(2),t.ngZone.run(function(){return function(t){return i.emit({event:t,editor:e})}})))})};var i=0;e.uuid=function(t){var e=(new Date).getTime();return t+"_"+Math.floor(1e9*Math.random())+ ++i+String(e)},e.isTextarea=function(t){return void 0!==t&&"textarea"===t.tagName.toLowerCase()};var r=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")};e.mergePlugins=function(t,e){return r(t).concat(r(e))}},411:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,p=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(p=(r<3?i(p):r>3?i(e,n,p):i(e,n))||p);return r>3&&p&&Object.defineProperty(e,n,p),p},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var r=n(0),p=function(){function t(){this.onBeforePaste=new r.EventEmitter,this.onBlur=new r.EventEmitter,this.onClick=new r.EventEmitter,this.onContextMenu=new r.EventEmitter,this.onCopy=new r.EventEmitter,this.onCut=new r.EventEmitter,this.onDblclick=new r.EventEmitter,this.onDrag=new r.EventEmitter,this.onDragDrop=new r.EventEmitter,this.onDragEnd=new r.EventEmitter,this.onDragGesture=new r.EventEmitter,this.onDragOver=new r.EventEmitter,this.onDrop=new r.EventEmitter,this.onFocus=new r.EventEmitter,this.onFocusIn=new r.EventEmitter,this.onFocusOut=new r.EventEmitter,this.onKeyDown=new r.EventEmitter,this.onKeyPress=new r.EventEmitter,this.onKeyUp=new r.EventEmitter,this.onMouseDown=new r.EventEmitter,this.onMouseEnter=new r.EventEmitter,this.onMouseLeave=new r.EventEmitter,this.onMouseMove=new r.EventEmitter,this.onMouseOut=new r.EventEmitter,this.onMouseOver=new r.EventEmitter,this.onMouseUp=new r.EventEmitter,this.onPaste=new r.EventEmitter,this.onSelectionChange=new r.EventEmitter,this.onActivate=new r.EventEmitter,this.onAddUndo=new r.EventEmitter,this.onBeforeAddUndo=new r.EventEmitter,this.onBeforeExecCommand=new r.EventEmitter,this.onBeforeGetContent=new r.EventEmitter,this.onBeforeRenderUI=new r.EventEmitter,this.onBeforeSetContent=new r.EventEmitter,this.onChange=new r.EventEmitter,this.onClearUndos=new r.EventEmitter,this.onDeactivate=new r.EventEmitter,this.onDirty=new r.EventEmitter,this.onExecCommand=new r.EventEmitter,this.onGetContent=new r.EventEmitter,this.onHide=new r.EventEmitter,this.onInit=new r.EventEmitter,this.onLoadContent=new r.EventEmitter,this.onNodeChange=new r.EventEmitter,this.onPostProcess=new r.EventEmitter,this.onPostRender=new r.EventEmitter,this.onPreInit=new r.EventEmitter,this.onPreProcess=new r.EventEmitter,this.onProgressState=new r.EventEmitter,this.onRedo=new r.EventEmitter,this.onRemove=new r.EventEmitter,this.onReset=new r.EventEmitter,this.onSaveContent=new r.EventEmitter,this.onSetAttrib=new r.EventEmitter,this.onObjectResizeStart=new r.EventEmitter,this.onObjectResized=new r.EventEmitter,this.onObjectSelected=new r.EventEmitter,this.onSetContent=new r.EventEmitter,this.onShow=new r.EventEmitter,this.onSubmit=new r.EventEmitter,this.onUndo=new r.EventEmitter,this.onVisualAid=new r.EventEmitter}return o([r.Output(),i("design:type","function"==typeof(e=void 0!==r.EventEmitter&&r.EventEmitter)&&e||Object)],t.prototype,"onBeforePaste",void 0),o([r.Output(),i("design:type","function"==typeof(n=void 0!==r.EventEmitter&&r.EventEmitter)&&n||Object)],t.prototype,"onBlur",void 0),o([r.Output(),i("design:type","function"==typeof(p=void 0!==r.EventEmitter&&r.EventEmitter)&&p||Object)],t.prototype,"onClick",void 0),o([r.Output(),i("design:type","function"==typeof(s=void 0!==r.EventEmitter&&r.EventEmitter)&&s||Object)],t.prototype,"onContextMenu",void 0),o([r.Output(),i("design:type","function"==typeof(u=void 0!==r.EventEmitter&&r.EventEmitter)&&u||Object)],t.prototype,"onCopy",void 0),o([r.Output(),i("design:type","function"==typeof(d=void 0!==r.EventEmitter&&r.EventEmitter)&&d||Object)],t.prototype,"onCut",void 0),o([r.Output(),i("design:type","function"==typeof(E=void 0!==r.EventEmitter&&r.EventEmitter)&&E||Object)],t.prototype,"onDblclick",void 0),o([r.Output(),i("design:type","function"==typeof(v=void 0!==r.EventEmitter&&r.EventEmitter)&&v||Object)],t.prototype,"onDrag",void 0),o([r.Output(),i("design:type","function"==typeof(c=void 0!==r.EventEmitter&&r.EventEmitter)&&c||Object)],t.prototype,"onDragDrop",void 0),o([r.Output(),i("design:type","function"==typeof(a=void 0!==r.EventEmitter&&r.EventEmitter)&&a||Object)],t.prototype,"onDragEnd",void 0),o([r.Output(),i("design:type","function"==typeof(y=void 0!==r.EventEmitter&&r.EventEmitter)&&y||Object)],t.prototype,"onDragGesture",void 0),o([r.Output(),i("design:type","function"==typeof(f=void 0!==r.EventEmitter&&r.EventEmitter)&&f||Object)],t.prototype,"onDragOver",void 0),o([r.Output(),i("design:type","function"==typeof(m=void 0!==r.EventEmitter&&r.EventEmitter)&&m||Object)],t.prototype,"onDrop",void 0),o([r.Output(),i("design:type","function"==typeof(l=void 0!==r.EventEmitter&&r.EventEmitter)&&l||Object)],t.prototype,"onFocus",void 0),o([r.Output(),i("design:type","function"==typeof(h=void 0!==r.EventEmitter&&r.EventEmitter)&&h||Object)],t.prototype,"onFocusIn",void 0),o([r.Output(),i("design:type","function"==typeof(O=void 0!==r.EventEmitter&&r.EventEmitter)&&O||Object)],t.prototype,"onFocusOut",void 0),o([r.Output(),i("design:type","function"==typeof(g=void 0!==r.EventEmitter&&r.EventEmitter)&&g||Object)],t.prototype,"onKeyDown",void 0),o([r.Output(),i("design:type","function"==typeof(b=void 0!==r.EventEmitter&&r.EventEmitter)&&b||Object)],t.prototype,"onKeyPress",void 0),o([r.Output(),i("design:type","function"==typeof(j=void 0!==r.EventEmitter&&r.EventEmitter)&&j||Object)],t.prototype,"onKeyUp",void 0),o([r.Output(),i("design:type","function"==typeof(w=void 0!==r.EventEmitter&&r.EventEmitter)&&w||Object)],t.prototype,"onMouseDown",void 0),o([r.Output(),i("design:type","function"==typeof(C=void 0!==r.EventEmitter&&r.EventEmitter)&&C||Object)],t.prototype,"onMouseEnter",void 0),o([r.Output(),i("design:type","function"==typeof(D=void 0!==r.EventEmitter&&r.EventEmitter)&&D||Object)],t.prototype,"onMouseLeave",void 0),o([r.Output(),i("design:type","function"==typeof(P=void 0!==r.EventEmitter&&r.EventEmitter)&&P||Object)],t.prototype,"onMouseMove",void 0),o([r.Output(),i("design:type","function"==typeof(R=void 0!==r.EventEmitter&&r.EventEmitter)&&R||Object)],t.prototype,"onMouseOut",void 0),o([r.Output(),i("design:type","function"==typeof(_=void 0!==r.EventEmitter&&r.EventEmitter)&&_||Object)],t.prototype,"onMouseOver",void 0),o([r.Output(),i("design:type","function"==typeof(M=void 0!==r.EventEmitter&&r.EventEmitter)&&M||Object)],t.prototype,"onMouseUp",void 0),o([r.Output(),i("design:type","function"==typeof(S=void 0!==r.EventEmitter&&r.EventEmitter)&&S||Object)],t.prototype,"onPaste",void 0),o([r.Output(),i("design:type","function"==typeof(I=void 0!==r.EventEmitter&&r.EventEmitter)&&I||Object)],t.prototype,"onSelectionChange",void 0),o([r.Output(),i("design:type","function"==typeof(U=void 0!==r.EventEmitter&&r.EventEmitter)&&U||Object)],t.prototype,"onActivate",void 0),o([r.Output(),i("design:type","function"==typeof(A=void 0!==r.EventEmitter&&r.EventEmitter)&&A||Object)],t.prototype,"onAddUndo",void 0),o([r.Output(),i("design:type","function"==typeof(B=void 0!==r.EventEmitter&&r.EventEmitter)&&B||Object)],t.prototype,"onBeforeAddUndo",void 0),o([r.Output(),i("design:type","function"==typeof(k=void 0!==r.EventEmitter&&r.EventEmitter)&&k||Object)],t.prototype,"onBeforeExecCommand",void 0),o([r.Output(),i("design:type","function"==typeof(x=void 0!==r.EventEmitter&&r.EventEmitter)&&x||Object)],t.prototype,"onBeforeGetContent",void 0),o([r.Output(),i("design:type","function"==typeof(T=void 0!==r.EventEmitter&&r.EventEmitter)&&T||Object)],t.prototype,"onBeforeRenderUI",void 0),o([r.Output(),i("design:type","function"==typeof(V=void 0!==r.EventEmitter&&r.EventEmitter)&&V||Object)],t.prototype,"onBeforeSetContent",void 0),o([r.Output(),i("design:type","function"==typeof(L=void 0!==r.EventEmitter&&r.EventEmitter)&&L||Object)],t.prototype,"onChange",void 0),o([r.Output(),i("design:type","function"==typeof(K=void 0!==r.EventEmitter&&r.EventEmitter)&&K||Object)],t.prototype,"onClearUndos",void 0),o([r.Output(),i("design:type","function"==typeof(N=void 0!==r.EventEmitter&&r.EventEmitter)&&N||Object)],t.prototype,"onDeactivate",void 0),o([r.Output(),i("design:type","function"==typeof(F=void 0!==r.EventEmitter&&r.EventEmitter)&&F||Object)],t.prototype,"onDirty",void 0),o([r.Output(),i("design:type","function"==typeof(G=void 0!==r.EventEmitter&&r.EventEmitter)&&G||Object)],t.prototype,"onExecCommand",void 0),o([r.Output(),i("design:type","function"==typeof(Z=void 0!==r.EventEmitter&&r.EventEmitter)&&Z||Object)],t.prototype,"onGetContent",void 0),o([r.Output(),i("design:type","function"==typeof(z=void 0!==r.EventEmitter&&r.EventEmitter)&&z||Object)],t.prototype,"onHide",void 0),o([r.Output(),i("design:type","function"==typeof(H=void 0!==r.EventEmitter&&r.EventEmitter)&&H||Object)],t.prototype,"onInit",void 0),o([r.Output(),i("design:type","function"==typeof(J=void 0!==r.EventEmitter&&r.EventEmitter)&&J||Object)],t.prototype,"onLoadContent",void 0),o([r.Output(),i("design:type","function"==typeof(q=void 0!==r.EventEmitter&&r.EventEmitter)&&q||Object)],t.prototype,"onNodeChange",void 0),o([r.Output(),i("design:type","function"==typeof(Q=void 0!==r.EventEmitter&&r.EventEmitter)&&Q||Object)],t.prototype,"onPostProcess",void 0),o([r.Output(),i("design:type","function"==typeof(W=void 0!==r.EventEmitter&&r.EventEmitter)&&W||Object)],t.prototype,"onPostRender",void 0),o([r.Output(),i("design:type","function"==typeof(X=void 0!==r.EventEmitter&&r.EventEmitter)&&X||Object)],t.prototype,"onPreInit",void 0),o([r.Output(),i("design:type","function"==typeof(Y=void 0!==r.EventEmitter&&r.EventEmitter)&&Y||Object)],t.prototype,"onPreProcess",void 0),o([r.Output(),i("design:type","function"==typeof($=void 0!==r.EventEmitter&&r.EventEmitter)&&$||Object)],t.prototype,"onProgressState",void 0),o([r.Output(),i("design:type","function"==typeof(tt=void 0!==r.EventEmitter&&r.EventEmitter)&&tt||Object)],t.prototype,"onRedo",void 0),o([r.Output(),i("design:type","function"==typeof(et=void 0!==r.EventEmitter&&r.EventEmitter)&&et||Object)],t.prototype,"onRemove",void 0),o([r.Output(),i("design:type","function"==typeof(nt=void 0!==r.EventEmitter&&r.EventEmitter)&&nt||Object)],t.prototype,"onReset",void 0),o([r.Output(),i("design:type","function"==typeof(ot=void 0!==r.EventEmitter&&r.EventEmitter)&&ot||Object)],t.prototype,"onSaveContent",void 0),o([r.Output(),i("design:type","function"==typeof(it=void 0!==r.EventEmitter&&r.EventEmitter)&&it||Object)],t.prototype,"onSetAttrib",void 0),o([r.Output(),i("design:type","function"==typeof(rt=void 0!==r.EventEmitter&&r.EventEmitter)&&rt||Object)],t.prototype,"onObjectResizeStart",void 0),o([r.Output(),i("design:type","function"==typeof(pt=void 0!==r.EventEmitter&&r.EventEmitter)&&pt||Object)],t.prototype,"onObjectResized",void 0),o([r.Output(),i("design:type","function"==typeof(st=void 0!==r.EventEmitter&&r.EventEmitter)&&st||Object)],t.prototype,"onObjectSelected",void 0),o([r.Output(),i("design:type","function"==typeof(ut=void 0!==r.EventEmitter&&r.EventEmitter)&&ut||Object)],t.prototype,"onSetContent",void 0),o([r.Output(),i("design:type","function"==typeof(dt=void 0!==r.EventEmitter&&r.EventEmitter)&&dt||Object)],t.prototype,"onShow",void 0),o([r.Output(),i("design:type","function"==typeof(Et=void 0!==r.EventEmitter&&r.EventEmitter)&&Et||Object)],t.prototype,"onSubmit",void 0),o([r.Output(),i("design:type","function"==typeof(vt=void 0!==r.EventEmitter&&r.EventEmitter)&&vt||Object)],t.prototype,"onUndo",void 0),o([r.Output(),i("design:type","function"==typeof(ct=void 0!==r.EventEmitter&&r.EventEmitter)&&ct||Object)],t.prototype,"onVisualAid",void 0),t;var e,n,p,s,u,d,E,v,c,a,y,f,m,l,h,O,g,b,j,w,C,D,P,R,_,M,S,I,U,A,B,k,x,T,V,L,K,N,F,G,Z,z,H,J,q,Q,W,X,Y,$,tt,et,nt,ot,it,rt,pt,st,ut,dt,Et,vt,ct}();e.Events=p,e.validEvents=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"]},489:function(t,e,n){n(208),n(490),t.exports=n(491)},491:function(t,e,n){"use strict";n.r(e),function(t){var e=n(386);Object(e.configure)(function(){n(557)},t)}.call(this,n(388)(t))},557:function(t,e,n){"use strict";(function(t){var o=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,p=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(p=(r<3?i(p):r>3?i(e,n,p):i(e,n))||p);return r>3&&p&&Object.defineProperty(e,n,p),p};Object.defineProperty(e,"__esModule",{value:!0});var i=n(386),r=n(558),p=n(0),s=function(){function t(){var t=this;this.isDisabled=!1,this.toggleDisabled=function(){return t.isDisabled=!t.isDisabled}}return t=o([p.Component({selector:"testing-disabling",template:'\n    <editor [disabled]="isDisabled" initialValue="<p>hello world</p>"></editor>\n    <button (click)="toggleDisabled()">{{isDisabled ? \'enable\' : \'disable\'}}</button>'})],t)}();i.storiesOf("Editor",t).addDecorator(i.moduleMetadata({declarations:[r.EditorComponent]})).add("with some emoji initialValue",function(){return{component:r.EditorComponent,props:{initialValue:"😀 😎 👍 💯"}}}).add("disabling",function(){return{component:s}})}).call(this,n(104)(t))},558:function(t,e,n){"use strict";var o,i=this&&this.__extends||(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),r=this&&this.__assign||Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},p=this&&this.__decorate||function(t,e,n,o){var i,r=arguments.length,p=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(p=(r<3?i(p):r>3?i(e,n,p):i(e,n))||p);return r>3&&p&&Object.defineProperty(e,n,p),p},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var u=n(0),d=n(485),E=n(559),v=n(410),c=n(560),a=n(411),y=E.create(),f={provide:d.NG_VALUE_ACCESSOR,useExisting:u.forwardRef(function(){return m}),multi:!0},m=function(t){function e(e,n){var o=t.call(this)||this;return o.element=void 0,o.id="",o.toolbar=null,o.onTouchedCallback=function(){},o.onChangeCallback=function(t){},o.elementRef=e,o.ngZone=n,o.initialise=o.initialise.bind(o),o}return i(e,t),Object.defineProperty(e.prototype,"disabled",{get:function(){return this._disabled},set:function(t){this._disabled=t,this.editor&&this.editor.initialized&&this.editor.setMode(t?"readonly":"design")},enumerable:!0,configurable:!0}),e.prototype.writeValue=function(t){this.initialValue=t||this.initialValue,this.editor&&this.editor.initialized&&"string"==typeof t&&this.editor.setContent(t)},e.prototype.registerOnChange=function(t){this.onChangeCallback=t},e.prototype.registerOnTouched=function(t){this.onTouchedCallback=t},e.prototype.setDisabledState=function(t){this.editor?this.editor.setMode(t?"readonly":"design"):t&&(this.init=r({},this.init,{readonly:!0}))},e.prototype.ngAfterViewInit=function(){if(this.id=this.id||v.uuid("tiny-angular"),this.inline=void 0!==this.inline?"boolean"!=typeof this.inline||this.inline:this.init&&this.init.inline,this.createElement(),null!==c.getTinymce())this.initialise();else if(this.element){var t=this.element.ownerDocument,e=this.cloudChannel||"stable",n=this.apiKey||"";E.load(y,t,"https://cloud.tinymce.com/"+e+"/tinymce.min.js?apiKey="+n,this.initialise)}},e.prototype.ngOnDestroy=function(){null!==c.getTinymce()&&c.getTinymce().remove(this.editor)},e.prototype.createElement=function(){var t="string"==typeof this.tagName?this.tagName:"div";this.element=document.createElement(this.inline?t:"textarea"),this.element&&(this.element.id=this.id,v.isTextarea(this.element)&&(this.element.style.visibility="hidden"),this.elementRef.nativeElement.appendChild(this.element))},e.prototype.initialise=function(){var t=this,e=r({},this.init,{target:this.element,inline:this.inline,readonly:this.disabled,plugins:v.mergePlugins(this.init&&this.init.plugins,this.plugins),toolbar:this.toolbar||this.init&&this.init.toolbar,setup:function(e){t.editor=e,e.on("init",function(n){t.initEditor(n,e)}),t.init&&"function"==typeof t.init.setup&&t.init.setup(e)}});v.isTextarea(this.element)&&(this.element.style.visibility=""),this.ngZone.runOutsideAngular(function(){c.getTinymce().init(e)})},e.prototype.initEditor=function(t,e){var n=this;"string"==typeof this.initialValue&&this.ngZone.run(function(){return e.setContent(n.initialValue)}),e.once("blur",function(){return n.ngZone.run(function(){return n.onTouchedCallback()})}),e.on("setcontent",function(t){var e=t.content;return"html"===t.format&&e&&n.ngZone.run(function(){return n.onChangeCallback(e)})}),e.on("change keyup undo redo",function(){return n.ngZone.run(function(){return n.onChangeCallback(e.getContent())})}),v.bindHandlers(this,e,t)},p([u.Input(),s("design:type",Object)],e.prototype,"cloudChannel",void 0),p([u.Input(),s("design:type",Object)],e.prototype,"apiKey",void 0),p([u.Input(),s("design:type",Object)],e.prototype,"init",void 0),p([u.Input(),s("design:type",Object)],e.prototype,"id",void 0),p([u.Input(),s("design:type",Object)],e.prototype,"initialValue",void 0),p([u.Input(),s("design:type",Object)],e.prototype,"inline",void 0),p([u.Input(),s("design:type",Object)],e.prototype,"tagName",void 0),p([u.Input(),s("design:type",Object)],e.prototype,"plugins",void 0),p([u.Input(),s("design:type",Object)],e.prototype,"toolbar",void 0),p([u.Input(),s("design:type",Object),s("design:paramtypes",[Object])],e.prototype,"disabled",null),e=p([u.Component({selector:"editor",template:"<ng-template></ng-template>",styles:[":host { display: block; }"],providers:[f]}),s("design:paramtypes",["function"==typeof(n=void 0!==u.ElementRef&&u.ElementRef)&&n||Object,"function"==typeof(o=void 0!==u.NgZone&&u.NgZone)&&o||Object])],e);var n,o}(a.Events);e.EditorComponent=m},559:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(410);e.create=function(){return{listeners:[],scriptId:o.uuid("tiny-script"),scriptLoaded:!1}},e.load=function(t,e,n,o){t.scriptLoaded?o():(t.listeners.push(o),e.getElementById(t.scriptId)||function(t,e,n,o){var i=e.createElement("script");i.type="application/javascript",i.id=t,i.addEventListener("load",o),i.src=n,e.head.appendChild(i)}(t.scriptId,e,n,function(){t.listeners.forEach(function(t){return t()}),t.scriptLoaded=!0}))}},560:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.getTinymce=function(){var t=window;return t&&t.tinymce?t.tinymce:null}}},[[489,3,2]]]);
//# sourceMappingURL=iframe.c23f3e6997ff299595be.bundle.js.map