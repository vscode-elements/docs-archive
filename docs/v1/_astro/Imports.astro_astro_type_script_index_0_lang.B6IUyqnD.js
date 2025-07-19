import{a as _,c as m,x as p}from"./default.styles.2_Tg-dod.js";import{n as r}from"./property.DhsKp3PU.js";import{e as f}from"./query.CfX4IL2Y.js";import{o as h}from"./if-defined.BevqSZlK.js";import{s as b,V as v,c as u}from"./styles.jy5xlxt8.js";import"./base.CShCMygk.js";import"./state.DQQ1Z-nc.js";import"./query-assigned-elements.DwgmpGB0.js";import"./class-map.Cezi6eN_.js";import"./Imports.astro_astro_type_script_index_0_lang.g4gpplQj.js";import"./Imports.astro_astro_type_script_index_0_lang.D2i34b64.js";import"./style-property-map.Cg6zaSGE.js";import"./helpers.XXwYhvdi.js";import"./Imports.astro_astro_type_script_index_0_lang.BkFEeZkp.js";var a=function(c,e,t,s){var l=arguments.length,o=l<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(c,e,t,s);else for(var d=c.length-1;d>=0;d--)(n=c[d])&&(o=(l<3?n(o):l>3?n(e,t,o):n(e,t))||o);return l>3&&o&&Object.defineProperty(e,t,o),o};let i=class extends v{set selectedIndex(e){this._opts.selectedIndex=e;const t=this._opts.getOptionByIndex(e);t?(this._opts.activeIndex=e,this._value=t.value,this._internals.setFormValue(this._value),this._manageRequired()):(this._value="",this._internals.setFormValue(""),this._manageRequired())}get selectedIndex(){return this._opts.selectedIndex}set value(e){this._opts.value=e,this._opts.selectedIndex>-1?this._requestedValueToSetLater="":this._requestedValueToSetLater=e,this._internals.setFormValue(this._value),this._manageRequired()}get value(){return this._opts.value}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}updateInputValue(){if(!this.combobox)return;const e=this.renderRoot.querySelector(".combobox-input");if(e){const t=this._opts.getSelectedOption();e.value=t?.label??""}}constructor(){super(),this.defaultValue="",this.name=void 0,this.required=!1,this._requestedValueToSetLater="",this._opts.multiSelect=!1,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._manageRequired()})}formResetCallback(){this.value=this.defaultValue}formStateRestoreCallback(e,t){this.updateComplete.then(()=>{this.value=e})}get type(){return"select-one"}get form(){return this._internals.form}async _createAndSelectSuggestedOption(){const e=this._createSuggestedOption();await this.updateComplete,this._opts.selectedIndex=e,this._dispatchChangeEvent();const t=new CustomEvent("vsc-single-select-create-option",{detail:{value:this._opts.getOptionByIndex(e)?.value??""}});this.dispatchEvent(t),this.open=!1,this._isPlaceholderOptionActive=!1}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndex:this._opts.selectedIndex,value:this._value}})),super._dispatchChangeEvent()}_setStateFromSlottedElements(){super._setStateFromSlottedElements(),!this.combobox&&this._opts.selectedIndexes.length===0&&(this._opts.selectedIndex=this._opts.options.length>0?0:-1)}_onSlotChange(){if(super._onSlotChange(),this._requestedValueToSetLater){const e=this._opts.getOptionByValue(this._requestedValueToSetLater);e&&(this._opts.selectedIndex=e.index,this._requestedValueToSetLater="")}this._opts.selectedIndex>-1&&this._opts.numOptions>0?(this._internals.setFormValue(this._opts.value),this._manageRequired()):(this._internals.setFormValue(null),this._manageRequired())}_onEnterKeyDown(e){super._onEnterKeyDown(e);let t=!1;this.combobox?this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(t=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()):this.open?(t=this._opts.activeIndex!==this._opts.selectedIndex,this._opts.selectedIndex=this._opts.activeIndex,this.open=!1):(this.open=!0,this._scrollActiveElementToTop()),t&&(this._dispatchChangeEvent(),this.updateInputValue(),this._internals.setFormValue(this._opts.value),this._manageRequired())}_onOptionClick(e){super._onOptionClick(e);const s=e.composedPath().find(o=>{const n=o;if("matches"in n)return n.matches("li.option")});if(!s||s.matches(".disabled"))return;s.classList.contains("placeholder")?this.creatable&&this._createAndSelectSuggestedOption():(this._opts.selectedIndex=Number(s.dataset.index),this.open=!1,this._internals.setFormValue(this._value),this._manageRequired(),this._dispatchChangeEvent())}_manageRequired(){const{value:e}=this;e===""&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._face):this._internals.setValidity({})}_renderSelectFace(){const t=this._opts.getSelectedOption()?.label??"",s=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"";return p`
      <div
        aria-activedescendant=${s}
        aria-controls="select-listbox"
        aria-expanded=${this.open?"true":"false"}
        aria-haspopup="listbox"
        aria-label=${h(this.label)}
        class="select-face face"
        @click=${this._onFaceClick}
        role="combobox"
        tabindex="0"
      >
        <span class="text">${t}</span> ${u}
      </div>
    `}_renderComboboxFace(){let e="";this._isBeingFiltered?e=this._opts.filterPattern:e=this._opts.getSelectedOption()?.label??"";const t=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",s=this.open?"true":"false";return p`
      <div class="combobox-face face">
        <input
          aria-activedescendant=${t}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${s}
          aria-haspopup="listbox"
          aria-label=${h(this.label)}
          class="combobox-input"
          role="combobox"
          spellcheck="false"
          type="text"
          autocomplete="off"
          .value=${e}
          @focus=${this._onComboboxInputFocus}
          @blur=${this._onComboboxInputBlur}
          @input=${this._onComboboxInputInput}
          @click=${this._onComboboxInputClick}
          @keydown=${this._onComboboxInputSpaceKeyDown}
        >
        <button
          aria-label="Open the list of options"
          class="combobox-button"
          type="button"
          @click=${this._onComboboxButtonClick}
          @keydown=${this._onComboboxButtonKeyDown}
          tabindex="-1"
        >
          ${u}
        </button>
      </div>
    `}render(){return p`
      <div class="single-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};i.styles=b;i.shadowRootOptions={..._.shadowRootOptions,delegatesFocus:!0};i.formAssociated=!0;a([r({attribute:"default-value"})],i.prototype,"defaultValue",void 0);a([r({reflect:!0})],i.prototype,"name",void 0);a([r({type:Number,attribute:"selected-index"})],i.prototype,"selectedIndex",null);a([r({type:String})],i.prototype,"value",null);a([r({type:Boolean,reflect:!0})],i.prototype,"required",void 0);a([f(".face")],i.prototype,"_face",void 0);i=a([m("vscode-single-select")],i);
