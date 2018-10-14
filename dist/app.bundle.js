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


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
// import 'typeface-roboto';


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _state = __webpack_require__(/*! @state */ "./client/state/index.js");

var _state2 = _interopRequireDefault(_state);

var _views = __webpack_require__(/*! @views */ "./client/views/index.jsx");

var _views2 = _interopRequireDefault(_views);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('here 6');

var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__() || _redux.compose;

var preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

var store = (0, _redux.createStore)(_state2.default, preloadedState, composeEnhancers);

(0, _reactDom.hydrate)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(
    _reactRouterDom.BrowserRouter,
    null,
    _react2.default.createElement(_views2.default, null)
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

var _actions = __webpack_require__(/*! ./actions.js */ "./client/state/user/actions.js");

var actions = _interopRequireWildcard(_actions);

var _selectors = __webpack_require__(/*! ./selectors.js */ "./client/state/user/selectors.js");

var selectors = _interopRequireWildcard(_selectors);

var _reducers = __webpack_require__(/*! ./reducers.js */ "./client/state/user/reducers.js");

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

var _actions = __webpack_require__(/*! ./actions.js */ "./client/state/user/actions.js");

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
var selectUser = function selectUser(state) {
  return state.user;
};

exports.selectUser = selectUser;

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
  var classes = _ref.classes,
      user = _ref.user;
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

function ButtonAppBar(props) {
  var classes = props.classes;

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
}

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
  var classes = _ref.classes,
      user = _ref.user;
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

var _Paper = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");

var _Paper2 = _interopRequireDefault(_Paper);

var _Grid = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/Grid/index.js");

var _Grid2 = _interopRequireDefault(_Grid);

var _user = __webpack_require__(/*! @views/user */ "./client/views/user/index.jsx");

var _user2 = _interopRequireDefault(_user);

var _appBar = __webpack_require__(/*! @views/appBar */ "./client/views/appBar/index.jsx");

var _appBar2 = _interopRequireDefault(_appBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(theme) {
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

exports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _styles.withStyles)(styles)(UserAvatar));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRlL3VzZXIvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvdXNlci9yZWR1Y2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9jbGllbnQvc3RhdGUvdXNlci9zZWxlY3RvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3N0YXRlL3VzZXIvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL2Fib3V0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvYXBwQmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvaG9tZS9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vY2xpZW50L3ZpZXdzL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9jbGllbnQvdmlld3MvdXNlci9pbmRleC5qc3giXSwibmFtZXMiOlsiY29uc29sZSIsImxvZyIsImNvbXBvc2VFbmhhbmNlcnMiLCJ3aW5kb3ciLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18iLCJfX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9fIiwiY29tcG9zZSIsInByZWxvYWRlZFN0YXRlIiwiX19QUkVMT0FERURfU1RBVEVfXyIsInN0b3JlIiwicmVkdWNlcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RvcnMiLCJhY3Rpb25zIiwidXNlciIsIkdFVF9VU0VSX0RBVEEiLCJ0eXBlcyIsImdldFVzZXJEYXRhIiwiaWQiLCJuYW1lIiwicmVkdWNlciIsInN0YXRlIiwic2VsZWN0VXNlciIsInN0eWxlcyIsImF2YXRhciIsIm1hcmdpbiIsInJvdyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIkFib3V0IiwiY2xhc3NlcyIsInRoZW1lIiwicm9vdCIsImZsZXhHcm93IiwiZ3JvdyIsIm1lbnVCdXR0b24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYXBlciIsInBhZGRpbmciLCJzcGFjaW5nIiwidW5pdCIsInRleHRBbGlnbiIsImNvbG9yIiwicGFsZXR0ZSIsInRleHQiLCJzZWNvbmRhcnkiLCJsYXlvdXQiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwidXAiLCJmb290ZXIiLCJtYXJnaW5Ub3AiLCJib3JkZXJUb3AiLCJkaXZpZGVyIiwiQnV0dG9uQXBwQmFyIiwicHJvcHMiLCJIb21lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIkFwcCIsIm1hcFN0YXRlVG9Qcm9wcyIsIlVzZXJBdmF0YXIiLCJfIiwiaXNFbXB0eSIsInNsaWNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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Q0FBVXBELElBQVYsQ0FBRCxHQUVJO0FBQUE7QUFBQSxNQUFLLFdBQVdnQixRQUFRSixHQUF4QjtBQUNFO0FBQUMsc0JBQUQ7QUFBQSxRQUFRLFdBQVdJLFFBQVFOLE1BQTNCO0FBQW9DVixXQUFLSyxJQUFMLENBQVVnRCxLQUFWLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQXBDO0FBREYsR0FGSixHQU9JO0FBQUE7QUFBQSxNQUFLLFdBQVdyQyxRQUFRSixHQUF4QjtBQUNFO0FBQUMsc0JBQUQ7QUFBQSxRQUFRLE9BQU0sU0FBZDtBQUFBO0FBQUE7QUFERixHQVJhO0FBQUEsQ0FBbkI7O2tCQWVlLHlCQUFRcUMsZUFBUixFQUF5Qix3QkFBV3hDLE1BQVgsRUFBbUJ5QyxVQUFuQixDQUF6QixDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2NsaWVudC9pbmRleC5qc3hcIixcInZlbmRvcnN+YXBwXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuLy8gaW1wb3J0ICd0eXBlZmFjZS1yb2JvdG8nO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgaHlkcmF0ZSB9IGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCByZWR1Y2VycyBmcm9tICdAc3RhdGUnO1xuaW1wb3J0IEFwcCBmcm9tICdAdmlld3MnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5cbmNvbnNvbGUubG9nKCdoZXJlIDYnKTtcblxuY29uc3QgY29tcG9zZUVuaGFuY2VycyA9IHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdy5fX1JFRFVYX0RFVlRPT0xTX0VYVEVOU0lPTl9DT01QT1NFX18gJiYgd2luZG93Ll9fUkVEVVhfREVWVE9PTFNfRVhURU5TSU9OX18oKSB8fCBjb21wb3NlO1xuXG5jb25zdCBwcmVsb2FkZWRTdGF0ZSA9IHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fO1xuZGVsZXRlIHdpbmRvdy5fX1BSRUxPQURFRF9TVEFURV9fO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXJzLCBwcmVsb2FkZWRTdGF0ZSwgY29tcG9zZUVuaGFuY2Vycyk7XG5cbmh5ZHJhdGUoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxSb3V0ZXI+XG4gICAgICA8QXBwIC8+XG4gICAgPC9Sb3V0ZXI+XG4gIDwvUHJvdmlkZXI+LFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVhY3QtYXBwJyksXG4pO1xuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHVzZXIsIHsgYWN0aW9ucywgc2VsZWN0b3JzIH0gZnJvbSAnLi91c2VyJztcblxuZXhwb3J0IHtcbiAgc2VsZWN0b3JzLFxuICBhY3Rpb25zLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgdXNlcixcbn0pO1xuIiwiaW1wb3J0IHsgY3JlYXRlQWN0aW9uIH0gZnJvbSAncmVkdXgtYWN0JztcbmltcG9ydCB0eXBlcyBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgeyBHRVRfVVNFUl9EQVRBIH0gPSB0eXBlcztcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJEYXRhID0gY3JlYXRlQWN0aW9uKEdFVF9VU0VSX0RBVEEsICgpID0+ICh7IGlkOiAxLCBuYW1lOiAnQWRtaW4nIH0pKTtcbiIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zLmpzJztcbmltcG9ydCAqIGFzIHNlbGVjdG9ycyBmcm9tICcuL3NlbGVjdG9ycy5qcyc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzLmpzJztcblxuZXhwb3J0IHsgYWN0aW9ucywgc2VsZWN0b3JzIH07XG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xuIiwiaW1wb3J0IHsgY3JlYXRlUmVkdWNlciB9IGZyb20gJ3JlZHV4LWFjdCc7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucy5qcyc7XG5cbmNvbnN0IHVzZXIgPSBjcmVhdGVSZWR1Y2VyKHtcbiAgW2FjdGlvbnMuZ2V0VXNlckRhdGFdOiBzdGF0ZSA9PiBzdGF0ZSxcbn0sIHsgaWQ6IDAsIG5hbWU6ICd0ZXN0JyB9KTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlcjtcbiIsImNvbnN0IHNlbGVjdFVzZXIgPSBzdGF0ZSA9PiBzdGF0ZS51c2VyO1xuXG5leHBvcnQge1xuICBzZWxlY3RVc2VyLFxufTtcbiIsImNvbnN0IEdFVF9VU0VSX0RBVEEgPSAnYXBwL3VzZXIvZ2V0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIEdFVF9VU0VSX0RBVEEsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IDEwLFxuICB9LFxuICByb3c6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufTtcblxuXG5jb25zdCBBYm91dCA9ICh7IGNsYXNzZXMsIHVzZXIgfSkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvd30+XG4gICAgICA8aDE+VGhpcyBpcyBhYm91dCBwcm9qZWN0IHBhZ2U8L2gxPlxuICAgICAgPHA+UHJvamVjdCBwYWdlPC9wPlxuICAgIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEFib3V0KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUm91dGUsIExpbmsgfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJztcbmltcG9ydCBNZW51SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTWVudSc7XG5pbXBvcnQgVXNlciBmcm9tICdAdmlld3MvdXNlcic7XG5pbXBvcnQgSG9tZSBmcm9tICdAdmlld3MvaG9tZSc7XG5pbXBvcnQgQWJvdXQgZnJvbSAnQHZpZXdzL2Fib3V0JztcblxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG4gIGdyb3c6IHtcbiAgICBmbGV4R3JvdzogMSxcbiAgfSxcbiAgbWVudUJ1dHRvbjoge1xuICAgIG1hcmdpbkxlZnQ6IC0xMixcbiAgICBtYXJnaW5SaWdodDogMjAsXG4gIH0sXG4gIHBhcGVyOiB7XG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZy51bml0ICogMixcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQuc2Vjb25kYXJ5LFxuICB9LFxuICBsYXlvdXQ6IHtcbiAgICB3aWR0aDogJ2F1dG8nLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcudW5pdCAqIDMsXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKDkwMCArIHRoZW1lLnNwYWNpbmcudW5pdCAqIDMgKiAyKV06IHtcbiAgICAgIHdpZHRoOiA5MDAsXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBtYXJnaW5SaWdodDogJ2F1dG8nLFxuICAgIH0sXG4gIH0sXG4gIGZvb3Rlcjoge1xuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZy51bml0ICogOCxcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgJHt0aGVtZS5wYWxldHRlLmRpdmlkZXJ9YCxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nLnVuaXQgKiA2fXB4IDBgLFxuICB9LFxufSk7XG5cblxuZnVuY3Rpb24gQnV0dG9uQXBwQmFyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHM7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCI+XG4gICAgICAgIDxUb29sYmFyPlxuICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZW51QnV0dG9ufSBjb2xvcj1cImluaGVyaXRcIiBhcmlhLWxhYmVsPVwiTWVudVwiPlxuICAgICAgICAgICAgPE1lbnVJY29uIC8+XG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJ0aXRsZVwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5ncm93fT5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL2Fib3V0XCI+QWJvdXQ8L0xpbms+XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxVc2VyIC8+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQXBwQmFyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc2VzLmxheW91dH0+XG4gICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyNH0+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0gc209ezN9PlxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+eHM9MTIgc209NjwvUGFwZXI+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IHNtPXs5fT5cbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxuICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Fib3V0XCIgY29tcG9uZW50PXtBYm91dH0gLz5cbiAgICAgICAgICAgIDwvUGFwZXI+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0dyaWQ+XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhjbGFzc2VzLmZvb3RlciwgY2xhc3Nlcy5sYXlvdXQpfT5cbiAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezMyfSBqdXN0aWZ5PVwic3BhY2UtZXZlbmx5XCI+XG4gICAgICAgICAgPEdyaWQgaXRlbSB4cyBrZXk9XCJmb290ZXJcIj5cbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJkaXNwbGF5MlwiIGNvbG9yPVwidGV4dFByaW1hcnlcIiBndXR0ZXJCb3R0b20+XG4gICAgICAgICAgICAgIEZvb3RlclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDwvR3JpZD5cbiAgICAgICAgPC9HcmlkPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkJ1dHRvbkFwcEJhci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShCdXR0b25BcHBCYXIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IDEwLFxuICB9LFxuICByb3c6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufTtcblxuXG5jb25zdCBIb21lID0gKHsgY2xhc3NlcywgdXNlciB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgIDxoMT5UaGlzIGlzIGhvbWUgcGFnZTwvaDE+XG4gICAgICA8cD5Ib21lIHBhZ2U8L3A+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoSG9tZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnO1xuaW1wb3J0IFVzZXIgZnJvbSAnQHZpZXdzL3VzZXInO1xuaW1wb3J0IEFwcGxpY2F0aW9uQmFyIGZyb20gJ0B2aWV3cy9hcHBCYXInO1xuXG5jb25zdCBzdHlsZXMgPSB0aGVtZSA9PiAoe1xuICByb290OiB7XG4gICAgZmxleEdyb3c6IDEsXG4gIH0sXG59KTtcblxuY29uc3QgQXBwID0gKHsgY2xhc3NlcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgIDxBcHBsaWNhdGlvbkJhciAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShBcHApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHsgc2VsZWN0b3JzIH0gZnJvbSAnQHN0YXRlJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBhdmF0YXI6IHtcbiAgICBtYXJnaW46IDEwLFxuICB9LFxuICByb3c6IHtcbiAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICB9LFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgdXNlcjogc2VsZWN0b3JzLnNlbGVjdFVzZXIoc3RhdGUpLFxufSk7XG5cbmNvbnN0IFVzZXJBdmF0YXIgPSAoeyBjbGFzc2VzLCB1c2VyIH0pID0+IChcbiAgIV8uaXNFbXB0eSh1c2VyKVxuICAgID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2NsYXNzZXMuYXZhdGFyfT57dXNlci5uYW1lLnNsaWNlKDAsIDIpfTwvQXZhdGFyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICAgIDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm93fT5cbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cImluaGVyaXRcIj5Mb2dpbjwvQnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKVxuXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykod2l0aFN0eWxlcyhzdHlsZXMpKFVzZXJBdmF0YXIpKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=