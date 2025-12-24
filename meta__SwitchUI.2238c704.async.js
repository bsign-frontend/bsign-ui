"use strict";(self.webpackChunkbsign_ui=self.webpackChunkbsign_ui||[]).push([[3280],{52858:function(D,_,e){var c;e.r(_),e.d(_,{demos:function(){return T}});var U=e(97857),M=e.n(U),j=e(15009),o=e.n(j),L=e(5574),v=e.n(L),R=e(99289),f=e.n(R),t=e(67294),F=e(17557),O=e(82883),T={"switchui-demo-0":{component:t.memo(t.lazy(f()(o()().mark(function m(){var l,i,s,r,d,n,p;return o()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=a.sent,i=l.useState,a.next=6,Promise.resolve().then(e.bind(e,17557));case 6:return s=a.sent,r=s.Space,a.next=10,Promise.resolve().then(e.bind(e,82883));case 10:return d=a.sent,n=d.SwitchUI,p=function(){var A=i(1),I=v()(A,2),E=I[0],P=I[1],g=i(1),h=v()(g,2),b=h[0],y=h[1];return t.createElement(r,null,t.createElement(n,{checked:E===1,onClick:function(){return P(E===1?2:1)}}),t.createElement(n,{checkedChildren:"\u542F\u7528",unCheckedChildren:"\u7981\u7528",checked:b===1,onClick:function(){return y(b===1?2:1)}}))},a.abrupt("return",{default:p});case 14:case"end":return a.stop()}},m)})))),asset:{type:"BLOCK",id:"switchui-demo-0",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.29.3"},"bsign-ui":{type:"NPM",value:"0.0.5"}},entry:"index.tsx"},context:{react:c||(c=e.t(t,2)),antd:F,"bsign-ui":O},renderOpts:{compile:function(){var m=f()(o()().mark(function i(){var s,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,r));case 3:case"end":return n.stop()}},i)}));function l(){return m.apply(this,arguments)}return l}()}},"switchui-demo-1":{component:t.memo(t.lazy(f()(o()().mark(function m(){var l,i,s,r,d,n,p,S;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return l=u.sent,i=l.useState,u.next=6,Promise.resolve().then(e.bind(e,17557));case 6:return s=u.sent,r=s.Form,u.next=10,Promise.resolve().then(e.bind(e,82883));case 10:return d=u.sent,n=d.SwitchUI,p={status:1},S=function(){var I=r.useForm(),E=v()(I,1),P=E[0],g=i(),h=v()(g,2),b=h[0],y=h[1],C=function(B){y(M()(M()({},b),B))};return t.createElement(r,{onFinish:C,form:P,initialValues:p},t.createElement(r.Item,{label:"\u662F\u5426\u542F\u7528",name:"status"},t.createElement(n,null)))},u.abrupt("return",{default:S});case 15:case"end":return u.stop()}},m)})))),asset:{type:"BLOCK",id:"switchui-demo-1",refAtomIds:["SwitchUI"],dependencies:{"index.tsx":{type:"FILE",value:`import { useState } from 'react';
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
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"5.29.3"},"bsign-ui":{type:"NPM",value:"0.0.5"}},entry:"index.tsx"},context:{react:c||(c=e.t(t,2)),antd:F,"bsign-ui":O},renderOpts:{compile:function(){var m=f()(o()().mark(function i(){var s,r=arguments;return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,r));case 3:case"end":return n.stop()}},i)}));function l(){return m.apply(this,arguments)}return l}()}}}},45617:function(D,_,e){e.r(_),e.d(_,{texts:function(){return c}});const c=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u{1F48E} From \u8868\u5355\u5185\u90E8\u4F7F\u7528",paraId:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:1},{value:"\u8BF4\u660E",paraId:2,tocIndex:1},{value:"\u7C7B\u578B",paraId:2,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:1},{value:"value",paraId:2,tocIndex:1},{value:"\u503C",paraId:2,tocIndex:1},{value:"number",paraId:2,tocIndex:1},{value:"-",paraId:2,tocIndex:1},{value:"\u662F",paraId:2,tocIndex:1}]}}]);
