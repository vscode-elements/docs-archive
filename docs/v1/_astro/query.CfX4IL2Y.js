import{e as s}from"./base.CShCMygk.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(i,l){return(e,r,u)=>{const n=o=>o.renderRoot?.querySelector(i)??null;if(l){const{get:o,set:c}=typeof r=="object"?e:u??(()=>{const t=Symbol();return{get(){return this[t]},set(h){this[t]=h}}})();return s(e,r,{get(){let t=o.call(this);return t===void 0&&(t=n(this),(t!==null||this.hasUpdated)&&c.call(this,t)),t}})}return s(e,r,{get(){return n(this)}})}}export{d as e};
