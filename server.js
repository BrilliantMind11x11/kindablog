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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.selectors = exports.actions = undefined;\n\nvar _actions = __webpack_require__(/*! ./actions.js */ \"./client/state/user/actions.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nvar _selectors = __webpack_require__(/*! ./selectors.js */ \"./client/state/user/selectors.js\");\n\nvar selectors = _interopRequireWildcard(_selectors);\n\nvar _reducers = __webpack_require__(/*! ./reducers.js */ \"./client/state/user/reducers.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nexports.actions = actions;\nexports.selectors = selectors;\nexports.default = _reducers2.default;\n\n//# sourceURL=webpack:///./client/state/user/index.js?");

/***/ }),

/***/ "./client/state/user/reducers.js":
/*!***************************************!*\
  !*** ./client/state/user/reducers.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _reduxAct = __webpack_require__(/*! redux-act */ \"redux-act\");\n\nvar _actions = __webpack_require__(/*! ./actions.js */ \"./client/state/user/actions.js\");\n\nvar actions = _interopRequireWildcard(_actions);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar user = (0, _reduxAct.createReducer)(_defineProperty({}, actions.getUserData, function (state) {\n  return state;\n}), { id: 0, name: 'test' });\n\nexports.default = user;\n\n//# sourceURL=webpack:///./client/state/user/reducers.js?");

/***/ }),

/***/ "./client/state/user/selectors.js":
/*!****************************************!*\
  !*** ./client/state/user/selectors.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar selectUser = function selectUser(state) {\n  return state.user;\n};\n\nexports.selectUser = selectUser;\n\n//# sourceURL=webpack:///./client/state/user/selectors.js?");

/***/ }),

/***/ "./client/state/user/types.js":
/*!************************************!*\
  !*** ./client/state/user/types.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar GET_USER_DATA = 'app/user/get';\n\nexports.default = {\n    GET_USER_DATA: GET_USER_DATA\n};\n\n//# sourceURL=webpack:///./client/state/user/types.js?");

/***/ }),

/***/ "./client/views/about/index.jsx":
/*!**************************************!*\
  !*** ./client/views/about/index.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  avatar: {\n    margin: 10\n  },\n  row: {\n    display: 'flex',\n    justifyContent: 'center'\n  }\n};\n\nvar About = function About(_ref) {\n  var classes = _ref.classes,\n      user = _ref.user;\n  return _react2.default.createElement(\n    'div',\n    { className: classes.row },\n    _react2.default.createElement(\n      'h1',\n      null,\n      'This is about project page'\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'Project page'\n    )\n  );\n};\n\nexports.default = (0, _styles.withStyles)(styles)(About);\n\n//# sourceURL=webpack:///./client/views/about/index.jsx?");

/***/ }),

