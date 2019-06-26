function modal() {

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        closeButton = document.querySelector('.popup-close'),
        infoContainer = document.querySelector('.info');


    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    closeButton.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    infoContainer.addEventListener('click', function(event) {
        let target = event.target;

        if (target && target.classList.contains('description-btn')) {
            overlay.style.display = 'block';
            target.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        }

    });

}

module.exports = modal;