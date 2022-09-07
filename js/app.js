'use strict';

(function () {
    function init() {
        const router = new Router([
            new Route('home', 'home.html', true),
            new Route('offer', 'offer.html'),
            new Route('realizations', 'realizations.html'),
            new Route('contact', 'contact.html'),
        ]);
    }
    init();
}());