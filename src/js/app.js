//import * as flsFunctions from "./modules/functions.js";
//flsFunctions.thisTest();

// 'use strict';

// burger

// let header_menu = document.querySelector('.menu__body');
// let burger_icon = document.querySelector('.icon-menu');
// burger_icon.addEventListener('click', function (e) {
//   header_menu.classList.toggle('_active');
//   burger_icon.classList.toggle('_active');
//   document.body.classList.toggle('_lock');
// });

// =========================================================

// ibg

// function ibg() {
//     let ibg = document.querySelectorAll('._ibg');
//     for (var i = 0; i < ibg.length; i++) {
//       if (ibg[i].querySelector('img')) {
//         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
//       }
//     }
//   }

//   ibg();

// =========================================================

// smooth scroll
// data-goto=".main-slider"

// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if (menuLinks.length > 0) {
//   menuLinks.forEach((menuLink) => {
//     menuLink.addEventListener('click', onMenuLinkClick);
//   });

//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
//       const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue =
//         gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

//       if (burger_icon.classList.contains('_active')) {
//         document.body.classList.remove('_lock');
//         burger_icon.classList.remove('_active');
//         header_menu.classList.remove('_active');
//       }

//       window.scrollTo({
//         top: gotoBlockValue,
//         behavior: 'smooth',
//       });
//       e.preventDefault();
//     }
//   }
// }

// =========================================================

// Dynamic Adaptive
// data-da=".menu__body,767,1"

// function DynamicAdapt(type) {
//     this.type = type;
//   }

//   DynamicAdapt.prototype.init = function () {
//     const _this = this;
//     // ???????????? ????????????????
//     this.??bjects = [];
//     this.daClassname = '_dynamic_adapt_';
//     // ???????????? DOM-??????????????????
//     this.nodes = document.querySelectorAll('[data-da]');

//     // ???????????????????? ??bjects ????????????????
//     for (let i = 0; i < this.nodes.length; i++) {
//       const node = this.nodes[i];
//       const data = node.dataset.da.trim();
//       const dataArray = data.split(',');
//       const ??bject = {};
//       ??bject.element = node;
//       ??bject.parent = node.parentNode;
//       ??bject.destination = document.querySelector(dataArray[0].trim());
//       ??bject.breakpoint = dataArray[1] ? dataArray[1].trim() : '767';
//       ??bject.place = dataArray[2] ? dataArray[2].trim() : 'last';
//       ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
//       this.??bjects.push(??bject);
//     }

//     this.arraySort(this.??bjects);

//     // ???????????? ???????????????????? ??????????-????????????????
//     this.mediaQueries = Array.prototype.map.call(
//       this.??bjects,
//       function (item) {
//         return '(' + this.type + '-width: ' + item.breakpoint + 'px),' + item.breakpoint;
//       },
//       this
//     );
//     this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
//       return Array.prototype.indexOf.call(self, item) === index;
//     });

//     // ?????????????????????? ?????????????????? ???? ??????????-????????????
//     // ?? ?????????? ?????????????????????? ?????? ???????????? ??????????????
//     for (let i = 0; i < this.mediaQueries.length; i++) {
//       const media = this.mediaQueries[i];
//       const mediaSplit = String.prototype.split.call(media, ',');
//       const matchMedia = window.matchMedia(mediaSplit[0]);
//       const mediaBreakpoint = mediaSplit[1];

//       // ???????????? ???????????????? ?? ???????????????????? ????????????????????????
//       const ??bjectsFilter = Array.prototype.filter.call(this.??bjects, function (item) {
//         return item.breakpoint === mediaBreakpoint;
//       });
//       matchMedia.addListener(function () {
//         _this.mediaHandler(matchMedia, ??bjectsFilter);
//       });
//       this.mediaHandler(matchMedia, ??bjectsFilter);
//     }
//   };

//   DynamicAdapt.prototype.mediaHandler = function (matchMedia, ??bjects) {
//     if (matchMedia.matches) {
//       for (let i = 0; i < ??bjects.length; i++) {
//         const ??bject = ??bjects[i];
//         ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
//         this.moveTo(??bject.place, ??bject.element, ??bject.destination);
//       }
//     } else {
//       for (let i = 0; i < ??bjects.length; i++) {
//         const ??bject = ??bjects[i];
//         if (??bject.element.classList.contains(this.daClassname)) {
//           this.moveBack(??bject.parent, ??bject.element, ??bject.index);
//         }
//       }
//     }
//   };

