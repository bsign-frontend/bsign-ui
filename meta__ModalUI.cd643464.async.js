"use strict";(self.webpackChunkbsign_ui=self.webpackChunkbsign_ui||[]).push([[7073],{77202:function(E,o,e){var i;e.r(o),e.d(o,{demos:function(){return P}});var O=e(17061),l=e.n(O),h=e(27424),M=e.n(h),U=e(17156),p=e.n(U),d=e(67294),g=e(82883),P={"modalui-demo-0":{component:d.memo(d.lazy(p()(l()().mark(function I(){var s,a,u,r,c,n,_,v;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return s=t.sent,a=s.default,u=s.useState,t.next=7,Promise.resolve().then(e.bind(e,82883));case 7:return r=t.sent,c=r.ButtonUI,n=r.IconUI,_=r.ModalUI,v=function(){var b=u(!1),f=M()(b,2),y=f[0],m=f[1],D=function(){return m(!1)};return a.createElement("div",null,a.createElement(c,{type:"primary",onClick:function(){return m(!0)}},"\u5F39\u7A97"),a.createElement(_,{isOpen:y,setIsOpen:m,icon:a.createElement(n,{name:"SwitchButton"}),title:"\u786E\u8BA4\u5F00\u542F",confirm:D},"\u60A8\u786E\u5B9A\u8981","\u5F00\u542F","\u6B64\u4F01\u4E1A\u5417\uFF1F"))},t.abrupt("return",{default:v});case 13:case"end":return t.stop()}},I)})))),asset:{type:"BLOCK",id:"modalui-demo-0",refAtomIds:["ModalUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Space } from 'antd';
import { ButtonUI, IconUI, ModalUI } from 'bsign-ui';

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const confirm = () => setIsOpen(false);
  return (
    <div>
      <ButtonUI type="primary" onClick={() => setIsOpen(true)}>
        \u5F39\u7A97
      </ButtonUI>
      <ModalUI isOpen={isOpen} setIsOpen={setIsOpen} icon={<IconUI name="SwitchButton" />} title={'\u786E\u8BA4\u5F00\u542F'} confirm={confirm}>
        \u60A8\u786E\u5B9A\u8981{'\u5F00\u542F'}\u6B64\u4F01\u4E1A\u5417\uFF1F
      </ModalUI>
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},"bsign-ui":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{react:i||(i=e.t(d,2)),"bsign-ui":g},renderOpts:{compile:function(){var I=p()(l()().mark(function a(){var u,r=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(u=n.sent).default.apply(u,r));case 3:case"end":return n.stop()}},a)}));function s(){return I.apply(this,arguments)}return s}()}}}},80796:function(E,o,e){e.r(o),e.d(o,{texts:function(){return i}});const i=[{value:"\u5F39\u7A97\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:2},{value:"type",paraId:2,tocIndex:2},{value:"\u5F53\u524D TagUI \u6240\u5C5E\u7C7B\u578B",paraId:2,tocIndex:2},{value:"Number",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"icon",paraId:2,tocIndex:2},{value:"\u5F53\u524D TagUI \u6240 \u643A\u5E26\u7684 Icon",paraId:2,tocIndex:2},{value:"ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2}]}}]);
