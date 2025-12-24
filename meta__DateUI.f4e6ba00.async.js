"use strict";(self.webpackChunkbsign_ui=self.webpackChunkbsign_ui||[]).push([[7749],{69975:function(E,r,e){var s;e.r(r),e.d(r,{demos:function(){return O}});var f=e(15009),d=e.n(f),R=e(5574),c=e.n(R),D=e(99289),I=e.n(D),_=e(67294),x=e(82883),O={"dateui-demo-0":{component:_.memo(_.lazy(I()(d()().mark(function m(){var l,n,u,o,i,a;return d()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=t.sent,n=l.default,u=l.useState,t.next=7,Promise.resolve().then(e.bind(e,82883));case 7:return o=t.sent,i=o.DateUI,a=function(){var y=u(),p=c()(y,2),g=p[0],M=p[1],P=u(),h=c()(P,2),b=h[0],C=h[1],A=function(v){M(v)},U=function(v){C(v)};return n.createElement("div",null,n.createElement(i,{value:g,onChange:A}),n.createElement("br",null),n.createElement("br",null),n.createElement(i,{showRange:!0,value:b,onChange:U}),n.createElement("br",null),n.createElement("br",null),n.createElement("div",null,JSON.stringify(g)),n.createElement("div",null,JSON.stringify(b)))},t.abrupt("return",{default:a});case 11:case"end":return t.stop()}},m)})))),asset:{type:"BLOCK",id:"dateui-demo-0",refAtomIds:["DateUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { DateUI } from 'bsign-ui';
import dayjs from 'dayjs';

const App: React.FC = () => {
  const [value, setValue] = useState();
  const [valueRange, setValueRange] = useState();
  const change = (e) => {
    setValue(e);
  };

  const changeRange = (e) => {
    setValueRange(e);
  };
  return (
    <div>
      <DateUI value={value} onChange={change} />
      <br />
      <br />
      <DateUI showRange={true} value={valueRange} onChange={changeRange} />
      <br />
      <br />
      <div>{JSON.stringify(value)}</div>
      <div>{JSON.stringify(valueRange)}</div>
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},"bsign-ui":{type:"NPM",value:"0.0.5"}},entry:"index.tsx"},context:{react:s||(s=e.t(_,2)),"bsign-ui":x},renderOpts:{compile:function(){var m=I()(d()().mark(function n(){var u,o=arguments;return d()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.e(250).then(e.bind(e,90250));case 2:return a.abrupt("return",(u=a.sent).default.apply(u,o));case 3:case"end":return a.stop()}},n)}));function l(){return m.apply(this,arguments)}return l}()}}}},4122:function(E,r,e){e.r(r),e.d(r,{texts:function(){return s}});const s=[{value:"\u{1F48E} \u57FA\u7840\u529F\u80FD",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:1,tocIndex:1},{value:"value",paraId:1,tocIndex:1},{value:"\u503C",paraId:1,tocIndex:1},{value:"Arrary",paraId:1,tocIndex:1},{value:'["",""]',paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"onChange",paraId:1,tocIndex:1},{value:"\u53D8\u5316",paraId:1,tocIndex:1},{value:"Fun",paraId:1,tocIndex:1},{value:"-",paraId:1,tocIndex:1},{value:"\u662F",paraId:1,tocIndex:1},{value:"format",paraId:1,tocIndex:1},{value:"\u683C\u5F0F",paraId:1,tocIndex:1},{value:"String",paraId:1,tocIndex:1},{value:"'YYYY-MM-DD'",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1},{value:"showRange",paraId:1,tocIndex:1},{value:"\u65E5\u671F\u8303\u56F4",paraId:1,tocIndex:1},{value:"Boolean",paraId:1,tocIndex:1},{value:"false",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1}]}}]);