//   // ?????????????? ??????????????????????
//   DynamicAdapt.prototype.moveTo = function (place, element, destination) {
//     element.classList.add(this.daClassname);
//     if (place === 'last' || place >= destination.children.length) {
//       destination.insertAdjacentElement('beforeend', element);
//       return;
//     }
//     if (place === 'first') {
//       destination.insertAdjacentElement('afterbegin', element);
//       return;
//     }
//     destination.children[place].insertAdjacentElement('beforebegin', element);
//   };

//   // ?????????????? ????????????????
//   DynamicAdapt.prototype.moveBack = function (parent, element, index) {
//     element.classList.remove(this.daClassname);
//     if (parent.children[index] !== undefined) {
//       parent.children[index].insertAdjacentElement('beforebegin', element);
//     } else {
//       parent.insertAdjacentElement('beforeend', element);
//     }
//   };

//   // ?????????????? ?????????????????? ?????????????? ???????????? ????????????????
//   DynamicAdapt.prototype.indexInParent = function (parent, element) {
//     const array = Array.prototype.slice.call(parent.children);
//     return Array.prototype.indexOf.call(array, element);
//   };

//   // ?????????????? ???????????????????? ?????????????? ???? breakpoint ?? place
//   // ???? ?????????????????????? ?????? this.type = min
//   // ???? ???????????????? ?????? this.type = max
//   DynamicAdapt.prototype.arraySort = function (arr) {
//     if (this.type === 'min') {
//       Array.prototype.sort.call(arr, function (a, b) {
//         if (a.breakpoint === b.breakpoint) {
//           if (a.place === b.place) {
//             return 0;
//           }

//           if (a.place === 'first' || b.place === 'last') {
//             return -1;
//           }

//           if (a.place === 'last' || b.place === 'first') {
//             return 1;
//           }

//           return a.place - b.place;
//         }

//         return a.breakpoint - b.breakpoint;
//       });
//     } else {
//       Array.prototype.sort.call(arr, function (a, b) {
//         if (a.breakpoint === b.breakpoint) {
//           if (a.place === b.place) {
//             return 0;
//           }

//           if (a.place === 'first' || b.place === 'last') {
//             return 1;
//           }

//           if (a.place === 'last' || b.place === 'first') {
//             return -1;
//           }

//           return b.place - a.place;
//         }

//         return b.breakpoint - a.breakpoint;
//       });
//       return;
//     }
//   };

//   const da = new DynamicAdapt('max');
//   da.init();

// =========================================================

//Spoilers
// const spollersArray = document.querySelectorAll('[data-spollers]');
// if (spollersArray.length > 0) {
//   //?????????????????? ?????????????? ??????????????????
//   const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {
//     return !item.dataset.spollers.split(',')[0];
//   });

//   //?????????????????????????? ?????????????? ??????????????????
//   if (spollersRegular.length > 0) {
//     initSpollers(spollersRegular);
//   }

//   //?????????????????? ?????????????????? ?? ?????????? ??????????????????
//   const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {
//     return item.dataset.spollers.split(',')[0];
//   });

//   //?????????????????????????? ?????????????????? ?? ?????????? ??????????????????
//   if (spollersMedia.length > 0) {
//     const breakpointsArray = [];
//     spollersMedia.forEach((item) => {
//       const params = item.dataset.spollers;
//       const breakpoint = {};
//       const paramsArray = params.split(',');
//       breakpoint.value = paramsArray[0];
//       breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';
//       breakpoint.item = item;
//       breakpointsArray.push(breakpoint);
//     });

//     //???????????????? ???????????????????? ??????????????????????
//     let mediaQueries = breakpointsArray.map(function (item) {
//       return '(' + item.type + '-width: ' + item.value + 'px),' + item.value + ',' + item.type;
//     });
//     mediaQueries = mediaQueries.filter(function (item, index, self) {
//       return self.indexOf(item) === index;
//     });

//     //???????????????? ?? ???????????? ????????????????????????
//     mediaQueries.forEach((breakpoint) => {
//       const paramsArray = breakpoint.split(',');
//       const mediaBreakpoint = paramsArray[1];
//       const mediaType = paramsArray[2];
//       const matchMedia = window.matchMedia(paramsArray[0]);

//       //?????????????? ?? ?????????????? ??????????????????
//       const spollersArray = breakpointsArray.filter(function (item) {
//         if (item.value === mediaBreakpoint && item.type === mediaType) {
//           return true;
//         }
//       });

//       //??????????????
//       matchMedia.addEventListener('change', () => {
//         initSpollers(spollersArray, matchMedia);
//       });
//       initSpollers(spollersArray, matchMedia);
//     });
//   }

