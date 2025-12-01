"use strict";(self.webpackChunkbsign_ui=self.webpackChunkbsign_ui||[]).push([[976],{57385:function(h,r,n){var i;n.r(r),n.d(r,{demos:function(){return b}});var E=n(17061),o=n.n(E),I=n(27424),f=n.n(I),v=n(17156),p=n.n(v),m=n(67294),R=n(82883),b={"inputui-demo-0":{component:m.memo(m.lazy(p()(o()().mark(function d(){var a,t,s,l,_,e;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return a=u.sent,t=a.default,s=a.useState,u.next=7,Promise.resolve().then(n.bind(n,82883));case 7:return l=u.sent,_=l.InputUI,e=function(){var O=s(),c=f()(O,2),P=c[0],M=c[1],C=function(g){return M(g)};return t.createElement("div",null,t.createElement(_,{onChange:function(g){return console.log(g)},onchangeTime:500}),t.createElement("br",null),t.createElement("br",null),t.createElement(_.Range,{onChange:C,min:0,max:100}),JSON.stringify(P))},u.abrupt("return",{default:e});case 11:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"inputui-demo-0",refAtomIds:["InputUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Space } from 'antd';
import { InputUI } from 'bsign-ui';

const App: React.FC = () => {
  const [inputRangeValue, setInputRangeValue] = useState();

  const changeInputRange = (e) => setInputRangeValue(e);
  return (
    <div>
      <InputUI onChange={(e) => console.log(e)} onchangeTime={500} />
      <br />
      <br />
      <InputUI.Range onChange={changeInputRange} min={0} max={100} />
      {JSON.stringify(inputRangeValue)}
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},"bsign-ui":{type:"NPM",value:"0.0.1"}},entry:"index.tsx"},context:{react:i||(i=n.t(m,2)),"bsign-ui":R},renderOpts:{compile:function(){var d=p()(o()().mark(function t(){var s,l=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(s=e.sent).default.apply(s,l));case 3:case"end":return e.stop()}},t)}));function a(){return d.apply(this,arguments)}return a}()}}}},97319:function(h,r,n){n.r(r),n.d(r,{texts:function(){return i}});const i=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:0}]}}]);
