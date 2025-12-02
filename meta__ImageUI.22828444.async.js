"use strict";(self.webpackChunkbsign_ui=self.webpackChunkbsign_ui||[]).push([[854],{47029:function(M,v,e){var c;e.r(v),e.d(v,{demos:function(){return z}});var A=e(27424),P=e.n(A),C=e(17061),l=e.n(C),R=e(17156),m=e.n(R),u=e(67294),f=e(50940),y=e(82883),z={"imageui-demo-0":{component:u.memo(u.lazy(m()(l()().mark(function d(){var o,a,r,s,i,n,I;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=t.sent,a=o.default,t.next=6,Promise.resolve().then(e.bind(e,50940));case 6:return r=t.sent,s=r.Space,t.next=10,Promise.resolve().then(e.bind(e,82883));case 10:return i=t.sent,n=i.ImageUI,I=function(){return a.createElement(s,null,a.createElement(n,{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:200,height:200}),a.createElement(n,{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:200,height:200,maskType:2}),a.createElement(n,{src:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",width:200,height:200,maskType:3}))},t.abrupt("return",{default:I});case 14:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"imageui-demo-0",refAtomIds:["ImageUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space } from 'antd';
import { ImageUI } from 'bsign-ui';

const App: React.FC = () => (
  <Space>
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} />
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} maskType={2} />
    <ImageUI src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width={200} height={200} maskType={3} />
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.0.0"},"bsign-ui":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{react:c||(c=e.t(u,2)),antd:f,"bsign-ui":y},renderOpts:{compile:function(){var d=m()(l()().mark(function a(){var r,s=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,s));case 3:case"end":return n.stop()}},a)}));function o(){return d.apply(this,arguments)}return o}()}},"imageui-demo-1":{component:u.memo(u.lazy(m()(l()().mark(function d(){var o,a,r,s,i,n,I;return l()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=t.sent,a=o.default,t.next=6,Promise.resolve().then(e.bind(e,50940));case 6:return r=t.sent,s=r.Space,t.next=10,Promise.resolve().then(e.bind(e,82883));case 10:return i=t.sent,n=i.ImageUI,I=function(){var p=["https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp","https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp","https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"],h="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp";return a.createElement(s,null,a.createElement(n.PreviewGroupUI,{items:p},a.createElement(n,{width:200,src:h})),a.createElement(n.PreviewGroupUI,{items:p},a.createElement(n,{maskType:2,width:200,src:h}),a.createElement(n,{maskType:3,width:200,src:h})))},t.abrupt("return",{default:I});case 14:case"end":return t.stop()}},d)})))),asset:{type:"BLOCK",id:"imageui-demo-1",refAtomIds:["ImageUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space } from 'antd';
import { ImageUI } from 'bsign-ui';

const App: React.FC = () => {
  const items = [
    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
  ];

  const src = 'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp';

  return (
    <Space>
      <ImageUI.PreviewGroupUI items={items}>
        <ImageUI width={200} src={src} />
      </ImageUI.PreviewGroupUI>

      <ImageUI.PreviewGroupUI items={items}>
        <ImageUI maskType={2} width={200} src={src} />
        <ImageUI maskType={3} width={200} src={src} />
      </ImageUI.PreviewGroupUI>
    </Space>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.0.0"},"bsign-ui":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{react:c||(c=e.t(u,2)),antd:f,"bsign-ui":y},renderOpts:{compile:function(){var d=m()(l()().mark(function a(){var r,s=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,s));case 3:case"end":return n.stop()}},a)}));function o(){return d.apply(this,arguments)}return o}()}},"imageui-demo-2":{component:u.memo(u.lazy(m()(l()().mark(function d(){var o,a,r,s,i,n,I,g,t;return l()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return o=p.sent,a=o.default,r=o.useState,p.next=7,Promise.resolve().then(e.bind(e,50940));case 7:return s=p.sent,i=s.Button,n=s.Space,p.next=12,Promise.resolve().then(e.bind(e,82883));case 12:return I=p.sent,g=I.ImageUI,t=function(){var T=r(!1),U=P()(T,2),B=U[0],j=U[1],L=r(!1),O=P()(L,2),W=O[0],w=O[1],D=["https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp","https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp","https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp"],S="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png";return a.createElement(a.Fragment,null,a.createElement(n,null,a.createElement(i,{type:"primary",onClick:function(){return j(!0)}},"\u9884\u89C8-\u591A\u5F20\u56FE\u7247"),a.createElement(i,{type:"primary",onClick:function(){return w(!0)}},"\u9884\u89C8-\u5355\u5F20\u56FE\u7247")),a.createElement(n,null,a.createElement(g.PreviewGroupUI,{preview:{open:B,onOpenChange:function(x){return j(x)}},items:D})),a.createElement(g,{style:{display:"none"},preview:{open:W,src:S,onOpenChange:function(x){return w(x)}},src:S,width:200,height:200}))},p.abrupt("return",{default:t});case 16:case"end":return p.stop()}},d)})))),asset:{type:"BLOCK",id:"imageui-demo-2",refAtomIds:["ImageUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React, { useState } from 'react';
import { Button, Space } from 'antd';
import { ImageUI } from 'bsign-ui';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [singleOpen, setSingleOpen] = useState(false);

  const items = [
    'https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp',
    'https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp',
  ];

  const src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
  return (
    <>
      <Space>
        <Button type="primary" onClick={() => setOpen(true)}>
          \u9884\u89C8-\u591A\u5F20\u56FE\u7247
        </Button>
        <Button type="primary" onClick={() => setSingleOpen(true)}>
          \u9884\u89C8-\u5355\u5F20\u56FE\u7247
        </Button>
      </Space>
      <Space>
        <ImageUI.PreviewGroupUI
          preview={{
            open,
            onOpenChange: (value) => setOpen(value),
          }}
          items={items}
        />
      </Space>
      <ImageUI
        style={{ display: 'none' }}
        preview={{
          open: singleOpen,
          src: src,
          onOpenChange: (value) => setSingleOpen(value),
        }}
        src={src}
        width={200}
        height={200}
      />
    </>
  );
};
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.0.0"},"bsign-ui":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{react:c||(c=e.t(u,2)),antd:f,"bsign-ui":y},renderOpts:{compile:function(){var d=m()(l()().mark(function a(){var r,s=arguments;return l()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.e(250).then(e.bind(e,90250));case 2:return n.abrupt("return",(r=n.sent).default.apply(r,s));case 3:case"end":return n.stop()}},a)}));function o(){return d.apply(this,arguments)}return o}()}}}},48932:function(M,v,e){e.r(v),e.d(v,{texts:function(){return c}});const c=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u{1F48E} \u76F8\u518C\u6A21\u5F0F",paraId:1},{value:"\u{1F48E} \u53D7\u63A7\u6A21\u5F0F",paraId:2},{value:"ImageUI \u5F15\u7528 Ant Design \u7EC4\u4EF6\u5E93\uFF0C\u5728\u4F7F\u7528\u8FC7\u7A0B\u4E2D\u4E0D\u505A\u5982\u4F55\u4FB5\u5165\u6027\u7684\u66F4\u6539",paraId:3,tocIndex:1},{value:"\u5C5E\u6027",paraId:4,tocIndex:1},{value:"\u8BF4\u660E",paraId:4,tocIndex:1},{value:"\u7C7B\u578B",paraId:4,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:4,tocIndex:1},{value:"src",paraId:4,tocIndex:1},{value:"\u5730\u5740",paraId:4,tocIndex:1},{value:"String",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u662F",paraId:4,tocIndex:1},{value:"width",paraId:4,tocIndex:1},{value:"\u5BBD\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"height",paraId:4,tocIndex:1},{value:"\u957F\u5EA6",paraId:4,tocIndex:1},{value:"number",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"preview",paraId:4,tocIndex:1},{value:"\u662F\u5426\u53EF\u9884\u89C8",paraId:4,tocIndex:1},{value:"Boolean",paraId:4,tocIndex:1},{value:"true",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"maskType",paraId:4,tocIndex:1},{value:"\u8499\u5C42\u7C7B\u578B",paraId:4,tocIndex:1},{value:"Number",paraId:4,tocIndex:1},{value:"1",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"className",paraId:4,tocIndex:1},{value:"\u7C7B\u540D",paraId:4,tocIndex:1},{value:"String",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"style",paraId:4,tocIndex:1},{value:"\u6837\u5F0F",paraId:4,tocIndex:1},{value:"React.CSSProperties",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"clickOtherButton",paraId:4,tocIndex:1},{value:"\u70B9\u51FB\u8499\u5C42\u53F3\u8FB9\u6309\u94AE\u540E\u56DE\u8C03",paraId:4,tocIndex:1},{value:"()=>void",paraId:4,tocIndex:1},{value:"-",paraId:4,tocIndex:1},{value:"\u5426",paraId:4,tocIndex:1},{value:"PreviewGroupUI",paraId:5,tocIndex:1},{value:"\u5C5E\u6027",paraId:6,tocIndex:1},{value:"\u8BF4\u660E",paraId:6,tocIndex:1},{value:"\u7C7B\u578B",paraId:6,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:6,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:6,tocIndex:1},{value:"item",paraId:6,tocIndex:1},{value:"\u9884\u89C8\u6570\u7EC4",paraId:6,tocIndex:1},{value:"string[] | { src: string, crossOrigin: string, ... }[]",paraId:6,tocIndex:1},{value:"-",paraId:6,tocIndex:1},{value:"\u662F",paraId:6,tocIndex:1},{value:"preview",paraId:6,tocIndex:1},{value:"\u662F\u5426\u53EF\u9884\u89C8",paraId:6,tocIndex:1},{value:"Boolean | PreviewGroupType(\u53EF\u53C2\u8003 antd)",paraId:6,tocIndex:1},{value:"true",paraId:6,tocIndex:1},{value:"\u5426",paraId:6,tocIndex:1},{value:"children",paraId:6,tocIndex:1},{value:"\u5B50\u8282\u70B9",paraId:6,tocIndex:1},{value:"ReactNode",paraId:6,tocIndex:1},{value:"-",paraId:6,tocIndex:1},{value:"\u5426",paraId:6,tocIndex:1}]}}]);