//   //??????????????????????????
//   function initSpollers(spollersArray, matchMedia = false) {
//     spollersArray.forEach((spollersBlock) => {
//       spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
//       if (matchMedia.matches || !matchMedia) {
//         spollersBlock.classList.add('_init');
//         initSpollerBody(spollersBlock);
//         spollersBlock.addEventListener('click', setSpollerAction);
//       } else {
//         spollersBlock.classList.remove('_init');
//         initSpollerBody(spollersBlock, false);
//         spollersBlock.removeEventListener('click', setSpollerAction);
//       }
//     });
//   }
//   //???????????? ?? ??????????????????
//   function initSpollerBody(spollersBlock, hideSpollerBody = true) {
//     const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');

//     if (spollerTitles.length > 0) {
//       spollerTitles.forEach((spollerTitle) => {
//         if (hideSpollerBody) {
//           spollerTitle.removeAttribute('tabindex');
//           if (!spollerTitle.classList.contains('_active')) {
//             spollerTitle.nextElementSibling.hidden = true;
//           }
//         } else {
//           spollerTitle.setAttribute('tabindex', '-1');
//           spollerTitle.nextElementSibling.hidden = false;
//         }
//       });
//     }
//   }
//   function setSpollerAction(e) {
//     const el = e.target;
//     if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
//       const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
//       const spollersBlock = spollerTitle.closest('[data-spollers]');
//       const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
//       if (!spollersBlock.querySelectorAll('._slide').length) {
//         if (oneSpoller && !spollerTitle.classList.contains('_active')) {
//           hideSpollersBody(spollersBlock);
//         }
//         spollerTitle.classList.toggle('_active');
//         _slideToggle(spollerTitle.nextElementSibling, 500);
//       }
//       e.preventDefault();
//     }
//   }
//   function hideSpollersBody(spollersBlock) {
//     const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
//     if (spollerActiveTitle) {
//       spollerActiveTitle.classList.remove('_active');
//       _slideUp(spollerActiveTitle.nextElementSibling, 500);
//     }
//   }
// }

// let _slideUp = (target, duration = 500) => {
//   if (!target.classList.contains('_slide')) {
//     target.classList.add('_slide');
//     target.style.transitionProperty = 'height, margin, padding';
//     target.style.transitionDuration = duration + 'ms';
//     target.style.height = target.offsetHeight + 'px';
//     target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;

//     window.setTimeout(() => {
//       target.hidden = true;
//       target.style.removeProperty('height');
//       target.style.removeProperty('padding-top');
//       target.style.removeProperty('padding-bottom');
//       target.style.removeProperty('margin-top');
//       target.style.removeProperty('margin-bottom');
//       target.style.removeProperty('overflow');
//       target.style.removeProperty('transition-duration');
//       target.style.removeProperty('transition-property');
//       target.classList.remove('_slide');
//     }, duration);
//   }
// };

// let _slideDown = (target, duration = 500) => {
//   if (!target.classList.contains('_slide')) {
//     target.classList.add('_slide');
//     if (target.hidden) {
//       target.hidden = false;
//     }
//     let height = target.offsetHeight;
//     target.style.overflow = 'hidden';
//     target.style.height = 0;
//     target.style.paddingTop = 0;
//     target.style.paddingBottom = 0;
//     target.style.marginTop = 0;
//     target.style.marginBottom = 0;
//     target.offsetHeight;
//     target.style.transitionProperty = 'height, margin, padding';
//     target.style.transitionDuration = duration + 'ms';
//     target.style.height = height + 'px';
//     target.style.removeProperty('padding-top');
//     target.style.removeProperty('padding-bottom');
//     target.style.removeProperty('margin-top');
//     target.style.removeProperty('margin-bottom');

//     window.setTimeout(() => {
//       target.style.removeProperty('height');
//       target.style.removeProperty('overflow');
//       target.style.removeProperty('transition-duration');
//       target.style.removeProperty('transition-property');
//       target.classList.remove('_slide');
//     }, duration);
//   }
// };

// let _slideToggle = (target, duration = 500) => {
//   if (target.hidden) {
//     return _slideDown(target, duration);
//   } else {
//     return _slideUp(target, duration);
//   }
// };

// ?????? ???????????????? ?????????????? data-spollers
// ?????? ?????????????????? ???????????????? ?????????????? data-spoller
// ??????????: data-spollers="992,max (or min)"

// ???????? ?????????? ???????????????????? ???????????? ???????? ?????????????? ?? ?????????? - ?????????????????? ?????????????? data-one-spoller

// ?????? ???????????????? ?????????????????????? ?????????? _init:
// ?????? ?????????????????? ?????????????????????? ?????????? _active
