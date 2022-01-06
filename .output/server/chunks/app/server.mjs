import { g as getDefaultExportFromCjs, c as commonjsGlobal$1, v as vue_cjs_prod, s as serverRenderer, r as require$$0 } from '../index.mjs';
import { TransitionRoot } from '@headlessui/vue';
import { useMouse } from '@vueuse/core';
import { SearchIcon, HashtagIcon } from '@heroicons/vue/solid/index.js';
import 'unenv/runtime/mock/proxy';
import 'stream';

var vueSmoothScroll_min = {exports: {}};

(function (module, exports) {
!function(e,t){module.exports=t();}(commonjsGlobal$1,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o});},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0});},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i;n.r(t);var u=function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},c=function(){return {duration:500,offset:0,container:window,updateHistory:!0,easingFunction:null}},l=Symbol("smoothScrollCtx"),f=function(e){var t=e.scrollTo,n=e.offset,o=e.duration,r=e.container,c=e.updateHistory,l=e.hash,f=e.easingFunction;i||(i=window.requestAnimationFrame||function(e){return window.setTimeout(e,16)}),c&&window.history.pushState&&location.hash!==l&&window.history.pushState("","",l);var a,s,d="number"==typeof t,p=r.scrollTop||window.pageYOffset,y=(d?t:(s=p,"HTML"===(a=t).nodeName?-s:a.getBoundingClientRect().top+s))+n,b="function"==typeof f?f:u,m=Date.now();!function e(){var n=Date.now()-m,u=n<o,l=u?p+(y-p)*b(n/o):y;u?i(e):c&&!d&&location.replace("#"+t.id),r===window?r.scrollTo(0,l):r.scrollTop=l;}();},a={install:function(e,t){var n,i=!e.version.startsWith("3"),u=function(){return t?Object.assign(c(),t):c()};e.directive("smooth-scroll",(o(n={},i?"inserted":"mounted",(function(e,t,n){})),o(n,i?"unbind":"unmounted",(function(e){e.removeEventListener("click",e[l].clickHandler),e[l]=null;})),n));var a=function(e){var t=Object.assign(u(),e);return f(t)};(i?e.prototype:e.config.globalProperties).$smoothScroll=a,i||e.provide("smoothScroll",a);}};t.default=a;}]).default}));
}(vueSmoothScroll_min));

const VueSmoothScroll = /*@__PURE__*/getDefaultExportFromCjs(vueSmoothScroll_min.exports);

var carousel = {exports: {}};

/**
 * Vue 3 Carousel 0.1.35
 * (c) 2021
 * @license MIT
 */

