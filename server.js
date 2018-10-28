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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/state/index.js":
/*!*******************************!*\
  !*** ./client/state/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.actions = exports.selectors = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _user = __webpack_require__(/*! ./user */ \"./client/state/user/index.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.selectors = _user.selectors;\nexports.actions = _user.actions;\nexports.default = (0, _redux.combineReducers)({\n  user: _user2.default\n});\n\n//# sourceURL=webpack:///./client/state/index.js?");

/***/ }),

/***/ "./client/state/user/actions.js":
/*!**************************************!*\
  !*** ./client/state/user/actions.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getUserData = undefined;\n\nvar _reduxAct = __webpack_require__(/*! redux-act */ \"redux-act\");\n\nvar _types = __webpack_require__(/*! ./types */ \"./client/state/user/types.js\");\n\nvar _types2 = _interopRequireDefault(_types);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GET_USER_DATA = _types2.default.GET_USER_DATA;\nvar getUserData = exports.getUserData = (0, _reduxAct.createAction)(GET_USER_DATA, function () {\n  return { id: 1, name: 'Admin' };\n});\n\n//# sourceURL=webpack:///./client/state/user/actions.js?");

/***/ }),

/***/ "./client/state/user/index.js":
/*!************************************!*\
  !*** ./client/state/user/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.selectors = exports.actions = undefined;\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./client/state/user/actions.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nvar _selectors = __webpack_require__(/*! ./selectors */ \"./client/state/user/selectors.js\");\n\nvar selectors = _interopRequireWildcard(_selectors);\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./client/state/user/reducers.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nexports.actions = actions;\nexports.selectors = selectors;\nexports.default = _reducers2.default;\n\n//# sourceURL=webpack:///./client/state/user/index.js?");

/***/ }),

/***/ "./client/state/user/reducers.js":
/*!***************************************!*\
  !*** ./client/state/user/reducers.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reduxAct = __webpack_require__(/*! redux-act */ \"redux-act\");\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./client/state/user/actions.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar user = (0, _reduxAct.createReducer)(_defineProperty({}, actions.getUserData, function (state) {\n  return state;\n}), { id: 0, name: 'test' });\n\nexports.default = user;\n\n//# sourceURL=webpack:///./client/state/user/reducers.js?");

/***/ }),

/***/ "./client/state/user/selectors.js":
/*!****************************************!*\
  !*** ./client/state/user/selectors.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar selectUser = exports.selectUser = function selectUser(state) {\n  return state.user;\n};\n\n//# sourceURL=webpack:///./client/state/user/selectors.js?");

/***/ }),

/***/ "./client/state/user/types.js":
/*!************************************!*\
  !*** ./client/state/user/types.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar GET_USER_DATA = 'app/user/get';\n\nexports.default = {\n  GET_USER_DATA: GET_USER_DATA\n};\n\n//# sourceURL=webpack:///./client/state/user/types.js?");

/***/ }),

/***/ "./client/views/about/index.jsx":
/*!**************************************!*\
  !*** ./client/views/about/index.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  avatar: {\n    margin: 10\n  },\n  row: {\n    display: 'flex',\n    justifyContent: 'center'\n  }\n};\n\nvar About = function About(_ref) {\n  var classes = _ref.classes;\n  return _react2.default.createElement(\n    'div',\n    { className: classes.row },\n    _react2.default.createElement(\n      'h1',\n      null,\n      'This is about project page'\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'Project page'\n    )\n  );\n};\n\nAbout.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(About);\n\n//# sourceURL=webpack:///./client/views/about/index.jsx?");

/***/ }),

