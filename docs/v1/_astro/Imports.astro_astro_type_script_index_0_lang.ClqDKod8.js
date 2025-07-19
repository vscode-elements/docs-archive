import{d as f,i as v,x as h,E as u,a as k,c as m}from"./default.styles.2_Tg-dod.js";import{n as a}from"./property.DhsKp3PU.js";import{e as b}from"./query.CfX4IL2Y.js";import{a as p}from"./class-map.Cezi6eN_.js";import{b as y,L as _,F as g}from"./base.styles.Dbu-jbpY.js";import"./base.CShCMygk.js";const w=[f,y,v`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 3px;
    }

    .indeterminate-icon {
      background-color: currentColor;
      position: absolute;
      height: 1px;
      width: 12px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var i=function(n,e,o,r){var l=arguments.length,s=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,o,r);else for(var d=n.length-1;d>=0;d--)(c=n[d])&&(s=(l<3?c(s):l>3?c(e,o,s):c(e,o))||s);return l>3&&s&&Object.defineProperty(e,o,s),s};let t=class extends _(g){set checked(e){this._checked=e,this._manageRequired(),this.requestUpdate()}get checked(){return this._checked}set required(e){this._required=e,this._manageRequired(),this.requestUpdate()}get required(){return this._required}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}constructor(){super(),this.autofocus=!1,this._checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name=void 0,this.value="",this.disabled=!1,this.indeterminate=!1,this._required=!1,this.type="checkbox",this._handleClick=e=>{e.preventDefault(),!this.disabled&&this._toggleState()},this._handleKeyDown=e=>{!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key===" "&&this._toggleState(),e.key==="Enter"&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.updateComplete.then(()=>{this._manageRequired(),this._setActualFormValue()})}disconnectedCallback(){this.removeEventListener("keydown",this._handleKeyDown)}update(e){super.update(e),e.has("checked")&&(this.ariaChecked=this.checked?"true":"false")}formResetCallback(){this.checked=this.defaultChecked}formStateRestoreCallback(e,o){e&&(this.checked=!0)}_setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null,this._internals.setFormValue(e)}_toggleState(){this.checked=!this.checked,this.indeterminate=!1,this._setActualFormValue(),this._manageRequired(),this.dispatchEvent(new Event("change",{bubbles:!0})),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_manageRequired(){!this.checked&&this.required?this._internals.setValidity({valueMissing:!0},"Please check this box if you want to proceed.",this._inputEl??void 0):this._internals.setValidity({})}render(){const e=p({icon:!0,checked:this.checked,indeterminate:this.indeterminate}),o=p({"label-inner":!0}),r=h`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="check-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
      />
    </svg>`,l=this.checked&&!this.indeterminate?r:u,s=this.indeterminate?h`<span class="indeterminate-icon"></span>`:u;return h`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="checkbox"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
        >
        <div class=${e}>${s}${l}</div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${o}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};t.styles=w;t.formAssociated=!0;t.shadowRootOptions={...k.shadowRootOptions,delegatesFocus:!0};i([a({type:Boolean,reflect:!0})],t.prototype,"autofocus",void 0);i([a({type:Boolean,reflect:!0})],t.prototype,"checked",null);i([a({type:Boolean,reflect:!0,attribute:"default-checked"})],t.prototype,"defaultChecked",void 0);i([a({type:Boolean,reflect:!0})],t.prototype,"invalid",void 0);i([a({reflect:!0})],t.prototype,"name",void 0);i([a()],t.prototype,"value",void 0);i([a({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0);i([a({type:Boolean,reflect:!0})],t.prototype,"indeterminate",void 0);i([a({type:Boolean,reflect:!0})],t.prototype,"required",null);i([a()],t.prototype,"type",void 0);i([b("#input")],t.prototype,"_inputEl",void 0);t=i([m("vscode-checkbox")],t);
