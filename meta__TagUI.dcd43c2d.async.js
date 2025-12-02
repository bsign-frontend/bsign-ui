"use strict";(self.webpackChunkbsign_ui=self.webpackChunkbsign_ui||[]).push([[6116],{34224:function(O,v,n){var m;n.r(v),n.d(v,{demos:function(){return C}});var P=n(17061),o=n.n(P),R=n(17156),y=n.n(R),I=n(67294),U=n(50940),E=n(82883),h=n(16704),C={"tagui-demo-0":{component:I.memo(I.lazy(y()(o()().mark(function s(){var p,t,a,i,d,e,c;return o()().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return p=r.sent,t=p.default,r.next=6,Promise.resolve().then(n.bind(n,50940));case 6:return a=r.sent,i=a.Space,r.next=10,Promise.resolve().then(n.bind(n,82883));case 10:return d=r.sent,e=d.TagUI,c=function(){return t.createElement(i,{wrap:!0},t.createElement(e,null,"\u7070\u8272"),t.createElement(e,{type:"primary"},"\u4E3B\u9898\u8272"),t.createElement(e,{type:1},"\u7EFF\u8272"),t.createElement(e,{type:2},"\u7D2B\u8272"),t.createElement(e,{type:3},"\u84DD\u8272"),t.createElement(e,{type:4},"\u7070\u8272"),t.createElement(e,{type:5},"\u9EC4\u8272"),t.createElement(e,{type:6},"\u7EA2\u8272"),t.createElement(e,{type:7},"\u6DF1\u7EA2"),t.createElement(e,{type:8},"\u6DE1\u9752"),t.createElement(e,{type:9},"\u7C89\u7EA2"),t.createElement(e,{type:10},"\u6A44\u6984\u8272"),t.createElement(e,{type:1,size:"large"},"\u603B\u91D1\u989D"))},r.abrupt("return",{default:c});case 14:case"end":return r.stop()}},s)})))),asset:{type:"BLOCK",id:"tagui-demo-0",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space } from 'antd';
import { TagUI } from 'bsign-ui';

const App: React.FC = () => (
  <Space wrap>
    <TagUI>\u7070\u8272</TagUI>
    <TagUI type="primary">\u4E3B\u9898\u8272</TagUI>
    <TagUI type={1}>\u7EFF\u8272</TagUI>
    <TagUI type={2}>\u7D2B\u8272</TagUI>
    <TagUI type={3}>\u84DD\u8272</TagUI>
    <TagUI type={4}>\u7070\u8272</TagUI>
    <TagUI type={5}>\u9EC4\u8272</TagUI>
    <TagUI type={6}>\u7EA2\u8272</TagUI>
    <TagUI type={7}>\u6DF1\u7EA2</TagUI>
    <TagUI type={8}>\u6DE1\u9752</TagUI>
    <TagUI type={9}>\u7C89\u7EA2</TagUI>
    <TagUI type={10}>\u6A44\u6984\u8272</TagUI>
    <TagUI type={1} size="large">
      \u603B\u91D1\u989D
    </TagUI>
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.0.0"},"bsign-ui":{type:"NPM",value:"0.0.3"}},entry:"index.tsx"},context:{react:m||(m=n.t(I,2)),antd:U,"bsign-ui":E},renderOpts:{compile:function(){var s=y()(o()().mark(function t(){var a,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,i));case 3:case"end":return e.stop()}},t)}));function p(){return s.apply(this,arguments)}return p}()}},"tagui-demo-1":{component:I.memo(I.lazy(y()(o()().mark(function s(){var p,t,a,i,d,e,c,g,r,T,l,f;return o()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return p=u.sent,t=p.default,u.next=6,Promise.resolve().then(n.bind(n,50940));case 6:return a=u.sent,i=a.Space,u.next=10,Promise.resolve().then(n.bind(n,82883));case 10:return d=u.sent,e=d.TagUI,u.next=14,Promise.resolve().then(n.bind(n,16704));case 14:return c=u.sent,g=c.CheckOne,r=c.Currency,T=c.RotateOne,l=c.UTurnLeft,f=function(){return t.createElement(i,{wrap:!0},t.createElement(e,{type:1},"\u7EFF\u8272"),t.createElement(e,{type:2,icon:t.createElement(r,null)},"\u7D2B\u8272"),t.createElement(e,{type:3,icon:t.createElement(g,null)},"\u84DD\u8272"),t.createElement(e,{type:4,icon:t.createElement(l,null)},"\u7070\u8272"),t.createElement(e,{type:5,icon:t.createElement(T,null)},"\u9EC4\u8272"),t.createElement(e,{dataIndex:2,options:[{value:1,label:"\u5F85\u7B7E\u7EA6"},{value:2,label:"\u5DF2\u7B7E\u7EA6"}]}),t.createElement(e,{type:1,size:"large",icon:t.createElement(T,null)},"\u603B\u91D1\u989D"))},u.abrupt("return",{default:f});case 21:case"end":return u.stop()}},s)})))),asset:{type:"BLOCK",id:"tagui-demo-1",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space } from 'antd';
import { IconUI, TagUI } from 'bsign-ui';
import { CheckOne, CloseOne, Currency, DataFour, RotateOne, UTurnLeft } from '@icon-park/react';

const App: React.FC = () => (
  <Space wrap>
    <TagUI type={1}>\u7EFF\u8272</TagUI>
    <TagUI type={2} icon={<Currency />}>
      \u7D2B\u8272
    </TagUI>
    <TagUI type={3} icon={<CheckOne />}>
      \u84DD\u8272
    </TagUI>
    <TagUI type={4} icon={<UTurnLeft />}>
      \u7070\u8272
    </TagUI>
    <TagUI type={5} icon={<RotateOne />}>
      \u9EC4\u8272
    </TagUI>
    <TagUI
      dataIndex={2}
      options={[
        { value: 1, label: '\u5F85\u7B7E\u7EA6' },
        { value: 2, label: '\u5DF2\u7B7E\u7EA6' },
      ]}
    ></TagUI>
    <TagUI type={1} size="large" icon={<RotateOne />}>
      \u603B\u91D1\u989D
    </TagUI>
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.0.0"},"bsign-ui":{type:"NPM",value:"0.0.3"},"@icon-park/react":{type:"NPM",value:"1.4.2"}},entry:"index.tsx"},context:{react:m||(m=n.t(I,2)),antd:U,"bsign-ui":E,"@icon-park/react":h},renderOpts:{compile:function(){var s=y()(o()().mark(function t(){var a,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,i));case 3:case"end":return e.stop()}},t)}));function p(){return s.apply(this,arguments)}return p}()}},"tagui-demo-2":{component:I.memo(I.lazy(y()(o()().mark(function s(){var p,t,a,i,d,e,c,g,r;return o()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return p=l.sent,t=p.default,l.next=6,Promise.resolve().then(n.bind(n,50940));case 6:return a=l.sent,i=a.Space,l.next=10,Promise.resolve().then(n.bind(n,82883));case 10:return d=l.sent,e=d.TagUI,l.next=14,Promise.resolve().then(n.bind(n,16704));case 14:return c=l.sent,g=c.RotateOne,r=function(){return t.createElement(i,{wrap:!0},t.createElement(e,{type:"primary",title:"\u5BA1\u6838\u72B6\u6001"},"\u4E3B\u9898\u8272"),t.createElement(e,{type:1,title:"\u5BA1\u6838\u72B6\u6001"},"\u7EFF\u8272"),t.createElement(e,{type:2,title:"\u5BA1\u6838\u72B6\u6001"},"\u7D2B\u8272"),t.createElement(e,{type:3,title:"\u5BA1\u6838\u72B6\u6001"},"\u84DD\u8272"),t.createElement(e,{type:4,title:"\u5BA1\u6838\u72B6\u6001"},"\u7070\u8272"),t.createElement(e,{type:5,title:"\u5BA1\u6838\u72B6\u6001"},"\u9EC4\u8272"),t.createElement(e,{type:6,title:"\u5BA1\u6838\u72B6\u6001"},"\u7EA2\u8272"),t.createElement(e,{type:7,title:"\u5BA1\u6838\u72B6\u6001"},"\u6DF1\u7EA2"),t.createElement(e,{type:8,title:"\u5BA1\u6838\u72B6\u6001",icon:t.createElement(g,null)},"\u6DE1\u9752"),t.createElement(e,{type:9,title:"\u5BA1\u6838\u72B6\u6001",icon:t.createElement(g,null)},"\u7C89\u7EA2"),t.createElement(e,{type:10,title:"\u5BA1\u6838\u72B6\u6001",icon:t.createElement(g,null)},"\u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272"))},l.abrupt("return",{default:r});case 18:case"end":return l.stop()}},s)})))),asset:{type:"BLOCK",id:"tagui-demo-2",refAtomIds:["TagUI"],dependencies:{"index.tsx":{type:"FILE",value:`import React from 'react';
import { Space } from 'antd';
import { TagUI } from 'bsign-ui';
import { CheckOne, CloseOne, Currency, DataFour, RotateOne, UTurnLeft } from '@icon-park/react';

const App: React.FC = () => (
  <Space wrap>
    <TagUI type="primary" title="\u5BA1\u6838\u72B6\u6001">
      \u4E3B\u9898\u8272
    </TagUI>
    <TagUI type={1} title="\u5BA1\u6838\u72B6\u6001">
      \u7EFF\u8272
    </TagUI>
    <TagUI type={2} title="\u5BA1\u6838\u72B6\u6001">
      \u7D2B\u8272
    </TagUI>
    <TagUI type={3} title="\u5BA1\u6838\u72B6\u6001">
      \u84DD\u8272
    </TagUI>
    <TagUI type={4} title="\u5BA1\u6838\u72B6\u6001">
      \u7070\u8272
    </TagUI>
    <TagUI type={5} title="\u5BA1\u6838\u72B6\u6001">
      \u9EC4\u8272
    </TagUI>
    <TagUI type={6} title="\u5BA1\u6838\u72B6\u6001">
      \u7EA2\u8272
    </TagUI>
    <TagUI type={7} title="\u5BA1\u6838\u72B6\u6001">
      \u6DF1\u7EA2
    </TagUI>
    <TagUI type={8} title="\u5BA1\u6838\u72B6\u6001" icon={<RotateOne />}>
      \u6DE1\u9752
    </TagUI>
    <TagUI type={9} title="\u5BA1\u6838\u72B6\u6001" icon={<RotateOne />}>
      \u7C89\u7EA2
    </TagUI>
    <TagUI type={10} title="\u5BA1\u6838\u72B6\u6001" icon={<RotateOne />}>
      \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272 \u6A44\u6984\u8272
    </TagUI>
  </Space>
);
export default App;`},react:{type:"NPM",value:"18.3.1"},antd:{type:"NPM",value:"6.0.0"},"bsign-ui":{type:"NPM",value:"0.0.3"},"@icon-park/react":{type:"NPM",value:"1.4.2"}},entry:"index.tsx"},context:{react:m||(m=n.t(I,2)),antd:U,"bsign-ui":E,"@icon-park/react":h},renderOpts:{compile:function(){var s=y()(o()().mark(function t(){var a,i=arguments;return o()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(250).then(n.bind(n,90250));case 2:return e.abrupt("return",(a=e.sent).default.apply(a,i));case 3:case"end":return e.stop()}},t)}));function p(){return s.apply(this,arguments)}return p}()}}}},7461:function(O,v,n){n.r(v),n.d(v,{texts:function(){return m}});const m=[{value:"\u{1F48E} \u57FA\u7840\u4F7F\u7528",paraId:0,tocIndex:0},{value:"\u{1F48E} \u4F7F\u7528 icon",paraId:1},{value:"\u{1F48E} \u5E26\u6807\u9898\u4F7F\u7528",paraId:2},{value:"\u5C5E\u6027",paraId:3,tocIndex:1},{value:"\u8BF4\u660E",paraId:3,tocIndex:1},{value:"\u7C7B\u578B",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u503C",paraId:3,tocIndex:1},{value:"\u662F\u5426\u5FC5\u4F20",paraId:3,tocIndex:1},{value:"title",paraId:3,tocIndex:1},{value:"\u662F\u5426\u6709\u6807\u9898",paraId:3,tocIndex:1},{value:"String",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"\u5426",paraId:3,tocIndex:1},{value:"type",paraId:3,tocIndex:1},{value:"\u989C\u8272\u7C7B\u578B",paraId:3,tocIndex:1},{value:"Number",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"\u5426",paraId:3,tocIndex:1},{value:"icon",paraId:3,tocIndex:1},{value:"Icon",paraId:3,tocIndex:1},{value:"ReactNode",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"\u5426",paraId:3,tocIndex:1},{value:"className",paraId:3,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u7C7B\u540D",paraId:3,tocIndex:1},{value:"Any",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"\u5426",paraId:3,tocIndex:1},{value:"style",paraId:3,tocIndex:1},{value:"\u81EA\u5B9A\u4E49\u6837\u5F0F",paraId:3,tocIndex:1},{value:"Any",paraId:3,tocIndex:1},{value:"-",paraId:3,tocIndex:1},{value:"\u5426",paraId:3,tocIndex:1}]}}]);
