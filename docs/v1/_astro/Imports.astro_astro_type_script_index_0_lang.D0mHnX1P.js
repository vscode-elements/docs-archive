import{d as j,i as O,c as V,V as z,x as r,E as m}from"./default.styles.2_Tg-dod.js";import{n as _}from"./property.DhsKp3PU.js";import{r as b}from"./state.DQQ1Z-nc.js";import{a as B}from"./class-map.Cezi6eN_.js";import{o as x}from"./if-defined.BevqSZlK.js";import{s as I}from"./style-property-map.Cg6zaSGE.js";import"./Imports.astro_astro_type_script_index_0_lang.BBrdpZGH.js";import"./Imports.astro_astro_type_script_index_0_lang.D2i34b64.js";import"./helpers.XXwYhvdi.js";const M=[j,O`
    :host {
      --hover-outline-color: transparent;
      --hover-outline-style: solid;
      --hover-outline-width: 0;
      --selected-outline-color: transparent;
      --selected-outline-style: solid;
      --selected-outline-width: 0;

      display: block;
      outline: none;
      user-select: none;
    }

    .wrapper {
      height: 100%;
    }

    li {
      list-style: none;
    }

    ul,
    li {
      margin: 0;
      padding: 0;
    }

    ul {
      position: relative;
    }

    :host([indent-guides]) ul ul:before {
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      bottom: 0;
      left: var(--indent-guide-pos);
      top: 0;
      pointer-events: none;
      width: 1px;
      z-index: 1;
    }

    .contents {
      align-items: center;
      display: flex;
      font-family: var(--vscode-font-family);
      font-size: var(--vscode-font-size);
      font-weight: var(--vscode-font-weight);
      outline-offset: -1px;
      padding-right: 12px;
    }

    .multi .contents {
      align-items: flex-start;
    }

    .contents:hover {
      cursor: pointer;
    }

    .arrow-container {
      align-items: center;
      display: flex;
      height: 22px;
      justify-content: center;
      padding-left: 8px;
      padding-right: 6px;
      width: 16px;
    }

    .icon-arrow {
      color: currentColor;
      display: block;
    }

    .theme-icon {
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
    }

    .image-icon {
      background-repeat: no-repeat;
      background-position: 0 center;
      background-size: 16px;
      display: block;
      flex-shrink: 0;
      margin-right: 6px;
      height: 22px;
      width: 16px;
    }

    .multi .contents .theme-icon {
      margin-top: 3px;
    }

    .text-content {
      display: flex;
      line-height: 22px;
    }

    .single .text-content {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
    }

    .description {
      font-size: 0.9em;
      line-height: 22px;
      margin-left: 0.5em;
      opacity: 0.95;
      white-space: pre;
    }

    .actions {
      display: none;
    }

    .contents.selected > .actions,
    .contents.focused > .actions,
    .contents:hover > .actions {
      display: flex;
    }

    .decorations {
      align-items: center;
      display: flex;
      height: 22px;
      margin-left: 5px;
    }

    .filled-circle {
      margin-right: 3px;
      opacity: 0.4;
    }

    .decoration-text {
      font-size: 90%;
      font-weight: 600;
      margin-right: 3px;
      opacity: 0.75;
    }

    .filled-circle,
    .decoration-text {
      color: var(--color, currentColor);
    }

    .contents:hover .filled-circle,
    .contents:hover .decoration-text {
      color: var(--hover-color, var(--color));
    }

    .contents.focused .filled-circle,
    .contents.focused .decoration-text {
      color: var(--focused-color, var(--color));
    }

    .contents.selected .filled-circle,
    .contents.selected .decoration-text {
      color: var(--selected-color, var(--color));
    }

    /* Theme colors */
    :host(:focus) .wrapper.has-not-focused-item {
      outline: 1px solid var(--vscode-focusBorder);
    }

    :host(:focus) .contents.selected,
    :host(:focus) .contents.focused.selected {
      color: var(--vscode-list-activeSelectionForeground);
      background-color: var(--vscode-list-activeSelectionBackground);
    }

    :host(:focus) .contents.selected .icon-arrow,
    :host(:focus) .contents.selected.focused .icon-arrow,
    :host(:focus) .contents.selected .theme-icon,
    :host(:focus) .contents.selected.focused .theme-icon,
    :host(:focus) .contents.selected .action-icon,
    :host(:focus) .contents.selected.focused .action-icon {
      color: var(--vscode-list-activeSelectionIconForeground);
    }

    :host(:focus) .contents.focused {
      color: var(--vscode-list-focusForeground);
      background-color: var(--vscode-list-focusBackground);
    }

    :host(:focus) .contents.selected.focused {
      outline-color: var(
        --vscode-list-focusAndSelectionOutline,
        var(--vscode-list-focusOutline)
      );
    }

    .contents:hover {
      background-color: var(--vscode-list-hoverBackground);
      color: var(--vscode-list-hoverForeground);
    }

    .contents:hover,
    .contents.selected:hover {
      outline-color: var(--hover-outline-color);
      outline-style: var(--hover-outline-style);
      outline-width: var(--hover-outline-width);
    }

    .contents.selected,
    .contents.selected.focused {
      background-color: var(--vscode-list-inactiveSelectionBackground);
      color: var(--vscode-list-inactiveSelectionForeground);
    }

    .contents.selected,
    .contents.selected.focused {
      outline-color: var(--selected-outline-color);
      outline-style: var(--selected-outline-style);
      outline-width: var(--selected-outline-width);
    }

    .contents.selected .theme-icon {
      color: var(--vscode-list-inactiveSelectionIconForeground);
    }

    .contents.focused {
      background-color: var(--vscode-list-inactiveFocusBackground);
      outline: 1px dotted var(--vscode-list-inactiveFocusOutline);
    }

    :host(:focus) .contents.focused {
      outline: 1px solid var(--vscode-list-focusOutline);
    }

    :host([indent-guides]) ul ul:before {
      background-color: var(--vscode-tree-inactiveIndentGuidesStroke);
    }

    :host([indent-guides]) ul ul.has-active-item:before {
      background-color: var(--vscode-tree-indentGuidesStroke);
    }
  `];var d=function(h,e,t,s){var o=arguments.length,n=o<3?e:s===null?s=Object.getOwnPropertyDescriptor(e,t):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(h,e,t,s);else for(var i=h.length-1;i>=0;i--)(c=h[i])&&(n=(o<3?c(n):o>3?c(e,t,n):c(e,t))||n);return o>3&&n&&Object.defineProperty(e,t,n),n};const G=30,L=16,$=3,P=(h,e=[])=>{const t=[];return h.forEach((s,o)=>{const n=[...e,o],c={...s,path:n};s.subItems&&(c.subItems=P(s.subItems,n)),t.push(c)}),t},g=h=>!!(h.subItems&&Array.isArray(h.subItems)&&h?.subItems?.length>0);let l=class extends z{constructor(){super(...arguments),this.indent=8,this.arrows=!1,this.multiline=!1,this.tabindex=0,this.indentGuides=!1,this._data=[],this._selectedItem=null,this._focusedItem=null,this._selectedBranch=null,this._focusedBranch=null,this._handleComponentKeyDownBound=this._handleComponentKeyDown.bind(this)}set data(e){const t=this._data;this._data=P(e),this.requestUpdate("data",t)}get data(){return this._data}closeAll(){this._closeSubTreeRecursively(this.data),this.requestUpdate()}deselectAll(){this._deselectItemsRecursively(this.data),this.requestUpdate()}getItemByPath(e){return this._getItemByPath(e)}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this._handleComponentKeyDownBound)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this._handleComponentKeyDownBound)}_getItemByPath(e){let t=this._data,s=null;return e.forEach((o,n)=>{n===e.length-1?s=t[o]:t=t[o].subItems}),s}_handleActionClick(e){e.stopPropagation();const t=e.target,s=t.dataset.itemPath,o=t.dataset.index;let n=null,c="",i="";if(s){const f=s.split("/").map(a=>Number(a));if(n=this._getItemByPath(f),n?.actions){const a=Number(o);n.actions[a]&&(c=n.actions[a].actionId)}n?.value&&(i=n.value)}this.dispatchEvent(new CustomEvent("vsc-run-action",{detail:{actionId:c,item:n,value:i}})),this.dispatchEvent(new CustomEvent("vsc-tree-action",{detail:{actionId:c,item:n,value:i}}))}_renderIconVariant(e){const{type:t,value:s}=e;return t==="themeicon"?r`<vscode-icon name=${s} class="theme-icon"></vscode-icon>`:r`<span
        class="image-icon"
        .style=${I({backgroundImage:`url(${s})`})}
      ></span>`}_renderIcon(e){const t={branch:{value:"folder",type:"themeicon"},open:{value:"folder-opened",type:"themeicon"},leaf:{value:"file",type:"themeicon"}};if(e.iconUrls)e.iconUrls.branch&&(t.branch={value:e.iconUrls.branch,type:"image"}),e.iconUrls.leaf&&(t.leaf={value:e.iconUrls.leaf,type:"image"}),e.iconUrls.open&&(t.open={value:e.iconUrls.open,type:"image"});else if(typeof e.icons=="object")e.icons.branch&&(t.branch={value:e.icons.branch,type:"themeicon"}),e.icons.leaf&&(t.leaf={value:e.icons.leaf,type:"themeicon"}),e.icons.open&&(t.open={value:e.icons.open,type:"themeicon"});else if(!e.icons)return r`${m}`;return g(e)?e.open?this._renderIconVariant(t.open):this._renderIconVariant(t.branch):this._renderIconVariant(t.leaf)}_renderArrow(e){if(!this.arrows||!g(e))return r`${m}`;const{open:t=!1}=e;return r`
      <div class="arrow-container">
        <vscode-icon name=${t?"chevron-down":"chevron-right"} class="icon-arrow"></vscode-icon>
      </div>
    `}_renderActions(e){const t=[];return e.actions&&Array.isArray(e.actions)&&e.actions.forEach((s,o)=>{if(s.icon){const n=r`<vscode-icon
            name=${s.icon}
            action-icon
            title=${x(s.tooltip)}
            data-item-path=${x(e.path?.join("/"))}
            data-index=${o}
            class="action-icon"
            @click=${this._handleActionClick}
          ></vscode-icon>`;t.push(n)}}),t.length>0?r`<div class="actions">${t}</div>`:r`${m}`}_renderDecorations(e){const t=[];return e.decorations&&Array.isArray(e.decorations)&&e.decorations.forEach(s=>{const{appearance:o="text",visibleWhen:n="always",content:c="",color:i="",focusedColor:f="",hoverColor:a="",selectedColor:p=""}=s,u=`visible-when-${n}`,v={};switch(i&&(v["--color"]=i),f&&(v["--focused-color"]=f),a&&(v["--hover-color"]=a),p&&(v["--selected-color"]=p),o){case"counter-badge":t.push(r`<vscode-badge
                variant="counter"
                class=${["counter-badge",u].join(" ")}
                part="counter-badge-decoration"
                >${c}</vscode-badge
              >`);break;case"filled-circle":t.push(r`<vscode-icon
                name="circle-filled"
                size="14"
                class=${["filled-circle",u].join(" ")}
                part="filled-circle-decoration"
                .style=${I(v)}
              ></vscode-icon>`);break;case"text":t.push(r`<div
                class=${["decoration-text",u].join(" ")}
                part="caption-decoration"
                .style=${I(v)}
              >
                ${c}
              </div>`);break}}),t.length>0?r`<div class="decorations" part="decorations">
        ${t}
      </div>`:r`${m}`}_renderTreeItem(e,t){const{open:s=!1,label:o,description:n="",tooltip:c,selected:i=!1,focused:f=!1,subItems:a=[]}=e,{path:p,itemType:u,hasFocusedItem:v=!1,hasSelectedItem:E=!1}=t,C=p.length-1,w=["contents"],k=s?["open"]:[],y=C*this.indent,S=this.arrows&&u==="leaf"?G+y:y,A=this._renderArrow(e),T=this._renderIcon(e),F=this.arrows?y+L:y+$,D=s&&u==="branch"?r`<ul
            .style=${I({"--indent-guide-pos":`${F}px`})}
            class=${B({"has-active-item":v||E})}
          >
            ${this._renderTree(a,p)}
          </ul>`:m,N=n?r`<span class="description" part="description">${n}</span>`:m,U=this._renderActions(e),R=this._renderDecorations(e);return k.push(u),i&&w.push("selected"),f&&w.push("focused"),r`
      <li data-path=${p.join("/")} class=${k.join(" ")}>
        <div
          class=${w.join(" ")}
          .style=${I({paddingLeft:`${S+$}px`})}
        >
          ${A}${T}<span
            class="text-content"
            part="text-content"
            title=${x(c)}
            >${o}${N}</span
          >
          ${U} ${R}
        </div>
        ${D}
      </li>
    `}_renderTree(e,t=[]){const s=[];return e?(e.forEach((o,n)=>{const c=[...t,n],i=g(o)?"branch":"leaf",{selected:f=!1,focused:a=!1,hasFocusedItem:p=!1,hasSelectedItem:u=!1}=o;f&&(this._selectedItem=o),a&&(this._focusedItem=o),s.push(this._renderTreeItem(o,{path:c,itemType:i,hasFocusedItem:p,hasSelectedItem:u}))}),s):m}_selectItem(e){this._selectedItem&&(this._selectedItem.selected=!1),this._focusedItem&&(this._focusedItem.focused=!1),this._selectedItem=e,e.selected=!0,this._focusedItem=e,e.focused=!0,this._selectedBranch&&(this._selectedBranch.hasSelectedItem=!1);let t=null;if(e.path?.length&&e.path.length>1&&(t=this._getItemByPath(e.path.slice(0,-1))),g(e))this._selectedBranch=e,e.hasSelectedItem=!0,e.open=!e.open,e.open?(this._selectedBranch=e,e.hasSelectedItem=!0):t&&(this._selectedBranch=t,t.hasSelectedItem=!0);else if(e.path?.length&&e.path.length>1){const s=this._getItemByPath(e.path.slice(0,-1));s&&(this._selectedBranch=s,s.hasSelectedItem=!0)}else this._selectedBranch=e,e.hasSelectedItem=!0;this._emitSelectEvent(this._selectedItem,this._selectedItem.path.join("/")),this.requestUpdate()}_focusItem(e){this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=e,e.focused=!0;const t=!!e?.subItems?.length;this._focusedBranch&&(this._focusedBranch.hasFocusedItem=!1);let s=null;e.path?.length&&e.path.length>1&&(s=this._getItemByPath(e.path.slice(0,-1))),t?e.open?(this._focusedBranch=e,e.hasFocusedItem=!0):!e.open&&s&&(this._focusedBranch=s,s.hasFocusedItem=!0):s&&(this._focusedBranch=s,s.hasFocusedItem=!0)}_closeSubTreeRecursively(e){e.forEach(t=>{t.open=!1,t.subItems&&t.subItems.length>0&&this._closeSubTreeRecursively(t.subItems)})}_deselectItemsRecursively(e){e.forEach(t=>{t.selected&&(t.selected=!1),t.subItems&&t.subItems.length>0&&this._deselectItemsRecursively(t.subItems)})}_emitSelectEvent(e,t){const{icons:s,label:o,open:n,value:c}=e,i={icons:s,itemType:g(e)?"branch":"leaf",label:o,open:n||!1,value:c||o,path:t};this.dispatchEvent(new CustomEvent("vsc-select",{bubbles:!0,composed:!0,detail:i})),this.dispatchEvent(new CustomEvent("vsc-tree-select",{detail:i}))}_focusPrevItem(){if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:e}=this._focusedItem;if(e&&e?.length>0){const t=e[e.length-1],s=e.length>1;if(t>0){const o=[...e];o[o.length-1]=t-1;const n=this._getItemByPath(o);let c=n;if(n?.open&&n.subItems?.length){const{subItems:i}=n;c=i[i.length-1]}this._focusItem(c)}else if(s){const o=[...e];o.pop(),this._focusItem(this._getItemByPath(o))}}else this._focusItem(this._data[0])}_focusNextItem(){if(!this._focusedItem){this._focusItem(this._data[0]);return}const{path:e,open:t}=this._focusedItem;if(t&&Array.isArray(this._focusedItem.subItems)&&this._focusedItem.subItems.length>0){this._focusItem(this._focusedItem.subItems[0]);return}const s=[...e];s[s.length-1]+=1;let o=this._getItemByPath(s);o?this._focusItem(o):(s.pop(),s.length>0&&(s[s.length-1]+=1,o=this._getItemByPath(s),o&&this._focusItem(o)))}_handleClick(e){const s=e.composedPath().find(o=>o.tagName&&o.tagName.toUpperCase()==="LI");if(s){const n=(s.dataset.path||"").split("/").map(i=>Number(i)),c=this._getItemByPath(n);this._selectItem(c)}else this._focusedItem&&(this._focusedItem.focused=!1),this._focusedItem=null}_handleComponentKeyDown(e){const t=[" ","ArrowDown","ArrowUp","Enter","Escape"],s=e.key;t.includes(e.key)&&(e.stopPropagation(),e.preventDefault()),s==="Escape"&&(this._focusedItem=null),s==="ArrowUp"&&this._focusPrevItem(),s==="ArrowDown"&&this._focusNextItem(),(s==="Enter"||s===" ")&&this._focusedItem&&this._selectItem(this._focusedItem)}render(){const e=B({multi:this.multiline,single:!this.multiline,wrapper:!0,"has-not-focused-item":!this._focusedItem,"selection-none":!this._selectedItem,"selection-single":this._selectedItem!==null});return r`
      <div @click=${this._handleClick} class=${e}>
        <ul>
          ${this._renderTree(this._data)}
        </ul>
      </div>
    `}};l.styles=M;d([_({type:Array,reflect:!1})],l.prototype,"data",null);d([_({type:Number})],l.prototype,"indent",void 0);d([_({type:Boolean,reflect:!0})],l.prototype,"arrows",void 0);d([_({type:Boolean,reflect:!0})],l.prototype,"multiline",void 0);d([_({type:Number,reflect:!0})],l.prototype,"tabindex",void 0);d([_({type:Boolean,reflect:!0,attribute:"indent-guides"})],l.prototype,"indentGuides",void 0);d([b()],l.prototype,"_selectedItem",void 0);d([b()],l.prototype,"_focusedItem",void 0);d([b()],l.prototype,"_selectedBranch",void 0);d([b()],l.prototype,"_focusedBranch",void 0);l=d([V("vscode-tree")],l);
