import {
  openModal,
  closeModal
} from './modals.js'

function forms(ModalSelector) {
  /// FORMS

  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'static/img/spinner.svg',
    success: 'Спасибо! Скоро свяжемся',
    failure: 'Ошибка'
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: data
    });

    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
        display: block;
        margin: 0 auto;
      `;

      form.append(statusMessage);

      const formData = new FormData(form);
      const json = JSON.stringify(Object.fromEntries(formData.entries()));
      const object = {};

      formData.forEach(function (value, key) {
        object[key] = value;
      });

      postData('http://localhost:3000/api/post', json)
        .then(data => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        }).catch((error) => {
          console.log(error);
          showThanksModal(message.failure);
        }).finally(() => {
          form.reset();
        })
    });
  };

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('modal__hide');
    openModal(ModalSelector);

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
      <div class = "modal__content" style="background-color: burlywood; border-radius: 10px; display: flex; height: 100px; align-items: center; justify-content: center;">
        <div class = "modal__title" style="height: 20px">${message}</div>
      </div>
      `;

    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add('modal__show');
      prevModalDialog.classList.remove('modal__hide');
      closeModal(ModalSelector);
    }, 3500);
  }
}

export default forms;