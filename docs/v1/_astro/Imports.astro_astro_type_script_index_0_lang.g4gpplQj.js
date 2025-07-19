import{r as v,d as f,i as b,c as y,V as g,x as u,E as h}from"./default.styles.2_Tg-dod.js";import{n as r}from"./property.DhsKp3PU.js";import{a as m}from"./class-map.Cezi6eN_.js";import"./Imports.astro_astro_type_script_index_0_lang.D2i34b64.js";import{g as k}from"./helpers.XXwYhvdi.js";import{o as p}from"./if-defined.BevqSZlK.js";import"./style-property-map.Cg6zaSGE.js";const x=v(k()),_=[f,b`
    :host {
      background-color: var(--vscode-button-background, #0078d4);
      border-color: var(--vscode-button-border, transparent);
      border-style: solid;
      border-radius: 2px;
      border-width: 1px;
      color: var(--vscode-button-foreground, #ffffff);
      cursor: pointer;
      display: inline-flex;
      font-family: var(--vscode-font-family, ${x});
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 22px;
      overflow: hidden;
      padding: 0;
      user-select: none;
      white-space: nowrap;
    }

    :host([secondary]) {
      color: var(--vscode-button-secondaryForeground, #cccccc);
      background-color: var(--vscode-button-secondaryBackground, #313131);
      border-color: var(
        --vscode-button-border,
        var(--vscode-button-secondaryBackground, rgba(255, 255, 255, 0.07))
      );
    }

    :host([disabled]) {
      cursor: default;
      opacity: 0.4;
      pointer-events: none;
    }

    :host(:hover) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([disabled]:hover) {
      background-color: var(--vscode-button-background, #0078d4);
    }

    :host([secondary]:hover) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:hover) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host(:focus),
    :host(:active) {
      outline: none;
    }

    :host(:focus) {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
      outline: 1px solid var(--vscode-focusBorder, #0078d4);
      outline-offset: 2px;
    }

    :host([disabled]:focus) {
      background-color: var(--vscode-button-background, #0078d4);
      outline: 0;
    }

    :host([secondary]:focus) {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    :host([secondary][disabled]:focus) {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    ::slotted(*) {
      display: inline-block;
      margin-left: 4px;
      margin-right: 4px;
    }

    ::slotted(*:first-child) {
      margin-left: 0;
    }

    ::slotted(*:last-child) {
      margin-right: 0;
    }

    ::slotted(vscode-icon) {
      color: inherit;
    }

    .wrapper {
      align-items: center;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      position: relative;
      width: var(--wrapper-width, 100%);
      height: 100%;
      padding: 1px 13px;
    }

    :host(:empty) .wrapper,
    :host([icon-only]) .wrapper {
      min-height: 24px;
      min-width: 16px;
      padding: 1px 5px;
    }

    slot {
      align-items: center;
      display: flex;
      height: 100%;
    }

    .icon,
    .icon-after {
      color: inherit;
      display: block;
    }

    :host(:not(:empty)) .icon {
      margin-right: 3px;
    }

    :host(:not(:empty)) .icon-after,
    :host([icon]) .icon-after {
      margin-left: 3px;
    }

    .divider {
      display: var(--divider-display, none);
      background-color: transparent;
      padding: 4px 0;
      box-sizing: border-box;
    }

    :host(:hover) .divider,
    :host(:focus) .divider {
      background-color: var(--vscode-button-hoverBackground, #026ec1);
    }

    :host([secondary]) .divider {
      background-color: var(--vscode-button-secondaryBackground, #313131);
    }

    :host([secondary]:hover) .divider,
    :host([secondary]:focus) .divider {
      background-color: var(--vscode-button-secondaryHoverBackground, #3c3c3c);
    }

    .divider > div {
      background-color: var(
        --vscode-button-separator,
        rgba(255, 255, 255, 0.4)
      );
      height: 100%;
      width: 1px;
      margin: 0;
    }

    :host([secondary]) .divider > div {
      background-color: var(--vscode-button-secondaryForeground, #cccccc);
      opacity: 0.4;
    }
  `];var o=function(a,e,i,s){var c=arguments.length,n=c<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,i):s,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,i,s);else for(var l=a.length-1;l>=0;l--)(d=a[l])&&(n=(c<3?d(n):c>3?d(e,i,n):d(e,i))||n);return c>3&&n&&Object.defineProperty(e,i,n),n};let t=class extends g{get form(){return this._internals.form}constructor(){super(),this.autofocus=!1,this.tabIndex=0,this.secondary=!1,this.role="button",this.disabled=!1,this.icon="",this.iconSpin=!1,this.iconAfter="",this.iconAfterSpin=!1,this.focused=!1,this.name=void 0,this.iconOnly=!1,this.type="button",this.value="",this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1},this.addEventListener("keydown",this._handleKeyDown.bind(this)),this.addEventListener("click",this._handleClick.bind(this)),this._internals=this.attachInternals()}connectedCallback(){super.connectedCallback(),this.autofocus&&(this.tabIndex<0&&(this.tabIndex=0),this.updateComplete.then(()=>{this.focus(),this.requestUpdate()})),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}update(e){super.update(e),e.has("value")&&this._internals.setFormValue(this.value),e.has("disabled")&&(this.disabled?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):this.tabIndex=this._prevTabindex)}_executeAction(){this.type==="submit"&&this._internals.form&&this._internals.form.requestSubmit(),this.type==="reset"&&this._internals.form&&this._internals.form.reset()}_handleKeyDown(e){if((e.key==="Enter"||e.key===" ")&&!this.hasAttribute("disabled")){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:new MouseEvent("click")}}));const i=new MouseEvent("click",{bubbles:!0,cancelable:!0});i.synthetic=!0,this.dispatchEvent(i),this._executeAction()}}_handleClick(e){e.synthetic||this.hasAttribute("disabled")||(this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}})),this._executeAction())}render(){const e=this.icon!=="",i=this.iconAfter!=="",s={wrapper:!0,"has-icon-before":e,"has-icon-after":i,"icon-only":this.iconOnly},c=e?u`<vscode-icon
          name=${this.icon}
          ?spin=${this.iconSpin}
          spin-duration=${p(this.iconSpinDuration)}
          class="icon"
        ></vscode-icon>`:h,n=i?u`<vscode-icon
          name=${this.iconAfter}
          ?spin=${this.iconAfterSpin}
          spin-duration=${p(this.iconAfterSpinDuration)}
          class="icon-after"
        ></vscode-icon>`:h;return u`
      <span class=${m(s)}>
        ${c}
        <slot></slot>
        ${n}
      </span>
      <div class="divider"><div></div></div>
    `}};t.styles=_;t.formAssociated=!0;o([r({type:Boolean,reflect:!0})],t.prototype,"autofocus",void 0);o([r({type:Number,reflect:!0})],t.prototype,"tabIndex",void 0);o([r({type:Boolean,reflect:!0})],t.prototype,"secondary",void 0);o([r({reflect:!0})],t.prototype,"role",void 0);o([r({type:Boolean,reflect:!0})],t.prototype,"disabled",void 0);o([r()],t.prototype,"icon",void 0);o([r({type:Boolean,reflect:!0,attribute:"icon-spin"})],t.prototype,"iconSpin",void 0);o([r({type:Number,reflect:!0,attribute:"icon-spin-duration"})],t.prototype,"iconSpinDuration",void 0);o([r({attribute:"icon-after"})],t.prototype,"iconAfter",void 0);o([r({type:Boolean,reflect:!0,attribute:"icon-after-spin"})],t.prototype,"iconAfterSpin",void 0);o([r({type:Number,reflect:!0,attribute:"icon-after-spin-duration"})],t.prototype,"iconAfterSpinDuration",void 0);o([r({type:Boolean,reflect:!0})],t.prototype,"focused",void 0);o([r({type:String,reflect:!0})],t.prototype,"name",void 0);o([r({type:Boolean,reflect:!0,attribute:"icon-only"})],t.prototype,"iconOnly",void 0);o([r({reflect:!0})],t.prototype,"type",void 0);o([r()],t.prototype,"value",void 0);t=o([y("vscode-button")],t);
