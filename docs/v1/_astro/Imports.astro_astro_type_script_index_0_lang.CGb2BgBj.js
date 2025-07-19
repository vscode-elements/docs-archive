import"./Imports.astro_astro_type_script_index_0_lang.D2i34b64.js";import"./Imports.astro_astro_type_script_index_0_lang.BBrdpZGH.js";import"./Imports.astro_astro_type_script_index_0_lang.BkFEeZkp.js";import"./Imports.astro_astro_type_script_index_0_lang.D0mHnX1P.js";import"./Imports.astro_astro_type_script_index_0_lang.B6IUyqnD.js";import"./styles.jy5xlxt8.js";import{d as h,i as f,c as v,V as m,x as d,E as g}from"./default.styles.2_Tg-dod.js";import{n as p}from"./property.DhsKp3PU.js";import{a as u}from"./class-map.Cezi6eN_.js";import"./if-defined.BevqSZlK.js";import"./style-property-map.Cg6zaSGE.js";import"./helpers.XXwYhvdi.js";import"./state.DQQ1Z-nc.js";import"./query.CfX4IL2Y.js";import"./base.CShCMygk.js";import"./query-assigned-elements.DwgmpGB0.js";import"./Imports.astro_astro_type_script_index_0_lang.g4gpplQj.js";const b=[h,f`
    .collapsible {
      background-color: var(--vscode-sideBar-background, #181818);
    }

    .collapsible-header {
      align-items: center;
      background-color: var(--vscode-sideBarSectionHeader-background, #181818);
      cursor: pointer;
      display: flex;
      height: 22px;
      line-height: 22px;
      user-select: none;
    }

    .collapsible-header:focus {
      opacity: 1;
      outline-offset: -1px;
      outline-style: solid;
      outline-width: 1px;
      outline-color: var(--vscode-focusBorder, #0078d4);
    }

    .title {
      color: var(--vscode-sideBarTitle-foreground, #cccccc);
      display: block;
      font-family: var(--vscode-font-family, sans-serif);
      font-size: 11px;
      font-weight: 700;
      margin: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .title .description {
      font-weight: 400;
      margin-left: 10px;
      text-transform: none;
      opacity: 0.6;
    }

    .header-icon {
      color: var(--vscode-icon-foreground, #cccccc);
      display: block;
      flex-shrink: 0;
      margin: 0 3px;
    }

    .collapsible.open .header-icon {
      transform: rotate(90deg);
    }

    .header-slots {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: auto;
      margin-right: 4px;
    }

    .actions {
      display: none;
    }

    .collapsible.open .actions {
      display: block;
    }

    .header-slots slot {
      display: flex;
      max-height: 22px;
      overflow: hidden;
    }

    .header-slots slot::slotted(div) {
      align-items: center;
      display: flex;
    }

    .collapsible-body {
      display: none;
      overflow: hidden;
    }

    .collapsible.open .collapsible-body {
      display: block;
    }
  `];var c=function(s,e,t,i){var n=arguments.length,o=n<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,i);else for(var a=s.length-1;a>=0;a--)(r=s[a])&&(o=(n<3?r(o):n>3?r(e,t,o):r(e,t))||o);return n>3&&o&&Object.defineProperty(e,t,o),o};let l=class extends m{constructor(){super(...arguments),this.title="",this.description="",this.open=!1}_emitToggleEvent(){this.dispatchEvent(new CustomEvent("vsc-collapsible-toggle",{detail:{open:this.open}}))}_onHeaderClick(){this.open=!this.open,this._emitToggleEvent()}_onHeaderKeyDown(e){e.key==="Enter"&&(this.open=!this.open,this._emitToggleEvent())}render(){const e=u({collapsible:!0,open:this.open}),t=d`<svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      class="header-icon"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.072 8.024L5.715 3.667l.618-.62L11 7.716v.618L6.333 13l-.618-.619 4.357-4.357z"
      />
    </svg>`,i=this.description?d`<span class="description">${this.description}</span>`:g;return d`
      <div class=${e}>
        <div
          class="collapsible-header"
          tabindex="0"
          title=${this.title}
          @click=${this._onHeaderClick}
          @keydown=${this._onHeaderKeyDown}
        >
          ${t}
          <h3 class="title">${this.title}${i}</h3>
          <div class="header-slots">
            <div class="actions"><slot name="actions"></slot></div>
            <div class="decorations"><slot name="decorations"></slot></div>
          </div>
        </div>
        <div class="collapsible-body" part="body">
          <slot></slot>
        </div>
      </div>
    `}};l.styles=b;c([p({type:String})],l.prototype,"title",void 0);c([p()],l.prototype,"description",void 0);c([p({type:Boolean,reflect:!0})],l.prototype,"open",void 0);l=c([v("vscode-collapsible")],l);
