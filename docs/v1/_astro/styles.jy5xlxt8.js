import{x as u,b as j,Z as K,T as H,d as D,c as R,V as M,B as W,E as x,i as N}from"./default.styles.2_Tg-dod.js";import{n as _}from"./property.DhsKp3PU.js";import{r as g}from"./state.DQQ1Z-nc.js";import{o as G}from"./query-assigned-elements.DwgmpGB0.js";import{e as Q,i as Y,t as Z,a as B}from"./class-map.Cezi6eN_.js";import{o as L}from"./if-defined.BevqSZlK.js";import"./Imports.astro_astro_type_script_index_0_lang.g4gpplQj.js";import{s as J}from"./style-property-map.Cg6zaSGE.js";import"./Imports.astro_astro_type_script_index_0_lang.BkFEeZkp.js";const xe=u`
  <span class="icon">
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
      />
    </svg>
  </span>
`,X=j`<svg
  width="16"
  height="16"
  viewBox="0 0 16 16"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
  />
</svg>`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:ee}=K,V=()=>document.createComment(""),k=(i,e,t)=>{const o=i._$AA.parentNode,s=e===void 0?i._$AB:e._$AA;if(t===void 0){const n=o.insertBefore(V(),s),r=o.insertBefore(V(),s);t=new ee(n,r,i,i.options)}else{const n=t._$AB.nextSibling,r=t._$AM,l=r!==i;if(l){let c;t._$AQ?.(i),t._$AM=i,t._$AP!==void 0&&(c=i._$AU)!==r._$AU&&t._$AP(c)}if(n!==s||l){let c=t._$AA;for(;c!==n;){const b=c.nextSibling;o.insertBefore(c,s),c=b}}}return t},O=(i,e,t=i)=>(i._$AI(e,t),i),te={},oe=(i,e=te)=>i._$AH=e,se=i=>i._$AH,A=i=>{i._$AP?.(!1,!0);let e=i._$AA;const t=i._$AB.nextSibling;for(;e!==t;){const o=e.nextSibling;e.remove(),e=o}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=(i,e,t)=>{const o=new Map;for(let s=e;s<=t;s++)o.set(i[s],s);return o},ie=Q(class extends Y{constructor(i){if(super(i),i.type!==Z.CHILD)throw Error("repeat() can only be used in text expressions")}dt(i,e,t){let o;t===void 0?t=e:e!==void 0&&(o=e);const s=[],n=[];let r=0;for(const l of i)s[r]=o?o(l,r):r,n[r]=t(l,r),r++;return{values:n,keys:s}}render(i,e,t){return this.dt(i,e,t).values}update(i,[e,t,o]){const s=se(i),{values:n,keys:r}=this.dt(e,t,o);if(!Array.isArray(s))return this.ut=r,n;const l=this.ut??=[],c=[];let b,w,h=0,f=s.length-1,p=0,v=n.length-1;for(;h<=f&&p<=v;)if(s[h]===null)h++;else if(s[f]===null)f--;else if(l[h]===r[p])c[p]=O(s[h],n[p]),h++,p++;else if(l[f]===r[v])c[v]=O(s[f],n[v]),f--,v--;else if(l[h]===r[v])c[v]=O(s[h],n[v]),k(i,c[v+1],s[h]),h++,v--;else if(l[f]===r[p])c[p]=O(s[f],n[p]),k(i,s[h],s[f]),f--,p++;else if(b===void 0&&(b=z(r,p,v),w=z(l,h,f)),b.has(l[h]))if(b.has(l[f])){const m=w.get(r[p]),$=m!==void 0?s[m]:null;if($===null){const E=k(i,s[h]);O(E,n[p]),c[p]=E}else c[p]=O($,n[p]),k(i,s[h],$),s[m]=null;p++}else A(s[f]),f--;else A(s[h]),h++;for(;p<=v;){const m=k(i,c[v+1]);O(m,n[p]),c[p++]=m}for(;h<=f;){const m=s[h++];m!==null&&A(m)}return this.ut=r,oe(i,c),H}});/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function ne(i,e,t){return i?e(i):t?.(i)}var S=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};let I=class extends M{constructor(){super(...arguments),this.description="",this.selected=!1,this.disabled=!1,this._initialized=!1,this._handleSlotChange=()=>{this._initialized&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._initialized=!0})}willUpdate(e){this._initialized&&(e.has("description")||e.has("value")||e.has("selected")||e.has("disabled"))&&this.dispatchEvent(new Event("vsc-option-state-change",{bubbles:!0}))}render(){return u`<slot @slotchange=${this._handleSlotChange}></slot>`}};I.styles=D;S([_({type:String})],I.prototype,"value",void 0);S([_({type:String})],I.prototype,"description",void 0);S([_({type:Boolean,reflect:!0})],I.prototype,"selected",void 0);S([_({type:Boolean,reflect:!0})],I.prototype,"disabled",void 0);I=S([R("vscode-option")],I);const F=(i,e)=>{const t={match:!1,ranges:[]},o=i.toLowerCase(),s=e.toLowerCase(),n=o.split(" ");let r=0;return n.forEach((l,c)=>{if(c>0&&(r+=n[c-1].length+1),t.match)return;const b=l.indexOf(s),w=s.length;b===0&&(t.match=!0,t.ranges.push([r+b,Math.min(r+b+w,i.length)]))}),t},U=(i,e)=>{const t={match:!1,ranges:[]};return i.toLowerCase().indexOf(e.toLowerCase())===0&&(t.match=!0,t.ranges=[[0,e.length]]),t},q=(i,e)=>{const t={match:!1,ranges:[]},o=i.toLowerCase().indexOf(e.toLowerCase());return o>-1&&(t.match=!0,t.ranges=[[o,o+e.length]]),t},T=(i,e)=>{const t={match:!1,ranges:[]};let o=0,s=0;const n=e.length-1,r=i.toLowerCase(),l=e.toLowerCase();for(let c=0;c<=n;c++){if(s=r.indexOf(l[c],o),s===-1)return{match:!1,ranges:[]};t.match=!0,t.ranges.push([s,s+1]),o=s+1}return t},re=(i,e,t)=>{const o=[];return i.forEach(s=>{let n;switch(t){case"startsWithPerTerm":n=F(s.label,e);break;case"startsWith":n=U(s.label,e);break;case"contains":n=q(s.label,e);break;default:n=T(s.label,e)}n.match&&o.push({...s,ranges:n.ranges})}),o},P=i=>{const e=[];return i===" "?(e.push(u`&nbsp;`),e):(i.indexOf(" ")===0&&e.push(u`&nbsp;`),e.push(u`${i.trimStart().trimEnd()}`),i.lastIndexOf(" ")===i.length-1&&e.push(u`&nbsp;`),e)},le=(i,e)=>{const t=[],o=e.length;return o<1?u`${i}`:(e.forEach((s,n)=>{const r=i.substring(s[0],s[1]);n===0&&s[0]!==0&&t.push(...P(i.substring(0,e[0][0]))),n>0&&n<o&&s[0]-e[n-1][1]!==0&&t.push(...P(i.substring(e[n-1][1],s[0]))),t.push(u`<b>${P(r)}</b>`),n===o-1&&s[1]<i.length&&t.push(...P(i.substring(s[1],i.length)))}),t)};class ce{constructor(e){this._activeIndex=-1,this._options=[],this._filterPattern="",this._filterMethod="fuzzy",this._combobox=!1,this._indexByValue=new Map,this._indexByLabel=new Map,this._selectedIndex=-1,this._selectedIndexes=new Set,this._multiSelect=!1,this._numOfVisibleOptions=0,(this._host=e).addController(this)}hostConnected(){}get activeIndex(){return this._activeIndex}set activeIndex(e){this._activeIndex=e,this._host.requestUpdate()}get relativeActiveIndex(){return this._options[this._activeIndex]?.filteredIndex??-1}set comboboxMode(e){this._combobox=e,this._host.requestUpdate()}get comboboxMode(){return this._combobox}get multiSelect(){return this._multiSelect}set multiSelect(e){this._selectedIndex=-1,this._selectedIndexes.clear(),this._multiSelect=e,this._host.requestUpdate()}get selectedIndex(){return this._selectedIndex}set selectedIndex(e){this._selectedIndex!==-1&&(this._options[this._selectedIndex].selected??=!1);const t=this.getOptionByIndex(e);this._selectedIndex=t?e:-1,this._host.requestUpdate()}get selectedIndexes(){return Array.from(this._selectedIndexes)}set selectedIndexes(e){this._selectedIndexes.forEach(t=>{this._options[t].selected=!1}),this._selectedIndexes=new Set(e),e.forEach(t=>{this._options[t]!==void 0&&(this._options[t].selected=!0)}),this._host.requestUpdate()}set value(e){if(this._multiSelect){const t=e.map(o=>this._indexByValue.get(o)).filter(o=>o!==void 0);this._selectedIndexes=new Set(t)}else this._selectedIndex=this._indexByValue.get(e)??-1;this._host.requestUpdate()}get value(){return this._multiSelect?this._selectedIndexes.size>0?Array.from(this._selectedIndexes).map(e=>this._options[e].value):[]:this._selectedIndex>-1?this._options[this._selectedIndex].value:""}set multiSelectValue(e){const t=e.map(o=>this._indexByValue.get(o)).filter(o=>o!==void 0);this._selectedIndexes=new Set(t)}get multiSelectValue(){return this._selectedIndexes.size>0?Array.from(this._selectedIndexes).map(e=>this._options[e].value):[]}get filterPattern(){return this._filterPattern}set filterPattern(e){e!==this._filterPattern&&(this._filterPattern=e,this._updateState())}get filterMethod(){return this._filterMethod}set filterMethod(e){e!==this._filterMethod&&(this._filterMethod=e,this._updateState())}get options(){return this._options}get numOfVisibleOptions(){return this._numOfVisibleOptions}get numOptions(){return this._options.length}populate(e){this._indexByValue.clear(),this._indexByLabel.clear(),this._options=e.map((t,o)=>(this._indexByValue.set(t.value??"",o),this._indexByLabel.set(t.label??"",o),{description:t.description??"",disabled:t.disabled??!1,label:t.label??"",selected:t.selected??!1,value:t.value??"",index:o,filteredIndex:o,ranges:[],visible:!0})),this._numOfVisibleOptions=this._options.length}add(e){const t=this._options.length,{description:o,disabled:s,label:n,selected:r,value:l}=e;let c=!0,b=[];if(this._combobox&&this._filterPattern!==""){const w=this._searchByPattern(n??"");c=w.match,b=w.ranges}this._indexByValue.set(l??"",t),this._indexByLabel.set(n??"",t),r&&(this._selectedIndex=t,this._selectedIndexes.add(t),this._activeIndex=t),this._options.push({index:t,filteredIndex:t,description:o??"",disabled:s??!1,label:n??"",selected:r??!1,value:l??"",visible:c,ranges:b}),c&&(this._numOfVisibleOptions+=1)}clear(){this._options=[],this._indexByValue.clear(),this._indexByLabel.clear(),this._numOfVisibleOptions=0}getIsIndexSelected(e){return this._multiSelect?this._selectedIndexes.has(e):this._selectedIndex===e}expandMultiSelection(e){e.forEach(t=>{const o=this._indexByValue.get(t)??-1;o!==-1&&this._selectedIndexes.add(o)}),this._host.requestUpdate()}toggleActiveMultiselectOption(){const e=this._options[this._activeIndex]??null;if(!e)return;this._selectedIndexes.has(e.index)?this._selectedIndexes.delete(e.index):this._selectedIndexes.add(e.index),this._host.requestUpdate()}toggleOptionSelected(e){const t=this._selectedIndexes.has(e);this._options[e].selected=!this._options[e].selected,t?this._selectedIndexes.delete(e):this._selectedIndexes.add(e),this._host.requestUpdate()}getActiveOption(){return this._options[this._activeIndex]??null}getSelectedOption(){return this._options[this._selectedIndex]??null}getOptionByIndex(e){return this._options[e]??null}findOptionIndex(e){return this._indexByValue.get(e)??-1}getOptionByValue(e,t=!1){const o=this._indexByValue.get(e)??-1;return o===-1?null:t?this._options[o]:this._options[o].visible?this._options[o]:null}getOptionByLabel(e){const t=this._indexByLabel.get(e)??-1;return t===-1?null:this._options[t]}next(e){const t=e??this._activeIndex;let o=-1;for(let s=t+1;s<this._options.length;s++)if(this._options[s]&&!this._options[s].disabled&&this._options[s].visible){o=s;break}return o>-1?this._options[o]:null}prev(e){const t=e??this._activeIndex;let o=-1;for(let s=t-1;s>=0;s--)if(this._options[s]&&!this._options[s].disabled&&this._options[s].visible){o=s;break}return o>-1?this._options[o]:null}activateDefault(){if(this._multiSelect){if(this._selectedIndexes.size>0){const t=this._selectedIndexes.values().next();this._activeIndex=t.value?t.value:0}}else this._selectedIndex>-1?this._activeIndex=this._selectedIndex:this._activeIndex=0;this._host.requestUpdate()}selectAll(){this._multiSelect&&(this._options.forEach((e,t)=>{this._options[t].selected=!0,this._selectedIndexes.add(t)}),this._host.requestUpdate())}selectNone(){this._multiSelect&&(this._options.forEach((e,t)=>{this._options[t].selected=!1}),this._selectedIndexes.clear(),this._host.requestUpdate())}_searchByPattern(e){let t;switch(this._filterMethod){case"startsWithPerTerm":t=F(e,this._filterPattern);break;case"startsWith":t=U(e,this._filterPattern);break;case"contains":t=q(e,this._filterPattern);break;default:t=T(e,this._filterPattern)}return t}_updateState(){if(!this._combobox||this._filterPattern==="")this._options.forEach((e,t)=>{this._options[t].visible=!0,this._options[t].ranges=[]}),this._numOfVisibleOptions=this._options.length;else{let e=-1;this._numOfVisibleOptions=0,this._options.forEach(({label:t},o)=>{const s=this._searchByPattern(t);this._options[o].visible=s.match,this._options[o].ranges=s.ranges,this._options[o].filteredIndex=s.match?++e:-1,s.match&&(this._numOfVisibleOptions+=1)})}this._host.requestUpdate()}}var d=function(i,e,t,o){var s=arguments.length,n=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,o);else for(var l=i.length-1;l>=0;l--)(r=i[l])&&(n=(s<3?r(n):s>3?r(e,t,n):r(e,t))||n);return s>3&&n&&Object.defineProperty(e,t,n),n};const C=10,y=22;class a extends M{set combobox(e){this._opts.comboboxMode=e}get combobox(){return this._opts.comboboxMode}set disabled(e){this._disabled=e,this.ariaDisabled=e?"true":"false",e===!0?(this._originalTabIndex=this.tabIndex,this.tabIndex=-1):(this.tabIndex=this._originalTabIndex??0,this._originalTabIndex=void 0),this.requestUpdate()}get disabled(){return this._disabled}set filter(e){const t=["contains","fuzzy","startsWith","startsWithPerTerm"];let o;t.includes(e)?o=e:(console.warn(`[VSCode Webview Elements] Invalid filter: "${e}", fallback to default. Valid values are: "contains", "fuzzy", "startsWith", "startsWithPerm".`,this),o="fuzzy"),this._opts.filterMethod=o}get filter(){return this._opts.filterMethod}set options(e){this._opts.populate(e)}get options(){return this._opts.options.map(({label:e,value:t,description:o,selected:s,disabled:n})=>({label:e,value:t,description:o,selected:s,disabled:n}))}constructor(){super(),this.creatable=!1,this.label="",this.invalid=!1,this.focused=!1,this.open=!1,this.position="below",this._opts=new ce(this),this._firstUpdateCompleted=!1,this._currentDescription="",this._filter="fuzzy",this._selectedIndexes=[],this._options=[],this._value="",this._values=[],this._isPlaceholderOptionActive=!1,this._isBeingFiltered=!1,this._optionListScrollPos=0,this._isHoverForbidden=!1,this._disabled=!1,this._originalTabIndex=void 0,this._onClickOutside=e=>{e.composedPath().findIndex(s=>s===this)===-1&&(this.open=!1)},this._onMouseMove=()=>{this._isHoverForbidden=!1,window.removeEventListener("mousemove",this._onMouseMove)},this._onOptionListScroll=e=>{this._optionListScrollPos=e.detail},this._onComponentKeyDown=e=>{[" ","ArrowUp","ArrowDown","Escape"].includes(e.key)&&(e.stopPropagation(),e.preventDefault()),e.key==="Enter"&&this._onEnterKeyDown(e),e.key===" "&&this._onSpaceKeyDown(),e.key==="Escape"&&this._onEscapeKeyDown(),e.key==="ArrowUp"&&this._onArrowUpKeyDown(),e.key==="ArrowDown"&&this._onArrowDownKeyDown()},this._onComponentFocus=()=>{this.focused=!0},this._onComponentBlur=()=>{this.focused=!1},this.addEventListener("vsc-option-state-change",e=>{e.stopPropagation(),this._setStateFromSlottedElements(),this.requestUpdate()})}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._onComponentKeyDown),this.addEventListener("focus",this._onComponentFocus),this.addEventListener("blur",this._onComponentBlur),this._setAutoFocus()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._onComponentKeyDown),this.removeEventListener("focus",this._onComponentFocus),this.removeEventListener("blur",this._onComponentBlur)}firstUpdated(e){this._firstUpdateCompleted=!0}willUpdate(e){e.has("required")&&this._firstUpdateCompleted&&this._manageRequired()}update(e){super.update(e),e.has("open")&&(this.open?(this._opts.activateDefault(),this._scrollActiveElementToTop(),window.addEventListener("click",this._onClickOutside)):window.removeEventListener("click",this._onClickOutside))}get _filteredOptions(){return!this.combobox||this._opts.filterPattern===""?this._options:re(this._options,this._opts.filterPattern,this._filter)}_setAutoFocus(){this.hasAttribute("autofocus")&&(this.tabIndex<0&&(this.tabIndex=0),this.combobox?this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".combobox-input").focus()}):this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".select-face").focus()}))}get _isSuggestedOptionVisible(){if(!(this.combobox&&this.creatable))return!1;const e=this._opts.getOptionByValue(this._opts.filterPattern)!==null,t=this._opts.filterPattern.length>0;return!e&&t}_manageRequired(){}_setStateFromSlottedElements(){const e=this._assignedOptions??[];this._opts.clear(),e.forEach(t=>{const{innerText:o,description:s,disabled:n}=t,r=typeof t.value=="string"?t.value:o.trim(),l=t.selected??!1,c={label:o.trim(),value:r,description:s,selected:l,disabled:n};this._opts.add(c)})}_createSuggestedOption(){const e=this._opts.numOptions,t=document.createElement("vscode-option");return t.value=this._opts.filterPattern,W(this._opts.filterPattern,t),this.appendChild(t),e}_dispatchChangeEvent(){this.dispatchEvent(new Event("change")),this.dispatchEvent(new Event("input"))}async _createAndSelectSuggestedOption(){}_toggleComboboxDropdown(){this._opts.filterPattern="",this.open=!this.open}_scrollActiveElementToTop(){this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*y)}async _adjustOptionListScrollPos(e,t){let o=this._opts.numOfVisibleOptions;if(this._isSuggestedOptionVisible&&(o+=1),o<=C)return;this._isHoverForbidden=!0,window.addEventListener("mousemove",this._onMouseMove);const n=this._optionListScrollPos,r=t*y,l=r>=n&&r<=n+C*y-y;e==="down"&&(l||(this._optionListScrollPos=t*y-(C-1)*y)),e==="up"&&(l||(this._optionListScrollPos=Math.floor(this._opts.relativeActiveIndex*y)))}_onFaceClick(){this.open=!this.open}_onComboboxButtonClick(){this._toggleComboboxDropdown()}_onComboboxButtonKeyDown(e){e.key==="Enter"&&this._toggleComboboxDropdown()}_onOptionMouseOver(e){if(this._isHoverForbidden)return;const t=e.target;t.matches(".option")&&(t.matches(".placeholder")?(this._isPlaceholderOptionActive=!0,this._opts.activeIndex=-1):(this._isPlaceholderOptionActive=!1,this._opts.activeIndex=+t.dataset.index))}_onPlaceholderOptionMouseOut(){this._isPlaceholderOptionActive=!1}_onNoOptionsClick(e){e.stopPropagation()}_onEnterKeyDown(e){this._isBeingFiltered=!1,e?.composedPath&&e.composedPath().find(o=>o.matches?o.matches("vscode-button.button-accept"):!1)}_onSpaceKeyDown(){if(!this.open){this.open=!0;return}}_onArrowUpKeyDown(){if(this.open){if(this._opts.activeIndex<=0&&!(this.combobox&&this.creatable))return;if(this._isPlaceholderOptionActive){const e=this._opts.numOfVisibleOptions-1;this._opts.activeIndex=e,this._isPlaceholderOptionActive=!1}else{const e=this._opts.prev();if(e!==null){this._opts.activeIndex=e?.index??-1;const t=e?.filteredIndex??-1;t>-1&&this._adjustOptionListScrollPos("up",t)}}}else this.open=!0,this._opts.activateDefault()}_onArrowDownKeyDown(){let e=this._opts.numOfVisibleOptions;const t=this._isSuggestedOptionVisible;if(t&&(e+=1),this.open){if(this._isPlaceholderOptionActive&&this._opts.activeIndex===-1)return;const o=this._opts.next();if(t&&o===null)this._isPlaceholderOptionActive=!0,this._adjustOptionListScrollPos("down",e-1),this._opts.activeIndex=-1;else if(o!==null){const s=o?.filteredIndex??-1;this._opts.activeIndex=o?.index??-1,s>-1&&this._adjustOptionListScrollPos("down",s)}}else this.open=!0,this._opts.activateDefault()}_onEscapeKeyDown(){this.open=!1}_onSlotChange(){this._setStateFromSlottedElements(),this.requestUpdate()}_onComboboxInputFocus(e){e.target.select(),this._isBeingFiltered=!1,this._opts.filterPattern=""}_onComboboxInputBlur(){this._isBeingFiltered=!1}_onComboboxInputInput(e){this._isBeingFiltered=!0,this._opts.filterPattern=e.target.value,this._opts.activeIndex=-1,this.open=!0}_onComboboxInputClick(){this._isBeingFiltered=this._opts.filterPattern!=="",this.open=!0}_onComboboxInputSpaceKeyDown(e){e.key===" "&&e.stopPropagation()}_onOptionClick(e){this._isBeingFiltered=!1}_renderCheckbox(e,t){return u`<span class=${B({"checkbox-icon":!0,checked:e})}>${X}</span
      ><span class="option-label">${t}</span>`}_renderOptions(){const e=this._opts.options;return u`
      <ul
        aria-label=${L(this.label??void 0)}
        aria-multiselectable=${L(this._opts.multiSelect?"true":void 0)}
        class="options"
        id="select-listbox"
        role="listbox"
        tabindex="-1"
        @click=${this._onOptionClick}
        @mouseover=${this._onOptionMouseOver}
      >
        ${ie(e,t=>t.index,(t,o)=>{if(!t.visible)return x;const s=t.index===this._opts.activeIndex&&!t.disabled,n=this._opts.getIsIndexSelected(t.index),r={active:s,disabled:t.disabled,option:!0,selected:n},l=t.ranges?.length??!1?le(t.label,t.ranges??[]):t.label;return u`
              <li
                aria-selected=${n?"true":"false"}
                class=${B(r)}
                data-index=${t.index}
                data-filtered-index=${o}
                id=${`op-${t.index}`}
                role="option"
                tabindex="-1"
              >
                ${ne(this._opts.multiSelect,()=>this._renderCheckbox(n,l),()=>l)}
              </li>
            `})}
        ${this._renderPlaceholderOption(this._opts.numOfVisibleOptions<1)}
      </ul>
    `}_renderPlaceholderOption(e){return this.combobox?this._opts.getOptionByLabel(this._opts.filterPattern)?x:this.creatable&&this._opts.filterPattern.length>0?u`<li
        class=${B({option:!0,placeholder:!0,active:this._isPlaceholderOptionActive})}
        @mouseout=${this._onPlaceholderOptionMouseOut}
      >
        Add "${this._opts.filterPattern}"
      </li>`:e?u`<li class="no-options" @click=${this._onNoOptionsClick}>
            No options
          </li>`:x:x}_renderDescription(){const e=this._opts.getActiveOption();if(!e)return x;const{description:t}=e;return t?u`<div class="description">${t}</div>`:x}_renderSelectFace(){return u`${x}`}_renderComboboxFace(){return u`${x}`}_renderDropdownControls(){return u`${x}`}_renderDropdown(){const e={dropdown:!0,multiple:this._opts.multiSelect,open:this.open},t=this._isSuggestedOptionVisible||this._opts.numOfVisibleOptions===0?this._opts.numOfVisibleOptions+1:this._opts.numOfVisibleOptions,o=Math.min(t*y,C*y);return u`
      <div class=${B(e)}>
        ${this.position==="above"?this._renderDescription():x}
        <vscode-scrollable
          always-visible
          class="scrollable"
          min-thumb-size="40"
          tabindex="-1"
          @vsc-scrollable-scroll=${this._onOptionListScroll}
          .scrollPos=${this._optionListScrollPos}
          .style=${J({height:`${o}px`})}
        >
          ${this._renderOptions()} ${this._renderDropdownControls()}
        </vscode-scrollable>
        ${this.position==="below"?this._renderDescription():x}
      </div>
    `}}d([_({type:Boolean,reflect:!0})],a.prototype,"creatable",void 0);d([_({type:Boolean,reflect:!0})],a.prototype,"combobox",null);d([_({reflect:!0})],a.prototype,"label",void 0);d([_({type:Boolean,reflect:!0})],a.prototype,"disabled",null);d([_({type:Boolean,reflect:!0})],a.prototype,"invalid",void 0);d([_()],a.prototype,"filter",null);d([_({type:Boolean,reflect:!0})],a.prototype,"focused",void 0);d([_({type:Boolean,reflect:!0})],a.prototype,"open",void 0);d([_({type:Array})],a.prototype,"options",null);d([_({reflect:!0})],a.prototype,"position",void 0);d([G({flatten:!0,selector:"vscode-option"})],a.prototype,"_assignedOptions",void 0);d([g()],a.prototype,"_currentDescription",void 0);d([g()],a.prototype,"_filter",void 0);d([g()],a.prototype,"_filteredOptions",null);d([g()],a.prototype,"_selectedIndexes",void 0);d([g()],a.prototype,"_options",void 0);d([g()],a.prototype,"_value",void 0);d([g()],a.prototype,"_values",void 0);d([g()],a.prototype,"_isPlaceholderOptionActive",void 0);d([g()],a.prototype,"_isBeingFiltered",void 0);d([g()],a.prototype,"_optionListScrollPos",void 0);const me=[D,N`
    :host {
      display: inline-block;
      max-width: 100%;
      outline: none;
      position: relative;
      width: 320px;
    }

    .main-slot {
      display: none;
    }

    .select-face,
    .combobox-face {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-radius: 2px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-settings-dropdownForeground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      position: relative;
      user-select: none;
      width: 100%;
    }

    :host([invalid]) .select-face,
    :host(:invalid) .select-face,
    :host([invalid]) .combobox-face,
    :host(:invalid) .combobox-face {
      background-color: var(--vscode-inputValidation-errorBackground, #5a1d1d);
      border-color: var(--vscode-inputValidation-errorBorder, #be1100);
    }

    .select-face {
      cursor: pointer;
      display: block;
      padding: 3px 4px;
    }

    .select-face .text {
      display: block;
      height: 18px;
      overflow: hidden;
    }

    .select-face.multiselect {
      padding: 0;
    }

    .select-face-badge {
      background-color: var(--vscode-badge-background, #616161);
      border-radius: 2px;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      flex-shrink: 0;
      font-size: 11px;
      line-height: 16px;
      margin: 2px;
      padding: 2px 3px;
      white-space: nowrap;
    }

    .select-face-badge.no-item {
      background-color: transparent;
      color: inherit;
    }

    .combobox-face {
      display: flex;
    }

    :host(:focus) .select-face,
    :host(:focus) .combobox-face,
    :host([focused]) .select-face,
    :host([focused]) .combobox-face {
      border-color: var(--vscode-focusBorder, #0078d4);
      outline: none;
    }

    .combobox-input {
      background-color: transparent;
      box-sizing: border-box;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      line-height: 16px;
      padding: 4px;
      width: 100%;
    }

    .combobox-input:focus {
      outline: none;
    }

    .combobox-button {
      align-items: center;
      background-color: transparent;
      border: 0;
      border-radius: 2px;
      box-sizing: content-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex-shrink: 0;
      height: 16px;
      justify-content: center;
      margin: 1px 1px 0 0;
      padding: 3px;
      width: 22px;
    }

    .combobox-button:hover,
    .combobox-button:focus-visible {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
      outline-style: dashed;
      outline-color: var(--vscode-toolbar-hoverOutline, transparent);
    }

    .combobox-button:focus-visible {
      outline: none;
    }

    .icon {
      color: var(--vscode-foreground, #cccccc);
      display: block;
      height: 14px;
      pointer-events: none;
      width: 14px;
    }

    .select-face .icon {
      position: absolute;
      right: 6px;
      top: 5px;
    }

    .icon svg {
      color: var(--vscode-foreground, #cccccc);
      height: 100%;
      width: 100%;
    }

    .dropdown {
      background-color: var(--vscode-settings-dropdownBackground, #313131);
      border-color: var(--vscode-settings-dropdownListBorder, #454545);
      border-radius: 0 0 3px 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      display: none;
      left: 0;
      padding-bottom: 2px;
      position: absolute;
      top: 100%;
      width: 100%;
      z-index: var(--dropdown-z-index, 2);
    }

    .dropdown.open {
      display: block;
    }

    :host([position='above']) .dropdown {
      border-radius: 3px 3px 0 0;
      bottom: 26px;
      padding-bottom: 0;
      padding-top: 2px;
      top: auto;
    }

    :host(:focus) .dropdown,
    :host([focused]) .dropdown {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    .scrollable {
      display: block;
      max-height: 222px;
      margin: 1px;
      outline: none;
      overflow: hidden;
    }

    .options {
      box-sizing: border-box;
      cursor: pointer;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .option {
      align-items: center;
      box-sizing: border-box;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      height: 22px;
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      padding: 1px 3px;
      user-select: none;
      outline-color: transparent;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
    }

    .option b {
      color: var(--vscode-list-highlightForeground, #2aaaff);
    }

    .option.active b {
      color: var(--vscode-list-focusHighlightForeground, #2aaaff);
    }

    .option:not(.disabled):hover {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      color: var(--vscode-list-hoverForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option:hover,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option:hover {
      outline-style: dotted;
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-width: 1px;
    }

    .option.disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }

    .option.active,
    .option.active:hover {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
      outline-style: solid;
      outline-width: 1px;
    }

    .no-options {
      align-items: center;
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      color: var(--vscode-foreground, #cccccc);
      cursor: default;
      display: flex;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
      min-height: calc(var(--vscode-font-size) * 1.3);
      opacity: 0.85;
      padding: 1px 3px;
      user-select: none;
    }

    .placeholder {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .placeholder span {
      font-weight: bold;
    }

    .placeholder:not(.disabled):hover {
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
    }

    :host-context(body[data-vscode-theme-kind='vscode-high-contrast'])
      .option.active,
    :host-context(body[data-vscode-theme-kind='vscode-high-contrast-light'])
      .option.active:hover {
      outline-color: var(--vscode-list-focusOutline, #0078d4);
      outline-style: dashed;
    }

    .option-label {
      display: block;
      pointer-events: none;
      width: 100%;
    }

    .dropdown.multiple .option.selected {
      background-color: var(--vscode-list-hoverBackground, #2a2d2e);
      outline-color: var(--vscode-list-hoverBackground, #2a2d2e);
    }

    .dropdown.multiple .option.selected.active {
      background-color: var(--vscode-list-activeSelectionBackground, #04395e);
      color: var(--vscode-list-activeSelectionForeground, #ffffff);
      outline-color: var(--vscode-list-activeSelectionBackground, #04395e);
    }

    .checkbox-icon {
      align-items: center;
      background-color: var(--vscode-checkbox-background, #313131);
      border: 1px solid var(--vscode-checkbox-border);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-checkbox-foreground);
      display: inline-flex;
      height: 15px;
      justify-content: center;
      margin-right: 5px;
      overflow: hidden;
      position: relative;
      width: 15px;
    }

    .checkbox-icon svg {
      display: none;
      height: 13px;
      width: 13px;
    }

    .checkbox-icon.checked svg {
      display: block;
    }

    .dropdown-controls {
      display: flex;
      justify-content: flex-end;
      padding: 4px;
    }

    .dropdown-controls :not(:last-child) {
      margin-right: 4px;
    }

    .action-icon {
      align-items: center;
      background-color: transparent;
      border: 0;
      color: var(--vscode-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      height: 24px;
      justify-content: center;
      padding: 0;
      width: 24px;
    }

    .action-icon:focus {
      outline: none;
    }

    .action-icon:focus-visible {
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: -1px;
    }

    .description {
      border-color: var(--vscode-settings-dropdownBorder, #3c3c3c);
      border-style: solid;
      border-width: 1px 0 0;
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.3;
      padding: 6px 4px;
      word-wrap: break-word;
    }

    :host([position='above']) .description {
      border-width: 0 0 1px;
    }
  `];export{a as V,xe as c,me as s};
