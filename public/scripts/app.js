'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecApp = function (_React$Component) {
    _inherits(IndecApp, _React$Component);

    function IndecApp(props) {
        _classCallCheck(this, IndecApp);

        var _this = _possibleConstructorReturn(this, (IndecApp.__proto__ || Object.getPrototypeOf(IndecApp)).call(this, props));

        _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
        _this.state = {
            options: ['thing1', 'thing2']
        };
        return _this;
    }
    //handleDeleteOptions


    _createClass(IndecApp, [{
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var title = "IndecApp";
            var subtitle = "subtitle of indecApp";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions
                }),
                React.createElement(AddOption, null)
            );
        }
    }]);

    return IndecApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    this.props.title
                ),
                React.createElement(
                    'p',
                    null,
                    this.props.subtitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: 'handlePick',
        value: function handlePick() {

            alert('handlepick');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'button',
                {
                    onClick: this.handlePick,
                    disabled: !this.props.hasOptions
                },
                ' what should i do '
            );
        }
    }]);

    return Action;
}(React.Component);

//remove button
//setup handler


var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: 'render',
        value: function render() {
            //setup options props
            //render length


            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Opciones (',
                    this.props.options.length,
                    '):'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'button',
                        { onClick: this.props.handleDeleteOptions },
                        'remove all'
                    ),
                    this.props.options.map(function (option) {
                        return React.createElement(
                            'p',
                            { key: option },
                            ' ',
                            React.createElement(Option, { key: option, optionText: option }),
                            ' '
                        );
                    })
                )
            );
        }
    }]);

    return Options;
}(React.Component);

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: 'removeOne',
        value: function removeOne() {
            alert('remove one');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    'Opcion:',
                    this.props.optionText,
                    ' ',
                    React.createElement(
                        'button',
                        { onClick: this.removeOne },
                        'Remove'
                    )
                )
            );
        }
    }]);

    return Option;
}(React.Component);

/**
 * Setun form with tex input and submit button
 * wiere up onSubmit
 * handleOption ->get value tiped
 * **/

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: 'onFormSubmit',
        value: function onFormSubmit(element) {
            element.preventDefault();

            var option = element.target.elements.option.value.trim();
            if (option) {
                element.target.elements.option.value = '';
            }
        }
    }, {
        key: 'handleOption',
        value: function handleOption() {
            alert('handling options');
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.onFormSubmit },
                    React.createElement('input', { type: 'text', name: 'option' }),
                    React.createElement(
                        'button',
                        { type: 'submit' },
                        ' Submit '
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecApp, null), document.getElementById("app"));
