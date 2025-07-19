import{d as v,i as g,a as m,c as f,V as b,x}from"./default.styles.2_Tg-dod.js";import{n as a}from"./property.DhsKp3PU.js";import{r as u}from"./state.DQQ1Z-nc.js";import{e as y}from"./query.CfX4IL2Y.js";import{o as n}from"./if-defined.BevqSZlK.js";import{a as p}from"./class-map.Cezi6eN_.js";import{s as _}from"./style-property-map.Cg6zaSGE.js";import"./base.CShCMygk.js";const w=[v,g`
    :host {
      display: inline-block;
      height: 40px;
      position: relative;
      width: 320px;
    }

    :host([cols]) {
      width: auto;
    }

    :host([rows]) {
      height: auto;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      inset: 0 0 auto 0;
      height: 6px;
      pointer-events: none;
      position: absolute;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    textarea {
      background-color: var(--vscode-settings-textInputBackground, #313131);
      border-color: var(--vscode-settings-textInputBorder, transparent);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-textInputForeground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 100%;
      width: 100%;
    }

    :host([cols]) textarea {
      width: auto;
    }

    :host([rows]) textarea {
      height: auto;
    }

    :host([invalid]) textarea,
    :host(:invalid) textarea {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    textarea.monospace {
      background-color: var(--vscode-editor-background, #1f1f1f);
      color: var(--vscode-editor-foreground, #cccccc);
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: var(--vscode-editor-font-size, 14px);
      font-weight: var(--vscode-editor-font-weight, normal);
    }

    .textarea.monospace::placeholder {
      color: var(
        --vscode-editor-inlineValuesForeground,
        rgba(255, 255, 255, 0.5)
      );
    }

    textarea.cursor-pointer {
      cursor: pointer;
    }

    textarea:focus {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    textarea::placeholder {
      color: var(--vscode-input-placeholderForeground, #989898);
      opacity: 1;
    }

    textarea::-webkit-scrollbar-track {
      background-color: transparent;
    }

    textarea::-webkit-scrollbar {
      width: 14px;
    }

    textarea::-webkit-scrollbar-thumb {
      background-color: transparent;
    }

    textarea:hover::-webkit-scrollbar-thumb {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
    }

    textarea::-webkit-scrollbar-thumb:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    textarea::-webkit-scrollbar-thumb:active {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    textarea::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    textarea::-webkit-resizer {
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAACJJREFUeJxjYMAOZuIQZ5j5//9/rJJESczEKYGsG6cEXgAAsEEefMxkua4AAAAASUVORK5CYII=');
      background-repeat: no-repeat;
      background-position: right bottom;
    }
  `];var o=function(d,t,r,s){var l=arguments.length,i=l<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,r):s,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(d,t,r,s);else for(var c=d.length-1;c>=0;c--)(h=d[c])&&(i=(l<3?h(i):l>3?h(t,r,i):h(t,r))||i);return l>3&&i&&Object.defineProperty(t,r,i),i};let e=class extends b{set value(t){this._value=t,this._internals.setFormValue(t)}get value(){return this._value}get wrappedElement(){return this._textareaEl}get form(){return this._internals.form}get type(){return"textarea"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}set minlength(t){this.minLength=t}get minlength(){return this.minLength}set maxlength(t){this.maxLength=t}get maxlength(){return this.maxLength}constructor(){super(),this.autocomplete=void 0,this.autofocus=!1,this.defaultValue="",this.disabled=!1,this.invalid=!1,this.label="",this.maxLength=void 0,this.minLength=void 0,this.rows=void 0,this.cols=void 0,this.name=void 0,this.placeholder=void 0,this.readonly=!1,this.resize="none",this.required=!1,this.spellcheck=!1,this.monospace=!1,this._value="",this._textareaPointerCursor=!1,this._shadow=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._textareaEl.checkValidity(),this._setValidityFromInput(),this._internals.setFormValue(this._textareaEl.value)})}updated(t){const r=["maxLength","minLength","required"];for(const s of t.keys())if(r.includes(String(s))){this.updateComplete.then(()=>{this._setValidityFromInput()});break}}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(t,r){this.updateComplete.then(()=>{this._value=t})}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}_setValidityFromInput(){this._internals.setValidity(this._textareaEl.validity,this._textareaEl.validationMessage,this._textareaEl)}_dataChanged(){this._value=this._textareaEl.value,this._internals.setFormValue(this._textareaEl.value)}_handleChange(t){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new Event("change")),this.dispatchEvent(new CustomEvent("vsc-change",{detail:{data:this.value,originalEvent:t}}))}_handleInput(t){this._dataChanged(),this._setValidityFromInput(),this.dispatchEvent(new CustomEvent("vsc-input",{detail:{data:t.data,originalEvent:t}}))}_handleMouseMove(t){if(this._textareaEl.clientHeight>=this._textareaEl.scrollHeight){this._textareaPointerCursor=!1;return}const r=14,s=1,l=this._textareaEl.getBoundingClientRect(),i=t.clientX;this._textareaPointerCursor=i>=l.left+l.width-r-s*2}_handleScroll(){this._shadow=this._textareaEl.scrollTop>0}render(){return x`
      <div
        class=${p({shadow:!0,visible:this._shadow})}
      ></div>
      <textarea
        autocomplete=${n(this.autocomplete)}
        ?autofocus=${this.autofocus}
        ?disabled=${this.disabled}
        aria-label=${this.label}
        id="textarea"
        class=${p({monospace:this.monospace,"cursor-pointer":this._textareaPointerCursor})}
        maxlength=${n(this.maxLength)}
        minlength=${n(this.minLength)}
        rows=${n(this.rows)}
        cols=${n(this.cols)}
        name=${n(this.name)}
        placeholder=${n(this.placeholder)}
        ?readonly=${this.readonly}
        .style=${_({resize:this.resize})}
        ?required=${this.required}
        spellcheck=${this.spellcheck}
        @change=${this._handleChange}
        @input=${this._handleInput}
        @mousemove=${this._handleMouseMove}
        @scroll=${this._handleScroll}
        .value=${this._value}
      ></textarea>
    `}};e.styles=w;e.formAssociated=!0;e.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};o([a()],e.prototype,"autocomplete",void 0);o([a({type:Boolean,reflect:!0})],e.prototype,"autofocus",void 0);o([a({attribute:"default-value"})],e.prototype,"defaultValue",void 0);o([a({type:Boolean,reflect:!0})],e.prototype,"disabled",void 0);o([a({type:Boolean,reflect:!0})],e.prototype,"invalid",void 0);o([a({attribute:!1})],e.prototype,"label",void 0);o([a({type:Number})],e.prototype,"maxLength",void 0);o([a({type:Number})],e.prototype,"minLength",void 0);o([a({type:Number})],e.prototype,"rows",void 0);o([a({type:Number})],e.prototype,"cols",void 0);o([a()],e.prototype,"name",void 0);o([a()],e.prototype,"placeholder",void 0);o([a({type:Boolean,reflect:!0})],e.prototype,"readonly",void 0);o([a()],e.prototype,"resize",void 0);o([a({type:Boolean,reflect:!0})],e.prototype,"required",void 0);o([a({type:Boolean})],e.prototype,"spellcheck",void 0);o([a({type:Boolean,reflect:!0})],e.prototype,"monospace",void 0);o([a()],e.prototype,"value",null);o([y("#textarea")],e.prototype,"_textareaEl",void 0);o([u()],e.prototype,"_value",void 0);o([u()],e.prototype,"_textareaPointerCursor",void 0);o([u()],e.prototype,"_shadow",void 0);e=o([f("vscode-textarea")],e);