/***/ "./client/views/appBar/index.jsx":
/*!***************************************!*\
  !*** ./client/views/appBar/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _classnames = __webpack_require__(/*! classnames */ \"classnames\");\n\nvar _classnames2 = _interopRequireDefault(_classnames);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Paper = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _Menu = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _user = __webpack_require__(/*! @views/user */ \"./client/views/user/index.jsx\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _home = __webpack_require__(/*! @views/home */ \"./client/views/home/index.jsx\");\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _about = __webpack_require__(/*! @views/about */ \"./client/views/about/index.jsx\");\n\nvar _about2 = _interopRequireDefault(_about);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      flexGrow: 1\n    },\n    grow: {\n      flexGrow: 1\n    },\n    menuButton: {\n      marginLeft: -12,\n      marginRight: 20\n    },\n    paper: {\n      padding: theme.spacing.unit * 2,\n      textAlign: 'center',\n      color: theme.palette.text.secondary\n    },\n    layout: _defineProperty({\n      width: 'auto',\n      marginLeft: theme.spacing.unit * 3,\n      marginRight: theme.spacing.unit * 3\n    }, theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2), {\n      width: 900,\n      marginLeft: 'auto',\n      marginRight: 'auto'\n    }),\n    footer: {\n      marginTop: theme.spacing.unit * 8,\n      borderTop: '1px solid ' + theme.palette.divider,\n      padding: theme.spacing.unit * 6 + 'px 0'\n    }\n  };\n};\n\nvar ButtonAppBar = function ButtonAppBar(_ref) {\n  var classes = _ref.classes;\n  return _react2.default.createElement(\n    'div',\n    { className: classes.root },\n    _react2.default.createElement(\n      _AppBar2.default,\n      { position: 'static' },\n      _react2.default.createElement(\n        _Toolbar2.default,\n        null,\n        _react2.default.createElement(\n          _IconButton2.default,\n          { className: classes.menuButton, color: 'inherit', 'aria-label': 'Menu' },\n          _react2.default.createElement(_Menu2.default, null)\n        ),\n        _react2.default.createElement(\n          _Typography2.default,\n          { variant: 'title', color: 'inherit', className: classes.grow },\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/' },\n            'Home'\n          )\n        ),\n        _react2.default.createElement(\n          _Typography2.default,\n          { variant: 'title', color: 'inherit', className: classes.grow },\n          _react2.default.createElement(\n            _reactRouterDom.Link,\n            { to: '/about' },\n            'About'\n          )\n        ),\n        _react2.default.createElement(_user2.default, null)\n      )\n    ),\n    _react2.default.createElement(\n      'main',\n      { className: classes.layout },\n      _react2.default.createElement(\n        _Grid2.default,\n        { container: true, spacing: 24 },\n        _react2.default.createElement(\n          _Grid2.default,\n          { item: true, xs: 6, sm: 3 },\n          _react2.default.createElement(\n            _Paper2.default,\n            { className: classes.paper },\n            'xs=12 sm=6'\n          )\n        ),\n        _react2.default.createElement(\n          _Grid2.default,\n          { item: true, xs: 6, sm: 9 },\n          _react2.default.createElement(\n            _Paper2.default,\n            { className: classes.paper },\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _about2.default })\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      'footer',\n      { className: (0, _classnames2.default)(classes.footer, classes.layout) },\n      _react2.default.createElement(\n        _Grid2.default,\n        { container: true, spacing: 32, justify: 'space-evenly' },\n        _react2.default.createElement(\n          _Grid2.default,\n          { item: true, xs: true, key: 'footer' },\n          _react2.default.createElement(\n            _Typography2.default,\n            { variant: 'display2', color: 'textPrimary', gutterBottom: true },\n            'Footer'\n          )\n        )\n      )\n    )\n  );\n};\n\nButtonAppBar.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(ButtonAppBar);\n\n//# sourceURL=webpack:///./client/views/appBar/index.jsx?");

/***/ }),

/***/ "./client/views/home/index.jsx":
/*!*************************************!*\
  !*** ./client/views/home/index.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  avatar: {\n    margin: 10\n  },\n  row: {\n    display: 'flex',\n    justifyContent: 'center'\n  }\n};\n\nvar Home = function Home(_ref) {\n  var classes = _ref.classes;\n  return _react2.default.createElement(\n    'div',\n    { className: classes.row },\n    _react2.default.createElement(\n      'h1',\n      null,\n      'This is home page'\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'Home page'\n    )\n  );\n};\n\nHome.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Home);\n\n//# sourceURL=webpack:///./client/views/home/index.jsx?");

/***/ }),

/***/ "./client/views/index.jsx":
/*!********************************!*\
  !*** ./client/views/index.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _appBar = __webpack_require__(/*! @views/appBar */ \"./client/views/appBar/index.jsx\");\n\nvar _appBar2 = _interopRequireDefault(_appBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = function styles() {\n  return {\n    root: {\n      flexGrow: 1\n    }\n  };\n};\n\nvar App = function App(_ref) {\n  var classes = _ref.classes;\n  return _react2.default.createElement(\n    'div',\n    { className: classes.root },\n    _react2.default.createElement(_appBar2.default, null)\n  );\n};\n\nApp.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(App);\n\n//# sourceURL=webpack:///./client/views/index.jsx?");

