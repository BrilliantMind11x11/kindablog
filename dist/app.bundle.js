/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./client/index.jsx","vendors~app"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/index.jsx":
/*!**************************!*\
  !*** ./client/index.jsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
// import 'typeface-roboto';

// material ui stuff


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _state = __webpack_require__(/*! @state */ "./client/state/index.js");

var _state2 = _interopRequireDefault(_state);

var _views = __webpack_require__(/*! @views */ "./client/views/index.jsx");

var _views2 = _interopRequireDefault(_views);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _JssProvider = __webpack_require__(/*! react-jss/lib/JssProvider */ "./node_modules/react-jss/lib/JssProvider.js");

var _JssProvider2 = _interopRequireDefault(_JssProvider);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _green = __webpack_require__(/*! @material-ui/core/colors/green */ "./node_modules/@material-ui/core/colors/green.js");

var _green2 = _interopRequireDefault(_green);

var _red = __webpack_require__(/*! @material-ui/core/colors/red */ "./node_modules/@material-ui/core/colors/red.js");

var _red2 = _interopRequireDefault(_red);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__() || _redux.compose;
var preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
var store = (0, _redux.createStore)(_state2.default, preloadedState, composeEnhancers);

var Main = function (_React$Component) {
  _inherits(Main, _React$Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'componentDidMount',

    // Remove the server-side injected CSS.
    value: function componentDidMount() {
      var jssStyles = document.getElementById('jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_views2.default, null);
    }
  }]);

  return Main;
}(_react2.default.Component);

// Create a theme instance.


var theme = (0, _styles.createMuiTheme)({
  palette: {
    primary: _green2.default,
    accent: _red2.default,
    type: 'light'
  }
});

// Create a new class name generator.
var generateClassName = (0, _styles.createGenerateClassName)();

(0, _reactDom.hydrate)(_react2.default.createElement(
  _JssProvider2.default,
  { generateClassName: generateClassName },
  _react2.default.createElement(
    _styles.MuiThemeProvider,
    { theme: theme },
    _react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(_views2.default, null)
      )
    )
  )
), document.querySelector('#react-app'));

/***/ }),

/***/ "./client/state/index.js":
/*!*******************************!*\
  !*** ./client/state/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.selectors = undefined;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _user = __webpack_require__(/*! ./user */ "./client/state/user/index.js");

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.selectors = _user.selectors;
exports.actions = _user.actions;
exports.default = (0, _redux.combineReducers)({
  user: _user2.default
});

/***/ }),

/***/ "./client/state/user/actions.js":
/*!**************************************!*\
  !*** ./client/state/user/actions.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserData = undefined;

var _reduxAct = __webpack_require__(/*! redux-act */ "./node_modules/redux-act/lib/index.js");

var _types = __webpack_require__(/*! ./types */ "./client/state/user/types.js");

var _types2 = _interopRequireDefault(_types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GET_USER_DATA = _types2.default.GET_USER_DATA;
var getUserData = exports.getUserData = (0, _reduxAct.createAction)(GET_USER_DATA, function () {
  return { id: 1, name: 'Admin' };
});

/***/ }),

/***/ "./client/state/user/index.js":
/*!************************************!*\
  !*** ./client/state/user/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectors = exports.actions = undefined;

var _actions = __webpack_require__(/*! ./actions */ "./client/state/user/actions.js");

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(/*! ./selectors */ "./client/state/user/selectors.js");

var selectors = _interopRequireWildcard(_selectors);

var _reducers = __webpack_require__(/*! ./reducers */ "./client/state/user/reducers.js");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.actions = actions;
exports.selectors = selectors;
exports.default = _reducers2.default;

/***/ }),

/***/ "./client/state/user/reducers.js":
/*!***************************************!*\
  !*** ./client/state/user/reducers.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxAct = __webpack_require__(/*! redux-act */ "./node_modules/redux-act/lib/index.js");

var _actions = __webpack_require__(/*! ./actions */ "./client/state/user/actions.js");

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user = (0, _reduxAct.createReducer)(_defineProperty({}, actions.getUserData, function (state) {
  return state;
}), { id: 0, name: 'test' });

exports.default = user;

/***/ }),

