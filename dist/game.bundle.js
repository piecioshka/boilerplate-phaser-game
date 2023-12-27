/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    BOOTSTRAP_COMPLETED: 'state:bootstrap-completed',
    LOADING_COMPLETED: 'state:loading-completed',
    EXAMPLE_COMPLETED: 'state:example-completed'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    WIDTH: 800,
    HEIGHT: 480,

    GRAVITY: 200
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Game = undefined;

var _superEventEmitter = __webpack_require__(13);

var _superEventEmitter2 = _interopRequireDefault(_superEventEmitter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = exports.Game = function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game() {
        var _ref;

        _classCallCheck(this, Game);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var _this = _possibleConstructorReturn(this, (_ref = Game.__proto__ || Object.getPrototypeOf(Game)).call.apply(_ref, [this].concat(args)));

        _this.player = null;

        _superEventEmitter2.default.mixin(_this);
        return _this;
    }

    return Game;
}(Phaser.Game);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StateManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

var _bootstrapState = __webpack_require__(9);

var _loadingState = __webpack_require__(11);

var _exampleState = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StateManager = exports.StateManager = function () {
    function StateManager(game) {
        _classCallCheck(this, StateManager);

        this.game = null;

        this.game = game;
        this.setupStates();
        this.setupNativeListeners();
        this.setupListeners();
    }

    _createClass(StateManager, [{
        key: 'setupStates',
        value: function setupStates() {
            this.game.state.add('Bootstrap', _bootstrapState.BootstrapState);
            this.game.state.add('Loading', _loadingState.LoadingState);
            this.game.state.add('Example', _exampleState.ExampleState);
        }
    }, {
        key: 'setupNativeListeners',
        value: function setupNativeListeners() {
            this.game.state.onStateChange.add(function (newState, oldState) {
                console.debug('Enter to new state: %s', newState);
            });
        }
    }, {
        key: 'setupListeners',
        value: function setupListeners() {
            var _this = this;

            this.game.on(_stateEvents2.default.BOOTSTRAP_COMPLETED, function () {
                _this.game.state.start('Loading');
            });

            this.game.on(_stateEvents2.default.LOADING_COMPLETED, function () {
                _this.game.state.start('Example');
            });
        }
    }, {
        key: 'start',
        value: function start() {
            this.game.state.start('Bootstrap');
        }
    }]);

    return StateManager;
}();

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    DEFAULT_X: 96,
    DEFAULT_Y: 32
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _game = __webpack_require__(2);

var _stateManager = __webpack_require__(3);

var _game2 = __webpack_require__(1);

var _game3 = _interopRequireDefault(_game2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var game = new _game.Game(_game3.default.WIDTH, _game3.default.HEIGHT, 'app', Phaser.CANVAS);
var manager = new _stateManager.StateManager(game);
manager.start();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = exports.Player = function (_Phaser$Sprite) {
    _inherits(Player, _Phaser$Sprite);

    function Player(game) {
        var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'player';

        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game, x, y, key));

        game.add.existing(_this);
        game.physics.arcade.enable(_this);
        return _this;
    }

    return Player;
}(Phaser.Sprite);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BootstrapState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BootstrapState = exports.BootstrapState = function (_Phaser$State) {
    _inherits(BootstrapState, _Phaser$State);

    function BootstrapState() {
        _classCallCheck(this, BootstrapState);

        return _possibleConstructorReturn(this, (BootstrapState.__proto__ || Object.getPrototypeOf(BootstrapState)).apply(this, arguments));
    }

    _createClass(BootstrapState, [{
        key: 'preload',
        value: function preload() {
            this.load.image('loader', 'assets/images/loader.png');
        }
    }, {
        key: 'create',
        value: function create() {
            this.game.stage.backgroundColor = '#000000';

            this.game.trigger(_stateEvents2.default.BOOTSTRAP_COMPLETED);
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'render',
        value: function render() {}
    }]);

    return BootstrapState;
}(Phaser.State);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ExampleState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _game = __webpack_require__(1);

var _game2 = _interopRequireDefault(_game);

var _player = __webpack_require__(6);

var _player2 = _interopRequireDefault(_player);

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

var _player3 = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ExampleState = exports.ExampleState = function (_Phaser$State) {
    _inherits(ExampleState, _Phaser$State);

    function ExampleState() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ExampleState);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ExampleState.__proto__ || Object.getPrototypeOf(ExampleState)).call.apply(_ref, [this].concat(args))), _this), _this.map = null, _this.layer = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ExampleState, [{
        key: 'create',
        value: function create() {
            this.physics.startSystem(Phaser.Physics.ARCADE);
            this.physics.arcade.gravity.y = _game2.default.GRAVITY;

            this.map = this.add.tilemap('example-map');
            this.map.addTilesetImage('background');
            this.map.setCollision([1]);

            this.layer = this.map.createLayer('Example Map');
            this.layer.resizeWorld();
            // this.layer.debug = true;

            this.game.player = new _player3.Player(this.game, _player2.default.DEFAULT_X, _player2.default.DEFAULT_Y);
            this.game.trigger(_stateEvents2.default.EXAMPLE_COMPLETED);
        }
    }, {
        key: 'update',
        value: function update() {
            this.physics.arcade.collide(this.game.player, this.layer);
        }
    }, {
        key: 'render',
        value: function render() {
            // this.game.debug.body(this.game.player);
        }
    }]);

    return ExampleState;
}(Phaser.State);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadingState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _stateEvents = __webpack_require__(0);

