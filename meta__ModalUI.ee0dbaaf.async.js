"use strict";(self.webpackChunkbsign_ui=self.webpackChunkbsign_ui||[]).push([[7073],{77202:function(b,s,e){var i;e.r(s),e.d(s,{demos:function(){return g}});var E=e(15009),l=e.n(E),O=e(5574),h=e.n(O),M=e(99289),p=e.n(M),d=e(67294),U=e(82883),g={"modalui-demo-0":{component:d.memo(d.lazy(p()(l()().mark(function _(){var u,a,o,r,m,n,c,v;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return u=t.sent,a=u.default,o=u.useState,t.next=7,Promise.resolve().then(e.bind(e,82883));case 7:return r=t.sent,m=r.ButtonUI,n=r.IconUI,c=r.ModalUI,v=function(){var P=o(!1),f=h()(P,2),y=f[0],I=f[1],D=function(){return I(!1)};return a.createElement("div",null,a.createElement(m,{type:"primary",onClick:function(){return I(!0)}},"\u5F39\u7A97"),a.createElement(c,{isOpen:y,setIsOpen:I,icon:a.createElement(n,{name:"SwitchButton"}),title:"\u786E\u8BA4\u5F00\u542F",confirm:D},"\u60A8\u786E\u5B9A\u8981","\u5F00\u542F","\u6B64\u4F01\u4E1A\u5417\uFF1F"))},t.abrupt("return",{default:v});case 13:case"end":return t.stop()}},_)})))),asset:{type:"BLOCK",id:"modalui-demo-0",refAtomIds:["ModalUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},"bsign-ui":{type:"NPM",value:"0.0.4"}},entry:"index.tsx"},context:{react:i||(i=e.t(d,2)),"bsign-ui":U},renderOpts:{compile:function(){var _=p()(l()().mark(function a(){var o,r=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(o=n.sent).default.apply(o,r));case 3:case"end":return n.stop()}},a)}));function u(){return _.apply(this,arguments)}return u}()}}}},80796:function(b,s,e){e.r(s),e.d(s,{texts:function(){return i}});const i=[{value:"\u5F39\u7A97\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:2},{value:"type",paraId:2,tocIndex:2},{value:"\u5F53\u524D TagUI \u6240\u5C5E\u7C7B\u578B",paraId:2,tocIndex:2},{value:"Number",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2},{value:"icon",paraId:2,tocIndex:2},{value:"\u5F53\u524D TagUI \u6240 \u643A\u5E26\u7684 Icon",paraId:2,tocIndex:2},{value:"ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u5426",paraId:2,tocIndex:2}]}}]);
