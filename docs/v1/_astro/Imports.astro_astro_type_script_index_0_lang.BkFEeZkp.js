import{d as v,i as g,c as f,V as y,E as S,x as _}from"./default.styles.2_Tg-dod.js";import{n as c}from"./property.DhsKp3PU.js";import{r as a}from"./state.DQQ1Z-nc.js";import{e as m}from"./query.CfX4IL2Y.js";import{o as T}from"./query-assigned-elements.DwgmpGB0.js";import{a as b}from"./class-map.Cezi6eN_.js";import{s as d}from"./style-property-map.Cg6zaSGE.js";import"./base.CShCMygk.js";const P=[v,g`
    :host {
      display: block;
      position: relative;
    }

    .scrollable-container {
      height: 100%;
      overflow: auto;
    }

    .scrollable-container::-webkit-scrollbar {
      cursor: default;
      width: 0;
    }

    .scrollable-container {
      scrollbar-width: none;
    }

    .shadow {
      box-shadow: var(--vscode-scrollbar-shadow, #000000) 0 6px 6px -6px inset;
      display: none;
      height: 3px;
      left: 0;
      pointer-events: none;
      position: absolute;
      top: 0;
      z-index: 1;
      width: 100%;
    }

    .shadow.visible {
      display: block;
    }

    .scrollbar-track {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 10px;
      z-index: 100;
    }

    .scrollbar-track.hidden {
      display: none;
    }

    .scrollbar-thumb {
      background-color: transparent;
      min-height: var(--min-thumb-height, 20px);
      opacity: 0;
      position: absolute;
      right: 0;
      width: 10px;
    }

    .scrollbar-thumb.visible {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 1;
      transition: opacity 100ms;
    }

    .scrollbar-thumb.fade {
      background-color: var(
        --vscode-scrollbarSlider-background,
        rgba(121, 121, 121, 0.4)
      );
      opacity: 0;
      transition: opacity 800ms;
    }

    .scrollbar-thumb.visible:hover {
      background-color: var(
        --vscode-scrollbarSlider-hoverBackground,
        rgba(100, 100, 100, 0.7)
      );
    }

    .scrollbar-thumb.visible.active,
    .scrollbar-thumb.visible.active:hover {
      background-color: var(
        --vscode-scrollbarSlider-activeBackground,
        rgba(191, 191, 191, 0.4)
      );
    }

    .prevent-interaction {
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      position: absolute;
      z-index: 99;
    }

    .content {
      overflow: hidden;
    }
  `];var i=function(u,t,e,s){var r=arguments.length,l=r<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,e):s,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(u,t,e,s);else for(var n=u.length-1;n>=0;n--)(h=u[n])&&(l=(r<3?h(l):r>3?h(t,e,l):h(t,e))||l);return r>3&&l&&Object.defineProperty(t,e,l),l};let o=class extends y{set scrollPos(t){this._scrollPos=t,this._updateScrollbar(),this._updateThumbPosition(),this.requestUpdate()}get scrollPos(){return this._scrollPos}get scrollMax(){return this._scrollableContainer?this._scrollableContainer.scrollHeight:0}constructor(){super(),this.alwaysVisible=!1,this.fastScrollSensitivity=5,this.minThumbSize=20,this.mouseWheelScrollSensitivity=1,this.shadow=!0,this.scrolled=!1,this._scrollPos=0,this._isDragging=!1,this._thumbHeight=0,this._thumbY=0,this._thumbVisible=!1,this._thumbFade=!1,this._thumbActive=!1,this._scrollThumbStartY=0,this._mouseStartY=0,this._scrollbarVisible=!0,this._scrollbarTrackZ=0,this._resizeObserverCallback=()=>{this._updateScrollbar(),this._updateThumbPosition()},this._handleSlotChange=()=>{this._updateScrollbar(),this._updateThumbPosition(),this._zIndexFix()},this._handleScrollThumbMouseMove=t=>{const e=this._scrollThumbStartY+(t.screenY-this._mouseStartY);this._thumbY=this._limitThumbPos(e),this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollThumbMouseUp=t=>{this._isDragging=!1,this._thumbActive=!1;const e=this.getBoundingClientRect(),{x:s,y:r,width:l,height:h}=e,{pageX:n,pageY:p}=t;(n>s+l||n<s||p>r+h||p<r)&&(this._thumbFade=!0,this._thumbVisible=!1),document.removeEventListener("mousemove",this._handleScrollThumbMouseMove),document.removeEventListener("mouseup",this._handleScrollThumbMouseUp)},this._handleComponentMouseOver=()=>{this._thumbVisible=!0,this._thumbFade=!1},this._handleComponentMouseOut=()=>{this._thumbActive||(this._thumbVisible=!1,this._thumbFade=!0)},this._handleComponentWheel=t=>{t.preventDefault();const e=t.altKey?this.mouseWheelScrollSensitivity*this.fastScrollSensitivity:this.mouseWheelScrollSensitivity;this.scrollPos=this._limitScrollPos(this.scrollPos+t.deltaY*e),this.dispatchEvent(new CustomEvent("vsc-scrollable-scroll",{detail:this.scrollPos}))},this._handleScrollableContainerScroll=t=>{t.currentTarget&&(this.scrollPos=t.currentTarget.scrollTop)},this.addEventListener("mouseover",this._handleComponentMouseOver),this.addEventListener("mouseout",this._handleComponentMouseOut),this.addEventListener("wheel",this._handleComponentWheel)}connectedCallback(){super.connectedCallback(),this._hostResizeObserver=new ResizeObserver(this._resizeObserverCallback),this._contentResizeObserver=new ResizeObserver(this._resizeObserverCallback),this.requestUpdate(),this.updateComplete.then(()=>{this._hostResizeObserver.observe(this),this._contentResizeObserver.observe(this._contentElement),this._updateThumbPosition()})}disconnectedCallback(){super.disconnectedCallback(),this._hostResizeObserver.unobserve(this),this._hostResizeObserver.disconnect(),this._contentResizeObserver.unobserve(this._contentElement),this._contentResizeObserver.disconnect()}firstUpdated(t){this._updateThumbPosition()}_calcThumbHeight(){const t=this.offsetHeight,e=this._contentElement?.offsetHeight??0,s=t*(t/e);return Math.max(this.minThumbSize,s)}_updateScrollbar(){const t=this._contentElement?.offsetHeight??0;this.offsetHeight>=t?this._scrollbarVisible=!1:(this._scrollbarVisible=!0,this._thumbHeight=this._calcThumbHeight()),this.requestUpdate()}_zIndexFix(){let t=0;this._assignedElements.forEach(e=>{if("style"in e){const s=window.getComputedStyle(e).zIndex;/([0-9-])+/g.test(s)&&(t=Number(s)>t?Number(s):t)}}),this._scrollbarTrackZ=t+1,this.requestUpdate()}_updateThumbPosition(){if(!this._scrollableContainer)return;const t=this._scrollPos;this.scrolled=t>0;const e=this.offsetHeight,s=this._thumbHeight,l=this._contentElement.offsetHeight-e,h=t/l,n=e-s;this._thumbY=Math.min(h*(e-s),n)}_calculateScrollPosFromThumbPos(t){const e=this.getBoundingClientRect().height,s=this._scrollThumbElement.getBoundingClientRect().height,r=this._contentElement.getBoundingClientRect().height,l=t/(e-s)*(r-e);return this._limitScrollPos(l)}_limitScrollPos(t){return t<0?0:t>this.scrollMax?this.scrollMax:t}_limitThumbPos(t){const e=this.getBoundingClientRect().height,s=this._scrollThumbElement.getBoundingClientRect().height;return t<0?0:t>e-s?e-s:t}_handleScrollThumbMouseDown(t){const e=this.getBoundingClientRect(),s=this._scrollThumbElement.getBoundingClientRect();this._mouseStartY=t.screenY,this._scrollThumbStartY=s.top-e.top,this._isDragging=!0,this._thumbActive=!0,document.addEventListener("mousemove",this._handleScrollThumbMouseMove),document.addEventListener("mouseup",this._handleScrollThumbMouseUp)}_handleScrollbarTrackPress(t){t.target===t.currentTarget&&(this._thumbY=t.offsetY-this._thumbHeight/2,this.scrollPos=this._calculateScrollPosFromThumbPos(this._thumbY))}render(){return _`
      <div
        class="scrollable-container"
        .style=${d({userSelect:this._isDragging?"none":"auto"})}
        .scrollTop=${this._scrollPos}
        @scroll=${this._handleScrollableContainerScroll}
      >
        <div
          class=${b({shadow:!0,visible:this.scrolled})}
          .style=${d({zIndex:String(this._scrollbarTrackZ)})}
        ></div>
        ${this._isDragging?_`<div class="prevent-interaction"></div>`:S}
        <div
          class=${b({"scrollbar-track":!0,hidden:!this._scrollbarVisible})}
          @mousedown=${this._handleScrollbarTrackPress}
        >
          <div
            class=${b({"scrollbar-thumb":!0,visible:this.alwaysVisible?!0:this._thumbVisible,fade:this.alwaysVisible?!1:this._thumbFade,active:this._thumbActive})}
            .style=${d({height:`${this._thumbHeight}px`,top:`${this._thumbY}px`})}
            @mousedown=${this._handleScrollThumbMouseDown}
          ></div>
        </div>
        <div class="content">
          <slot @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `}};o.styles=P;i([c({type:Boolean,reflect:!0,attribute:"always-visible"})],o.prototype,"alwaysVisible",void 0);i([c({type:Number,attribute:"fast-scroll-sensitivity"})],o.prototype,"fastScrollSensitivity",void 0);i([c({type:Number,attribute:"min-thumb-size"})],o.prototype,"minThumbSize",void 0);i([c({type:Number,attribute:"mouse-wheel-scroll-sensitivity"})],o.prototype,"mouseWheelScrollSensitivity",void 0);i([c({type:Boolean,reflect:!0})],o.prototype,"shadow",void 0);i([c({type:Boolean,reflect:!0})],o.prototype,"scrolled",void 0);i([c({type:Number,attribute:"scroll-pos"})],o.prototype,"scrollPos",null);i([c({type:Number,attribute:"scroll-max"})],o.prototype,"scrollMax",null);i([a()],o.prototype,"_isDragging",void 0);i([a()],o.prototype,"_thumbHeight",void 0);i([a()],o.prototype,"_thumbY",void 0);i([a()],o.prototype,"_thumbVisible",void 0);i([a()],o.prototype,"_thumbFade",void 0);i([a()],o.prototype,"_thumbActive",void 0);i([m(".content")],o.prototype,"_contentElement",void 0);i([m(".scrollbar-thumb",!0)],o.prototype,"_scrollThumbElement",void 0);i([m(".scrollable-container")],o.prototype,"_scrollableContainer",void 0);i([T()],o.prototype,"_assignedElements",void 0);o=i([f("vscode-scrollable")],o);