(function (module, exports) {
(function (global, factory) {
  factory(exports, vue_cjs_prod) ;
})(commonjsGlobal$1, (function (exports, vue) {
  const defaultConfigs = {
      itemsToShow: 1,
      itemsToScroll: 1,
      modelValue: 0,
      transition: 300,
      autoplay: 0,
      snapAlign: 'center',
      wrapAround: false,
      pauseAutoplayOnHover: false,
      mouseDrag: true,
      touchDrag: true,
      breakpoints: undefined,
  };

  /**
   * return a debounced version of the function
   * @param fn
   * @param delay
   */
  function debounce(fn, delay) {
      let timerId;
      return function (...args) {
          if (timerId) {
              clearTimeout(timerId);
          }
          timerId = setTimeout(() => {
              fn(...args);
              timerId = null;
          }, delay);
      };
  }
  /**
   * return a throttle version of the function
   * Throttling
   *
   */
  function throttle(fn, limit) {
      let inThrottle;
      return function (...args) {
          const self = this;
          if (!inThrottle) {
              fn.apply(self, args);
              inThrottle = true;
              setTimeout(() => (inThrottle = false), limit);
          }
      };
  }
  function getSlidesVNodes(vNode) {
      var _a, _b, _c;
      // Return empty array if there's any node
      if (!vNode)
          return [];
      // Check if the Slides components are added directly without v-for (#72)
      if (((_b = (_a = vNode[0]) === null || _a === void 0 ? void 0 : _a.type) === null || _b === void 0 ? void 0 : _b.name) === 'CarouselSlide')
          return vNode;
      return ((_c = vNode[0]) === null || _c === void 0 ? void 0 : _c.children) || [];
  }
  function getMaxSlideIndex(config, slidesCount) {
      if (config.wrapAround) {
          return slidesCount - 1;
      }
      switch (config.snapAlign) {
          case 'start':
              return slidesCount - config.itemsToShow;
          case 'end':
              return slidesCount - 1;
          case 'center':
          case 'center-odd':
              return slidesCount - Math.ceil(config.itemsToShow / 2);
          case 'center-even':
              return slidesCount - Math.ceil(config.itemsToShow / 2);
          default:
              return 0;
      }
  }
  function getMinSlideIndex(config) {
      if (config.wrapAround) {
          return 0;
      }
      switch (config.snapAlign) {
          case 'start':
              return 0;
          case 'end':
              return config.itemsToShow - 1;
          case 'center':
          case 'center-odd':
              return Math.floor((config.itemsToShow - 1) / 2);
          case 'center-even':
              return Math.floor((config.itemsToShow - 2) / 2);
          default:
              return 0;
      }
  }
  function getCurrentSlideIndex(config, val, max, min) {
      if (config.wrapAround) {
          return val;
      }
      return Math.min(Math.max(val, min), max);
  }
  function getSlidesToScroll({ slidesBuffer, currentSlide, snapAlign, itemsToShow, wrapAround, slidesCount, }) {
      let output = slidesBuffer.indexOf(currentSlide);
      if (snapAlign === 'center' || snapAlign === 'center-odd') {
          output -= (itemsToShow - 1) / 2;
      }
      else if (snapAlign === 'center-even') {
          output -= (itemsToShow - 2) / 2;
      }
      else if (snapAlign === 'end') {
          output -= itemsToShow - 1;
      }
      if (!wrapAround) {
          const max = slidesCount - itemsToShow;
          const min = 0;
          output = Math.max(Math.min(output, max), min);
      }
      return output;
  }

  var Carousel = vue.defineComponent({
      name: 'Carousel',
      props: {
          // count of items to showed per view
          itemsToShow: {
              default: defaultConfigs.itemsToShow,
              type: Number,
          },
          // count of items to be scrolled
          itemsToScroll: {
              default: defaultConfigs.itemsToScroll,
              type: Number,
          },
          // control infinite scrolling mode
          wrapAround: {
              default: defaultConfigs.wrapAround,
              type: Boolean,
          },
          // control snap position alignment
          snapAlign: {
              default: defaultConfigs.snapAlign,
              validator(value) {
                  // The value must match one of these strings
                  return ['start', 'end', 'center', 'center-even', 'center-odd'].includes(value);
              },
          },
          // sliding transition time in ms
          transition: {
              default: defaultConfigs.transition,
              type: Number,
          },
          // an object to store breakpoints
          breakpoints: {
              default: defaultConfigs.breakpoints,
              type: Object,
          },
          // time to auto advance slides in ms
          autoplay: {
              default: defaultConfigs.autoplay,
              type: Number,
          },
          // pause autoplay when mouse hover over the carousel
          pauseAutoplayOnHover: {
              default: defaultConfigs.pauseAutoplayOnHover,
              type: Boolean,
          },
          // slide number number of initial slide
          modelValue: {
              default: undefined,
              type: Number,
          },
          // toggle mouse dragging.
          mouseDrag: {
              default: defaultConfigs.mouseDrag,
              type: Boolean,
          },
          // toggle mouse dragging.
          touchDrag: {
              default: defaultConfigs.touchDrag,
              type: Boolean,
          },
          // an object to pass all settings
          settings: {
              default() {
                  return {};
              },
              type: Object,
          },
      },
      setup(props, { slots, emit, expose }) {
          var _a;
          const root = vue.ref(null);
          const slides = vue.ref([]);
          const slidesBuffer = vue.ref([]);
          const slideWidth = vue.ref(0);
          const slidesCount = vue.ref(1);
          const autoplayTimer = vue.ref(null);
          const transitionTimer = vue.ref(null);
          let breakpoints = vue.ref({});
          // generate carousel configs
          let defaultConfig = Object.assign({}, defaultConfigs);
          // current config
          const config = vue.reactive(Object.assign({}, defaultConfigs));
          // slides
          const currentSlideIndex = vue.ref((_a = config.modelValue) !== null && _a !== void 0 ? _a : 0);
          const prevSlideIndex = vue.ref(0);
          const middleSlideIndex = vue.ref(0);
          const maxSlideIndex = vue.ref(0);
          const minSlideIndex = vue.ref(0);
          vue.provide('config', config);
          vue.provide('slidesBuffer', slidesBuffer);
          vue.provide('slidesCount', slidesCount);
          vue.provide('currentSlide', currentSlideIndex);
          vue.provide('maxSlide', maxSlideIndex);
          vue.provide('minSlide', minSlideIndex);
          /**
           * Configs
           */
          function initDefaultConfigs() {
              // generate carousel configs
              const mergedConfigs = Object.assign(Object.assign({}, props), props.settings);
              // Set breakpoints
              breakpoints = vue.ref(Object.assign({}, mergedConfigs.breakpoints));
              // remove extra values
              defaultConfig = Object.assign(Object.assign({}, mergedConfigs), { settings: undefined, breakpoints: undefined });
              bindConfigs(defaultConfig);
          }
          function updateBreakpointsConfigs() {
              const breakpointsArray = Object.keys(breakpoints.value)
                  .map((key) => Number(key))
                  .sort((a, b) => +b - +a);
              let newConfig = Object.assign({}, defaultConfig);
              breakpointsArray.some((breakpoint) => {
                  const isMatched = window.matchMedia(`(min-width: ${breakpoint}px)`).matches;
                  if (isMatched) {
                      newConfig = Object.assign(Object.assign({}, newConfig), breakpoints.value[breakpoint]);
                      return true;
                  }
                  return false;
              });
              bindConfigs(newConfig);
          }
          function bindConfigs(newConfig) {
              for (let key in newConfig) {
                  // @ts-ignore
                  config[key] = newConfig[key];
              }
          }
          const handleWindowResize = debounce(() => {
              if (breakpoints.value) {
                  updateBreakpointsConfigs();
                  updateSlidesData();
              }
              updateSlideWidth();
          }, 16);
          /**
           * Setup functions
           */
          function updateSlideWidth() {
              if (!root.value)
                  return;
              const rect = root.value.getBoundingClientRect();
              slideWidth.value = rect.width / config.itemsToShow;
          }
          function updateSlidesData() {
              slidesCount.value = slides.value.length;
              if (slidesCount.value <= 0)
                  return;
              middleSlideIndex.value = Math.ceil((slidesCount.value - 1) / 2);
              maxSlideIndex.value = getMaxSlideIndex(config, slidesCount.value);
              minSlideIndex.value = getMinSlideIndex(config);
              currentSlideIndex.value = getCurrentSlideIndex(config, currentSlideIndex.value, maxSlideIndex.value, minSlideIndex.value);
          }
          function updateSlidesBuffer() {
              const slidesArray = [...Array(slidesCount.value).keys()];
              const shouldShiftSlides = config.wrapAround && config.itemsToShow + 1 <= slidesCount.value;
              if (shouldShiftSlides) {
                  const buffer = config.itemsToShow !== 1
                      ? Math.round((slidesCount.value - config.itemsToShow) / 2)
                      : 0;
                  let shifts = buffer - currentSlideIndex.value;
                  if (config.snapAlign === 'end') {
                      shifts += Math.floor(config.itemsToShow - 1);
                  }
                  else if (config.snapAlign === 'center' || config.snapAlign === 'center-odd') {
                      shifts++;
                  }
                  // Check shifting directions
                  if (shifts < 0) {
                      for (let i = shifts; i < 0; i++) {
                          slidesArray.push(Number(slidesArray.shift()));
                      }
                  }
                  else {
                      for (let i = 0; i < shifts; i++) {
                          slidesArray.unshift(Number(slidesArray.pop()));
                      }
                  }
              }
              slidesBuffer.value = slidesArray;
          }
          vue.onMounted(() => {
              if (breakpoints.value) {
                  updateBreakpointsConfigs();
                  updateSlidesData();
              }
              updateSlideWidth();
              if (config.autoplay && config.autoplay > 0) {
                  initializeAutoplay();
              }
              window.addEventListener('resize', handleWindowResize, { passive: true });
          });
          vue.onUnmounted(() => {
              if (transitionTimer.value) {
                  clearTimeout(transitionTimer.value);
              }
              resetAutoplayTimer(false);
          });
          /**
           * Carousel Event listeners
           */
          let isTouch = false;
          const startPosition = { x: 0, y: 0 };
          const endPosition = { x: 0, y: 0 };
          const dragged = vue.reactive({ x: 0, y: 0 });
          const isDragging = vue.ref(false);
          const isHover = vue.ref(false);
          const handleMouseEnter = () => {
              isHover.value = true;
          };
          const handleMouseLeave = () => {
              isHover.value = false;
          };
          const handleDrag = throttle((event) => {
              if (!isTouch)
                  event.preventDefault();
              endPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
              endPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
              const deltaX = endPosition.x - startPosition.x;
              const deltaY = endPosition.y - startPosition.y;
              dragged.y = deltaY;
              dragged.x = deltaX;
          }, 16);
          function handleDragStart(event) {
              isTouch = event.type === 'touchstart';
              if (!isTouch)
                  event.preventDefault();
              if ((!isTouch && event.button !== 0) || isSliding.value) {
                  return;
              }
              isDragging.value = true;
              startPosition.x = isTouch ? event.touches[0].clientX : event.clientX;
              startPosition.y = isTouch ? event.touches[0].clientY : event.clientY;
              document.addEventListener(isTouch ? 'touchmove' : 'mousemove', handleDrag);
              document.addEventListener(isTouch ? 'touchend' : 'mouseup', handleDragEnd);
          }
          function handleDragEnd() {
              isDragging.value = false;
              const tolerance = Math.sign(dragged.x) * 0.4;
              const draggedSlides = Math.round(dragged.x / slideWidth.value + tolerance);
              let newSlide = getCurrentSlideIndex(config, currentSlideIndex.value - draggedSlides, maxSlideIndex.value, minSlideIndex.value);
              slideTo(newSlide);
              dragged.x = 0;
              dragged.y = 0;
              document.removeEventListener(isTouch ? 'touchmove' : 'mousemove', handleDrag);
              document.removeEventListener(isTouch ? 'touchend' : 'mouseup', handleDragEnd);
          }
          /**
           * Autoplay
           */
          function initializeAutoplay() {
              autoplayTimer.value = setInterval(() => {
                  if (config.pauseAutoplayOnHover && isHover.value) {
                      return;
                  }
                  next();
              }, config.autoplay);
          }
          function resetAutoplayTimer(restart = true) {
              if (!autoplayTimer.value) {
                  return;
              }
              clearInterval(autoplayTimer.value);
              if (restart) {
                  initializeAutoplay();
              }
          }
          /**
           * Navigation function
           */
          const isSliding = vue.ref(false);
          function slideTo(slideIndex, mute = false) {
              resetAutoplayTimer();
              if (currentSlideIndex.value === slideIndex || isSliding.value) {
                  return;
              }
              // Wrap slide index
              const lastSlideIndex = slidesCount.value - 1;
              if (slideIndex > lastSlideIndex) {
                  return slideTo(slideIndex - slidesCount.value);
              }
              if (slideIndex < 0) {
                  return slideTo(slideIndex + slidesCount.value);
              }
              isSliding.value = true;
              prevSlideIndex.value = currentSlideIndex.value;
              currentSlideIndex.value = slideIndex;
              if (!mute) {
                  emit('update:modelValue', currentSlideIndex.value);
              }
              transitionTimer.value = setTimeout(() => {
                  if (config.wrapAround)
                      updateSlidesBuffer();
                  isSliding.value = false;
              }, config.transition);
          }
          function next() {
              let nextSlide = currentSlideIndex.value + config.itemsToScroll;
              if (!config.wrapAround) {
                  nextSlide = Math.min(nextSlide, maxSlideIndex.value);
              }
              slideTo(nextSlide);
          }
          function prev() {
              let prevSlide = currentSlideIndex.value - config.itemsToScroll;
              if (!config.wrapAround) {
                  prevSlide = Math.max(prevSlide, minSlideIndex.value);
              }
              slideTo(prevSlide);
          }
          const nav = { slideTo, next, prev };
          vue.provide('nav', nav);
          /**
           * Track style
           */
          const slidesToScroll = vue.computed(() => getSlidesToScroll({
              slidesBuffer: slidesBuffer.value,
              itemsToShow: config.itemsToShow,
              snapAlign: config.snapAlign,
              wrapAround: Boolean(config.wrapAround),
              currentSlide: currentSlideIndex.value,
              slidesCount: slidesCount.value,
          }));
          vue.provide('slidesToScroll', slidesToScroll);
          const trackStyle = vue.computed(() => {
              const xScroll = dragged.x - slidesToScroll.value * slideWidth.value;
              return {
                  transform: `translateX(${xScroll}px)`,
                  transition: `${isSliding.value ? config.transition : 0}ms`,
              };
          });
          function initCarousel() {
              initDefaultConfigs();
          }
          function restartCarousel() {
              initDefaultConfigs();
              updateBreakpointsConfigs();
              updateSlidesData();
              updateSlidesBuffer();
              updateSlideWidth();
          }
          function updateCarousel() {
              updateSlidesData();
              updateSlidesBuffer();
          }
          // Update the carousel on props change
          vue.watch(props, restartCarousel);
          // Init carousel
          initCarousel();
          vue.watchEffect(() => {
              // Handel when slides added/removed
              const needToUpdate = slidesCount.value !== slides.value.length;
              const currentSlideUpdated = props.modelValue !== undefined && currentSlideIndex.value !== props.modelValue;
              if (currentSlideUpdated) {
                  slideTo(Number(props.modelValue), true);
              }
              if (needToUpdate) {
                  updateCarousel();
              }
          });
          const data = {
              config,
              slidesBuffer,
              slidesCount,
              slideWidth,
              currentSlide: currentSlideIndex,
              maxSlide: maxSlideIndex,
              minSlide: minSlideIndex,
              middleSlide: middleSlideIndex,
          };
          expose({
              updateBreakpointsConfigs,
              updateSlidesData,
              updateSlideWidth,
              updateSlidesBuffer,
              initCarousel,
              restartCarousel,
              updateCarousel,
              slideTo,
              next,
              prev,
              nav,
              data,
          });
          const slotSlides = slots.default || slots.slides;
          const slotAddons = slots.addons;
          const slotsProps = vue.reactive(data);
          return () => {
              const slidesElements = getSlidesVNodes(slotSlides === null || slotSlides === void 0 ? void 0 : slotSlides(slotsProps));
              const addonsElements = (slotAddons === null || slotAddons === void 0 ? void 0 : slotAddons(slotsProps)) || [];
              slides.value = slidesElements;
              // Bind slide order
              slidesElements.forEach((el, index) => (el.props.index = index));
              const trackEl = vue.h('ol', {
                  class: 'carousel__track',
                  style: trackStyle.value,
                  onMousedown: config.mouseDrag ? handleDragStart : null,
                  onTouchstart: config.touchDrag ? handleDragStart : null,
              }, slidesElements);
              const viewPortEl = vue.h('div', { class: 'carousel__viewport' }, trackEl);
              return vue.h('section', {
                  ref: root,
                  class: 'carousel',
                  'aria-label': 'Gallery',
                  onMouseenter: handleMouseEnter,
                  onMouseleave: handleMouseLeave,
              }, [viewPortEl, addonsElements]);
          };
      },
  });

  const icons = {
      arrowUp: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z',
      arrowDown: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
      arrowRight: 'M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z',
      arrowLeft: 'M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z',
  };

  const Icon = (props) => {
      const iconName = props.name;
      if (!iconName || typeof iconName !== 'string') {
          return;
      }
      const path = icons[iconName];
      const pathEl = vue.h('path', { d: path });
      props.title || iconName;
      const titleEl = vue.h('title', null, iconName);
      return vue.h('svg', {
          class: 'carousel__icon',
          viewBox: '0 0 24 24',
          role: 'img',
      }, [titleEl, pathEl]);
  };
  Icon.props = { name: String, title: String };

  const Navigation = (props, { slots, attrs }) => {
      const { next: slotNext, prev: slotPrev } = slots;
      const config = vue.inject('config', vue.reactive(Object.assign({}, defaultConfigs)));
      const maxSlide = vue.inject('maxSlide', vue.ref(1));
      const minSlide = vue.inject('minSlide', vue.ref(1));
      const currentSlide = vue.inject('currentSlide', vue.ref(1));
      const nav = vue.inject('nav', {});
      const prevButton = vue.h('button', {
          type: 'button',
          class: [
              'carousel__prev',
              (!config.wrapAround && currentSlide.value <= minSlide.value) && 'carousel__prev--in-active',
              attrs === null || attrs === void 0 ? void 0 : attrs.class
          ],
          'aria-label': `Navigate to previous slide`,
          onClick: nav.prev,
      }, (slotPrev === null || slotPrev === void 0 ? void 0 : slotPrev()) || vue.h(Icon, { name: 'arrowLeft' }));
      const nextButton = vue.h('button', {
          type: 'button',
          class: [
              'carousel__next',
              (!config.wrapAround && currentSlide.value >= maxSlide.value) && 'carousel__next--in-active',
              attrs === null || attrs === void 0 ? void 0 : attrs.class
          ],
          'aria-label': `Navigate to next slide`,
          onClick: nav.next,
      }, (slotNext === null || slotNext === void 0 ? void 0 : slotNext()) || vue.h(Icon, { name: 'arrowRight' }));
      return [prevButton, nextButton];
  };

  var Slide = vue.defineComponent({
      name: 'CarouselSlide',
      props: {
          index: {
              type: Number,
              default: 1,
          },
      },
      setup(props, { slots }) {
          const config = vue.inject('config', vue.reactive(Object.assign({}, defaultConfigs)));
          const slidesBuffer = vue.inject('slidesBuffer', vue.ref([]));
          const currentSlide = vue.inject('currentSlide', vue.ref(0));
          const slidesToScroll = vue.inject('slidesToScroll', vue.ref(0));
          const wrapOrder = vue.ref(props.index);
          if (config.wrapAround) {
              updateOrder();
              vue.watch(slidesBuffer, updateOrder);
          }
          function updateOrder() {
              wrapOrder.value = slidesBuffer.value.indexOf(props.index);
          }
          const slideStyle = vue.computed(() => {
              const items = config.itemsToShow;
              const width = `${(1 / items) * 100}%`;
              return {
                  width,
                  order: wrapOrder.value.toString(),
              };
          });
          const isActive = () => props.index === currentSlide.value;
          const isVisible = () => {
              const min = Math.ceil(slidesToScroll.value);
              const max = Math.floor(slidesToScroll.value + config.itemsToShow);
              const current = slidesBuffer.value.slice(min, max);
              return current.includes(props.index);
          };
          const isPrev = () => props.index === slidesBuffer.value[Math.ceil(slidesToScroll.value) - 1];
          const isNext = () => props.index ===
              slidesBuffer.value[Math.floor(slidesToScroll.value + config.itemsToShow)];
          return () => {
              var _a;
              return vue.h('li', {
                  style: slideStyle.value,
                  class: {
                      carousel__slide: true,
                      'carousel__slide--active': isActive(),
                      'carousel__slide--visible': isVisible(),
                      'carousel__slide--prev': isPrev(),
                      'carousel__slide--next': isNext(),
                  },
              }, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots));
          };
      },
  });

  const Pagination = () => {
      const maxSlide = vue.inject('maxSlide', vue.ref(1));
      const minSlide = vue.inject('minSlide', vue.ref(1));
      const currentSlide = vue.inject('currentSlide', vue.ref(1));
      const nav = vue.inject('nav', {});
      function handleButtonClick(slideNumber) {
          nav.slideTo(slideNumber);
      }
      const isActive = (slide) => {
          const val = currentSlide.value;
          return (val === slide ||
              (val > maxSlide.value && slide >= maxSlide.value) ||
              (val < minSlide.value && slide <= minSlide.value));
      };
      const children = [];
      for (let slide = minSlide.value; slide < maxSlide.value + 1; slide++) {
          const button = vue.h('button', {
              type: 'button',
              class: {
                  'carousel__pagination-button': true,
                  'carousel__pagination-button--active': isActive(slide),
              },
              'aria-label': `Navigate to slide ${slide + 1}`,
              onClick: () => handleButtonClick(slide),
          });
          const item = vue.h('li', { class: 'carousel__pagination-item', key: slide }, button);
          children.push(item);
      }
      return vue.h('ol', { class: 'carousel__pagination' }, children);
  };

  exports.Carousel = Carousel;
  exports.Icon = Icon;
  exports.Navigation = Navigation;
  exports.Pagination = Pagination;
  exports.Slide = Slide;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
}(carousel, carousel.exports));

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const entry$1 = (ctx) => Promise.resolve().then(function() {
  return bootstrap$1;
}).then((m) => m.default(ctx));
function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
function serialCaller(hooks, args) {
  return hooks.reduce((promise, hookFn) => promise.then(() => hookFn.apply(void 0, args)), Promise.resolve(null));
}
function parallelCaller(hooks, args) {
  return Promise.all(hooks.map((hook) => hook.apply(void 0, args)));
}
class Hookable {
  constructor() {
    this._hooks = {};
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, fn) {
    if (!name || typeof fn !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let deprecatedHookObj;
    while (this._deprecatedHooks[name]) {
      const deprecatedHook = this._deprecatedHooks[name];
      if (typeof deprecatedHook === "string") {
        deprecatedHookObj = { to: deprecatedHook };
      } else {
        deprecatedHookObj = deprecatedHook;
      }
      name = deprecatedHookObj.to;
    }
    if (deprecatedHookObj) {
      if (!deprecatedHookObj.message) {
        console.warn(`${originalName} hook has been deprecated` + (deprecatedHookObj.to ? `, please use ${deprecatedHookObj.to}` : ""));
      } else {
        console.warn(deprecatedHookObj.message);
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(fn);
    return () => {
      if (fn) {
        this.removeHook(name, fn);
        fn = null;
      }
    };
  }
  hookOnce(name, fn) {
    let _unreg;
    let _fn = (...args) => {
      _unreg();
      _unreg = null;
      _fn = null;
      return fn(...args);
    };
    _unreg = this.hook(name, _fn);
    return _unreg;
  }
  removeHook(name, fn) {
    if (this._hooks[name]) {
      const idx = this._hooks[name].indexOf(fn);
      if (idx !== -1) {
        this._hooks[name].splice(idx, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = deprecated;
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map((key) => this.hook(key, hooks[key]));
    return () => {
      removeFns.splice(0, removeFns.length).forEach((unreg) => unreg());
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  callHook(name, ...args) {
    return serialCaller(this._hooks[name] || [], args);
  }
  callHookParallel(name, ...args) {
    return parallelCaller(this._hooks[name] || [], args);
  }
  callHookWith(caller, name, ...args) {
    return caller(this._hooks[name] || [], args);
  }
}
function createHooks() {
  return new Hookable();
}
function createMock(name, overrides = {}) {
  const fn = function() {
  };
  fn.prototype.name = name;
  const props = {};
  return new Proxy(fn, {
    get(_target, prop) {
      if (prop === "caller") {
        return null;
      }
      if (prop === "__createMock__") {
        return createMock;
      }
      if (prop in overrides) {
        return overrides[prop];
      }
      return props[prop] = props[prop] || createMock(`${name}.${prop.toString()}`);
    },
    apply(_target, _this, _args) {
      return createMock(`${name}()`);
    },
    construct(_target, _args, _newT) {
      return createMock(`[${name}]`);
    },
    enumerate(_target) {
      return [];
    }
  });
}
const mockContext = createMock("mock");
function mock(warning) {
  console.warn(warning);
  return mockContext;
}
const unsupported = new Set([
  "store",
  "spa",
  "fetchCounters"
]);
const todo = new Set([
  "isHMR",
  "base",
  "payload",
  "from",
  "next",
  "error",
  "redirect",
  "redirected",
  "enablePreview",
  "$preview",
  "beforeNuxtRender",
  "beforeSerialize"
]);
const routerKeys = ["route", "params", "query"];
const staticFlags = {
  isClient: false,
  isServer: true,
  isDev: false,
  isStatic: void 0,
  target: "server",
  modern: false
};
const legacyPlugin = (nuxtApp) => {
  nuxtApp._legacyContext = new Proxy(nuxtApp, {
    get(nuxt, p) {
      if (unsupported.has(p)) {
        return mock(`Accessing ${p} is not supported in Nuxt 3.`);
      }
      if (todo.has(p)) {
        return mock(`Accessing ${p} is not yet supported in Nuxt 3.`);
      }
      if (routerKeys.includes(p)) {
        if (!("$router" in nuxtApp)) {
          return mock("vue-router is not being used in this project.");
        }
        switch (p) {
          case "route":
            return nuxt.$router.currentRoute.value;
          case "params":
          case "query":
            return nuxt.$router.currentRoute.value[p];
        }
      }
      if (p === "$config" || p === "env") {
        return useRuntimeConfig();
      }
      if (p in staticFlags) {
        return staticFlags[p];
      }
      if (p === "ssrContext") {
        return nuxt._legacyContext;
      }
      if (nuxt.ssrContext && p in nuxt.ssrContext) {
        return nuxt.ssrContext[p];
      }
      if (p === "nuxt") {
        return nuxt.payload;
      }
      if (p === "nuxtState") {
        return nuxt.payload.data;
      }
      if (p in nuxtApp.vueApp) {
        return nuxtApp.vueApp[p];
      }
      if (p in nuxtApp) {
        return nuxtApp[p];
      }
      return mock(`Accessing ${p} is not supported in Nuxt3.`);
    }
  });
};
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  const nuxtApp = __spreadValues({
    provide: void 0,
    globalName: "nuxt",
    payload: vue_cjs_prod.reactive(__spreadValues({
      data: {},
      state: {},
      _errors: {}
    }, { serverRendered: true })),
    isHydrating: false,
    _asyncDataPromises: {}
  }, options);
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  if (nuxtApp.ssrContext) {
    nuxtApp.ssrContext.nuxt = nuxtApp;
  }
  {
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    nuxtApp.ssrContext.payload = nuxtApp.payload;
  }
  {
    nuxtApp.provide("config", options.ssrContext.runtimeConfig.private);
    nuxtApp.payload.config = options.ssrContext.runtimeConfig.public;
  }
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin) {
  if (typeof plugin !== "function") {
    return;
  }
  const { provide } = await callWithNuxt(nuxtApp, () => plugin(nuxtApp)) || {};
  if (provide && typeof provide === "object") {
    for (const key in provide) {
      nuxtApp.provide(key, provide[key]);
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  for (const plugin of plugins2) {
    await applyPlugin(nuxtApp, plugin);
  }
}
function normalizePlugins(_plugins2) {
  let needsLegacyContext = false;
  const plugins2 = _plugins2.map((plugin) => {
    if (typeof plugin !== "function") {
      return () => {
      };
    }
    if (isLegacyPlugin(plugin)) {
      needsLegacyContext = true;
      return (nuxtApp) => plugin(nuxtApp._legacyContext, nuxtApp.provide);
    }
    return plugin;
  });
  if (needsLegacyContext) {
    plugins2.unshift(legacyPlugin);
  }
  return plugins2;
}
function defineNuxtPlugin(plugin) {
  plugin[NuxtPluginIndicator] = true;
  return plugin;
}
function isLegacyPlugin(plugin) {
  return !plugin[NuxtPluginIndicator];
}
let currentNuxtAppInstance;
const setNuxtAppInstance = (nuxt) => {
  currentNuxtAppInstance = nuxt;
};
function callWithNuxt(nuxt, setup) {
  setNuxtAppInstance(nuxt);
  const p = setup();
  {
    setNuxtAppInstance(null);
  }
  return p;
}
function useNuxtApp() {
  const vm = vue_cjs_prod.getCurrentInstance();
  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt instance unavailable");
    }
    return currentNuxtAppInstance;
  }
  return vm.appContext.app.$nuxt;
}
function useRuntimeConfig() {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var vueRouter_cjs_prod = {};
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  var vue = require$$0;
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const PolySymbol = (name) => hasSymbol ? Symbol(name) : "_vr_" + name;
  const matchedRouteKey = /* @__PURE__ */ PolySymbol("rvlm");
  const viewDepthKey = /* @__PURE__ */ PolySymbol("rvd");
  const routerKey = /* @__PURE__ */ PolySymbol("r");
  const routeLocationKey = /* @__PURE__ */ PolySymbol("rl");
  const routerViewLocationKey = /* @__PURE__ */ PolySymbol("rvl");
  function isESModule(obj) {
    return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === "Module";
  }
  const assign = Object.assign;
  function applyToParams(fn, params) {
    const newParams = {};
    for (const key in params) {
      const value = params[key];
      newParams[key] = Array.isArray(value) ? value.map(fn) : fn(value);
    }
    return newParams;
  }
  const noop = () => {
  };
  const TRAILING_SLASH_RE2 = /\/$/;
  const removeTrailingSlash = (path) => path.replace(TRAILING_SLASH_RE2, "");
  function parseURL2(parseQuery3, location2, currentLocation = "/") {
    let path, query = {}, searchString = "", hash = "";
    const searchPos = location2.indexOf("?");
    const hashPos = location2.indexOf("#", searchPos > -1 ? searchPos : 0);
    if (searchPos > -1) {
      path = location2.slice(0, searchPos);
      searchString = location2.slice(searchPos + 1, hashPos > -1 ? hashPos : location2.length);
      query = parseQuery3(searchString);
    }
    if (hashPos > -1) {
      path = path || location2.slice(0, hashPos);
      hash = location2.slice(hashPos, location2.length);
    }
    path = resolveRelativePath(path != null ? path : location2, currentLocation);
    return {
      fullPath: path + (searchString && "?") + searchString + hash,
      path,
      query,
      hash
    };
  }
  function stringifyURL(stringifyQuery3, location2) {
    const query = location2.query ? stringifyQuery3(location2.query) : "";
    return location2.path + (query && "?") + query + (location2.hash || "");
  }
  function stripBase(pathname, base) {
    if (!base || !pathname.toLowerCase().startsWith(base.toLowerCase()))
      return pathname;
    return pathname.slice(base.length) || "/";
  }
  function isSameRouteLocation(stringifyQuery3, a, b) {
    const aLastIndex = a.matched.length - 1;
    const bLastIndex = b.matched.length - 1;
    return aLastIndex > -1 && aLastIndex === bLastIndex && isSameRouteRecord(a.matched[aLastIndex], b.matched[bLastIndex]) && isSameRouteLocationParams(a.params, b.params) && stringifyQuery3(a.query) === stringifyQuery3(b.query) && a.hash === b.hash;
  }
  function isSameRouteRecord(a, b) {
    return (a.aliasOf || a) === (b.aliasOf || b);
  }
  function isSameRouteLocationParams(a, b) {
    if (Object.keys(a).length !== Object.keys(b).length)
      return false;
    for (const key in a) {
      if (!isSameRouteLocationParamsValue(a[key], b[key]))
        return false;
    }
    return true;
  }
  function isSameRouteLocationParamsValue(a, b) {
    return Array.isArray(a) ? isEquivalentArray(a, b) : Array.isArray(b) ? isEquivalentArray(b, a) : a === b;
  }
  function isEquivalentArray(a, b) {
    return Array.isArray(b) ? a.length === b.length && a.every((value, i) => value === b[i]) : a.length === 1 && a[0] === b;
  }
  function resolveRelativePath(to, from) {
    if (to.startsWith("/"))
      return to;
    if (!to)
      return from;
    const fromSegments = from.split("/");
    const toSegments = to.split("/");
    let position = fromSegments.length - 1;
    let toPosition;
    let segment;
    for (toPosition = 0; toPosition < toSegments.length; toPosition++) {
      segment = toSegments[toPosition];
      if (position === 1 || segment === ".")
        continue;
      if (segment === "..")
        position--;
      else
        break;
    }
    return fromSegments.slice(0, position).join("/") + "/" + toSegments.slice(toPosition - (toPosition === toSegments.length ? 1 : 0)).join("/");
  }
  var NavigationType;
  (function(NavigationType2) {
    NavigationType2["pop"] = "pop";
    NavigationType2["push"] = "push";
  })(NavigationType || (NavigationType = {}));
  var NavigationDirection;
  (function(NavigationDirection2) {
    NavigationDirection2["back"] = "back";
    NavigationDirection2["forward"] = "forward";
    NavigationDirection2["unknown"] = "";
  })(NavigationDirection || (NavigationDirection = {}));
  const START = "";
  function normalizeBase(base) {
    if (!base) {
      {
        base = "/";
      }
    }
    if (base[0] !== "/" && base[0] !== "#")
      base = "/" + base;
    return removeTrailingSlash(base);
  }
  const BEFORE_HASH_RE = /^[^#]+#/;
  function createHref(base, location2) {
    return base.replace(BEFORE_HASH_RE, "#") + location2;
  }
  const computeScrollPosition = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
  });
  let createBaseLocation = () => location.protocol + "//" + location.host;
  function createCurrentLocation(base, location2) {
    const { pathname, search, hash } = location2;
    const hashPos = base.indexOf("#");
    if (hashPos > -1) {
      let slicePos = hash.includes(base.slice(hashPos)) ? base.slice(hashPos).length : 1;
      let pathFromHash = hash.slice(slicePos);
      if (pathFromHash[0] !== "/")
        pathFromHash = "/" + pathFromHash;
      return stripBase(pathFromHash, "");
    }
    const path = stripBase(pathname, base);
    return path + search + hash;
  }
  function useHistoryListeners(base, historyState, currentLocation, replace) {
    let listeners = [];
    let teardowns = [];
    let pauseState = null;
    const popStateHandler = ({ state }) => {
      const to = createCurrentLocation(base, location);
      const from = currentLocation.value;
      const fromState = historyState.value;
      let delta = 0;
      if (state) {
        currentLocation.value = to;
        historyState.value = state;
        if (pauseState && pauseState === from) {
          pauseState = null;
          return;
        }
        delta = fromState ? state.position - fromState.position : 0;
      } else {
        replace(to);
      }
      listeners.forEach((listener) => {
        listener(currentLocation.value, from, {
          delta,
          type: NavigationType.pop,
          direction: delta ? delta > 0 ? NavigationDirection.forward : NavigationDirection.back : NavigationDirection.unknown
        });
      });
    };
    function pauseListeners() {
      pauseState = currentLocation.value;
    }
    function listen(callback) {
      listeners.push(callback);
      const teardown = () => {
        const index2 = listeners.indexOf(callback);
        if (index2 > -1)
          listeners.splice(index2, 1);
      };
      teardowns.push(teardown);
      return teardown;
    }
    function beforeUnloadListener() {
      const { history: history2 } = window;
      if (!history2.state)
        return;
      history2.replaceState(assign({}, history2.state, { scroll: computeScrollPosition() }), "");
    }
    function destroy() {
      for (const teardown of teardowns)
        teardown();
      teardowns = [];
      window.removeEventListener("popstate", popStateHandler);
      window.removeEventListener("beforeunload", beforeUnloadListener);
    }
    window.addEventListener("popstate", popStateHandler);
    window.addEventListener("beforeunload", beforeUnloadListener);
    return {
      pauseListeners,
      listen,
      destroy
    };
  }
  function buildState(back, current, forward, replaced = false, computeScroll = false) {
    return {
      back,
      current,
      forward,
      replaced,
      position: window.history.length,
      scroll: computeScroll ? computeScrollPosition() : null
    };
  }
  function useHistoryStateNavigation(base) {
    const { history: history2, location: location2 } = window;
    const currentLocation = {
      value: createCurrentLocation(base, location2)
    };
    const historyState = { value: history2.state };
    if (!historyState.value) {
      changeLocation(currentLocation.value, {
        back: null,
        current: currentLocation.value,
        forward: null,
        position: history2.length - 1,
        replaced: true,
        scroll: null
      }, true);
    }
    function changeLocation(to, state, replace2) {
      const hashIndex = base.indexOf("#");
      const url = hashIndex > -1 ? (location2.host && document.querySelector("base") ? base : base.slice(hashIndex)) + to : createBaseLocation() + base + to;
      try {
        history2[replace2 ? "replaceState" : "pushState"](state, "", url);
        historyState.value = state;
      } catch (err) {
        {
          console.error(err);
        }
        location2[replace2 ? "replace" : "assign"](url);
      }
    }
    function replace(to, data) {
      const state = assign({}, history2.state, buildState(historyState.value.back, to, historyState.value.forward, true), data, { position: historyState.value.position });
      changeLocation(to, state, true);
      currentLocation.value = to;
    }
    function push(to, data) {
      const currentState = assign({}, historyState.value, history2.state, {
        forward: to,
        scroll: computeScrollPosition()
      });
      changeLocation(currentState.current, currentState, true);
      const state = assign({}, buildState(currentLocation.value, to, null), { position: currentState.position + 1 }, data);
      changeLocation(to, state, false);
      currentLocation.value = to;
    }
    return {
      location: currentLocation,
      state: historyState,
      push,
      replace
    };
  }
  function createWebHistory(base) {
    base = normalizeBase(base);
    const historyNavigation = useHistoryStateNavigation(base);
    const historyListeners = useHistoryListeners(base, historyNavigation.state, historyNavigation.location, historyNavigation.replace);
    function go(delta, triggerListeners = true) {
      if (!triggerListeners)
        historyListeners.pauseListeners();
      history.go(delta);
    }
    const routerHistory = assign({
      location: "",
      base,
      go,
      createHref: createHref.bind(null, base)
    }, historyNavigation, historyListeners);
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => historyNavigation.location.value
    });
    Object.defineProperty(routerHistory, "state", {
      enumerable: true,
      get: () => historyNavigation.state.value
    });
    return routerHistory;
  }
  function createMemoryHistory(base = "") {
    let listeners = [];
    let queue = [START];
    let position = 0;
    base = normalizeBase(base);
    function setLocation(location2) {
      position++;
      if (position === queue.length) {
        queue.push(location2);
      } else {
        queue.splice(position);
        queue.push(location2);
      }
    }
    function triggerListeners(to, from, { direction, delta }) {
      const info = {
        direction,
        delta,
        type: NavigationType.pop
      };
      for (const callback of listeners) {
        callback(to, from, info);
      }
    }
    const routerHistory = {
      location: START,
      state: {},
      base,
      createHref: createHref.bind(null, base),
      replace(to) {
        queue.splice(position--, 1);
        setLocation(to);
      },
      push(to, data) {
        setLocation(to);
      },
      listen(callback) {
        listeners.push(callback);
        return () => {
          const index2 = listeners.indexOf(callback);
          if (index2 > -1)
            listeners.splice(index2, 1);
        };
      },
      destroy() {
        listeners = [];
        queue = [START];
        position = 0;
      },
      go(delta, shouldTrigger = true) {
        const from = this.location;
        const direction = delta < 0 ? NavigationDirection.back : NavigationDirection.forward;
        position = Math.max(0, Math.min(position + delta, queue.length - 1));
        if (shouldTrigger) {
          triggerListeners(this.location, from, {
            direction,
            delta
          });
        }
      }
    };
    Object.defineProperty(routerHistory, "location", {
      enumerable: true,
      get: () => queue[position]
    });
    return routerHistory;
  }
  function createWebHashHistory(base) {
    base = location.host ? base || location.pathname + location.search : "";
    if (!base.includes("#"))
      base += "#";
    return createWebHistory(base);
  }
  function isRouteLocation(route) {
    return typeof route === "string" || route && typeof route === "object";
  }
  function isRouteName(name) {
    return typeof name === "string" || typeof name === "symbol";
  }
  const START_LOCATION_NORMALIZED = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0
  };
  const NavigationFailureSymbol = /* @__PURE__ */ PolySymbol("nf");
  exports.NavigationFailureType = void 0;
  (function(NavigationFailureType) {
    NavigationFailureType[NavigationFailureType["aborted"] = 4] = "aborted";
    NavigationFailureType[NavigationFailureType["cancelled"] = 8] = "cancelled";
    NavigationFailureType[NavigationFailureType["duplicated"] = 16] = "duplicated";
  })(exports.NavigationFailureType || (exports.NavigationFailureType = {}));
  const ErrorTypeMessages = {
    [1]({ location: location2, currentLocation }) {
      return `No match for
 ${JSON.stringify(location2)}${currentLocation ? "\nwhile being at\n" + JSON.stringify(currentLocation) : ""}`;
    },
    [2]({ from, to }) {
      return `Redirected from "${from.fullPath}" to "${stringifyRoute(to)}" via a navigation guard.`;
    },
    [4]({ from, to }) {
      return `Navigation aborted from "${from.fullPath}" to "${to.fullPath}" via a navigation guard.`;
    },
    [8]({ from, to }) {
      return `Navigation cancelled from "${from.fullPath}" to "${to.fullPath}" with a new navigation.`;
    },
    [16]({ from, to }) {
      return `Avoided redundant navigation to current location: "${from.fullPath}".`;
    }
  };
  function createRouterError(type, params) {
    {
      return assign(new Error(ErrorTypeMessages[type](params)), {
        type,
        [NavigationFailureSymbol]: true
      }, params);
    }
  }
  function isNavigationFailure(error, type) {
    return error instanceof Error && NavigationFailureSymbol in error && (type == null || !!(error.type & type));
  }
  const propertiesToLog = ["params", "query", "hash"];
  function stringifyRoute(to) {
    if (typeof to === "string")
      return to;
    if ("path" in to)
      return to.path;
    const location2 = {};
    for (const key of propertiesToLog) {
      if (key in to)
        location2[key] = to[key];
    }
    return JSON.stringify(location2, null, 2);
  }
  const BASE_PARAM_PATTERN = "[^/]+?";
  const BASE_PATH_PARSER_OPTIONS = {
    sensitive: false,
    strict: false,
    start: true,
    end: true
  };
  const REGEX_CHARS_RE = /[.+*?^${}()[\]/\\]/g;
  function tokensToParser(segments, extraOptions) {
    const options = assign({}, BASE_PATH_PARSER_OPTIONS, extraOptions);
    const score = [];
    let pattern = options.start ? "^" : "";
    const keys = [];
    for (const segment of segments) {
      const segmentScores = segment.length ? [] : [90];
      if (options.strict && !segment.length)
        pattern += "/";
      for (let tokenIndex = 0; tokenIndex < segment.length; tokenIndex++) {
        const token = segment[tokenIndex];
        let subSegmentScore = 40 + (options.sensitive ? 0.25 : 0);
        if (token.type === 0) {
          if (!tokenIndex)
            pattern += "/";
          pattern += token.value.replace(REGEX_CHARS_RE, "\\$&");
          subSegmentScore += 40;
        } else if (token.type === 1) {
          const { value, repeatable, optional, regexp } = token;
          keys.push({
            name: value,
            repeatable,
            optional
          });
          const re2 = regexp ? regexp : BASE_PARAM_PATTERN;
          if (re2 !== BASE_PARAM_PATTERN) {
            subSegmentScore += 10;
            try {
              new RegExp(`(${re2})`);
            } catch (err) {
              throw new Error(`Invalid custom RegExp for param "${value}" (${re2}): ` + err.message);
            }
          }
          let subPattern = repeatable ? `((?:${re2})(?:/(?:${re2}))*)` : `(${re2})`;
          if (!tokenIndex)
            subPattern = optional && segment.length < 2 ? `(?:/${subPattern})` : "/" + subPattern;
          if (optional)
            subPattern += "?";
          pattern += subPattern;
          subSegmentScore += 20;
          if (optional)
            subSegmentScore += -8;
          if (repeatable)
            subSegmentScore += -20;
          if (re2 === ".*")
            subSegmentScore += -50;
        }
        segmentScores.push(subSegmentScore);
      }
      score.push(segmentScores);
    }
    if (options.strict && options.end) {
      const i = score.length - 1;
      score[i][score[i].length - 1] += 0.7000000000000001;
    }
    if (!options.strict)
      pattern += "/?";
    if (options.end)
      pattern += "$";
    else if (options.strict)
      pattern += "(?:/|$)";
    const re = new RegExp(pattern, options.sensitive ? "" : "i");
    function parse(path) {
      const match = path.match(re);
      const params = {};
      if (!match)
        return null;
      for (let i = 1; i < match.length; i++) {
        const value = match[i] || "";
        const key = keys[i - 1];
        params[key.name] = value && key.repeatable ? value.split("/") : value;
      }
      return params;
    }
    function stringify(params) {
      let path = "";
      let avoidDuplicatedSlash = false;
      for (const segment of segments) {
        if (!avoidDuplicatedSlash || !path.endsWith("/"))
          path += "/";
        avoidDuplicatedSlash = false;
        for (const token of segment) {
          if (token.type === 0) {
            path += token.value;
          } else if (token.type === 1) {
            const { value, repeatable, optional } = token;
            const param = value in params ? params[value] : "";
            if (Array.isArray(param) && !repeatable)
              throw new Error(`Provided param "${value}" is an array but it is not repeatable (* or + modifiers)`);
            const text = Array.isArray(param) ? param.join("/") : param;
            if (!text) {
              if (optional) {
                if (segment.length < 2) {
                  if (path.endsWith("/"))
                    path = path.slice(0, -1);
                  else
                    avoidDuplicatedSlash = true;
                }
              } else
                throw new Error(`Missing required param "${value}"`);
            }
            path += text;
          }
        }
      }
      return path;
    }
    return {
      re,
      score,
      keys,
      parse,
      stringify
    };
  }
  function compareScoreArray(a, b) {
    let i = 0;
    while (i < a.length && i < b.length) {
      const diff = b[i] - a[i];
      if (diff)
        return diff;
      i++;
    }
    if (a.length < b.length) {
      return a.length === 1 && a[0] === 40 + 40 ? -1 : 1;
    } else if (a.length > b.length) {
      return b.length === 1 && b[0] === 40 + 40 ? 1 : -1;
    }
    return 0;
  }
  function comparePathParserScore(a, b) {
    let i = 0;
    const aScore = a.score;
    const bScore = b.score;
    while (i < aScore.length && i < bScore.length) {
      const comp = compareScoreArray(aScore[i], bScore[i]);
      if (comp)
        return comp;
      i++;
    }
    return bScore.length - aScore.length;
  }
  const ROOT_TOKEN = {
    type: 0,
    value: ""
  };
  const VALID_PARAM_RE = /[a-zA-Z0-9_]/;
  function tokenizePath(path) {
    if (!path)
      return [[]];
    if (path === "/")
      return [[ROOT_TOKEN]];
    if (!path.startsWith("/")) {
      throw new Error(`Invalid path "${path}"`);
    }
    function crash(message) {
      throw new Error(`ERR (${state})/"${buffer}": ${message}`);
    }
    let state = 0;
    let previousState = state;
    const tokens = [];
    let segment;
    function finalizeSegment() {
      if (segment)
        tokens.push(segment);
      segment = [];
    }
    let i = 0;
    let char;
    let buffer = "";
    let customRe = "";
    function consumeBuffer() {
      if (!buffer)
        return;
      if (state === 0) {
        segment.push({
          type: 0,
          value: buffer
        });
      } else if (state === 1 || state === 2 || state === 3) {
        if (segment.length > 1 && (char === "*" || char === "+"))
          crash(`A repeatable param (${buffer}) must be alone in its segment. eg: '/:ids+.`);
        segment.push({
          type: 1,
          value: buffer,
          regexp: customRe,
          repeatable: char === "*" || char === "+",
          optional: char === "*" || char === "?"
        });
      } else {
        crash("Invalid state to consume buffer");
      }
      buffer = "";
    }
    function addCharToBuffer() {
      buffer += char;
    }
    while (i < path.length) {
      char = path[i++];
      if (char === "\\" && state !== 2) {
        previousState = state;
        state = 4;
        continue;
      }
      switch (state) {
        case 0:
          if (char === "/") {
            if (buffer) {
              consumeBuffer();
            }
            finalizeSegment();
          } else if (char === ":") {
            consumeBuffer();
            state = 1;
          } else {
            addCharToBuffer();
          }
          break;
        case 4:
          addCharToBuffer();
          state = previousState;
          break;
        case 1:
          if (char === "(") {
            state = 2;
          } else if (VALID_PARAM_RE.test(char)) {
            addCharToBuffer();
          } else {
            consumeBuffer();
            state = 0;
            if (char !== "*" && char !== "?" && char !== "+")
              i--;
          }
          break;
        case 2:
          if (char === ")") {
            if (customRe[customRe.length - 1] == "\\")
              customRe = customRe.slice(0, -1) + char;
            else
              state = 3;
          } else {
            customRe += char;
          }
          break;
        case 3:
          consumeBuffer();
          state = 0;
          if (char !== "*" && char !== "?" && char !== "+")
            i--;
          customRe = "";
          break;
        default:
          crash("Unknown state");
          break;
      }
    }
    if (state === 2)
      crash(`Unfinished custom RegExp for param "${buffer}"`);
    consumeBuffer();
    finalizeSegment();
    return tokens;
  }
  function createRouteRecordMatcher(record, parent, options) {
    const parser = tokensToParser(tokenizePath(record.path), options);
    const matcher = assign(parser, {
      record,
      parent,
      children: [],
      alias: []
    });
    if (parent) {
      if (!matcher.record.aliasOf === !parent.record.aliasOf)
        parent.children.push(matcher);
    }
    return matcher;
  }
  function createRouterMatcher(routes2, globalOptions) {
    const matchers = [];
    const matcherMap = new Map();
    globalOptions = mergeOptions({ strict: false, end: true, sensitive: false }, globalOptions);
    function getRecordMatcher(name) {
      return matcherMap.get(name);
    }
    function addRoute(record, parent, originalRecord) {
      const isRootAdd = !originalRecord;
      const mainNormalizedRecord = normalizeRouteRecord(record);
      mainNormalizedRecord.aliasOf = originalRecord && originalRecord.record;
      const options = mergeOptions(globalOptions, record);
      const normalizedRecords = [
        mainNormalizedRecord
      ];
      if ("alias" in record) {
        const aliases = typeof record.alias === "string" ? [record.alias] : record.alias;
        for (const alias of aliases) {
          normalizedRecords.push(assign({}, mainNormalizedRecord, {
            components: originalRecord ? originalRecord.record.components : mainNormalizedRecord.components,
            path: alias,
            aliasOf: originalRecord ? originalRecord.record : mainNormalizedRecord
          }));
        }
      }
      let matcher;
      let originalMatcher;
      for (const normalizedRecord of normalizedRecords) {
        const { path } = normalizedRecord;
        if (parent && path[0] !== "/") {
          const parentPath = parent.record.path;
          const connectingSlash = parentPath[parentPath.length - 1] === "/" ? "" : "/";
          normalizedRecord.path = parent.record.path + (path && connectingSlash + path);
        }
        matcher = createRouteRecordMatcher(normalizedRecord, parent, options);
        if (originalRecord) {
          originalRecord.alias.push(matcher);
        } else {
          originalMatcher = originalMatcher || matcher;
          if (originalMatcher !== matcher)
            originalMatcher.alias.push(matcher);
          if (isRootAdd && record.name && !isAliasRecord(matcher))
            removeRoute(record.name);
        }
        if ("children" in mainNormalizedRecord) {
          const children = mainNormalizedRecord.children;
          for (let i = 0; i < children.length; i++) {
            addRoute(children[i], matcher, originalRecord && originalRecord.children[i]);
          }
        }
        originalRecord = originalRecord || matcher;
        insertMatcher(matcher);
      }
      return originalMatcher ? () => {
        removeRoute(originalMatcher);
      } : noop;
    }
    function removeRoute(matcherRef) {
      if (isRouteName(matcherRef)) {
        const matcher = matcherMap.get(matcherRef);
        if (matcher) {
          matcherMap.delete(matcherRef);
          matchers.splice(matchers.indexOf(matcher), 1);
          matcher.children.forEach(removeRoute);
          matcher.alias.forEach(removeRoute);
        }
      } else {
        const index2 = matchers.indexOf(matcherRef);
        if (index2 > -1) {
          matchers.splice(index2, 1);
          if (matcherRef.record.name)
            matcherMap.delete(matcherRef.record.name);
          matcherRef.children.forEach(removeRoute);
          matcherRef.alias.forEach(removeRoute);
        }
      }
    }
    function getRoutes() {
      return matchers;
    }
    function insertMatcher(matcher) {
      let i = 0;
      while (i < matchers.length && comparePathParserScore(matcher, matchers[i]) >= 0)
        i++;
      matchers.splice(i, 0, matcher);
      if (matcher.record.name && !isAliasRecord(matcher))
        matcherMap.set(matcher.record.name, matcher);
    }
    function resolve(location2, currentLocation) {
      let matcher;
      let params = {};
      let path;
      let name;
      if ("name" in location2 && location2.name) {
        matcher = matcherMap.get(location2.name);
        if (!matcher)
          throw createRouterError(1, {
            location: location2
          });
        name = matcher.record.name;
        params = assign(paramsFromLocation(currentLocation.params, matcher.keys.filter((k) => !k.optional).map((k) => k.name)), location2.params);
        path = matcher.stringify(params);
      } else if ("path" in location2) {
        path = location2.path;
        matcher = matchers.find((m) => m.re.test(path));
        if (matcher) {
          params = matcher.parse(path);
          name = matcher.record.name;
        }
      } else {
        matcher = currentLocation.name ? matcherMap.get(currentLocation.name) : matchers.find((m) => m.re.test(currentLocation.path));
        if (!matcher)
          throw createRouterError(1, {
            location: location2,
            currentLocation
          });
        name = matcher.record.name;
        params = assign({}, currentLocation.params, location2.params);
        path = matcher.stringify(params);
      }
      const matched = [];
      let parentMatcher = matcher;
      while (parentMatcher) {
        matched.unshift(parentMatcher.record);
        parentMatcher = parentMatcher.parent;
      }
      return {
        name,
        path,
        params,
        matched,
        meta: mergeMetaFields(matched)
      };
    }
    routes2.forEach((route) => addRoute(route));
    return { addRoute, resolve, removeRoute, getRoutes, getRecordMatcher };
  }
  function paramsFromLocation(params, keys) {
    const newParams = {};
    for (const key of keys) {
      if (key in params)
        newParams[key] = params[key];
    }
    return newParams;
  }
  function normalizeRouteRecord(record) {
    return {
      path: record.path,
      redirect: record.redirect,
      name: record.name,
      meta: record.meta || {},
      aliasOf: void 0,
      beforeEnter: record.beforeEnter,
      props: normalizeRecordProps(record),
      children: record.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components: "components" in record ? record.components || {} : { default: record.component }
    };
  }
  function normalizeRecordProps(record) {
    const propsObject = {};
    const props = record.props || false;
    if ("component" in record) {
      propsObject.default = props;
    } else {
      for (const name in record.components)
        propsObject[name] = typeof props === "boolean" ? props : props[name];
    }
    return propsObject;
  }
  function isAliasRecord(record) {
    while (record) {
      if (record.record.aliasOf)
        return true;
      record = record.parent;
    }
    return false;
  }
  function mergeMetaFields(matched) {
    return matched.reduce((meta, record) => assign(meta, record.meta), {});
  }
  function mergeOptions(defaults, partialOptions) {
    const options = {};
    for (const key in defaults) {
      options[key] = key in partialOptions ? partialOptions[key] : defaults[key];
    }
    return options;
  }
  const HASH_RE2 = /#/g;
  const AMPERSAND_RE2 = /&/g;
  const SLASH_RE = /\//g;
  const EQUAL_RE2 = /=/g;
  const IM_RE = /\?/g;
  const PLUS_RE2 = /\+/g;
  const ENC_BRACKET_OPEN_RE2 = /%5B/g;
  const ENC_BRACKET_CLOSE_RE2 = /%5D/g;
  const ENC_CARET_RE2 = /%5E/g;
  const ENC_BACKTICK_RE2 = /%60/g;
  const ENC_CURLY_OPEN_RE2 = /%7B/g;
  const ENC_PIPE_RE2 = /%7C/g;
  const ENC_CURLY_CLOSE_RE2 = /%7D/g;
  const ENC_SPACE_RE2 = /%20/g;
  function commonEncode(text) {
    return encodeURI("" + text).replace(ENC_PIPE_RE2, "|").replace(ENC_BRACKET_OPEN_RE2, "[").replace(ENC_BRACKET_CLOSE_RE2, "]");
  }
  function encodeHash(text) {
    return commonEncode(text).replace(ENC_CURLY_OPEN_RE2, "{").replace(ENC_CURLY_CLOSE_RE2, "}").replace(ENC_CARET_RE2, "^");
  }
  function encodeQueryValue2(text) {
    return commonEncode(text).replace(PLUS_RE2, "%2B").replace(ENC_SPACE_RE2, "+").replace(HASH_RE2, "%23").replace(AMPERSAND_RE2, "%26").replace(ENC_BACKTICK_RE2, "`").replace(ENC_CURLY_OPEN_RE2, "{").replace(ENC_CURLY_CLOSE_RE2, "}").replace(ENC_CARET_RE2, "^");
  }
  function encodeQueryKey2(text) {
    return encodeQueryValue2(text).replace(EQUAL_RE2, "%3D");
  }
  function encodePath(text) {
    return commonEncode(text).replace(HASH_RE2, "%23").replace(IM_RE, "%3F");
  }
  function encodeParam(text) {
    return text == null ? "" : encodePath(text).replace(SLASH_RE, "%2F");
  }
  function decode2(text) {
    try {
      return decodeURIComponent("" + text);
    } catch (err) {
    }
    return "" + text;
  }
  function parseQuery2(search) {
    const query = {};
    if (search === "" || search === "?")
      return query;
    const hasLeadingIM = search[0] === "?";
    const searchParams = (hasLeadingIM ? search.slice(1) : search).split("&");
    for (let i = 0; i < searchParams.length; ++i) {
      const searchParam = searchParams[i].replace(PLUS_RE2, " ");
      const eqPos = searchParam.indexOf("=");
      const key = decode2(eqPos < 0 ? searchParam : searchParam.slice(0, eqPos));
      const value = eqPos < 0 ? null : decode2(searchParam.slice(eqPos + 1));
      if (key in query) {
        let currentValue = query[key];
        if (!Array.isArray(currentValue)) {
          currentValue = query[key] = [currentValue];
        }
        currentValue.push(value);
      } else {
        query[key] = value;
      }
    }
    return query;
  }
  function stringifyQuery2(query) {
    let search = "";
    for (let key in query) {
      const value = query[key];
      key = encodeQueryKey2(key);
      if (value == null) {
        if (value !== void 0) {
          search += (search.length ? "&" : "") + key;
        }
        continue;
      }
      const values = Array.isArray(value) ? value.map((v) => v && encodeQueryValue2(v)) : [value && encodeQueryValue2(value)];
      values.forEach((value2) => {
        if (value2 !== void 0) {
          search += (search.length ? "&" : "") + key;
          if (value2 != null)
            search += "=" + value2;
        }
      });
    }
    return search;
  }
  function normalizeQuery(query) {
    const normalizedQuery = {};
    for (const key in query) {
      const value = query[key];
      if (value !== void 0) {
        normalizedQuery[key] = Array.isArray(value) ? value.map((v) => v == null ? null : "" + v) : value == null ? value : "" + value;
      }
    }
    return normalizedQuery;
  }
  function useCallbacks() {
    let handlers = [];
    function add(handler) {
      handlers.push(handler);
      return () => {
        const i = handlers.indexOf(handler);
        if (i > -1)
          handlers.splice(i, 1);
      };
    }
    function reset() {
      handlers = [];
    }
    return {
      add,
      list: () => handlers,
      reset
    };
  }
  function registerGuard(record, name, guard) {
    const removeFromList = () => {
      record[name].delete(guard);
    };
    vue.onUnmounted(removeFromList);
    vue.onDeactivated(removeFromList);
    vue.onActivated(() => {
      record[name].add(guard);
    });
    record[name].add(guard);
  }
  function onBeforeRouteLeave(leaveGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "leaveGuards", leaveGuard);
  }
  function onBeforeRouteUpdate(updateGuard) {
    const activeRecord = vue.inject(matchedRouteKey, {}).value;
    if (!activeRecord) {
      return;
    }
    registerGuard(activeRecord, "updateGuards", updateGuard);
  }
  function guardToPromiseFn(guard, to, from, record, name) {
    const enterCallbackArray = record && (record.enterCallbacks[name] = record.enterCallbacks[name] || []);
    return () => new Promise((resolve, reject) => {
      const next = (valid) => {
        if (valid === false)
          reject(createRouterError(4, {
            from,
            to
          }));
        else if (valid instanceof Error) {
          reject(valid);
        } else if (isRouteLocation(valid)) {
          reject(createRouterError(2, {
            from: to,
            to: valid
          }));
        } else {
          if (enterCallbackArray && record.enterCallbacks[name] === enterCallbackArray && typeof valid === "function")
            enterCallbackArray.push(valid);
          resolve();
        }
      };
      const guardReturn = guard.call(record && record.instances[name], to, from, next);
      let guardCall = Promise.resolve(guardReturn);
      if (guard.length < 3)
        guardCall = guardCall.then(next);
      guardCall.catch((err) => reject(err));
    });
  }
  function extractComponentsGuards(matched, guardType, to, from) {
    const guards = [];
    for (const record of matched) {
      for (const name in record.components) {
        let rawComponent = record.components[name];
        if (guardType !== "beforeRouteEnter" && !record.instances[name])
          continue;
        if (isRouteComponent(rawComponent)) {
          const options = rawComponent.__vccOpts || rawComponent;
          const guard = options[guardType];
          guard && guards.push(guardToPromiseFn(guard, to, from, record, name));
        } else {
          let componentPromise = rawComponent();
          guards.push(() => componentPromise.then((resolved) => {
            if (!resolved)
              return Promise.reject(new Error(`Couldn't resolve component "${name}" at "${record.path}"`));
            const resolvedComponent = isESModule(resolved) ? resolved.default : resolved;
            record.components[name] = resolvedComponent;
            const options = resolvedComponent.__vccOpts || resolvedComponent;
            const guard = options[guardType];
            return guard && guardToPromiseFn(guard, to, from, record, name)();
          }));
        }
      }
    }
    return guards;
  }
  function isRouteComponent(component) {
    return typeof component === "object" || "displayName" in component || "props" in component || "__vccOpts" in component;
  }
  function useLink(props) {
    const router = vue.inject(routerKey);
    const currentRoute = vue.inject(routeLocationKey);
    const route = vue.computed(() => router.resolve(vue.unref(props.to)));
    const activeRecordIndex = vue.computed(() => {
      const { matched } = route.value;
      const { length } = matched;
      const routeMatched = matched[length - 1];
      const currentMatched = currentRoute.matched;
      if (!routeMatched || !currentMatched.length)
        return -1;
      const index2 = currentMatched.findIndex(isSameRouteRecord.bind(null, routeMatched));
      if (index2 > -1)
        return index2;
      const parentRecordPath = getOriginalPath(matched[length - 2]);
      return length > 1 && getOriginalPath(routeMatched) === parentRecordPath && currentMatched[currentMatched.length - 1].path !== parentRecordPath ? currentMatched.findIndex(isSameRouteRecord.bind(null, matched[length - 2])) : index2;
    });
    const isActive = vue.computed(() => activeRecordIndex.value > -1 && includesParams(currentRoute.params, route.value.params));
    const isExactActive = vue.computed(() => activeRecordIndex.value > -1 && activeRecordIndex.value === currentRoute.matched.length - 1 && isSameRouteLocationParams(currentRoute.params, route.value.params));
    function navigate(e = {}) {
      if (guardEvent(e)) {
        return router[vue.unref(props.replace) ? "replace" : "push"](vue.unref(props.to)).catch(noop);
      }
      return Promise.resolve();
    }
    return {
      route,
      href: vue.computed(() => route.value.href),
      isActive,
      isExactActive,
      navigate
    };
  }
  const RouterLinkImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterLink",
    props: {
      to: {
        type: [String, Object],
        required: true
      },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: {
        type: String,
        default: "page"
      }
    },
    useLink,
    setup(props, { slots }) {
      const link = vue.reactive(useLink(props));
      const { options } = vue.inject(routerKey);
      const elClass = vue.computed(() => ({
        [getLinkClass(props.activeClass, options.linkActiveClass, "router-link-active")]: link.isActive,
        [getLinkClass(props.exactActiveClass, options.linkExactActiveClass, "router-link-exact-active")]: link.isExactActive
      }));
      return () => {
        const children = slots.default && slots.default(link);
        return props.custom ? children : vue.h("a", {
          "aria-current": link.isExactActive ? props.ariaCurrentValue : null,
          href: link.href,
          onClick: link.navigate,
          class: elClass.value
        }, children);
      };
    }
  });
  const RouterLink = RouterLinkImpl;
  function guardEvent(e) {
    if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
      return;
    if (e.defaultPrevented)
      return;
    if (e.button !== void 0 && e.button !== 0)
      return;
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const target = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(target))
        return;
    }
    if (e.preventDefault)
      e.preventDefault();
    return true;
  }
  function includesParams(outer, inner) {
    for (const key in inner) {
      const innerValue = inner[key];
      const outerValue = outer[key];
      if (typeof innerValue === "string") {
        if (innerValue !== outerValue)
          return false;
      } else {
        if (!Array.isArray(outerValue) || outerValue.length !== innerValue.length || innerValue.some((value, i) => value !== outerValue[i]))
          return false;
      }
    }
    return true;
  }
  function getOriginalPath(record) {
    return record ? record.aliasOf ? record.aliasOf.path : record.path : "";
  }
  const getLinkClass = (propClass, globalClass, defaultClass) => propClass != null ? propClass : globalClass != null ? globalClass : defaultClass;
  const RouterViewImpl = /* @__PURE__ */ vue.defineComponent({
    name: "RouterView",
    inheritAttrs: false,
    props: {
      name: {
        type: String,
        default: "default"
      },
      route: Object
    },
    setup(props, { attrs, slots }) {
      const injectedRoute = vue.inject(routerViewLocationKey);
      const routeToDisplay = vue.computed(() => props.route || injectedRoute.value);
      const depth = vue.inject(viewDepthKey, 0);
      const matchedRouteRef = vue.computed(() => routeToDisplay.value.matched[depth]);
      vue.provide(viewDepthKey, depth + 1);
      vue.provide(matchedRouteKey, matchedRouteRef);
      vue.provide(routerViewLocationKey, routeToDisplay);
      const viewRef = vue.ref();
      vue.watch(() => [viewRef.value, matchedRouteRef.value, props.name], ([instance, to, name], [oldInstance, from, oldName]) => {
        if (to) {
          to.instances[name] = instance;
          if (from && from !== to && instance && instance === oldInstance) {
            if (!to.leaveGuards.size) {
              to.leaveGuards = from.leaveGuards;
            }
            if (!to.updateGuards.size) {
              to.updateGuards = from.updateGuards;
            }
          }
        }
        if (instance && to && (!from || !isSameRouteRecord(to, from) || !oldInstance)) {
          (to.enterCallbacks[name] || []).forEach((callback) => callback(instance));
        }
      }, { flush: "post" });
      return () => {
        const route = routeToDisplay.value;
        const matchedRoute = matchedRouteRef.value;
        const ViewComponent = matchedRoute && matchedRoute.components[props.name];
        const currentName = props.name;
        if (!ViewComponent) {
          return normalizeSlot(slots.default, { Component: ViewComponent, route });
        }
        const routePropsOption = matchedRoute.props[props.name];
        const routeProps = routePropsOption ? routePropsOption === true ? route.params : typeof routePropsOption === "function" ? routePropsOption(route) : routePropsOption : null;
        const onVnodeUnmounted = (vnode) => {
          if (vnode.component.isUnmounted) {
            matchedRoute.instances[currentName] = null;
          }
        };
        const component = vue.h(ViewComponent, assign({}, routeProps, attrs, {
          onVnodeUnmounted,
          ref: viewRef
        }));
        return normalizeSlot(slots.default, { Component: component, route }) || component;
      };
    }
  });
  function normalizeSlot(slot, data) {
    if (!slot)
      return null;
    const slotContent = slot(data);
    return slotContent.length === 1 ? slotContent[0] : slotContent;
  }
  const RouterView = RouterViewImpl;
  function createRouter(options) {
    const matcher = createRouterMatcher(options.routes, options);
    const parseQuery$1 = options.parseQuery || parseQuery2;
    const stringifyQuery$1 = options.stringifyQuery || stringifyQuery2;
    const routerHistory = options.history;
    const beforeGuards = useCallbacks();
    const beforeResolveGuards = useCallbacks();
    const afterGuards = useCallbacks();
    const currentRoute = vue.shallowRef(START_LOCATION_NORMALIZED);
    let pendingLocation = START_LOCATION_NORMALIZED;
    const normalizeParams = applyToParams.bind(null, (paramValue) => "" + paramValue);
    const encodeParams = applyToParams.bind(null, encodeParam);
    const decodeParams = applyToParams.bind(null, decode2);
    function addRoute(parentOrRoute, route) {
      let parent;
      let record;
      if (isRouteName(parentOrRoute)) {
        parent = matcher.getRecordMatcher(parentOrRoute);
        record = route;
      } else {
        record = parentOrRoute;
      }
      return matcher.addRoute(record, parent);
    }
    function removeRoute(name) {
      const recordMatcher = matcher.getRecordMatcher(name);
      if (recordMatcher) {
        matcher.removeRoute(recordMatcher);
      }
    }
    function getRoutes() {
      return matcher.getRoutes().map((routeMatcher) => routeMatcher.record);
    }
    function hasRoute(name) {
      return !!matcher.getRecordMatcher(name);
    }
    function resolve(rawLocation, currentLocation) {
      currentLocation = assign({}, currentLocation || currentRoute.value);
      if (typeof rawLocation === "string") {
        const locationNormalized = parseURL2(parseQuery$1, rawLocation, currentLocation.path);
        const matchedRoute2 = matcher.resolve({ path: locationNormalized.path }, currentLocation);
        const href2 = routerHistory.createHref(locationNormalized.fullPath);
        return assign(locationNormalized, matchedRoute2, {
          params: decodeParams(matchedRoute2.params),
          hash: decode2(locationNormalized.hash),
          redirectedFrom: void 0,
          href: href2
        });
      }
      let matcherLocation;
      if ("path" in rawLocation) {
        matcherLocation = assign({}, rawLocation, {
          path: parseURL2(parseQuery$1, rawLocation.path, currentLocation.path).path
        });
      } else {
        const targetParams = assign({}, rawLocation.params);
        for (const key in targetParams) {
          if (targetParams[key] == null) {
            delete targetParams[key];
          }
        }
        matcherLocation = assign({}, rawLocation, {
          params: encodeParams(rawLocation.params)
        });
        currentLocation.params = encodeParams(currentLocation.params);
      }
      const matchedRoute = matcher.resolve(matcherLocation, currentLocation);
      const hash = rawLocation.hash || "";
      matchedRoute.params = normalizeParams(decodeParams(matchedRoute.params));
      const fullPath = stringifyURL(stringifyQuery$1, assign({}, rawLocation, {
        hash: encodeHash(hash),
        path: matchedRoute.path
      }));
      const href = routerHistory.createHref(fullPath);
      return assign({
        fullPath,
        hash,
        query: stringifyQuery$1 === stringifyQuery2 ? normalizeQuery(rawLocation.query) : rawLocation.query || {}
      }, matchedRoute, {
        redirectedFrom: void 0,
        href
      });
    }
    function locationAsObject(to) {
      return typeof to === "string" ? parseURL2(parseQuery$1, to, currentRoute.value.path) : assign({}, to);
    }
    function checkCanceledNavigation(to, from) {
      if (pendingLocation !== to) {
        return createRouterError(8, {
          from,
          to
        });
      }
    }
    function push(to) {
      return pushWithRedirect(to);
    }
    function replace(to) {
      return push(assign(locationAsObject(to), { replace: true }));
    }
    function handleRedirectRecord(to) {
      const lastMatched = to.matched[to.matched.length - 1];
      if (lastMatched && lastMatched.redirect) {
        const { redirect } = lastMatched;
        let newTargetLocation = typeof redirect === "function" ? redirect(to) : redirect;
        if (typeof newTargetLocation === "string") {
          newTargetLocation = newTargetLocation.includes("?") || newTargetLocation.includes("#") ? newTargetLocation = locationAsObject(newTargetLocation) : { path: newTargetLocation };
          newTargetLocation.params = {};
        }
        return assign({
          query: to.query,
          hash: to.hash,
          params: to.params
        }, newTargetLocation);
      }
    }
    function pushWithRedirect(to, redirectedFrom) {
      const targetLocation = pendingLocation = resolve(to);
      const from = currentRoute.value;
      const data = to.state;
      const force = to.force;
      const replace2 = to.replace === true;
      const shouldRedirect = handleRedirectRecord(targetLocation);
      if (shouldRedirect)
        return pushWithRedirect(assign(locationAsObject(shouldRedirect), {
          state: data,
          force,
          replace: replace2
        }), redirectedFrom || targetLocation);
      const toLocation = targetLocation;
      toLocation.redirectedFrom = redirectedFrom;
      let failure;
      if (!force && isSameRouteLocation(stringifyQuery$1, from, targetLocation)) {
        failure = createRouterError(16, { to: toLocation, from });
        handleScroll();
      }
      return (failure ? Promise.resolve(failure) : navigate(toLocation, from)).catch((error) => isNavigationFailure(error) ? error : triggerError(error, toLocation, from)).then((failure2) => {
        if (failure2) {
          if (isNavigationFailure(failure2, 2)) {
            return pushWithRedirect(assign(locationAsObject(failure2.to), {
              state: data,
              force,
              replace: replace2
            }), redirectedFrom || toLocation);
          }
        } else {
          failure2 = finalizeNavigation(toLocation, from, true, replace2, data);
        }
        triggerAfterEach(toLocation, from, failure2);
        return failure2;
      });
    }
    function checkCanceledNavigationAndReject(to, from) {
      const error = checkCanceledNavigation(to, from);
      return error ? Promise.reject(error) : Promise.resolve();
    }
    function navigate(to, from) {
      let guards;
      const [leavingRecords, updatingRecords, enteringRecords] = extractChangingRecords(to, from);
      guards = extractComponentsGuards(leavingRecords.reverse(), "beforeRouteLeave", to, from);
      for (const record of leavingRecords) {
        record.leaveGuards.forEach((guard) => {
          guards.push(guardToPromiseFn(guard, to, from));
        });
      }
      const canceledNavigationCheck = checkCanceledNavigationAndReject.bind(null, to, from);
      guards.push(canceledNavigationCheck);
      return runGuardQueue(guards).then(() => {
        guards = [];
        for (const guard of beforeGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = extractComponentsGuards(updatingRecords, "beforeRouteUpdate", to, from);
        for (const record of updatingRecords) {
          record.updateGuards.forEach((guard) => {
            guards.push(guardToPromiseFn(guard, to, from));
          });
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const record of to.matched) {
          if (record.beforeEnter && !from.matched.includes(record)) {
            if (Array.isArray(record.beforeEnter)) {
              for (const beforeEnter of record.beforeEnter)
                guards.push(guardToPromiseFn(beforeEnter, to, from));
            } else {
              guards.push(guardToPromiseFn(record.beforeEnter, to, from));
            }
          }
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        to.matched.forEach((record) => record.enterCallbacks = {});
        guards = extractComponentsGuards(enteringRecords, "beforeRouteEnter", to, from);
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).then(() => {
        guards = [];
        for (const guard of beforeResolveGuards.list()) {
          guards.push(guardToPromiseFn(guard, to, from));
        }
        guards.push(canceledNavigationCheck);
        return runGuardQueue(guards);
      }).catch((err) => isNavigationFailure(err, 8) ? err : Promise.reject(err));
    }
    function triggerAfterEach(to, from, failure) {
      for (const guard of afterGuards.list())
        guard(to, from, failure);
    }
    function finalizeNavigation(toLocation, from, isPush, replace2, data) {
      const error = checkCanceledNavigation(toLocation, from);
      if (error)
        return error;
      const isFirstNavigation = from === START_LOCATION_NORMALIZED;
      const state = {};
      if (isPush) {
        if (replace2 || isFirstNavigation)
          routerHistory.replace(toLocation.fullPath, assign({
            scroll: isFirstNavigation && state && state.scroll
          }, data));
        else
          routerHistory.push(toLocation.fullPath, data);
      }
      currentRoute.value = toLocation;
      handleScroll();
      markAsReady();
    }
    let removeHistoryListener;
    function setupListeners() {
      removeHistoryListener = routerHistory.listen((to, _from, info) => {
        const toLocation = resolve(to);
        const shouldRedirect = handleRedirectRecord(toLocation);
        if (shouldRedirect) {
          pushWithRedirect(assign(shouldRedirect, { replace: true }), toLocation).catch(noop);
          return;
        }
        pendingLocation = toLocation;
        const from = currentRoute.value;
        navigate(toLocation, from).catch((error) => {
          if (isNavigationFailure(error, 4 | 8)) {
            return error;
          }
          if (isNavigationFailure(error, 2)) {
            pushWithRedirect(error.to, toLocation).then((failure) => {
              if (isNavigationFailure(failure, 4 | 16) && !info.delta && info.type === NavigationType.pop) {
                routerHistory.go(-1, false);
              }
            }).catch(noop);
            return Promise.reject();
          }
          if (info.delta)
            routerHistory.go(-info.delta, false);
          return triggerError(error, toLocation, from);
        }).then((failure) => {
          failure = failure || finalizeNavigation(toLocation, from, false);
          if (failure) {
            if (info.delta) {
              routerHistory.go(-info.delta, false);
            } else if (info.type === NavigationType.pop && isNavigationFailure(failure, 4 | 16)) {
              routerHistory.go(-1, false);
            }
          }
          triggerAfterEach(toLocation, from, failure);
        }).catch(noop);
      });
    }
    let readyHandlers = useCallbacks();
    let errorHandlers = useCallbacks();
    let ready;
    function triggerError(error, to, from) {
      markAsReady(error);
      const list = errorHandlers.list();
      if (list.length) {
        list.forEach((handler) => handler(error, to, from));
      } else {
        console.error(error);
      }
      return Promise.reject(error);
    }
    function isReady() {
      if (ready && currentRoute.value !== START_LOCATION_NORMALIZED)
        return Promise.resolve();
      return new Promise((resolve2, reject) => {
        readyHandlers.add([resolve2, reject]);
      });
    }
    function markAsReady(err) {
      if (ready)
        return;
      ready = true;
      setupListeners();
      readyHandlers.list().forEach(([resolve2, reject]) => err ? reject(err) : resolve2());
      readyHandlers.reset();
    }
    function handleScroll(to, from, isPush, isFirstNavigation) {
      return Promise.resolve();
    }
    const go = (delta) => routerHistory.go(delta);
    const installedApps = new Set();
    const router = {
      currentRoute,
      addRoute,
      removeRoute,
      hasRoute,
      getRoutes,
      resolve,
      options,
      push,
      replace,
      go,
      back: () => go(-1),
      forward: () => go(1),
      beforeEach: beforeGuards.add,
      beforeResolve: beforeResolveGuards.add,
      afterEach: afterGuards.add,
      onError: errorHandlers.add,
      isReady,
      install(app) {
        const router2 = this;
        app.component("RouterLink", RouterLink);
        app.component("RouterView", RouterView);
        app.config.globalProperties.$router = router2;
        Object.defineProperty(app.config.globalProperties, "$route", {
          enumerable: true,
          get: () => vue.unref(currentRoute)
        });
        const reactiveRoute = {};
        for (const key in START_LOCATION_NORMALIZED) {
          reactiveRoute[key] = vue.computed(() => currentRoute.value[key]);
        }
        app.provide(routerKey, router2);
        app.provide(routeLocationKey, vue.reactive(reactiveRoute));
        app.provide(routerViewLocationKey, currentRoute);
        const unmountApp = app.unmount;
        installedApps.add(app);
        app.unmount = function() {
          installedApps.delete(app);
          if (installedApps.size < 1) {
            pendingLocation = START_LOCATION_NORMALIZED;
            removeHistoryListener && removeHistoryListener();
            currentRoute.value = START_LOCATION_NORMALIZED;
            ready = false;
          }
          unmountApp();
        };
      }
    };
    return router;
  }
  function runGuardQueue(guards) {
    return guards.reduce((promise, guard) => promise.then(() => guard()), Promise.resolve());
  }
  function extractChangingRecords(to, from) {
    const leavingRecords = [];
    const updatingRecords = [];
    const enteringRecords = [];
    const len = Math.max(from.matched.length, to.matched.length);
    for (let i = 0; i < len; i++) {
      const recordFrom = from.matched[i];
      if (recordFrom) {
        if (to.matched.find((record) => isSameRouteRecord(record, recordFrom)))
          updatingRecords.push(recordFrom);
        else
          leavingRecords.push(recordFrom);
      }
      const recordTo = to.matched[i];
      if (recordTo) {
        if (!from.matched.find((record) => isSameRouteRecord(record, recordTo))) {
          enteringRecords.push(recordTo);
        }
      }
    }
    return [leavingRecords, updatingRecords, enteringRecords];
  }
  function useRouter() {
    return vue.inject(routerKey);
  }
  function useRoute() {
    return vue.inject(routeLocationKey);
  }
  exports.RouterLink = RouterLink;
  exports.RouterView = RouterView;
  exports.START_LOCATION = START_LOCATION_NORMALIZED;
  exports.createMemoryHistory = createMemoryHistory;
  exports.createRouter = createRouter;
  exports.createRouterMatcher = createRouterMatcher;
  exports.createWebHashHistory = createWebHashHistory;
  exports.createWebHistory = createWebHistory;
  exports.isNavigationFailure = isNavigationFailure;
  exports.matchedRouteKey = matchedRouteKey;
  exports.onBeforeRouteLeave = onBeforeRouteLeave;
  exports.onBeforeRouteUpdate = onBeforeRouteUpdate;
  exports.parseQuery = parseQuery2;
  exports.routeLocationKey = routeLocationKey;
  exports.routerKey = routerKey;
  exports.routerViewLocationKey = routerViewLocationKey;
  exports.stringifyQuery = stringifyQuery2;
  exports.useLink = useLink;
  exports.useRoute = useRoute;
  exports.useRouter = useRouter;
  exports.viewDepthKey = viewDepthKey;
})(vueRouter_cjs_prod);
const suspectProtoRx = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^["{[]|^-?[0-9][0-9.]{0,14}$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor") {
    return;
  }
  return value;
}
function destr(val) {
  if (typeof val !== "string") {
    return val;
  }
  const _lval = val.toLowerCase();
  if (_lval === "true") {
    return true;
  }
  if (_lval === "false") {
    return false;
  }
  if (_lval === "null") {
    return null;
  }
  if (_lval === "nan") {
    return NaN;
  }
  if (_lval === "infinity") {
    return Infinity;
  }
  if (_lval === "undefined") {
    return void 0;
  }
  if (!JsonSigRx.test(val)) {
    return val;
  }
  try {
    if (suspectProtoRx.test(val) || suspectConstructorRx.test(val)) {
      return JSON.parse(val, jsonParseTransform);
    }
    return JSON.parse(val);
  } catch (_e) {
    return val;
  }
}
const preload = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.mixin({
    beforeCreate() {
      const { _registeredComponents } = this.$nuxt.ssrContext;
      const { __moduleIdentifier } = this.$options;
      _registeredComponents.add(__moduleIdentifier);
    }
  });
});
var __defProp2 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp2 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp2.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b)) {
      if (__propIsEnum2.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b) => __defProps2(a, __getOwnPropDescs2(b));
var PROVIDE_KEY = `usehead`;
var HEAD_COUNT_KEY = `head:count`;
var HEAD_ATTRS_KEY = `data-head-attrs`;
var SELF_CLOSING_TAGS = ["meta", "link", "base"];
var createElement = (tag, attrs, document2) => {
  const el = document2.createElement(tag);
  for (const key of Object.keys(attrs)) {
    let value = attrs[key];
    if (key === "key" || value === false) {
      continue;
    }
    if (key === "children") {
      el.textContent = value;
    } else {
      el.setAttribute(key, value);
    }
  }
  return el;
};
var htmlEscape = (str) => str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
var stringifyAttrs = (attributes) => {
  const handledAttributes = [];
  for (let [key, value] of Object.entries(attributes)) {
    if (key === "children" || key === "key") {
      continue;
    }
    if (value === false || value == null) {
      continue;
    }
    let attribute = htmlEscape(key);
    if (value !== true) {
      attribute += `="${htmlEscape(String(value))}"`;
    }
    handledAttributes.push(attribute);
  }
  return handledAttributes.length > 0 ? " " + handledAttributes.join(" ") : "";
};
function isEqualNode(oldTag, newTag) {
  if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
    const nonce = newTag.getAttribute("nonce");
    if (nonce && !oldTag.getAttribute("nonce")) {
      const cloneTag = newTag.cloneNode(true);
      cloneTag.setAttribute("nonce", "");
      cloneTag.nonce = nonce;
      return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
    }
  }
  return oldTag.isEqualNode(newTag);
}
var getTagKey = (props) => {
  const names = ["key", "id", "name", "property"];
  for (const n of names) {
    const value = typeof props.getAttribute === "function" ? props.getAttribute(n) : props[n];
    if (value !== void 0) {
      return { name: n, value };
    }
  }
};
var acceptFields = [
  "title",
  "meta",
  "link",
  "base",
  "style",
  "script",
  "htmlAttrs",
  "bodyAttrs"
];
var headObjToTags = (obj) => {
  const tags = [];
  for (const key of Object.keys(obj)) {
    if (obj[key] == null)
      continue;
    if (key === "title") {
      tags.push({ tag: key, props: { children: obj[key] } });
    } else if (key === "base") {
      tags.push({ tag: key, props: __spreadValues2({ key: "default" }, obj[key]) });
    } else if (acceptFields.includes(key)) {
      const value = obj[key];
      if (Array.isArray(value)) {
        value.forEach((item) => {
          tags.push({ tag: key, props: item });
        });
      } else if (value) {
        tags.push({ tag: key, props: value });
      }
    }
  }
  return tags;
};
var setAttrs = (el, attrs) => {
  const existingAttrs = el.getAttribute(HEAD_ATTRS_KEY);
  if (existingAttrs) {
    for (const key of existingAttrs.split(",")) {
      if (!(key in attrs)) {
        el.removeAttribute(key);
      }
    }
  }
  const keys = [];
  for (const key in attrs) {
    const value = attrs[key];
    if (value == null)
      continue;
    if (value === false) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
    keys.push(key);
  }
  if (keys.length) {
    el.setAttribute(HEAD_ATTRS_KEY, keys.join(","));
  } else {
    el.removeAttribute(HEAD_ATTRS_KEY);
  }
};
var updateElements = (document2 = window.document, type, tags) => {
  var _a;
  const head = document2.head;
  let headCountEl = head.querySelector(`meta[name="${HEAD_COUNT_KEY}"]`);
  const headCount = headCountEl ? Number(headCountEl.getAttribute("content")) : 0;
  const oldElements = [];
  if (headCountEl) {
    for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = j.previousElementSibling) {
      if (((_a = j == null ? void 0 : j.tagName) == null ? void 0 : _a.toLowerCase()) === type) {
        oldElements.push(j);
      }
    }
  } else {
    headCountEl = document2.createElement("meta");
    headCountEl.setAttribute("name", HEAD_COUNT_KEY);
    headCountEl.setAttribute("content", "0");
    head.append(headCountEl);
  }
  let newElements = tags.map((tag) => createElement(tag.tag, tag.props, document2));
  newElements = newElements.filter((newEl) => {
    for (let i = 0; i < oldElements.length; i++) {
      const oldEl = oldElements[i];
      if (isEqualNode(oldEl, newEl)) {
        oldElements.splice(i, 1);
        return false;
      }
    }
    return true;
  });
  oldElements.forEach((t) => {
    var _a2;
    return (_a2 = t.parentNode) == null ? void 0 : _a2.removeChild(t);
  });
  newElements.forEach((t) => {
    var _a2;
    const key = getTagKey(t);
    if (key) {
      const uncontrolled = head.querySelector(`${t.tagName.toLowerCase()}[${key.name}="${key.value}"]`);
      if (uncontrolled) {
        (_a2 = uncontrolled.parentNode) == null ? void 0 : _a2.removeChild(uncontrolled);
      }
    }
    head.insertBefore(t, headCountEl);
  });
  headCountEl.setAttribute("content", "" + (headCount - oldElements.length + newElements.length));
};
var createHead = () => {
  let allHeadObjs = [];
  const head = {
    install(app) {
      app.config.globalProperties.$head = head;
      app.provide(PROVIDE_KEY, head);
    },
    get headTags() {
      const deduped = [];
      allHeadObjs.forEach((objs) => {
        const tags = headObjToTags(objs.value);
        tags.forEach((tag) => {
          if (tag.tag === "meta" || tag.tag === "base" || tag.tag === "script") {
            const key = getTagKey(tag.props);
            if (key) {
              let index2 = -1;
              for (let i = 0; i < deduped.length; i++) {
                const prev = deduped[i];
                const prevValue = prev.props[key.name];
                const nextValue = tag.props[key.name];
                if (prev.tag === tag.tag && prevValue === nextValue) {
                  index2 = i;
                  break;
                }
              }
              if (index2 !== -1) {
                deduped.splice(index2, 1);
              }
            }
          }
          deduped.push(tag);
        });
      });
      return deduped;
    },
    addHeadObjs(objs) {
      allHeadObjs.push(objs);
    },
    removeHeadObjs(objs) {
      allHeadObjs = allHeadObjs.filter((_objs) => _objs !== objs);
    },
    updateDOM(document2 = window.document) {
      let title;
      let htmlAttrs = {};
      let bodyAttrs = {};
      const actualTags = {};
      for (const tag of head.headTags) {
        if (tag.tag === "title") {
          title = tag.props.children;
          continue;
        }
        if (tag.tag === "htmlAttrs") {
          Object.assign(htmlAttrs, tag.props);
          continue;
        }
        if (tag.tag === "bodyAttrs") {
          Object.assign(bodyAttrs, tag.props);
          continue;
        }
        actualTags[tag.tag] = actualTags[tag.tag] || [];
        actualTags[tag.tag].push(tag);
      }
      if (title !== void 0) {
        document2.title = title;
      }
      setAttrs(document2.documentElement, htmlAttrs);
      setAttrs(document2.body, bodyAttrs);
      for (const name of Object.keys(actualTags)) {
        updateElements(document2, name, actualTags[name]);
      }
    }
  };
  return head;
};
var tagToString = (tag) => {
  let attrs = stringifyAttrs(tag.props);
  if (SELF_CLOSING_TAGS.includes(tag.tag)) {
    return `<${tag.tag}${attrs}>`;
  }
  return `<${tag.tag}${attrs}>${tag.props.children || ""}</${tag.tag}>`;
};
var renderHeadToString = (head) => {
  const tags = [];
  let titleTag = "";
  let htmlAttrs = {};
  let bodyAttrs = {};
  for (const tag of head.headTags) {
    if (tag.tag === "title") {
      titleTag = tagToString(tag);
    } else if (tag.tag === "htmlAttrs") {
      Object.assign(htmlAttrs, tag.props);
    } else if (tag.tag === "bodyAttrs") {
      Object.assign(bodyAttrs, tag.props);
    } else {
      tags.push(tagToString(tag));
    }
  }
  tags.push(`<meta name="${HEAD_COUNT_KEY}" content="${tags.length}">`);
  return {
    get headTags() {
      return titleTag + tags.join("");
    },
    get htmlAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, htmlAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(htmlAttrs).join(",")
      }));
    },
    get bodyAttrs() {
      return stringifyAttrs(__spreadProps2(__spreadValues2({}, bodyAttrs), {
        [HEAD_ATTRS_KEY]: Object.keys(bodyAttrs).join(",")
      }));
    }
  };
};
const vueuseHead_2bd0ef56 = defineNuxtPlugin((nuxtApp) => {
  const head = createHead();
  nuxtApp.vueApp.use(head);
  nuxtApp._useMeta = (meta) => {
    const headObj = vue_cjs_prod.ref(meta);
    head.addHeadObjs(headObj);
    {
      return;
    }
  };
  {
    nuxtApp.ssrContext.renderMeta = () => renderHeadToString(head);
  }
});
var shared_cjs_prod = {};
Object.defineProperty(shared_cjs_prod, "__esModule", { value: true });
function makeMap(str, expectsLowerCase) {
  const map = Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
const PatchFlagNames = {
  [1]: `TEXT`,
  [2]: `CLASS`,
  [4]: `STYLE`,
  [8]: `PROPS`,
  [16]: `FULL_PROPS`,
  [32]: `HYDRATE_EVENTS`,
  [64]: `STABLE_FRAGMENT`,
  [128]: `KEYED_FRAGMENT`,
  [256]: `UNKEYED_FRAGMENT`,
  [512]: `NEED_PATCH`,
  [1024]: `DYNAMIC_SLOTS`,
  [2048]: `DEV_ROOT_FRAGMENT`,
  [-1]: `HOISTED`,
  [-2]: `BAIL`
};
const slotFlagsText = {
  [1]: "STABLE",
  [2]: "DYNAMIC",
  [3]: "FORWARDED"
};
const GLOBALS_WHITE_LISTED = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt";
const isGloballyWhitelisted = /* @__PURE__ */ makeMap(GLOBALS_WHITE_LISTED);
const range = 2;
function generateCodeFrame(source, start = 0, end = source.length) {
  let lines = source.split(/(\r?\n)/);
  const newlineSequences = lines.filter((_, idx) => idx % 2 === 1);
  lines = lines.filter((_, idx) => idx % 2 === 0);
  let count = 0;
  const res = [];
  for (let i = 0; i < lines.length; i++) {
    count += lines[i].length + (newlineSequences[i] && newlineSequences[i].length || 0);
    if (count >= start) {
      for (let j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length)
          continue;
        const line = j + 1;
        res.push(`${line}${" ".repeat(Math.max(3 - String(line).length, 0))}|  ${lines[j]}`);
        const lineLength = lines[j].length;
        const newLineSeqLength = newlineSequences[j] && newlineSequences[j].length || 0;
        if (j === i) {
          const pad = start - (count - (lineLength + newLineSeqLength));
          const length = Math.max(1, end > count ? lineLength - pad : end - start);
          res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
        } else if (j > i) {
          if (end > count) {
            const length = Math.max(Math.min(end - count, lineLength), 1);
            res.push(`   |  ` + "^".repeat(length));
          }
          count += lineLength + newLineSeqLength;
        }
      }
      break;
    }
  }
  return res.join("\n");
}
const specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
const isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
const isBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
const unsafeAttrCharRE = /[>/="'\u0009\u000a\u000c\u0020]/;
const attrValidationCache = {};
function isSSRSafeAttrName(name) {
  if (attrValidationCache.hasOwnProperty(name)) {
    return attrValidationCache[name];
  }
  const isUnsafe = unsafeAttrCharRE.test(name);
  if (isUnsafe) {
    console.error(`unsafe attribute name: ${name}`);
  }
  return attrValidationCache[name] = !isUnsafe;
}
const propsToAttrMap = {
  acceptCharset: "accept-charset",
  className: "class",
  htmlFor: "for",
  httpEquiv: "http-equiv"
};
const isNoUnitNumericStyleProp = /* @__PURE__ */ makeMap(`animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width`);
const isKnownHtmlAttr = /* @__PURE__ */ makeMap(`accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap`);
const isKnownSvgAttr = /* @__PURE__ */ makeMap(`xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan`);
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value)) {
    return value;
  } else if (isObject(value)) {
    return value;
  }
}
const listDelimiterRE = /;(?![^(]*\))/g;
const propertyDelimiterRE = /:(.+)/;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function stringifyStyle(styles) {
  let ret = "";
  if (!styles || isString(styles)) {
    return ret;
  }
  for (const key in styles) {
    const value = styles[key];
    const normalizedKey = key.startsWith(`--`) ? key : hyphenate(key);
    if (isString(value) || typeof value === "number" && isNoUnitNumericStyleProp(normalizedKey)) {
      ret += `${normalizedKey}:${value};`;
    }
  }
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
function normalizeProps(props) {
  if (!props)
    return null;
  let { class: klass, style } = props;
  if (klass && !isString(klass)) {
    props.class = normalizeClass(klass);
  }
  if (style) {
    props.style = normalizeStyle(style);
  }
  return props;
}
const HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
const SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
const VOID_TAGS = "area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr";
const isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
const isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
const isVoidTag = /* @__PURE__ */ makeMap(VOID_TAGS);
const escapeRE = /["'&<>]/;
function escapeHtml(string) {
  const str = "" + string;
  const match = escapeRE.exec(str);
  if (!match) {
    return str;
  }
  let html = "";
  let escaped;
  let index2;
  let lastIndex = 0;
  for (index2 = match.index; index2 < str.length; index2++) {
    switch (str.charCodeAt(index2)) {
      case 34:
        escaped = "&quot;";
        break;
      case 38:
        escaped = "&amp;";
        break;
      case 39:
        escaped = "&#39;";
        break;
      case 60:
        escaped = "&lt;";
        break;
      case 62:
        escaped = "&gt;";
        break;
      default:
        continue;
    }
    if (lastIndex !== index2) {
      html += str.slice(lastIndex, index2);
    }
    lastIndex = index2 + 1;
    html += escaped;
  }
  return lastIndex !== index2 ? html + str.slice(lastIndex, index2) : html;
}
const commentStripRE = /^-?>|<!--|-->|--!>|<!-$/g;
function escapeHtmlComment(src) {
  return src.replace(commentStripRE, "");
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length)
    return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b)
    return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
function looseIndexOf(arr, val) {
  return arr.findIndex((item) => looseEqual(item, val));
}
const toDisplayString = (val) => {
  return val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
};
const replacer = (_key, val) => {
  if (val && val.__v_isRef) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce((entries, [key, val2]) => {
        entries[`${key} =>`] = val2;
        return entries;
      }, {})
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()]
    };
  } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
    return String(val);
  }
  return val;
};
const EMPTY_OBJ = {};
const EMPTY_ARR = [];
const NOOP = () => {
};
const NO = () => false;
const onRE = /^on[^a-z]/;
const isOn = (key) => onRE.test(key);
const isModelListener = (key) => key.startsWith("onUpdate:");
const extend = Object.assign;
const remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
const hasOwnProperty = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isSet = (val) => toTypeString(val) === "[object Set]";
const isDate = (val) => val instanceof Date;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject = (val) => val !== null && typeof val === "object";
const isPromise = (val) => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isPlainObject = (val) => toTypeString(val) === "[object Object]";
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const isReservedProp = /* @__PURE__ */ makeMap(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
const cacheStringFunction = (fn) => {
  const cache = Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const camelizeRE = /-(\w)/g;
const camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
});
const hyphenateRE = /\B([A-Z])/g;
const hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
const capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
const toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
const invokeArrayFns = (fns, arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](arg);
  }
};
const def = (obj, key, value) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    value
  });
};
const toNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
let _globalThis$1;
const getGlobalThis = () => {
  return _globalThis$1 || (_globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : {});
};
shared_cjs_prod.EMPTY_ARR = EMPTY_ARR;
shared_cjs_prod.EMPTY_OBJ = EMPTY_OBJ;
shared_cjs_prod.NO = NO;
shared_cjs_prod.NOOP = NOOP;
shared_cjs_prod.PatchFlagNames = PatchFlagNames;
shared_cjs_prod.camelize = camelize;
shared_cjs_prod.capitalize = capitalize;
shared_cjs_prod.def = def;
shared_cjs_prod.escapeHtml = escapeHtml;
shared_cjs_prod.escapeHtmlComment = escapeHtmlComment;
shared_cjs_prod.extend = extend;
shared_cjs_prod.generateCodeFrame = generateCodeFrame;
shared_cjs_prod.getGlobalThis = getGlobalThis;
shared_cjs_prod.hasChanged = hasChanged;
shared_cjs_prod.hasOwn = hasOwn;
shared_cjs_prod.hyphenate = hyphenate;
shared_cjs_prod.includeBooleanAttr = includeBooleanAttr;
shared_cjs_prod.invokeArrayFns = invokeArrayFns;
shared_cjs_prod.isArray = isArray;
shared_cjs_prod.isBooleanAttr = isBooleanAttr;
shared_cjs_prod.isDate = isDate;
var isFunction_1 = shared_cjs_prod.isFunction = isFunction;
shared_cjs_prod.isGloballyWhitelisted = isGloballyWhitelisted;
shared_cjs_prod.isHTMLTag = isHTMLTag;
shared_cjs_prod.isIntegerKey = isIntegerKey;
shared_cjs_prod.isKnownHtmlAttr = isKnownHtmlAttr;
shared_cjs_prod.isKnownSvgAttr = isKnownSvgAttr;
shared_cjs_prod.isMap = isMap;
shared_cjs_prod.isModelListener = isModelListener;
shared_cjs_prod.isNoUnitNumericStyleProp = isNoUnitNumericStyleProp;
shared_cjs_prod.isObject = isObject;
shared_cjs_prod.isOn = isOn;
shared_cjs_prod.isPlainObject = isPlainObject;
shared_cjs_prod.isPromise = isPromise;
shared_cjs_prod.isReservedProp = isReservedProp;
shared_cjs_prod.isSSRSafeAttrName = isSSRSafeAttrName;
shared_cjs_prod.isSVGTag = isSVGTag;
shared_cjs_prod.isSet = isSet;
shared_cjs_prod.isSpecialBooleanAttr = isSpecialBooleanAttr;
shared_cjs_prod.isString = isString;
shared_cjs_prod.isSymbol = isSymbol;
shared_cjs_prod.isVoidTag = isVoidTag;
shared_cjs_prod.looseEqual = looseEqual;
shared_cjs_prod.looseIndexOf = looseIndexOf;
shared_cjs_prod.makeMap = makeMap;
shared_cjs_prod.normalizeClass = normalizeClass;
shared_cjs_prod.normalizeProps = normalizeProps;
shared_cjs_prod.normalizeStyle = normalizeStyle;
shared_cjs_prod.objectToString = objectToString;
shared_cjs_prod.parseStringStyle = parseStringStyle;
shared_cjs_prod.propsToAttrMap = propsToAttrMap;
shared_cjs_prod.remove = remove;
shared_cjs_prod.slotFlagsText = slotFlagsText;
shared_cjs_prod.stringifyStyle = stringifyStyle;
shared_cjs_prod.toDisplayString = toDisplayString;
shared_cjs_prod.toHandlerKey = toHandlerKey;
shared_cjs_prod.toNumber = toNumber;
shared_cjs_prod.toRawType = toRawType;
shared_cjs_prod.toTypeString = toTypeString;
function useMeta(meta) {
  const resolvedMeta = isFunction_1(meta) ? vue_cjs_prod.computed(meta) : meta;
  useNuxtApp()._useMeta(resolvedMeta);
}
const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useMeta(() => metaFactory(__spreadValues(__spreadValues({}, removeUndefinedProps(props)), ctx.attrs), ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: String,
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Script = vue_cjs_prod.defineComponent({
  name: "Script",
  props: __spreadProps(__spreadValues({}, globalProps), {
    async: Boolean,
    crossorigin: {
      type: [Boolean, String],
      default: void 0
    },
    defer: Boolean,
    integrity: String,
    nomodule: Boolean,
    nonce: String,
    referrerpolicy: String,
    src: String,
    type: String,
    charset: String,
    language: String
  }),
  setup: setupForUseMeta((script) => ({
    script: [script]
  }))
});
const Link = vue_cjs_prod.defineComponent({
  name: "Link",
  props: __spreadProps(__spreadValues({}, globalProps), {
    as: String,
    crossorigin: String,
    disabled: Boolean,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String
  }),
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Base = vue_cjs_prod.defineComponent({
  name: "Base",
  props: __spreadProps(__spreadValues({}, globalProps), {
    href: String,
    target: String
  }),
  setup: setupForUseMeta((base) => ({
    base
  }))
});
const Title = vue_cjs_prod.defineComponent({
  name: "Title",
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b;
    const title = ((_b = (_a = slots.default()) == null ? void 0 : _a[0]) == null ? void 0 : _b.children) || null;
    return {
      title
    };
  })
});
const Meta = vue_cjs_prod.defineComponent({
  name: "Meta",
  props: __spreadProps(__spreadValues({}, globalProps), {
    charset: String,
    content: String,
    httpEquiv: String,
    key: String,
    name: String
  }),
  setup: setupForUseMeta((meta) => ({
    meta: [meta]
  }))
});
const Style = vue_cjs_prod.defineComponent({
  name: "Style",
  props: __spreadProps(__spreadValues({}, globalProps), {
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: {
      type: Boolean,
      default: void 0
    }
  }),
  setup: setupForUseMeta((props, { slots }) => {
    var _a, _b, _c;
    const style = __spreadValues({}, props);
    const textContent = (_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children;
    if (textContent) {
      style.children = textContent;
    }
    return {
      style: [style]
    };
  })
});
const Head = vue_cjs_prod.defineComponent({
  name: "Head",
  setup: (_props, ctx) => ctx.slots.default
});
const Html = vue_cjs_prod.defineComponent({
  name: "Html",
  props: __spreadProps(__spreadValues({}, globalProps), {
    manifest: String,
    version: String,
    xmlns: String
  }),
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = vue_cjs_prod.defineComponent({
  name: "Body",
  props: globalProps,
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
const Components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  Script,
  Link,
  Base,
  Title,
  Meta,
  Style,
  Head,
  Html,
  Body
});
const metaConfig = { "globalMeta": { "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "charset": "utf-8" }, { "property": "viewport", "name": "width=device-width, initial-scale=1" }, { "property": "og:type", "content": "website" }, { "property": "og:image", "content": "https://comb-web.github.com/ogp/twitter.png" }, { "property": "twitter:card", "content": "summary_large_image" }, { "property": "twitter:site", "content": "@KaijoComputer" }, { "property": "twitter:creator", "content": "@KaijoComputer" }], "title": "\u6D77\u57CE\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u90E8", "htmlAttrs": { "lang": "ja", "prefix": "og: http://ogp.me/ns#" }, "link": [{ "rel": "icon", "type": "image/x-icon", "href": "/favicon.ico" }], "style": [], "script": [] }, "mixinKey": "created" };
const plugin_348c134a = defineNuxtPlugin((nuxtApp) => {
  useMeta(metaConfig.globalMeta);
  nuxtApp.vueApp.mixin({
    [metaConfig.mixinKey]() {
      var _a;
      const instance = vue_cjs_prod.getCurrentInstance();
      const options = (instance == null ? void 0 : instance.type) || ((_a = instance == null ? void 0 : instance.proxy) == null ? void 0 : _a.$options);
      if (!options || !("head" in options)) {
        return;
      }
      useMeta(options.head);
    }
  });
  for (const name in Components) {
    nuxtApp.vueApp.component(name, Components[name]);
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$j = {
  name: "NuxtNestedPage"
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = vue_cjs_prod.resolveComponent("RouterView");
  _push(serverRenderer.exports.ssrRenderComponent(_component_RouterView, _attrs, {
    default: vue_cjs_prod.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.exports.ssrRenderVNode(_push2, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(Component), {
          key: _ctx.$route.path
        }, null), _parent2, _scopeId);
      } else {
        return [
          (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.resolveDynamicComponent(Component), {
            key: _ctx.$route.path
          }))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/nuxt3/dist/pages/runtime/nested-page.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const NuxtNestedPage = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$8]]);
const layouts = {
  "default": vue_cjs_prod.defineAsyncComponent({ suspensible: false, loader: () => Promise.resolve().then(function() {
    return _default$1;
  }) }),
  "nonavbar": vue_cjs_prod.defineAsyncComponent({ suspensible: false, loader: () => Promise.resolve().then(function() {
    return nonavbar$1;
  }) })
};
const NuxtLayout = vue_cjs_prod.defineComponent({
  props: {
    name: {
      type: [String, Boolean],
      default: "default"
    }
  },
  setup(props, context) {
    return () => {
      const layout = props.name;
      if (!layouts[layout]) {
        return context.slots.default();
      }
      return vue_cjs_prod.h(layouts[layout], props, context.slots);
    };
  }
});
const _sfc_main$i = {
  name: "NuxtPage",
  components: { NuxtLayout },
  props: {
    layout: {
      type: String,
      default: null
    }
  },
  setup() {
    const updatedComponentLayout = null;
    const nuxtApp = useNuxtApp();
    function onSuspensePending(Component) {
      return nuxtApp.callHook("page:start", Component);
    }
    function onSuspenseResolved(Component) {
      return nuxtApp.callHook("page:finish", Component);
    }
    return {
      updatedComponentLayout,
      onSuspensePending,
      onSuspenseResolved
    };
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_RouterView = vue_cjs_prod.resolveComponent("RouterView");
  const _component_NuxtLayout = vue_cjs_prod.resolveComponent("NuxtLayout");
  _push(serverRenderer.exports.ssrRenderComponent(_component_RouterView, _attrs, {
    default: vue_cjs_prod.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (Component) {
          _push2(serverRenderer.exports.ssrRenderComponent(_component_NuxtLayout, {
            name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
          }, {
            default: vue_cjs_prod.withCtx((_, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                serverRenderer.exports.ssrRenderSuspense(_push3, {
                  default: () => {
                    serverRenderer.exports.ssrRenderVNode(_push3, vue_cjs_prod.createVNode(vue_cjs_prod.resolveDynamicComponent(Component), {
                      key: _ctx.$route.path
                    }, null), _parent3, _scopeId2);
                  },
                  _: 2
                });
              } else {
                return [
                  vue_cjs_prod.createVNode(vue_cjs_prod.Transition, {
                    name: "page",
                    mode: "out-in"
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Suspense, {
                        onPending: () => $setup.onSuspensePending(Component),
                        onResolve: () => $setup.onSuspenseResolved(Component)
                      }, {
                        default: vue_cjs_prod.withCtx(() => [
                          (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.resolveDynamicComponent(Component), {
                            key: _ctx.$route.path
                          }))
                        ]),
                        _: 2
                      }, 1032, ["onPending", "onResolve"]))
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          Component ? (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(_component_NuxtLayout, {
            key: 0,
            name: $props.layout || $setup.updatedComponentLayout || Component.type.layout
          }, {
            default: vue_cjs_prod.withCtx(() => [
              vue_cjs_prod.createVNode(vue_cjs_prod.Transition, {
                name: "page",
                mode: "out-in"
              }, {
                default: vue_cjs_prod.withCtx(() => [
                  (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.Suspense, {
                    onPending: () => $setup.onSuspensePending(Component),
                    onResolve: () => $setup.onSuspenseResolved(Component)
                  }, {
                    default: vue_cjs_prod.withCtx(() => [
                      (vue_cjs_prod.openBlock(), vue_cjs_prod.createBlock(vue_cjs_prod.resolveDynamicComponent(Component), {
                        key: _ctx.$route.path
                      }))
                    ]),
                    _: 2
                  }, 1032, ["onPending", "onResolve"]))
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["name"])) : vue_cjs_prod.createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/nuxt3/dist/pages/runtime/page.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const NuxtPage = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$7]]);
const routes = [
  {
    "name": "_post",
    "path": "/_post",
    "file": "/Users/shuteiei/Documents/Nuxt/comb-web/src/pages/_post.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return _post$1;
    })
  },
  {
    "name": "about",
    "path": "/about",
    "file": "/Users/shuteiei/Documents/Nuxt/comb-web/src/pages/about.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return about$1;
    })
  },
  {
    "name": "index",
    "path": "/",
    "file": "/Users/shuteiei/Documents/Nuxt/comb-web/src/pages/index.vue",
    "children": [],
    "component": () => Promise.resolve().then(function() {
      return index$1;
    })
  }
];
const router_0f3f8dd6 = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("NuxtNestedPage", NuxtNestedPage);
  nuxtApp.vueApp.component("NuxtPage", NuxtPage);
  nuxtApp.vueApp.component("NuxtLayout", NuxtLayout);
  nuxtApp.vueApp.component("NuxtLink", vueRouter_cjs_prod.RouterLink);
  nuxtApp.vueApp.component("NuxtChild", NuxtNestedPage);
  const routerHistory = vueRouter_cjs_prod.createMemoryHistory();
  const router = vueRouter_cjs_prod.createRouter({
    history: routerHistory,
    routes
  });
  nuxtApp.vueApp.use(router);
  const previousRoute = vue_cjs_prod.shallowRef(router.currentRoute.value);
  router.afterEach((_to, from) => {
    previousRoute.value = from;
  });
  Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
    get: () => previousRoute.value
  });
  const route = {};
  for (const key in router.currentRoute.value) {
    route[key] = vue_cjs_prod.computed(() => router.currentRoute.value[key]);
  }
  nuxtApp._route = vue_cjs_prod.reactive(route);
  nuxtApp.hook("app:created", async () => {
    {
      router.push(nuxtApp.ssrContext.url);
    }
    await router.isReady();
    const is404 = router.currentRoute.value.matched.length === 0;
    if (is404) {
      const error = new Error(`Page not found: ${nuxtApp.ssrContext.url}`);
      error.statusCode = 404;
      nuxtApp.ssrContext.error = error;
    }
  });
  return { provide: { router } };
});
const vue3SmoothScroll_019d2282 = defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueSmoothScroll);
});
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s = param.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decode(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withoutTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
  if (!hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return (s0.slice(0, -1) || "/") + (s.length ? `?${s.join("?")}` : "");
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s] = input.split("?");
  return s0 + "/" + (s.length ? `?${s.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = __spreadValues(__spreadValues({}, parseQuery(parsed.search)), query);
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}
class FetchError extends Error {
  constructor() {
    super(...arguments);
    this.name = "FetchError";
  }
}
function createFetchError(request, error, response) {
  let message = "";
  if (request && response) {
    message = `${response.status} ${response.statusText} (${request.toString()})`;
  }
  if (error) {
    message = `${error.message} (${message})`;
  }
  const fetchError = new FetchError(message);
  Object.defineProperty(fetchError, "request", { get() {
    return request;
  } });
  Object.defineProperty(fetchError, "response", { get() {
    return response;
  } });
  Object.defineProperty(fetchError, "data", { get() {
    return response && response.data;
  } });
  return fetchError;
}
const payloadMethods = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(val) {
  if (val === void 0) {
    return false;
  }
  const t = typeof val;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(val)) {
    return true;
  }
  return val.constructor && val.constructor.name === "Object" || typeof val.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const jsonTypes = /* @__PURE__ */ new Set(["application/json", "application/ld+json"]);
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift();
  if (jsonTypes.has(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  409,
  425,
  429,
  500,
  502,
  503,
  504
]);
function createFetch(globalOptions) {
  const { fetch: fetch2, Headers: Headers2 } = globalOptions;
  function onError(ctx) {
    if (ctx.options.retry !== false) {
      const retries = typeof ctx.options.retry === "number" ? ctx.options.retry : isPayloadMethod(ctx.options.method) ? 0 : 1;
      const responseCode = ctx.response && ctx.response.status || 500;
      if (retries > 0 && retryStatusCodes.has(responseCode)) {
        return $fetchRaw(ctx.request, __spreadProps(__spreadValues({}, ctx.options), {
          retry: retries - 1
        }));
      }
    }
    const err = createFetchError(ctx.request, ctx.error, ctx.response);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, $fetchRaw);
    }
    throw err;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _opts = {}) {
    const ctx = {
      request: _request,
      options: __spreadValues(__spreadValues({}, globalOptions.defaults), _opts),
      response: void 0,
      error: void 0
    };
    if (ctx.options.onRequest) {
      await ctx.options.onRequest(ctx);
    }
    if (typeof ctx.request === "string") {
      if (ctx.options.baseURL) {
        ctx.request = withBase(ctx.request, ctx.options.baseURL);
      }
      if (ctx.options.params) {
        ctx.request = withQuery(ctx.request, ctx.options.params);
      }
      if (ctx.options.body && isPayloadMethod(ctx.options.method)) {
        if (isJSONSerializable(ctx.options.body)) {
          ctx.options.body = JSON.stringify(ctx.options.body);
          ctx.options.headers = new Headers2(ctx.options.headers);
          if (!ctx.options.headers.has("content-type")) {
            ctx.options.headers.set("content-type", "application/json");
          }
          if (!ctx.options.headers.has("accept")) {
            ctx.options.headers.set("accept", "application/json");
          }
        }
      }
    }
    ctx.response = await fetch2(ctx.request, ctx.options).catch(async (error) => {
      ctx.error = error;
      if (ctx.options.onRequestError) {
        await ctx.options.onRequestError(ctx);
      }
      return onError(ctx);
    });
    const responseType = (ctx.options.parseResponse ? "json" : ctx.options.responseType) || detectResponseType(ctx.response.headers.get("content-type") || "");
    if (responseType === "json") {
      const data = await ctx.response.text();
      const parseFn = ctx.options.parseResponse || destr;
      ctx.response.data = parseFn(data);
    } else {
      ctx.response.data = await ctx.response[responseType]();
    }
    if (ctx.options.onResponse) {
      await ctx.options.onResponse(ctx);
    }
    if (!ctx.response.ok) {
      if (ctx.options.onResponseError) {
        await ctx.options.onResponseError(ctx);
      }
    }
    return ctx.response.ok ? ctx.response : onError(ctx);
  };
  const $fetch2 = function $fetch22(request, opts) {
    return $fetchRaw(request, opts).then((r) => r.data);
  };
  $fetch2.raw = $fetchRaw;
  $fetch2.create = (defaultOptions = {}) => createFetch(__spreadProps(__spreadValues({}, globalOptions), {
    defaults: __spreadValues(__spreadValues({}, globalOptions.defaults), defaultOptions)
  }));
  return $fetch2;
}
const _globalThis = function() {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}();
const fetch = _globalThis.fetch || (() => Promise.reject(new Error("[ohmyfetch] globalThis.fetch is not supported!")));
const Headers = _globalThis.Headers;
const $fetch = createFetch({ fetch, Headers });
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch;
}
const nitroClient_791a00f4 = () => {
};
const components = {
  "IntroProgramming": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return IntroProgramming;
  }).then((c) => c.default || c)),
  "MetaHead": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return MetaHead;
  }).then((c) => c.default || c)),
  "Previewable": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Previewable;
  }).then((c) => c.default || c)),
  "UIH2": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return H2;
  }).then((c) => c.default || c)),
  "UIParallax": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Parallax;
  }).then((c) => c.default || c)),
  "PagesIndexLanguagesList": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return LanguagesList;
  }).then((c) => c.default || c)),
  "PagesIndexWelcome": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Welcome;
  }).then((c) => c.default || c)),
  "NavBarCol": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Col;
  }).then((c) => c.default || c)),
  "NavBarItemRow": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return ItemRow;
  }).then((c) => c.default || c)),
  "NavBarItems": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Items;
  }).then((c) => c.default || c)),
  "NavBar": vue_cjs_prod.defineAsyncComponent(() => Promise.resolve().then(function() {
    return NavBar;
  }).then((c) => c.default || c))
};
function components_515c5644(nuxtApp) {
  for (const name in components) {
    nuxtApp.vueApp.component(name, components[name]);
    nuxtApp.vueApp.component("Lazy" + name, components[name]);
  }
}
const _plugins = [
  preload,
  vueuseHead_2bd0ef56,
  plugin_348c134a,
  router_0f3f8dd6,
  vue3SmoothScroll_019d2282,
  nitroClient_791a00f4,
  components_515c5644
];
const _sfc_main$h = {
  setup() {
    const nuxtApp = useNuxtApp();
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_App = vue_cjs_prod.resolveComponent("App");
  serverRenderer.exports.ssrRenderSuspense(_push, {
    default: () => {
      _push(serverRenderer.exports.ssrRenderComponent(_component_App, null, null, _parent));
    },
    _: 1
  });
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/nuxt3/dist/app/components/nuxt-root.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const RootComponent = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$g = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_NuxtPage = vue_cjs_prod.resolveComponent("NuxtPage");
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent));
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../node_modules/nuxt3/dist/pages/runtime/app.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$5]]);
let entry;
const plugins = normalizePlugins(_plugins);
{
  entry = async function createNuxtAppServer(ssrContext = {}) {
    const vueApp = vue_cjs_prod.createApp(RootComponent);
    vueApp.component("App", AppComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    await applyPlugins(nuxt, plugins);
    await nuxt.hooks.callHook("app:created", vueApp);
    return vueApp;
  };
}
const bootstrap = (ctx) => entry(ctx);
const bootstrap$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": bootstrap
});
const _sfc_main$f = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    title: null,
    to: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, vue_cjs_prod.mergeProps({
        to: __props.to,
        class: "group"
      }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="font-semibold px-1"${_scopeId}>${serverRenderer.exports.ssrInterpolate(__props.title)}</span><div class="transition-all translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-primary h-1"${_scopeId}></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("span", { class: "font-semibold px-1" }, vue_cjs_prod.toDisplayString(__props.title), 1),
              vue_cjs_prod.createVNode("div", { class: "transition-all translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-primary h-1" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/NavBar/ItemRow.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const ItemRow = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$f
});
const _sfc_main$e = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    searchButtonClicked: null,
    hideItemsWhenSM: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBarItemRow = _sfc_main$f;
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: [__props.hideItemsWhenSM ? "hidden" : "flex", "sm:flex justify-around items-center space-x-6 lg:mx-8 xl:mx-12"]
      }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NavBarItemRow, {
        title: "\u6982\u8981",
        to: "/about"
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NavBarItemRow, {
        title: "\u4F5C\u54C1",
        to: "/about"
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NavBarItemRow, {
        title: "\u8A18\u4E8B",
        to: "/about"
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NavBarItemRow, {
        title: "\u5B9F\u7E3E",
        to: "/about"
      }, null, _parent));
      _push(serverRenderer.exports.ssrRenderComponent(_component_NavBarItemRow, {
        title: "\u6587\u5316\u796D",
        to: "/about"
      }, null, _parent));
      _push(`<button class="w-8 h-8 lg:w-24 lg:px-2 bg-stone-100 text-gray-600 hover:shadow-sm rounded-full border-2 border-transparent hover:border-primary flex justify-between items-center"><div class="w-5 mx-auto lg:mx-0">`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(SearchIcon), null, null, _parent));
      _push(`</div><p class="hidden lg:block my-auto">\u691C\u7D22</p></button></div>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/NavBar/Items.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Items = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$e
});
const _sfc_main$d = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    title: null,
    to: null
  },
  setup(__props) {
    var hover = vue_cjs_prod.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, vue_cjs_prod.mergeProps({
        to: __props.to,
        class: ""
      }, _attrs), {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${serverRenderer.exports.ssrRenderClass([vue_cjs_prod.unref(hover) ? "text-white" : "", "bg-position-left-out px-4 py-3 font-semibold"])}" data-v-4c940d66${_scopeId}><span class="text-lg" data-v-4c940d66${_scopeId}>${serverRenderer.exports.ssrInterpolate(__props.title)}</span><span data-v-4c940d66${_scopeId}>${serverRenderer.exports.ssrInterpolate(vue_cjs_prod.unref(hover))}</span></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                class: [vue_cjs_prod.unref(hover) ? "text-white" : "", "bg-position-left-out px-4 py-3 font-semibold"]
              }, [
                vue_cjs_prod.createVNode("span", { class: "text-lg" }, vue_cjs_prod.toDisplayString(__props.title), 1),
                vue_cjs_prod.createVNode("span", null, vue_cjs_prod.toDisplayString(vue_cjs_prod.unref(hover)), 1)
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/NavBar/Col.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-4c940d66"]]);
const Col = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __nuxt_component_1$1
});
const _imports_0$2 = "/_nuxt/assets/full-type2.939c16a1.svg";
const _imports_1$2 = "/_nuxt/assets/medium.479bb130.svg";
const _sfc_main$c = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var searchFieldHovered = vue_cjs_prod.ref(false);
    var isMenuOpened = vue_cjs_prod.ref(false);
    const toggleSearchField = () => {
      searchFieldHovered.value = !searchFieldHovered.value;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      const _component_NavBarItems = _sfc_main$e;
      const _component_NavBarCol = __nuxt_component_1$1;
      _push(`<nav${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "z-40 w-full" }, _attrs))}><div class="px-3 py-1 flex items-center justify-between border-b"><div class="">`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ""
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="sm:hidden h-12"${serverRenderer.exports.ssrRenderAttr("src", _imports_0$2)}${_scopeId}><img class="hidden sm:block h-12"${serverRenderer.exports.ssrRenderAttr("src", _imports_1$2)}${_scopeId}>`);
          } else {
            return [
              vue_cjs_prod.createVNode("img", {
                class: "sm:hidden h-12",
                src: _imports_0$2
              }),
              vue_cjs_prod.createVNode("img", {
                class: "hidden sm:block h-12",
                src: _imports_1$2
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="sm:hidden"><button type="button" class="flex flex-col h-12 w-12 rounded justify-center items-center group"><div class="${serverRenderer.exports.ssrRenderClass([
        vue_cjs_prod.unref(isMenuOpened) ? "rotate-45 translate-y-2 opacity-100" : "opacity-50 group-hover:opacity-100",
        "h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300"
      ])}"></div><div class="${serverRenderer.exports.ssrRenderClass([vue_cjs_prod.unref(isMenuOpened) ? "opacity-0" : "opacity-50 group-hover:opacity-100", "h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300"])}"></div><div class="${serverRenderer.exports.ssrRenderClass([
        vue_cjs_prod.unref(isMenuOpened) ? "-rotate-45 -translate-y-2 opacity-100" : "opacity-50 group-hover:opacity-100",
        "h-1 w-6 my-0.5 rounded-full bg-black transition ease transform duration-300"
      ])}"></div></button></div>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NavBarItems, {
        searchButtonClicked: toggleSearchField,
        hideItemsWhenSM: true
      }, null, _parent));
      _push(`</div><div class="sm:hidden absolute w-full shadow-lg bg-white z-40">`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(TransitionRoot), {
        show: vue_cjs_prod.unref(isMenuOpened),
        enter: "transition-transform  ease-in-out duration-75",
        "enter-from": "-translate-y-1 ",
        "enter-to": "translate-y-0 ",
        leave: "transition-opacity  ease-in-out duration-75",
        "leave-from": "translate-y-0 ",
        "leave-to": "-translate-y-1"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col -z-20 divide-y"${_scopeId}>`);
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NavBarCol, {
              title: "\u6982\u8981",
              to: "/about"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NavBarCol, {
              title: "\u4F5C\u54C1",
              to: "/about"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NavBarCol, {
              title: "\u8A18\u4E8B",
              to: "/about"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NavBarCol, {
              title: "\u5B9F\u7E3E",
              to: "/about"
            }, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(_component_NavBarCol, {
              title: "\u6587\u5316\u796D",
              to: "/about"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", { class: "flex flex-col -z-20 divide-y" }, [
                vue_cjs_prod.createVNode(_component_NavBarCol, {
                  title: "\u6982\u8981",
                  to: "/about"
                }),
                vue_cjs_prod.createVNode(_component_NavBarCol, {
                  title: "\u4F5C\u54C1",
                  to: "/about"
                }),
                vue_cjs_prod.createVNode(_component_NavBarCol, {
                  title: "\u8A18\u4E8B",
                  to: "/about"
                }),
                vue_cjs_prod.createVNode(_component_NavBarCol, {
                  title: "\u5B9F\u7E3E",
                  to: "/about"
                }),
                vue_cjs_prod.createVNode(_component_NavBarCol, {
                  title: "\u6587\u5316\u796D",
                  to: "/about"
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(TransitionRoot), {
        show: vue_cjs_prod.unref(isMenuOpened),
        enter: "transition-opacity ease-in-out duration-150",
        "enter-from": "opacity-0 ",
        "enter-to": "opacity-100 ",
        leave: "transition-opacity  ease-in-out duration-150",
        "leave-from": "opacity-100 ",
        "leave-to": "opacity-0"
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:hidden absolute w-full h-full bg-stone-800 bg-opacity-20"${_scopeId}></div>`);
          } else {
            return [
              vue_cjs_prod.createVNode("div", {
                class: "sm:hidden absolute w-full h-full bg-stone-800 bg-opacity-20",
                onClick: ($event) => vue_cjs_prod.isRef(isMenuOpened) ? isMenuOpened.value = false : isMenuOpened = false
              }, null, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/NavBar/NavBar.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const NavBar = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$c
});
const _sfc_main$b = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_NavBar = _sfc_main$c;
  _push(`<!--[-->`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NavBar, null, null, _parent));
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/default.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$4]]);
const _default$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _default
});
const _sfc_main$a = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
  _push(`<!--[--><div class="px-3 py-1">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: ""
  }, {
    default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img class="sm:hidden h-12"${serverRenderer.exports.ssrRenderAttr("src", _imports_0$2)}${_scopeId}><img class="hidden sm:block h-12"${serverRenderer.exports.ssrRenderAttr("src", _imports_1$2)}${_scopeId}>`);
      } else {
        return [
          vue_cjs_prod.createVNode("img", {
            class: "sm:hidden h-12",
            src: _imports_0$2
          }),
          vue_cjs_prod.createVNode("img", {
            class: "hidden sm:block h-12",
            src: _imports_1$2
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
  serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<!--]-->`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("layouts/nonavbar.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const nonavbar = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$3]]);
const nonavbar$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": nonavbar
});
const _sfc_main$9 = {
  async asyncData({ $content, params }) {
    const page = await $content("posts", params.slug).fetch();
    return {
      page
    };
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_content = vue_cjs_prod.resolveComponent("nuxt-content");
  _push(`<article${serverRenderer.exports.ssrRenderAttrs(_attrs)}><h1>${serverRenderer.exports.ssrInterpolate(_ctx.page.title)}</h1>`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_nuxt_content, { document: _ctx.page }, null, _parent));
  _push(`</article>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/_post.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _post = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$2]]);
const _post$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _post
});
const _sfc_main$8 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<p${serverRenderer.exports.ssrRenderAttrs(_attrs)}>this is About</p>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/about.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$1]]);
const about$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": about
});
const _sfc_main$7 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  props: {
    title: null,
    description: null,
    image: null
  },
  setup(__props) {
    const { title, image, description } = __props;
    const currentURL = "/_nuxt/";
    const ogImage = (image == null ? void 0 : image.href) || "/_nuxt//ogp/twitter.png";
    useMeta({
      title,
      meta: [
        {
          name: "description",
          content: description
        },
        {
          property: "og:title",
          content: title
        },
        {
          property: "og:description",
          content: description
        },
        {
          property: "og:url",
          content: currentURL
        },
        {
          property: "og:image",
          content: ogImage
        }
      ]
    });
    return () => {
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/MetaHead.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const MetaHead = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$7
});
const _sfc_main$6 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    strength: null,
    translate: { type: Boolean },
    rotate: { type: Boolean }
  },
  setup(__props) {
    const id = (() => {
      return "P" + Math.random().toString(36).substring(2, 9);
    })();
    vue_cjs_prod.ref(false);
    vue_cjs_prod.ref(0);
    useMouse({ touch: false });
    vue_cjs_prod.onMounted(() => {
      document.getElementById(id);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({ class: "flex" }, _attrs))}><div${serverRenderer.exports.ssrRenderAttr("id", vue_cjs_prod.unref(id))} class="parallax">`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/UI/Parallax.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Parallax = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$6
});
const _imports_0$1 = "/_nuxt/assets/ribbon-sm.7ea7e094.svg";
const _imports_1$1 = "/_nuxt/assets/ribbon-lg.eb452e64.svg";
const _imports_2$1 = "/_nuxt/assets/pc.cacd61ab.webp";
const _sfc_main$5 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    copy: null
  },
  setup(__props) {
    const { copy } = __props;
    const getSentences = () => {
      return copy.split("\\n");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIParallax = _sfc_main$6;
      const _component_NavBarItems = _sfc_main$e;
      _push(`<!--[--><div class="relative" data-v-a53135a2><img class="mobile-ribbon absolute z-10 w-full pl-20 pt-20 sm:hidden"${serverRenderer.exports.ssrRenderAttr("src", _imports_0$1)} data-v-a53135a2><img class="pc-ribbon absolute hidden sm:block z-0 w-max lg:-mr-10 xl:-mr-20 mt-8 lg:mt-0 xl:-mt-10"${serverRenderer.exports.ssrRenderAttr("src", _imports_1$1)} data-v-a53135a2><div class="absolute w-max ml-14 sm:ml-20 lg:ml-36 xl:ml-48 mt-14 lg:mt-12 xl:mt-10 z-50"${serverRenderer.exports.ssrRenderAttr("strength", 0)} data-v-a53135a2><!--[-->`);
      serverRenderer.exports.ssrRenderList(getSentences(), (sentence) => {
        _push(`<div class="font-bold text-4xl lg:text-5xl xl:text-6xl flex flex-col" data-v-a53135a2><span class="py-2 lg:py-3" data-v-a53135a2>${serverRenderer.exports.ssrInterpolate(sentence)}</span></div>`);
      });
      _push(`<!--]--></div><div class="relative z-10 pl-24 sm:w-7/12 lg:w-6/12 sm:ml-auto mr-4 pt-48 sm:pt-10 lg:pt-0 xl:pr-24" data-v-a53135a2>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_UIParallax, {
        strength: 10,
        translate: true,
        rotate: false
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class=""${serverRenderer.exports.ssrRenderAttr("width", 596)}${serverRenderer.exports.ssrRenderAttr("height", 689)}${serverRenderer.exports.ssrRenderAttr("src", _imports_2$1)} data-v-a53135a2${_scopeId}>`);
          } else {
            return [
              vue_cjs_prod.createVNode("img", {
                class: "",
                width: 596,
                height: 689,
                src: _imports_2$1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="px-3 py-3 flex items-center justify-between border-b" data-v-a53135a2>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NavBarItems, {
        class: "w-full",
        searchButtonClicked: () => {
        },
        hideItemsWhenSM: false
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/pages/index/Welcome.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a53135a2"]]);
const Welcome = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __nuxt_component_1
});
const _sfc_main$4 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const devicons = [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/denojs/denojs-original.svg",
      "https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/123b01d6a1700e326dc7c017d0d78a7383aa7b39/icons/brainfuck.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      "/icon/xcode.webp",
      "/icon/studio.webp",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="w-full h-full p-4 flex justify-center items-center" data-v-17bdb72e><p class="text-3xl font-semibold" data-v-17bdb72e>\u5275\u9020\u3002</p></div><div class="mt-2 my-5" data-v-17bdb72e><div class="flex w-full overflow-hidden rotate-1" data-v-17bdb72e><div class="devicons flex flex-nowrap space-x-1" data-v-17bdb72e><!--[-->`);
      serverRenderer.exports.ssrRenderList(devicons.length * 2, (index2) => {
        _push(`<div class="inline-block w-20" data-v-17bdb72e><img class="object-contain select-none"${serverRenderer.exports.ssrRenderAttr("src", devicons[(index2 - 1 + devicons.length) % devicons.length])} data-v-17bdb72e></div>`);
      });
      _push(`<!--]--></div></div><div class="flex w-full overflow-hidden rotate-1" data-v-17bdb72e><div class="devicons flex flex-nowrap space-x-1" data-v-17bdb72e><!--[-->`);
      serverRenderer.exports.ssrRenderList(devicons.length * 2, (index2) => {
        _push(`<div class="inline-block w-20" data-v-17bdb72e><img class="object-contain"${serverRenderer.exports.ssrRenderAttr("src", devicons[(index2 + 10 + devicons.length) % devicons.length])} data-v-17bdb72e></div>`);
      });
      _push(`<!--]--></div></div><div class="flex w-full overflow-hidden rotate-1" data-v-17bdb72e><div class="devicons flex flex-nowrap space-x-1" data-v-17bdb72e><!--[-->`);
      serverRenderer.exports.ssrRenderList(devicons.length * 2, (index2) => {
        _push(`<div class="inline-block w-20" data-v-17bdb72e><img class="object-contain"${serverRenderer.exports.ssrRenderAttr("src", devicons[(index2 + 20 + devicons.length) % devicons.length])} data-v-17bdb72e></div>`);
      });
      _push(`<!--]--></div></div></div><div class="bg-white text-lg mx-auto py-4 w-4/5 lg:w-3/5" data-v-17bdb72e><p data-v-17bdb72e> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum vel iusto similique inventore eos alias minus molestias, reiciendis repudiandae, culpa dignissimos itaque. Quia saepe eos officiis architecto inventore recusandae! Explicabo! </p></div><div class="w-full h-full flex justify-center items-center" data-v-17bdb72e><button class="border-2 border-primary rounded-xl transition-all hover:-translate-y-2 hover:shadow-xl hover:bg-primary hover:rounded-lg" data-v-17bdb72e><p class="font-bold py-3 px-6" data-v-17bdb72e>\u8A73\u3057\u304F\u898B\u308B</p></button></div><!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/pages/index/LanguagesList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-17bdb72e"]]);
const LanguagesList = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __nuxt_component_2
});
const _sfc_main$3 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  props: {
    id: null,
    title: null
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = vue_cjs_prod.resolveComponent("NuxtLink");
      _push(`<div${serverRenderer.exports.ssrRenderAttrs(vue_cjs_prod.mergeProps({
        class: "font-bold px-4 md:px-8 lg:px-10 xl:px-14",
        id: __props.id
      }, _attrs))}>`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_NuxtLink, {
        class: "flex items-center group",
        to: "#" + __props.id,
        href: "#" + __props.id
      }, {
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(HashtagIcon), { class: "block opacity-0 group-hover:opacity-100 border-b-2 border-transparent hover:border-primary w-9 fill-primary" }, null, _parent2, _scopeId));
            _push2(`<span class="text-3xl border-b-2 border-black border-opacity-0 group-hover:border-opacity-40"${_scopeId}>${serverRenderer.exports.ssrInterpolate(__props.title)}</span>`);
          } else {
            return [
              vue_cjs_prod.createVNode(vue_cjs_prod.unref(HashtagIcon), { class: "block opacity-0 group-hover:opacity-100 border-b-2 border-transparent hover:border-primary w-9 fill-primary" }),
              vue_cjs_prod.createVNode("span", { class: "text-3xl border-b-2 border-black border-opacity-0 group-hover:border-opacity-40" }, vue_cjs_prod.toDisplayString(__props.title), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/UI/H2.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const H2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$3
});
const _sfc_main$2 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var show = vue_cjs_prod.ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div>`);
      serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (vue_cjs_prod.unref(show)) {
        _push(`<div${serverRenderer.exports.ssrRenderAttrs(_attrs)}>`);
        serverRenderer.exports.ssrRenderTeleport(_push, (_push2) => {
          _push2(`<div class="fixed inset-0 bg-black bg-opacity-30 w-full h-full justify-center z-50"><div class="w-full h-full p-4 flex justify-center items-center">`);
          serverRenderer.exports.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          _push2(`</div></div>`);
        }, "body", false, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/Previewable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Previewable = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$2
});
const _imports_0 = "/_nuxt/assets/nuxt.df36685c.webp";
const _imports_1 = "/_nuxt/assets/xcode.f61b938f.webp";
const _imports_2 = "/_nuxt/assets/js.f491ab55.webp";
const _imports_3 = "/_nuxt/assets/python.d0102963.webp";
const _sfc_main$1 = /* @__PURE__ */ vue_cjs_prod.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIH2 = _sfc_main$3;
      const _component_Previewable = _sfc_main$2;
      _push(`<!--[-->`);
      _push(serverRenderer.exports.ssrRenderComponent(_component_UIH2, {
        id: "programming",
        title: "\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0"
      }, null, _parent));
      _push(`<div class="px-8 xl:px-12 md:flex w-full" data-v-65bdeb30><div class="px-8 md:px-10 py-4 w-full sm:w-4xl" data-v-65bdeb30>`);
      _push(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(carousel.exports.Carousel), {
        class: "w-full",
        "items-to-show": 1.5,
        autoplay: 2500,
        wrapAround: true,
        pauseAutoplayOnHover: true
      }, {
        addons: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(carousel.exports.Navigation), null, null, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(carousel.exports.Pagination), null, null, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(vue_cjs_prod.unref(carousel.exports.Navigation)),
              vue_cjs_prod.createVNode(vue_cjs_prod.unref(carousel.exports.Pagination))
            ];
          }
        }),
        default: vue_cjs_prod.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(carousel.exports.Slide), { key: "1" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_Previewable, null, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${serverRenderer.exports.ssrRenderAttr("src", _imports_0)} data-v-65bdeb30${_scopeId3}>`);
                      } else {
                        return [
                          vue_cjs_prod.createVNode("img", { src: _imports_0 })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_Previewable, null, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode("img", { src: _imports_0 })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(carousel.exports.Slide), { key: "2" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_Previewable, null, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${serverRenderer.exports.ssrRenderAttr("src", _imports_1)} data-v-65bdeb30${_scopeId3}>`);
                      } else {
                        return [
                          vue_cjs_prod.createVNode("img", { src: _imports_1 })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_Previewable, null, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode("img", { src: _imports_1 })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(carousel.exports.Slide), { key: "3" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_Previewable, null, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${serverRenderer.exports.ssrRenderAttr("src", _imports_2)} data-v-65bdeb30${_scopeId3}>`);
                      } else {
                        return [
                          vue_cjs_prod.createVNode("img", { src: _imports_2 })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_Previewable, null, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode("img", { src: _imports_2 })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.exports.ssrRenderComponent(vue_cjs_prod.unref(carousel.exports.Slide), { key: "4" }, {
              default: vue_cjs_prod.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(serverRenderer.exports.ssrRenderComponent(_component_Previewable, null, {
                    default: vue_cjs_prod.withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<img${serverRenderer.exports.ssrRenderAttr("src", _imports_3)} data-v-65bdeb30${_scopeId3}>`);
                      } else {
                        return [
                          vue_cjs_prod.createVNode("img", { src: _imports_3 })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    vue_cjs_prod.createVNode(_component_Previewable, null, {
                      default: vue_cjs_prod.withCtx(() => [
                        vue_cjs_prod.createVNode("img", { src: _imports_3 })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue_cjs_prod.createVNode(vue_cjs_prod.unref(carousel.exports.Slide), { key: "1" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_Previewable, null, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode("img", { src: _imports_0 })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(vue_cjs_prod.unref(carousel.exports.Slide), { key: "2" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_Previewable, null, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode("img", { src: _imports_1 })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(vue_cjs_prod.unref(carousel.exports.Slide), { key: "3" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_Previewable, null, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode("img", { src: _imports_2 })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              vue_cjs_prod.createVNode(vue_cjs_prod.unref(carousel.exports.Slide), { key: "4" }, {
                default: vue_cjs_prod.withCtx(() => [
                  vue_cjs_prod.createVNode(_component_Previewable, null, {
                    default: vue_cjs_prod.withCtx(() => [
                      vue_cjs_prod.createVNode("img", { src: _imports_3 })
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><p class="p-3 text-md md:w-3/5 min-w-min" data-v-65bdeb30> \u543E\u8F29\u306F\u732B\u3067\u3042\u308B\u3002\u540D\u524D\u306F\u307E\u3060\u7121\u3044\u3002<br data-v-65bdeb30> \u3000\u3069\u3053\u3067\u751F\u308C\u305F\u304B\u3068\u3093\u3068\u898B\u5F53\u304C\u3064\u304B\u306C\u3002\u4F55\u3067\u3082\u8584\u6697\u3044\u3058\u3081\u3058\u3081\u3057\u305F\u6240\u3067\u30CB\u30E3\u30FC\u30CB\u30E3\u30FC\u6CE3\u3044\u3066\u3044\u305F\u4E8B\u3060\u3051\u306F\u8A18\u61B6\u3057\u3066\u3044\u308B\u3002\u543E\u8F29\u306F\u3053\u3053\u3067\u59CB\u3081\u3066\u4EBA\u9593\u3068\u3044\u3046\u3082\u306E\u3092\u898B\u305F\u3002\u3057\u304B\u3082\u3042\u3068\u3067\u805E\u304F\u3068\u305D\u308C\u306F\u66F8\u751F\u3068\u3044\u3046\u4EBA\u9593\u4E2D\u3067\u4E00\u756A\u7370\u60AA\u306A\u7A2E\u65CF\u3067\u3042\u3063\u305F\u305D\u3046\u3060\u3002\u3053\u306E\u66F8\u751F\u3068\u3044\u3046\u306E\u306F\u6642\u3005\u6211\u3005\u3092\u6355\u3048\u3066\u716E\u3066\u98DF\u3046\u3068\u3044\u3046\u8A71\u3067\u3042\u308B\u3002\u3057\u304B\u3057\u305D\u306E\u5F53\u6642\u306F\u4F55\u3068\u3044\u3046\u8003\u3082\u306A\u304B\u3063\u305F\u304B\u3089\u5225\u6BB5\u6050\u3057\u3044\u3068\u3082\u601D\u308F\u306A\u304B\u3063\u305F\u3002 </p></div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("components/IntroProgramming.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-65bdeb30"]]);
const IntroProgramming = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __nuxt_component_3
});
const _sfc_main = {
  layout: "nonavbar"
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_MetaHead = _sfc_main$7;
  const _component_PagesIndexWelcome = __nuxt_component_1;
  const _component_PagesIndexLanguagesList = __nuxt_component_2;
  const _component_IntroProgramming = __nuxt_component_3;
  const _component_UIH2 = _sfc_main$3;
  _push(`<!--[-->`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_MetaHead, {
    title: "\u30DB\u30FC\u30E0\uFF5C\u6D77\u57CE\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u90E8",
    description: "\u6D77\u57CE\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u90E8"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_PagesIndexWelcome, { copy: "\u65B0\u3057\u3044\\n\u4E16\u754C\u306B\\n\u8E0F\u307F\u8FBC\u3080" }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_PagesIndexLanguagesList, null, null, _parent));
  _push(`<div class="my-4 lg:mx-6 xl:mx-8">`);
  _push(serverRenderer.exports.ssrRenderComponent(_component_IntroProgramming, null, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_UIH2, {
    id: "music",
    title: "\u97F3\u697D\u5236\u4F5C"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_UIH2, {
    id: "3dcg",
    title: "3DCG"
  }, null, _parent));
  _push(serverRenderer.exports.ssrRenderComponent(_component_UIH2, {
    id: "art",
    title: "\u30C7\u30B8\u30BF\u30EB\u30A2\u30FC\u30C8"
  }, null, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue_cjs_prod.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index
});

export { entry$1 as default };
