(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[9066],{16540:(m,v,f)=>{"use strict";m.exports=f(67468)},67468:function(m,v,f){(function(h,b){m.exports=b(f(32735),f(19615))})(this,function(h,b){return function(n){var u={};function r(o){if(u[o])return u[o].exports;var t=u[o]={i:o,l:!1,exports:{}};return n[o].call(t.exports,t,t.exports,r),t.l=!0,t.exports}return r.m=n,r.c=u,r.d=function(o,t,c){r.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:c})},r.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},r.t=function(o,t){if(1&t&&(o=r(o)),8&t||4&t&&typeof o=="object"&&o&&o.__esModule)return o;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:o}),2&t&&typeof o!="string")for(var s in o)r.d(c,s,function(i){return o[i]}.bind(null,s));return c},r.n=function(o){var t=o&&o.__esModule?function(){return o.default}:function(){return o};return r.d(t,"a",t),t},r.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},r.p="",r(r.s=110)}({0:function(n,u,r){n.exports=r(19)()},1:function(n,u){n.exports=h},10:function(n,u,r){var o=r(25),t=r(26),c=r(22),s=r(27);n.exports=function(i,d){return o(i)||t(i,d)||c(i,d)||s()},n.exports.default=n.exports,n.exports.__esModule=!0},110:function(n,u,r){"use strict";r.r(u),r.d(u,"Main",function(){return S}),r.d(u,"SkipToContent",function(){return _});var o,t=r(5),c=r.n(t),s=r(4),i=r.n(s),d=r(3),l=r.n(d),g=r(1),O=r.n(g),x=r(0),e=r.n(x),a=r(2),p=r.n(a),y=["labelledBy"],j=p.a.main(o||(o=l()([`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`]))),S=function(w){var T=w.labelledBy,B=i()(w,y),A=T||"main-content-title";return O.a.createElement(j,c()({"aria-labelledby":A,id:"main-content",tabIndex:-1},B))};S.defaultProps={labelledBy:void 0},S.propTypes={labelledBy:e.a.string};var M,P=r(6),k=p()(P.Box)(M||(M=l()([`
  text-decoration: none;
  position: absolute;
  z-index: 9999;
  left: -100%;
  top: -100%;

  &:focus {
    left: `,`;
    top: `,`;
  }
`])),function(w){return w.theme.spaces[3]},function(w){return w.theme.spaces[3]}),_=function(w){var T=w.children;return O.a.createElement(k,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",padding:3,hasRadius:!0},T)};_.propTypes={children:e.a.node.isRequired}},13:function(n,u){function r(o){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?(n.exports=r=function(t){return typeof t},n.exports.default=n.exports,n.exports.__esModule=!0):(n.exports=r=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n.exports.default=n.exports,n.exports.__esModule=!0),r(o)}n.exports=r,n.exports.default=n.exports,n.exports.__esModule=!0},19:function(n,u,r){"use strict";var o=r(20);function t(){}function c(){}c.resetWarningCache=t,n.exports=function(){function s(l,g,O,x,e,a){if(a!==o){var p=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw p.name="Invariant Violation",p}}function i(){return s}s.isRequired=s;var d={array:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:i,element:s,elementType:s,instanceOf:i,node:s,objectOf:i,oneOf:i,oneOfType:i,shape:i,exact:i,checkPropTypes:c,resetWarningCache:t};return d.PropTypes=d,d}},2:function(n,u){n.exports=b},20:function(n,u,r){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},21:function(n,u){n.exports=function(r,o){(o==null||o>r.length)&&(o=r.length);for(var t=0,c=new Array(o);t<o;t++)c[t]=r[t];return c},n.exports.default=n.exports,n.exports.__esModule=!0},22:function(n,u,r){var o=r(21);n.exports=function(t,c){if(t){if(typeof t=="string")return o(t,c);var s=Object.prototype.toString.call(t).slice(8,-1);return s==="Object"&&t.constructor&&(s=t.constructor.name),s==="Map"||s==="Set"?Array.from(t):s==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?o(t,c):void 0}},n.exports.default=n.exports,n.exports.__esModule=!0},24:function(n,u){n.exports=function(r,o){if(r==null)return{};var t,c,s={},i=Object.keys(r);for(c=0;c<i.length;c++)t=i[c],o.indexOf(t)>=0||(s[t]=r[t]);return s},n.exports.default=n.exports,n.exports.__esModule=!0},25:function(n,u){n.exports=function(r){if(Array.isArray(r))return r},n.exports.default=n.exports,n.exports.__esModule=!0},26:function(n,u){n.exports=function(r,o){var t=r==null?null:typeof Symbol!="undefined"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var c,s,i=[],d=!0,l=!1;try{for(t=t.call(r);!(d=(c=t.next()).done)&&(i.push(c.value),!o||i.length!==o);d=!0);}catch(g){l=!0,s=g}finally{try{d||t.return==null||t.return()}finally{if(l)throw s}}return i}},n.exports.default=n.exports,n.exports.__esModule=!0},27:function(n,u){n.exports=function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)},n.exports.default=n.exports,n.exports.__esModule=!0},3:function(n,u){n.exports=function(r,o){return o||(o=r.slice(0)),Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(o)}}))},n.exports.default=n.exports,n.exports.__esModule=!0},4:function(n,u,r){var o=r(24);n.exports=function(t,c){if(t==null)return{};var s,i,d=o(t,c);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)s=l[i],c.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(t,s)&&(d[s]=t[s])}return d},n.exports.default=n.exports,n.exports.__esModule=!0},5:function(n,u){function r(){return n.exports=r=Object.assign||function(o){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var s in c)Object.prototype.hasOwnProperty.call(c,s)&&(o[s]=c[s])}return o},n.exports.default=n.exports,n.exports.__esModule=!0,r.apply(this,arguments)}n.exports=r,n.exports.default=n.exports,n.exports.__esModule=!0},6:function(n,u,r){"use strict";r.r(u),r.d(u,"Box",function(){return x});var o,t=r(3),c=r.n(t),s=r(0),i=r.n(s),d=r(2),l=r.n(d),g=r(7),O={color:!0},x=l.a.div.withConfig({shouldForwardProp:function(e,a){return!O[e]&&a(e)}})(o||(o=c()([`
  // Font
  font-size: `,`;

  // Colors
  background: `,`;
  color: `,`;

  // Spaces
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  // Responsive hiding
  `,`
  `,`
  

  // Borders
  border-radius: `,`;
  border-style: `,`;
  border-width: `,`;
  border-color: `,`;
  border: `,`;

  // Shadows
  box-shadow: `,`;

  // Handlers
  pointer-events: `,`;
  &:hover {
    `,`
  }

  // Display
  display: `,`;

  // Position
  position: `,`;
  left: `,`;
  right: `,`;
  top: `,`;
  bottom: `,`;
  z-index: `,`;
  overflow: `,`;
  cursor: `,`;

  // Size
  width: `,`;
  max-width: `,`;
  min-width: `,`;
  height: `,`;
  max-height: `,`;
  min-height: `,`;

  // Animation
  transition: `,`;
  transform: `,`;
  animation: `,`;

  //Flexbox children props
  flex-shrink: `,`;
  flex-grow: `,`;
  flex-basis: `,`;
  flex: `,`;

  // Text
  text-align: `,`;
  text-transform: `,`;
  line-height: `,`;

  // Cursor
  cursor: `,`;
`])),function(e){var a=e.fontSize;return e.theme.fontSizes[a]||a},function(e){var a=e.theme,p=e.background;return a.colors[p]},function(e){var a=e.theme,p=e.color;return a.colors[p]},function(e){var a=e.theme,p=e.padding;return Object(g.a)("padding",p,a)},function(e){var a=e.theme,p=e.paddingTop;return Object(g.a)("padding-top",p,a)},function(e){var a=e.theme,p=e.paddingRight;return Object(g.a)("padding-right",p,a)},function(e){var a=e.theme,p=e.paddingBottom;return Object(g.a)("padding-bottom",p,a)},function(e){var a=e.theme,p=e.paddingLeft;return Object(g.a)("padding-left",p,a)},function(e){var a=e.theme,p=e.marginLeft;return Object(g.a)("margin-left",p,a)},function(e){var a=e.theme,p=e.marginRight;return Object(g.a)("margin-right",p,a)},function(e){var a=e.theme,p=e.marginTop;return Object(g.a)("margin-top",p,a)},function(e){var a=e.theme,p=e.marginBottom;return Object(g.a)("margin-bottom",p,a)},function(e){var a=e.theme;return e.hiddenS?"".concat(a.mediaQueries.tablet," { display: none; }"):void 0},function(e){var a=e.theme;return e.hiddenXS?"".concat(a.mediaQueries.mobile," { display: none; }"):void 0},function(e){var a=e.theme,p=e.hasRadius,y=e.borderRadius;return p?a.borderRadius:y},function(e){return e.borderStyle},function(e){return e.borderWidth},function(e){var a=e.borderColor;return e.theme.colors[a]},function(e){var a=e.theme,p=e.borderColor,y=e.borderStyle,j=e.borderWidth;if(p&&!y&&!j)return"1px solid ".concat(a.colors[p])},function(e){var a=e.theme,p=e.shadow;return a.shadows[p]},function(e){return e.pointerEvents},function(e){var a=e._hover,p=e.theme;return a?a(p):void 0},function(e){return e.display},function(e){return e.position},function(e){var a=e.left;return e.theme.spaces[a]||a},function(e){var a=e.right;return e.theme.spaces[a]||a},function(e){var a=e.top;return e.theme.spaces[a]||a},function(e){var a=e.bottom;return e.theme.spaces[a]||a},function(e){return e.zIndex},function(e){return e.overflow},function(e){return e.cursor},function(e){var a=e.width;return e.theme.spaces[a]||a},function(e){var a=e.maxWidth;return e.theme.spaces[a]||a},function(e){var a=e.minWidth;return e.theme.spaces[a]||a},function(e){var a=e.height;return e.theme.spaces[a]||a},function(e){var a=e.maxHeight;return e.theme.spaces[a]||a},function(e){var a=e.minHeight;return e.theme.spaces[a]||a},function(e){return e.transition},function(e){return e.transform},function(e){return e.animation},function(e){return e.shrink},function(e){return e.grow},function(e){return e.basis},function(e){return e.flex},function(e){return e.textAlign},function(e){return e.textTransform},function(e){return e.lineHeight},function(e){return e.cursor});x.displayName="Box",x.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},x.propTypes={_hover:i.a.func,background:i.a.string,basis:i.a.oneOfType([i.a.string,i.a.string]),borderColor:i.a.string,children:i.a.oneOfType([i.a.node,i.a.string]),color:i.a.string,flex:i.a.oneOfType([i.a.string,i.a.string]),grow:i.a.oneOfType([i.a.string,i.a.string]),hasRadius:i.a.bool,hiddenS:i.a.bool,hiddenXS:i.a.bool,padding:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingBottom:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingLeft:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingRight:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),paddingTop:i.a.oneOfType([i.a.number,i.a.arrayOf(i.a.number)]),shadow:i.a.string,shrink:i.a.oneOfType([i.a.string,i.a.string])}},7:function(n,u,r){"use strict";var o=r(10),t=r.n(o),c=r(13),s=r.n(c);u.a=function(i,d,l){var g=d;if(Array.isArray(d)||s()(d)!=="object"||(g=[d==null?void 0:d.desktop,d==null?void 0:d.tablet,d==null?void 0:d.mobile]),g!==void 0){if(Array.isArray(g)){var O=g,x=t()(O,3),e=x[0],a=x[1],p=x[2],y="".concat(i,": ").concat(l.spaces[e],";");return a!==void 0&&(y+="".concat(l.mediaQueries.tablet,`{
          `).concat(i,": ").concat(l.spaces[a],`;
        }`)),p!==void 0&&(y+="".concat(l.mediaQueries.mobile,`{
          `).concat(i,": ").concat(l.spaces[p],`;
        }`)),y}var j=l.spaces[g]||g;return"".concat(i,": ").concat(j,";")}}}})})},42258:function(m,v,f){(function(h,b){m.exports=b(f(32735))})(this,function(h){return function(b){var n={};function u(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return b[r].call(o.exports,o,o.exports,u),o.l=!0,o.exports}return u.m=b,u.c=n,u.d=function(r,o,t){u.o(r,o)||Object.defineProperty(r,o,{enumerable:!0,get:t})},u.r=function(r){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},u.t=function(r,o){if(1&o&&(r=u(r)),8&o||4&o&&typeof r=="object"&&r&&r.__esModule)return r;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:r}),2&o&&typeof r!="string")for(var c in r)u.d(t,c,function(s){return r[s]}.bind(null,c));return t},u.n=function(r){var o=r&&r.__esModule?function(){return r.default}:function(){return r};return u.d(o,"a",o),o},u.o=function(r,o){return Object.prototype.hasOwnProperty.call(r,o)},u.p="",u(u.s=35)}({0:function(b,n){b.exports=h},35:function(b,n,u){"use strict";u.r(n);var r=u(0);function o(){return(o=Object.assign||function(t){for(var c=1;c<arguments.length;c++){var s=arguments[c];for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i])}return t}).apply(this,arguments)}n.default=function(t){return r.createElement("svg",o({width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t),r.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 00-.374.68v1.65a.797.797 0 00.384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 00.216.744l1.167 1.166a.801.801 0 00.744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 00.679.374h1.649a.797.797 0 00.686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 00.744-.216l1.166-1.167a.803.803 0 00.216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 00.374-.679v-1.649a.796.796 0 00-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 00-.216-.744l-1.166-1.173a.802.802 0 00-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 00-.68-.374h-1.65a.797.797 0 00-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 00-.744.216L2.921 4.094a.802.802 0 00-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8zM12 17a5 5 0 100-10 5 5 0 000 10z",fill:"#212134"}))}}})})},56671:(m,v,f)=>{var h=f(35897),b=f(74741),n=b(h);m.exports=n},52920:(m,v,f)=>{var h=f(56671),b=f(81580);function n(u,r){var o=-1,t=b(u)?Array(u.length):[];return h(u,function(c,s,i){t[++o]=r(c,s,i)}),t}m.exports=n},50690:(m,v,f)=>{var h=f(26460),b=f(80166),n=f(88904),u=f(52920),r=f(36024),o=f(76535),t=f(1397),c=f(15362),s=f(77236);function i(d,l,g){l.length?l=h(l,function(e){return s(e)?function(a){return b(a,e.length===1?e[0]:e)}:e}):l=[c];var O=-1;l=h(l,o(n));var x=u(d,function(e,a,p){var y=h(l,function(j){return j(e)});return{criteria:y,index:++O,value:e}});return r(x,function(e,a){return t(e,a,g)})}m.exports=i},36024:m=>{function v(f,h){var b=f.length;for(f.sort(h);b--;)f[b]=f[b].value;return f}m.exports=v},40709:(m,v,f)=>{var h=f(22945);function b(n,u){if(n!==u){var r=n!==void 0,o=n===null,t=n===n,c=h(n),s=u!==void 0,i=u===null,d=u===u,l=h(u);if(!i&&!l&&!c&&n>u||c&&s&&d&&!i&&!l||o&&s&&d||!r&&d||!t)return 1;if(!o&&!c&&!l&&n<u||l&&r&&t&&!o&&!c||i&&r&&t||!s&&t||!d)return-1}return 0}m.exports=b},1397:(m,v,f)=>{var h=f(40709);function b(n,u,r){for(var o=-1,t=n.criteria,c=u.criteria,s=t.length,i=r.length;++o<s;){var d=h(t[o],c[o]);if(d){if(o>=i)return d;var l=r[o];return d*(l=="desc"?-1:1)}}return n.index-u.index}m.exports=b},74741:(m,v,f)=>{var h=f(81580);function b(n,u){return function(r,o){if(r==null)return r;if(!h(r))return n(r,o);for(var t=r.length,c=u?t:-1,s=Object(r);(u?c--:++c<t)&&o(s[c],c,s)!==!1;);return r}}m.exports=b},98978:(m,v,f)=>{var h=f(40314),b=f(50690),n=f(94569),u=f(63108),r=n(function(o,t){if(o==null)return[];var c=t.length;return c>1&&u(o,t[0],t[1])?t=[]:c>2&&u(t[0],t[1],t[2])&&(t=[t[0]]),b(o,h(t,1),[])});m.exports=r},15738:(m,v,f)=>{var h=f(4293);function b(n){var u=n==null?0:n.length;return u?h(n,1,u):[]}m.exports=b}}]);
