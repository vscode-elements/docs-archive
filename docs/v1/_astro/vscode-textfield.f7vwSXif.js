import{r as f,d as m,i as v,a as y,c as g,V as b,x as _}from"./default.styles.2_Tg-dod.js";import{n as o}from"./property.DhsKp3PU.js";import{r as c}from"./state.DQQ1Z-nc.js";import{e as x}from"./query.CfX4IL2Y.js";import{o as r}from"./if-defined.BevqSZlK.js";import{g as V}from"./helpers.XXwYhvdi.js";const h=f(V()),$=[m,v`
    :host {
      align-items: center;
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(
        --vscode-settings-textInputBorder,
        var(--vscode-settings-textInputBackground, #3c3c3c)
      );
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: inline-flex;
      max-width: 100%;
      position: relative;
      width: 320px;
    }

    :host([focused]) {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    :host([invalid]),
    :host(:invalid) {
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    :host([invalid]) input,
    :host(:invalid) input {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
    }

    ::slotted([slot='content-before']) {
      display: block;
      margin-left: 2px;
    }

    ::slotted([slot='content-after']) {
      display: block;
      margin-right: 2px;
    }

    slot[name='content-before'],
    slot[name='content-after'] {
      align-items: center;
      display: flex;
    }

    input {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border: 0;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, ${h});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 18px;
      outline: none;
      padding-bottom: 3px;
      padding-left: 4px;
      padding-right: 4px;
      padding-top: 3px;
      width: 100%;
    }

    input:read-only:not([type='file']) {
      cursor: not-allowed;
    }

    input::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    input[type='file'] {
      line-height: 24px;
      padding-bottom: 0;
      padding-left: 2px;
      padding-top: 0;
    }

    input[type='file']::file-selector-button {
      background-color: var(--vscode-button-background, #0078d4);
      border: 0;
      border-radius: 2px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      font-family: var(--vscode-font-family, ${h});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, 'normal');
      line-height: 20px;
      padding: 0 14px;
    }

    input[type='file']::file-selector-button:hover {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }
  `];var i=function(d,t,n,s){var l=arguments.length,a=l<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,n):s,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(d,t,n,s);else for(var u=d.length-1;u>=0;u--)(p=d[u])&&(a=(l<3?p(a):l>3?p(t,n,a):p(t,n))||a);return l>3&&a&&Object.defineProperty(t,n,a),a};let e=class extends b{set type(t){const n=["color","date","datetime-local","email","file","month","number","password","search","tel","text","time","url","week"];this._type=n.includes(t)?t:"text"}get type(){return this._type}set value(t){this.type!=="file"&&(this._value=t,this._internals.setFormValue(t)),this.updateComplete.then(()=>{this._setValidityFromInput()})}get value(){return this._value}set minlength(t){this.minLength=t}get minlength(){return this.minLength}set maxlength(t){this.maxLength=t}get maxlength(){return this.maxLength}get form(){return this._internals.form}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._setValidityFromInput(),this._internals.checkValidity()}reportValidity(){return this._setValidityFromInput(),this._internals.reportValidity()}get wrappedElement(){return this._inputEl}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.focused=!1,this.invalid=!1,this.label="",this.max=void 0,this.maxLength=void 0,this.min=void 0,this.minLength=void 0,this.multiple=!1,this.name=void 0,this.pattern=void 0,this.placeholder=void 0,this.readonly=!1,this.required=!1,this.step=void 0,this._value="",this._type="text",this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._inputEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._inputEl.value)})}attributeChangedCallback(t,n,s){super.attributeChangedCallback(t,n,s),["max","maxlength","min","minlength","pattern","required","step"].includes(t)&&this.updateComplete.then(()=>{this._setValidityFromInput()})}formResetCallback(){this.value=this.defaultValue,this.requestUpdate()}formStateRestoreCallback(t,n){this.value=t}_dataChanged(){if(this._value=this._inputEl.value,this.type==="file"&&this._inputEl.files)for(const t of this._inputEl.files)this._internals.setFormValue(t);else this._internals.setFormValue(this._inputEl.value)}_setValidityFromInput(){this._inputEl&&this._internals.setValidity(this._inputEl.validity,this._inputEl.validationMessage,this._inputEl)}_onInput(t){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:t.data,originalEvent:t}}))}_onChange(t){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:t}}))}_onFocus(){this.focused=!0}_onBlur(){this.focused=!1}_onKeyDown(t){t.key==="Enter"&&this._internals.form&&this._internals.form?.requestSubmit()}render(){return _`
      <slot name="content-before"></slot>
      <input
        id="input"
        type=${this.type}
        ?autofocus=${this.autofocus}
        autocomplete=${r(this.autocomplete)}
        aria-label=${this.label}
        ?disabled=${this.disabled}
        max=${r(this.max)}
        maxlength=${r(this.maxLength)}
        min=${r(this.min)}
        minlength=${r(this.minLength)}
        ?multiple=${this.multiple}
        name=${r(this.name)}
        pattern=${r(this.pattern)}
        placeholder=${r(this.placeholder)}
        ?readonly=${this.readonly}
        ?required=${this.required}
        step=${r(this.step)}
        .value=${this._value}
        @blur=${this._onBlur}
        @change=${this._onChange}
        @focus=${this._onFocus}
        @input=${this._onInput}
        @keydown=${this._onKeyDown}
      >
      <slot name="content-after"></slot>
    `}};e.styles=$;e.formAssociated=!0;e.shadowRootOptions={...y.shadowRootOptions,delegatesFocus:!0};i([o()],e.prototype,"autocomplete",void 0);i([o({type:Boolean,reflect:!0})],e.prototype,"autofocus",void 0);i([o({attribute:"default-value"})],e.prototype,"defaultValue",void 0);i([o({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0);i([o({type:Boolean,reflect:!0})],e.prototype,"focused",void 0);i([o({type:Boolean,reflect:!0})],e.prototype,"invalid",void 0);i([o({attribute:!1})],e.prototype,"label",void 0);i([o({type:Number})],e.prototype,"max",void 0);i([o({type:Number})],e.prototype,"maxLength",void 0);i([o({type:Number})],e.prototype,"min",void 0);i([o({type:Number})],e.prototype,"minLength",void 0);i([o({type:Boolean,reflect:!0})],e.prototype,"multiple",void 0);i([o({reflect:!0})],e.prototype,"name",void 0);i([o()],e.prototype,"pattern",void 0);i([o()],e.prototype,"placeholder",void 0);i([o({type:Boolean,reflect:!0})],e.prototype,"readonly",void 0);i([o({type:Boolean,reflect:!0})],e.prototype,"required",void 0);i([o({type:Number})],e.prototype,"step",void 0);i([o({reflect:!0})],e.prototype,"type",null);i([o()],e.prototype,"value",null);i([x("#input")],e.prototype,"_inputEl",void 0);i([c()],e.prototype,"_value",void 0);i([c()],e.prototype,"_type",void 0);e=i([g("vscode-textfield")],e);
