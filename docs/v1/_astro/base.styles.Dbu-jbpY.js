import{n as c}from"./property.DhsKp3PU.js";import{V as d,x as a,E as h,i as p}from"./default.styles.2_Tg-dod.js";var b=function(n,e,i,o){var s=arguments.length,t=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,o);else for(var r=n.length-1;r>=0;r--)(l=n[r])&&(t=(s<3?l(t):s>3?l(e,i,t):l(e,i))||t);return s>3&&t&&Object.defineProperty(e,i,t),t};class u extends d{constructor(){super(),this.focused=!1,this._prevTabindex=0,this._handleFocus=()=>{this.focused=!0},this._handleBlur=()=>{this.focused=!1}}connectedCallback(){super.connectedCallback(),this.addEventListener("focus",this._handleFocus),this.addEventListener("blur",this._handleBlur)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focus",this._handleFocus),this.removeEventListener("blur",this._handleBlur)}attributeChangedCallback(e,i,o){super.attributeChangedCallback(e,i,o),e==="disabled"&&this.hasAttribute("disabled")?(this._prevTabindex=this.tabIndex,this.tabIndex=-1):e==="disabled"&&!this.hasAttribute("disabled")&&(this.tabIndex=this._prevTabindex)}}b([c({type:Boolean,reflect:!0})],u.prototype,"focused",void 0);var f=function(n,e,i,o){var s=arguments.length,t=s<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,i):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(n,e,i,o);else for(var r=n.length-1;r>=0;r--)(l=n[r])&&(t=(s<3?l(t):s>3?l(e,i,t):l(e,i))||t);return s>3&&t&&Object.defineProperty(e,i,t),t};const g=n=>{class e extends n{constructor(){super(...arguments),this._label="",this._slottedText=""}set label(o){this._label=o,this._slottedText===""&&this.setAttribute("aria-label",o)}get label(){return this._label}_handleSlotChange(){this._slottedText=this.textContent?this.textContent.trim():"",this._slottedText!==""&&this.setAttribute("aria-label",this._slottedText)}_renderLabelAttribute(){return this._slottedText===""?a`<span class="label-attr">${this._label}</span>`:a`${h}`}}return f([c()],e.prototype,"label",null),e},_=[p`
    :host {
      color: var(--vscode-foreground, #cccccc);
      display: inline-block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 18px;
    }

    :host(:focus) {
      outline: none;
    }

    :host([disabled]) {
      opacity: 0.4;
    }

    .wrapper {
      cursor: pointer;
      display: block;
      font-size: var(--vscode-font-size, 13px);
      margin-bottom: 4px;
      margin-top: 4px;
      min-height: 18px;
      position: relative;
      user-select: none;
    }

    :host([disabled]) .wrapper {
      cursor: default;
    }

    input {
      position: absolute;
      height: 1px;
      left: 9px;
      margin: 0;
      top: 17px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap;
    }

    .icon {
      align-items: center;
      background-color: var(--vscode-settings-checkboxBackground, #313131);
      background-size: 16px;
      border: 1px solid var(--vscode-settings-checkboxBorder, #3c3c3c);
      box-sizing: border-box;
      color: var(--vscode-settings-checkboxForeground, #cccccc);
      display: flex;
      height: 18px;
      justify-content: center;
      left: 0;
      margin-left: 0;
      margin-right: 9px;
      padding: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 18px;
    }

    .icon.before-empty-label {
      margin-right: 0;
    }

    .label {
      cursor: pointer;
      display: block;
      min-height: 18px;
      min-width: 18px;
    }

    .label-inner {
      display: block;
      opacity: 0.9;
      padding-left: 27px;
    }

    .label-inner.empty {
      padding-left: 0;
    }

    :host([disabled]) .label {
      cursor: default;
    }
  `];export{u as F,g as L,_ as b};
