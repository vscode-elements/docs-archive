import"./Imports.astro_astro_type_script_index_0_lang.D2i34b64.js";import{d as v,i as m,c as _,V as x,x as y}from"./default.styles.2_Tg-dod.js";import{n}from"./property.DhsKp3PU.js";import{a as u}from"./class-map.Cezi6eN_.js";import{o as g}from"./query-assigned-elements.DwgmpGB0.js";import{u as w}from"./uniqueId.7Lx2KIwn.js";import"./Imports.astro_astro_type_script_index_0_lang.BBrdpZGH.js";import"./Imports.astro_astro_type_script_index_0_lang.BkFEeZkp.js";import"./if-defined.BevqSZlK.js";import"./style-property-map.Cg6zaSGE.js";import"./base.CShCMygk.js";import"./helpers.XXwYhvdi.js";import"./state.DQQ1Z-nc.js";import"./query.CfX4IL2Y.js";const I=[v,m`
    :host {
      border-bottom: 1px solid transparent;
      cursor: pointer;
      display: block;
      margin-bottom: -1px;
      overflow: hidden;
      padding: 7px 8px;
      text-overflow: ellipsis;
      user-select: none;
      white-space: nowrap;
    }

    :host([active]) {
      border-bottom-color: var(--vscode-panelTitle-activeForeground);
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) {
      border-bottom: 0;
      margin-bottom: 0;
      padding: 0;
    }

    :host(:focus-visible) {
      outline: none;
    }

    .wrapper {
      align-items: center;
      color: var(--vscode-foreground);
      display: flex;
      min-height: 20px;
      overflow: inherit;
      text-overflow: inherit;
      position: relative;
    }

    .wrapper.panel {
      color: var(--vscode-panelTitle-inactiveForeground);
    }

    .wrapper.panel.active,
    .wrapper.panel:hover {
      color: var(--vscode-panelTitle-activeForeground);
    }

    :host([panel]) .wrapper {
      display: flex;
      font-size: 11px;
      height: 31px;
      padding: 2px 10px;
      text-transform: uppercase;
    }

    .main {
      overflow: inherit;
      text-overflow: inherit;
    }

    .active-indicator {
      display: none;
    }

    .active-indicator.panel.active {
      border-top: 1px solid var(--vscode-panelTitle-activeBorder);
      bottom: 4px;
      display: block;
      left: 8px;
      pointer-events: none;
      position: absolute;
      right: 8px;
    }

    :host(:focus-visible) .wrapper {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host(:focus-visible) .wrapper.panel {
      outline-offset: -2px;
    }

    slot[name='content-before']::slotted(vscode-badge) {
      margin-right: 8px;
    }

    slot[name='content-after']::slotted(vscode-badge) {
      margin-left: 8px;
    }
  `];var h=function(r,e,t,s){var a=arguments.length,o=a<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,s);else for(var l=r.length-1;l>=0;l--)(i=r[l])&&(o=(a<3?i(o):a>3?i(e,t,o):i(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o};let d=class extends x{constructor(){super(...arguments),this.active=!1,this.ariaControls="",this.panel=!1,this.role="tab",this.tabId=-1}attributeChangedCallback(e,t,s){if(super.attributeChangedCallback(e,t,s),e==="active"){const a=s!==null;this.ariaSelected=a?"true":"false",this.tabIndex=a?0:-1}}render(){return y`
      <div
        class=${u({wrapper:!0,active:this.active,panel:this.panel})}
      >
        <div class="before"><slot name="content-before"></slot></div>
        <div class="main"><slot></slot></div>
        <div class="after"><slot name="content-after"></slot></div>
        <span
          class=${u({"active-indicator":!0,active:this.active,panel:this.panel})}
        ></span>
      </div>
    `}};d.styles=I;h([n({type:Boolean,reflect:!0})],d.prototype,"active",void 0);h([n({reflect:!0,attribute:"aria-controls"})],d.prototype,"ariaControls",void 0);h([n({type:Boolean,reflect:!0})],d.prototype,"panel",void 0);h([n({reflect:!0})],d.prototype,"role",void 0);h([n({type:Number,reflect:!0,attribute:"tab-id"})],d.prototype,"tabId",void 0);d=h([_("vscode-tab-header")],d);const E=[v,m`
    :host {
      display: block;
      overflow: hidden;
    }

    :host(:focus-visible) {
      outline-color: var(--vscode-focusBorder);
      outline-offset: 3px;
      outline-style: solid;
      outline-width: 1px;
    }

    :host([panel]) {
      background-color: var(--vscode-panel-background);
    }
  `];var f=function(r,e,t,s){var a=arguments.length,o=a<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,s);else for(var l=r.length-1;l>=0;l--)(i=r[l])&&(o=(a<3?i(o):a>3?i(e,t,o):i(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o};let c=class extends x{constructor(){super(...arguments),this.hidden=!1,this.ariaLabelledby="",this.panel=!1,this.role="tabpanel",this.tabIndex=0}render(){return y` <slot></slot> `}};c.styles=E;f([n({type:Boolean,reflect:!0})],c.prototype,"hidden",void 0);f([n({reflect:!0,attribute:"aria-labelledby"})],c.prototype,"ariaLabelledby",void 0);f([n({type:Boolean,reflect:!0})],c.prototype,"panel",void 0);f([n({reflect:!0})],c.prototype,"role",void 0);f([n({type:Number,reflect:!0})],c.prototype,"tabIndex",void 0);c=f([_("vscode-tab-panel")],c);const H=[v,m`
    :host {
      display: block;
    }

    .header {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      width: 100%;
    }

    .header {
      border-bottom-color: var(--vscode-settings-headerBorder);
      border-bottom-style: solid;
      border-bottom-width: 1px;
    }

    .header.panel {
      background-color: var(--vscode-panel-background);
      border-bottom-width: 0;
      box-sizing: border-box;
      padding-left: 8px;
      padding-right: 8px;
    }

    slot[name='addons'] {
      display: block;
      margin-left: auto;
    }
  `];var b=function(r,e,t,s){var a=arguments.length,o=a<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(r,e,t,s);else for(var l=r.length-1;l>=0;l--)(i=r[l])&&(o=(a<3?i(o):a>3?i(e,t,o):i(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o};let p=class extends x{constructor(){super(),this.panel=!1,this.role="tablist",this.selectedIndex=0,this._tabHeaders=[],this._tabPanels=[],this._componentId="",this._tabFocus=0,this._componentId=w()}attributeChangedCallback(e,t,s){super.attributeChangedCallback(e,t,s),e==="selected-index"&&this._setActiveTab(),e==="panel"&&(this._tabHeaders.forEach(a=>a.panel=s!==null),this._tabPanels.forEach(a=>a.panel=s!==null))}_dispatchSelectEvent(){this.dispatchEvent(new CustomEvent("vsc-select",{detail:{selectedIndex:this.selectedIndex},composed:!0})),this.dispatchEvent(new CustomEvent("vsc-tabs-select",{detail:{selectedIndex:this.selectedIndex},composed:!0}))}_setActiveTab(){this._tabFocus=this.selectedIndex,this._tabPanels.forEach((e,t)=>{e.hidden=t!==this.selectedIndex}),this._tabHeaders.forEach((e,t)=>{e.active=t===this.selectedIndex})}_focusPrevTab(){this._tabFocus===0?this._tabFocus=this._tabHeaders.length-1:this._tabFocus-=1}_focusNextTab(){this._tabFocus===this._tabHeaders.length-1?this._tabFocus=0:this._tabFocus+=1}_onHeaderKeyDown(e){(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","-1"),e.key==="ArrowLeft"?this._focusPrevTab():e.key==="ArrowRight"&&this._focusNextTab(),this._tabHeaders[this._tabFocus].setAttribute("tabindex","0"),this._tabHeaders[this._tabFocus].focus()),e.key==="Enter"&&(e.preventDefault(),this.selectedIndex=this._tabFocus,this._dispatchSelectEvent())}_moveHeadersToHeaderSlot(){const e=this._mainSlotElements.filter(t=>t instanceof d);e.length>0&&e.forEach(t=>t.setAttribute("slot","header"))}_onMainSlotChange(){this._moveHeadersToHeaderSlot(),this._tabPanels=this._mainSlotElements.filter(e=>e instanceof c),this._tabPanels.forEach((e,t)=>{e.ariaLabelledby=`t${this._componentId}-h${t}`,e.id=`t${this._componentId}-p${t}`,e.panel=this.panel}),this._setActiveTab()}_onHeaderSlotChange(){this._tabHeaders=this._headerSlotElements.filter(e=>e instanceof d),this._tabHeaders.forEach((e,t)=>{e.tabId=t,e.id=`t${this._componentId}-h${t}`,e.ariaControls=`t${this._componentId}-p${t}`,e.panel=this.panel,e.active=t===this.selectedIndex})}_onHeaderClick(e){const s=e.composedPath().find(a=>a instanceof d);s&&(this.selectedIndex=s.tabId,this._setActiveTab(),this._dispatchSelectEvent())}render(){return y`
      <div
        class=${u({header:!0,panel:this.panel})}
        @click=${this._onHeaderClick}
        @keydown=${this._onHeaderKeyDown}
      >
        <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        <slot name="addons"></slot>
      </div>
      <slot @slotchange=${this._onMainSlotChange}></slot>
    `}};p.styles=H;b([n({type:Boolean,reflect:!0})],p.prototype,"panel",void 0);b([n({reflect:!0})],p.prototype,"role",void 0);b([n({type:Number,reflect:!0,attribute:"selected-index"})],p.prototype,"selectedIndex",void 0);b([g({slot:"header"})],p.prototype,"_headerSlotElements",void 0);b([g()],p.prototype,"_mainSlotElements",void 0);p=b([_("vscode-tabs")],p);
