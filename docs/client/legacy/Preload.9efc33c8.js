import{i as n,s as t,S as r,Z as o,U as e,n as c,v as i,w as u,k as l,q as f,u as a,p as s}from"./client.ad9819ca.js";import m from"@babel/runtime/helpers/esm/classCallCheck";import p from"@babel/runtime/helpers/esm/assertThisInitialized";import b from"@babel/runtime/helpers/esm/inherits";import v from"@babel/runtime/helpers/esm/possibleConstructorReturn";import h from"@babel/runtime/helpers/esm/getPrototypeOf";import d from"@babel/runtime/helpers/esm/slicedToArray";function k(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var r,o=h(n);if(t){var e=h(this).constructor;r=Reflect.construct(o,arguments,e)}else r=o.apply(this,arguments);return v(this,r)}}var $=function(n){return{src:3&n}},y=function(n){return{src:n[5]}},R=function(n){return{src:3&n}},P=function(n){return{src:n[5]}};function g(n){var t,r=n[4].fallback,o=f(r,n,n[3],y);return{c:function(){o&&o.c()},l:function(n){o&&o.l(n)},m:function(n,r){o&&o.m(n,r),t=!0},p:function(n,t){o&&o.p&&11&t&&a(o,r,n,n[3],t,$,y)},i:function(n){t||(i(o,n),t=!0)},o:function(n){u(o,n),t=!1},d:function(n){o&&o.d(n)}}}function x(n){var t,r=n[4].default,o=f(r,n,n[3],P);return{c:function(){o&&o.c()},l:function(n){o&&o.l(n)},m:function(n,r){o&&o.m(n,r),t=!0},p:function(n,t){o&&o.p&&11&t&&a(o,r,n,n[3],t,R,P)},i:function(n){t||(i(o,n),t=!0)},o:function(n){u(o,n),t=!1},d:function(n){o&&o.d(n)}}}function w(n){return{c:s,l:s,m:s,p:s,i:s,o:s,d:s}}function C(n){var t,r,f,a={ctx:n,current:null,token:null,pending:w,then:x,catch:g,value:5,error:6,blocks:[,,,]};return o(r=n[2](n[0],n[1]),a),{c:function(){t=e(),a.block.c()},l:function(n){t=e(),a.block.l(n)},m:function(n,r){c(n,t,r),a.block.m(n,a.anchor=r),a.mount=function(){return t.parentNode},a.anchor=t,f=!0},p:function(t,e){var c=d(e,1)[0];if(n=t,a.ctx=n,3&c&&r!==(r=n[2](n[0],n[1]))&&o(r,a));else{var i=n.slice();i[5]=a.resolved,a.block.p(i,c)}},i:function(n){f||(i(a.block),f=!0)},o:function(n){for(var t=0;t<3;t+=1){var r=a.blocks[t];u(r)}f=!1},d:function(n){n&&l(t),a.block.d(n),a.token=null,a=null}}}var D={};function I(n,t,r){var o=t.url,e=t.fallback,c=t.$$slots,i=void 0===c?{}:c,u=t.$$scope;return n.$set=function(n){"url"in n&&r(0,o=n.url),"fallback"in n&&r(1,e=n.fallback),"$$scope"in n&&r(3,u=n.$$scope)},[o,e,function(n){return D[n]?Promise.resolve(n):(n||(n=e),new Promise((function(t,r){var o=new Image;o.onload=function(){D[n]=!0,t(n)},o.onerror=r,o.src=n})))},u,i]}var S=function(o){b(c,r);var e=k(c);function c(r){var o;return m(this,c),o=e.call(this),n(p(o),r,I,C,t,{url:0,fallback:1}),o}return c}();export{S as P};