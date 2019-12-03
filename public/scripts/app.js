'use strict';

console.log("app running");
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//live-server public
//JSX - Javascript XML
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
var removeOnSub = function removeOnSub(e) {
    app.options = [];
    console.log("borranding");
    rendNew();
};

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title,
        '} '
    ),
    React.createElement(
        'p',
        null,
        'Cantidad de opciones: ',
        app.options.length
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            ' ',
            React.createElement(
                'p',
                null,
                app.options
            )
        )
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
            '} '
        ),
        React.createElement(
            'p',
            null,
            'Cantidad de opciones: ',
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                ' ',
                React.createElement(
                    'p',
                    null,
                    app.options
                )
            )
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
            )
        )
    );

    var appRoot = document.getElementById('app');
    ReactDOM.render(template2, appRoot);
};

rendNew();