/***/ }),

/***/ "./client/views/user/index.jsx":
/*!*************************************!*\
  !*** ./client/views/user/index.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _state = __webpack_require__(/*! @state */ \"./client/state/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  avatar: {\n    margin: 10\n  },\n  row: {\n    display: 'flex',\n    justifyContent: 'center'\n  }\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: _state.selectors.selectUser(state)\n  };\n};\n\nvar UserAvatar = function UserAvatar(_ref) {\n  var classes = _ref.classes,\n      user = _ref.user;\n  return !_lodash2.default.isEmpty(user) ? _react2.default.createElement(\n    'div',\n    { className: classes.row },\n    _react2.default.createElement(\n      _Avatar2.default,\n      { className: classes.avatar },\n      user.name.slice(0, 2)\n    )\n  ) : _react2.default.createElement(\n    'div',\n    { className: classes.row },\n    _react2.default.createElement(\n      _Button2.default,\n      { color: 'inherit' },\n      'Login'\n    )\n  );\n};\n\nUserAvatar.propTypes = {\n  classes: _propTypes2.default.object.isRequired,\n  user: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _styles.withStyles)(styles)(UserAvatar));\n\n//# sourceURL=webpack:///./client/views/user/index.jsx?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n// material ui\n\n// end material ui staff\n\n// import routes from './routes';\n\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _state = __webpack_require__(/*! @state */ \"./client/state/index.js\");\n\nvar _state2 = _interopRequireDefault(_state);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _qs = __webpack_require__(/*! qs */ \"qs\");\n\nvar _qs2 = _interopRequireDefault(_qs);\n\nvar _restify = __webpack_require__(/*! restify */ \"restify\");\n\nvar _restify2 = _interopRequireDefault(_restify);\n\nvar _jss = __webpack_require__(/*! react-jss/lib/jss */ \"react-jss/lib/jss\");\n\nvar _JssProvider = __webpack_require__(/*! react-jss/lib/JssProvider */ \"react-jss/lib/JssProvider\");\n\nvar _JssProvider2 = _interopRequireDefault(_JssProvider);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _green = __webpack_require__(/*! @material-ui/core/colors/green */ \"@material-ui/core/colors/green\");\n\nvar _green2 = _interopRequireDefault(_green);\n\nvar _red = __webpack_require__(/*! @material-ui/core/colors/red */ \"@material-ui/core/colors/red\");\n\nvar _red2 = _interopRequireDefault(_red);\n\nvar _views = __webpack_require__(/*! @views */ \"./client/views/index.jsx\");\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _about = __webpack_require__(/*! ./routes/about */ \"./server/routes/about/index.js\");\n\nvar _about2 = _interopRequireDefault(_about);\n\nvar _home = __webpack_require__(/*! ./routes/home */ \"./server/routes/home/index.js\");\n\nvar _home2 = _interopRequireDefault(_home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = _restify2.default.createServer();\n\n// app.use('/api', routes);\n\n\n_about2.default.applyRoutes(app);\n_home2.default.applyRoutes(app);\n\napp.get('/dist/*', _restify2.default.plugins.serveStatic({\n  directory: './dist',\n  appendRequestPath: false\n}));\napp.get('/(^\\/((?!api).)*$)', handleRender);\n\nfunction handleRender(req, res) {\n  var params = _qs2.default.parse(req.query);\n  var user = { id: 1, name: 'server user' };\n  var context = {};\n  var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__() || _redux.compose;\n  // material ui\n  // Create a sheetsRegistry instance.\n  var sheetsRegistry = new _jss.SheetsRegistry();\n  // Create a sheetsManager instance.\n  var sheetsManager = new Map();\n  // Create a theme instance.\n  var theme = (0, _styles.createMuiTheme)({\n    palette: {\n      primary: _green2.default,\n      accent: _red2.default,\n      type: 'light'\n    }\n  });\n  // Create a new class name generator.\n  var generateClassName = (0, _styles.createGenerateClassName)();\n  // Create a new Redux store instance\n  var store = (0, _redux.createStore)(_state2.default, { user: user }, composeEnhancers);\n  // Render the component to a string\n  var html = (0, _server.renderToString)(_react2.default.createElement(\n    _JssProvider2.default,\n    { registry: sheetsRegistry, generateClassName: generateClassName },\n    _react2.default.createElement(\n      _styles.MuiThemeProvider,\n      { theme: theme, sheetsManager: sheetsManager },\n      _react2.default.createElement(\n        _reactRedux.Provider,\n        { store: store },\n        _react2.default.createElement(\n          _reactRouter.StaticRouter,\n          { location: req.url, context: context },\n          _react2.default.createElement(_views2.default, null)\n        )\n      )\n    )\n  ));\n  // Grab the initial state from our Redux store\n  var preloadedState = store.getState();\n  var css = sheetsRegistry.toString();\n\n  // Send the rendered page back to the client\n  res.sendRaw(renderFullPage(html, css, preloadedState));\n}\n\nfunction renderFullPage(html, css) {\n  var preloadedState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n\n  return '\\n    <!doctype html>\\n    <html>\\n      <head>\\n        <meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\"/>\\n        <title><%= htmlWebpackPlugin.options.title %></title>\\n      </head>\\n      <body>\\n        <div id=\"react-app\">' + html + '</div>\\n        <style id=\"jss-server-side\">' + css + '</style>\\n        <script>\\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\\\u003c') + '\\n        </script>\\n        <script src=\"./dist/vendors~app.bundle.js\"></script>\\n        <script src=\"./dist/app.bundle.js\"></script>\\n      </body>\\n    </html>\\n  ';\n}\n\n// Serve the files on port 3000.\napp.listen(3000, function () {\n  var currentDate = Date('Y-m-d H:i:s');\n  console.log('Example app listening on port 3000! Time ' + currentDate + ' \\n');\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/routes/about/index.js":
