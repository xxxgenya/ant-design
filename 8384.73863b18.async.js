(self.webpackChunkantd=self.webpackChunkantd||[]).push([[8384],{438746:function(le,A,n){"use strict";n.d(A,{Z:function(){return D}});var W=n(97857),y=n.n(W),s=n(952677),h=n.n(s),z=n(805574),E=n.n(z),k=n(385956),x=n(667294),$=n(302559);function C(j){return j.replace("-cn","").replace(/\/$/,"")}function D(){var j=(0,k.useLocation)(),N=j.search,B=(0,$.Z)(),L=E()(B,2),c=L[1],v=x.useCallback(function(p,r){var d=C(p);if(c==="cn"&&(d="".concat(d,"-cn")),N&&(d="".concat(d).concat(N)),r){var l;h()(r)==="object"?l=r[c]:l=r,d="".concat(d,"#").concat(l)}return d},[c,N]);return y()(y()({},j),{},{pathname:C(j.pathname),getLink:v})}},858992:function(le,A,n){"use strict";n.r(A),n.d(A,{default:function(){return nt}});var W=n(97857),y=n.n(W),s=n(667294),h=n(385956),z=n(9783),E=n.n(z),k=n(168400),x=n.n(k),$=n(805574),C=n.n($),D=n(639389),j=n.n(D),N=n(944226),B=n(11739),L=n(879587),c=n(106750),v=n(707898),p=n(647759),r=n(693967),d=n.n(r),l=n(826961),U=n.n(l),w=n(438746),e=n(785893),g=function(t){var o=t.children;return(0,e.jsx)("div",{className:"browser-mockup with-url",children:o})},P=g,K=function(t){var o=t.children,i=(0,s.useState)(!1),u=C()(i,2),m=u[0],R=u[1];return(0,s.useLayoutEffect)(function(){R(!0)},[]),m?o:null},S=K,re=function(){return(0,e.jsx)("svg",{viewBox:"0 0 15 15",fill:"currentColor",children:(0,e.jsx)("path",{d:"M14.777304,4.75062256 L7.77734505,0.0839936563 C7.60939924,-0.0279665065 7.39060662,-0.0279665065 7.22266081,0.0839936563 L0.222701813,4.75062256 C0.0836082937,4.84334851 5.66973453e-05,4.99945222 4.6875e-05,5.16662013 L4.6875e-05,9.83324903 C4.6875e-05,10.0004355 0.0836088906,10.1565596 0.222701812,10.2492466 L7.22266081,14.9158755 C7.30662908,14.9718752 7.403316,14.999875 7.50000292,14.999875 C7.59668984,14.999875 7.69337678,14.9718752 7.77734505,14.9158755 L14.777304,10.2492466 C14.9163976,10.1565206 14.9999492,10.0004169 14.999959,9.83324903 L14.999959,5.16662013 C14.9999492,4.99945222 14.9163976,4.84334851 14.777304,4.75062256 Z M7.50000292,9.23237755 L4.90139316,7.4999502 L7.50000292,5.76755409 L10.0986127,7.4999502 L7.50000292,9.23237755 Z M8,4.89905919 L8,1.43423573 L13.598561,5.16665138 L10.9999824,6.89904747 L8,4.89905919 Z M7.00000586,4.89905919 L4.00002344,6.89904747 L1.40141366,5.16665138 L7.00000586,1.43423573 L7.00000586,4.89905919 Z M3.09865372,7.4999502 L1.00004102,8.89903575 L1.00004102,6.10089589 L3.09865372,7.4999502 Z M4.00002344,8.10085292 L7.00000586,10.1008412 L7.00000586,13.5656334 L1.40141366,9.83328028 L4.00002344,8.10085292 Z M8,10.1008412 L10.9999824,8.10085292 L13.5985922,9.83328028 L8,13.5656647 L8,10.1008412 L8,10.1008412 Z M11.9013521,7.4999502 L13.9999648,6.10089589 L13.9999648,8.899067 L11.9013521,7.4999502 Z"})})},Ce=function(t){return(0,e.jsx)(j(),y()({component:re},t))},Ne=Ce,je=n(941346),de=n(185209),Ae=n(468990),Be=n(224292),Le=n.n(Be),ue=n(626826),me=n(915660),Y=n.n(me),Ze=n(728207),Fe=n(302559),ze=n(965516),ae=function(t){var o=t.error,i=ze.Z.useToken(),u=i.token;return o?(0,e.jsx)(B.Z,{banner:!0,type:"error",message:o.toString(),style:{color:u.colorError}}):null},ve=ae,Se,pe,be=(0,p.kc)(function(a){var t=a.token,o=a.css,i=t.colorPrimaryBorder,u=t.colorIcon,m=t.colorPrimary;return{editor:o(Se||(Se=x()([`
      .npm__react-simple-code-editor__textarea {
        outline: none;

        &:hover {
          box-shadow: inset 0 0 0 1px `,` !important;
        }

        &:focus {
          box-shadow: inset 0 0 0 1px `,` !important;
        }
      }

      // override dumi editor styles
      .dumi-default-source-code-editor {
        .dumi-default-source-code > pre,
        .dumi-default-source-code-editor-textarea {
          padding: 12px 16px;
        }

        .dumi-default-source-code > pre {
          font-size: 13px;
          line-height: 2;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        }

        // disable dumi default copy button
        .dumi-default-source-code-copy {
          display: none;
        }

        &-textarea:hover {
          box-shadow: 0 0 0 1px `,` inset;
        }

        &-textarea:focus {
          box-shadow: 0 0 0 1px `,` inset;
        }
      }
    `])),i,m,t.colorPrimaryBorderHover,t.colorPrimary),editableIcon:o(pe||(pe=x()([`
      position: absolute;
      z-index: 2;
      height: 32px;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      top: 16px;
      inset-inline-end: 56px;
      color: `,`;
    `])),u)}}),Ue={cn:{demoEditable:"\u7F16\u8F91 Demo \u53EF\u5B9E\u65F6\u9884\u89C8"},en:{demoEditable:"Edit demo with real-time preview"}},Ee="hide-live-demo-tip",Pe=function(t){var o=(0,s.useState)(!1),i=C()(o,2),u=i[0],m=i[1],R=be(),Z=R.styles,O=(0,Fe.Z)(Ue),J=C()(O,1),b=J[0];(0,s.useEffect)(function(){var H=!localStorage.getItem(Ee);H&&m(!0)},[]);var F=function(_){m(_),_||localStorage.setItem(Ee,"true")};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{className:Z.editor,children:[(0,e.jsx)(Ze.Z,{lang:t.lang,initialValue:t.initialValue,onChange:t.onChange}),(0,e.jsx)(ve,{error:t.error})]}),(0,e.jsx)(L.Z,{title:b.demoEditable,open:u,onOpenChange:F,children:(0,e.jsx)(D.EditFilled,{className:Z.editableIcon})})]})},fe=Pe,Oe,Me,he,De=(0,p.kc)(function(a){var t=a.token,o=a.css,i=t.colorIcon,u=t.colorBgTextHover,m=t.antCls;return{code:o(Oe||(Oe=x()([`
      position: relative;
      margin-top: -16px;
    `]))),copyButton:o(Me||(Me=x()([`
      color: `,`;
      position: absolute;
      z-index: 2;
      top: 16px;
      inset-inline-end: 16px;
      width: 32px;
      text-align: center;
      background: `,`;
      padding: 0;
    `])),i,u),copyIcon:o(he||(he=x()([`
      `,`-typography-copy {
        position: relative;
        margin-inline-start: 0;

        // expand clickable area
        &::before {
          content: '';
          display: block;
          position: absolute;
          top: -5px;
          left: -9px;
          bottom: -5px;
          right: -9px;
        }
      }
      `,"-typography-copy:not(",`-typography-copy-success) {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }
    `])),m,m,m,i,i)}}),Ke={tsx:"TypeScript",jsx:"JavaScript",style:"CSS"};function He(a){return Le()(a,[[function(t){return ue.isElement(t)&&ue.getTagName(t)==="pre"},function(t,o){var i=ue.getAttributes(t);return(0,e.jsx)("pre",{className:"language-".concat(i.lang),children:(0,e.jsx)("code",{dangerouslySetInnerHTML:{__html:i.highlighted}})},o)}]])}var Ve=function(t){var o=t.sourceCode,i=o===void 0?"":o,u=t.jsxCode,m=u===void 0?"":u,R=t.styleCode,Z=R===void 0?"":R,O=t.entryName,J=t.onCodeTypeChange,b=t.onSourceChange,F=t.error,H={};i&&(H.tsx=""),m&&(H.jsx=""),Z&&(H.style="");var _=s.useState(H),ie=C()(_,2),X=ie[0],ge=ie[1],Q={tsx:i==null?void 0:i.trim(),jsx:m==null?void 0:m.trim(),style:Z==null?void 0:Z.trim()};(0,s.useEffect)(function(){var M={tsx:Y().highlight(i,Y().languages.javascript,"jsx"),jsx:Y().highlight(m,Y().languages.javascript,"jsx"),style:Y().highlight(Z,Y().languages.css,"css")};Object.keys(M).forEach(function(ee){M[ee]||delete M[ee]}),ge(M)},[m,i,Z]);var G=Object.keys(X),te=De(),q=te.styles,T=(0,s.useMemo)(function(){return G.map(function(M){return{label:Ke[M],key:M,children:(0,e.jsxs)("div",{className:q.code,children:[M==="tsx"?(0,e.jsx)(fe,{error:F,lang:M,initialValue:Q[M],onChange:function(Re){b==null||b(E()({},O,Re))}}):He(["pre",{lang:M,highlighted:X[M]}]),(0,e.jsx)(je.ZP,{type:"text",className:q.copyButton,children:(0,e.jsx)(de.Z.Text,{className:q.copyIcon,copyable:{text:Q[M]}})})]})}})},[JSON.stringify(X)]);return G.length?G.length===1?(0,e.jsx)(fe,{error:F,lang:G[0],initialValue:Q[G[0]],onChange:function(ee){b==null||b(E()({},O,ee))}}):(0,e.jsx)(Ae.Z,{centered:!0,className:"highlight",onChange:J,items:T}):null},We=Ve,Pn=function(){return(0,e.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,e.jsx)("path",{d:"M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"})})},On=function(t){return(0,e.jsx)(j(),y()({component:Pn},t))},Mn=On,Dn=n(148050),Rn=function(t){var o=t.color,i=o===void 0?"currentColor":o;return(0,e.jsxs)("svg",{viewBox:"0 0 1024 1024",width:"1em",height:"1em",fill:i,children:[(0,e.jsx)("path",{d:"M853.333 469.333A42.667 42.667 0 0 0 810.667 512v256A42.667 42.667 0 0 1 768 810.667H256A42.667 42.667 0 0 1 213.333 768V256A42.667 42.667 0 0 1 256 213.333h256A42.667 42.667 0 0 0 512 128H256a128 128 0 0 0-128 128v512a128 128 0 0 0 128 128h512a128 128 0 0 0 128-128V512a42.667 42.667 0 0 0-42.667-42.667z"}),(0,e.jsx)("path",{d:"M682.667 213.333h67.413L481.707 481.28a42.667 42.667 0 0 0 0 60.587 42.667 42.667 0 0 0 60.586 0L810.667 273.92v67.413A42.667 42.667 0 0 0 853.333 384 42.667 42.667 0 0 0 896 341.333V170.667A42.667 42.667 0 0 0 853.333 128H682.667a42.667 42.667 0 0 0 0 85.333z"})]})},Tn=function(t){return(0,e.jsx)(j(),y()({component:Rn},t))},In=Tn,Nn=function(){return(0,e.jsx)("svg",{viewBox:"0 0 14 14",fill:"currentColor",children:(0,e.jsx)("path",{d:"M13.8875145,13.1234844 C13.8687399,13.0691875 13.8499977,13.0329687 13.8312555,12.9786562 L11.3687445,8.83296875 C12.9187468,8.05754687 13.9640694,6.49009375 13.9640694,4.68728125 C13.9624994,2.09095312 11.7968694,0 9.10938728,0 L3.86404855,0 C3.04217572,0 2.37028902,0.648703125 2.37028902,1.44223437 L2.37028902,1.82090625 L0.746871676,1.82090625 C0.33593526,1.82090625 0,2.14526562 0,2.54203125 L0,13.4478437 C0,13.7540937 0.242191908,13.9879375 0.559368786,13.9879375 C0.615627746,13.9879375 0.67187052,13.9698281 0.72812948,13.9517187 L13.440615,13.9517187 C13.7578081,13.9517187 14,13.7178906 14,13.4116406 C14,13.321125 13.9624994,13.2125 13.8875145,13.1234844 Z M3.49061272,8.0394375 L3.49061272,2.9206875 L8.71719306,2.9206875 C9.74375723,2.9206875 10.5843723,3.73232812 10.5843723,4.7235 C10.5843723,5.71465625 9.76249942,6.5081875 8.71719306,6.5081875 L6.53280462,6.5081875 L6.53280462,6.52629688 C6.45781965,6.52629688 6.3828185,6.5625 6.3093711,6.59870313 C6.04843699,6.74354688 5.95469364,7.08598438 6.10467977,7.33792188 L8.3078104,11.0325469 L3.4906289,11.0325469 L3.4906289,8.0394375 L3.49061272,8.0394375 Z M1.1203237,12.8881406 L1.1203237,2.9206875 L2.3703052,2.9206875 L2.3703052,11.5545313 C2.3703052,11.8607813 2.61249711,12.0946094 2.92969017,12.0946094 L2.94843237,12.0946094 C2.98593295,12.1127188 3.04219191,12.1127188 3.09843468,12.1127188 L9.16563006,12.1127188 C9.48280694,12.1127188 9.72499884,11.878875 9.72499884,11.572625 L9.72499884,11.5364219 C9.76249942,11.3915938 9.74375723,11.2482813 9.66875607,11.1215469 L7.5593526,7.58835938 L8.6984185,7.58835938 C10.3406104,7.58835938 11.6843514,6.29095313 11.6843514,4.703875 C11.6843514,3.1168125 10.3406104,1.81939063 8.6984185,1.81939063 L3.4906289,1.81939063 L3.4906289,1.44073437 C3.4906289,1.24310937 3.65937341,1.08017187 3.86406474,1.08017187 L9.09061272,1.08017187 C11.143741,1.08017187 12.8234173,2.7019375 12.8234173,4.68578125 C12.8234173,6.21853125 11.8343538,7.5340625 10.4343538,8.05603125 C10.378111,8.07414063 10.3406104,8.09223438 10.2843514,8.11034375 C10.0234173,8.25517188 9.92967399,8.597625 10.0796763,8.8495625 L12.5062405,12.8881563 L1.12030751,12.8881563 L1.1203237,12.8881406 Z"})})},An=function(t){return(0,e.jsx)(j(),y()({component:Nn},t))},Bn=An,Zn=n(438199),Fn=n(373638),Qe,zn=B.Z.ErrorBoundary;function Un(a){return U().compressToBase64(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}var xe=function(t){var o=t.type,i=t.demo;window.gtag&&window.gtag("event","demo",{event_category:o,event_label:i})},$e;function Kn(){var a=(0,s.useState)(!1),t=C()(a,2),o=t[0],i=t[1];return(0,s.useEffect)(function(){var u;(u=$e)!==null&&u!==void 0||($e=new Promise(function(m){(0,Fn.qE)(function(R){return m(R!=="timeout"&&R!=="error")})})),$e.then(i)},[]),o}var Hn=(0,p.kc)(function(a){var t=a.token,o=t.borderRadius;return{codeHideBtn:(0,p.iv)(Qe||(Qe=x()([`
      width: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0 0 `,"px ",`px;
      border-top: 1px solid `,`;
      color: `,`;
      transition: all 0.2s ease-in-out;
      background-color: `,`;
      cursor: pointer;
      &:hover {
        color: `,`;
      }
      span {
        margin-right: `,`px;
      }
    `])),o,o,t.colorSplit,t.colorTextSecondary,t.colorBgElevated,t.colorPrimary,t.marginXXS)}}),Vn=function(t){var o=t.asset,i=t.expand,u=t.iframe,m=t.demoUrl,R=t.children,Z=t.title,O=t.description,J=t.originDebug,b=t.jsx,F=t.style,H=t.compact,_=t.background,ie=t.filename,X=t.version,ge=t.clientOnly,Q=t.pkgDependencyList,G=(0,h.useSiteData)(),te=G.pkg,q=(0,w.Z)(),T=Hn(),M=T.styles,ee="index.tsx",Re=o.dependencies[ee].value,tt=Kn(),we=(0,s.useRef)(null),ln=(0,s.useRef)(null),Ge=(0,h.useLiveDemo)(o.id,{iframe:!!u,containerRef:ln}),ot=Ge.node,rt=Ge.error,at=Ge.setSource,dn=(0,s.useRef)(null),un=(0,s.useRef)(null),mn=(0,s.useRef)(null),vn=(0,s.useRef)(null),it=(0,s.useState)(!1),pn=C()(it,2),se=pn[0],ke=pn[1],st=(0,s.useState)("tsx"),fn=C()(st,2),ct=fn[0],lt=fn[1],dt=(0,s.useContext)(Zn.Z),oe=dt.theme,ut=q.hash,mt=q.pathname,vt=q.search,pt="https://ant.design".concat(mt).concat(vt,"#").concat(o.id),ft=(0,s.useState)(!1),hn=C()(ft,2),ht=hn[0],xt=hn[1];(0,s.useEffect)(function(){var f=/preview-(\d+)-ant-design/;xt(f.test(window.location.hostname))},[]);var xn=function(I){ke(function(ce){return!ce}),xe({type:"expand",demo:I})};(0,s.useEffect)(function(){if(o.id===ut.slice(1)){var f;(f=dn.current)===null||f===void 0||f.click()}},[]),(0,s.useEffect)(function(){ke(i)},[i]);var gt=!u&&ge?(0,e.jsx)(S,{children:R}):R;we.current||(we.current=u?(0,e.jsx)(P,{children:(0,e.jsx)("iframe",{src:m,height:u===!0?void 0:u,title:"demo",className:"iframe-demo"})}):gt);var yt=d()("code-box",{expand:se,"code-box-debug":J}),ye=Z,Ct=d()("highlight-wrapper",{"highlight-wrapper-expand":se}),Je=`
    <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width">
          <meta name="theme-color" content="#000000">
        </head>
        <body>
          <div id="container" style="padding: 24px" />
          <script>const mountNode = document.getElementById('container');<\/script>
        </body>
      </html>
    `,jt={compilerOptions:{target:"esnext",module:"esnext",esModuleInterop:!0,moduleResolution:"node",jsx:"react",jsxFactory:"React.createElement",jsxFragmentFactory:"React.Fragment"}},ne=ct==="tsx"?"tsx":"js",V=b.split(`
`).reduce(function(f,I){var ce=I.match(/import .+? from '(.+)';$/);if(ce!=null&&ce[1]){var _e,Xe,Ie=ce[1].split("/"),Ye=Ie[0].startsWith("@")?"".concat(Ie[0],"/").concat(Ie[1]):Ie[0];(_e=f[Ye])!==null&&_e!==void 0||(f[Ye]=(Xe=Q[Ye])!==null&&Xe!==void 0?Xe:"latest")}return f},{antd:te.version});V["@ant-design/icons"]="latest",ne==="tsx"&&(V["@types/react"]="^18.0.0",V["@types/react-dom"]="^18.0.0"),V.react="^18.0.0",V["react-dom"]="^18.0.0";var Lt={title:"".concat(ye," - antd@").concat(V.antd),html:Je,js:`const { createRoot } = ReactDOM;
`.concat(b.replace(/import\s+(?:React,\s+)?{(\s+[^}]*\s+)}\s+from\s+'react'/,"const { $1 } = React;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'antd';/,"const { $1 } = antd;").replace(/import\s+{(\s+[^}]*\s+)}\s+from\s+'@ant-design\/icons';/,"const { $1 } = icons;").replace("import moment from 'moment';","").replace("import React from 'react';","").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router';/,"const { $1 } = ReactRouter;").replace(/import\s+{\s+(.*)\s+}\s+from\s+'react-router-dom';/,"const { $1 } = ReactRouterDOM;").replace(/([A-Za-z]*)\s+as\s+([A-Za-z]*)/,"$1:$2").replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),editors:"001",css:"",js_external:["react@18/umd/react.development.js","react-dom@18/umd/react-dom.development.js","dayjs@1/dayjs.min.js","antd@".concat(te.version,"/dist/antd-with-locales.min.js"),"@ant-design/icons/dist/index.umd.js","react-router-dom/dist/umd/react-router-dom.production.min.js","react-router/dist/umd/react-router.production.min.js"].map(function(f){return"https://unpkg.com/".concat(f)}).join(";"),js_pre_processor:"typescript"},St={title:"".concat(ye," - antd@").concat(V.antd),js:"".concat(/import React(\D*)from 'react';/.test(b)?"":`import React from 'react';
`,`import { createRoot } from 'react-dom/client';
`).concat(b.replace(/export default/,"const ComponentDemo ="),`

createRoot(mountNode).render(<ComponentDemo />);
`),css:"",json:JSON.stringify({name:"antd-demo",dependencies:V},null,2)},Te=ne==="tsx"?Re:b,gn="import React from 'react';",yn=/import React(\D*)from 'react';/,Cn=Te.match(yn);if(Cn){var bt=C()(Cn,1);gn=bt[0],Te=Te.replace(yn,"").trim()}var jn=`
`.concat(gn,`
import './index.css';
`).concat(Te,`
    `).trim(),Ln=(F||"").trim().replace(new RegExp("#".concat(o.id,"\\s*"),"g"),"").replace("</style>","").replace("<style>",""),Sn=`import React from 'react';
import { createRoot } from 'react-dom/client';
import Demo from './demo';

createRoot(document.getElementById('container')).render(<Demo />);
  `,Et={title:"".concat(ye," - antd@").concat(V.antd),main:"index.js",dependencies:y()(y()({},V),{},{"rc-util":Q["rc-util"],react:"^18.0.0","react-dom":"^18.0.0","react-scripts":"^5.0.0"}),devDependencies:{typescript:"^5.0.2"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject"},browserslist:[">0.2%","not dead"]},Pt={files:E()(E()(E()({"package.json":{content:Et},"index.css":{content:Ln}},"index.".concat(ne),{content:Sn}),"demo.".concat(ne),{content:jn}),"index.html",{content:Je})},bn={title:"".concat(ye," - antd@").concat(V.antd),template:"create-react-app",dependencies:V,description:"",files:E()(E()(E()({"index.css":Ln},"index.".concat(ne),Sn),"demo.".concat(ne),jn),"index.html",Je)};ne==="tsx"&&(bn.files["tsconfig.json"]=JSON.stringify(jt,null,2));var Ot=oe.includes("dark")?"#303030":"#f0f2f5",Mt={padding:u||H?0:void 0,overflow:u||H?"hidden":void 0,backgroundColor:_==="grey"?Ot:void 0},En=(0,e.jsxs)("section",{className:yt,id:o.id,children:[(0,e.jsx)("section",{className:"code-box-demo",style:Mt,ref:ln,children:ot||(0,e.jsx)(zn,{children:(0,e.jsx)(s.StrictMode,{children:we.current})})}),(0,e.jsxs)("section",{className:"code-box-meta markdown",children:[(0,e.jsxs)("div",{className:"code-box-title",children:[(0,e.jsx)(L.Z,{title:J?(0,e.jsx)(h.FormattedMessage,{id:"app.demo.debug"}):"",children:(0,e.jsx)("a",{href:"#".concat(o.id),ref:dn,children:ye})}),(0,e.jsx)(Dn.default,{title:(0,e.jsx)(h.FormattedMessage,{id:"app.content.edit-demo"}),filename:ie})]}),O&&(0,e.jsx)("div",{className:"code-box-description",dangerouslySetInnerHTML:{__html:O}}),(0,e.jsxs)(c.Z,{wrap:"wrap",gap:"middle",className:"code-box-actions",children:[ht&&(0,e.jsx)(L.Z,{title:(0,e.jsx)(h.FormattedMessage,{id:"app.demo.online"}),children:(0,e.jsx)("a",{className:"code-box-code-action",target:"_blank",rel:"noreferrer",href:pt,children:(0,e.jsx)(D.LinkOutlined,{"aria-label":"open in new tab",className:"code-box-online"})})}),tt?(0,e.jsxs)("form",{className:"code-box-code-action",action:"//riddle.alibaba-inc.com/riddles/define",method:"POST",target:"_blank",ref:mn,onClick:function(){var I;xe({type:"riddle",demo:o.id}),(I=mn.current)===null||I===void 0||I.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(St)}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(h.FormattedMessage,{id:"app.demo.riddle"}),children:(0,e.jsx)(Bn,{className:"code-box-riddle"})})]}):null,(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank",ref:un,onClick:function(){var I;xe({type:"codesandbox",demo:o.id}),(I=un.current)===null||I===void 0||I.submit()},children:[(0,e.jsx)("input",{type:"hidden",name:"parameters",value:Un(JSON.stringify(Pt))}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(h.FormattedMessage,{id:"app.demo.codesandbox"}),children:(0,e.jsx)(Mn,{className:"code-box-codesandbox"})})]}),(0,e.jsxs)("form",{className:"code-box-code-action",action:"https://codepen.io/pen/define",method:"POST",target:"_blank",ref:vn,onClick:function(){var I;xe({type:"codepen",demo:o.id}),(I=vn.current)===null||I===void 0||I.submit()},children:[(0,e.jsx)(S,{children:(0,e.jsx)("input",{type:"hidden",name:"data",value:JSON.stringify(Lt)})}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(h.FormattedMessage,{id:"app.demo.codepen"}),children:(0,e.jsx)(Ne,{className:"code-box-codepen"})})]}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(h.FormattedMessage,{id:"app.demo.stackblitz"}),children:(0,e.jsx)("span",{className:"code-box-code-action",onClick:function(){xe({type:"stackblitz",demo:o.id}),N.Z.openProject(bn,{openFile:["demo.".concat(ne)]})},children:(0,e.jsx)(D.ThunderboltOutlined,{className:"code-box-stackblitz"})})}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(h.FormattedMessage,{id:"app.demo.separate"}),children:(0,e.jsx)("a",{className:"code-box-code-action","aria-label":"open in new tab",target:"_blank",rel:"noreferrer",href:m,children:(0,e.jsx)(In,{className:"code-box-separate"})})}),(0,e.jsx)(L.Z,{title:(0,e.jsx)(h.FormattedMessage,{id:"app.demo.code.".concat(se?"hide":"show")}),children:(0,e.jsxs)("div",{className:"code-expand-icon code-box-code-action",children:[(0,e.jsx)("img",{alt:"expand code",src:oe!=null&&oe.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/btT3qDZn1U/wSAkBuJFbdxsosKKpqyq.svg":"https://gw.alipayobjects.com/zos/antfincdn/Z5c7kzvi30/expand.svg",className:se?"code-expand-icon-hide":"code-expand-icon-show",onClick:function(){return xn(o.id)}}),(0,e.jsx)("img",{alt:"expand code",src:oe!=null&&oe.includes("dark")?"https://gw.alipayobjects.com/zos/antfincdn/CjZPwcKUG3/OpROPHYqWmrMDBFMZtKF.svg":"https://gw.alipayobjects.com/zos/antfincdn/4zAaozCvUH/unexpand.svg",className:se?"code-expand-icon-show":"code-expand-icon-hide",onClick:function(){return xn(o.id)}})]})})]})]}),se&&(0,e.jsxs)("section",{className:Ct,children:[(0,e.jsx)(We,{sourceCode:Re,jsxCode:b,styleCode:F,error:rt,entryName:ee,onCodeTypeChange:lt,onSourceChange:at}),(0,e.jsxs)("div",{tabIndex:0,role:"button",className:M.codeHideBtn,onClick:function(){return ke(!1)},children:[(0,e.jsx)(D.UpOutlined,{}),(0,e.jsx)(h.FormattedMessage,{id:"app.demo.code.hide.simplify"})]})]},"code")]});return(0,s.useEffect)(function(){if(F){var f=document.createElement("style");return f.type="text/css",f.innerHTML=F,f["data-demo-url"]=m,document.head.appendChild(f),function(){document.head.removeChild(f)}}},[F,m]),X?(0,e.jsx)(v.Z.Ribbon,{text:X,color:X.includes("<")?"red":void 0,children:En}):En},Wn=Vn,$n=n(15009),qe=n.n($n),wn=n(899289),Gn=n.n(wn),kn=n(124220),Jn=n(820640),_n=n.n(Jn),Xn=n(471232),en,nn,tn,on,rn,an,sn,cn,Yn=(0,p.kc)(function(a){var t=a.token,o=a.css;return{wrapper:o(en||(en=x()([`
    border: 1px solid `,`;
    border-radius: `,`px;
    padding: 20px 24px 40px;
    position: relative;
    margin-bottom: `,`px;
  `])),t.colorBorderSecondary,t.borderRadius,t.marginLG),title:o(nn||(nn=x()([`
    font-size: `,`px;
    font-weight: `,`;
    color: `,`;

    &:hover {
      color: `,`;
    }
  `])),t.fontSizeLG,t.fontWeightStrong,t.colorTextHeading,t.colorTextHeading),description:o(tn||(tn=x()([`
    margin-top: `,`px;
  `])),t.margin),demo:o(on||(on=x()([`
    margin-top: `,`px;
    display: flex;
    justify-content: center;
  `])),t.marginLG),copy:o(rn||(rn=x()([`
    position: absolute;
    inset-inline-end: 20px;
    inset-block-start: 20px;
    cursor: pointer;
  `]))),copyTip:o(an||(an=x()([`
    color: `,`;
  `])),t.colorTextTertiary),copiedTip:o(sn||(sn=x()([`
    .anticon {
      color: `,`;
    }
  `])),t.colorSuccess),tip:o(cn||(cn=x()([`
    color: `,`;
    margin-top: 40px;
  `])),t.colorTextTertiary)}}),Qn=function(t){var o=t.children,i=t.title,u=t.description,m=t.tip,R=t.asset,Z=Yn(),O=Z.styles,J=(0,s.useRef)(null),b=s.useState(!1),F=C()(b,2),H=F[0],_=F[1],ie=Xn.Z.useApp(),X=ie.message,ge=function(){var Q=Gn()(qe()().mark(function G(){var te;return qe()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.prev=0,T.next=3,(0,kn.Sg)(J.current);case 3:te=T.sent,_n()(JSON.stringify(te.toSketchJSON())),_(!0),setTimeout(function(){_(!1)},5e3),T.next=13;break;case 9:T.prev=9,T.t0=T.catch(0),console.error(T.t0),X.error("\u590D\u5236\u5931\u8D25");case 13:case"end":return T.stop()}},G,null,[[0,9]])}));return function(){return Q.apply(this,arguments)}}();return(0,e.jsxs)("div",{className:O.wrapper,id:R.id,children:[(0,e.jsx)("a",{className:O.title,href:"#".concat(R.id),children:i}),(0,e.jsx)("div",{className:O.description,dangerouslySetInnerHTML:{__html:u}}),(0,e.jsx)("div",{className:O.copy,children:H?(0,e.jsxs)("div",{className:O.copiedTip,children:[(0,e.jsx)(D.CheckOutlined,{}),(0,e.jsx)("span",{style:{marginLeft:8},children:"\u5DF2\u590D\u5236\uFF0C\u4F7F\u7528 Kitchen \u63D2\u4EF6\u5373\u53EF\u7C98\u8D34"})]}):(0,e.jsxs)("div",{onClick:ge,className:O.copyTip,children:[(0,e.jsx)(D.SketchOutlined,{}),(0,e.jsx)("span",{style:{marginLeft:8},children:"\u590D\u5236 Sketch JSON"})]})}),(0,e.jsx)("div",{className:O.demo,ref:J,children:o}),(0,e.jsx)("div",{className:O.tip,children:m})]})},qn=Qn,et=function(t){var o=(0,h.useTabMeta)();return(o==null?void 0:o.frontmatter.title)==="Design"?(0,e.jsx)(qn,y()({},t)):(0,e.jsx)(Wn,y()({},t))},nt=et},148050:function(le,A,n){"use strict";n.r(A),n.d(A,{default:function(){return j}});var W=n(168400),y=n.n(W),s=n(667294),h=n(639389),z=n.n(h),E=n(647759),k=n(879587),x=n(785893),$,C="https://github.com/ant-design/ant-design/edit/master/",D=(0,E.kc)(function(N){var B=N.token,L=N.css,c=B.colorIcon,v=B.colorText,p=B.iconCls;return{editButton:L($||($=y()([`
      a& {
        position: relative;
        top: -2px;
        display: inline-block;
        text-decoration: none;
        vertical-align: middle;
        margin-inline-start: 6px;

        `,` {
          display: block;
          color: `,`;
          font-size: 16px;
          transition: all 0.3s;

          &:hover {
            color: `,`;
          }
        }
      }
    `])),p,c,v)}});function j(N){var B=N.title,L=N.filename,c=D(),v=c.styles;return(0,x.jsx)(k.Z,{title:B,children:(0,x.jsx)("a",{className:v.editButton,href:"".concat(C).concat(L),target:"_blank",rel:"noopener noreferrer",children:(0,x.jsx)(h.EditOutlined,{})})})}},373638:function(le,A,n){"use strict";n.d(A,{J1:function(){return C},Is:function(){return L},Fy:function(){return j},KE:function(){return $},qE:function(){return D}});var W=n(661227),y=n(805574),s=n(97857),h=n(385564),z=n(842348),E=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),k={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":E?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function x(c,v,p,r){var d=c.map(function(e){return e.meta}).filter(function(e){return!e.skip}),l=[],U=function(g,P){return(g.order||0)-(P.order||0)};d.sort(U).forEach(function(e){if(e.category&&(e.category=e.category[v]||e.category),e.type&&(e.type=e.type[v]||e.type),e!=null&&e.title&&(e.title=e.title[v]||e.title),!e.category){l.push(e);return}if(e.category==="Components"&&e.type){var g=l.find(function(S){return(S==null?void 0:S.title)===e.type});g||(g={type:"type",title:e.type,children:[],order:r[e.type]},l.push(g)),g.children=g.children||[],g.children.push(e);return}var P=l.find(function(S){return(S==null?void 0:S.title)===e.category});if(P||(P={type:"category",title:e.category,children:[],order:p[e.category]},l.push(P)),P.children=P.children||[],e.type){var K=P.children.filter(function(S){return(S==null?void 0:S.title)===e.type})[0];K||(K={type:"type",title:e.type,children:[],order:r[e.type]},P.children.push(K)),K.children=K.children||[],K.children.push(e)}else P.children.push(e)});function w(e){return e.sort(U).map(function(g){return g.children?_objectSpread(_objectSpread({},g),{},{children:w(g.children)}):g})}return w(l)}function $(c){return/-cn\/?$/.test(c)}function C(c,v,p,r){var d=c.startsWith("/")?c:"/".concat(c),l;if(v?d==="/"?l="/index-cn":d.endsWith("/")?l=d.replace(/\/$/,"-cn/"):(l="".concat(d,"-cn"),l=l.replace(/(-cn)+/,"-cn")):l=/\/?index-cn/.test(d)?"/":d.replace("-cn",""),r){var U=r[v?"zhCN":"enUS"];l+="#".concat(U)}return{pathname:l,search:p}}function D(c){var v="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",p=new Image,r,d=function(U){r||(r=!0,p.src="",c(U))};return p.onload=function(){return d("responded")},p.onerror=function(){return d("error")},p.src=v,setTimeout(function(){return d("timeout")},1500)}function j(){var c="test",v=window.localStorage;try{return v.setItem(c,"1"),v.removeItem(c),!0}catch(p){return!1}}function N(c){return new Promise(function(v,p){var r=document.createElement("script");r.type="text/javascript",r.src=c,r.onload=v,r.onerror=p,document.head.appendChild(r)})}function B(c){var v=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(c))return"";var p=flattenDeep(c.filter(function(r){if(Array.isArray(r)){var d=_slicedToArray(r,1),l=d[0];return l==="p"}return!1}).map(function(r){var d=flatten(r),l=_toArray(d),U=l[0],w=l.slice(1),e=w.filter(function(g){return typeof g=="string"&&!v.includes(g)}).join("");return[U,e]})).find(function(r){return r&&typeof r=="string"&&!v.includes(r)});return p}var L=function(){return k}},824422:function(le,A,n){"use strict";n.d(A,{Z:function(){return W.Z}});var W=n(199100)},471232:function(le,A,n){"use strict";n.d(A,{Z:function(){return U}});var W=n(97857),y=n.n(W),s=n(805574),h=n.n(s),z=n(667294),E=n(693967),k=n.n(E),x=n(73287),$=n(215570),C=n(269924),D=n(890887),j=n(414466),N=n(9783),B=n.n(N),L=n(286665),c=function(e){var g=e.componentCls,P=e.colorText,K=e.fontSize,S=e.lineHeight,re=e.fontFamily;return B()({},g,{color:P,fontSize:K,lineHeight:S,fontFamily:re})},v=function(){return{}},p=(0,L.I$)("App",c,v),r=n(785893),d=function(){return z.useContext(j.Z)},l=function(e){var g=e.prefixCls,P=e.children,K=e.className,S=e.rootClassName,re=e.message,Ce=e.notification,Ne=e.style,je=e.component,de=je===void 0?"div":je,Ae=(0,z.useContext)(x.E_),Be=Ae.getPrefixCls,Le=Be("app",g),ue=p(Le),me=h()(ue,3),Y=me[0],Ze=me[1],Fe=me[2],ze=k()(Ze,Le,K,S,Fe),ae=(0,z.useContext)(j.J),ve=z.useMemo(function(){return{message:y()(y()({},ae.message),re),notification:y()(y()({},ae.notification),Ce)}},[re,Ce,ae.message,ae.notification]),Se=(0,$.Z)(ve.message),pe=h()(Se,2),be=pe[0],Ue=pe[1],Ee=(0,D.Z)(ve.notification),Pe=h()(Ee,2),fe=Pe[0],Oe=Pe[1],Me=(0,C.Z)(),he=h()(Me,2),De=he[0],Ke=he[1],He=z.useMemo(function(){return{message:be,notification:fe,modal:De}},[be,fe,De]),Ve=de===!1?z.Fragment:de,We={className:ze,style:Ne};return Y((0,r.jsx)(j.Z.Provider,{value:He,children:(0,r.jsx)(j.J.Provider,{value:ve,children:(0,r.jsxs)(Ve,y()(y()({},de===!1?void 0:We),{},{children:[Ke,Ue,Oe,P]}))})}))};l.useApp=d;var U=l},991343:function(){},824654:function(){}}]);
