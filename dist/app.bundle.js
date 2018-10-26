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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRlL3VzZXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvdXNlci9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvdXNlci9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRlL3VzZXIvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL2Fib3V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvYXBwQmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvaG9tZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvdXNlci9pbmRleC5qc3giXSwibmFtZXMiOlsiY29tcG9zZUVuaGFuY2VycyIsIndpbmRvdyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX0NPTVBPU0VfXyIsIl9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18iLCJjb21wb3NlIiwicHJlbG9hZGVkU3RhdGUiLCJfX1BSRUxPQURFRF9TVEFURV9fIiwic3RvcmUiLCJyZWR1Y2VycyIsIk1haW4iLCJqc3NTdHlsZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ0aGVtZSIsInBhbGV0dGUiLCJwcmltYXJ5IiwiZ3JlZW4iLCJhY2NlbnQiLCJyZWQiLCJ0eXBlIiwiZ2VuZXJhdGVDbGFzc05hbWUiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0b3JzIiwiYWN0aW9ucyIsInVzZXIiLCJHRVRfVVNFUl9EQVRBIiwidHlwZXMiLCJnZXRVc2VyRGF0YSIsImlkIiwibmFtZSIsInJlZHVjZXIiLCJzdGF0ZSIsInNlbGVjdFVzZXIiLCJzdHlsZXMiLCJhdmF0YXIiLCJtYXJnaW4iLCJyb3ciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJBYm91dCIsImNsYXNzZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwicm9vdCIsImZsZXhHcm93IiwiZ3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidW5pdCIsInRleHRBbGlnbiIsImNvbG9yIiwidGV4dCIsInNlY29uZGFyeSIsImxheW91dCIsIndpZHRoIiwiYnJlYWtwb2ludHMiLCJ1cCIsImZvb3RlciIsIm1hcmdpblRvcCIsImJvcmRlclRvcCIsImRpdmlkZXIiLCJCdXR0b25BcHBCYXIiLCJIb21lIiwiQXBwIiwibWFwU3RhdGVUb1Byb3BzIiwiVXNlckF2YXRhciIsIl8iLCJpc0VtcHR5Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7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QUNFO0FBQUMsc0JBQUQ7QUFBQSxRQUFRLE9BQU0sU0FBZDtBQUFBO0FBQUE7QUFERixHQVJhO0FBQUEsQ0FBbkI7O0FBZUFtQyxXQUFXOUIsU0FBWCxHQUF1QjtBQUNyQkQsV0FBU0Usb0JBQVVDLE1BQVYsQ0FBaUJDLFVBREw7QUFFckJwQixRQUFNa0Isb0JBQVVDLE1BQVYsQ0FBaUJDO0FBRkYsQ0FBdkI7O2tCQUtlLHlCQUFRMEIsZUFBUixFQUF5Qix3QkFBV3JDLE1BQVgsRUFBbUJzQyxVQUFuQixDQUF6QixDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2NsaWVudC9pbmRleC5qc3hcIixcInZlbmRvcnN+YXBwXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCAndHlwZWZhY2Utcm9ib3RvJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB7IGh5ZHJhdGUgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHJlZHVjZXJzIGZyb20gJ0BzdGF0ZSc7XG5pbXBvcnQgQXBwIGZyb20gJ0B2aWV3cyc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuLy8gbWF0ZXJpYWwgdWkgc3R1ZmZcbmltcG9ydCBKc3NQcm92aWRlciBmcm9tICdyZWFjdC1qc3MvbGliL0pzc1Byb3ZpZGVyJztcbmltcG9ydCB7XG4gIE11aVRoZW1lUHJvdmlkZXIsXG4gIGNyZWF0ZU11aVRoZW1lLFxuICBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSxcbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBncmVlbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvZ3JlZW4nO1xuaW1wb3J0IHJlZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMvcmVkJztcblxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSB8fCBjb21wb3NlO1xuY29uc3QgcHJlbG9hZGVkU3RhdGUgPSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXztcbmRlbGV0ZSB3aW5kb3cuX19QUkVMT0FERURfU1RBVEVfXztcbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcnMsIHByZWxvYWRlZFN0YXRlLCBjb21wb3NlRW5oYW5jZXJzKTtcblxuY2xhc3MgTWFpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIC8vIFJlbW92ZSB0aGUgc2VydmVyLXNpZGUgaW5qZWN0ZWQgQ1NTLlxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBqc3NTdHlsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanNzLXNlcnZlci1zaWRlJyk7XG4gICAgaWYgKGpzc1N0eWxlcyAmJiBqc3NTdHlsZXMucGFyZW50Tm9kZSkge1xuICAgICAganNzU3R5bGVzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxBcHAgLz47XG4gIH1cbn1cblxuLy8gQ3JlYXRlIGEgdGhlbWUgaW5zdGFuY2UuXG5jb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgcGFsZXR0ZToge1xuICAgIHByaW1hcnk6IGdyZWVuLFxuICAgIGFjY2VudDogcmVkLFxuICAgIHR5cGU6ICdsaWdodCcsXG4gIH0sXG59KTtcblxuLy8gQ3JlYXRlIGEgbmV3IGNsYXNzIG5hbWUgZ2VuZXJhdG9yLlxuY29uc3QgZ2VuZXJhdGVDbGFzc05hbWUgPSBjcmVhdGVHZW5lcmF0ZUNsYXNzTmFtZSgpO1xuXG5oeWRyYXRlKFxuICA8SnNzUHJvdmlkZXIgZ2VuZXJhdGVDbGFzc05hbWU9e2dlbmVyYXRlQ2xhc3NOYW1lfT5cbiAgICA8TXVpVGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxSb3V0ZXI+XG4gICAgICAgICAgPEFwcCAvPlxuICAgICAgICA8L1JvdXRlcj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC9NdWlUaGVtZVByb3ZpZGVyPlxuICA8L0pzc1Byb3ZpZGVyPixcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlYWN0LWFwcCcpLFxuKTtcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB1c2VyLCB7IGFjdGlvbnMsIHNlbGVjdG9ycyB9IGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCB7XG4gIHNlbGVjdG9ycyxcbiAgYWN0aW9ucyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHVzZXIsXG59KTtcbiIsImltcG9ydCB7IGNyZWF0ZUFjdGlvbiB9IGZyb20gJ3JlZHV4LWFjdCc7XG5pbXBvcnQgdHlwZXMgZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IHsgR0VUX1VTRVJfREFUQSB9ID0gdHlwZXM7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyRGF0YSA9IGNyZWF0ZUFjdGlvbihHRVRfVVNFUl9EQVRBLCAoKSA9PiAoeyBpZDogMSwgbmFtZTogJ0FkbWluJyB9KSk7XG4iLCJpbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucyc7XG5pbXBvcnQgKiBhcyBzZWxlY3RvcnMgZnJvbSAnLi9zZWxlY3RvcnMnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCB7IGFjdGlvbnMsIHNlbGVjdG9ycyB9O1xuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcbiIsImltcG9ydCB7IGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdyZWR1eC1hY3QnO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnO1xuXG5jb25zdCB1c2VyID0gY3JlYXRlUmVkdWNlcih7XG4gIFthY3Rpb25zLmdldFVzZXJEYXRhXTogc3RhdGUgPT4gc3RhdGUsXG59LCB7IGlkOiAwLCBuYW1lOiAndGVzdCcgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXI7XG4iLCJleHBvcnQgY29uc3Qgc2VsZWN0VXNlciA9IHN0YXRlID0+IHN0YXRlLnVzZXI7XG4iLCJjb25zdCBHRVRfVVNFUl9EQVRBID0gJ2FwcC91c2VyL2dldCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgR0VUX1VTRVJfREFUQSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGF2YXRhcjoge1xuICAgIG1hcmdpbjogMTAsXG4gIH0sXG4gIHJvdzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG59O1xuXG5cbmNvbnN0IEFib3V0ID0gKHsgY2xhc3NlcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvd30+XG4gICAgPGgxPlRoaXMgaXMgYWJvdXQgcHJvamVjdCBwYWdlPC9oMT5cbiAgICA8cD5Qcm9qZWN0IHBhZ2U8L3A+XG4gIDwvZGl2PlxuKTtcblxuQWJvdXQucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQWJvdXQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBSb3V0ZSwgTGluayB9IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEFwcEJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXInO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IE1lbnVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9NZW51JztcbmltcG9ydCBVc2VyIGZyb20gJ0B2aWV3cy91c2VyJztcbmltcG9ydCBIb21lIGZyb20gJ0B2aWV3cy9ob21lJztcbmltcG9ydCBBYm91dCBmcm9tICdAdmlld3MvYWJvdXQnO1xuXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgZ3Jvdzoge1xuICAgIGZsZXhHcm93OiAxLFxuICB9LFxuICBtZW51QnV0dG9uOiB7XG4gICAgbWFyZ2luTGVmdDogLTEyLFxuICAgIG1hcmdpblJpZ2h0OiAyMCxcbiAgfSxcbiAgcGFwZXI6IHtcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiAyLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gIH0sXG4gIGxheW91dDoge1xuICAgIHdpZHRoOiAnYXV0bycsXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZy51bml0ICogMyxcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoOTAwICsgdGhlbWUuc3BhY2luZy51bml0ICogMyAqIDIpXToge1xuICAgICAgd2lkdGg6IDkwMCxcbiAgICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnYXV0bycsXG4gICAgfSxcbiAgfSxcbiAgZm9vdGVyOiB7XG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nLnVuaXQgKiA4LFxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAke3RoZW1lLnBhbGV0dGUuZGl2aWRlcn1gLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcudW5pdCAqIDZ9cHggMGAsXG4gIH0sXG59KTtcblxuXG5jb25zdCBCdXR0b25BcHBCYXIgPSAoeyBjbGFzc2VzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgPFRvb2xiYXI+XG4gICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwiTWVudVwiPlxuICAgICAgICAgIDxNZW51SWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5cbiAgICAgICAgICA8TGluayB0bz1cIi9cIj5Ib21lPC9MaW5rPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5cbiAgICAgICAgICA8TGluayB0bz1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxVc2VyIC8+XG4gICAgICA8L1Rvb2xiYXI+XG4gICAgPC9BcHBCYXI+XG4gICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmxheW91dH0+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MjR9PlxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fSBzbT17M30+XG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+eHM9MTIgc209NjwvUGFwZXI+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezl9PlxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYWJvdXRcIiBjb21wb25lbnQ9e0Fib3V0fSAvPlxuICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvR3JpZD5cbiAgICA8L21haW4+XG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzTmFtZXMoY2xhc3Nlcy5mb290ZXIsIGNsYXNzZXMubGF5b3V0KX0+XG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MzJ9IGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIj5cbiAgICAgICAgPEdyaWQgaXRlbSB4cyBrZXk9XCJmb290ZXJcIj5cbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZGlzcGxheTJcIiBjb2xvcj1cInRleHRQcmltYXJ5XCIgZ3V0dGVyQm90dG9tPlxuICAgICAgICAgICAgRm9vdGVyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9mb290ZXI+XG4gIDwvZGl2PlxuKTtcblxuQnV0dG9uQXBwQmFyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEJ1dHRvbkFwcEJhcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGF2YXRhcjoge1xuICAgIG1hcmdpbjogMTAsXG4gIH0sXG4gIHJvdzoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIH0sXG59O1xuXG5cbmNvbnN0IEhvbWUgPSAoeyBjbGFzc2VzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICA8aDE+VGhpcyBpcyBob21lIHBhZ2U8L2gxPlxuICAgIDxwPkhvbWUgcGFnZTwvcD5cbiAgPC9kaXY+XG4pO1xuXG5Ib21lLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEFwcGxpY2F0aW9uQmFyIGZyb20gJ0B2aWV3cy9hcHBCYXInO1xuXG5jb25zdCBzdHlsZXMgPSAoKSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG59KTtcblxuY29uc3QgQXBwID0gKHsgY2xhc3NlcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgIDxBcHBsaWNhdGlvbkJhciAvPlxuICA8L2Rpdj5cbik7XG5cbkFwcC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShBcHApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQHN0YXRlJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IDEwLFxuICB9LFxuICByb3c6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdXNlcjogc2VsZWN0b3JzLnNlbGVjdFVzZXIoc3RhdGUpLFxufSk7XG5cbmNvbnN0IFVzZXJBdmF0YXIgPSAoeyBjbGFzc2VzLCB1c2VyIH0pID0+IChcbiAgIV8uaXNFbXB0eSh1c2VyKVxuICAgID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT57dXNlci5uYW1lLnNsaWNlKDAsIDIpfTwvQXZhdGFyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICAgIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4pO1xuXG5Vc2VyQXZhdGFyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB1c2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFVzZXJBdmF0YXIpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=