/***/ "./client/views/appBar/index.jsx":
/*!***************************************!*\
  !*** ./client/views/appBar/index.jsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _AppBar = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n\nvar _AppBar2 = _interopRequireDefault(_AppBar);\n\nvar _Toolbar = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n\nvar _Toolbar2 = _interopRequireDefault(_Toolbar);\n\nvar _Typography = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n\nvar _Typography2 = _interopRequireDefault(_Typography);\n\nvar _IconButton = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n\nvar _IconButton2 = _interopRequireDefault(_IconButton);\n\nvar _Paper = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _Menu = __webpack_require__(/*! @material-ui/icons/Menu */ \"@material-ui/icons/Menu\");\n\nvar _Menu2 = _interopRequireDefault(_Menu);\n\nvar _user = __webpack_require__(/*! @views/user */ \"./client/views/user/index.jsx\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _home = __webpack_require__(/*! @views/home */ \"./client/views/home/index.jsx\");\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _about = __webpack_require__(/*! @views/about */ \"./client/views/about/index.jsx\");\n\nvar _about2 = _interopRequireDefault(_about);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      flexGrow: 1\n    },\n    grow: {\n      flexGrow: 1\n    },\n    menuButton: {\n      marginLeft: -12,\n      marginRight: 20\n    },\n    paper: {\n      padding: theme.spacing.unit * 2,\n      textAlign: 'center',\n      color: theme.palette.text.secondary\n    }\n  };\n};\n\nfunction ButtonAppBar(props) {\n  var classes = props.classes;\n\n  return _react2.default.createElement(\n    'div',\n    { className: classes.root },\n    _react2.default.createElement(\n      _Grid2.default,\n      { container: true, spacing: 24 },\n      _react2.default.createElement(\n        _Grid2.default,\n        { item: true, xs: 6, sm: 3 },\n        _react2.default.createElement(\n          _AppBar2.default,\n          { position: 'static' },\n          _react2.default.createElement(\n            _Toolbar2.default,\n            null,\n            _react2.default.createElement(\n              _IconButton2.default,\n              { className: classes.menuButton, color: 'inherit', 'aria-label': 'Menu' },\n              _react2.default.createElement(_Menu2.default, null)\n            ),\n            _react2.default.createElement(\n              _Typography2.default,\n              { variant: 'title', color: 'inherit', className: classes.grow },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/' },\n                'Home'\n              )\n            ),\n            _react2.default.createElement(\n              _Typography2.default,\n              { variant: 'title', color: 'inherit', className: classes.grow },\n              _react2.default.createElement(\n                _reactRouterDom.Link,\n                { to: '/about' },\n                'About'\n              )\n            ),\n            _react2.default.createElement(_user2.default, null)\n          )\n        )\n      ),\n      _react2.default.createElement(\n        _Grid2.default,\n        { item: true, xs: 6, sm: 3 },\n        _react2.default.createElement(\n          _Paper2.default,\n          { className: classes.paper },\n          'xs=12 sm=6'\n        )\n      ),\n      _react2.default.createElement(\n        _Grid2.default,\n        { item: true, xs: 6, sm: 9 },\n        _react2.default.createElement(\n          _Paper2.default,\n          { className: classes.paper },\n          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _home2.default }),\n          _react2.default.createElement(_reactRouterDom.Route, { path: '/about', component: _about2.default })\n        )\n      )\n    )\n  );\n}\n\nButtonAppBar.propTypes = {\n  classes: _propTypes2.default.object.isRequired\n};\n\nexports.default = (0, _styles.withStyles)(styles)(ButtonAppBar);\n\n//# sourceURL=webpack:///./client/views/appBar/index.jsx?");

/***/ }),

/***/ "./client/views/home/index.jsx":
/*!*************************************!*\
  !*** ./client/views/home/index.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  avatar: {\n    margin: 10\n  },\n  row: {\n    display: 'flex',\n    justifyContent: 'center'\n  }\n};\n\nvar Home = function Home(_ref) {\n  var classes = _ref.classes,\n      user = _ref.user;\n  return _react2.default.createElement(\n    'div',\n    { className: classes.row },\n    _react2.default.createElement(\n      'h1',\n      null,\n      'This is home page'\n    ),\n    _react2.default.createElement(\n      'p',\n      null,\n      'Home page'\n    )\n  );\n};\n\nexports.default = (0, _styles.withStyles)(styles)(Home);\n\n//# sourceURL=webpack:///./client/views/home/index.jsx?");

/***/ }),

/***/ "./client/views/index.jsx":
/*!********************************!*\
  !*** ./client/views/index.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Paper = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n\nvar _Paper2 = _interopRequireDefault(_Paper);\n\nvar _Grid = __webpack_require__(/*! @material-ui/core/Grid */ \"@material-ui/core/Grid\");\n\nvar _Grid2 = _interopRequireDefault(_Grid);\n\nvar _user = __webpack_require__(/*! @views/user */ \"./client/views/user/index.jsx\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _appBar = __webpack_require__(/*! @views/appBar */ \"./client/views/appBar/index.jsx\");\n\nvar _appBar2 = _interopRequireDefault(_appBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = function styles(theme) {\n  return {\n    root: {\n      flexGrow: 1\n    }\n  };\n};\n\nvar App = function App(_ref) {\n  var classes = _ref.classes;\n  return _react2.default.createElement(\n    'div',\n    { className: classes.root },\n    _react2.default.createElement(_appBar2.default, null)\n  );\n};\n\nexports.default = (0, _styles.withStyles)(styles)(App);\n\n//# sourceURL=webpack:///./client/views/index.jsx?");

/***/ }),

