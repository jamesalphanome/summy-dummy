"use strict";var e=require("react"),r=require("sucrase"),t=require("recharts"),n=require("lucide-react"),o=require("react-live-runner");function a(e){var r=Object.create(null);return e&&Object.keys(e).forEach((function(t){if("default"!==t){var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,n.get?n:{enumerable:!0,get:function(){return e[t]}})}})),r.default=e,Object.freeze(r)}var s=a(n),c=function(){return c=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++)for(var o in r=arguments[t])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},c.apply(this,arguments)};function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}"function"==typeof SuppressedError&&SuppressedError;const l=/^(\s*)(<[^>]*>|function[(\s]|\(\)[\s=]|class\s)(.*)/,u=["default","import"],d=t=>{const{code:n,scope:o}=t;if(!n.trim())return null;const a={};((r,t)=>{const{import:n}=t,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r.indexOf(t=a[n])>=0||(o[t]=e[t]);return o}(t,u),a=i({React:e,require:p(n)},o),s=Object.keys(a),c=s.map((e=>a[e]));new Function(...s,r)(...c)})((e=>r.transform(e,{transforms:["jsx","typescript","imports"],production:!0}).code.substring(13))((e=>e.replace(l,"$1export default $2$3"))(n)),i({render:e=>{a.default=e}},o,{exports:a}));const s=a.default;return s?e.isValidElement(s)?s:"function"==typeof s?e.createElement(s):"string"==typeof s?s:null:null},p=(e={})=>r=>{if(!e.hasOwnProperty(r))throw new Error(`Module not found: '${r}'`);return e[r]};class f extends e.Component{constructor(...e){super(...e),this.state={element:null,error:null,prevCode:null,prevScope:void 0}}static getDerivedStateFromProps(e,r){if(r.prevCode===e.code&&r.prevScope===e.scope)return null;try{return{element:d(e),error:null,prevCode:e.code,prevScope:e.scope}}catch(r){return{element:null,error:r,prevCode:e.code,prevScope:e.scope}}}static getDerivedStateFromError(e){return{error:e}}componentDidMount(){var e,r;null==(e=(r=this.props).onRendered)||e.call(r,this.state.error||void 0)}shouldComponentUpdate(e,r){return e.code!==this.props.code||e.scope!==this.props.scope||r.error!==this.state.error}componentDidUpdate(){var e,r;null==(e=(r=this.props).onRendered)||e.call(r,this.state.error||void 0)}render(){return this.state.error?null:this.state.element}}var m={AreaChart:t.AreaChart,BarChart:t.BarChart,LineChart:t.LineChart,ComposedChart:t.ComposedChart,PieChart:t.PieChart,RadarChart:t.RadarChart,RadialBarChart:t.RadialBarChart,ScatterChart:t.ScatterChart,FunnelChart:t.FunnelChart,Treemap:t.Treemap,ResponsiveContainer:t.ResponsiveContainer,Legend:t.Legend,Tooltip:t.Tooltip,Cell:t.Cell,Text:t.Text,Label:t.Label,LabelList:t.LabelList,Customized:t.Customized,Area:t.Area,Bar:t.Bar,Line:t.Line,Scatter:t.Scatter,XAxis:t.XAxis,YAxis:t.YAxis,ZAxis:t.ZAxis,Brush:t.Brush,CartesianAxis:t.CartesianAxis,CartesianGrid:t.CartesianGrid,ReferenceLine:t.ReferenceLine,ReferenceDot:t.ReferenceDot,ReferenceArea:t.ReferenceArea,ErrorBar:t.ErrorBar,Funnel:t.Funnel,Cross:t.Cross,Curve:t.Curve,Dot:t.Dot,Polygon:t.Polygon,Rectangle:t.Rectangle,Sector:t.Sector,Pie:t.Pie,Radar:t.Radar,RadialBar:t.RadialBar,PolarAngleAxis:t.PolarAngleAxis,PolarGrid:t.PolarGrid,PolarRadiusAxis:t.PolarRadiusAxis},v=Object.keys(s).filter((function(e){return"function"==typeof s[e]||"object"==typeof s[e]})).reduce((function(e,r){return e[r]=s[r],e}),{}),h={React:e,useState:e.useState,useEffect:e.useEffect,useContext:e.useContext,useReducer:e.useReducer,useRef:e.useRef,useMemo:e.useMemo,useCallback:e.useCallback},C=c(c(c({},v),m),h);exports.CheckReactCode=function(r){var t=r.code,n=r.scope,o=r.returnError,a=void 0===o?function(){}:o,s=(({code:r,scope:t,disableCache:n})=>{const o=e.useRef(!0),a=e.useRef(null),[s,c]=e.useState((()=>{const o=e.createElement(f,{code:r,scope:t,onRendered:e=>{e?c({element:n?null:a.current,error:e.toString()}):a.current=o}});return{element:o,error:null}}));return e.useEffect((()=>{if(o.current)return void(o.current=!1);const s=e.createElement(f,{code:r,scope:t,onRendered:e=>{e?c({element:n?null:a.current,error:e.toString()}):a.current=s}});c({element:s,error:null})}),[r,t,n]),s})({code:t,scope:e.useMemo((function(){return c(c({},C),n)}),[C,n]),disableCache:!0}),i=s.element,l=s.error;return e.useEffect((function(){a(l)}),[l,a]),e.createElement("div",{style:{display:"none"}},i)},exports.JamButton=function(r){var t=r.initialMessage,n=void 0===t?"":t,o=e.useState(n),a=o[0],s=o[1];return e.createElement("div",{className:"flex flex-col items-center justify-center space-y-4"},e.createElement("p",{className:"text-xl text-gray-800"},a),e.createElement("button",{onClick:function(){s("Hello, from JT :)")},className:"px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"},"Click me"))},exports.ReactCanvas=function(r){var t=r.code,n=r.scope,a=r.showPreview,s=void 0===a||a,i=r.showEditor,l=void 0!==i&&i,u=r.showError,d=void 0!==u&&u,p=e.useMemo((function(){return c(c({},C),n)}),[C,n]);return e.createElement("div",null,e.createElement(o.LiveProvider,{code:t,scope:p},s&&e.createElement(o.LivePreview,null),d&&e.createElement(o.LiveError,null),l&&e.createElement(o.LiveEditor,null)))};
//# sourceMappingURL=index.js.map