/***/ "./client/state/user/selectors.js":
/*!****************************************!*\
  !*** ./client/state/user/selectors.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var selectUser = exports.selectUser = function selectUser(state) {
  return state.user;
};

/***/ }),

/***/ "./client/state/user/types.js":
/*!************************************!*\
  !*** ./client/state/user/types.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var GET_USER_DATA = 'app/user/get';

exports.default = {
  GET_USER_DATA: GET_USER_DATA
};

/***/ }),

/***/ "./client/views/about/index.jsx":
/*!**************************************!*\
  !*** ./client/views/about/index.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  avatar: {
    margin: 10
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  }
};

var About = function About(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    { className: classes.row },
    _react2.default.createElement(
      'h1',
      null,
      'This is about project page'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Project page'
    )
  );
};

About.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(About);

/***/ }),

/***/ "./client/views/appBar/index.jsx":
/*!***************************************!*\
  !*** ./client/views/appBar/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/AppBar/index.js");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/Toolbar/index.js");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/IconButton/index.js");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _Menu = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");

var _Menu2 = _interopRequireDefault(_Menu);

var _user = __webpack_require__(/*! @views/user */ "./client/views/user/index.jsx");

var _user2 = _interopRequireDefault(_user);

var _home = __webpack_require__(/*! @views/home */ "./client/views/home/index.jsx");

var _home2 = _interopRequireDefault(_home);

var _about = __webpack_require__(/*! @views/about */ "./client/views/about/index.jsx");

var _about2 = _interopRequireDefault(_about);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1
    },
    grow: {
      flexGrow: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary
    },
    layout: _defineProperty({
      width: 'auto',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3
    }, theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2), {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto'
    }),
    footer: {
      marginTop: theme.spacing.unit * 8,
      borderTop: '1px solid ' + theme.palette.divider,
      padding: theme.spacing.unit * 6 + 'px 0'
    }
  };
};

var ButtonAppBar = function ButtonAppBar(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(
      _AppBar2.default,
      { position: 'static' },
      _react2.default.createElement(
        _Toolbar2.default,
        null,
        _react2.default.createElement(
          _IconButton2.default,
          { className: classes.menuButton, color: 'inherit', 'aria-label': 'Menu' },
          _react2.default.createElement(_Menu2.default, null)
        ),
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'title', color: 'inherit', className: classes.grow },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/' },
            'Home'
          )
        ),
        _react2.default.createElement(
          _Typography2.default,
          { variant: 'title', color: 'inherit', className: classes.grow },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/about' },
            'About'
          )
        ),
        _react2.default.createElement(_user2.default, null)
      )
    ),
    _react2.default.createElement(
      'main',
      { className: classes.layout },
      _react2.default.createElement(
        _Grid2.default,
        { container: true, spacing: 24 },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, xs: 6, sm: 3 },
          _react2.default.createElement(
            _Paper2.default,
            { className: classes.paper },
            'xs=12 sm=6'
          )
        ),
        _react2.default.createElement(
          _Grid2.default,
          { item: true, xs: 6, sm: 9 },
          _react2.default.createElement(
            _Paper2.default,
            { className: classes.paper },
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _about2.default })
          )
        )
      )
    ),
    _react2.default.createElement(
      'footer',
      { className: (0, _classnames2.default)(classes.footer, classes.layout) },
      _react2.default.createElement(
        _Grid2.default,
        { container: true, spacing: 32, justify: 'space-evenly' },
        _react2.default.createElement(
          _Grid2.default,
          { item: true, xs: true, key: 'footer' },
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'display2', color: 'textPrimary', gutterBottom: true },
            'Footer'
          )
        )
      )
    )
  );
};

ButtonAppBar.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(ButtonAppBar);

/***/ }),

/***/ "./client/views/home/index.jsx":
/*!*************************************!*\
  !*** ./client/views/home/index.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  avatar: {
    margin: 10
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  }
};

var Home = function Home(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    { className: classes.row },
    _react2.default.createElement(
      'h1',
      null,
      'This is home page'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Home page'
    )
  );
};

Home.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Home);

/***/ }),

/***/ "./client/views/index.jsx":
/*!********************************!*\
  !*** ./client/views/index.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _appBar = __webpack_require__(/*! @views/appBar */ "./client/views/appBar/index.jsx");

