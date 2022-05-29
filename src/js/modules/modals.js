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
  document.body.style.overflow = 'unset';
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
};

function showThanksModal(message, ModalSelector) {
  const prevModalDialog = document.querySelector('.modal__dialog');

  prevModalDialog.classList.add('modal__hide');
  openModal(ModalSelector);

  const thanksModal = document.createElement('div');
  thanksModal.classList.add('modal__dialog');
  thanksModal.innerHTML = `
    <div class = "modal__content">
      <div class = "modal__title">${message}</div>
    </div>
    `;

  document.querySelector('.modal').append(thanksModal);
  setTimeout(() => {
    thanksModal.remove();
    prevModalDialog.classList.add('modal__show');
    prevModalDialog.classList.remove('modal__hide');
    closeModal(ModalSelector);
  }, 3500);
};

export default modals;

export {
  showThanksModal
};