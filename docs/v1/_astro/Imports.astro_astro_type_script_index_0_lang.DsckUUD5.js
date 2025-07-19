import"./Imports.astro_astro_type_script_index_0_lang.D2i34b64.js";import{d as f,i as b,c as v,V as x,x as a,E as m}from"./default.styles.2_Tg-dod.js";import{n as d}from"./property.DhsKp3PU.js";import{r as _}from"./state.DQQ1Z-nc.js";import{e as y}from"./query.CfX4IL2Y.js";import"./class-map.Cezi6eN_.js";import"./if-defined.BevqSZlK.js";import"./style-property-map.Cg6zaSGE.js";import"./base.CShCMygk.js";const k=[f,b`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      outline: none;
      position: relative;
    }

    .context-menu-item {
      background-color: var(--vscode-menu-background, #1f1f1f);
      color: var(--vscode-menu-foreground, #cccccc);
      display: flex;
      user-select: none;
      white-space: nowrap;
    }

    .ruler {
      border-bottom: 1px solid var(--vscode-menu-separatorBackground, #454545);
      display: block;
      margin: 0 0 4px;
      padding-top: 4px;
      width: 100%;
    }

    .context-menu-item a {
      align-items: center;
      border-color: transparent;
      border-radius: 3px;
      border-style: solid;
      border-width: 1px;
      box-sizing: border-box;
      color: var(--vscode-menu-foreground, #cccccc);
      cursor: pointer;
      display: flex;
      flex: 1 1 auto;
      height: 2em;
      margin-left: 4px;
      margin-right: 4px;
      outline: none;
      position: relative;
      text-decoration: inherit;
    }

    :host([selected]) .context-menu-item a {
      background-color: var(--vscode-menu-selectionBackground, #0078d4);
      border-color: var(--vscode-menu-selectionBorder, transparent);
      color: var(--vscode-menu-selectionForeground, #ffffff);
    }

    .label {
      background: none;
      display: flex;
      flex: 1 1 auto;
      font-size: 12px;
      line-height: 1;
      padding: 0 22px;
      text-decoration: none;
    }

    .keybinding {
      display: block;
      flex: 2 1 auto;
      line-height: 1;
      padding: 0 22px;
      text-align: right;
    }
  `];var u=function(c,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(c,e,t,n);else for(var r=c.length-1;r>=0;r--)(i=c[r])&&(o=(s<3?i(o):s>3?i(e,t,o):i(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let p=class extends x{constructor(){super(...arguments),this.label="",this.keybinding="",this.value="",this.separator=!1,this.tabindex=0}onItemClick(){this.dispatchEvent(new CustomEvent("vsc-click",{detail:{label:this.label,keybinding:this.keybinding,value:this.value||this.label,separator:this.separator,tabindex:this.tabindex},bubbles:!0,composed:!0}))}render(){return a`
      ${this.separator?a`
            <div class="context-menu-item separator">
              <span class="ruler"></span>
            </div>
          `:a`
            <div class="context-menu-item">
              <a @click=${this.onItemClick}>
                ${this.label?a`<span class="label">${this.label}</span>`:m}
                ${this.keybinding?a`<span class="keybinding">${this.keybinding}</span>`:m}
              </a>
            </div>
          `}
    `}};p.styles=k;u([d({type:String})],p.prototype,"label",void 0);u([d({type:String})],p.prototype,"keybinding",void 0);u([d({type:String})],p.prototype,"value",void 0);u([d({type:Boolean,reflect:!0})],p.prototype,"separator",void 0);u([d({type:Number})],p.prototype,"tabindex",void 0);p=u([v("vscode-context-menu-item")],p);const I=[f,b`
    :host {
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: var(--vscode-font-weight, normal);
      line-height: 1.4em;
      position: relative;
    }

    .context-menu {
      background-color: var(--vscode-menu-background, #1f1f1f);
      border-color: var(--vscode-menu-border, #454545);
      border-radius: 5px;
      border-style: solid;
      border-width: 1px;
      box-shadow: 0 2px 8px var(--vscode-widget-shadow, rgba(0, 0, 0, 0.36));
      color: var(--vscode-menu-foreground, #cccccc);
      padding: 4px 0;
      white-space: nowrap;
    }

    .context-menu:focus {
      outline: 0;
    }
  `];var h=function(c,e,t,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(c,e,t,n);else for(var r=c.length-1;r>=0;r--)(i=c[r])&&(o=(s<3?i(o):s>3?i(e,t,o):i(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o};let l=class extends x{set data(e){this._data=e;const t=[];e.forEach((n,s)=>{n.separator||t.push(s)}),this._clickableItemIndexes=t}get data(){return this._data}set show(e){this._show=e,this._selectedClickableItemIndex=-1,e&&this.updateComplete.then(()=>{this._wrapperEl&&this._wrapperEl.focus(),requestAnimationFrame(()=>{document.addEventListener("click",this._onClickOutsideBound,{once:!0})})})}get show(){return this._show}constructor(){super(),this.preventClose=!1,this.tabIndex=0,this._selectedClickableItemIndex=-1,this._show=!1,this._data=[],this._clickableItemIndexes=[],this._onClickOutsideBound=this._onClickOutside.bind(this),this.addEventListener("keydown",this._onKeyDown)}_onClickOutside(e){e.composedPath().includes(this)||(this.show=!1)}_onKeyDown(e){const{key:t}=e;switch((t==="ArrowUp"||t==="ArrowDown"||t==="Escape"||t==="Enter")&&e.preventDefault(),t){case"ArrowUp":this._handleArrowUp();break;case"ArrowDown":this._handleArrowDown();break;case"Escape":this._handleEscape();break;case"Enter":this._handleEnter();break}}_handleArrowUp(){this._selectedClickableItemIndex===0?this._selectedClickableItemIndex=this._clickableItemIndexes.length-1:this._selectedClickableItemIndex-=1}_handleArrowDown(){this._selectedClickableItemIndex+1<this._clickableItemIndexes.length?this._selectedClickableItemIndex+=1:this._selectedClickableItemIndex=0}_handleEscape(){this.show=!1,document.removeEventListener("click",this._onClickOutsideBound)}_dispatchSelectEvent(e){const{keybinding:t,label:n,value:s,separator:o,tabindex:i}=e;this.dispatchEvent(new CustomEvent("vsc-context-menu-select",{detail:{keybinding:t,label:n,separator:o,tabindex:i,value:s}}))}_dispatchLegacySelectEvent(e){const{keybinding:t,label:n,value:s,separator:o,tabindex:i}=e,r={keybinding:t,label:n,value:s,separator:o,tabindex:i};this.dispatchEvent(new CustomEvent("vsc-select",{detail:r,bubbles:!0,composed:!0}))}_handleEnter(){if(this._selectedClickableItemIndex===-1)return;const e=this._clickableItemIndexes[this._selectedClickableItemIndex],n=this._wrapperEl.querySelectorAll("vscode-context-menu-item")[e];this._dispatchLegacySelectEvent(n),this._dispatchSelectEvent(n),this.preventClose||(this.show=!1,document.removeEventListener("click",this._onClickOutsideBound))}_onItemClick(e){const t=e.currentTarget;this._dispatchLegacySelectEvent(t),this._dispatchSelectEvent(t),this.preventClose||(this.show=!1)}_onItemMouseOver(e){const t=e.target,n=t.dataset.index?+t.dataset.index:-1,s=this._clickableItemIndexes.findIndex(o=>o===n);s!==-1&&(this._selectedClickableItemIndex=s)}_onItemMouseOut(){this._selectedClickableItemIndex=-1}render(){if(!this._show)return a`${m}`;const e=this._clickableItemIndexes[this._selectedClickableItemIndex];return a`
      <div class="context-menu" tabindex="0">
        ${this.data?this.data.map(({label:t="",keybinding:n="",value:s="",separator:o=!1,tabindex:i=0},r)=>a`
                <vscode-context-menu-item
                  label=${t}
                  keybinding=${n}
                  value=${s}
                  ?separator=${o}
                  ?selected=${r===e}
                  tabindex=${i}
                  @vsc-click=${this._onItemClick}
                  @mouseover=${this._onItemMouseOver}
                  @mouseout=${this._onItemMouseOut}
                  data-index=${r}
                ></vscode-context-menu-item>
              `):a`<slot></slot>`}
      </div>
    `}};l.styles=I;h([d({type:Array,attribute:!1})],l.prototype,"data",null);h([d({type:Boolean,reflect:!0,attribute:"prevent-close"})],l.prototype,"preventClose",void 0);h([d({type:Boolean,reflect:!0})],l.prototype,"show",null);h([d({type:Number,reflect:!0})],l.prototype,"tabIndex",void 0);h([_()],l.prototype,"_selectedClickableItemIndex",void 0);h([_()],l.prototype,"_show",void 0);h([y(".context-menu")],l.prototype,"_wrapperEl",void 0);l=h([v("vscode-context-menu")],l);
