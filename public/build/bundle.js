var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function i(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function u(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function f(t){return document.createElement(t)}function a(){return t=" ",document.createTextNode(t);var t}function d(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function g(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let h;function $(t){h=t}const p=[],m=[],y=[],b=[],k=Promise.resolve();let v=!1;function _(t){y.push(t)}const x=new Set;let C=0;function w(){const t=h;do{for(;C<p.length;){const t=p[C];C++,$(t),E(t.$$)}for($(null),p.length=0,C=0;m.length;)m.pop()();for(let t=0;t<y.length;t+=1){const n=y[t];x.has(n)||(x.add(n),n())}y.length=0}while(p.length);for(;b.length;)b.pop()();v=!1,x.clear(),$(t)}function E(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(_)}}const P=new Set;let A;function F(){A={r:0,c:[],p:A}}function j(){A.r||o(A.c),A=A.p}function B(t,n){t&&t.i&&(P.delete(t),t.i(n))}function L(t,n,e,o){if(t&&t.o){if(P.has(t))return;P.add(t),A.c.push((()=>{P.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function N(t){t&&t.c()}function O(t,e,l,c){const{fragment:i,on_mount:s,on_destroy:u,after_update:f}=t.$$;i&&i.m(e,l),c||_((()=>{const e=s.map(n).filter(r);u?u.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(_)}function q(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function S(t,n){-1===t.$$.dirty[0]&&(p.push(t),v||(v=!0,k.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function G(n,r,l,c,i,u,f,a=[-1]){const d=h;$(n);const g=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:e(),dirty:a,skip_bound:!1,root:r.target||d.$$.root};f&&f(g.root);let p=!1;if(g.ctx=l?l(n,r.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return g.ctx&&i(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),p&&S(n,t)),e})):[],g.update(),p=!0,o(g.before_update),g.fragment=!!c&&c(g.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);g.fragment&&g.fragment.l(t),t.forEach(s)}else g.fragment&&g.fragment.c();r.intro&&B(n.$$.fragment),O(n,r.target,r.anchor,r.customElement),w()}$(d)}class M{$destroy(){q(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function T(n){let e,o,l;return{c(){e=f("div"),g(e,"class","amsler-focal-point svelte-1sekyha")},m(t,c){i(t,e,c),o||(l=d(e,"click",(function(){r(n[0])&&n[0].apply(this,arguments)})),o=!0)},p(t,[e]){n=t},i:t,o:t,d(t){t&&s(e),o=!1,l()}}}function z(t,n,e){let{onFocalPointClicked:o}=n;return t.$$set=t=>{"onFocalPointClicked"in t&&e(0,o=t.onFocalPointClicked)},[o]}class D extends M{constructor(t){super(),G(this,t,z,T,l,{onFocalPointClicked:0})}}function H(n){let e;return{c(){var t;e=f("div"),g(e,"class",(null==(t="cell")?"":t)+" svelte-16qvobw"),g(e,"id",n[0])},m(t,n){i(t,e,n)},p(t,[n]){1&n&&g(e,"id",t[0])},i:t,o:t,d(t){t&&s(e)}}}function I(t,n,e){let{id:o}=n;return t.$$set=t=>{"id"in t&&e(0,o=t.id)},[o]}class J extends M{constructor(t){super(),G(this,t,I,H,l,{id:0})}}function K(t,n,e){const o=t.slice();return o[3]=n[e],o}function Q(t,n,e){const o=t.slice();return o[6]=n[e],o}function R(t){let n,e;return n=new J({props:{id:t[6].id}}),{c(){N(n.$$.fragment)},m(t,o){O(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.id=t[6].id),n.$set(o)},i(t){e||(B(n.$$.fragment,t),e=!0)},o(t){L(n.$$.fragment,t),e=!1},d(t){q(n,t)}}}function U(t){let n,e,o,r=t[3],l=[];for(let n=0;n<r.length;n+=1)l[n]=R(Q(t,r,n));const d=t=>L(l[t],1,1,(()=>{l[t]=null}));return{c(){n=f("div");for(let t=0;t<l.length;t+=1)l[t].c();e=a(),g(n,"class","amsler-row svelte-1smrp5n")},m(t,r){i(t,n,r);for(let t=0;t<l.length;t+=1)l[t].m(n,null);c(n,e),o=!0},p(t,o){if(1&o){let c;for(r=t[3],c=0;c<r.length;c+=1){const i=Q(t,r,c);l[c]?(l[c].p(i,o),B(l[c],1)):(l[c]=R(i),l[c].c(),B(l[c],1),l[c].m(n,e))}for(F(),c=r.length;c<l.length;c+=1)d(c);j()}},i(t){if(!o){for(let t=0;t<r.length;t+=1)B(l[t]);o=!0}},o(t){l=l.filter(Boolean);for(let t=0;t<l.length;t+=1)L(l[t]);o=!1},d(t){t&&s(n),u(l,t)}}}function V(t){let n,e,o,r,l=t[0],c=[];for(let n=0;n<l.length;n+=1)c[n]=U(K(t,l,n));const a=t=>L(c[t],1,1,(()=>{c[t]=null}));return{c(){n=f("div");for(let t=0;t<c.length;t+=1)c[t].c();g(n,"class","amsler-grid")},m(l,s){i(l,n,s);for(let t=0;t<c.length;t+=1)c[t].m(n,null);e=!0,o||(r=d(n,"click",t[1]),o=!0)},p(t,[e]){if(1&e){let o;for(l=t[0],o=0;o<l.length;o+=1){const r=K(t,l,o);c[o]?(c[o].p(r,e),B(c[o],1)):(c[o]=U(r),c[o].c(),B(c[o],1),c[o].m(n,null))}for(F(),o=l.length;o<c.length;o+=1)a(o);j()}},i(t){if(!e){for(let t=0;t<l.length;t+=1)B(c[t]);e=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)L(c[t]);e=!1},d(t){t&&s(n),u(c,t),o=!1,r()}}}function W(t,n,e){let{grid:o=[]}=n,{onCellClicked:r}=n;return t.$$set=t=>{"grid"in t&&e(0,o=t.grid),"onCellClicked"in t&&e(2,r=t.onCellClicked)},[o,t=>{r(t)},r]}class X extends M{constructor(t){super(),G(this,t,W,V,l,{grid:0,onCellClicked:2})}}function Y(n){let e,o,r,l,u,d,h;return l=new X({props:{grid:n[0],onCellClicked:n[1]}}),d=new D({props:{onFocalPointClicked:n[2]}}),{c(){e=f("h1"),e.textContent="Amsler Grid",o=a(),r=f("main"),N(l.$$.fragment),u=a(),N(d.$$.fragment),g(e,"class","svelte-1h4uy78"),g(r,"class","amsler-grid-container svelte-1h4uy78")},m(t,n){i(t,e,n),i(t,o,n),i(t,r,n),O(l,r,null),c(r,u),O(d,r,null),h=!0},p:t,i(t){h||(B(l.$$.fragment,t),B(d.$$.fragment,t),h=!0)},o(t){L(l.$$.fragment,t),L(d.$$.fragment,t),h=!1},d(t){t&&s(e),t&&s(o),t&&s(r),q(l),q(d)}}}function Z(t){const n=[];let e=!1;for(let t=0;t<20;t++){const e=[];for(let n=0;n<20;n++)e.push({id:`${t},${n}`});n.push(e)}return[n,({target:t})=>{e&&t.classList.toggle("highlight")},()=>{e=!e}]}return new class extends M{constructor(t){super(),G(this,t,Z,Y,l,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
