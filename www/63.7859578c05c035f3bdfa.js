(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"5Y4M":function(t,i,e){"use strict";e.r(i),e.d(i,"IonItemOptions",function(){return s}),e.d(i,"IonItemSliding",function(){return r});var n=e("cBjU"),o=e("GGff"),s=function(){function t(){this.side="end"}return t.prototype.isEndSide=function(){return Object(o.g)(this.win,this.side)},t.prototype.width=function(){return this.el.offsetWidth},t.prototype.fireSwipeEvent=function(){this.ionSwipe.emit()},t.prototype.hostData=function(){var t=this.isEndSide();return{class:{"item-options-start":!t,"item-options-end":t}}},Object.defineProperty(t,"is",{get:function(){return"ion-item-options"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{el:{elementRef:!0},fireSwipeEvent:{method:!0},isEndSide:{method:!0},side:{type:String,attr:"side"},width:{method:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionSwipe",method:"ionSwipe",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-options{top:0;right:0;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;display:none;position:absolute;height:100%;font-size:14px;z-index:1}ion-item-options.hydrated{visibility:hidden}.item-options-start{right:auto;left:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.item-sliding-active-slide ion-item-options{display:-webkit-box;display:-ms-flexbox;display:flex}.item-sliding-active-slide.item-sliding-active-options-end ion-item-options:not(.item-options-start),.item-sliding-active-slide.item-sliding-active-options-start .item-options-start{width:100%;visibility:visible}.item-options-md{border-bottom-width:0;border-bottom-style:solid;border-bottom-color:rgba(var(--ion-item-border-color-rgb,0,0,0),.13)}.list-md-lines-none .item-options-md{border-bottom-width:0}.list-md-lines-full .item-options-md,.list-md-lines-inset .item-options-md.item-options-end{border-bottom-width:1px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}(),r=function(){function t(){this.item=null,this.list=null,this.openAmount=0,this.initialOpenAmount=0,this.optsWidthRightSide=0,this.optsWidthLeftSide=0,this.sides=0,this.optsDirty=!0,this.state=2}return t.prototype.componentDidLoad=function(){this.item=this.el.querySelector("ion-item"),this.list=this.el.closest("ion-list"),this.updateOptions()},t.prototype.componentDidUnload=function(){this.item=this.list=null,this.leftOptions=this.rightOptions=void 0},t.prototype.getOpenAmount=function(){return this.openAmount},t.prototype.getSlidingRatio=function(){return this.openAmount>0?this.openAmount/this.optsWidthRightSide:this.openAmount<0?this.openAmount/this.optsWidthLeftSide:0},t.prototype.close=function(){this.setOpenAmount(0,!0)},t.prototype.closeOpened=function(){return!(!this.list||!this.list.closeSlidingItems())},t.prototype.updateOptions=function(){var t=this.el.querySelectorAll("ion-item-options"),i=0;this.leftOptions=this.rightOptions=void 0;for(var e=0;e<t.length;e++){var n=t.item(e);n.isEndSide()?(this.rightOptions=n,i|=2):(this.leftOptions=n,i|=1)}this.optsDirty=!0,this.sides=i},t.prototype.canStart=function(){var t=this.list&&this.list.getOpenItem();return!t||t===this.el||(this.closeOpened(),!1)},t.prototype.onDragStart=function(){this.list&&this.list.setOpenItem(this.el),this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),0===this.openAmount&&(this.optsDirty=!0,this.state=4),this.initialOpenAmount=this.openAmount,this.item&&(this.item.style.transition="none")},t.prototype.onDragMove=function(t){this.optsDirty&&this.calculateOptsWidth();var i,e=this.initialOpenAmount-t.deltaX;switch(this.sides){case 2:e=Math.max(0,e);break;case 1:e=Math.min(0,e);break;case 3:break;case 0:return;default:console.warn("invalid ItemSideFlags value",this.sides)}e>this.optsWidthRightSide?e=(i=this.optsWidthRightSide)+.55*(e-i):e<-this.optsWidthLeftSide&&(e=(i=-this.optsWidthLeftSide)+.55*(e-i)),this.setOpenAmount(e,!1)},t.prototype.onDragEnd=function(t){var i=t.velocityX,e=this.openAmount>0?this.optsWidthRightSide:-this.optsWidthLeftSide;(function(t,i,e){return!i&&e||t&&i})(this.openAmount>0==!(i<0),Math.abs(i)>.3,Math.abs(this.openAmount)<Math.abs(e/2))&&(e=0),this.setOpenAmount(e,!0),32&this.state&&this.rightOptions?this.rightOptions.fireSwipeEvent():64&this.state&&this.leftOptions&&this.leftOptions.fireSwipeEvent()},t.prototype.calculateOptsWidth=function(){this.optsWidthRightSide=0,this.rightOptions&&(this.optsWidthRightSide=this.rightOptions.width()),this.optsWidthLeftSide=0,this.leftOptions&&(this.optsWidthLeftSide=this.leftOptions.width()),this.optsDirty=!1},t.prototype.setOpenAmount=function(t,i){var e=this;if(this.tmr&&(clearTimeout(this.tmr),this.tmr=void 0),this.item){var n=this.item.style;if(this.openAmount=t,i&&(n.transition=""),t>0)this.state=t>=this.optsWidthRightSide+30?40:8;else{if(!(t<0))return this.tmr=window.setTimeout(function(){e.state=2,e.tmr=void 0},600),this.list&&this.list.setOpenItem(void 0),void(n.transform="");this.state=t<=-this.optsWidthLeftSide-30?80:16}n.transform="translate3d("+-t+"px,0,0)",this.ionDrag.emit({amount:t})}},t.prototype.hostData=function(){return{class:{"item-sliding":!0,"item-sliding-active-slide":2!==this.state,"item-sliding-active-options-end":!!(8&this.state),"item-sliding-active-options-start":!!(16&this.state),"item-sliding-active-swipe-end":!!(32&this.state),"item-sliding-active-swipe-start":!!(64&this.state)}}},t.prototype.render=function(){return Object(n.b)("ion-gesture",{canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),gestureName:"item-swipe",gesturePriority:-10,direction:"x",maxAngle:20,threshold:5,attachTo:"parent"},Object(n.b)("slot",null))},Object.defineProperty(t,"is",{get:function(){return"ion-item-sliding"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{close:{method:!0},closeOpened:{method:!0},el:{elementRef:!0},getOpenAmount:{method:!0},getSlidingRatio:{method:!0},state:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionDrag",method:"ionDrag",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-item-sliding{display:block;position:relative;width:100%;overflow:hidden}.item-sliding-active-slide .item{position:relative;-webkit-transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:-webkit-transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1);transition:transform .5s cubic-bezier(.36,.66,.04,1),-webkit-transform .5s cubic-bezier(.36,.66,.04,1);background:var(--ion-item-background-color,var(--ion-background-color,#fff));opacity:1;z-index:2;pointer-events:none;will-change:transform}.item-sliding-active-swipe-end .item-options-end .item-option-expandable{padding-left:90%;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-left;transition-property:padding-left}.item-sliding-active-swipe-start .item-options-start .item-option-expandable{padding-right:90%;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1;-webkit-transition-duration:.6s;transition-duration:.6s;-webkit-transition-property:padding-right;transition-property:padding-right}"},enumerable:!0,configurable:!0}),t}()}}]);