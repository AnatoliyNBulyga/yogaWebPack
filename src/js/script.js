window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let tabs = require('./parts/tabs.js'),
        counter = require('./parts/counter.js'),
        form = require('./parts/form.js'),
        modal = require('./parts/modal.js'),
        slider = require('./parts/slider.js'),
        calc = require('./parts/calc.js');

    tabs();
    counter();
    form();
    modal();
    slider();
    calc();
});