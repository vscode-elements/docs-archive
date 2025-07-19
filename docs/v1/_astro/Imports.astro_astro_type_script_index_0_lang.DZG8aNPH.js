import{d as f,i as p,c as m,V as a,x as h}from"./default.styles.2_Tg-dod.js";const u=[f,p`
    :host {
      display: block;
      line-height: 1.4em;
      margin-bottom: 4px;
      margin-top: 4px;
      max-width: 720px;
      opacity: 0.9;
    }

    :host([vertical]) {
      margin-left: 0;
    }
  `];var S=function(n,t,o,l){var r=arguments.length,e=r<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,o):l,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(n,t,o,l);else for(var c=n.length-1;c>=0;c--)(s=n[c])&&(e=(r<3?s(e):r>3?s(t,o,e):s(t,o))||e);return r>3&&e&&Object.defineProperty(t,o,e),e};const i=new CSSStyleSheet;i.replaceSync(`
  vscode-form-helper * {
    margin: 0;
  }

  vscode-form-helper *:not(:last-child) {
    margin-bottom: 8px;
  }
`);let d=class extends a{constructor(){super(),this._injectLightDOMStyles()}_injectLightDOMStyles(){document.adoptedStyleSheets.find(o=>o===i)||document.adoptedStyleSheets.push(i)}render(){return h`<slot></slot>`}};d.styles=u;d=S([m("vscode-form-helper")],d);
