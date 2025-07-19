import{d,i as f,c as g,V as u,x as m}from"./default.styles.2_Tg-dod.js";import{n as p}from"./property.DhsKp3PU.js";const x=[d,f`
    :host {
      align-items: center;
      display: block;
      height: 28px;
      margin: 0;
      outline: none;
      width: 28px;
    }

    .progress {
      height: 100%;
      width: 100%;
    }

    .background {
      fill: none;
      stroke: transparent;
      stroke-width: 2px;
    }

    .indeterminate-indicator-1 {
      fill: none;
      stroke: var(--vscode-progressBar-background, #0078d4);
      stroke-width: 2px;
      stroke-linecap: square;
      transform-origin: 50% 50%;
      transform: rotate(-90deg);
      transition: all 0.2s ease-in-out;
      animation: spin-infinite 2s linear infinite;
    }

    @keyframes spin-infinite {
      0% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(0deg);
      }
      50% {
        stroke-dasharray: 21.99px 21.99px;
        transform: rotate(450deg);
      }
      100% {
        stroke-dasharray: 0.01px 43.97px;
        transform: rotate(1080deg);
      }
    }
  `];var c=function(a,r,i,o){var n=arguments.length,e=n<3?r:o===null?o=Object.getOwnPropertyDescriptor(r,i):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(a,r,i,o);else for(var l=a.length-1;l>=0;l--)(s=a[l])&&(e=(n<3?s(e):n>3?s(r,i,e):s(r,i))||e);return n>3&&e&&Object.defineProperty(r,i,e),e};let t=class extends u{constructor(){super(...arguments),this.ariaLabel="Loading",this.ariaLive="assertive",this.role="alert"}render(){return m`<svg class="progress" part="progress" viewBox="0 0 16 16">
      <circle
        class="background"
        part="background"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
      <circle
        class="indeterminate-indicator-1"
        part="indeterminate-indicator-1"
        cx="8px"
        cy="8px"
        r="7px"
      ></circle>
    </svg>`}};t.styles=x;c([p({reflect:!0,attribute:"aria-label"})],t.prototype,"ariaLabel",void 0);c([p({reflect:!0,attribute:"aria-live"})],t.prototype,"ariaLive",void 0);c([p({reflect:!0})],t.prototype,"role",void 0);t=c([g("vscode-progress-ring")],t);
