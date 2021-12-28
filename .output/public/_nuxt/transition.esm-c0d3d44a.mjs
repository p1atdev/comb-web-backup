import{a0 as le,ah as U,ak as O,aE as j,d as z,h as x,a$ as H,z as A,ax as E,aB as K,a_ as fe}from"./bootstrap-08e2f092.mjs";function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function B(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function de(e,t){if(!!e){if(typeof e=="string")return Y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Y(e,t)}}function Y(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function G(e,t){var n;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(n=de(e))||t&&e&&typeof e.length=="number"){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return n=e[Symbol.iterator](),n.next.bind(n)}function T(e,t){if(e in t){for(var n=t[e],r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];return typeof n=="function"?n.apply(void 0,i):n}var o=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map(function(u){return'"'+u+'"'}).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(o,T),o}var S;(function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"})(S||(S={}));var v;(function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"})(v||(v={}));function J(e){var t=e.visible,n=t===void 0?!0:t,r=e.features,i=r===void 0?S.None:r,a=B(e,["visible","features"]);if(n||i&S.Static&&a.props.static)return V(a);if(i&S.RenderStrategy){var o,u,s=((o=a.props.unmount)!=null?o:!0)?v.Unmount:v.Hidden;return T(s,(u={},u[v.Unmount]=function(){return null},u[v.Hidden]=function(){return V(m({},a,{props:m({},a.props,{hidden:!0,style:{display:"none"}})}))},u))}return V(a)}function V(e){var t=e.props,n=e.attrs,r=e.slots,i=e.slot,a=e.name,o=ve(t,["unmount","static"]),u=o.as,s=B(o,["as"]),d=r.default==null?void 0:r.default(i);if(u==="template"){if(Object.keys(s).length>0||Object.keys(n).length>0){var p=d!=null?d:[],h=p[0],b=p.slice(1);if(!ce(h)||b.length>0)throw new Error(['Passing props on "template"!',"","The current component <"+a+' /> is rendering a "template".',"However we need to passthrough the following props:",Object.keys(s).concat(Object.keys(n)).map(function(c){return"  - "+c}).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(function(c){return"  - "+c}).join(`
`)].join(`
`));return le(h,s)}return Array.isArray(d)&&d.length===1?d[0]:d}return U(u,s,d)}function ve(e,t){t===void 0&&(t=[]);for(var n=Object.assign({},e),r=G(t),i;!(i=r()).done;){var a=i.value;a in n&&delete n[a]}return n}function ce(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var pe=0;function me(){return++pe}function he(){return me()}function Q(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}var X=Symbol("Context"),$;(function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"})($||($={}));function ge(){return Z()!==null}function Z(){return O(X,null)}function ye(e){j(X,e)}function be(e){var t={called:!1};return function(){if(!t.called)return t.called=!0,e.apply(void 0,arguments)}}function k(){var e=[],t={requestAnimationFrame:function(n){function r(){return n.apply(this,arguments)}return r.toString=function(){return n.toString()},r}(function(){var n=requestAnimationFrame.apply(void 0,arguments);t.add(function(){return cancelAnimationFrame(n)})}),nextFrame:function(){for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];t.requestAnimationFrame(function(){t.requestAnimationFrame.apply(t,i)})},setTimeout:function(n){function r(){return n.apply(this,arguments)}return r.toString=function(){return n.toString()},r}(function(){var n=setTimeout.apply(void 0,arguments);t.add(function(){return clearTimeout(n)})}),add:function(r){e.push(r)},dispose:function(){for(var r=G(e.splice(0)),i;!(i=r()).done;){var a=i.value;a()}}};return t}function D(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e&&r.length>0&&(t=e.classList).add.apply(t,r)}function P(e){for(var t,n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];e&&r.length>0&&(t=e.classList).remove.apply(t,r)}var y;(function(e){e.Finished="finished",e.Cancelled="cancelled"})(y||(y={}));function we(e,t){var n=k();if(!e)return n.dispose;var r=getComputedStyle(e),i=r.transitionDuration,a=r.transitionDelay,o=[i,a].map(function(d){var p=d.split(",").filter(Boolean).map(function(c){return c.includes("ms")?parseFloat(c):parseFloat(c)*1e3}).sort(function(c,g){return g-c}),h=p[0],b=h===void 0?0:h;return b}),u=o[0],s=o[1];return u!==0?n.setTimeout(function(){return t(y.Finished)},u+s):t(y.Finished),n.add(function(){return t(y.Cancelled)}),n.dispose}function _(e,t,n,r,i,a){var o=k(),u=a!==void 0?be(a):function(){};return P.apply(void 0,[e].concat(i)),D.apply(void 0,[e].concat(t,n)),o.nextFrame(function(){P.apply(void 0,[e].concat(n)),D.apply(void 0,[e].concat(r)),o.add(we(e,function(s){return P.apply(void 0,[e].concat(r,t)),D.apply(void 0,[e].concat(i)),u(s)}))}),o.add(function(){return P.apply(void 0,[e].concat(t,n,r,i))}),o.add(function(){return u(y.Cancelled)}),o.dispose}function w(e){return e===void 0&&(e=""),e.split(" ").filter(function(t){return t.trim().length>1})}var I=Symbol("TransitionContext"),l;(function(e){e.Visible="visible",e.Hidden="hidden"})(l||(l={}));function Ce(){return O(I,null)!==null}function Te(){var e=O(I,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Se(){var e=O(M,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}var M=Symbol("NestingContext");function R(e){return"children"in e?R(e.children):e.value.filter(function(t){var n=t.state;return n===l.Visible}).length>0}function ee(e){var t=A([]),n=A(!1);E(function(){return n.value=!0}),K(function(){return n.value=!1});function r(a,o){var u;o===void 0&&(o=v.Hidden);var s=t.value.findIndex(function(d){var p=d.id;return p===a});s!==-1&&(T(o,(u={},u[v.Unmount]=function(){t.value.splice(s,1)},u[v.Hidden]=function(){t.value[s].state=l.Hidden},u)),!R(t)&&n.value&&(e==null||e()))}function i(a){var o=t.value.find(function(u){var s=u.id;return s===a});return o?o.state!==l.Visible&&(o.state=l.Visible):t.value.push({id:a,state:l.Visible}),function(){return r(a,v.Unmount)}}return{children:t,register:i,unregister:r}}var te=S.RenderStrategy,$e=z({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:function(){return!0},afterEnter:function(){return!0},beforeLeave:function(){return!0},afterLeave:function(){return!0}},render:function(){var t=this;if(this.renderAsRoot)return U(Ae,m({},this.$props,{onBeforeEnter:function(){return t.$emit("beforeEnter")},onAfterEnter:function(){return t.$emit("afterEnter")},onBeforeLeave:function(){return t.$emit("beforeLeave")},onAfterLeave:function(){return t.$emit("afterLeave")}}),this.$slots);var n=this.$props,r=B(n,["appear","show","enter","enterFrom","enterTo","entered","leave","leaveFrom","leaveTo"]),i={ref:"el"},a=r;return J({props:m({},a,i),slot:{},slots:this.$slots,attrs:this.$attrs,features:te,visible:this.state===l.Visible,name:"TransitionChild"})},setup:function(t,n){var r=n.emit;if(!Ce()&&ge())return{renderAsRoot:!0};var i=A(null),a=A(l.Visible),o=x(function(){return t.unmount?v.Unmount:v.Hidden}),u=Te(),s=u.show,d=u.appear,p=Se(),h=p.register,b=p.unregister,c={value:!0},g=he(),L={value:!1},q=ee(function(){L.value||(a.value=l.Hidden,b(g),r("afterLeave"))});E(function(){var f=h(g);K(f)}),H(function(){var f;if(o.value===v.Hidden&&!!g){if(s&&a.value!==l.Visible){a.value=l.Visible;return}T(a.value,(f={},f[l.Hidden]=function(){return b(g)},f[l.Visible]=function(){return h(g)},f))}});var ne=w(t.enter),re=w(t.enterFrom),ae=w(t.enterTo),W=w(t.entered),ie=w(t.leave),oe=w(t.leaveFrom),ue=w(t.leaveTo);E(function(){H(function(){if(a.value===l.Visible){var f=Q(i),F=f instanceof Comment&&f.data==="";if(F)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function se(f){var F=c.value&&!d.value,C=Q(i);!C||!(C instanceof HTMLElement)||F||(L.value=!0,s.value&&r("beforeEnter"),s.value||r("beforeLeave"),f(s.value?_(C,ne,re,ae,W,function(N){L.value=!1,N===y.Finished&&r("afterEnter")}):_(C,ie,oe,ue,W,function(N){L.value=!1,N===y.Finished&&(R(q)||(a.value=l.Hidden,b(g),r("afterLeave")))})))}return E(function(){fe([s,d],function(f,F,C){se(C),c.value=!1},{immediate:!0})}),j(M,q),ye(x(function(){var f;return T(a.value,(f={},f[l.Visible]=$.Open,f[l.Hidden]=$.Closed,f))})),{el:i,renderAsRoot:!1,state:a}}}),Ae=z({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:function(){return!0},afterEnter:function(){return!0},beforeLeave:function(){return!0},afterLeave:function(){return!0}},render:function(){var t=this,n=this.$props,r=n.unmount,i=B(n,["show","appear","unmount"]),a={unmount:r};return J({props:m({},a,{as:"template"}),slot:{},slots:m({},this.$slots,{default:function(){return[U($e,m({onBeforeEnter:function(){return t.$emit("beforeEnter")},onAfterEnter:function(){return t.$emit("afterEnter")},onBeforeLeave:function(){return t.$emit("beforeLeave")},onAfterLeave:function(){return t.$emit("afterLeave")}},t.$attrs,a,i),t.$slots.default)]}}),attrs:{},features:te,visible:this.state===l.Visible,name:"Transition"})},setup:function(t){var n=Z(),r=x(function(){if(t.show===null&&n!==null){var s;return T(n.value,(s={},s[$.Open]=!0,s[$.Closed]=!1,s))}return t.show});H(function(){if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});var i=A(r.value?l.Visible:l.Hidden),a=ee(function(){i.value=l.Hidden}),o={value:!0},u={show:r,appear:x(function(){return t.appear||!o.value})};return E(function(){H(function(){o.value=!1,r.value?i.value=l.Visible:R(a)||(i.value=l.Hidden)})}),j(M,a),j(I,u),{state:i,show:r}}});export{Ae as T};
