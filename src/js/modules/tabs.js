function tabs({
  tabsTriggerSelector,
  tabsButtonSelector,
  tabsContentSelector,
  tabsParentSelector,
  itemsContentSelector,
  itemsListContentSelector,
  itemsNextSelector,
  itemsPrevSelector,
  ////////////
  tabsInnerButton = 'catalog__tab_active',
  tabsInnerContent = 'catalog__content_active',
  tabsInnerContentDescr = 'catalog-item__content_active',
  tabsInnerContentList = 'catalog-item__list_active'

}) {
  /// TABS
  //console.log(tabsInnerContent);

  const tabsTrigger = document.querySelectorAll(tabsTriggerSelector),
    tabsButton = document.querySelectorAll(tabsButtonSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector),
    itemsContent = document.querySelectorAll(itemsContentSelector),
    itemsListContent = document.querySelectorAll(itemsListContentSelector),
    itemsNext = document.querySelectorAll(itemsNextSelector),
    itemsPrev = document.querySelectorAll(itemsPrevSelector);

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains(tabsTriggerSelector)) {
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