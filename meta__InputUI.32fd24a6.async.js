"use strict";(self.webpackChunkbsign_ui=self.webpackChunkbsign_ui||[]).push([[976],{57385:function(b,s,e){var i;e.r(s),e.d(s,{demos:function(){return R}});var h=e(15009),_=e.n(h),E=e(5574),I=e.n(E),f=e(99289),g=e.n(f),m=e(67294),v=e(82883),R={"inputui-demo-0":{component:m.memo(m.lazy(g()(_()().mark(function d(){var r,t,a,o,l,n;return _()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return r=u.sent,t=r.default,a=r.useState,u.next=7,Promise.resolve().then(e.bind(e,82883));case 7:return o=u.sent,l=o.InputUI,n=function(){var O=a(),c=I()(O,2),P=c[0],M=c[1],C=function(p){return M(p)};return t.createElement("div",null,t.createElement(l,{onChange:function(p){return console.log(p)},onchangeTime:500}),t.createElement("br",null),t.createElement("br",null),t.createElement(l.Range,{onChange:C,min:0,max:100}),JSON.stringify(P))},u.abrupt("return",{default:n});case 11:case"end":return u.stop()}},d)})))),asset:{type:"BLOCK",id:"inputui-demo-0",refAtomIds:["InputUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"bsign-ui":{type:"NPM",value:"0.0.5"}},entry:"index.tsx"},context:{react:i||(i=e.t(m,2)),"bsign-ui":v},renderOpts:{compile:function(){var d=g()(_()().mark(function t(){var a,o=arguments;return _()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(a=n.sent).default.apply(a,o));case 3:case"end":return n.stop()}},t)}));function r(){return d.apply(this,arguments)}return r}()}}}},97319:function(b,s,e){e.r(s),e.d(s,{texts:function(){return i}});const i=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:0}]}}]);
