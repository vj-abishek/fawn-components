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
const t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,i=(t,i,s=null)=>{for(;i!==s;){const s=i.nextSibling;t.removeChild(i),i=s}},s=`{{lit-${String(Math.random()).slice(2)}}}`,e=`\x3c!--${s}--\x3e`,n=new RegExp(`${s}|${e}`);class o{constructor(t,i){this.parts=[],this.element=i;const e=[],o=[],a=document.createTreeWalker(i.content,133,null,!1);let c=0,p=-1,d=0;const{strings:u,values:{length:f}}=t;for(;d<f;){const t=a.nextNode();if(null!==t){if(p++,1===t.nodeType){if(t.hasAttributes()){const i=t.attributes,{length:s}=i;let e=0;for(let t=0;t<s;t++)r(i[t].name,"$lit$")&&e++;for(;e-- >0;){const i=u[d],s=l.exec(i)[2],e=s.toLowerCase()+"$lit$",o=t.getAttribute(e);t.removeAttribute(e);const r=o.split(n);this.parts.push({type:"attribute",index:p,name:s,strings:r}),d+=r.length-1}}"TEMPLATE"===t.tagName&&(o.push(t),a.currentNode=t.content)}else if(3===t.nodeType){const i=t.data;if(i.indexOf(s)>=0){const s=t.parentNode,o=i.split(n),a=o.length-1;for(let i=0;i<a;i++){let e,n=o[i];if(""===n)e=h();else{const t=l.exec(n);null!==t&&r(t[2],"$lit$")&&(n=n.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),e=document.createTextNode(n)}s.insertBefore(e,t),this.parts.push({type:"node",index:++p})}""===o[a]?(s.insertBefore(h(),t),e.push(t)):t.data=o[a],d+=a}}else if(8===t.nodeType)if(t.data===s){const i=t.parentNode;null!==t.previousSibling&&p!==c||(p++,i.insertBefore(h(),t)),c=p,this.parts.push({type:"node",index:p}),null===t.nextSibling?t.data="":(e.push(t),p--),d++}else{let i=-1;for(;-1!==(i=t.data.indexOf(s,i+1));)this.parts.push({type:"node",index:-1}),d++}}else a.currentNode=o.pop()}for(const t of e)t.parentNode.removeChild(t)}}const r=(t,i)=>{const s=t.length-i.length;return s>=0&&t.slice(s)===i},a=t=>-1!==t.index,h=()=>document.createComment(""),l=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function c(t,i){const{element:{content:s},parts:e}=t,n=document.createTreeWalker(s,133,null,!1);let o=d(e),r=e[o],a=-1,h=0;const l=[];let c=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===c&&(c=null),i.has(t)&&(l.push(t),null===c&&(c=t)),null!==c&&h++;void 0!==r&&r.index===a;)r.index=null!==c?-1:r.index-h,o=d(e,o),r=e[o]}l.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let i=11===t.nodeType?0:1;const s=document.createTreeWalker(t,133,null,!1);for(;s.nextNode();)i++;return i},d=(t,i=-1)=>{for(let s=i+1;s<t.length;s++){const i=t[s];if(a(i))return s}return-1};
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
class m{constructor(t,i,s){this.t=[],this.template=t,this.processor=i,this.options=s}update(t){let i=0;for(const s of this.t)void 0!==s&&s.setValue(t[i]),i++;for(const t of this.t)void 0!==t&&t.commit()}_clone(){const i=t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),s=[],e=this.template.parts,n=document.createTreeWalker(i,133,null,!1);let o,r=0,h=0,l=n.nextNode();for(;r<e.length;)if(o=e[r],a(o)){for(;h<o.index;)h++,"TEMPLATE"===l.nodeName&&(s.push(l),n.currentNode=l.content),null===(l=n.nextNode())&&(n.currentNode=s.pop(),l=n.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(l.previousSibling),this.t.push(t)}else this.t.push(...this.processor.handleAttributeExpressions(l,o.name,o.strings,this.options));r++}else this.t.push(void 0),r++;return t&&(document.adoptNode(i),customElements.upgrade(i)),i}}
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
 */const x=` ${s} `;class g{constructor(t,i,s,e){this.strings=t,this.values=i,this.type=s,this.processor=e}getHTML(){const t=this.strings.length-1;let i="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],r=t.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===t.indexOf("--\x3e",r+1);const a=l.exec(t);i+=null===a?t+(n?x:e):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+s}return i+=this.strings[t],i}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}
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
 */const y=t=>null===t||!("object"==typeof t||"function"==typeof t),v=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class k{constructor(t,i,s){this.dirty=!0,this.element=t,this.name=i,this.strings=s,this.parts=[];for(let t=0;t<s.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new S(this)}_getValue(){const t=this.strings,i=t.length-1;let s="";for(let e=0;e<i;e++){s+=t[e];const i=this.parts[e];if(void 0!==i){const t=i.value;if(y(t)||!v(t))s+="string"==typeof t?t:String(t);else for(const i of t)s+="string"==typeof i?i:String(i)}}return s+=t[i],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===w||y(t)&&t===this.value||(this.value=t,f(t)||(this.committer.dirty=!0))}commit(){for(;f(this.value);){const t=this.value;this.value=w,t(this)}this.value!==w&&this.committer.commit()}}class C{constructor(t){this.value=void 0,this.i=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(h()),this.endNode=t.appendChild(h())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.s(this.startNode=h()),t.s(this.endNode=h())}insertAfterPart(t){t.s(this.startNode=h()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.i=t}commit(){if(null===this.startNode.parentNode)return;for(;f(this.i);){const t=this.i;this.i=w,t(this)}const t=this.i;t!==w&&(y(t)?t!==this.value&&this.o(t):t instanceof g?this.h(t):t instanceof Node?this.l(t):v(t)?this.p(t):t===b?(this.value=b,this.clear()):this.o(t))}s(t){this.endNode.parentNode.insertBefore(t,this.endNode)}l(t){this.value!==t&&(this.clear(),this.s(t),this.value=t)}o(t){const i=this.startNode.nextSibling,s="string"==typeof(t=null==t?"":t)?t:String(t);i===this.endNode.previousSibling&&3===i.nodeType?i.data=s:this.l(document.createTextNode(s)),this.value=t}h(t){const i=this.options.templateFactory(t);if(this.value instanceof m&&this.value.template===i)this.value.update(t.values);else{const s=new m(i,t.processor,this.options),e=s._clone();s.update(t.values),this.l(e),this.value=s}}p(t){Array.isArray(this.value)||(this.value=[],this.clear());const i=this.value;let s,e=0;for(const n of t)s=i[e],void 0===s&&(s=new C(this.options),i.push(s),0===e?s.appendIntoPart(this):s.insertAfterPart(i[e-1])),s.setValue(n),s.commit(),e++;e<i.length&&(i.length=e,this.clear(s&&s.endNode))}clear(t=this.startNode){i(this.startNode.parentNode,t.nextSibling,this.endNode)}}class _{constructor(t,i,s){if(this.value=void 0,this.i=void 0,2!==s.length||""!==s[0]||""!==s[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=i,this.strings=s}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=w,t(this)}if(this.i===w)return;const t=!!this.i;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.i=w}}class $ extends k{constructor(t,i,s){super(t,i,s),this.single=2===s.length&&""===s[0]&&""===s[1]}_createPart(){return new j(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class j extends S{}let O=!1;(()=>{try{const t={get capture(){return O=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class M{constructor(t,i,s){this.value=void 0,this.i=void 0,this.element=t,this.eventName=i,this.eventContext=s,this.u=t=>this.handleEvent(t)}setValue(t){this.i=t}commit(){for(;f(this.i);){const t=this.i;this.i=w,t(this)}if(this.i===w)return;const t=this.i,i=this.value,s=null==t||null!=i&&(t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive),e=null!=t&&(null==i||s);s&&this.element.removeEventListener(this.eventName,this.u,this.m),e&&(this.m=A(t),this.element.addEventListener(this.eventName,this.u,this.m)),this.value=t,this.i=w}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const A=t=>t&&(O?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
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
 */;function P(t){let i=L.get(t.type);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},L.set(t.type,i));let e=i.stringsArray.get(t.strings);if(void 0!==e)return e;const n=t.strings.join(s);return e=i.keyString.get(n),void 0===e&&(e=new o(t,t.getTemplateElement()),i.keyString.set(n,e)),i.stringsArray.set(t.strings,e),e}const L=new Map,U=new WeakMap;
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
class{handleAttributeExpressions(t,i,s,e){const n=i[0];if("."===n){return new $(t,i.slice(1),s).parts}return"@"===n?[new M(t,i.slice(1),e.eventContext)]:"?"===n?[new _(t,i.slice(1),s)]:new k(t,i,s).parts}handleTextExpression(t){return new C(t)}};
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
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const E=(t,...i)=>new g(t,i,"html",I)
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
 */,z=(t,i)=>`${t}--${i}`;let T=!0;void 0===window.ShadyCSS?T=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),T=!1);const V=t=>i=>{const e=z(i.type,t);let n=L.get(e);void 0===n&&(n={stringsArray:new WeakMap,keyString:new Map},L.set(e,n));let r=n.stringsArray.get(i.strings);if(void 0!==r)return r;const a=i.strings.join(s);if(r=n.keyString.get(a),void 0===r){const s=i.getTemplateElement();T&&window.ShadyCSS.prepareTemplateDom(s,t),r=new o(i,s),n.keyString.set(a,r)}return n.stringsArray.set(i.strings,r),r},N=["html","svg"],B=new Set,q=(t,i,s)=>{B.add(t);const e=s?s.element:document.createElement("template"),n=i.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(e,t);const r=document.createElement("style");for(let t=0;t<o;t++){const i=n[t];i.parentNode.removeChild(i),r.textContent+=i.textContent}(t=>{N.forEach(i=>{const s=L.get(z(i,t));void 0!==s&&s.keyString.forEach(t=>{const{element:{content:i}}=t,s=new Set;Array.from(i.querySelectorAll("style")).forEach(t=>{s.add(t)}),c(t,s)})})})(t);const a=e.content;s?function(t,i,s=null){const{element:{content:e},parts:n}=t;if(null==s)return void e.appendChild(i);const o=document.createTreeWalker(e,133,null,!1);let r=d(n),a=0,h=-1;for(;o.nextNode();){for(h++,o.currentNode===s&&(a=p(i),s.parentNode.insertBefore(i,s));-1!==r&&n[r].index===h;){if(a>0){for(;-1!==r;)n[r].index+=a,r=d(n,r);return}r=d(n,r)}}}(s,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(e,t);const h=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==h)i.insertBefore(h.cloneNode(!0),i.firstChild);else if(s){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),c(s,t)}};window.JSCompiler_renameProperty=(t,i)=>t;const F={toAttribute(t,i){switch(i){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){switch(i){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},H=(t,i)=>i!==t&&(i==i||t==t),R={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:H};class J extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((i,s)=>{const e=this._attributeNameForProperty(s,i);void 0!==e&&(this._attributeToPropertyMap.set(e,s),t.push(e))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,i)=>this._classProperties.set(i,t))}}static createProperty(t,i=R){if(this._ensureClassProperties(),this._classProperties.set(t,i),i.noAccessor||this.prototype.hasOwnProperty(t))return;const s="symbol"==typeof t?Symbol():`__${t}`,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(s){const e=this[t];this[i]=s,this._requestUpdate(t,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||R}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,i=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const s of i)this.createProperty(s,t[s])}}static _attributeNameForProperty(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,i,s=H){return s(t,i)}static _propertyValueFromAttribute(t,i){const s=i.type,e=i.converter||F,n="function"==typeof e?e:e.fromAttribute;return n?n(t,s):t}static _propertyValueToAttribute(t,i){if(void 0===i.reflect)return;const s=i.type,e=i.converter;return(e&&e.toAttribute||F.toAttribute)(t,s)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,i)=>{if(this.hasOwnProperty(i)){const t=this[i];delete this[i],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(i,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,i)=>this[i]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,i,s){i!==s&&this._attributeToProperty(t,s)}_propertyToAttribute(t,i,s=R){const e=this.constructor,n=e._attributeNameForProperty(t,s);if(void 0!==n){const t=e._propertyValueToAttribute(i,s);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,i){if(8&this._updateState)return;const s=this.constructor,e=s._attributeToPropertyMap.get(t);if(void 0!==e){const t=s.getPropertyOptions(e);this._updateState=16|this._updateState,this[e]=s._propertyValueFromAttribute(i,t),this._updateState=-17&this._updateState}}_requestUpdate(t,i){let s=!0;if(void 0!==t){const e=this.constructor,n=e.getPropertyOptions(t);e._valueHasChanged(this[t],i,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,i),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,i){return this._requestUpdate(t,i),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const i=this._changedProperties;try{t=this.shouldUpdate(i),t?this.update(i):this._markUpdated()}catch(i){throw t=!1,this._markUpdated(),i}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(i)),this.updated(i))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,i)=>this._propertyToAttribute(i,this[i],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
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
const W=t=>i=>"function"==typeof i?((t,i)=>(window.customElements.define(t,i),i))(t,i):((t,i)=>{const{kind:s,elements:e}=i;return{kind:s,elements:e,finisher(i){window.customElements.define(t,i)}}})(t,i),Z=(t,i)=>"method"===i.kind&&i.descriptor&&!("value"in i.descriptor)?Object.assign(Object.assign({},i),{finisher(s){s.createProperty(i.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof i.initializer&&(this[i.key]=i.initializer.call(this))},finisher(s){s.createProperty(i.key,t)}};function D(t){return(i,s)=>void 0!==s?((t,i,s)=>{i.constructor.createProperty(s,t)})(t,i,s):Z(t,i)}const X=(t,i,s)=>{Object.defineProperty(i,s,t)},G=(t,i)=>({kind:"method",placement:"prototype",key:i.key,descriptor:t})
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,K="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol();class Y{constructor(t,i){if(i!==Q)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(K?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const tt=(t,...i)=>{const s=i.reduce((i,s,e)=>i+(t=>{if(t instanceof Y)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1],t[0]);return new Y(s,Q)};
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
(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const it={};class st extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const i=(t,s)=>t.reduceRight((t,s)=>Array.isArray(s)?i(s,t):(t.add(s),t),s),s=i(t,new Set),e=[];s.forEach(t=>e.unshift(t)),this._styles=e}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?K?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const i=this.render();super.update(t),i!==it&&this.constructor.render(i,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const i=document.createElement("style");i.textContent=t.cssText,this.renderRoot.appendChild(i)}))}render(){return it}}st.finalized=!0,st.render=(t,s,e)=>{if(!e||"object"!=typeof e||!e.scopeName)throw new Error("The `scopeName` option is required.");const n=e.scopeName,o=U.has(s),r=T&&11===s.nodeType&&!!s.host,a=r&&!B.has(n),h=a?document.createDocumentFragment():s;if(((t,s,e)=>{let n=U.get(s);void 0===n&&(i(s,s.firstChild),U.set(s,n=new C(Object.assign({templateFactory:P},e))),n.appendInto(s)),n.setValue(t),n.commit()})(t,h,Object.assign({templateFactory:V(n)},e)),a){const t=U.get(h);U.delete(h);const e=t.value instanceof m?t.value.template:void 0;q(n,h,e),i(s,s.firstChild),s.appendChild(h),U.set(s,t)}!o&&r&&window.ShadyCSS.styleElement(s.host)};
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
var et=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let nt=class extends st{constructor(){super(...arguments),this.name="World",this.count=0}render(){return E`
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
  `,et([D()],nt.prototype,"name",void 0),et([D({type:Number})],nt.prototype,"count",void 0),nt=et([W("my-element")],nt);var ot=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let rt=class extends st{constructor(){super(),this.value="Install",this.background="#602ac1",this.color="#fff",this.size="56px",this.testing=!1,this._prompt=!1,this._trigger=!1}render(){return this._trigger||this.testing?E`
       <button @click="${this._onClick}"
             style="--fn-pwa-install-background: ${this.background};
                 color: ${this.color};
                 --fn-pwa-install-size: ${this.size}
             "                 
             class="fn-pwa-btn" role="button" aria-label="Install this app">
                <!-- Icon from https://css.gg/software-download -->
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 5C11 4.44772 11.4477 4 12 4C12.5523 4 13 4.44772 13 5V12.1578L16.2428 8.91501L17.657 10.3292L12.0001 15.9861L6.34326 10.3292L7.75748 8.91501L11 12.1575V5Z" fill="currentColor" /><path d="M4 14H6V18H18V14H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V14Z" fill="currentColor" />
                </svg>
                <span class="fn-pwa-install-message">
                    ${this.value}
                </span>
        </button>
    `:""}_onClick(){this._trigger=!1,this.requestUpdate(),this._prompt.prompt()}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),this._prompt=t,this._trigger=!0,this.requestUpdate()})}};rt.styles=tt`
  .fn-pwa-btn{
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

  .fn-pwa-btn:focus{
      outline:none;
  }
  .fn-pwa-btn:hover{
      opacity:0.95;
  }
  .fn-pwa-install-message{
      display:none;
      margin-left:4px;
  }
  @media (min-width: 1264px){
    .fn-pwa-btn {
        border-radius: 28px;
        padding: 0 24px 0 24px;
        text-indent: 0;
        width: auto;
    }
    .fn-pwa-install-message{
        display:block;
    }
  }
  `,ot([D({type:String})],rt.prototype,"value",void 0),ot([D({type:String})],rt.prototype,"background",void 0),ot([D({type:String})],rt.prototype,"color",void 0),ot([D({type:String})],rt.prototype,"size",void 0),ot([D({type:Boolean})],rt.prototype,"testing",void 0),rt=ot([W("fn-pwa-btn")],rt);var at=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let ht=class extends st{constructor(){super(),this.value="Installing uses almost no storage and provides a quick way  to return to this app",this.title="Install",this.background="#602ac1",this.show=!1,this.testing=!1,this.color="#fff",this._prompt=!1,this._trigger=!1,setTimeout(()=>{this._trigger=!1,this.requestUpdate()},7e3)}render(){return this._trigger&&this.show||this.testing?E`
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
  `,at([D({type:String})],ht.prototype,"value",void 0),at([D({type:String})],ht.prototype,"title",void 0),at([D({type:String})],ht.prototype,"background",void 0),at([D({type:Boolean})],ht.prototype,"show",void 0),at([D({type:Boolean})],ht.prototype,"testing",void 0),at([D({type:String})],ht.prototype,"color",void 0),ht=at([W("fn-pwa-banner")],ht);var lt=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let ct=class extends st{constructor(){super(),this.background="#602ac1",this.color="#fff",this.value="It looks like you're offline",this.show=!1}render(){return this.show?E`
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
  `,lt([D({type:String})],ct.prototype,"background",void 0),lt([D({type:String})],ct.prototype,"color",void 0),lt([D({type:String})],ct.prototype,"value",void 0),ct=lt([W("fn-pwa-status")],ct);var pt=function(t,i,s,e){for(var n,o=arguments.length,r=o<3?i:null===e?e=Object.getOwnPropertyDescriptor(i,s):e,a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(i,s,r):n(i,s))||r);return o>3&&r&&Object.defineProperty(i,s,r),r};let dt=class extends st{constructor(){super(),this.background="#602ac1",this.color="#fff",this.addEventListener("click",this._onClick)}render(){return E`
    <button id="fn-material-button"
     style="background-color: ${this.background};color: ${this.color}">
        <slot></slot>
    </button>
    `}_onClick(t){const i=new CustomEvent("fn-click");this.dispatchEvent(i);const s=this._fnbutton,e=document.createElement("span"),n=Math.max(s.clientWidth,s.clientHeight),o=n/2;e.style.width=e.style.height=`${n}px`,e.style.left=`${t.clientX-s.offsetLeft-o}px`,e.style.top=`${t.clientY-s.offsetTop-o}px`,e.classList.add("ripple");const r=s.getElementsByClassName("ripple")[0];r&&r.remove(),s.appendChild(e)}};var ut;dt.styles=tt` 
  #fn-material-button {
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

    #fn-material-button:hover{
      opacity:0.95;
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
  `,pt([D({type:String})],dt.prototype,"background",void 0),pt([D({type:String})],dt.prototype,"color",void 0),pt([(ut="#fn-material-button",(t,i)=>{const s={get(){return this.renderRoot.querySelector(ut)},enumerable:!0,configurable:!0};return void 0!==i?X(s,t,i):G(s,t)})],dt.prototype,"_fnbutton",void 0),dt=pt([W("fn-ripple-btn")],dt);
