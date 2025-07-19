import{d as h,i as u,c as f,V as p,x as m}from"./default.styles.2_Tg-dod.js";import{n as d}from"./property.DhsKp3PU.js";import{a as _}from"./class-map.Cezi6eN_.js";import{u as g}from"./uniqueId.7Lx2KIwn.js";import{I as b}from"./helpers.XXwYhvdi.js";const v=[h,u`
    :host {
      color: var(--vscode-foreground, #cccccc);
      font-family: var(--vscode-font-family, sans-serif);
      font-size: var(--vscode-font-size, 13px);
      font-weight: 600;
      line-height: ${b};
      cursor: default;
      display: block;
      padding: 5px 0;
    }

    .wrapper {
      display: block;
    }

    .wrapper.required:after {
      content: ' *';
    }

    ::slotted(.normal) {
      font-weight: normal;
    }

    ::slotted(.lightened) {
      color: var(--vscode-foreground, #cccccc);
      opacity: 0.9;
    }
  `];var a=function(s,e,t,r){var l=arguments.length,o=l<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,e,t,r);else for(var n=s.length-1;n>=0;n--)(c=s[n])&&(o=(l<3?c(o):l>3?c(e,t,o):c(e,t))||o);return l>3&&o&&Object.defineProperty(e,t,o),o};let i=class extends p{constructor(){super(...arguments),this.required=!1,this._id="",this._htmlFor="",this._connected=!1}set htmlFor(e){this._htmlFor=e,this.setAttribute("for",e),this._connected&&this._connectWithTarget()}get htmlFor(){return this._htmlFor}set id(e){this._id=e}get id(){return this._id}attributeChangedCallback(e,t,r){super.attributeChangedCallback(e,t,r)}connectedCallback(){super.connectedCallback(),this._connected=!0,this._id===""&&(this._id=g("vscode-label-"),this.setAttribute("id",this._id)),this._connectWithTarget()}_getTarget(){let e=null;if(this._htmlFor){const t=this.getRootNode({composed:!1});t&&(e=t.querySelector(`#${this._htmlFor}`))}return e}async _connectWithTarget(){await this.updateComplete;const e=this._getTarget();["vscode-radio-group","vscode-checkbox-group"].includes(e?.tagName.toLowerCase()??"")&&e.setAttribute("aria-labelledby",this._id);let t="";this.textContent&&(t=this.textContent.trim()),e&&"label"in e&&["vscode-textfield","vscode-textarea","vscode-single-select","vscode-multi-select"].includes(e?.tagName.toLowerCase()??"")&&(e.label=t)}_handleClick(){const e=this._getTarget();e&&"focus"in e&&e.focus()}render(){return m`
      <label
        class=${_({wrapper:!0,required:this.required})}
        @click=${this._handleClick}
        ><slot></slot
      ></label>
    `}};i.styles=v;a([d({reflect:!0,attribute:"for"})],i.prototype,"htmlFor",null);a([d()],i.prototype,"id",null);a([d({type:Boolean,reflect:!0})],i.prototype,"required",void 0);i=a([f("vscode-label")],i);
