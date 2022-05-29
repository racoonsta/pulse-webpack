import {
  showThanksModal
} from './modals.js'

function forms(ModalSelector) {
  /// FORMS

  const forms = document.querySelectorAll('form');

  const message = {
    loading: 'static/img/spinner.svg',
    success: 'Спасибо! Скоро свяжемся!',
    failure: 'Ошибка!'
  };

  forms.forEach(item => {
    bindPostData(item);
  });

  const postData = async (url, data, form) => {
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
      const json = JSON.stringify(formData);
      const object = {};

      formData.forEach(function (value, key) {
        object[key] = value;
      });

      postData('http://localhost:3000/api/post', json, form)
        .then(data => {
          console.log(data);
          showThanksModal(message.success, ModalSelector);
          statusMessage.remove();
        }).catch((error) => {
          console.log(error);
          showThanksModal(message.failure, ModalSelector);
        }).finally(() => {
          form.reset();
        })
    }, {
      'once': true
    });
  };

}

export default forms;