/***/ "./client/views/user/index.jsx":
/*!*************************************!*\
  !*** ./client/views/user/index.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(/*! prop-types */ \"prop-types\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _styles = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n\nvar _Avatar = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n\nvar _Avatar2 = _interopRequireDefault(_Avatar);\n\nvar _Button = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n\nvar _Button2 = _interopRequireDefault(_Button);\n\nvar _state = __webpack_require__(/*! @state */ \"./client/state/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = {\n  avatar: {\n    margin: 10\n  },\n  row: {\n    display: 'flex',\n    justifyContent: 'center'\n  }\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: _state.selectors.selectUser(state)\n  };\n};\n\nvar UserAvatar = function UserAvatar(_ref) {\n  var classes = _ref.classes,\n      user = _ref.user;\n  return !_lodash2.default.isEmpty(user) ? _react2.default.createElement(\n    'div',\n    { className: classes.row },\n    _react2.default.createElement(\n      _Avatar2.default,\n      { className: classes.avatar },\n      user.name.slice(0, 2)\n    )\n  ) : _react2.default.createElement(\n    'div',\n    { className: classes.row },\n    _react2.default.createElement(\n      _Button2.default,\n      { color: 'inherit' },\n      'Login'\n    )\n  );\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)((0, _styles.withStyles)(styles)(UserAvatar));\n\n//# sourceURL=webpack:///./client/views/user/index.jsx?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _views = __webpack_require__(/*! @views */ \"./client/views/index.jsx\");\n\nvar _views2 = _interopRequireDefault(_views);\n\nvar _state = __webpack_require__(/*! @state */ \"./client/state/index.js\");\n\nvar _state2 = _interopRequireDefault(_state);\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _qs = __webpack_require__(/*! qs */ \"qs\");\n\nvar _qs2 = _interopRequireDefault(_qs);\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\nvar config = __webpack_require__(/*! ../webpack.config.js */ \"./webpack.config.js\");\nvar compiler = (0, _webpack2.default)(config);\n// Tell express to use the webpack-dev-middleware and use the webpack.config.js\n// configuration file as a base.\n// app.use(webpackDevMiddleware(compiler, {\n//   publicPath: config.output.publicPath\n// }));\n\napp.use('/dist', _express2.default.static('dist'));\n\napp.use(handleRender);\n\nfunction handleRender(req, res) {\n  var params = _qs2.default.parse(req.query);\n  var user = { id: 1, name: 'server user' };\n  var context = {};\n\n  var composeEnhancers = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__() || _redux.compose;\n\n  // Create a new Redux store instance\n  var store = (0, _redux.createStore)(_state2.default, { user: user }, composeEnhancers);\n  // Render the component to a string\n  var html = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouter.StaticRouter,\n      { location: req.url, context: context },\n      _react2.default.createElement(_views2.default, null)\n    )\n  ));\n  // Grab the initial state from our Redux store\n  var preloadedState = store.getState();\n  // Send the rendered page back to the client\n  res.send(renderFullPage(html, preloadedState));\n}\n\nfunction renderFullPage(html) {\n  var preloadedState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n  return '\\n    <!doctype html>\\n    <html>\\n      <head>\\n        <meta http-equiv=\"Content-type\" content=\"text/html; charset=utf-8\"/>\\n        <title>SomeTitle</title>\\n      </head>\\n      <body>\\n        <div id=\"react-app\">' + html + '</div>\\n        <script>\\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\\\u003c') + '\\n        </script>\\n        <script src=\"./dist/vendors~app.bundle.js\"></script>\\n        <script src=\"./dist/app.bundle.js\"></script>\\n      </body>\\n    </html>\\n  ';\n}\n\n// Serve the files on port 3000.\napp.listen(3000, function () {\n  console.log('Example app listening on port 3000!\\n');\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./webpack.config.js":
/*!***************************!*\
  !*** ./webpack.config.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\nvar CleanWebpackPlugin = __webpack_require__(/*! clean-webpack-plugin */ \"clean-webpack-plugin\");\n\nmodule.exports = {\n  entry: {\n    app: './client/index.js'\n  },\n  devtool: 'inline-source-map',\n  devServer: {\n    contentBase: './dist'\n  },\n  plugins: [new HtmlWebpackPlugin({\n    title: 'React webpack starter'\n  })],\n  output: {\n    filename: '[name].bundle.js',\n    path: path.resolve(__dirname, 'dist'),\n    publicPath: '/'\n  },\n  mode: \"development\"\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./webpack.config.js?");

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

/***/ "clean-webpack-plugin":
/*!***************************************!*\
  !*** external "clean-webpack-plugin" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"clean-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22clean-webpack-plugin%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"html-webpack-plugin\");\n\n//# sourceURL=webpack:///external_%22html-webpack-plugin%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

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

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ })

/******/ });