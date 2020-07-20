import{w as t,l as e,m as r,o as n,p as s,S as a,i as o,s as i,q as c,e as u,c as l,b as f,f as m,h as p,r as h,j as g,u as d,v as $,x as v,y,z as b,A as j,B as w,C as E,n as D,D as k,E as q,F as A,t as S,a as x,G as I,d as T,g as V,H as L,k as M,I as H,J as O,K as C,L as P,M as X,N as B,O as N}from"./client.9ad5afa9.js";import{c as Y}from"./index.65f5d8ab.js";function F(t){return"[object Date]"===Object.prototype.toString.call(t)}function G(t,e){if(t===e||t!=t)return()=>t;const r=typeof t;if(r!==typeof e||Array.isArray(t)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const r=e.map((e,r)=>G(t[r],e));return t=>r.map(e=>e(t))}if("object"===r){if(!t||!e)throw new Error("Object cannot be null");if(F(t)&&F(e)){t=t.getTime();const r=(e=e.getTime())-t;return e=>new Date(t+e*r)}const r=Object.keys(e),n={};return r.forEach(r=>{n[r]=G(t[r],e[r])}),t=>{const e={};return r.forEach(r=>{e[r]=n[r](t)}),e}}if("number"===r){const r=e-t;return e=>t+e*r}throw new Error(`Cannot interpolate ${r} values`)}const W=t=>({current:1&t[0],progress:64&t[0]}),z=t=>({current:t[0],jump:t[13],progress:t[6]});function J(t){let e,r,n,s,a,o;const i=t[19].default,w=c(i,t,t[18],z);return{c(){e=u("div"),w&&w.c(),this.h()},l(t){e=l(t,"DIV",{class:!0});var r=f(e);w&&w.l(r),r.forEach(m),this.h()},h(){p(e,"class",r="swipeable "+t[1]+" svelte-1tq9t5b"),h(()=>t[20].call(e))},m(r,i){g(r,e,i),w&&w.m(e,null),n=d(e,t[20].bind(e)),t[21](e),s=!0,a||(o=[$(e,"pointercancel",t[12]),$(e,"touchstart",t[10]),$(e,"touchmove",t[14]),$(e,"touchend",t[11]),$(e,"mousedown",t[7]),$(e,"mousemove",t[9]),$(e,"mouseup",t[8]),$(e,"wheel",t[15])],a=!0)},p(t,n){w&&w.p&&262209&n[0]&&v(w,i,t,t[18],n,W,z),(!s||2&n[0]&&r!==(r="swipeable "+t[1]+" svelte-1tq9t5b"))&&p(e,"class",r)},i(t){s||(y(w,t),s=!0)},o(t){b(w,t),s=!1},d(r){r&&m(e),w&&w.d(r),n(),t[21](null),a=!1,j(o)}}}function K(a,o,i){let c,u=D;a.$$.on_destroy.push(()=>u());let l,f,m,p,h,{current:g=0}=o,{direction:d="horizontal"}=o,{numStates:$=2}=o,{speed:v=1}=o,y=!1,b=0,j=!0;const A=function(a,o={}){const i=t(a);let c,u=a;function l(t,l){if(null==a)return i.set(a=t),Promise.resolve();u=t;let f=c,m=!1,{delay:p=0,duration:h=400,easing:g=e,interpolate:d=G}=r(r({},o),l);if(0===h)return f&&(f.abort(),f=null),i.set(a=u),Promise.resolve();const $=n()+p;let v;return c=s(e=>{if(e<$)return!0;m||(v=d(a,t),"function"==typeof h&&(h=h(a,t)),m=!0),f&&(f.abort(),f=null);const r=e-$;return r>h?(i.set(a=t),!1):(i.set(a=v(g(r/h))),!0)}),c.promise}return{set:l,update:(t,e)=>l(t(u,a),e),subscribe:i.subscribe}}(g,{duration:400,easing:Y});function S(t){y=!0,f=t}function x(t){if(!y)return;let e=t-f;f=t,b-=e*v,b<0&&(b=0),b>L*M&&(b=L*M),m=e<0,j=!1,k(A,c=b/M||0)}function I(){b=m?Math.ceil(b/M)*M:Math.floor(b/M)*M,y=!1,T=null,clearTimeout(T),k(A,c=b/M||0),setTimeout(()=>j=!0,10)}let T;u(),u=w(A,t=>i(6,c=t)),E((function(){b=g*("vertical"==d?p:h)})),E((function(){}));let V,L,M,{$$slots:H={},$$scope:O}=o;return a.$set=t=>{"current"in t&&i(0,g=t.current),"direction"in t&&i(1,d=t.direction),"numStates"in t&&i(16,$=t.numStates),"speed"in t&&i(17,v=t.speed),"$$scope"in t&&i(18,O=t.$$scope)},a.$$.update=()=>{64&a.$$.dirty[0]&&i(0,g=Math.floor(c+.5)),2&a.$$.dirty[0]&&(V="vertical"==d?"pageY":"pageX"),65536&a.$$.dirty[0]&&(L=$-1),50&a.$$.dirty[0]&&(M="vertical"==d?p:h)},[g,d,A,l,p,h,c,function(t){S(t[V])},function(t){I()},function(t){t.preventDefault(),T||x(t[V])},function(t){S(t.changedTouches[0][V])},function(t){I()},function(t){y=!1},function(t){j&&(b=t*M,k(A,c=t))},function(t){x(t.changedTouches[0][V])},function(t){let e="vertical"==d?-t.deltaY:-t.deltaX;0!=e&&t.preventDefault(),S(0),x(e),clearTimeout(T),T=setTimeout(I,100)},$,v,O,H,function(){h=this.clientWidth,p=this.clientHeight,i(5,h),i(4,p)},function(t){q[t?"unshift":"push"](()=>{l=t,i(3,l)})}]}class Z extends a{constructor(t){super(),o(this,t,K,J,i,{current:0,direction:1,numStates:16,speed:17,progress:2},[-1,-1])}get progress(){return this.$$.ctx[2]}}function Q(t,e,r){const n=t.slice();return n[6]=e[r],n[8]=r,n}function U(t){let e,r,n,s,a,o,i,c;function h(...e){return t[2](t[4],t[8],...e)}return{c(){e=u("div"),r=u("div"),n=x(),s=u("div"),a=x(),this.h()},l(t){e=l(t,"DIV",{class:!0,style:!0});var o=f(e);r=l(o,"DIV",{class:!0,style:!0}),f(r).forEach(m),n=V(o),s=l(o,"DIV",{class:!0,style:!0}),f(s).forEach(m),a=V(o),o.forEach(m),this.h()},h(){p(r,"class","img svelte-563qmu"),X(r,"background-image","url("+t[6].url+")"),p(s,"class","img reflection svelte-563qmu"),X(s,"background-image","url("+t[6].url+")"),p(e,"class","cover svelte-563qmu"),p(e,"style",o=tt(t[8],t[5]))},m(t,o){g(t,e,o),M(e,r),M(e,n),M(e,s),M(e,a),i||(c=$(e,"click",h),i=!0)},p(n,a){t=n,1&a&&X(r,"background-image","url("+t[6].url+")"),1&a&&X(s,"background-image","url("+t[6].url+")"),32&a&&o!==(o=tt(t[8],t[5]))&&p(e,"style",o)},d(t){t&&m(e),i=!1,c()}}}function _(t){let e,r=t[0],n=[];for(let e=0;e<r.length;e+=1)n[e]=U(Q(t,r,e));return{c(){for(let t=0;t<n.length;t+=1)n[t].c();e=B()},l(t){for(let e=0;e<n.length;e+=1)n[e].l(t);e=B()},m(t,r){for(let e=0;e<n.length;e+=1)n[e].m(t,r);g(t,e,r)},p(t,s){if(33&s){let a;for(r=t[0],a=0;a<r.length;a+=1){const o=Q(t,r,a);n[a]?n[a].p(o,s):(n[a]=U(o),n[a].c(),n[a].m(e.parentNode,e))}for(;a<n.length;a+=1)n[a].d(1);n.length=r.length}},d(t){N(n,t),t&&m(e)}}}function R(t){let e,r,n,s,a,o,i,c,h,d,$=t[0][t[1]].name+"";function v(e){t[3].call(null,e)}let j={speed:"4",numStates:t[0].length,$$slots:{default:[_,({jump:t,progress:e})=>({4:t,5:e}),({jump:t,progress:e})=>(t?16:0)|(e?32:0)]},$$scope:{ctx:t}};return void 0!==t[1]&&(j.current=t[1]),o=new Z({props:j}),q.push(()=>A(o,"current",v)),{c(){e=u("div"),r=u("h2"),n=S($),s=x(),a=u("div"),I(o.$$.fragment),c=x(),h=u("div"),this.h()},l(t){e=l(t,"DIV",{class:!0});var i=f(e);r=l(i,"H2",{class:!0});var u=f(r);n=T(u,$),u.forEach(m),s=V(i),a=l(i,"DIV",{class:!0});var p=f(a);L(o.$$.fragment,p),p.forEach(m),c=V(i),h=l(i,"DIV",{class:!0}),f(h).forEach(m),i.forEach(m),this.h()},h(){p(r,"class","svelte-563qmu"),p(a,"class","coverflow svelte-563qmu"),p(h,"class","gradient svelte-563qmu"),p(e,"class","background svelte-563qmu")},m(t,i){g(t,e,i),M(e,r),M(r,n),M(e,s),M(e,a),H(o,a,null),M(e,c),M(e,h),d=!0},p(t,[e]){(!d||3&e)&&$!==($=t[0][t[1]].name+"")&&O(n,$);const r={};1&e&&(r.numStates=t[0].length),545&e&&(r.$$scope={dirty:e,ctx:t}),!i&&2&e&&(i=!0,r.current=t[1],C(()=>i=!1)),o.$set(r)},i(t){d||(y(o.$$.fragment,t),d=!0)},o(t){b(o.$$.fragment,t),d=!1},d(t){t&&m(e),P(o)}}}function tt(t,e){let r=t-e,n=r/2+.5;return n<0&&(n=0),n>1&&(n=1),`left: ${9*r}vw; transform: rotateY(${90-2*n*90}deg); transform-origin: ${100*n}%`}function et(t,e,r){let{covers:n=[{url:"https://i.imgur.com/WSNVjAp.jpg",name:"Lamborghini Veneno"},{url:"https://i.imgur.com/ktLr47i.jpg",name:"Zenvo TS1"},{url:"https://i.imgur.com/IBPaYOH.jpg",name:"McLaren P1 LM"},{url:"https://i.imgur.com/E97i8c8.jpg",name:"LaFerrari FXX K"},{url:"https://i.imgur.com/eurkXGH.jpg",name:"Bugatti Chiron"},{url:"https://i.imgur.com/1BdAJno.jpg",name:"Lamborghini Centenario"},{url:"https://i.imgur.com/0AZOG1D.jpg",name:"Aston Martin One-77"},{url:"https://i.imgur.com/qlgU0n9.jpg",name:"Pagani Huayra"},{url:"https://i.imgur.com/Qol6aNw.jpg",name:"W Motors Lykan Hypersport"}]}=e,s=3;return t.$set=t=>{"covers"in t&&r(0,n=t.covers)},[n,s,(t,e)=>t(e),function(t){s=t,r(1,s)}]}class rt extends a{constructor(t){super(),o(this,t,et,R,i,{covers:0})}}function nt(t){let e,r;return e=new rt({}),{c(){I(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,n){H(e,t,n),r=!0},p:D,i(t){r||(y(e.$$.fragment,t),r=!0)},o(t){b(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}export default class extends a{constructor(t){super(),o(this,t,null,nt,i,{})}}