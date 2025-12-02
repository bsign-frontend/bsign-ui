"use strict";(self.webpackChunkbsign_ui=self.webpackChunkbsign_ui||[]).push([[1611],{97570:function(f,s,e){var u;e.r(s),e.d(s,{demos:function(){return F}});var g=e(17061),l=e.n(g),P=e(42122),h=e.n(P),M=e(27424),v=e.n(M),O=e(17156),I=e.n(O),a=e(67294),b=e(50940),D=e(82883),F={"searchui-demo-0":{component:a.memo(a.lazy(I()(l()().mark(function _(){var d,m,o,t,c,r,p;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return d=n.sent,m=d.useState,n.next=6,Promise.resolve().then(e.bind(e,50940));case 6:return o=n.sent,t=o.Form,n.next=10,Promise.resolve().then(e.bind(e,82883));case 10:return c=n.sent,r=c.SearchUI,p=function(){var C=t.useForm(),y=v()(C,1),A=y[0],U=m(),E=v()(U,2),i=E[0],T=E[1],R=function(S,V){T(h()(h()({},i),V))};return a.createElement("div",null,a.createElement(t,{form:A,onValuesChange:R},a.createElement(t.Item,{name:"searchField"},a.createElement(r,{placeholder:"\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0\u3001\u7F16\u53F7"}))),a.createElement("div",null,"\u641C\u7D22\u503C\uFF1A ",i==null?void 0:i.searchField))},n.abrupt("return",{default:p});case 14:case"end":return n.stop()}},_)})))),asset:{type:"BLOCK",id:"searchui-demo-0",refAtomIds:["SearchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { Form } from 'antd';
import { SearchUI } from 'bsign-ui';

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState();

  const onValuesChange = (_: any, allValues: any) => {
    setFormValue({ ...formValue, ...allValues });
  };

  return (
    <div>
      <Form form={form} onValuesChange={onValuesChange}>
        <Form.Item name="searchField">
          <SearchUI placeholder="\u8BF7\u8F93\u5165\u4F01\u4E1A\u540D\u79F0\u3001\u7F16\u53F7" />
        </Form.Item>
      </Form>
      <div>\u641C\u7D22\u503C\uFF1A {formValue?.searchField}</div>
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.0.0"},"bsign-ui":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{react:u||(u=e.t(a,2)),antd:b,"bsign-ui":D},renderOpts:{compile:function(){var _=I()(l()().mark(function m(){var o,t=arguments;return l()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.e(250).then(e.bind(e,90250));case 2:return r.abrupt("return",(o=r.sent).default.apply(o,t));case 3:case"end":return r.stop()}},m)}));function d(){return _.apply(this,arguments)}return d}()}}}},74319:function(f,s,e){e.r(s),e.d(s,{texts:function(){return u}});const u=[{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u5C5E\u6027",paraId:1,tocIndex:1},{value:"\u8BF4\u660E",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:1,tocIndex:1},{value:"type",paraId:1,tocIndex:1},{value:"\u7C7B\u578B",paraId:1,tocIndex:1},{value:"string",paraId:1,tocIndex:1},{value:"default",paraId:1,tocIndex:1},{value:"\u5426",paraId:1,tocIndex:1}]}}]);
