import"./Imports.astro_astro_type_script_index_0_lang.g4gpplQj.js";import{d as c,i as p,V as u,x as f}from"./default.styles.2_Tg-dod.js";import"./Imports.astro_astro_type_script_index_0_lang.DsckUUD5.js";import"./property.DhsKp3PU.js";import"./class-map.Cezi6eN_.js";import"./Imports.astro_astro_type_script_index_0_lang.D2i34b64.js";import"./if-defined.BevqSZlK.js";import"./style-property-map.Cg6zaSGE.js";import"./helpers.XXwYhvdi.js";import"./state.DQQ1Z-nc.js";import"./query.CfX4IL2Y.js";import"./base.CShCMygk.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)},a=[c,p`
    :host {
      display: inline-flex;
      align-items: stretch;
      padding: 0;
      border: none;
      overflow: hidden;
    }

    ::slotted(vscode-button:not(:first-child)) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      border-left-width: 0;
    }

    ::slotted(vscode-button:not(:last-child)) {
      --divider-display: block;
      --wrapper-width: calc(100% - 1px);

      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-right-width: 0;
    }

    ::slotted(vscode-button:focus) {
      z-index: 1;
    }
  `];var b=function(r,t,e,i){var d=arguments.length,o=d<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,t,e,i);else for(var s=r.length-1;s>=0;s--)(n=r[s])&&(o=(d<3?n(o):d>3?n(t,e,o):n(t,e))||o);return d>3&&o&&Object.defineProperty(t,e,o),o};let l=class extends u{render(){return f` <slot></slot> `}};l.styles=a;l=b([m("vscode-button-group")],l);
