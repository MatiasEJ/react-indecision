'use strict';

console.log("app running");
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public
//JSX - Javascript XML

// const React = require('react'); 

var app = {
    title: 'IndescApp',
    edad: 8,
    lugar: ['buenos aires', 'lo de tu vieja'],
    options: []

};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    console.log("formSubtmited");

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        rendNew();
    }
};

//removeall
var removeOnSub = function removeOnSub() {
    app.options = [];
    console.log("borranding");
    rendNew();
};

// DECISION
var makeDecision = function makeDecision() {
    var rndNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[rndNum];
    alert(option);
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title,
        ' '
    ),
    React.createElement(
        'p',
        null,
        'Cantidad de opciones: ',
        app.options.length
    ),
    React.createElement(
        'form',
        { onSubmit: onFormSubmit },
        React.createElement('input', { type: 'text', name: 'option' }),
        React.createElement(
            'button',
            null,
            'AddOpt'
        ),
        React.createElement(
            'button',
            { onClick: removeOnSub },
            'delete'
        ),
        React.createElement(
            'button',
            { onClick: makeDecision },
            'DECISION'
        )
    )
);

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);

var rendNew = function rendNew() {
    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title,
            ' '
        ),
        React.createElement(
            'p',
            null,
            'Cantidad de opciones: ',
            app.options.length
        ),
        app.options.map(function (num) {
            return React.createElement(
                'p',
                { key: num },
                'Tarea: ',
                num
            );
        }),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'AddOpt'
            ),
            React.createElement(
                'button',
                { onClick: removeOnSub },
                'delete'
            ),
            React.createElement(
                'button',
                { disabled: app.options.length == 0, onClick: makeDecision },
                'DECISION'
            )
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template2, appRoot);
};

rendNew();
