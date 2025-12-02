"use strict";(self.webpackChunkbsign_ui=self.webpackChunkbsign_ui||[]).push([[614],{57073:function(D,o,e){var d;e.r(o),e.d(o,{demos:function(){return L}});var R=e(17061),m=e.n(R),k=e(42122),l=e.n(k),A=e(27424),p=e.n(A),U=e(17156),O=e.n(U),v=e(67294),V=e(50940),j=e(82883),L={"filterui-demo-0":{component:v.memo(v.lazy(O()(m()().mark(function _(){var i,u,s,c,I,n,x,M;return m()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return i=a.sent,u=i.default,s=i.useState,a.next=7,Promise.resolve().then(e.bind(e,50940));case 7:return c=a.sent,I=c.Form,a.next=11,Promise.resolve().then(e.bind(e,82883));case 11:return n=a.sent,x=n.FilterUI,M=function(){var f,B=I.useForm(),K=p()(B,1),$=K[0],N=s(null),S=p()(N,2),W=S[0],G=S[1],z=s({choice:!1,multipleChoice:[],filterParams:{Status:1},tableSetStatus:!1,moreFilters:!1}),T=p()(z,2),t=T[0],b=T[1],y=[{value:1,label:"\u5F85\u652F\u4ED8"},{value:2,label:"\u5BA1\u6838\u4E2D"},{value:3,label:"\u53D1\u653E\u4E2D"},{value:4,label:"\u5DF2\u53D1\u653E"},{value:5,label:"\u5DF2\u53D6\u6D88"},{value:6,label:"\u9A73\u56DE"}],H=function(C,r){var P,h,E,g;b(l()(l()({},t),{},{filterParams:l()(l()({},r),{},{dateStart:(P=r==null||(h=r.submitTime)===null||h===void 0?void 0:h[0])!==null&&P!==void 0?P:void 0,dateEnd:(E=r==null||(g=r.submitTime)===null||g===void 0?void 0:g[1])!==null&&E!==void 0?E:void 0})}))},J=[{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName1"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime1"},{type:"select",label:"\u72B6\u6001",key:"Status1",options:y},{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName2"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime2"},{type:"select",label:"\u72B6\u6001",key:"Status2",options:y,isNotDelete:!0,renderProps:{}},{type:"search",label:"\u4F01\u4E1A\u540D\u79F0",key:"companyName"},{type:"datePicker",label:"\u53D1\u653E\u65E5\u671F",key:"transTime"},{type:"select",label:"\u72B6\u6001",key:"Status",options:y}],Q=function(){b(l()(l()({},t),{},{filterParams:{}}))};return u.createElement("div",{ref:G},u.createElement(x,{form:$,filterOptions:J,filterParams:(f=t==null?void 0:t.filterParams)!==null&&f!==void 0?f:{},moreFilters:t==null?void 0:t.moreFilters,setMoreFilters:function(C){return b(l()(l()({},t),{},{moreFilters:C}))},onValuesChange:H,clickReset:Q,container:W}))},a.abrupt("return",{default:M});case 15:case"end":return a.stop()}},_)})))),asset:{type:"BLOCK",id:"filterui-demo-0",refAtomIds:["FilterUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useEffect, useState } from 'react';
import { Form, message } from 'antd';
import { FilterUI } from 'bsign-ui';

const App: React.FC = () => {
  const [form] = Form.useForm();

  const [container, setContainer] = useState(null);
  // \u72B6\u6001\u5BB9\u5668
  const [vessel, setVessel] = useState({
    // \u662F\u5426\u6279\u91CF
    choice: false,
    // \u6279\u91CF\u7684\u503C
    multipleChoice: [],
    // \u641C\u7D22\u6761\u4EF6
    filterParams: {
      Status: 1,
    },
    // \u8868\u683C\u8BBE\u7F6E\u72B6\u6001
    tableSetStatus: false,
    // \u66F4\u591A\u7B5B\u9009\u7684\u72B6\u6001
    moreFilters: false,
  });
  const projectStatusOptions = [
    { value: 1, label: '\u5F85\u652F\u4ED8' },
    { value: 2, label: '\u5BA1\u6838\u4E2D' },
    { value: 3, label: '\u53D1\u653E\u4E2D' },
    { value: 4, label: '\u5DF2\u53D1\u653E' },
    { value: 5, label: '\u5DF2\u53D6\u6D88' },
    { value: 6, label: '\u9A73\u56DE' },
  ];
  const onValuesChange = (changedValues: any, allValues: any) => {
    setVessel({
      ...vessel,
      filterParams: {
        ...allValues,
        dateStart: allValues?.submitTime?.[0] ?? undefined,
        dateEnd: allValues?.submitTime?.[1] ?? undefined,
      },
    });
  };
  const filterOptions = [
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName1' },
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime1' },
    { type: 'select', label: '\u72B6\u6001', key: 'Status1', options: projectStatusOptions },
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName2' },
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime2' },
    { type: 'select', label: '\u72B6\u6001', key: 'Status2', options: projectStatusOptions, isNotDelete: true, renderProps: {} },
    { type: 'search', label: '\u4F01\u4E1A\u540D\u79F0', key: 'companyName' },
    { type: 'datePicker', label: '\u53D1\u653E\u65E5\u671F', key: 'transTime' },
    { type: 'select', label: '\u72B6\u6001', key: 'Status', options: projectStatusOptions },
  ];
  const clickReset = () => {
    setVessel({ ...vessel, filterParams: {} });
  };
  return (
    <div ref={setContainer}>
      <FilterUI
        form={form}
        filterOptions={filterOptions}
        filterParams={vessel?.filterParams ?? {}}
        moreFilters={vessel?.moreFilters}
        setMoreFilters={(value) => setVessel({ ...vessel, moreFilters: value })}
        onValuesChange={onValuesChange}
        clickReset={clickReset}
        container={container}
      />
    </div>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.0.0"},"bsign-ui":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{react:d||(d=e.t(v,2)),antd:V,"bsign-ui":j},renderOpts:{compile:function(){var _=O()(m()().mark(function u(){var s,c=arguments;return m()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(s=n.sent).default.apply(s,c));case 3:case"end":return n.stop()}},u)}));function i(){return _.apply(this,arguments)}return i}()}}}},30434:function(D,o,e){e.r(o),e.d(o,{texts:function(){return d}});const d=[{value:"\u52A0\u8F7D\u4E2D\u7EC4\u4EF6",paraId:0},{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:1,tocIndex:1},{value:"\u5C5E\u6027",paraId:2,tocIndex:2},{value:"\u8BF4\u660E",paraId:2,tocIndex:2},{value:"\u7C7B\u578B",paraId:2,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:2},{value:"\u662F\u5426\u5FC5\u4F20",paraId:2,tocIndex:2},{value:"form",paraId:2,tocIndex:2},{value:"\u8868\u5355\u5B9E\u4F8B",paraId:2,tocIndex:2},{value:"ReactNode",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"filterOptions",paraId:2,tocIndex:2},{value:"\u641C\u7D22\u7EC4\u4EF6\u914D\u7F6E",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"filterParams",paraId:2,tocIndex:2},{value:"\u7B5B\u9009\u6846\u7684\u5B57\u6BB5\u548C\u503C",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"setMoreFilters",paraId:2,tocIndex:2},{value:"\u63A7\u5236\u66F4\u591A\u7B5B\u9009\u6846\u7684\u72B6\u6001",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"onValuesChange",paraId:2,tocIndex:2},{value:"\u8868\u5355\u503C\u53D8\u5316",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"clickReset",paraId:2,tocIndex:2},{value:"\u8868\u5355\u91CD\u7F6E\u4E8B\u4EF6",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2},{value:"container",paraId:2,tocIndex:2},{value:"\u6EDA\u52A8\u56FA\u5B9A\u6307\u5B9A\u7684\u7236\u7EA7\u5143\u7D20",paraId:2,tocIndex:2},{value:"-",paraId:2,tocIndex:2},{value:"\u662F",paraId:2,tocIndex:2}]}}]);
