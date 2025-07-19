import{a as m,c as f,x as a,E as p}from"./default.styles.2_Tg-dod.js";import{n as r}from"./property.DhsKp3PU.js";import{e as b}from"./query.CfX4IL2Y.js";import{o as u}from"./if-defined.BevqSZlK.js";import{s as v,V as g,c as _}from"./styles.jy5xlxt8.js";import"./base.CShCMygk.js";import"./state.DQQ1Z-nc.js";import"./query-assigned-elements.DwgmpGB0.js";import"./class-map.Cezi6eN_.js";import"./Imports.astro_astro_type_script_index_0_lang.g4gpplQj.js";import"./Imports.astro_astro_type_script_index_0_lang.D2i34b64.js";import"./style-property-map.Cg6zaSGE.js";import"./helpers.XXwYhvdi.js";import"./Imports.astro_astro_type_script_index_0_lang.BkFEeZkp.js";var c=function(d,e,t,s){var l=arguments.length,o=l<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(d,e,t,s);else for(var h=d.length-1;h>=0;h--)(n=d[h])&&(o=(l<3?n(o):l>3?n(e,t,o):n(e,t))||o);return l>3&&o&&Object.defineProperty(e,t,o),o};let i=class extends g{set selectedIndexes(e){this._opts.selectedIndexes=e}get selectedIndexes(){return this._opts.selectedIndexes}set value(e){this._opts.multiSelectValue=e,this._opts.selectedIndexes.length>0?this._requestedValueToSetLater=[]:this._requestedValueToSetLater=Array.isArray(e)?e:[e],this._setFormValue(),this._manageRequired()}get value(){return this._opts.multiSelectValue}get form(){return this._internals.form}get type(){return"select-multiple"}get validity(){return this._internals.validity}get validationMessage(){return this._internals.validationMessage}get willValidate(){return this._internals.willValidate}checkValidity(){return this._internals.checkValidity()}reportValidity(){return this._internals.reportValidity()}selectAll(){this._opts.selectAll()}selectNone(){this._opts.selectNone()}constructor(){super(),this.defaultValue=[],this.required=!1,this.name=void 0,this._requestedValueToSetLater=[],this._onOptionClick=e=>{const s=e.composedPath().find(n=>"matches"in n?n.matches("li.option"):!1);if(!s)return;if(s.classList.contains("placeholder")){this._createAndSelectSuggestedOption();return}const o=Number(s.dataset.index);this._opts.toggleOptionSelected(o),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()},this._opts.multiSelect=!0,this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._setDefaultValue(),this._manageRequired()})}formResetCallback(){this.updateComplete.then(()=>{this.value=this.defaultValue})}formStateRestoreCallback(e,t){const s=Array.from(e.entries()).map(l=>String(l[1]));this.updateComplete.then(()=>{this.value=s})}_setDefaultValue(){if(Array.isArray(this.defaultValue)&&this.defaultValue.length>0){const e=this.defaultValue.map(t=>String(t));this.value=e}}_dispatchChangeEvent(){this.dispatchEvent(new CustomEvent("vsc-change",{detail:{selectedIndexes:this._opts.selectedIndexes,value:this._opts.multiSelectValue}})),super._dispatchChangeEvent()}_onFaceClick(){super._onFaceClick(),this._opts.activeIndex=0}_toggleComboboxDropdown(){super._toggleComboboxDropdown(),this._opts.activeIndex=-1}_manageRequired(){const{value:e}=this;e.length===0&&this.required?this._internals.setValidity({valueMissing:!0},"Please select an item in the list.",this._faceElement):this._internals.setValidity({})}_setFormValue(){const e=new FormData;this._values.forEach(t=>{e.append(this.name??"",t)}),this._internals.setFormValue(e)}async _createAndSelectSuggestedOption(){super._createAndSelectSuggestedOption();const e=this._createSuggestedOption();await this.updateComplete,this.selectedIndexes=[...this.selectedIndexes,e],this._dispatchChangeEvent();const t=new CustomEvent("vsc-multi-select-create-option",{detail:{value:this._opts.getOptionByIndex(e)?.value??""}});this.dispatchEvent(t),this.open=!1,this._isPlaceholderOptionActive=!1}_onSlotChange(){super._onSlotChange(),this._requestedValueToSetLater.length>0&&(this._opts.expandMultiSelection(this._requestedValueToSetLater),this._requestedValueToSetLater=this._requestedValueToSetLater.filter(e=>this._opts.findOptionIndex(e)===-1))}_onEnterKeyDown(e){super._onEnterKeyDown(e),this.open?this._isPlaceholderOptionActive?this._createAndSelectSuggestedOption():(this._opts.toggleActiveMultiselectOption(),this._setFormValue(),this._manageRequired(),this._dispatchChangeEvent()):(this._opts.filterPattern="",this.open=!0)}_onMultiAcceptClick(){this.open=!1}_onMultiDeselectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!1})),this._manageRequired(),this._dispatchChangeEvent()}_onMultiSelectAllClick(){this._opts.selectedIndexes=[],this._values=[],this._options=this._options.map(e=>({...e,selected:!0})),this._options.forEach((e,t)=>{this._selectedIndexes.push(t),this._values.push(e.value),this._dispatchChangeEvent()}),this._setFormValue(),this._manageRequired()}_renderLabel(){switch(this._opts.selectedIndexes.length){case 0:return a`<span class="select-face-badge no-item">0 Selected</span>`;default:return a`<span class="select-face-badge"
          >${this._opts.selectedIndexes.length} Selected</span
        >`}}_renderComboboxFace(){let e="";this._isBeingFiltered?e=this._opts.filterPattern:e=this._opts.getSelectedOption()?.label??"";const t=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",s=this.open?"true":"false";return a`
      <div class="combobox-face face">
        ${this._opts.multiSelect?this._renderLabel():p}
        <input
          aria-activedescendant=${t}
          aria-autocomplete="list"
          aria-controls="select-listbox"
          aria-expanded=${s}
          aria-haspopup="listbox"
          aria-label=${u(this.label)}
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
          ${_}
        </button>
      </div>
    `}_renderSelectFace(){const e=this._opts.activeIndex>-1?`op-${this._opts.activeIndex}`:"",t=this.open?"true":"false";return a`
      <div
        aria-activedescendant=${u(this._opts.multiSelect?void 0:e)}
        aria-controls="select-listbox"
        aria-expanded=${u(this._opts.multiSelect?void 0:t)}
        aria-haspopup="listbox"
        aria-label=${u(this.label??void 0)}
        class="select-face face multiselect"
        @click=${this._onFaceClick}
        .tabIndex=${this.disabled?-1:0}
      >
        ${this._renderLabel()} ${_}
      </div>
    `}_renderDropdownControls(){return this._filteredOptions.length>0?a`
          <div class="dropdown-controls">
            <button
              type="button"
              @click=${this._onMultiSelectAllClick}
              title="Select all"
              class="action-icon"
              id="select-all"
            >
              <vscode-icon name="checklist"></vscode-icon>
            </button>
            <button
              type="button"
              @click=${this._onMultiDeselectAllClick}
              title="Deselect all"
              class="action-icon"
              id="select-none"
            >
              <vscode-icon name="clear-all"></vscode-icon>
            </button>
            <vscode-button
              class="button-accept"
              @click=${this._onMultiAcceptClick}
              >OK</vscode-button
            >
          </div>
        `:a`${p}`}render(){return a`
      <div class="multi-select">
        <slot class="main-slot" @slotchange=${this._onSlotChange}></slot>
        ${this.combobox?this._renderComboboxFace():this._renderSelectFace()}
        ${this._renderDropdown()}
      </div>
    `}};i.styles=v;i.shadowRootOptions={...m.shadowRootOptions,delegatesFocus:!0};i.formAssociated=!0;c([r({type:Array,attribute:"default-value"})],i.prototype,"defaultValue",void 0);c([r({type:Boolean,reflect:!0})],i.prototype,"required",void 0);c([r({reflect:!0})],i.prototype,"name",void 0);c([r({type:Array,attribute:!1})],i.prototype,"selectedIndexes",null);c([r({type:Array})],i.prototype,"value",null);c([b(".face")],i.prototype,"_faceElement",void 0);i=c([f("vscode-multi-select")],i);
