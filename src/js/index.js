"use strict";

import "../scss/style.scss";
import slider from './modules/slider';
import tabs from './modules/tabs';
import hrefs from './modules/hrefs';
import modals from './modules/modals';
import forms from './modules/forms';

document.addEventListener(('DOMContentLoaded'), () => {
  slider('.slide', '.slider-inner', '.slider-wrapper', '.dot', 'true');
  tabs({
    tabsTriggerSelector: '.tab',
    tabsButtonSelector: '.catalog__tab',
    tabsContentSelector: '.catalog__content',
    tabsParentSelector: '.catalog__tabs',
    itemsContentSelector: '.catalog-item__content',
    itemsListContentSelector: '.catalog-item__list',
    itemsNextSelector: '.catalog-item__link',
    itemsPrevSelector: '.catalog-item__back'
  });
  hrefs();
  modals('.button_main', '.modal');
  forms('.modal');

});