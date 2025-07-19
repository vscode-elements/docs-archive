import{d as _,i as v,c as k,V as b,x as y,a as m}from"./default.styles.2_Tg-dod.js";import{n as r}from"./property.DhsKp3PU.js";import{r as f}from"./state.DQQ1Z-nc.js";import{e as C}from"./query.CfX4IL2Y.js";import{a as p}from"./class-map.Cezi6eN_.js";import{b as R,L as g,F as x}from"./base.styles.Dbu-jbpY.js";import{o as w}from"./query-assigned-elements.DwgmpGB0.js";import"./base.CShCMygk.js";const V=[_,v`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-radio) {
      margin-right: 20px;
    }

    ::slotted(vscode-radio:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-radio) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-radio:last-child) {
      margin-bottom: 0;
    }
  `];var u=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(c=n[l])&&(s=(o<3?c(s):o>3?c(e,t,s):c(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let h=class extends b{constructor(){super(...arguments),this.variant="horizontal",this.role="radiogroup",this._focusedRadio=-1,this._checkedRadio=-1,this._firstContentLoaded=!1,this._onKeyDownBound=this._onKeyDown.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onKeyDownBound)}_uncheckPreviousChecked(e,t){e!==-1&&(this._radios[e].checked=!1),t!==-1&&(this._radios[t].tabIndex=-1)}_afterCheck(){this._focusedRadio=this._checkedRadio,this._radios[this._checkedRadio].checked=!0,this._radios[this._checkedRadio].tabIndex=0,this._radios[this._checkedRadio].focus()}_checkPrev(){const e=this._radios.findIndex(o=>o.checked),t=this._radios.findIndex(o=>o.focused),i=t!==-1?t:e;this._uncheckPreviousChecked(e,t),i===-1?this._checkedRadio=this._radios.length-1:i-1>=0?this._checkedRadio=i-1:this._checkedRadio=this._radios.length-1,this._afterCheck()}_checkNext(){const e=this._radios.findIndex(o=>o.checked),t=this._radios.findIndex(o=>o.focused),i=t!==-1?t:e;this._uncheckPreviousChecked(e,t),i===-1?this._checkedRadio=0:i+1<this._radios.length?this._checkedRadio=i+1:this._checkedRadio=0,this._afterCheck()}_onKeyDown(e){const{key:t}=e;["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"].includes(t)&&e.preventDefault(),(t==="ArrowRight"||t==="ArrowDown")&&this._checkNext(),(t==="ArrowLeft"||t==="ArrowUp")&&this._checkPrev()}_onChange(e){const t=this._radios.findIndex(i=>i===e.target);t!==-1&&(this._focusedRadio!==-1&&(this._radios[this._focusedRadio].tabIndex=-1),this._checkedRadio!==-1&&this._checkedRadio!==t&&(this._radios[this._checkedRadio].checked=!1),this._focusedRadio=t,this._checkedRadio=t,this._radios[t].tabIndex=0)}_onSlotChange(){if(!this._firstContentLoaded){const e=this._radios.findIndex(t=>t.autofocus);e>-1&&(this._focusedRadio=e),this._firstContentLoaded=!0}this._radios.forEach((e,t)=>{this._focusedRadio>-1?e.tabIndex=t===this._focusedRadio?0:-1:e.tabIndex=t===0?0:-1})}render(){return y`
      <div class="wrapper">
        <slot
          @slotchange=${this._onSlotChange}
          @vsc-change=${this._onChange}
        ></slot>
      </div>
    `}};h.styles=V;u([r({reflect:!0})],h.prototype,"variant",void 0);u([r({reflect:!0})],h.prototype,"role",void 0);u([w({selector:"vscode-radio"})],h.prototype,"_radios",void 0);u([f()],h.prototype,"_focusedRadio",void 0);u([f()],h.prototype,"_checkedRadio",void 0);h=u([k("vscode-radio-group")],h);const E=[_,R,v`
    :host(:invalid) .icon,
    :host([invalid]) .icon {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .icon {
      border-radius: 9px;
    }

    .icon.checked:before {
      background-color: currentColor;
      border-radius: 4px;
      content: '';
      height: 8px;
      left: 50%;
      margin: -4px 0 0 -4px;
      position: absolute;
      top: 50%;
      width: 8px;
    }

    :host(:focus):host(:not([disabled])) .icon {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }
  `];var d=function(n,e,t,i){var o=arguments.length,s=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var l=n.length-1;l>=0;l--)(c=n[l])&&(s=(o<3?c(s):o>3?c(e,t,s):c(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s};let a=class extends g(x){constructor(){super(),this.autofocus=!1,this.checked=!1,this.defaultChecked=!1,this.invalid=!1,this.name="",this.value="",this.disabled=!1,this.required=!1,this.role="radio",this.tabIndex=0,this._slottedText="",this.type="radio",this._handleClick=()=>{this.disabled||this.checked||(this._checkButton(),this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0})))},this._handleKeyDown=e=>{!this.disabled&&(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key===" "&&!this.checked&&(this.checked=!0,this._handleValueChange(),this._dispatchCustomEvent(),this.dispatchEvent(new Event("change",{bubbles:!0}))),e.key==="Enter"&&this._internals.form?.requestSubmit())},this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleKeyDown),this.addEventListener("click",this._handleClick),this._handleValueChange()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleKeyDown),this.removeEventListener("click",this._handleClick)}update(e){super.update(e),e.has("checked")&&this._handleValueChange(),e.has("required")&&this._handleValueChange()}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}formResetCallback(){this._getRadios().forEach(t=>{t.checked=t.defaultChecked}),this.updateComplete.then(()=>{this._handleValueChange()})}formStateRestoreCallback(e,t){this.value===e&&e!==""&&(this.checked=!0)}_dispatchCustomEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{checked:this.checked,label:this.label,value:this.value},bubbles:!0,composed:!0}))}_getRadios(){const e=this.getRootNode({composed:!0});if(!e)return[];const t=e.querySelectorAll(`vscode-radio[name="${this.name}"]`);return Array.from(t)}_uncheckOthers(e){e.forEach(t=>{t!==this&&(t.checked=!1)})}_checkButton(){const e=this._getRadios();this.checked=!0,e.forEach(t=>{t!==this&&(t.checked=!1)})}setComponentValidity(e){e?this._internals.setValidity({}):this._internals.setValidity({valueMissing:!0},"Please select one of these options.",this._inputEl)}_setGroupValidity(e,t){this.updateComplete.then(()=>{e.forEach(i=>{i.setComponentValidity(t)})})}_setActualFormValue(){let e="";this.checked?e=this.value?this.value:"on":e=null,this._internals.setFormValue(e)}_handleValueChange(){const e=this._getRadios(),t=e.some(i=>i.required);if(this._setActualFormValue(),this.checked)this._uncheckOthers(e),this._setGroupValidity(e,!0);else{const i=!!e.find(s=>s.checked),o=t&&!i;this._setGroupValidity(e,!o)}}render(){const e=p({icon:!0,checked:this.checked}),t=p({"label-inner":!0,"is-slot-empty":this._slottedText===""});return y`
      <div class="wrapper">
        <input
          ?autofocus=${this.autofocus}
          id="input"
          class="radio"
          type="checkbox"
          ?checked=${this.checked}
          value=${this.value}
          tabindex=${this.tabIndex}
        >
        <div class=${e}></div>
        <label for="input" class="label" @click=${this._handleClick}>
          <span class=${t}>
            ${this._renderLabelAttribute()}
            <slot @slotchange=${this._handleSlotChange}></slot>
          </span>
        </label>
      </div>
    `}};a.styles=E;a.formAssociated=!0;a.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};d([r({type:Boolean,reflect:!0})],a.prototype,"autofocus",void 0);d([r({type:Boolean,reflect:!0})],a.prototype,"checked",void 0);d([r({type:Boolean,reflect:!0,attribute:"default-checked"})],a.prototype,"defaultChecked",void 0);d([r({type:Boolean,reflect:!0})],a.prototype,"invalid",void 0);d([r({reflect:!0})],a.prototype,"name",void 0);d([r()],a.prototype,"value",void 0);d([r({type:Boolean,reflect:!0})],a.prototype,"disabled",void 0);d([r({type:Boolean,reflect:!0})],a.prototype,"required",void 0);d([r({reflect:!0})],a.prototype,"role",void 0);d([r({type:Number,reflect:!0})],a.prototype,"tabIndex",void 0);d([f()],a.prototype,"_slottedText",void 0);d([C("#input")],a.prototype,"_inputEl",void 0);d([r()],a.prototype,"type",void 0);a=d([k("vscode-radio")],a);
