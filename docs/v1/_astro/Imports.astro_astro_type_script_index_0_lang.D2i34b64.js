import{d as f,i as b,c as m,V as v,x as p}from"./default.styles.2_Tg-dod.js";import{n as r}from"./property.DhsKp3PU.js";import{a as y}from"./class-map.Cezi6eN_.js";import{o as h}from"./if-defined.BevqSZlK.js";import{s as g}from"./style-property-map.Cg6zaSGE.js";const k=[f,b`
    :host {
      color: var(--vscode-icon-foreground, #cccccc);
      display: inline-block;
    }

    .codicon[class*='codicon-'] {
      display: block;
    }

    .icon,
    .button {
      background-color: transparent;
      display: block;
      padding: 0;
    }

    .button {
      border-color: transparent;
      border-style: solid;
      border-width: 1px;
      border-radius: 5px;
      color: currentColor;
      cursor: pointer;
      padding: 2px;
    }

    .button:hover {
      background-color: var(
        --vscode-toolbar-hoverBackground,
        rgba(90, 93, 94, 0.31)
      );
    }

    .button:active {
      background-color: var(
        --vscode-toolbar-activeBackground,
        rgba(99, 102, 103, 0.31)
      );
    }

    .button:focus {
      outline: none;
    }

    .button:focus-visible {
      border-color: var(--vscode-focusBorder, #0078d4);
    }

    @keyframes icon-spin {
      100% {
        transform: rotate(360deg);
      }
    }

    .spin {
      animation-name: icon-spin;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `];var c=function(l,e,t,n){var i=arguments.length,s=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(l,e,t,n);else for(var u=l.length-1;u>=0;u--)(d=l[u])&&(s=(i<3?d(s):i>3?d(e,t,s):d(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s},a;let o=a=class extends v{constructor(){super(...arguments),this.label="",this.name="",this.size=16,this.spin=!1,this.spinDuration=1.5,this.actionIcon=!1,this._onButtonClick=e=>{this.dispatchEvent(new CustomEvent("vsc-click",{detail:{originalEvent:e}}))}}connectedCallback(){super.connectedCallback();const{href:e,nonce:t}=this._getStylesheetConfig();a.stylesheetHref=e,a.nonce=t}_getStylesheetConfig(){const e=document.getElementById("vscode-codicon-stylesheet"),t=e?.getAttribute("href")||void 0,n=e?.nonce||void 0;if(!e){let i="[VSCode Elements] To use the Icon component, the codicons.css file must be included in the page with the id `vscode-codicon-stylesheet`! ";i+="See https://vscode-elements.github.io/components/icon/ for more details.",console.warn(i)}return{nonce:n,href:t}}render(){const{stylesheetHref:e,nonce:t}=a,n=p`<span
      class=${y({codicon:!0,["codicon-"+this.name]:!0,spin:this.spin})}
      .style=${g({animationDuration:String(this.spinDuration)+"s",fontSize:this.size+"px",height:this.size+"px",width:this.size+"px"})}
    ></span>`,i=this.actionIcon?p` <button
          class="button"
          @click=${this._onButtonClick}
          aria-label=${this.label}
        >
          ${n}
        </button>`:p` <span class="icon" aria-hidden="true" role="presentation"
          >${n}</span
        >`;return p`
      <link
        rel="stylesheet"
        href=${h(e)}
        nonce=${h(t)}
      >
      ${i}
    `}};o.styles=k;o.stylesheetHref="";o.nonce="";c([r()],o.prototype,"label",void 0);c([r({type:String})],o.prototype,"name",void 0);c([r({type:Number})],o.prototype,"size",void 0);c([r({type:Boolean,reflect:!0})],o.prototype,"spin",void 0);c([r({type:Number,attribute:"spin-duration"})],o.prototype,"spinDuration",void 0);c([r({type:Boolean,reflect:!0,attribute:"action-icon"})],o.prototype,"actionIcon",void 0);o=a=c([m("vscode-icon")],o);