var _stateEvents2 = _interopRequireDefault(_stateEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingState = exports.LoadingState = function (_Phaser$State) {
    _inherits(LoadingState, _Phaser$State);

    function LoadingState() {
        _classCallCheck(this, LoadingState);

        return _possibleConstructorReturn(this, (LoadingState.__proto__ || Object.getPrototypeOf(LoadingState)).apply(this, arguments));
    }

    _createClass(LoadingState, [{
        key: 'preload',
        value: function preload() {
            var loader = this.add.image(this.world.centerX, this.world.centerY, 'loader');
            loader.anchor.set(0.5, 0.5);
            this.load.setPreloadSprite(loader);

            this.load.image('player', 'assets/images/player.png');
            this.load.image('background', 'assets/images/background.png');
            this.load.tilemap('example-map', 'assets/maps/example-map.json', null, Phaser.Tilemap.TILED_JSON);
        }
    }, {
        key: 'create',
        value: function create() {
            var _this2 = this;

            this.time.events.add(500, function () {
                _this2.game.trigger(_stateEvents2.default.LOADING_COMPLETED);
            });
        }
    }, {
        key: 'update',
        value: function update() {}
    }, {
        key: 'render',
        value: function render() {}
    }]);

    return LoadingState;
}(Phaser.State);

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["EventEmitter"] = factory();
	else
		root["EventEmitter"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Piotr Kowalski <piecioshka@gmail.com> (https://piecioshka.pl/)
 * @name super-event-emitter
 * @description Lightweight and simple interpretation of popular event management
 * @version 4.1.12
 * @license MIT
 * @example
 * var bar = {}; // Or any other object.
 * EventEmitter.mixin(bar);
 * bar.on('foo', function () {
 *     console.log('foo event emitted');
 * });
 * bar.emit('foo');
 */



// Helpers.

function forEach(list, iterator) {
    var isForEachSupported = ('forEach' in Array.prototype);

    if (isForEachSupported) {
        list.forEach(iterator);
    } else {
        for (var i = 0; i < list.length; i += 1) {
            iterator(list[i]);
        }
    }
}

function filter(list, iterator) {
    var isFilterSupported = ('filter' in Array.prototype);

    if (isFilterSupported) {
        return list.filter(iterator);
    } else {
        var result = [];

        for (var i = 0; i < list.length; i += 1) {
            var value = list[i];

            if (iterator(value)) {
                result.push(value);
            }
        }

        return result;
    }
}

function assert(cond, msg) {
    if (!cond) throw new Error(msg);
}

function isString(arg) {
    return (typeof arg === 'string');
}

function isFunction(arg) {
    return (typeof arg === 'function');
}

/**
 * Add an event listener. Note that this method is not part of the EventEmitter
 *  prototype to avoid polluting the namespace.
 *
 * @access private
 * @param {string} name - Name of event to listen to.
 * @param {Function} fn - The function to represent this listener. Used for
 *  comparison when removing the listener.
 * @param {Function} run - The actual function to run when the named event is
 *  emitted. This can differ if e.g. clean-up is needed. ".once" uses this.
 * @param {Object} [ctx] - The context to use as "this" for the listener.
 */
function addListener(name, fn, run, ctx) {
    assert(isString(name), 'EventEmitter#on: name is not a string');
    assert(isFunction(fn), 'EventEmitter#on: fn is not a function');

    // If the context is not passed, use `this`.
    ctx = ctx || this;

    // Push to private lists of listeners.
    this._listeners.push({
        name: name,
        fn: fn,
        run: run,
        ctx: ctx
    });
}

// Main part.

var EventEmitterProto = {
    /**
     * Register listener on concrete name with specified handler.
     *
     * @param {string} name
     * @param {Function} fn
     * @param {Object} [ctx]
     */
    on: function (name, fn, ctx) {
        // For "on" functions, the runner is the same as the underlying
        // function. See "once" for when the distinction matters.
        addListener.call(this, name, fn, fn, ctx);
        return this;
    },

    /**
     * Register listener.
     * Remove them after once event triggered.
     *
     * @param {string} name
     * @param {Function} fn
     * @param {Object} [ctx]
     */
    once: function (name, fn, ctx) {
        // If the context is not passed, use `this`.
        ctx = ctx || this;

        var self = this;

        // Here, we use a different runner function than the added listener.
        // This enables us to remove the listener after the function runs.
        function onHandler() {
            fn.apply(ctx, arguments);
            self.off(name, fn);
        }

        addListener.call(this, name, fn, onHandler, ctx);

        return this;
    },

    /**
     * Unregister listener.
     * Remove concrete listener by name and itself definition.
     *
     * @param {string} [name]
     * @param {Function} [fn]
     */
    off: function (name, fn) {
        this._listeners = !name
            ? []
            : filter(this._listeners, function (listener) {
                if (listener.name !== name) {
                    return true;
                } else {
                    if (isFunction(fn)) {
                        return listener.fn !== fn;
                    } else {
                        return false;
                    }
                }
            });

        return this;
    },

    /**
     * Trigger event.
     * All of listeners waiting for emit event will be executed.
     *
     * @param {string} name
     * @param {Object} [params]
     */
    emit: function (name, params) {
        assert(isString(name), 'EventEmitter#emit: name is not a string');

        forEach(this._listeners, function (event) {
            if (event.name === name) {
                event.run.call(event.ctx, params);
            }

            // Special behaviour for wildcard - invoke each event handler.
            var isWildcard = (/^all|\*$/).test(event.name);

            if (isWildcard) {
                event.run.call(event.ctx, name, params);
            }
        });

        return this;
    }
};

// Aliases.
EventEmitterProto.addEventListener
    = EventEmitterProto.addListener
    = EventEmitterProto.bind
    = EventEmitterProto.on;
EventEmitterProto.removeEventListener
    = EventEmitterProto.removeListener
    = EventEmitterProto.unbind
    = EventEmitterProto.off;
EventEmitterProto.dispatchEventListener
    = EventEmitterProto.dispatchListener
    = EventEmitterProto.trigger
    = EventEmitterProto.emit;

function EventEmitter() {
    if (!(this instanceof EventEmitter)) {
        return new EventEmitter();
    }

    this._listeners = [];
}

EventEmitter.prototype = EventEmitterProto;

/**
 * Mixin properties.
 * Best way to setup EventEmitter on any object.
 *
 * @param {Object} target
 */
EventEmitter.mixin = function (target) {
    var emitter = new EventEmitter();

    for (var key in emitter) {
        target[key] = emitter[key];
    }

    return target;
};

// Allow crating new mixed in objects from the instance.
EventEmitter.prototype.mixin = EventEmitter.mixin;

// Put project version.
EventEmitter.VERSION = "4.1.12";

// To import with destructuring assignment
EventEmitter.EventEmitter = EventEmitter;

// Exports.
module.exports = EventEmitter;


/***/ })
/******/ ]);
});
//# sourceMappingURL=super-event-emitter.js.map

/***/ })
/******/ ]);