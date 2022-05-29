function tabs({
  tabsContainerSelector,
  tabsTriggerSelector,
  tabsButtonSelector,
  tabsContentSelector,
  tabsParentSelector,
  itemsContentSelector,
  itemsListContentSelector,
  itemsNextSelector,
  itemsPrevSelector,
  tabsInnerButton = 'catalog__tab__active',
  tabsInnerContent = 'catalog__content__active',
  tabsInnerContentDescr = 'catalog-item__content__active',
  tabsInnerContentList = 'catalog-item__list__active'

}) {
  /// TABS

  const tabsContainer = document.querySelector(tabsContainerSelector),
    tabsTrigger = tabsContainer.querySelectorAll(tabsTriggerSelector),
    tabsButton = tabsContainer.querySelectorAll(tabsButtonSelector),
    tabsContent = tabsContainer.querySelectorAll(tabsContentSelector),
    tabsParent = tabsContainer.querySelector(tabsParentSelector),
    itemsContent = tabsContainer.querySelectorAll(itemsContentSelector),
    itemsListContent = tabsContainer.querySelectorAll(itemsListContentSelector),
    itemsNext = tabsContainer.querySelectorAll(itemsNextSelector),
    itemsPrev = tabsContainer.querySelectorAll(itemsPrevSelector);

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains(tabsTriggerSelector.slice(1, 4))) {
      tabsTrigger.forEach((item, i) => {
        if (target == item) {
          tabsContent.forEach((item, i) => {
            tabsButton[i].classList.remove(tabsInnerButton);
            tabsContent[i].classList.remove(tabsInnerContent);
          });
          tabsButton[i].classList.add(tabsInnerButton);
          tabsContent[i].classList.add(tabsInnerContent);
        }
      });
    }
  });

  function toggleItemsClass(event, i) {
    event.preventDefault();
    itemsContent[i].classList.toggle(tabsInnerContentDescr);
    itemsListContent[i].classList.toggle(tabsInnerContentList);
  }

  itemsNext.forEach((item, i) => {
    item.addEventListener('click', (event) => {
      toggleItemsClass(event, i)
    })
  });

  itemsPrev.forEach((item, i) => {
    item.addEventListener('click', (event) => {
      toggleItemsClass(event, i)
    })
  });
};

export default tabs;