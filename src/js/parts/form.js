function form() {

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо за заявку. Скоро мы свяжемся с вами',
        failure: 'Что-то пошло не так...'
    };

    const form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        contactForm = document.getElementById('form'),
        inputContactForm = contactForm.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    const sendPost = function(form) {
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'aplication/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function(key, value) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);

        request.send(json);

        request.addEventListener('readystatechange', function() {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState == 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

    }

    const clearInput = function(inputField) {
        for (let i = 0; i < inputField.length; i++) {

            inputField[i].value = '';

        }

    }

    form.addEventListener('submit', function(evant) {

        evant.preventDefault();

        sendPost(form);
        clearInput(input);

    });

    contactForm.addEventListener('submit', function(event) {

        event.preventDefault();

        sendPost(contactForm);
        clearInput(inputContactForm);

    });

}

module.exports = form;