(this["webpackJsonpreact-canvas"]=this["webpackJsonpreact-canvas"]||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},24:function(e,n,t){"use strict";t.r(n);var r,c,o=t(0),i=t.n(o),a=t(10),l=t.n(a),s=(t(19),t(4)),d=t(5),u=(t(20),t(2)),b=t(3);function f(){return(f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function h(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function p(e,n){var t=e.title,i=e.titleId,a=h(e,["title","titleId"]);return o.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,ref:n,"aria-labelledby":i},a),t?o.createElement("title",{id:i},t):null,r||(r=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),c||(c=o.createElement("path",{d:"M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"})))}var j,x,g,O,v,m,w=o.forwardRef(p),y=(t.p,t(1)),k=b.a.div(j||(j=Object(u.a)(["\n  background-color: transparent;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n"]))),F=b.a.div(x||(x=Object(u.a)(["\n  display: flex;\n  background-color: transparent;\n  height: 100%;\n  width: auto;\n  align-items: center;\n  cursor: pointer;\n"]))),z=Object(b.a)(w)(g||(g=Object(u.a)(["\n  fill: #fff;\n  width: 30px;\n  height: 30px;\n  margin-right: 0.3rem;\n"]))),C=b.a.div(O||(O=Object(u.a)(["\n  font-size: 1.4rem;\n  font-weight: bold;\n  color: #fff;\n  padding: 0;\n"]))),E=b.a.div(v||(v=Object(u.a)(["\n  flex-grow: 1;\n"])));function S(){return Object(y.jsxs)(k,{children:[Object(y.jsx)(E,{}),Object(y.jsxs)(F,{children:[Object(y.jsx)(C,{children:"Brushy"}),Object(y.jsx)(z,{})]}),Object(y.jsx)(E,{})]})}var P,I=b.a.button(m||(m=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  background-color: ",";\n  align-self: center;\n  border: 0.05px solid #580c60;\n  cursor: pointer;\n"])),(function(e){return e.backgroundColor?e.backgroundColor:"#000000"}));function M(e){var n=e.color,t=e.selectFunction;return Object(y.jsx)(I,{backgroundColor:n,onClick:t})}var B,L,N,H=b.a.input(P||(P=Object(u.a)(["\n  width: 90%;\n  height: 13%;\n  border-radius: 14px;\n  padding: 0;\n  box-sizing: border-box;\n  border: 0;\n  cursor: pointer;\n"])));function R(e){var n=e.value,t=e.onChange;return Object(y.jsx)(H,{type:"color",value:n,onChange:t})}var A,D=["#000000","#666666","#0050CD","#FFFFFF","#AAAAAA","#26C9FF","#017420","#691506","#964112","#11B03C","#FF0013","#FF7829","#B0701C","#99004E","#CB5A57","#FFC126","#FF008F","#FEAFA8"],T=b.a.div(B||(B=Object(u.a)(["\n  height: 50vh;\n  width: 13vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 1.5rem;\n  box-sizing: border-box;\n  padding: 0.5rem;\n  background-color: rgba(255, 255, 255, 0.95);\n  border-radius: 14px;\n  border: 1px solid #580c60;\n  -webkit-box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);\n  box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);\n"]))),V=b.a.div(L||(L=Object(u.a)(["\n  height: 90%;\n  width: 90%;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n  gap: 0.5rem;\n  box-sizing: border-box;\n  padding: 0.5rem;\n"]))),J=b.a.div(N||(N=Object(u.a)(["\n  flex-grow: 1;\n"])));function U(e){var n=e.selectColorFunction,t=e.changePickerFunction,r=e.colorSelected;return Object(y.jsxs)(T,{children:[Object(y.jsx)(V,{children:D.map((function(e,t){return Object(y.jsx)(M,{color:e,selectFunction:function(){return n(e)}},t)}))}),Object(y.jsx)(J,{}),Object(y.jsx)(R,{value:r,onChange:t})]})}var X,W,Y=b.a.button(A||(A=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  padding: 0;\n  box-sizing: border-box;\n  border: 2px solid #580c60;\n  cursor: pointer;\n  color: #580c60;\n  background-color: ",";\n  font-weight: bold;\n  transition: 0.3s;\n  outline: none;\n\n  &:hover {\n    background-color: rgba(88, 12, 96, 0.1);\n    background-color: ",";\n  }\n"])),(function(e){return e.selected?"rgba(88, 12, 96, 1)":"transparent"}),(function(e){return e.selected?"rgba(88, 12, 96, 0.85)":"rgba(88, 12, 96, 0.2)"}));function _(e){var n=e.children,t=e.selected,r=e.onClick;return Object(y.jsx)(Y,{onClick:r,selected:t,children:n})}function q(){return(q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function G(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function K(e,n){var t=e.title,r=e.titleId,c=G(e,["title","titleId"]);return o.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,ref:n,"aria-labelledby":r},c),t?o.createElement("title",{id:r},t):null,X||(X=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),W||(W=o.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})))}var Q,Z,$=o.forwardRef(K);t.p;function ee(){return(ee=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ne(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function te(e,n){var t=e.title,r=e.titleId,c=ne(e,["title","titleId"]);return o.createElement("svg",ee({id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 122.88 103.38",style:{enableBackground:"new 0 0 122.88 103.38"},xmlSpace:"preserve",ref:n,"aria-labelledby":r},c),t?o.createElement("title",{id:r},t):null,Q||(Q=o.createElement("style",{type:"text/css"},".st0{fill-rule:evenodd;clip-rule:evenodd;}")),Z||(Z=o.createElement("g",null,o.createElement("path",{className:"st0",d:"M27.66,93.53h32.49l9.1-9.08c1.4-1.4,1.41-3.7,0.01-5.1l-27.02-27.1c-1.4-1.4-3.7-1.41-5.1-0.01L14.3,75.03 c-1.41,1.4-1.41,3.7-0.01,5.1L27.66,93.53L27.66,93.53z M71.03,93.53h51.84v9.85H61.16H50.28h-12.8H25.7h-0.35L1.05,79.01 c-1.4-1.4-1.4-3.7,0.01-5.1L74.11,1.05c1.41-1.4,3.7-1.4,5.1,0.01l39.62,39.72c1.4,1.4,1.4,3.7-0.01,5.1L71.03,93.53L71.03,93.53z"}))))}var re,ce,oe=o.forwardRef(te);t.p;function ie(){return(ie=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function ae(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function le(e,n){var t=e.title,r=e.titleId,c=ae(e,["title","titleId"]);return o.createElement("svg",ie({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,ref:n,"aria-labelledby":r},c),t?o.createElement("title",{id:r},t):null,re||(re=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),ce||(ce=o.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})))}var se,de,ue,be,fe,he,pe=o.forwardRef(le),je=(t.p,b.a.div(se||(se=Object(u.a)(["\n  height: 50vh;\n  width: 13vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-left: 2rem;\n  background-color: rgba(255, 255, 255, 0.95);\n  border-radius: 14px;\n  border: 1px solid #580c60;\n  padding: 0.5rem;\n  box-sizing: border-box;\n  -webkit-box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);\n  box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);\n"])))),xe=b.a.div(de||(de=Object(u.a)(["\n  height: 100%;\n  width: 90%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;\n  gap: 0.25rem;\n  box-sizing: border-box;\n  padding: 0.5rem;\n"]))),ge=Object(b.a)($)(ue||(ue=Object(u.a)(["\n  fill: ",";\n  width: auto;\n  height: auto;\n  transition: 0.3s;\n"])),(function(e){return e.selected?"#ffffff":"#580c60"})),Oe=Object(b.a)(oe)(be||(be=Object(u.a)(["\n  fill: ",";\n  width: 24px;\n  height: 24px;\n  transition: 0.3s;\n"])),(function(e){return e.selected?"#ffffff":"#580c60"})),ve=Object(b.a)(pe)(fe||(fe=Object(u.a)(["\n  fill: #580c60;\n  width: auto;\n  height: auto;\n"])));function me(e){var n=e.toolSelected,t=e.selectFunction,r=e.clearFunction;return Object(y.jsx)(je,{children:Object(y.jsxs)(xe,{children:[Object(y.jsx)(_,{selected:"brush"===n,onClick:function(){return t("brush")},children:Object(y.jsx)(ge,{selected:"brush"===n})}),Object(y.jsx)(_,{selected:"eraser"===n,onClick:function(){return t("eraser")},children:Object(y.jsx)(Oe,{selected:"eraser"===n})}),Object(y.jsx)(_,{onClick:r,children:Object(y.jsx)(ve,{})})]})})}var we,ye,ke,Fe,ze,Ce=b.a.button(he||(he=Object(u.a)(["\n  width: ",";\n  height: ",";\n  border-radius: 50%;\n  background-color: ",";\n  align-self: center;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  transition: 0.3s;\n\n  &:hover {\n    background-color: rgba(88, 12, 96, 0.85);\n  }\n"])),(function(e){return e.size&&"".concat(e.size,"px")}),(function(e){return e.size&&"".concat(e.size,"px")}),(function(e){return e.selected?"rgba(88, 12, 96, 1)":"rgba(88, 12, 96, 0.7)"}));function Ee(e){var n=e.size,t=e.selected,r=e.onClick;return Object(y.jsx)(Ce,{size:n,onClick:r,selected:t})}var Se=[12,16,24,32,40],Pe=b.a.div(we||(we=Object(u.a)(["\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  background-color: rgba(255, 255, 255, 0.7);\n  border-radius: 14px;\n  border: 1px solid #580c60;\n  -webkit-box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);\n  box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);\n"]))),Ie=b.a.div(ye||(ye=Object(u.a)(["\n  height: 100%;\n  width: 15%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #580c60;\n  border-radius: 14px 0 0 14px;\n  border: 1px solid #580c60;\n"]))),Me=Object(b.a)(w)(ke||(ke=Object(u.a)(["\n  fill: #fff;\n  width: 30px;\n  height: 30px;\n"]))),Be=Object(b.a)(oe)(Fe||(Fe=Object(u.a)(["\n  fill: #fff;\n  width: 30px;\n  height: 30px;\n"]))),Le=b.a.div(ze||(ze=Object(u.a)(["\n  height: 100%;\n  width: 85%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  background-color: transparent;\n  border: none;\n"])));function Ne(e){var n=e.sizeSelected,t=e.selectBrushSizeFunction,r=e.toolSelected;return Object(y.jsxs)(Pe,{children:[Object(y.jsx)(Ie,{children:"brush"===r?Object(y.jsx)(Me,{}):"eraser"===r?Object(y.jsx)(Be,{}):Object(y.jsx)(Me,{})}),Object(y.jsx)(Le,{children:Se.map((function(e,r){return Object(y.jsx)(Ee,{size:e,onClick:function(){return t(e)},selected:e===n},r)}))})]})}var He,Re,Ae,De=t(14),Te=b.a.canvas(He||(He=Object(u.a)(["\n  border: 0.2px solid grey;\n  background-color: #fff;\n  background: #fff;\n  border: 1px solid #580c60;\n  cursor: crosshair;\n  -webkit-box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);\n  box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);\n"])));function Ve(e){var n=e.getRefFunction,t=Object(De.a)(e,["getRefFunction"]),r=Object(o.useRef)();return Object(o.useEffect)((function(){(null===r||void 0===r?void 0:r.current)&&n(r)}),[r,n]),Object(y.jsx)(Te,Object(s.a)(Object(s.a)({},t),{},{ref:r,id:"basic-canvas"}))}function Je(){return(Je=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Ue(e,n){if(null==e)return{};var t,r,c=function(e,n){if(null==e)return{};var t,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}function Xe(e,n){var t=e.title,r=e.titleId,c=Ue(e,["title","titleId"]);return o.createElement("svg",Je({xmlns:"http://www.w3.org/2000/svg",height:24,viewBox:"0 0 24 24",width:24,ref:n,"aria-labelledby":r},c),t?o.createElement("title",{id:r},t):null,Re||(Re=o.createElement("path",{d:"M0 0h24v24H0z",fill:"none"})),Ae||(Ae=o.createElement("path",{d:"M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"})))}var We,Ye,_e,qe=o.forwardRef(Xe),Ge=(t.p,b.a.button(We||(We=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 5px;\n  padding: 0.5rem 1rem;\n  box-sizing: border-box;\n  cursor: pointer;\n  color: #fff;\n  background-color: #580c60;\n  font-weight: bold;\n  transition: 0.3s;\n  outline: none;\n  -webkit-box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);\n  box-shadow: 5px 0px 27px -2px rgba(90, 85, 98, 0.72);\n\n  &:hover {\n    background-color: #3a0740;\n  }\n"])))),Ke=Object(b.a)(qe)(Ye||(Ye=Object(u.a)(["\n  fill: #fff;\n  width: 30px;\n  height: 30px;\n  margin-right: 0.3rem;\n"]))),Qe=b.a.div(_e||(_e=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  color: #fff;\n  background-color: transparent;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])));function Ze(e){var n=e.onClick;return Object(y.jsx)(Ge,{onClick:n,children:Object(y.jsxs)(Qe,{children:[Object(y.jsx)(Ke,{}),"Descargar"]})})}function $e(){var e=Object(o.useState)({size:16,end:"round",lineCap:"butt",color:"#000000"}),n=Object(d.a)(e,2),t=n[0],r=n[1],c=Object(o.useState)(!1),i=Object(d.a)(c,2),a=i[0],l=i[1],u=Object(o.useState)("brush"),b=Object(d.a)(u,2),f=b[0],h=b[1],p=Object(o.useState)({x:0,y:0}),j=Object(d.a)(p,2),x=j[0],g=j[1],O=Object(o.useState)(null),v=Object(d.a)(O,2),m=v[0],w=v[1],k=Object(o.useCallback)((function(e){w(e)}),[]);function F(e,n){var t,r=null===e||void 0===e||null===(t=e.canvas)||void 0===t?void 0:t.getBoundingClientRect();return{x:n.clientX-(null===r||void 0===r?void 0:r.left),y:n.clientY-(null===r||void 0===r?void 0:r.top)}}function z(){l(!1)}return Object(y.jsxs)("div",{className:"root",children:[Object(y.jsx)("section",{className:"separator"}),Object(y.jsx)("header",{className:"header",children:Object(y.jsx)(S,{})}),Object(y.jsxs)("main",{className:"content",children:[Object(y.jsx)("aside",{className:"side-menu",children:Object(y.jsx)(U,{selectColorFunction:function(e){return r({brushSetting:t,color:e})},changePickerFunction:function(e){r(Object(s.a)(Object(s.a)({},t),{},{color:e.target.value}))},colorSelected:t.color})}),Object(y.jsxs)("div",{className:"center-div",children:[Object(y.jsx)("div",{className:"canvas",children:Object(y.jsx)(Ve,{getRefFunction:k,width:700,height:350,onMouseDown:function(e){var n,r=null===m||void 0===m||null===(n=m.current)||void 0===n?void 0:n.getContext("2d"),c=F(r,e);r.lineWidth=t.size,r.lineJoin=t.end,r.lineCap=t.lineCap,r.strokeStyle="brush"===f?t.color:"eraser"===f?"#ffffff":t.color,r.beginPath(),r.moveTo(c.x,c.y),g({x:c.x,y:c.y}),l(!0)},onMouseMove:function(e){if(a){var n,t=null===m||void 0===m||null===(n=m.current)||void 0===n?void 0:n.getContext("2d"),r=F(t,e);t.moveTo(x.x,x.y),t.lineTo(r.x,r.y),t.closePath(),t.stroke(),g({x:r.x,y:r.y})}},onMouseUp:z,onMouseLeave:z})}),Object(y.jsxs)("section",{className:"canvas-bottom-menus",children:[Object(y.jsx)("div",{className:"brush-size-menu",children:Object(y.jsx)(Ne,{sizeSelected:t.size,selectBrushSizeFunction:function(e){return r(Object(s.a)(Object(s.a)({},t),{},{size:e}))},toolSelected:f})}),Object(y.jsx)("div",{className:"grow-div"}),Object(y.jsx)("div",{className:"download-button",children:Object(y.jsx)(Ze,{onClick:function(){for(var e,n=null===m||void 0===m||null===(e=m.current)||void 0===e?void 0:e.getContext("2d"),t=n.getImageData(0,0,700,350),r=t.data,c=0;c<r.length;c+=4)r[c+3]<255&&(r[c]=255,r[c+1]=255,r[c+2]=255,r[c+3]=255);n.putImageData(t,0,0);var o=n.canvas.toDataURL("image/png"),i=document.createElement("a");i.download="filename.png",i.href=o,i.click()}})})]})]}),Object(y.jsx)("aside",{className:"side-menu",children:Object(y.jsx)(me,{toolSelected:f,selectFunction:function(e){return h(e)},clearFunction:function(){var e,n=null===m||void 0===m||null===(e=m.current)||void 0===e?void 0:e.getContext("2d");n.clearRect(0,0,n.canvas.width,n.canvas.height)}})})]}),Object(y.jsx)("div",{className:"footer"})]})}var en=function(){return Object(y.jsx)(o.Fragment,{children:Object(y.jsx)($e,{})})},nn=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,25)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),o(e),i(e)}))};l.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(en,{})}),document.getElementById("root")),nn()}},[[24,1,2]]]);
//# sourceMappingURL=main.9639dad2.chunk.js.map