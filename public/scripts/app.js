'use strict';

console.log("app running");

//JSX - Javascript XML


var user = {
    name: '',
    edad: 8,
    lugar: 'casa',
    opt: ['one', 'two']
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
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.lugar),
    user.opt.length >= 0 && React.createElement(
        'p',
        null,
        'Opciones: ',
        user.opt[0],
        ' ',
        user.opt[1]
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
