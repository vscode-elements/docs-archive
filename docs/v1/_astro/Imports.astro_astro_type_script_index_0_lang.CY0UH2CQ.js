import"./Imports.astro_astro_type_script_index_0_lang.D2i34b64.js";import{d as O,i as E,c as S,V as C,x as R}from"./default.styles.2_Tg-dod.js";import{n as p}from"./property.DhsKp3PU.js";import{r as v}from"./state.DQQ1Z-nc.js";import{e as w}from"./query.CfX4IL2Y.js";import{o as y}from"./query-assigned-elements.DwgmpGB0.js";import{a as P}from"./class-map.Cezi6eN_.js";import{s as b}from"./style-property-map.Cg6zaSGE.js";import"./if-defined.BevqSZlK.js";import"./base.CShCMygk.js";const $=[O,E`
    :host {
      --separator-border: var(--vscode-editorWidget-border, #454545);

      border: 1px solid var(--vscode-editorWidget-border, #454545);
      display: block;
      overflow: hidden;
      position: relative;
    }

    ::slotted(*) {
      height: 100%;
      width: 100%;
    }

    ::slotted(vscode-split-layout) {
      border: 0;
    }

    .wrapper {
      display: flex;
      height: 100%;
      width: 100%;
    }

    .wrapper.horizontal {
      flex-direction: column;
    }

    .start {
      box-sizing: border-box;
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start {
      border-right: 1px solid var(--separator-border);
    }

    :host([split='horizontal']) .start {
      border-bottom: 1px solid var(--separator-border);
    }

    .end {
      flex: 1;
      min-height: 0;
      min-width: 0;
    }

    :host([split='vertical']) .start,
    :host([split='vertical']) .end {
      height: 100%;
    }

    :host([split='horizontal']) .start,
    :host([split='horizontal']) .end {
      width: 100%;
    }

    .handle-overlay {
      display: none;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }

    .handle-overlay.active {
      display: block;
    }

    .handle-overlay.split-vertical {
      cursor: ew-resize;
    }

    .handle-overlay.split-horizontal {
      cursor: ns-resize;
    }

    .handle {
      background-color: transparent;
      position: absolute;
      z-index: 2;
    }

    .handle.hover {
      transition: background-color 0.1s ease-out 0.3s;
      background-color: var(--vscode-sash-hoverBorder, #0078d4);
    }

    .handle.hide {
      background-color: transparent;
      transition: background-color 0.1s ease-out;
    }

    .handle.split-vertical {
      cursor: ew-resize;
      height: 100%;
    }

    .handle.split-horizontal {
      cursor: ns-resize;
      width: 100%;
    }
  `];var r=function(n,t,e,i){var o=arguments.length,s=o<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,t,e,i);else for(var a=n.length-1;a>=0;a--)(h=n[a])&&(s=(o<3?h(s):o>3?h(t,e,s):h(t,e))||s);return o>3&&s&&Object.defineProperty(t,e,s),s},x;const g="50%",L=4,u=n=>{if(!n)return{value:0,unit:"pixel"};let t,e;n.endsWith("%")?(t="percent",e=+n.substring(0,n.length-1)):n.endsWith("px")?(t="pixel",e=+n.substring(0,n.length-2)):(t="pixel",e=+n);const i=isNaN(e)?0:e;return{unit:t,value:i}},_=(n,t)=>t===0?0:Math.min(100,n/t*100),m=(n,t)=>t*(n/100);let l=x=class extends C{set split(t){this._split!==t&&(this._split=t,this.resetHandlePosition())}get split(){return this._split}set handlePosition(t){this._rawHandlePosition=t,this._handlePositionPropChanged()}get handlePosition(){return this._rawHandlePosition}set fixedPane(t){this._fixedPane=t,this._fixedPanePropChanged()}get fixedPane(){return this._fixedPane}constructor(){super(),this._split="vertical",this.resetOnDblClick=!1,this.handleSize=4,this.initialHandlePosition=g,this._fixedPane="none",this._handlePosition=0,this._isDragActive=!1,this._hover=!1,this._hide=!1,this._boundRect=new DOMRect,this._handleOffset=0,this._wrapperObserved=!1,this._fixedPaneSize=0,this._handleResize=t=>{const e=t[0].contentRect,{width:i,height:o}=e;this._boundRect=e;const s=this.split==="vertical"?i:o;this.fixedPane==="start"&&(this._handlePosition=this._fixedPaneSize),this.fixedPane==="end"&&(this._handlePosition=s-this._fixedPaneSize)},this._handleMouseUp=t=>{this._isDragActive=!1,t.target!==this&&(this._hover=!1,this._hide=!0),window.removeEventListener("mouseup",this._handleMouseUp),window.removeEventListener("mousemove",this._handleMouseMove);const{width:e,height:i}=this._boundRect,o=this.split==="vertical"?e:i,s=_(this._handlePosition,o);this.dispatchEvent(new CustomEvent("vsc-split-layout-change",{detail:{position:this._handlePosition,positionInPercentage:s},composed:!0}))},this._handleMouseMove=t=>{const{clientX:e,clientY:i}=t,{left:o,top:s,height:h,width:a}=this._boundRect,d=this.split==="vertical",c=d?a:h,f=d?e-o:i-s;this._handlePosition=Math.max(0,Math.min(f-this._handleOffset+this.handleSize/2,c)),this.fixedPane==="start"&&(this._fixedPaneSize=this._handlePosition),this.fixedPane==="end"&&(this._fixedPaneSize=c-this._handlePosition)},this._resizeObserver=new ResizeObserver(this._handleResize)}resetHandlePosition(){if(!this._wrapperEl){this._handlePosition=0;return}const{width:t,height:e}=this._wrapperEl.getBoundingClientRect(),i=this.split==="vertical"?t:e,{value:o,unit:s}=u(this.initialHandlePosition??g);s==="percent"?this._handlePosition=m(o,i):this._handlePosition=o}connectedCallback(){super.connectedCallback()}firstUpdated(t){this.fixedPane!=="none"&&(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0),this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:e,unit:i}=this.handlePosition?u(this.handlePosition):u(this.initialHandlePosition);this._setPosition(e,i),this._initFixedPane()}_handlePositionPropChanged(){if(this.handlePosition&&this._wrapperEl){this._boundRect=this._wrapperEl.getBoundingClientRect();const{value:t,unit:e}=u(this.handlePosition);this._setPosition(t,e)}}_fixedPanePropChanged(){this._wrapperEl&&this._initFixedPane()}_initFixedPane(){if(this.fixedPane==="none")this._wrapperObserved&&(this._resizeObserver.unobserve(this._wrapperEl),this._wrapperObserved=!1);else{const{width:t,height:e}=this._boundRect,i=this.split==="vertical"?t:e;this._fixedPaneSize=this.fixedPane==="start"?this._handlePosition:i-this._handlePosition,this._wrapperObserved||(this._resizeObserver.observe(this._wrapperEl),this._wrapperObserved=!0)}}_setPosition(t,e){const{width:i,height:o}=this._boundRect,s=this.split==="vertical"?i:o;this._handlePosition=e==="percent"?m(t,s):t}_handleMouseOver(){this._hover=!0,this._hide=!1}_handleMouseOut(t){t.buttons!==1&&(this._hover=!1,this._hide=!0)}_handleMouseDown(t){t.stopPropagation(),t.preventDefault(),this._boundRect=this._wrapperEl.getBoundingClientRect();const{left:e,top:i}=this._boundRect,{left:o,top:s}=this._handleEl.getBoundingClientRect(),h=t.clientX-e,a=t.clientY-i;this.split==="vertical"&&(this._handleOffset=h-(o-e)),this.split==="horizontal"&&(this._handleOffset=a-(s-i)),this._isDragActive=!0,window.addEventListener("mouseup",this._handleMouseUp),window.addEventListener("mousemove",this._handleMouseMove)}_handleDblClick(){this.resetOnDblClick&&this.resetHandlePosition()}_handleSlotChange(){[...this._nestedLayoutsAtStart,...this._nestedLayoutsAtEnd].forEach(e=>{e instanceof x&&e.resetHandlePosition()})}render(){const{width:t,height:e}=this._boundRect,i=this.split==="vertical"?t:e,o=this.fixedPane!=="none"?`${this._handlePosition}px`:`${_(this._handlePosition,i)}%`;let s="";this.fixedPane==="start"?s=`0 0 ${this._fixedPaneSize}px`:s=`1 1 ${_(this._handlePosition,i)}%`;let h="";this.fixedPane==="end"?h=`0 0 ${this._fixedPaneSize}px`:h=`1 1 ${_(i-this._handlePosition,i)}%`;const a={left:this.split==="vertical"?o:"0",top:this.split==="vertical"?"0":o},d=this.handleSize??L;this.split==="vertical"&&(a.marginLeft=`${0-d/2}px`,a.width=`${d}px`),this.split==="horizontal"&&(a.height=`${d}px`,a.marginTop=`${0-d/2}px`);const c=P({"handle-overlay":!0,active:this._isDragActive,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),f=P({handle:!0,hover:this._hover,hide:this._hide,"split-vertical":this.split==="vertical","split-horizontal":this.split==="horizontal"}),z={wrapper:!0,horizontal:this.split==="horizontal"};return R`
      <div class=${P(z)}>
        <div class="start" .style=${b({flex:s})}>
          <slot name="start" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class="end" .style=${b({flex:h})}>
          <slot name="end" @slotchange=${this._handleSlotChange}></slot>
        </div>
        <div class=${c}></div>
        <div
          class=${f}
          .style=${b(a)}
          @mouseover=${this._handleMouseOver}
          @mouseout=${this._handleMouseOut}
          @mousedown=${this._handleMouseDown}
          @dblclick=${this._handleDblClick}
        ></div>
      </div>
    `}};l.styles=$;r([p({reflect:!0})],l.prototype,"split",null);r([p({type:Boolean,reflect:!0,attribute:"reset-on-dbl-click"})],l.prototype,"resetOnDblClick",void 0);r([p({type:Number,reflect:!0,attribute:"handle-size"})],l.prototype,"handleSize",void 0);r([p({reflect:!0,attribute:"initial-handle-position"})],l.prototype,"initialHandlePosition",void 0);r([p({attribute:"handle-position"})],l.prototype,"handlePosition",null);r([p({attribute:"fixed-pane"})],l.prototype,"fixedPane",null);r([v()],l.prototype,"_handlePosition",void 0);r([v()],l.prototype,"_isDragActive",void 0);r([v()],l.prototype,"_hover",void 0);r([v()],l.prototype,"_hide",void 0);r([w(".wrapper")],l.prototype,"_wrapperEl",void 0);r([w(".handle")],l.prototype,"_handleEl",void 0);r([y({slot:"start",selector:"vscode-split-layout"})],l.prototype,"_nestedLayoutsAtStart",void 0);r([y({slot:"end",selector:"vscode-split-layout"})],l.prototype,"_nestedLayoutsAtEnd",void 0);l=x=r([S("vscode-split-layout")],l);
