"use strict";(self.webpackChunkbsign_ui=self.webpackChunkbsign_ui||[]).push([[3280],{52858:function(D,p,e){var c;e.r(p),e.d(p,{demos:function(){return B}});var U=e(42122),F=e.n(U),L=e(17061),o=e.n(L),R=e(27424),f=e.n(R),T=e(17156),I=e.n(T),t=e(67294),O=e(50940),b=e(82883),B={"switchui-demo-0":{component:t.memo(t.lazy(I()(o()().mark(function m(){var l,i,r,a,d,n,h;return o()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=s.sent,i=l.useState,s.next=6,Promise.resolve().then(e.bind(e,50940));case 6:return r=s.sent,a=r.Space,s.next=10,Promise.resolve().then(e.bind(e,82883));case 10:return d=s.sent,n=d.SwitchUI,h=function(){var A=i(1),E=f()(A,2),S=E[0],g=E[1],y=i(1),v=f()(y,2),_=v[0],C=v[1];return t.createElement(a,null,t.createElement(n,{checked:S===1,onClick:function(){return g(S===1?2:1)}}),t.createElement(n,{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528",checked:_===1,onClick:function(){return C(_===1?2:1)}}))},s.abrupt("return",{default:h});case 14:case"end":return s.stop()}},m)})))),asset:{type:"BLOCK",id:"switchui-demo-0",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { Space } from 'antd';
import { SwitchUI } from 'bsign-ui';

const App: React.FC = () => {
  const [state1, setState1] = useState(1);
  const [state2, setState2] = useState(1);
  return (
    <Space>
      <SwitchUI checked={state1 === 1 ? true : false} onClick={() => setState1(state1 === 1 ? 2 : 1)} />
      <SwitchUI
        checkedChildren="\u542F\u7528"
        unCheckedChildren="\u7981\u7528"
        checked={state2 === 1 ? true : false}
        onClick={() => setState2(state2 === 1 ? 2 : 1)}
      />
    </Space>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.0.0"},"bsign-ui":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{react:c||(c=e.t(t,2)),antd:O,"bsign-ui":b},renderOpts:{compile:function(){var m=I()(o()().mark(function i(){var r,a=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},i)}));function l(){return m.apply(this,arguments)}return l}()}},"switchui-demo-1":{component:t.memo(t.lazy(I()(o()().mark(function m(){var l,i,r,a,d,n,h,P;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=u.sent,i=l.useState,u.next=6,Promise.resolve().then(e.bind(e,50940));case 6:return r=u.sent,a=r.Form,u.next=10,Promise.resolve().then(e.bind(e,82883));case 10:return d=u.sent,n=d.SwitchUI,h={status:1},P=function(){var E=a.useForm(),S=f()(E,1),g=S[0],y=i(),v=f()(y,2),_=v[0],C=v[1],M=function(K){C(F()(F()({},_),K))};return t.createElement(a,{onFinish:M,form:g,initialValues:h},t.createElement(a.Item,{label:"\u662F\u5426\u542F\u7528",name:"status"},t.createElement(n,null)))},u.abrupt("return",{default:P});case 15:case"end":return u.stop()}},m)})))),asset:{type:"BLOCK",id:"switchui-demo-1",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
import { Form } from 'antd';
import { SwitchUI } from 'bsign-ui';

const initialValues = {
  status: 1,
};
const App: React.FC = () => {
  const [form] = Form.useForm();
  const [formValue, setFormValue] = useState();

  const onFinish = (value: any) => {
    setFormValue({ ...formValue, ...value });
  };

  return (
    <Form onFinish={onFinish} form={form} initialValues={initialValues}>
      <Form.Item label="\u662F\u5426\u542F\u7528" name="status">
        <SwitchUI />
      </Form.Item>
    </Form>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.0.0"},"bsign-ui":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{react:c||(c=e.t(t,2)),antd:O,"bsign-ui":b},renderOpts:{compile:function(){var m=I()(o()().mark(function i(){var r,a=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,a));case 3:case"end":return n.stop()}},i)}));function l(){return m.apply(this,arguments)}return l}()}}}},45617:function(D,p,e){e.r(p),e.d(p,{texts:function(){return c}});const c=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:1},{value:"\u8BF4\u660E",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:1},{value:"value",paraId:2,tocIndex:1},{value:"\u503C",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"\u662F",paraId:2,tocIndex:1}]}}]);
