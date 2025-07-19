import"./Imports.astro_astro_type_script_index_0_lang.ClqDKod8.js";import{d,i as f,c as h,V as m,x as v}from"./default.styles.2_Tg-dod.js";import{n}from"./property.DhsKp3PU.js";import"./query.CfX4IL2Y.js";import"./base.CShCMygk.js";import"./class-map.Cezi6eN_.js";import"./base.styles.Dbu-jbpY.js";const u=[d,f`
    :host {
      display: block;
    }

    .wrapper {
      display: flex;
      flex-wrap: wrap;
    }

    :host([variant='vertical']) .wrapper {
      display: block;
    }

    ::slotted(vscode-checkbox) {
      margin-right: 20px;
    }

    ::slotted(vscode-checkbox:last-child) {
      margin-right: 0;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox) {
      display: block;
      margin-bottom: 15px;
    }

    :host([variant='vertical']) ::slotted(vscode-checkbox:last-child) {
      margin-bottom: 0;
    }
  `];var p=function(c,t,o,l){var s=arguments.length,e=s<3?t:l===null?l=Object.getOwnPropertyDescriptor(t,o):l,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(c,t,o,l);else for(var a=c.length-1;a>=0;a--)(i=c[a])&&(e=(s<3?i(e):s>3?i(t,o,e):i(t,o))||e);return s>3&&e&&Object.defineProperty(t,o,e),e};let r=class extends m{constructor(){super(...arguments),this.role="group",this.variant="horizontal"}render(){return v`
      <div class="wrapper">
        <slot></slot>
      </div>
    `}};r.styles=u;p([n({reflect:!0})],r.prototype,"role",void 0);p([n({reflect:!0})],r.prototype,"variant",void 0);r=p([h("vscode-checkbox-group")],r);
