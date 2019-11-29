'use strict';

console.log("app running");

//JSX - Javascript XML


var user = {
    name: '',
    edad: 28,
    lugar: 'casa'
};

function getLocation(lugar) {
    if (lugar == 'casa') {
        return React.createElement(
            'p',
            null,
            ' location: ',
            lugar,
            ' '
        );
    }
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name ? user.name : 'anonimo',
        ' '
    ),
    getLocation(user.lugar)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
