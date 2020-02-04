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
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOpt = _this.handleDeleteOpt.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var json = localStorage.getItem('options');
                var options = JSON.parse(json);
                if (options) {
                    this.setState(function () {
                        options;
                    });
                }
                console.log('componentDidMount');
            } catch (e) {
                //donothing
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('SavingData');
            }
            // this.state
            // this.props
            // prevProps, prevState
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('componentWillUnmount');
        }
    }, {
        key: 'handleDeleteOptions',
        value: function handleDeleteOptions() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: 'handleDeleteOpt',
        value: function handleDeleteOpt(optionToRemove) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: 'handlePick',
        value: function handlePick() {
            var rndNum = Math.floor(Math.random() * this.state.options.length);
            var option = this.state.options[rndNum];

            alert('Te toca: ' + option);
        }
    }, {
        key: 'handleAddOption',
        value: function handleAddOption(option) {
            if (!option) {
                return 'enter valid value';
            } else if (this.state.options.indexOf(option) > -1) {
                return 'this action already exist';
            }

            this.setState(function (prevState) {
                return {
                    options: prevState.options.concat([option])
                };
            });
        }
        //handlePick pass down to action
        //randomly pick and option

    }, {
        key: 'render',
        value: function render() {

            var subtitle = "subtitle of indecApp";
            return React.createElement(
                'div',
                null,
                React.createElement(Header, { subtitle: subtitle }),
                React.createElement(Action, {
                    hasOptions: this.state.options.length > 0,
                    handlePick: this.handlePick
                }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteOptions: this.handleDeleteOptions,
                    handleDeleteOpt: this.handleDeleteOpt
                }),
                React.createElement(AddOption, {
                    handleAddOption: this.handleAddOption
                })
            );
        }
    }]);

    return IndecApp;
}(React.Component);

IndecApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subtitle && React.createElement(
            'p',
            null,
            props.subtitle
        )
    );
};

Header.defaultProps = {
    title: 'IndecisionApp'
};

// class Header extends React.Component {
//     render() {
//         return (<div>

//             </div>
//         );
//     }
// }

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            {
                onClick: props.handlePick,
                disabled: !props.hasOptions
            },
            'what should i do'
        )
    );
};

// class Action extends React.Component {

//     render() {
//         return <button 
//         onClick={this.props.handlePick}
//         disabled={!this.props.hasOptions}
//         > what should i do </button>
//     }
// }
var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Cantidad de opciones: ',
            props.options.length
        ),
        React.createElement(
            'button',
            { onClick: props.handleDeleteOptions },
            'remove all'
        ),
        props.options.length == 0 && React.createElement(
            'p',
            null,
            'Plis mete unos datos ameo'
        ),
        props.options.map(function (option) {
            return React.createElement(Option, {
                key: option,
                optionText: option,
                handleDeleteOpt: props.handleDeleteOpt
            });
        })
    );
};
// class Options extends React.Component {

//     render() {
//         return (<div>
//             <p>Opciones ({this.props.options.length}):</p>
//                 <div>

//                     <button onClick={this.props.handleDeleteOptions}>remove all</button>

//                     {
//                         this.props.options.map(option =>{
//                         return (<p key={option}> <Option key={option} optionText={option}/> </p>);  
//                         })
//                     }


//                 </div>      

//             </div>);
//     }
// }


var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            {
                onClick: function onClick(e) {
                    props.handleDeleteOpt(props.optionText);
                }
            },
            'Remove'
        )
    );
};

// class Option extends React.Component {

//     render() {
//         return (<div>

//             <p>Opcion:{this.props.optionText}</p> 
//             <button onClick={this.props.handleDeleteOpt}>Remove</button>


//             </div>);
//     }
// }

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: 'handleAddOption',
        value: function handleAddOption(element) {
            element.preventDefault();

            var option = element.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            this.setState(function () {
                return { error: error };
            });

            if (!error) {
                element.target.elements.option.value = '';
                element.target.elements.option.focus();
                // element.target.elements.option.select();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleAddOption },
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

// const User = (props) => {
//     return(
//         <div>
//             <p>name: {props.name}</p>
//             <p>age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(React.createElement(IndecApp, { options: ['Matias', 'Ayelen'] }), document.getElementById("app"));
