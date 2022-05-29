function openModal(ModalSelector) {
  const modal = document.querySelector(ModalSelector);
  modal.classList.add('modal__show');
  modal.classList.remove('modal__hide');
  document.body.style.overflow = 'hidden';
};

function closeModal(ModalSelector) {
  const modal = document.querySelector(ModalSelector);
  modal.classList.add('modal__hide');
  modal.classList.remove('modal__show');
  document.body.style.overflow = '';
};

function modals(TriggerSelector, ModalSelector) {
  /// MODALS

  const consultTrigger = document.querySelector(TriggerSelector),
    modal = document.querySelector(ModalSelector);

  consultTrigger.addEventListener('click', () => openModal(ModalSelector)); // при подстановке значение как аргумента, функция выполняется сразу, поэтому мы оборачиваем её в стрелочную


  modal.addEventListener('click', (event) => {
    if (event.target == modal || event.target.getAttribute('data-close') == '') {
      closeModal(ModalSelector);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape' && modal.classList.contains('modal__show')) {
      closeModal(ModalSelector);
    }
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal(ModalSelector);
      window.removeEventListener('scroll', showModalByScroll);
    }
  };

  window.addEventListener('scroll', showModalByScroll);
}

export default modals;
export {
  closeModal,
  openModal
};