var _appBar2 = _interopRequireDefault(_appBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles() {
  return {
    root: {
      flexGrow: 1
    }
  };
};

var App = function App(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    { className: classes.root },
    _react2.default.createElement(_appBar2.default, null)
  );
};

App.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(App);

/***/ }),

/***/ "./client/views/user/index.jsx":
/*!*************************************!*\
  !*** ./client/views/user/index.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _styles = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");

var _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ "./node_modules/@material-ui/core/Avatar/index.js");

var _Avatar2 = _interopRequireDefault(_Avatar);

var _Button = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");

var _Button2 = _interopRequireDefault(_Button);

var _state = __webpack_require__(/*! @state */ "./client/state/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  avatar: {
    margin: 10
  },
  row: {
    display: 'flex',
    justifyContent: 'center'
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: _state.selectors.selectUser(state)
  };
};

var UserAvatar = function UserAvatar(_ref) {
  var classes = _ref.classes,
      user = _ref.user;
  return !_lodash2.default.isEmpty(user) ? _react2.default.createElement(
    'div',
    { className: classes.row },
    _react2.default.createElement(
      _Avatar2.default,
      { className: classes.avatar },
      user.name.slice(0, 2)
    )
  ) : _react2.default.createElement(
    'div',
    { className: classes.row },
    _react2.default.createElement(
      _Button2.default,
      { color: 'inherit' },
      'Login'
    )
  );
};

