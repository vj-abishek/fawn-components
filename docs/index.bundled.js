/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=(t,s,i=null)=>{for(;s!==i;){const i=s.nextSibling;t.removeChild(s),s=i}},i=`{{lit-${String(Math.random()).slice(2)}}}`,e=`\x3c!--${i}--\x3e`,n=new RegExp(`${i}|${e}`);class o{constructor(t,s){this.parts=[],this.element=s;const e=[],o=[],a=document.createTreeWalker(s.content,133,null,!1);let c=0,p=-1,d=0;const{strings:u,values:{length:f}}=t;for(;d<f;){const t=a.nextNode();if(null!==t){if(p++,1===t.nodeType){if(t.hasAttributes()){const s=t.attributes,{length:i}=s;let e=0;for(let t=0;t<i;t++)r(s[t].name,"$lit$")&&e++;for(;e-- >0;){const s=u[d],i=l.exec(s)[2],e=i.toLowerCase()+"$lit$",o=t.getAttribute(e);t.removeAttribute(e);const r=o.split(n);this.parts.push({type:"attribute",index:p,name:i,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const s=t.data;if(s.indexOf(i)>=0){const i=t.parentNode,o=s.split(n),a=o.length-1;for(let s=0;s<a;s++){let e,n=o[s];if(""===n)e=h();else{const t=l.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),e=document.createTextNode(n)}i.insertBefore(e,t),this.parts.push({type:"node",index:++p})}""===o[a]?(i.insertBefore(h(),t),e.push(t)):t.data=o[a],d+=a}}else if(8===t.nodeType)if(t.data===i){const s=t.parentNode;null!==t.previousSibling&&p!==c||(p++,s.insertBefore(h(),t)),c=p,this.parts.push({type:"node",index:p}),null===t.nextSibling?t.data="":(e.push(t),p--),d++}else{let s=-1;for(;-1!==(s=t.data.indexOf(i,s+1));)this.parts.push({type:"node",index:-1}),d++}}else a.currentNode=o.pop()}for(const t of e)t.parentNode.removeChild(t)}}const r=(t,s)=>{const i=t.length-s.length;return i>=0&&t.slice(i)===s},a=t=>-1!==t.index,h=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(t,s){const{element:{content:i},parts:e}=t,n=document.createTreeWalker(i,133,null,!1);let o=d(e),r=e[o],a=-1,h=0;const l=[];let c=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),s.has(t)&&(l.push(t),null===c&&(c=t)),null!==c&&h++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-h,o=d(e,o),r=e[o]}l.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let s=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)s++;return s},d=(t,s=-1)=>{for(let i=s+1;i<t.length;i++){const s=t[i];if(a(s))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const u=new WeakMap,f=t=>"function"==typeof t&&u.has(t),w={},b={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class m{constructor(t,s,i){this.t=[],this.template=t,this.processor=s,this.options=i}update(t){let s=0;for(const i of this.t)void 0!==i&&i.setValue(t[s]),s++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const s=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),i=[],e=this.template.parts,n=document.createTreeWalker(s,133,null,!1);let o,r=0,h=0,l=n.nextNode();for(;r<e.length;)if(o=e[r],a(o)){for(;h<o.index;)h++,"TEMPLATE"===l.nodeName&&(i.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=i.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(s),customElements.upgrade(s)),s}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=` ${i} `;class g{constructor(t,s,i,e){this.strings=t,this.values=s,this.type=i,this.processor=e}getHTML(){const t=this.strings.length-1;let s="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const a=l.exec(t);s+=null===a?t+(n?x:e):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+i}return s+=this.strings[t],s}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,s,i){this.dirty=!0,this.element=t,this.name=s,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,s=t.length-1;let i="";for(let e=0;e<s;e++){i+=t[e];const s=this.parts[e];if(void 0!==s){const t=s.value;if(y(t)||!v(t))i+="string"==typeof t?t:String(t);else for(const s of t)i+="string"==typeof s?s:String(s)}}return i+=t[s],i}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===w||y(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=w,t(this)}this.value!==w&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.s=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.i(this.startNode=h()),t.i(this.endNode=h())}insertAfterPart(t){t.i(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.s=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.s);){const t=this.s;this.s=w,t(this)}const t=this.s;t!==w&&(y(t)?t!==this.value&&this.o(t):t instanceof g?this.h(t):t instanceof Node?this.l(t):v(t)?this.p(t):t===b?(this.value=b,this.clear()):this.o(t))}i(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.i(t),this.value=t)}o(t){const s=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);s===this.endNode.previousSibling&&3===s.nodeType?s.data=i:this.l(document.createTextNode(i)),this.value=t}h(t){const s=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===s)this.value.update(t.values);else{const i=new m(s,t.processor,this.options),e=i._clone();i.update(t.values),this.l(e),this.value=i}}p(t){Array.isArray(this.value)||(this.value=[],this.clear());const s=this.value;let i,e=0;for(const n of t)i=s[e],void 0===i&&(i=new C(this.options),s.push(i),0===e?i.appendIntoPart(this):i.insertAfterPart(s[e-1])),i.setValue(n),i.commit(),e++;e<s.length&&(s.length=e,this.clear(i&&i.endNode))}clear(t=this.startNode){s(this.startNode.parentNode,t.nextSibling,this.endNode)}}class _{constructor(t,s,i){if(this.value=void 0,this.s=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=s,this.strings=i}setValue(t){this.s=t}commit(){for(;f(this.s);){const t=this.s;this.s=w,t(this)}if(this.s===w)return;const t=!!this.s;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.s=w}}class $ extends k{constructor(t,s,i){super(t,s,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new j(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class j extends S{}let O=!1;(()=>{try{const t={get capture(){return O=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class M{constructor(t,s,i){this.value=void 0,this.s=void 0,this.element=t,this.eventName=s,this.eventContext=i,this.u=t=>this.handleEvent(t)}setValue(t){this.s=t}commit(){for(;f(this.s);){const t=this.s;this.s=w,t(this)}if(this.s===w)return;const t=this.s,s=this.value,i=null==t||null!=s&&(t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive),e=null!=t&&(null==s||i);i&&this.element.removeEventListener(this.eventName,this.u,this.m),e&&(this.m=A(t),this.element.addEventListener(this.eventName,this.u,this.m)),this.value=t,this.s=w}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(O?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function P(t){let s=L.get(t.type);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},L.set(t.type,s));let e=s.stringsArray.get(t.strings);if(void 0!==e)return e;const n=t.strings.join(i);return e=s.keyString.get(n),void 0===e&&(e=new o(t,t.getTemplateElement()),s.keyString.set(n,e)),s.stringsArray.set(t.strings,e),e}const L=new Map,U=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const I=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,s,i,e){const n=s[0];if("."===n){return new $(t,s.slice(1),i).parts}return"@"===n?[new M(t,s.slice(1),e.eventContext)]:"?"===n?[new _(t,s.slice(1),i)]:new k(t,s,i).parts}handleTextExpression(t){return new C(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const E=(t,...s)=>new g(t,s,"html",I)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,z=(t,s)=>`${t}--${s}`;let T=!0;void 0===window.ShadyCSS?T=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),T=!1);const V=t=>s=>{const e=z(s.type,t);let n=L.get(e);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},L.set(e,n));let r=n.stringsArray.get(s.strings);if(void 0!==r)return r;const a=s.strings.join(i);if(r=n.keyString.get(a),void 0===r){const i=s.getTemplateElement();T&&window.ShadyCSS.prepareTemplateDom(i,t),r=new o(s,i),n.keyString.set(a,r)}return n.stringsArray.set(s.strings,r),r},N=["html","svg"],q=new Set,F=(t,s,i)=>{q.add(t);const e=i?i.element:document.createElement("template"),n=s.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(e,t);const r=document.createElement("style");for(let t=0;t<o;t++){const s=n[t];s.parentNode.removeChild(s),r.textContent+=s.textContent}(t=>{N.forEach(s=>{const i=L.get(z(s,t));void 0!==i&&i.keyString.forEach(t=>{const{element:{content:s}}=t,i=new Set;Array.from(s.querySelectorAll("style")).forEach(t=>{i.add(t)}),c(t,i)})})})(t);const a=e.content;i?function(t,s,i=null){const{element:{content:e},parts:n}=t;if(null==i)return void e.appendChild(s);const o=document.createTreeWalker(e,133,null,!1);let r=d(n),a=0,h=-1;for(;o.nextNode();){for(h++,o.currentNode===i&&(a=p(s),i.parentNode.insertBefore(s,i));-1!==r&&n[r].index===h;){if(a>0){for(;-1!==r;)n[r].index+=a,r=d(n,r);return}r=d(n,r)}}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(e,t);const h=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)s.insertBefore(h.cloneNode(!0),s.firstChild);else if(i){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),c(i,t)}};window.JSCompiler_renameProperty=(t,s)=>t;const H={toAttribute(t,s){switch(s){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){switch(s){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},B=(t,s)=>s!==t&&(s==s||t==t),R={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:B};class J extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((s,i)=>{const e=this._attributeNameForProperty(i,s);void 0!==e&&(this._attributeToPropertyMap.set(e,i),t.push(e))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,s)=>this._classProperties.set(s,t))}}static createProperty(t,s=R){if(this._ensureClassProperties(),this._classProperties.set(t,s),s.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,e=this.getPropertyDescriptor(t,i,s);void 0!==e&&Object.defineProperty(this.prototype,t,e)}static getPropertyDescriptor(t,s,i){return{get(){return this[s]},set(i){const e=this[t];this[s]=i,this._requestUpdate(t,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||R}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,s=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of s)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,s,i=B){return i(t,s)}static _propertyValueFromAttribute(t,s){const i=s.type,e=s.converter||H,n="function"==typeof e?e:e.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,s){if(void 0===s.reflect)return;const i=s.type,e=s.converter;return(e&&e.toAttribute||H.toAttribute)(t,i)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,s)=>{if(this.hasOwnProperty(s)){const t=this[s];delete this[s],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(s,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,s)=>this[s]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,s,i){s!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,s,i=R){const e=this.constructor,n=e._attributeNameForProperty(t,i);if(void 0!==n){const t=e._propertyValueToAttribute(s,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,s){if(8&this._updateState)return;const i=this.constructor,e=i._attributeToPropertyMap.get(t);if(void 0!==e){const t=i.getPropertyOptions(e);this._updateState=16|this._updateState,this[e]=i._propertyValueFromAttribute(s,t),this._updateState=-17&this._updateState}}_requestUpdate(t,s){let i=!0;if(void 0!==t){const e=this.constructor,n=e.getPropertyOptions(t);e._valueHasChanged(this[t],s,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,s),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):i=!1}!this._hasRequestedUpdate&&i&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,s){return this._requestUpdate(t,s),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const s=this._changedProperties;try{t=this.shouldUpdate(s),t?this.update(s):this._markUpdated()}catch(s){throw t=!1,this._markUpdated(),s}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(s)),this.updated(s))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,s)=>this._propertyToAttribute(s,this[s],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const W=t=>s=>"function"==typeof s?((t,s)=>(window.customElements.define(t,s),s))(t,s):((t,s)=>{const{kind:i,elements:e}=s;return{kind:i,elements:e,finisher(s){window.customElements.define(t,s)}}})(t,s),Z=(t,s)=>"method"===s.kind&&s.descriptor&&!("value"in s.descriptor)?Object.assign(Object.assign({},s),{finisher(i){i.createProperty(s.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof s.initializer&&(this[s.key]=s.initializer.call(this))},finisher(i){i.createProperty(s.key,t)}};function D(t){return(s,i)=>void 0!==i?((t,s,i)=>{s.constructor.createProperty(i,t)})(t,s,i):Z(t,s)}const X=(t,s,i)=>{Object.defineProperty(s,i,t)},G=(t,s)=>({kind:"method",placement:"prototype",key:s.key,descriptor:t})
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,K="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class Y{constructor(t,s){if(s!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...s)=>{const i=s.reduce((s,i,e)=>s+(t=>{if(t instanceof Y)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[e+1],t[0]);return new Y(i,Q)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const st={};class it extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const s=(t,i)=>t.reduceRight((t,i)=>Array.isArray(i)?s(i,t):(t.add(i),t),i),i=s(t,new Set),e=[];i.forEach(t=>e.unshift(t)),this._styles=e}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const s=this.render();super.update(t),s!==st&&this.constructor.render(s,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const s=document.createElement("style");s.textContent=t.cssText,this.renderRoot.appendChild(s)}))}render(){return st}}it.finalized=!0,it.render=(t,i,e)=>{if(!e||"object"!=typeof e||!e.scopeName)throw new Error("The `scopeName` option is required.");const n=e.scopeName,o=U.has(i),r=T&&11===i.nodeType&&!!i.host,a=r&&!q.has(n),h=a?document.createDocumentFragment():i;if(((t,i,e)=>{let n=U.get(i);void 0===n&&(s(i,i.firstChild),U.set(i,n=new C(Object.assign({templateFactory:P},e))),n.appendInto(i)),n.setValue(t),n.commit()})(t,h,Object.assign({templateFactory:V(n)},e)),a){const t=U.get(h);U.delete(h);const e=t.value instanceof m?t.value.template:void 0;F(n,h,e),s(i,i.firstChild),i.appendChild(h),U.set(i,t)}!o&&r&&window.ShadyCSS.styleElement(i.host)};
/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
var et=function(t,s,i,e){for(var n,o=arguments.length,r=o<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(s,i,r):n(s,i))||r);return o>3&&r&&Object.defineProperty(s,i,r),r};let nt=class extends it{constructor(){super(...arguments),this.name="World",this.count=0}render(){return E`
      <h1>Abigo, ${this.name}!</h1>
      <button @click=${this._onClick} part="button">
        Click Count: ${this.count}
      </button>
      <slot></slot>
    `}_onClick(){this.count++}};nt.styles=tt`
    :host {
      display: block;
      border: solid 1px gray;
      padding: 16px;
      max-width: 800px;
    }
  `,et([D()],nt.prototype,"name",void 0),et([D({type:Number})],nt.prototype,"count",void 0),nt=et([W("my-element")],nt);var ot=function(t,s,i,e){for(var n,o=arguments.length,r=o<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(s,i,r):n(s,i))||r);return o>3&&r&&Object.defineProperty(s,i,r),r};let rt=class extends it{constructor(){super(),this.value="Install",this.background="#602ac1",this.color="#fff",this.size="56px",this._prompt=!1,this._trigger=!1}render(){return this._trigger?E`
       <button @click="${this._onClick}"
             style="--fn-pwa-install-background: ${this.background};
                 color: ${this.color};
                 --fn-pwa-install-size: ${this.size}
             "                 
             class="fn-pwa-button" role="button" aria-label="Install this app">
                <!-- Icon from https://css.gg/software-download -->
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z" fill="currentColor" /><path d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor" />
                </svg>
                <span class="fn-pwa-install-message">
                    ${this.value}
                </span>
        </button>
    `:""}_onClick(){this._trigger=!1,this.requestUpdate(),this._prompt.prompt()}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),this._prompt=t,this._trigger=!0,this.requestUpdate()})}};rt.styles=tt`
  .fn-pwa-button{
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: var(--fn-pwa-install-background);
    border: 0;
    border-radius: 50%;
    -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
    box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
    color: #fff;
    cursor: pointer;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    font-family: Segoe UI,system-ui,-apple-system,sans-serif;
    font-size: .875em;
    font-weight: 600;
    height: var(--fn-pwa-install-size);
    letter-spacing: 1px;
    overflow: hidden;
    padding: 0;
    justify-content:center;
    position: relative;
    text-indent: -9999px;
    text-overflow: initial;
    text-transform: uppercase;
    width: var(--fn-pwa-install-size);
  } 

  .fn-pwa-button:focus{
      outline:none;
  }
  .fn-pwa-button:hover{
      opacity:0.95;
  }
  .fn-pwa-install-message{
      display:none;
      margin-left:4px;
  }
  @media (min-width: 1264px){
    .fn-pwa-button {
        border-radius: 28px;
        padding: 0 24px 0 24px;
        text-indent: 0;
        width: auto;
    }
    .fn-pwa-install-message{
        display:block;
    }
  }
  `,ot([D({type:String})],rt.prototype,"value",void 0),ot([D({type:String})],rt.prototype,"background",void 0),ot([D({type:String})],rt.prototype,"color",void 0),ot([D({type:String})],rt.prototype,"size",void 0),rt=ot([W("fn-pwa-button")],rt);var at=function(t,s,i,e){for(var n,o=arguments.length,r=o<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(s,i,r):n(s,i))||r);return o>3&&r&&Object.defineProperty(s,i,r),r};let ht=class extends it{constructor(){super(),this.value="Installing uses almost no storage and provides a quick way  to return to this app",this.title="Install",this.background="#602ac1",this.show=!1,this.color="#fff",this._prompt=!1,this._trigger=!1,setTimeout(()=>{this._trigger=!1,this.requestUpdate()},7e3)}render(){return this._trigger&&this.show?E`
        <div class="fn-pwa-banner" 
             style= "--fn-pwa-banner-background: ${this.background};--fn-pwa-banner-color: ${this.color}"
        >
            <div>
                <span class="fn-pwa-banner-title">${this.title}</span>
                <span>${this.value}</span>
            </div>

            <div style="align-self:center;margin-left:15px;" @click="${this._onClick}">
                <button class="fn-pwa-banner-button">Install</button>
            </div>
        </div>
    `:""}_onClick(){this._trigger=!1,this.requestUpdate(),this._prompt.prompt()}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),this._prompt=t,this._trigger=!0,this.requestUpdate()})}};ht.styles=tt`
  .fn-pwa-banner{
      width: calc(100vw - 20px);
      border-radius: 0px;
      padding: 10px;
      position:fixed;
      z-index:999;
      bottom: 0px;
      left: 0px;
      color:var(--fn-pwa-banner-color);
      background-color:var(--fn-pwa-banner-background);
      font-family: Segoe UI,system-ui,-apple-system,sans-serif;
      display: flex;
      flex-direction:row;
      overflow: hidden;
      animation-name: slide;
      animation-duration: .25s;
      transition: transform 0.25s ease-in;
  } 
  @keyframes slide{
      0%{
        transform:translate(-500px);
        opacity:0;
      }
      100%{
        transform:translate(0px);
        opacity:1;
      }
  }
  @-webkit-keyframes slide{
    0%{
        transform:translate(-500px);
        opacity:0;
      }
      100%{
        transform:translate(0px);
        opacity:1;
      }
  }

  .fn-pwa-banner > div{
      display: flex;
      flex-direction:column;
  }

  .fn-pwa-banner-title{
    font-weight: 600;
    margin-bottom:5px;
    font-size:1.2em;
  }
  .fn-pwa-banner-button{
      align-self:center;
      height:40px;
      border-radius: 24px;
      font-weight:600;
      color: var(--fn-pwa-banner-background);
      width: auto;
      padding: 0 24px 0 24px;
      cursor: pointer;
      border:0px;
      text-overflow: initial;
      font-size:1em;
      line-height:30px;
      font-family: Segoe UI,system-ui,-apple-system,sans-serif;
      text-transform: uppercase;
      background-color:#f4f4f9;
  }


  @media (min-width: 720px){
    .fn-pwa-banner {
       max-width: 500px;
       width:auto;
       bottom: 8px;
       left: 8px;
       -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
       box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
       border-radius: 6px;
       padding:20px;
    }
  }
  `,at([D({type:String})],ht.prototype,"value",void 0),at([D({type:String})],ht.prototype,"title",void 0),at([D({type:String})],ht.prototype,"background",void 0),at([D({type:Boolean})],ht.prototype,"show",void 0),at([D({type:String})],ht.prototype,"color",void 0),ht=at([W("fn-pwa-banner")],ht);var lt=function(t,s,i,e){for(var n,o=arguments.length,r=o<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(s,i,r):n(s,i))||r);return o>3&&r&&Object.defineProperty(s,i,r),r};let ct=class extends it{constructor(){super(),this.background="#602ac1",this.color="#fff",this.value="It looks like you're offline",this.show=!1}render(){return this.show?E`
        <div @click="${this._onClick}" style="--fn-pwa-status: ${this.background}; --fn-pwa-status-color: ${this.color}">
            <span style="margin-left:30px">${this.value}</span>
            <span style="display:flex;margin-right:30px;">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                    d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                    fill="currentColor"
                    />
                </svg>
            </span>
       </div>
    `:""}_onClick(){this.show=!1,this.requestUpdate()}connectedCallback(){super.connectedCallback(),window.addEventListener("online",()=>{this.show=!1,this.requestUpdate()}),window.addEventListener("offline",()=>{this.show=!0,this.requestUpdate()})}};ct.styles=tt`
    :host{
        position:fixed;
        bottom:10px;
        width:80vw;
        left: 50%;
        z-index:9999;
        transform: translateX(-50%);
        background:transparent;
        border-radius:8px;
    }
    div{
        width:100%;
        height:50px;
        background-color:var(--fn-pwa-status);
        color:var(--fn-pwa-status-color);
        border-radius:8px;
        line-height:50px;
        display:flex;
        font-family: Segoe UI,system-ui,-apple-system,sans-serif;
        -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
        box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12);
        cursor:pointer;
        align-items:center;
        justify-content:space-between;
        animation-name: fade;
        animation-duration: .25s;
        transition: opacity 0.25s ease-in;
        text-align:center;
    }

    @keyframes fade{
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }
    @-webkit-keyframes fade{
        0%{
            opacity:0;
        }
        100%{
            opacity:1;
        }
    }

    @media (min-width: 1264px){
    :host{
        width:300px;
    }
  }
  `,lt([D({type:String})],ct.prototype,"background",void 0),lt([D({type:String})],ct.prototype,"color",void 0),lt([D({type:String})],ct.prototype,"value",void 0),ct=lt([W("fn-pwa-status")],ct);var pt=function(t,s,i,e){for(var n,o=arguments.length,r=o<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(s,i,r):n(s,i))||r);return o>3&&r&&Object.defineProperty(s,i,r),r};let dt=class extends it{constructor(){super(),this.background="#602ac1",this.color="#fff",this.addEventListener("click",this._onClick)}render(){return E`
    <button id="fn-material-button"
     style="background-color: ${this.background};color: ${this.color}">
        <slot></slot>
    </button>
    `}_onClick(t){const s=new CustomEvent("fn-click");this.dispatchEvent(s);const i=this._fnbutton,e=document.createElement("span"),n=Math.max(i.clientWidth,i.clientHeight),o=n/2;e.style.width=e.style.height=`${n}px`,e.style.left=`${t.clientX-i.offsetLeft-o}px`,e.style.top=`${t.clientY-i.offsetTop-o}px`,e.classList.add("ripple");const r=i.getElementsByClassName("ripple")[0];r&&r.remove(),i.appendChild(e)}};var ut;dt.styles=tt` 
  button {
    position: relative;
    overflow: hidden;
    transition: background 400ms;
    color: #fff;
    background-color:#602ac1;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    outline: 0;
    border: 0;
    border-radius: 0.25rem;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.3);
    cursor: pointer;
    }
    span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
    }

    @keyframes ripple {
      to {
          transform: scale(4);
          opacity: 0;
      }
    }
    @-webkit-keyframes ripple {
      to {
          transform: scale(4);
          opacity: 0;
      }
    }
  `,pt([D({type:String})],dt.prototype,"background",void 0),pt([D({type:String})],dt.prototype,"color",void 0),pt([(ut="#fn-material-button",(t,s)=>{const i={get(){return this.renderRoot.querySelector(ut)},enumerable:!0,configurable:!0};return void 0!==s?X(i,t,s):G(i,t)})],dt.prototype,"_fnbutton",void 0),dt=pt([W("fn-ripple-btn")],dt);
