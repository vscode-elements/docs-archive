import{_ as i}from"./preload-helper.C5jaakcI.js";const v=String.raw;function E(n=""){const e=v`
    html {
      scrollbar-color: var(--vscode-scrollbarSlider-background)
        var(--vscode-editor-background);
    }

    body {
      overscroll-behavior-x: none;
      background-color: var(--playground-body-background);
      color: var(--vscode-editor-foreground);
      font-family: var(--vscode-font-family);
      font-weight: var(--vscode-font-weight);
      font-size: var(--vscode-font-size);
      margin: 0;
      padding: 0 20px;
    }
  `;return v`
    ${n?"":e}

    ${n}img,
    ${n}video {
      max-width: 100%;
      max-height: 100%;
    }

    ${n}a,
    ${n}a code {
      color: var(--vscode-textLink-foreground);
    }

    ${n}p > a {
      text-decoration: var(--text-link-decoration);
    }

    ${n}a:hover {
      color: var(--vscode-textLink-activeForeground);
    }

    ${n}a:focus,
    input:focus,
    select:focus,
    textarea:focus {
      outline: 1px solid -webkit-focus-ring-color;
      outline-offset: -1px;
    }

    ${n}code {
      font-family: var(--monaco-monospace-font);
      color: var(--vscode-textPreformat-foreground);
      background-color: var(--vscode-textPreformat-background);
      padding: 1px 3px;
      border-radius: 4px;
    }

    ${n}pre code {
      padding: 0;
    }

    ${n}blockquote {
      background: var(--vscode-textBlockQuote-background);
      border-color: var(--vscode-textBlockQuote-border);
    }

    ${n}kbd {
      background-color: var(--vscode-keybindingLabel-background);
      color: var(--vscode-keybindingLabel-foreground);
      border-style: solid;
      border-width: 1px;
      border-radius: 3px;
      border-color: var(--vscode-keybindingLabel-border);
      border-bottom-color: var(--vscode-keybindingLabel-bottomBorder);
      box-shadow: inset 0 -1px 0 var(--vscode-widget-shadow);
      vertical-align: middle;
      padding: 1px 3px;
    }

    ${n}::-webkit-scrollbar {
      width: 10px;
      height: 10px;
    }

    ${n}::-webkit-scrollbar-corner {
      background-color: var(--vscode-editor-background);
    }

    ${n}::-webkit-scrollbar-thumb {
      background-color: var(--vscode-scrollbarSlider-background);
    }
    ${n}::-webkit-scrollbar-thumb:hover {
      background-color: var(--vscode-scrollbarSlider-hoverBackground);
    }
    ${n}::-webkit-scrollbar-thumb:active {
      background-color: var(--vscode-scrollbarSlider-activeBackground);
    }
    ${n}::highlight(find-highlight) {
      background-color: var(--vscode-editor-findMatchHighlightBackground);
    }
    ${n}::highlight(current-find-highlight) {
      background-color: var(--vscode-editor-findMatchBackground);
    }
  `}const O=String.raw,B=String.raw,m="_vscodeDemoStyles",S=new CSSStyleSheet;S.replaceSync(B`
  :host {
    all: initial;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
    display: block;
    margin: 32px 0;
  }

  :host([fullscreen]) {
    bottom: 0;
    left: 0;
    margin: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1000;
  }

  .canvas {
    all: initial;
    background-color: var(--playground-body-background);
    color: var(--vscode-foreground);
    display: block;
    font-family: var(--vscode-font-family);
    font-size: var(--vscode-font-size);
    font-weight: var(--vscode-font-weight);
    padding: 20px;
  }

  :host([fullscreen]) .canvas {
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 35px;
  }

  .header-wrapper {
    position: relative;
  }

  .header {
    align-items: center;
    background-color: var(--playground-body-background);
    box-sizing: border-box;
    color: var(--vscode-editor-foreground);
    display: flex;
    font-family: var(--vscode-font-family, sans-serif);
    font-size: 13px;
    flex-wrap: wrap;
    height: 35px;
    padding: 0 10px;
    position: relative;
    width: 100%;
  }

  .menu-wrapper {
    position: relative;
  }

  .toggle-menu-button {
    background-color: transparent;
    border: 0;
    border-radius: 5px;
    box-sizing: content-box;
    color: var(--vscode-editor-foreground);
    cursor: pointer;
    display: block;
    height: 16px;
    margin: 0 0 0 2px;
    padding: 3px;
    width: 16px;
  }

  .toggle-menu-button:focus {
    outline: 1px solid var(--vscode-focusBorder);
  }

  .toggle-menu-button:hover {
    background-color: var(--vscode-toolbar-hoverBackground);
  }

  .toggle-menu-button.active {
    background-color: var(--vscode-toolbar-activeBackground);
  }

  .toggle-menu-button svg {
    display: block;
    height: 16px;
    width: 16px;
  }

  .menu {
    background-color: #fff;
    border: 1px solid #cdcdcd;
    border-radius: 3px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
    color: #000;
    display: none;
    left: 1px;
    padding: 10px;
    position: absolute;
    top: 24px;
    z-index: 100;
  }

  .menu.open {
    display: block;
  }

  fieldset {
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    margin-top: 5px;
    padding: 10px;
  }

  .row {
    align-items: center;
    display: flex;
    margin: 0 0 10px 0;
  }

  .row:last-child {
    margin-bottom: 0;
  }

  .header .toggle-fullscreen-button {
    align-items: center;
    background-color: transparent;
    border: 0;
    border-radius: 5px;
    color: var(--vscode-editor-foreground);
    cursor: pointer;
    display: flex;
    justify-content: center;
    margin-left: auto;
    padding: 5px;
  }

  .header .toggle-fullscreen-button .normal {
    display: none;
  }

  :host([fullscreen]) .toggle-fullscreen-button .normal {
    display: block;
  }

  :host([fullscreen]) .toggle-fullscreen-button .full {
    display: none;
  }

  .header .toggle-fullscreen-button:focus {
    outline: none;
  }

  .header .toggle-fullscreen-button:focus {
    outline: 1px solid var(--vscode-focusBorder);
  }
`);function _(){return O`
    <div class="header-wrapper">
      <div id="header" class="header" part="header">
        <vscode-theme-selector></vscode-theme-selector>
        <div class="menu-wrapper">
          <button
            type="button"
            class="toggle-menu-button"
            id="toggle-menu"
            title="Open menu"
            part="toggle-menu"
          >
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.444 13.832a1 1 0 1 0 1.111-1.663 1 1 0 0 0-1.11 1.662zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
              />
            </svg>
          </button>
          <div id="menu" class="menu" part="menu">
            <vscode-view-container-selector></vscode-view-container-selector>
            <fieldset>
              <legend>User preferences</legend>
              <div class="row">
                <vscode-toggle-underline></vscode-toggle-underline>
              </div>
              <div class="row">
                <vscode-toggle-motion></vscode-toggle-motion>
              </div>
            </fieldset>
          </div>
        </div>
        <button
          type="button"
          class="toggle-fullscreen-button"
          id="toggle-fullscreen"
          title="toggle fullscreen"
          part="toggle-fullscreen"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="full"
          >
            <path
              d="M3 12h10V4H3v8zm2-6h6v4H5V6zM2 6H1V2.5l.5-.5H5v1H2v3zm13-3.5V6h-1V3h-3V2h3.5l.5.5zM14 10h1v3.5l-.5.5H11v-1h3v-3zM2 13h3v1H1.5l-.5-.5V10h1v3z"
            />
          </svg>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="normal"
          >
            <path
              d="M3.5 4H1V3h2V1h1v2.5l-.5.5zM13 3V1h-1v2.5l.5.5H15V3h-2zm-1 9.5V15h1v-2h2v-1h-2.5l-.5.5zM1 12v1h2v2h1v-2.5l-.5-.5H1zm11-1.5l-.5.5h-7l-.5-.5v-5l.5-.5h7l.5.5v5zM10 7H6v2h4V7z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="canvas" part="canvas">
      <slot></slot>
    </div>
  `}class h extends HTMLElement{static template;#e=null;#t=null;#o=null;#n=null;constructor(){super(),h.template||(h.template=document.createElement("template"),h.template.innerHTML=_());let e=this.attachShadow({mode:"open"});e.adoptedStyleSheets.push(S),e.appendChild(h.template.content.cloneNode(!0)),this.#e=e.querySelector("#header"),this.#t=e.querySelector(".menu"),this.#o=this.#e?.querySelector("#toggle-fullscreen")??null,this.#n=e.querySelector("#toggle-menu"),this.dataset.vscodeDemo=""}connectedCallback(){this.#o?.addEventListener("click",this.#i),this.#n?.addEventListener("click",this.#l),this.#s()}disconnectedCallback(){this.#o?.removeEventListener("click",this.#i),this.#n?.removeEventListener("click",this.#l)}#s(){if(!document.getElementById(m)){const e=document.createElement("style");e.setAttribute("id",m),e.innerHTML=E("vscode-demo[data-vscode-demo] "),window?.vscodeWebviewPlaygroundNonce&&e.setAttribute("nonce",window.vscodeWebviewPlaygroundNonce),document.head.appendChild(e)}}#i=()=>{this.hasAttribute("fullscreen")?this.removeAttribute("fullscreen"):this.setAttribute("fullscreen","")};#l=e=>{e.stopPropagation(),this.#t?.classList.contains("open")?(this.#t?.classList.toggle("open",!1),this.#n?.classList.toggle("active",!1),window.removeEventListener("click",this.#a)):(this.#t?.classList.toggle("open",!0),this.#n?.classList.toggle("active",!0),window.addEventListener("click",this.#a))};#a=e=>{if(e.target){const t=e.composedPath(),s=!!t.find(p=>p===this.#t),u=!!t.find(p=>p===this.#n);(!s||u)&&(e.stopPropagation(),this.#t?.classList.toggle("open",!1),this.#n?.classList.toggle("active",!1),window.removeEventListener("click",this.#a))}}}const H=String.raw,R=String.raw,b="_defaultStyles",c="hidden",f="vscode-playground:dev-toolbar-hidden",L=new CSSStyleSheet;L.replaceSync(R`
  :host {
    bottom: 30px;
    font-family: sans-serif;
    font-size: 14px;
    position: fixed;
    right: 30px;
    z-index: 1000;
  }

  .ui {
    display: block;
  }

  .ui.hidden {
    display: none;
  }

  label {
    user-select: none;
  }

  .open-toolbar-button {
    background-color: #fff;
    border: 1px solid #cdcdcd;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    height: 42px;
    padding: 4px;
    width: 42px;
  }

  .open-toolbar-button.open {
    display: none;
  }

  .open-toolbar-button svg {
    display: block;
    height: 100%;
    width: 100%;
  }

  .close-toolbar-button {
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    display: block;
    padding: 4px;
    position: absolute;
    right: 3px;
    top: 3px;
  }

  .close-toolbar-button svg {
    display: block;
    height: 16px;
    width: 16px;
  }

  .panel {
    background-color: #fff;
    border: 1px solid #cdcdcd;
    border-radius: 12px;
    color: #000;
    display: none;
    padding: 10px;
    position: relative;
  }

  fieldset {
    border: 1px solid #e7e7e7;
    border-radius: 5px;
    padding: 10px;
  }

  vscode-toggle-underline::part(checkbox),
  vscode-toggle-motion::part(checkbox) {
    margin-top: 0;
  }

  .row {
    align-items: center;
    display: flex;
    margin: 0 0 10px;
  }

  .row:last-child {
    margin-bottom: 0;
  }

  .row.select label {
    text-align: right;
    width: 80px;
  }

  .row.select select {
    width: 150px;
  }

  select {
    margin-left: 5px;
  }

  input[type="checkbox"] {
    margin: 0 5px 0 0;
  }

  .panel.open {
    display: block;
  }
`);function D(){return H`
    <div class="ui">
      <button type="button" title="Open toolbar" class="open-toolbar-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 167.435 73.998"
          role="img"
        >
          <title>Open toolbar</title>
          <g fill="#007acc">
            <path
              d="M115.89 8.141L100.762.857a4.574 4.574 0 00-5.23.89L66.537 28.2l-12.63-9.584a3.042 3.042 0 00-3.908.173l-4.051 3.678a3.067 3.067 0 00-.015 4.526l10.963 10-10.963 10a3.067 3.067 0 00.015 4.526l4.051 3.692c1.107.992 2.745 1.064 3.908.173l12.63-9.584L95.53 72.251a4.552 4.552 0 005.216.89l15.144-7.284a4.576 4.576 0 002.6-4.138V12.28a4.552 4.552 0 00-2.6-4.138zm-15.761 45.56l-22.012-16.71 22.012-16.709zM134.34 0l-7.81 7.81L155.73 37l-29.2 29.188 7.81 7.81 33.095-33.094v-7.81zM40.904 7.81L11.704 37l29.2 29.188-7.81 7.81L0 40.904v-7.81L33.094 0z"
            ></path>
          </g>
        </svg>
      </button>
      <div class="panel">
        <div class="row select">
          <vscode-theme-selector></vscode-theme-selector>
        </div>
        <div class="row select">
          <vscode-view-container-selector></vscode-view-container-selector>
        </div>
        <fieldset>
          <legend>User preferences</legend>
          <div>
            <div class="row">
              <vscode-toggle-underline></vscode-toggle-underline>
            </div>
            <div class="row">
              <vscode-toggle-motion></vscode-toggle-motion>
            </div>
          </div>
        </fieldset>
        <button
          type="button"
          class="close-toolbar-button"
          title="Close toolbar"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <title>Close toolbar</title>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.116 8l-4.558 4.558.884.884L8 8.884l4.558 4.558.884-.884L8.884 8l4.558-4.558-.884-.884L8 7.116 3.442 2.558l-.884.884L7.116 8z"
            />
          </svg>
        </button>
      </div>
    </div>
  `}class d extends HTMLElement{static observedAttributes=[c];static template;static activeInstance=null;constructor(){if(super(),d.activeInstance)return;d.activeInstance=this,d.template||(d.template=document.createElement("template"),d.template.innerHTML=D());let e=this.attachShadow({mode:"open"});e.appendChild(d.template.content.cloneNode(!0)),e.adoptedStyleSheets.push(L)}connectedCallback(){this.shadowRoot&&(this._openButton=this.shadowRoot?.querySelector(".open-toolbar-button"),this._closeButton=this.shadowRoot?.querySelector(".close-toolbar-button"),this._panel=this.shadowRoot?.querySelector(".panel"),this._openButton?.addEventListener("click",this.#o),this._closeButton?.addEventListener("click",this.#n),this.#t(),this.#e(localStorage.getItem(f)==="true"))}disconnectedCallback(){this._openButton?.removeEventListener("click",this.#o),this._closeButton?.removeEventListener("click",this.#n)}attributeChangedCallback(e,t,s){e===c&&this.#e(this.hasAttribute(c))}set hidden(e){e?this.setAttribute(c,""):this.removeAttribute(c),this.#e(!!e)}get hidden(){return this.hasAttribute(c)}#e(e){this.shadowRoot?.querySelector(".ui")?.classList.toggle("hidden",e),localStorage.setItem(f,e.toString())}#t(){if(!document.getElementById(b)){const t=document.createElement("style");t.setAttribute("id",b),t.innerHTML=E(),window?.vscodeWebviewPlaygroundNonce&&t.setAttribute("nonce",window.vscodeWebviewPlaygroundNonce),document.head.appendChild(t)}}#o=e=>{e.stopPropagation(),this._panel?.classList.add("open"),this._openButton?.classList.add("open"),window.addEventListener("click",this.#s)};#n=()=>{this._panel?.classList.remove("open"),this._openButton?.classList.remove("open"),window.removeEventListener("click",this.#s)};#s=e=>{e.target&&(e.composedPath().find(u=>u===this._panel)||(this._panel?.classList.remove("open"),this._openButton?.classList.remove("open"),window.removeEventListener("click",this.#s)))}}const C=String.raw,I=String.raw,k="vscode-playground:theme",z=new CSSStyleSheet;z.replaceSync(I`
  :host {
    align-items: center;
    display: flex;
    font-family: var(--vscode-font-family, sans-serif);
    font-size: 13px;
  }

  label {
    margin-right: 5px;
  }

  select {
    background-color: var(--vscode-editor-background);
    border: 1px solid var(--vscode-foreground);
    color: var(--vscode-foreground);
    font-family: var(--vscode-font-family, sans-serif);
  }

  select:focus-visible {
    outline: 1px solid var(--vscode-focusBorder);
  }
`);function N(n){let e="";return Object.keys(n).forEach(s=>{e+=C`<option value="${s}">${n[s].name}</option>`}),e}function T(n){return C`
    <label for="theme-selector">Theme</label>
    <select id="theme-selector">
      ${N(n)}
    </select>
  `}class o extends HTMLElement{static template;static instances=new Set;static themeInfo={light:{themeKind:"vscode-light",name:"Light+",longName:"Default Light+"},"light-v2":{themeKind:"vscode-light",name:"Light Modern",longName:"Default Light Modern"},"light-quiet":{themeKind:"vscode-light",name:"Quiet Light",longName:"Quiet Light"},"light-solarized":{themeKind:"vscode-light",name:"Solarized Light",longName:"Solarized Light"},dark:{themeKind:"vscode-dark",name:"Dark+",longName:"Default Dark+"},"dark-v2":{themeKind:"vscode-dark",name:"Dark Modern",longName:"Default Dark Modern"},"dark-solarized":{themeKind:"vscode-dark",name:"Solarized Dark",longName:"Solarized Dark"},"dark-monokai":{themeKind:"vscode-dark",name:"Monokai",longName:"Monokai"},"hc-light":{themeKind:"vscode-high-contrast-light",name:"Light High Contrast",longName:"Default High Contrast Light"},"hc-dark":{themeKind:"vscode-high-contrast",name:"Dark High Contrast",longName:"Default High Contrast"}};static directoryUrl;static appliedTheme;static themes={light:{},"light-v2":{},"light-quiet":{},"light-solarized":{},dark:{},"dark-v2":{},"dark-monokai":{},"dark-solarized":{},"hc-light":{},"hc-dark":{}};#e;constructor(){super(),o.template||(o.template=document.createElement("template"),o.template.innerHTML=T(o.themeInfo));let e=this.attachShadow({mode:"open"});e.adoptedStyleSheets.push(z),e.appendChild(o.template.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector("#theme-selector")}connectedCallback(){o.instances.add(this),this.#e?.addEventListener("change",this.#r);const e=this.#l();this.#o(e),this.setSelectedOption(e)}disconnectedCallback(){this.#e?.removeEventListener("change",this.#r),o.instances.delete(this)}setSelectedOption(e){this.#e.value=e}disableSelector(e){this.#e.disabled=e}async#t(e){switch(e){case"light":return await i(()=>import("./light.D9I3RnwC.js"),[]);case"light-v2":return await i(()=>import("./light-v2.B-qF0_nz.js"),[]);case"light-quiet":return await i(()=>import("./light-quiet.DgBNmPJf.js"),[]);case"light-solarized":return await i(()=>import("./light-solarized.CtUIFi7f.js"),[]);case"dark":return await i(()=>import("./dark.DiMI6Xcu.js"),[]);case"dark-v2":return await i(()=>import("./dark-v2.DK9cDAGK.js"),[]);case"dark-monokai":return await i(()=>import("./dark-monokai.qzeXu1RB.js"),[]);case"dark-solarized":return await i(()=>import("./dark-solarized.BPuXYBIv.js"),[]);case"hc-dark":return await i(()=>import("./hc-dark.BsjBRxI5.js"),[]);case"hc-light":return await i(()=>import("./hc-light.DxRdq0HX.js"),[]);default:return await i(()=>import("./dark-v2.DK9cDAGK.js"),[])}}async#o(e){if(localStorage.setItem(k,e),e===o.appliedTheme)return;o.themes[o.appliedTheme]?.data?.forEach(g=>{document.documentElement.style.removeProperty(g[0])}),o.appliedTheme=e;const{themeKind:t,name:s,longName:u}=o.themeInfo[e],p=t==="vscode-high-contrast-light"?["vscode-high-contrast","vscode-high-contrast-light"]:[t];if(document.body.classList.remove("vscode-light","vscode-dark","vscode-high-contrast","vscode-high-contrast-light"),document.body.classList.add(...p),document.body.dataset.vscodeThemeKind=t,document.body.dataset.vscodeThemeName=s,document.body.dataset.vscodeThemeId=u,o.themes[e]=o.themes[e]||{},o.themes[e].data){this.#i(e);return}if(!o.themes[e].isFetching){o.themes[e].isFetching=!0;const g=await this.#t(e);o.themes[e].isFetching=!1,o.themes[e].data=g.theme,this.#i(e)}}#n(){return navigator.userAgent.indexOf("Linux")>-1?'system-ui, "Ubuntu", "Droid Sans", sans-serif':navigator.userAgent.indexOf("Mac")>-1?"-apple-system, BlinkMacSystemFont, sans-serif":navigator.userAgent.indexOf("Windows")>-1?'"Segoe WPC", "Segoe UI", sans-serif':"sans-serif"}#s(){return navigator.userAgent.indexOf("Linux")>-1?'"Droid Sans Mono", "monospace", monospace':navigator.userAgent.indexOf("Mac")>-1?'Menlo, Monaco, "Courier New", monospace':navigator.userAgent.indexOf("Windows")>-1?'Consolas, "Courier New", monospace':"monospace"}#i(e){o.themes[e].data&&o.themes[e].data.forEach(t=>{document.documentElement.style.setProperty(t[0],t[1])}),document.documentElement.style.setProperty("--vscode-font-family",this.#n()),document.documentElement.style.setProperty("--vscode-editor-font-family",this.#s())}#l(){let t=Object.keys(o.themeInfo)[0];const s=localStorage.getItem(k);return s&&s in o.themeInfo&&(t=s),t}#a(e){o.instances.forEach(t=>{t!==this&&t.setSelectedOption(e)})}#r=()=>{const e=this.#e.value;this.#o(e).then(()=>{this.#a(e)})}}const K=String.raw,q=String.raw,w="vscode-playground:reduce-motion",M=new CSSStyleSheet;M.replaceSync(q`
  :host {
    align-items: flex-start;
    display: flex;
    font-size: 13px;
    white-space: nowrap;
  }

  input {
    display: block;
    margin: 3px 4px 0 0;
  }

  label {
    user-select: none;
  }
`);function P(){return K`
    <input type="checkbox" id="toggle-motion" part="checkbox" />
    <label for="toggle-motion" part="label">Workbench: Reduce Motion</label>
  `}class l extends HTMLElement{static template;static instances=new Set;#e;constructor(){super(),l.template||(l.template=document.createElement("template"),l.template.innerHTML=P());let e=this.attachShadow({mode:"open"});e.adoptedStyleSheets.push(M),e.appendChild(l.template.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector("#toggle-motion")}connectedCallback(){const e=localStorage.getItem(w)==="true";this.#e.addEventListener("change",this.#o),this.#e.checked=e,this.#t(e),l.instances.add(this)}disconnectedCallback(){this.#e.removeEventListener("change",this.#o),l.instances.delete(this)}setChecked(e){this.#e.checked=e}#t(e){document.body.classList.toggle("vscode-reduce-motion",e)}#o=()=>{const e=this.#e?.checked??!1;this.#t(e),localStorage.setItem(w,e.toString()),l.instances.forEach(t=>{t.setChecked(e)})}}const W=String.raw,F=String.raw,y="vscode-playground:underline",$=new CSSStyleSheet;$.replaceSync(F`
  :host {
    align-items: flex-start;
    display: flex;
    font-size: 13px;
    white-space: nowrap;
  }

  input {
    display: block;
    margin: 3px 4px 0 0;
  }

  label {
    user-select: none;
  }
`);function Y(){return W`
    <input type="checkbox" id="toggle-underline" part="checkbox">
    <label for="toggle-underline" part="label"
      >Accessibility: Underline Links</span></label
    >
  `}class r extends HTMLElement{static template;static instances=new Set;#e;constructor(){super(),r.template||(r.template=document.createElement("template"),r.template.innerHTML=Y());let e=this.attachShadow({mode:"open"});e.adoptedStyleSheets.push($),e.appendChild(r.template.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector("#toggle-underline")}connectedCallback(){const e=localStorage.getItem(y)==="true";this.#e.addEventListener("change",this.#o),this.#e.checked=e,this.#t(e),r.instances.add(this)}disconnectedCallback(){this.#e.removeEventListener("change",this.#o),r.instances.delete(this)}setChecked(e){this.#e.checked=e}#t(e){const t=e?"underline":"none";document.documentElement.style.getPropertyValue("--text-link-decoration")!==t&&document.documentElement.style.setProperty("--text-link-decoration",t)}#o=()=>{const e=this.#e?.checked??!1;this.#t(e),localStorage.setItem(y,e.toString()),r.instances.forEach(t=>{t!==this&&t.setChecked(e)})}}const G=String.raw,Q=String.raw,x="vscode-playground:view-container",A=new CSSStyleSheet;A.replaceSync(Q`
  :host {
    align-items: center;
    display: flex;
    font-family: var(--vscode-font-family, sans-serif);
    font-size: 13px;
  }

  label {
    margin-right: 5px;
  }

  select {
    background-color: var(--vscode-editor-background);
    border: 1px solid var(--vscode-foreground);
    color: var(--vscode-foreground);
    font-family: var(--vscode-font-family, sans-serif);
  }

  select:focus {
    outline: 1px solid var(--vscode-focusBorder);
  }
`);function U(){return G`
    <label for="container-selector">View container</label>
    <select id="container-selector">
      <option value="editor">Editor</option>
      <option value="sidebar">Sidebar</option>
      <option value="panel">Panel</option>
    </select>
  `}class a extends HTMLElement{static template;static instances=new Set;static appliedViewContainer;#e;constructor(){super(),a.template||(a.template=document.createElement("template"),a.template.innerHTML=U());let e=this.attachShadow({mode:"open"});e.adoptedStyleSheets.push(A),e.appendChild(a.template.content.cloneNode(!0)),this.#e=this.shadowRoot?.querySelector("#container-selector")}setSelectedOption(e){this.#e.value=e}connectedCallback(){this.#e.addEventListener("change",this.#t),a.instances.add(this);const e=localStorage.getItem(x)??"editor";a.appliedViewContainer!==e&&this.#o(e),this.#e.value=e}disconnectedCallback(){this.#e.removeEventListener("change",this.#t),a.instances.delete(this)}#t=()=>{const e=this.#e.value;e&&(this.#o(e),this.#n(e),localStorage.setItem(x,e))};#o(e){let t;switch(e){case"sidebar":t="var(--vscode-sideBar-background)";break;case"panel":t="var(--vscode-panel-background)";break;case"editor":default:t="var(--vscode-editor-background)"}document.body.style.setProperty("--playground-body-background",t),a.appliedViewContainer=e}#n(e){a.instances.forEach(t=>{t!==this&&t.setSelectedOption(e)})}}customElements.define("vscode-demo",h);customElements.define("vscode-dev-toolbar",d);customElements.define("vscode-theme-selector",o);customElements.define("vscode-toggle-motion",l);customElements.define("vscode-toggle-underline",r);customElements.define("vscode-view-container-selector",a);
