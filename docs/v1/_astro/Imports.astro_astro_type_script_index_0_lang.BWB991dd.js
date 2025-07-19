import{d as f,i as v,c as b,V as g,E as m,x as p}from"./default.styles.2_Tg-dod.js";import{n as d}from"./property.DhsKp3PU.js";import{r as y}from"./state.DQQ1Z-nc.js";import{e as k}from"./base.CShCMygk.js";import"./Imports.astro_astro_type_script_index_0_lang.D2i34b64.js";import{a as h}from"./class-map.Cezi6eN_.js";import{o as u}from"./if-defined.BevqSZlK.js";import"./style-property-map.Cg6zaSGE.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(c){return(e,n)=>{const{slot:r}={},l="slot"+(r?`[name=${r}]`:":not([name])");return k(e,n,{get(){return this.renderRoot?.querySelector(l)?.assignedNodes(c)??[]}})}}const _=[f,v`
    :host {
      display: inline-flex;
    }

    button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 5px;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      outline-offset: -1px;
      outline-width: 1px;
      padding: 0;
      user-select: none;
    }

    button:focus-visible {
      outline-color: var(--vscode-focusBorder, #0078d4);
      outline-style: solid;
    }

    button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    button.checked {
      background-color: var(
        --vscode-inputOption-activeBackground,
        rgba(36, 137, 219, 0.51)
      );
      outline-color: var(--vscode-inputOption-activeBorder, #2488db);
      outline-style: solid;
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    button.checked vscode-icon {
      color: var(--vscode-inputOption-activeForeground, #ffffff);
    }

    vscode-icon {
      display: block;
      padding: 3px;
    }

    slot:not(.empty) {
      align-items: center;
      display: flex;
      height: 22px;
      padding: 0 5px 0 2px;
    }

    slot.textOnly:not(.empty) {
      padding: 0 5px;
    }
  `];var i=function(c,e,n,r){var l=arguments.length,t=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(c,e,n,r);else for(var a=c.length-1;a>=0;a--)(s=c[a])&&(t=(l<3?s(t):l>3?s(e,n,t):s(e,n))||t);return l>3&&t&&Object.defineProperty(e,n,t),t};let o=class extends g{constructor(){super(...arguments),this.icon="",this.label=void 0,this.toggleable=!1,this.checked=!1,this._isSlotEmpty=!0}_handleSlotChange(){this._isSlotEmpty=!((this._assignedNodes?.length??0)>0)}_handleButtonClick(){this.toggleable&&(this.checked=!this.checked,this.dispatchEvent(new Event("change")))}render(){const e=this.checked?"true":"false";return p`
      <button
        type="button"
        aria-label=${u(this.label)}
        role=${u(this.toggleable?"switch":void 0)}
        aria-checked=${u(this.toggleable?e:void 0)}
        class=${h({checked:this.toggleable&&this.checked})}
        @click=${this._handleButtonClick}
      >
        ${this.icon?p`<vscode-icon name=${this.icon}></vscode-icon>`:m}
        <slot
          @slotchange=${this._handleSlotChange}
          class=${h({empty:this._isSlotEmpty,textOnly:!this.icon})}
        ></slot>
      </button>
    `}};o.styles=_;i([d({reflect:!0})],o.prototype,"icon",void 0);i([d()],o.prototype,"label",void 0);i([d({type:Boolean,reflect:!0})],o.prototype,"toggleable",void 0);i([d({type:Boolean,reflect:!0})],o.prototype,"checked",void 0);i([y()],o.prototype,"_isSlotEmpty",void 0);i([x()],o.prototype,"_assignedNodes",void 0);o=i([b("vscode-toolbar-button")],o);