/*!**************************************!*\
  !*** ./server/routes/about/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _restifyRouter = __webpack_require__(/*! restify-router */ \"restify-router\");\n\nvar _restifyRouter2 = _interopRequireDefault(_restifyRouter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Router = _restifyRouter2.default.Router;\nvar router = new Router();\n\n// define the home page route\nrouter.get('/api/about', function (req, res) {\n  res.json(200, { message: 'About api router df' });\n});\n// define the about route\nrouter.get('/api/about/v1', function (req, res) {\n  res.json(200, { message: 'About about api router' });\n});\n\nrouter.get('/api/about/*', function (req, res) {\n  res.json(404, { error: 'not found' });\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./server/routes/about/index.js?");

/***/ }),

/***/ "./server/routes/home/index.js":
/*!*************************************!*\
  !*** ./server/routes/home/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _restifyRouter = __webpack_require__(/*! restify-router */ \"restify-router\");\n\nvar _restifyRouter2 = _interopRequireDefault(_restifyRouter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Router = _restifyRouter2.default.Router;\nvar router = new Router();\n\n// define the home page route\nrouter.get('/api/home', function (req, res) {\n  res.json(200, { message: 'Home api router' });\n});\n\n// define the about route\nrouter.get('/api/home/v1', function (req, res) {\n  res.json(200, 'Home v1 api router');\n});\n\nrouter.get('/api/home/*', function (req, res) {\n  res.json(404, { error: 'not found' });\n});\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./server/routes/home/index.js?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Avatar%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Grid\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Grid%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Paper%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/green\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/green%22?");

/***/ }),

/***/ "@material-ui/core/colors/red":
/*!***********************************************!*\
  !*** external "@material-ui/core/colors/red" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors/red\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors/red%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons/Menu":
/*!******************************************!*\
  !*** external "@material-ui/icons/Menu" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Menu\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Menu%22?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "qs":
/*!*********************!*\
  !*** external "qs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"qs\");\n\n//# sourceURL=webpack:///external_%22qs%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-jss/lib/JssProvider":
/*!********************************************!*\
  !*** external "react-jss/lib/JssProvider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/JssProvider\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/JssProvider%22?");

/***/ }),

/***/ "react-jss/lib/jss":
/*!************************************!*\
  !*** external "react-jss/lib/jss" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-jss/lib/jss\");\n\n//# sourceURL=webpack:///external_%22react-jss/lib/jss%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-act":
/*!****************************!*\
  !*** external "redux-act" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-act\");\n\n//# sourceURL=webpack:///external_%22redux-act%22?");

/***/ }),

/***/ "restify":
/*!**************************!*\
  !*** external "restify" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"restify\");\n\n//# sourceURL=webpack:///external_%22restify%22?");

/***/ }),

/***/ "restify-router":
/*!*********************************!*\
  !*** external "restify-router" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"restify-router\");\n\n//# sourceURL=webpack:///external_%22restify-router%22?");

/***/ })

/******/ });