UserAvatar.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  user: _propTypes2.default.object.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _styles.withStyles)(styles)(UserAvatar));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRlL3VzZXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvdXNlci9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvdXNlci9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRlL3VzZXIvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL2Fib3V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvYXBwQmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvaG9tZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvdXNlci9pbmRleC5qc3giXSwibmFtZXMiOlsiY29tcG9zZUVuaGFuY2VycyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJjb21wb3NlIiwicHJlbG9hZGVkU3RhdGUiLCJfX1BSRUxPQURFRF9TVEFURV9fIiwic3RvcmUiLCJyZWR1Y2VycyIsIk1haW4iLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiZ3JlZW4iLCJhY2NlbnQiLCJyZWQiLCJ0eXBlIiwiZ2VuZXJhdGVDbGFzc05hbWUiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3JzIiwiYWN0aW9ucyIsInVzZXIiLCJHRVRfVVNFUl9EQVRBIiwidHlwZXMiLCJnZXRVc2VyRGF0YSIsImlkIiwibmFtZSIsInJlZHVjZXIiLCJzdGF0ZSIsInNlbGVjdFVzZXIiLCJzdHlsZXMiLCJhdmF0YXIiLCJtYXJnaW4iLCJyb3ciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJBYm91dCIsImNsYXNzZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwicm9vdCIsImZsZXhHcm93IiwiZ3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidW5pdCIsInRleHRBbGlnbiIsImNvbG9yIiwidGV4dCIsInNlY29uZGFyeSIsImxheW91dCIsIndpZHRoIiwiYnJlYWtwb2ludHMiLCJ1cCIsImZvb3RlciIsIm1hcmdpblRvcCIsImJvcmRlclRvcCIsImRpdmlkZXIiLCJCdXR0b25BcHBCYXIiLCJIb21lIiwiQXBwIiwibWFwU3RhdGVUb1Byb3BzIiwiVXNlckF2YXRhciIsIl8iLCJpc0VtcHR5Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7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O0FBQUEsUUFBUSxPQUFNLFNBQWQ7QUFBQTtBQUFBO0FBREYsR0FSYTtBQUFBLENBQW5COztBQWVBbUMsV0FBVzlCLFNBQVgsR0FBdUI7QUFDckJELFdBQVNFLG9CQUFVQyxNQUFWLENBQWlCQyxVQURMO0FBRXJCcEIsUUFBTWtCLG9CQUFVQyxNQUFWLENBQWlCQztBQUZGLENBQXZCOztrQkFLZSx5QkFBUTBCLGVBQVIsRUFBeUIsd0JBQVdyQyxNQUFYLEVBQW1Cc0MsVUFBbkIsQ0FBekIsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9jbGllbnQvaW5kZXguanN4XCIsXCJ2ZW5kb3JzfmFwcFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgJ3R5cGVmYWNlLXJvYm90byc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBjb21wb3NlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBoeWRyYXRlIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCByZWR1Y2VycyBmcm9tICdAc3RhdGUnO1xuaW1wb3J0IEFwcCBmcm9tICdAdmlld3MnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbi8vIG1hdGVyaWFsIHVpIHN0dWZmXG5pbXBvcnQgSnNzUHJvdmlkZXIgZnJvbSAncmVhY3QtanNzL2xpYi9Kc3NQcm92aWRlcic7XG5pbXBvcnQge1xuICBNdWlUaGVtZVByb3ZpZGVyLFxuICBjcmVhdGVNdWlUaGVtZSxcbiAgY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgZ3JlZW4gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL2dyZWVuJztcbmltcG9ydCByZWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvY29sb3JzL3JlZCc7XG5cbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fKCkgfHwgY29tcG9zZTtcbmNvbnN0IHByZWxvYWRlZFN0YXRlID0gd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX187XG5kZWxldGUgd2luZG93Ll9fUFJFTE9BREVEX1NUQVRFX187XG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBwcmVsb2FkZWRTdGF0ZSwgY29tcG9zZUVuaGFuY2Vycyk7XG5cbmNsYXNzIE1haW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMgJiYganNzU3R5bGVzLnBhcmVudE5vZGUpIHtcbiAgICAgIGpzc1N0eWxlcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGpzc1N0eWxlcyk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiA8QXBwIC8+O1xuICB9XG59XG5cbi8vIENyZWF0ZSBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiBncmVlbixcbiAgICBhY2NlbnQ6IHJlZCxcbiAgICB0eXBlOiAnbGlnaHQnLFxuICB9LFxufSk7XG5cbi8vIENyZWF0ZSBhIG5ldyBjbGFzcyBuYW1lIGdlbmVyYXRvci5cbmNvbnN0IGdlbmVyYXRlQ2xhc3NOYW1lID0gY3JlYXRlR2VuZXJhdGVDbGFzc05hbWUoKTtcblxuaHlkcmF0ZShcbiAgPEpzc1Byb3ZpZGVyIGdlbmVyYXRlQ2xhc3NOYW1lPXtnZW5lcmF0ZUNsYXNzTmFtZX0+XG4gICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgICAgICA8Um91dGVyPlxuICAgICAgICAgIDxBcHAgLz5cbiAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8L1Byb3ZpZGVyPlxuICAgIDwvTXVpVGhlbWVQcm92aWRlcj5cbiAgPC9Kc3NQcm92aWRlcj4sXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWFjdC1hcHAnKSxcbik7XG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdXNlciwgeyBhY3Rpb25zLCBzZWxlY3RvcnMgfSBmcm9tICcuL3VzZXInO1xuXG5leHBvcnQge1xuICBzZWxlY3RvcnMsXG4gIGFjdGlvbnMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICB1c2VyLFxufSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVBY3Rpb24gfSBmcm9tICdyZWR1eC1hY3QnO1xuaW1wb3J0IHR5cGVzIGZyb20gJy4vdHlwZXMnO1xuXG5jb25zdCB7IEdFVF9VU0VSX0RBVEEgfSA9IHR5cGVzO1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlckRhdGEgPSBjcmVhdGVBY3Rpb24oR0VUX1VTRVJfREFUQSwgKCkgPT4gKHsgaWQ6IDEsIG5hbWU6ICdBZG1pbicgfSkpO1xuIiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuaW1wb3J0ICogYXMgc2VsZWN0b3JzIGZyb20gJy4vc2VsZWN0b3JzJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgeyBhY3Rpb25zLCBzZWxlY3RvcnMgfTtcbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XG4iLCJpbXBvcnQgeyBjcmVhdGVSZWR1Y2VyIH0gZnJvbSAncmVkdXgtYWN0JztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJztcblxuY29uc3QgdXNlciA9IGNyZWF0ZVJlZHVjZXIoe1xuICBbYWN0aW9ucy5nZXRVc2VyRGF0YV06IHN0YXRlID0+IHN0YXRlLFxufSwgeyBpZDogMCwgbmFtZTogJ3Rlc3QnIH0pO1xuXG5leHBvcnQgZGVmYXVsdCB1c2VyO1xuIiwiZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXIgPSBzdGF0ZSA9PiBzdGF0ZS51c2VyO1xuIiwiY29uc3QgR0VUX1VTRVJfREFUQSA9ICdhcHAvdXNlci9nZXQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIEdFVF9VU0VSX0RBVEEsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IDEwLFxuICB9LFxuICByb3c6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufTtcblxuXG5jb25zdCBBYm91dCA9ICh7IGNsYXNzZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb3d9PlxuICAgIDxoMT5UaGlzIGlzIGFib3V0IHByb2plY3QgcGFnZTwvaDE+XG4gICAgPHA+UHJvamVjdCBwYWdlPC9wPlxuICA8L2Rpdj5cbik7XG5cbkFib3V0LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEFib3V0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQXBwQmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0FwcEJhcic7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCc7XG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnO1xuaW1wb3J0IFVzZXIgZnJvbSAnQHZpZXdzL3VzZXInO1xuaW1wb3J0IEhvbWUgZnJvbSAnQHZpZXdzL2hvbWUnO1xuaW1wb3J0IEFib3V0IGZyb20gJ0B2aWV3cy9hYm91dCc7XG5cbmNvbnN0IHN0eWxlcyA9IHRoZW1lID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgZ3Jvdzoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBtZW51QnV0dG9uOiB7XG4gICAgbWFyZ2luTGVmdDogLTEyLFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gIH0sXG4gIGxheW91dDoge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoOTAwICsgdGhlbWUuc3BhY2luZy51bml0ICogMyAqIDIpXToge1xuICAgICAgd2lkdGg6IDkwMCxcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgfSxcbiAgfSxcbiAgZm9vdGVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiA4LFxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDZ9cHggMGAsXG4gIH0sXG59KTtcblxuXG5jb25zdCBCdXR0b25BcHBCYXIgPSAoeyBjbGFzc2VzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgPFRvb2xiYXI+XG4gICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwiTWVudVwiPlxuICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5cbiAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxVc2VyIC8+XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgPC9BcHBCYXI+XG4gICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmxheW91dH0+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MjR9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17M30+XG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+eHM9MTIgc209NjwvUGFwZXI+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezl9PlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0fSAvPlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L21haW4+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5mb290ZXIsIGNsYXNzZXMubGF5b3V0KX0+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MzJ9IGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cyBrZXk9XCJmb290ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZGlzcGxheTJcIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgRm9vdGVyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PlxuKTtcblxuQnV0dG9uQXBwQmFyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEJ1dHRvbkFwcEJhcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGF2YXRhcjoge1xuICAgIG1hcmdpbjogMTAsXG4gIH0sXG4gIHJvdzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG59O1xuXG5cbmNvbnN0IEhvbWUgPSAoeyBjbGFzc2VzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICA8aDE+VGhpcyBpcyBob21lIHBhZ2U8L2gxPlxuICAgIDxwPkhvbWUgcGFnZTwvcD5cbiAgPC9kaXY+XG4pO1xuXG5Ib21lLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEFwcGxpY2F0aW9uQmFyIGZyb20gJ0B2aWV3cy9hcHBCYXInO1xuXG5jb25zdCBzdHlsZXMgPSAoKSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG59KTtcblxuY29uc3QgQXBwID0gKHsgY2xhc3NlcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgIDxBcHBsaWNhdGlvbkJhciAvPlxuICA8L2Rpdj5cbik7XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShBcHApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQHN0YXRlJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IDEwLFxuICB9LFxuICByb3c6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdXNlcjogc2VsZWN0b3JzLnNlbGVjdFVzZXIoc3RhdGUpLFxufSk7XG5cbmNvbnN0IFVzZXJBdmF0YXIgPSAoeyBjbGFzc2VzLCB1c2VyIH0pID0+IChcbiAgIV8uaXNFbXB0eSh1c2VyKVxuICAgID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT57dXNlci5uYW1lLnNsaWNlKDAsIDIpfTwvQXZhdGFyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICAgIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4pO1xuXG5Vc2VyQXZhdGFyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFVzZXJBdmF0YXIpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=