import{importShared as f}from"./__federation_fn_import-B5nKkAXK.js";import{r as m}from"./__federation_shared_react-CsUMYuEf.js";var l={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=m,j=Symbol.for("react.element"),u=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,_=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,h={key:!0,ref:!0,__self:!0,__source:!0};function p(s,t,n){var r,i={},c=null,x=null;n!==void 0&&(c=""+n),t.key!==void 0&&(c=""+t.key),t.ref!==void 0&&(x=t.ref);for(r in t)d.call(t,r)&&!h.hasOwnProperty(r)&&(i[r]=t[r]);if(s&&s.defaultProps)for(r in t=s.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:j,type:s,key:c,ref:x,props:i,_owner:_.current}}o.Fragment=u;o.jsx=p;o.jsxs=p;l.exports=o;var e=l.exports;const y=await f("react"),{useRef:v}=y,E=s=>{const{state:t}=s.cartContext,n=v(0);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),t.map(r=>(n.current=n.current+r.price*r.qty,e.jsxs("div",{className:"cart-items",children:[e.jsx("img",{src:r.images[0],height:"200px",width:"200px"}),e.jsxs("div",{children:[" ",r.title," "]}),e.jsxs("div",{children:[" $",r.price," * ",r.qty," "]})]})))]}),e.jsx("hr",{style:{width:"57%",marginLeft:"23%"}}),e.jsx("br",{}),e.jsxs("div",{style:{marginLeft:"23%"},children:[" ",e.jsx("b",{children:"Total"}),": $",n.current]})]})};export{E as default,e as j};
