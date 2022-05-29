"use strict";

import "../scss/style.scss";
import slider from './modules/slider';
import tabs from './modules/tabs';
import modals from './modules/modals';
import forms from './modules/forms';

document.addEventListener(('DOMContentLoaded'), () => {

  slider({
    sliderContainerSelector: '.slider',
    sliderWrapperSelector: '.slider-wrapper',
    sliderInnerSelector: '.slider-inner',
    sliderItemsSelector: '.slide',
    dotsSelector: '.dot',
    automationTrigger: true
  });

  tabs({
    tabsContainerSelector: '.catalog',
    tabsTriggerSelector: '.tab',
    tabsButtonSelector: '.catalog__tab',
    tabsContentSelector: '.catalog__content',
    tabsParentSelector: '.catalog__tabs',
    itemsContentSelector: '.catalog-item__content',
    itemsListContentSelector: '.catalog-item__list',
    itemsNextSelector: '.catalog-item__link',
    itemsPrevSelector: '.catalog-item__back'
  });
  modals('.button__main', '.modal');
  forms('.modal');

});