
// SCI Patient Education
// Developed by George Marzloff, MD and Marwa Mekki, MD
// Released in 2018

var app = new Framework7({
    root: '#app',
    name: 'SCI Patient Education',
    id: 'com.openrehab.scipteducation',
    theme: 'ios', // can be 'ios', 'md' for android, or 'auto' which picks md for everything but iOS devices
    routes: routes,  // defined in routes.js,
    view: {
        stackPages: true /* saves more than 2 pages in the DOM so user can still return to the index.html page after following multiple links */
    }
});

var mainView = app.views.create('.view-main');
