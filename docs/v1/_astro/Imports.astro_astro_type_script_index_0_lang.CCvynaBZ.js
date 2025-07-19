import"./Imports.astro_astro_type_script_index_0_lang.D2i34b64.js";import"./Imports.astro_astro_type_script_index_0_lang.CY0UH2CQ.js";import{d as b,i as v,c as m,V as f,x as h,E as V}from"./default.styles.2_Tg-dod.js";import{n as c}from"./property.DhsKp3PU.js";import{r as P}from"./state.DQQ1Z-nc.js";import{e as R}from"./query.CfX4IL2Y.js";import{e as M}from"./base.CShCMygk.js";import{o as x}from"./query-assigned-elements.DwgmpGB0.js";import{a as S}from"./class-map.Cezi6eN_.js";import{s as O}from"./style-property-map.Cg6zaSGE.js";import"./Imports.astro_astro_type_script_index_0_lang.BkFEeZkp.js";import"./if-defined.BevqSZlK.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let j;function L(l){return(e,t)=>M(e,t,{get(){return(this.renderRoot??(j??=document.createDocumentFragment())).querySelectorAll(l)}})}const H=(l,e)=>typeof l=="number"&&!Number.isNaN(l)?l/e*100:typeof l=="string"&&/^[0-9.]+$/.test(l)?Number(l)/e*100:typeof l=="string"&&/^[0-9.]+%$/.test(l)?Number(l.substring(0,l.length-1)):typeof l=="string"&&/^[0-9.]+px$/.test(l)?Number(l.substring(0,l.length-2))/e*100:null,k=[b,v`
    :host {
      display: block;
      --vsc-row-even-background: transparent;
      --vsc-row-odd-background: transparent;
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 0;
      --vsc-row-display: table-row;
    }

    :host([bordered]),
    :host([bordered-rows]) {
      --vsc-row-border-bottom-width: 1px;
    }

    :host([compact]) {
      --vsc-row-display: block;
    }

    :host([bordered][compact]),
    :host([bordered-rows][compact]) {
      --vsc-row-border-bottom-width: 0;
      --vsc-row-border-top-width: 1px;
    }

    :host([zebra]) {
      --vsc-row-even-background: var(--vscode-keybindingTable-rowsBackground);
    }

    :host([zebra-odd]) {
      --vsc-row-odd-background: var(--vscode-keybindingTable-rowsBackground);
    }

    ::slotted(vscode-table-row) {
      width: 100%;
    }

    .wrapper {
      height: 100%;
      max-width: 100%;
      overflow: hidden;
      position: relative;
      width: 100%;
    }

    .wrapper.select-disabled {
      user-select: none;
    }

    .wrapper.resize-cursor {
      cursor: ew-resize;
    }

    .wrapper.compact-view .header-slot-wrapper {
      height: 0;
      overflow: hidden;
    }

    .scrollable {
      height: 100%;
    }

    .scrollable:before {
      background-color: transparent;
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
    }

    .wrapper:not(.compact-view) .scrollable:not([scrolled]):before {
      background-color: var(--vscode-editorGroup-border);
    }

    .sash {
      visibility: hidden;
    }

    :host([bordered-columns]) .sash,
    :host([bordered]) .sash {
      visibility: visible;
    }

    :host([resizable]) .wrapper:hover .sash {
      visibility: visible;
    }

    .sash {
      height: 100%;
      position: absolute;
      top: 0;
      width: 1px;
    }

    .wrapper.compact-view .sash {
      display: none;
    }

    .sash.resizable {
      cursor: ew-resize;
    }

    .sash-visible {
      background-color: var(--vscode-editorGroup-border);
      height: 100%;
      position: absolute;
      top: 30px;
      width: 1px;
    }

    .sash.hover .sash-visible {
      background-color: var(--vscode-sash-hoverBorder);
      transition: background-color 50ms linear 300ms;
    }

    .sash .sash-clickable {
      background-color: transparent;
      height: 100%;
      left: -2px;
      position: absolute;
      width: 5px;
    }
  `];var d=function(l,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,t,o);else for(var n=l.length-1;n>=0;n--)(r=l[n])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};const E=100;let a=class extends f{constructor(){super(...arguments),this.role="table",this.resizable=!1,this.responsive=!1,this.bordered=!1,this.borderedColumns=!1,this.borderedRows=!1,this.breakpoint=300,this.minColumnWidth="50px",this.delayedResizing=!1,this.compact=!1,this.zebra=!1,this.zebraOdd=!1,this._sashPositions=[],this._isDragging=!1,this._sashHovers=[],this._columns=[],this._activeSashElementIndex=-1,this._activeSashCursorOffset=0,this._componentX=0,this._componentH=0,this._componentW=0,this._headerCells=[],this._cellsOfFirstRow=[],this._prevHeaderHeight=0,this._prevComponentHeight=0,this._componentResizeObserverCallback=()=>{this._memoizeComponentDimensions(),this._updateResizeHandlersSize(),this.responsive&&this._toggleCompactView(),this._resizeTableBody()},this._headerResizeObserverCallback=()=>{this._updateResizeHandlersSize()},this._bodyResizeObserverCallback=()=>{this._resizeTableBody()},this._onResizingMouseMove=e=>{e.stopPropagation(),this._updateActiveSashPosition(e.pageX),this.delayedResizing?this._resizeColumns(!1):this._resizeColumns(!0)},this._onResizingMouseUp=e=>{this._resizeColumns(!0),this._updateActiveSashPosition(e.pageX),this._sashHovers[this._activeSashElementIndex]=!1,this._isDragging=!1,this._activeSashElementIndex=-1,document.removeEventListener("mousemove",this._onResizingMouseMove),document.removeEventListener("mouseup",this._onResizingMouseUp)}}set columns(e){this._columns=e,this.isConnected&&this._initDefaultColumnSizes()}get columns(){return this._columns}connectedCallback(){super.connectedCallback(),this._memoizeComponentDimensions(),this._initDefaultColumnSizes()}disconnectedCallback(){super.disconnectedCallback(),this._componentResizeObserver?.unobserve(this),this._componentResizeObserver?.disconnect(),this._bodyResizeObserver?.disconnect()}_px2Percent(e){return e/this._componentW*100}_percent2Px(e){return this._componentW*e/100}_memoizeComponentDimensions(){const e=this.getBoundingClientRect();this._componentH=e.height,this._componentW=e.width,this._componentX=e.x}_queryHeaderCells(){const e=this._assignedHeaderElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-header-cell")):[]}_getHeaderCells(){return this._headerCells.length||(this._headerCells=this._queryHeaderCells()),this._headerCells}_queryCellsOfFirstRow(){const e=this._assignedBodyElements;return e&&e[0]?Array.from(e[0].querySelectorAll("vscode-table-row:first-child vscode-table-cell")):[]}_getCellsOfFirstRow(){return this._cellsOfFirstRow.length||(this._cellsOfFirstRow=this._queryCellsOfFirstRow()),this._cellsOfFirstRow}_resizeTableBody(){let e=0,t=0;const o=this.getBoundingClientRect().height;this._assignedHeaderElements&&this._assignedHeaderElements.length&&(e=this._assignedHeaderElements[0].getBoundingClientRect().height),this._assignedBodyElements&&this._assignedBodyElements.length&&(t=this._assignedBodyElements[0].getBoundingClientRect().height);const i=t-e-o;this._scrollableElement.style.height=i>0?`${o-e}px`:"auto"}_initResizeObserver(){this._componentResizeObserver=new ResizeObserver(this._componentResizeObserverCallback),this._componentResizeObserver.observe(this),this._headerResizeObserver=new ResizeObserver(this._headerResizeObserverCallback),this._headerResizeObserver.observe(this._headerElement)}_calcColWidthPercentages(){const e=this._getHeaderCells().length;let t=this.columns.slice(0,e);const o=t.filter(s=>s==="auto").length+e-t.length;let i=100;if(t=t.map(s=>{const r=H(s,this._componentW);return r===null?"auto":(i-=r,r)}),t.length<e)for(let s=t.length;s<e;s++)t.push("auto");return t=t.map(s=>s==="auto"?i/o:s),t}_initHeaderCellSizes(e){this._getHeaderCells().forEach((t,o)=>{t.style.width=`${e[o]}%`})}_initBodyColumnSizes(e){this._getCellsOfFirstRow().forEach((t,o)=>{t.style.width=`${e[o]}%`})}_initSashes(e){const t=e.length;let o=0;this._sashPositions=[],e.forEach((i,s)=>{if(s<t-1){const r=o+i;this._sashPositions.push(r),o=r}})}_initDefaultColumnSizes(){const e=this._calcColWidthPercentages();this._initHeaderCellSizes(e),this._initBodyColumnSizes(e),this._initSashes(e)}_updateResizeHandlersSize(){const e=this._headerElement.getBoundingClientRect();if(e.height===this._prevHeaderHeight&&this._componentH===this._prevComponentHeight)return;this._prevHeaderHeight=e.height,this._prevComponentHeight=this._componentH;const t=this._componentH-e.height;this._sashVisibleElements.forEach(o=>{o.style.height=`${t}px`,o.style.top=`${e.height}px`})}_applyCompactViewColumnLabels(){const t=this._getHeaderCells().map(i=>i.innerText);this.querySelectorAll("vscode-table-row").forEach(i=>{i.querySelectorAll("vscode-table-cell").forEach((r,n)=>{r.columnLabel=t[n],r.compact=!0})})}_clearCompactViewColumnLabels(){this.querySelectorAll("vscode-table-cell").forEach(e=>{e.columnLabel="",e.compact=!1})}_toggleCompactView(){const t=this.getBoundingClientRect().width<this.breakpoint;this.compact!==t&&(this.compact=t,t?this._applyCompactViewColumnLabels():this._clearCompactViewColumnLabels())}_onDefaultSlotChange(){this._assignedElements.forEach(e=>{if(e.tagName.toLowerCase()==="vscode-table-header"){e.slot="header";return}if(e.tagName.toLowerCase()==="vscode-table-body"){e.slot="body";return}})}_onHeaderSlotChange(){this._headerCells=this._queryHeaderCells()}_onBodySlotChange(){if(this._initDefaultColumnSizes(),this._initResizeObserver(),this._updateResizeHandlersSize(),!this._bodyResizeObserver){const e=this._assignedBodyElements[0]??null;e&&(this._bodyResizeObserver=new ResizeObserver(this._bodyResizeObserverCallback),this._bodyResizeObserver.observe(e))}}_onSashMouseOver(e){if(this._isDragging)return;const t=e.currentTarget,o=Number(t.dataset.index);this._sashHovers[o]=!0,this.requestUpdate()}_onSashMouseOut(e){if(e.stopPropagation(),this._isDragging)return;const t=e.currentTarget,o=Number(t.dataset.index);this._sashHovers[o]=!1,this.requestUpdate()}_onSashMouseDown(e){e.stopPropagation();const{pageX:t,currentTarget:o}=e,i=o,s=Number(i.dataset.index),n=i.getBoundingClientRect().x;this._isDragging=!0,this._activeSashElementIndex=s,this._sashHovers[this._activeSashElementIndex]=!0,this._activeSashCursorOffset=this._px2Percent(t-n);const p=this._getHeaderCells();this._headerCellsToResize=[],this._headerCellsToResize.push(p[s]),p[s+1]&&(this._headerCellsToResize[1]=p[s+1]);const z=this._bodySlot.assignedElements()[0].querySelectorAll("vscode-table-row:first-child > vscode-table-cell");this._cellsToResize=[],this._cellsToResize.push(z[s]),z[s+1]&&this._cellsToResize.push(z[s+1]),document.addEventListener("mousemove",this._onResizingMouseMove),document.addEventListener("mouseup",this._onResizingMouseUp)}_updateActiveSashPosition(e){const{prevSashPos:t,nextSashPos:o}=this._getSashPositions();let i=H(this.minColumnWidth,this._componentW);i===null&&(i=0);const s=t?t+i:i,r=o?o-i:E-i;let n=this._px2Percent(e-this._componentX-this._percent2Px(this._activeSashCursorOffset));n=Math.max(n,s),n=Math.min(n,r),this._sashPositions[this._activeSashElementIndex]=n,this.requestUpdate()}_getSashPositions(){const e=this._sashPositions[this._activeSashElementIndex],t=this._sashPositions[this._activeSashElementIndex-1]||0,o=this._sashPositions[this._activeSashElementIndex+1]||E;return{sashPos:e,prevSashPos:t,nextSashPos:o}}_resizeColumns(e=!0){const{sashPos:t,prevSashPos:o,nextSashPos:i}=this._getSashPositions(),s=t-o,r=i-t,n=`${s}%`,p=`${r}%`;this._headerCellsToResize[0].style.width=n,this._headerCellsToResize[1]&&(this._headerCellsToResize[1].style.width=p),e&&(this._cellsToResize[0].style.width=n,this._cellsToResize[1]&&(this._cellsToResize[1].style.width=p))}render(){const e=this._sashPositions.map((o,i)=>{const s=S({sash:!0,hover:this._sashHovers[i],resizable:this.resizable}),r=`${o}%`;return this.resizable?h`
            <div
              class=${s}
              data-index=${i}
              .style=${O({left:r})}
              @mousedown=${this._onSashMouseDown}
              @mouseover=${this._onSashMouseOver}
              @mouseout=${this._onSashMouseOut}
            >
              <div class="sash-visible"></div>
              <div class="sash-clickable"></div>
            </div>
          `:h`<div
            class=${s}
            data-index=${i}
            .style=${O({left:r})}
          >
            <div class="sash-visible"></div>
          </div>`}),t=S({wrapper:!0,"select-disabled":this._isDragging,"resize-cursor":this._isDragging,"compact-view":this.compact});return h`
      <div class=${t}>
        <div class="header">
          <slot name="caption"></slot>
          <div class="header-slot-wrapper">
            <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
          </div>
        </div>
        <vscode-scrollable class="scrollable">
          <div>
            <slot name="body" @slotchange=${this._onBodySlotChange}></slot>
          </div>
        </vscode-scrollable>
        ${e}
        <slot @slotchange=${this._onDefaultSlotChange}></slot>
      </div>
    `}};a.styles=k;d([c({reflect:!0})],a.prototype,"role",void 0);d([c({type:Boolean,reflect:!0})],a.prototype,"resizable",void 0);d([c({type:Boolean,reflect:!0})],a.prototype,"responsive",void 0);d([c({type:Boolean,reflect:!0})],a.prototype,"bordered",void 0);d([c({type:Boolean,reflect:!0,attribute:"bordered-columns"})],a.prototype,"borderedColumns",void 0);d([c({type:Boolean,reflect:!0,attribute:"bordered-rows"})],a.prototype,"borderedRows",void 0);d([c({type:Number})],a.prototype,"breakpoint",void 0);d([c({type:Array})],a.prototype,"columns",null);d([c({attribute:"min-column-width"})],a.prototype,"minColumnWidth",void 0);d([c({type:Boolean,reflect:!0,attribute:"delayed-resizing"})],a.prototype,"delayedResizing",void 0);d([c({type:Boolean,reflect:!0})],a.prototype,"compact",void 0);d([c({type:Boolean,reflect:!0})],a.prototype,"zebra",void 0);d([c({type:Boolean,reflect:!0,attribute:"zebra-odd"})],a.prototype,"zebraOdd",void 0);d([R('slot[name="body"]')],a.prototype,"_bodySlot",void 0);d([R(".header")],a.prototype,"_headerElement",void 0);d([R(".scrollable")],a.prototype,"_scrollableElement",void 0);d([L(".sash-visible")],a.prototype,"_sashVisibleElements",void 0);d([x({flatten:!0,selector:"vscode-table-header, vscode-table-body"})],a.prototype,"_assignedElements",void 0);d([x({slot:"header",flatten:!0,selector:"vscode-table-header"})],a.prototype,"_assignedHeaderElements",void 0);d([x({slot:"body",flatten:!0,selector:"vscode-table-body"})],a.prototype,"_assignedBodyElements",void 0);d([P()],a.prototype,"_sashPositions",void 0);d([P()],a.prototype,"_isDragging",void 0);a=d([m("vscode-table")],a);const q=[b,v`
    :host {
      background-color: var(--vscode-keybindingTable-headerBackground);
      display: table;
      table-layout: fixed;
      width: 100%;
    }
  `];var $=function(l,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,t,o);else for(var n=l.length-1;n>=0;n--)(r=l[n])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let _=class extends f{constructor(){super(...arguments),this.role="rowgroup"}render(){return h` <slot></slot> `}};_.styles=q;$([c({reflect:!0})],_.prototype,"role",void 0);_=$([m("vscode-table-header")],_);const A=[b,v`
    :host {
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: bold;
      line-height: 20px;
      overflow: hidden;
      padding-bottom: 5px;
      padding-left: 10px;
      padding-right: 0;
      padding-top: 5px;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .wrapper {
      box-sizing: inherit;
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }
  `];var T=function(l,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,t,o);else for(var n=l.length-1;n>=0;n--)(r=l[n])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let g=class extends f{constructor(){super(...arguments),this.role="columnheader"}render(){return h`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};g.styles=A;T([c({reflect:!0})],g.prototype,"role",void 0);g=T([m("vscode-table-header-cell")],g);const N=[b,v`
    :host {
      display: table;
      table-layout: fixed;
      width: 100%;
    }

    ::slotted(vscode-table-row:nth-child(even)) {
      background-color: var(--vsc-row-even-background);
    }

    ::slotted(vscode-table-row:nth-child(odd)) {
      background-color: var(--vsc-row-odd-background);
    }
  `];var B=function(l,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,t,o);else for(var n=l.length-1;n>=0;n--)(r=l[n])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let y=class extends f{constructor(){super(...arguments),this.role="rowgroup"}render(){return h` <slot></slot> `}};y.styles=N;B([c({reflect:!0})],y.prototype,"role",void 0);y=B([m("vscode-table-body")],y);const W=[b,v`
    :host {
      border-top-color: var(--vscode-editorGroup-border);
      border-top-style: solid;
      border-top-width: var(--vsc-row-border-top-width);
      display: var(--vsc-row-display);
      width: 100%;
    }
  `];var D=function(l,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,t,o);else for(var n=l.length-1;n>=0;n--)(r=l[n])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let w=class extends f{constructor(){super(...arguments),this.role="row"}render(){return h` <slot></slot> `}};w.styles=W;D([c({reflect:!0})],w.prototype,"role",void 0);w=D([m("vscode-table-row")],w);const I=[b,v`
    :host {
      border-bottom-color: var(--vscode-editorGroup-border);
      border-bottom-style: solid;
      border-bottom-width: var(--vsc-row-border-bottom-width);
      box-sizing: border-box;
      color: var(--vscode-foreground);
      display: table-cell;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      height: 24px;
      overflow: hidden;
      padding-left: 10px;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;
    }

    :host([compact]) {
      display: block;
      height: auto;
      padding-bottom: 5px;
      width: 100% !important;
    }

    :host([compact]:first-child) {
      padding-top: 10px;
    }

    :host([compact]:last-child) {
      padding-bottom: 10px;
    }

    .wrapper {
      overflow: inherit;
      text-overflow: inherit;
      white-space: inherit;
      width: 100%;
    }

    .column-label {
      font-weight: bold;
    }
  `];var C=function(l,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,t,o);else for(var n=l.length-1;n>=0;n--)(r=l[n])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s};let u=class extends f{constructor(){super(...arguments),this.role="cell",this.columnLabel="",this.compact=!1}render(){const e=this.columnLabel?h`<div class="column-label" role="presentation">
          ${this.columnLabel}
        </div>`:V;return h`
      <div class="wrapper">
        ${e}
        <slot></slot>
      </div>
    `}};u.styles=I;C([c({reflect:!0})],u.prototype,"role",void 0);C([c({attribute:"column-label"})],u.prototype,"columnLabel",void 0);C([c({type:Boolean,reflect:!0})],u.prototype,"compact",void 0);u=C([m("vscode-table-cell")],u);
