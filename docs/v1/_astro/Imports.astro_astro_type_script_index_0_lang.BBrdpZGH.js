import{r as s,d as p,i as l,c as g,V as u,x as v}from"./default.styles.2_Tg-dod.js";import{n as x}from"./property.DhsKp3PU.js";import{g as h}from"./helpers.XXwYhvdi.js";const b=s(h()),m=[p,l`
    :host {
      background-color: var(--vscode-badge-background, #616161);
      border: 1px solid var(--vscode-contrastBorder, transparent);
      border-radius: 2px;
      box-sizing: border-box;
      color: var(--vscode-badge-foreground, #f8f8f8);
      display: inline-block;
      font-family: var(--vscode-font-family, ${b});
      font-size: 11px;
      font-weight: 400;
      line-height: 14px;
      min-width: 18px;
      padding: 2px 3px;
      text-align: center;
      white-space: nowrap;
    }

    :host([variant='counter']) {
      border-radius: 11px;
      line-height: 11px;
      min-height: 18px;
      min-width: 18px;
      padding: 3px 6px;
    }

    :host([variant='activity-bar-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 20px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      font-size: 9px;
      font-weight: 600;
      line-height: 16px;
      padding: 0 4px;
    }

    :host([variant='tab-header-counter']) {
      background-color: var(--vscode-activityBarBadge-background, #0078d4);
      border-radius: 10px;
      color: var(--vscode-activityBarBadge-foreground, #ffffff);
      line-height: 10px;
      min-height: 16px;
      min-width: 16px;
      padding: 3px 5px;
    }
  `];var f=function(o,t,r,a){var n=arguments.length,e=n<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,r):a,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(o,t,r,a);else for(var c=o.length-1;c>=0;c--)(d=o[c])&&(e=(n<3?d(e):n>3?d(t,r,e):d(t,r))||e);return n>3&&e&&Object.defineProperty(t,r,e),e};let i=class extends u{constructor(){super(...arguments),this.variant="default"}render(){return v` <slot></slot> `}};i.styles=m;f([x({reflect:!0})],i.prototype,"variant",void 0);i=f([g("vscode-badge")],i);
