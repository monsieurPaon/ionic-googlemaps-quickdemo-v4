(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{"5edn":function(n,l,t){"use strict";t.r(l);var a=t("CcnG"),e=t("tBOM"),u=(t("OO+k"),function(n,l,t,a){return new(t||(t=Promise))(function(e,u){function o(n){try{r(a.next(n))}catch(n){u(n)}}function i(n){try{r(a.throw(n))}catch(n){u(n)}}function r(n){n.done?e(n.value):new t(function(l){l(n.value)}).then(o,i)}r((a=a.apply(n,l||[])).next())})}),o=function(){function n(n,l){this.platform=n,this._ngZone=l}return n.prototype.ngOnInit=function(){return u(this,void 0,void 0,function(){return function(n,l){var t,a,e,u,o={label:0,sent:function(){if(1&e[0])throw e[1];return e[1]},trys:[],ops:[]};return u={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(u[Symbol.iterator]=function(){return this}),u;function i(u){return function(i){return function(u){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,a&&(e=a[2&u[0]?"return":u[0]?"throw":"next"])&&!(e=e.call(a,u[1])).done)return e;switch(a=0,e&&(u=[0,e.value]),u[0]){case 0:case 1:e=u;break;case 4:return o.label++,{value:u[1],done:!1};case 5:o.label++,a=u[1],u=[0];continue;case 7:u=o.ops.pop(),o.trys.pop();continue;default:if(!(e=(e=o.trys).length>0&&e[e.length-1])&&(6===u[0]||2===u[0])){o=0;continue}if(3===u[0]&&(!e||u[1]>e[0]&&u[1]<e[3])){o.label=u[1];break}if(6===u[0]&&o.label<e[1]){o.label=e[1],e=u;break}if(e&&o.label<e[2]){o.label=e[2],o.ops.push(u);break}e[2]&&o.ops.pop(),o.trys.pop();continue}u=l.call(n,o)}catch(n){u=[6,n],a=0}finally{t=e=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,i])}}}(this,function(n){switch(n.label){case 0:return[4,this.platform.ready()];case 1:return n.sent(),[4,this.loadMap()];case 2:return n.sent(),[2]}})})},n.prototype.loadMap=function(){this.map=e.c.create("map_canvas",{camera:{target:{lat:35.685208,lng:-121.168225},zoom:5},gestures:{scroll:!0,tilt:!0,rotate:!0,zoom:!0}});var n=new e.f,l=document.createElement("div");l.innerHTML='\n<div class="flip-container" id="flip-container">\n  <div class="flipper">\n    <div class="front">\n    <h3>Click this photo!</h3>\n    <img src="assets/imgs/hearst_castle.jpg">\n  </div>\n  <div class="back">\n    \x3c!-- back content --\x3e\n    Hearst Castle above the clouds on top of The Enchanted Hill. William Randolph Hearst started to build a fabulous estate on his ranchland overlooking the village of San Simeon in 1919.\n    </div>\n  </div>\n</div>',l.addEventListener("click",function(n){var l=document.getElementById("flip-container");l.className.indexOf(" hover")>-1?l.className=l.className.replace(" hover",""):l.className+=" hover"}),n.setContent(l,{width:"170px"});var t=this.map.addMarkerSync({position:{lat:35.685208,lng:-121.168225},draggable:!0,disableAutoPan:!0});t.on(e.e.MARKER_CLICK).subscribe(function(){n.open(t)}),t.trigger(e.e.MARKER_CLICK)},n}(),i=function(){},r=t("pMnS"),c=t("ntG5"),s=t("YxxD"),p=a.Ja({encapsulation:0,styles:[["#map_canvas[_ngcontent-%COMP%]{width:100%;height:100%}"]],data:{}});function f(n){return a.Za(0,[(n()(),a.La(0,0,null,null,10,"ion-header",[],null,null,null,null,null)),a.Ka(1,16384,null,0,c.x,[a.k],null,null),(n()(),a.La(2,0,null,null,8,"ion-toolbar",[],null,null,null,null,null)),a.Ka(3,16384,null,0,c.Xa,[a.k],null,null),(n()(),a.La(4,0,null,null,3,"ion-buttons",[["slot","start"]],null,null,null,null,null)),a.Ka(5,16384,null,0,c.f,[],null,null),(n()(),a.La(6,0,null,null,1,"ion-menu-button",[],null,null,null,null,null)),a.Ka(7,16384,null,0,c.O,[a.k],null,null),(n()(),a.La(8,0,null,null,2,"ion-title",[],null,null,null,null,null)),a.Ka(9,16384,null,0,c.Ya,[a.k],null,null),(n()(),a.Ya(-1,null,[" HtmlInfoWindow "])),(n()(),a.La(11,0,null,null,2,"ion-content",[["padding",""]],null,null,null,null,null)),a.Ka(12,16384,null,0,c.q,[a.k],null,null),(n()(),a.La(13,0,null,null,0,"div",[["id","map_canvas"]],null,null,null,null,null))],null,null)}var d=a.Ha("app-html-info-window",o,function(n){return a.Za(0,[(n()(),a.La(0,0,null,null,1,"app-html-info-window",[],null,null,null,f,p)),a.Ka(1,114688,null,0,o,[s.a,a.x],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),h=t("Ip0R"),v=t("gIcY"),b=t("95zI"),m=t("9opb"),g=t("apKv"),w=t("B4/3"),y=t("ZYCi");t.d(l,"HtmlInfoWindowPageModuleNgFactory",function(){return k});var k=a.Ia(i,[],function(n){return a.Ra([a.Sa(512,a.j,a.X,[[8,[r.a,d]],[3,a.j],a.v]),a.Sa(4608,h.k,h.j,[a.s,[2,h.p]]),a.Sa(4608,v.d,v.d,[]),a.Sa(4608,b.a,b.a,[a.x,a.g]),a.Sa(4608,m.a,m.a,[b.a,a.j,a.p]),a.Sa(4608,g.a,g.a,[b.a,a.j,a.p]),a.Sa(1073742336,h.b,h.b,[]),a.Sa(1073742336,v.c,v.c,[]),a.Sa(1073742336,v.a,v.a,[]),a.Sa(1073742336,w.a,w.a,[]),a.Sa(1073742336,y.n,y.n,[[2,y.t],[2,y.l]]),a.Sa(1073742336,i,i,[]),a.Sa(1024,y.j,function(){return[[{path:"",component:o}]]},[])])})}}]);