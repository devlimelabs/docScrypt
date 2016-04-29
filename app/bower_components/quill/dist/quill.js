(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Quill"] = factory();
	else
		root["Quill"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _core = __webpack_require__(2);

	var _core2 = _interopRequireDefault(_core);

	var _align = __webpack_require__(43);

	var _direction = __webpack_require__(44);

	var _indent = __webpack_require__(45);

	var _blockquote = __webpack_require__(46);

	var _blockquote2 = _interopRequireDefault(_blockquote);

	var _header = __webpack_require__(47);

	var _header2 = _interopRequireDefault(_header);

	var _list = __webpack_require__(48);

	var _list2 = _interopRequireDefault(_list);

	var _background = __webpack_require__(49);

	var _color = __webpack_require__(50);

	var _font = __webpack_require__(51);

	var _size = __webpack_require__(52);

	var _bold = __webpack_require__(53);

	var _bold2 = _interopRequireDefault(_bold);

	var _italic = __webpack_require__(54);

	var _italic2 = _interopRequireDefault(_italic);

	var _link = __webpack_require__(55);

	var _link2 = _interopRequireDefault(_link);

	var _script = __webpack_require__(56);

	var _script2 = _interopRequireDefault(_script);

	var _strike = __webpack_require__(57);

	var _strike2 = _interopRequireDefault(_strike);

	var _underline = __webpack_require__(58);

	var _underline2 = _interopRequireDefault(_underline);

	var _formula = __webpack_require__(59);

	var _formula2 = _interopRequireDefault(_formula);

	var _image = __webpack_require__(60);

	var _image2 = _interopRequireDefault(_image);

	var _video = __webpack_require__(61);

	var _video2 = _interopRequireDefault(_video);

	var _code = __webpack_require__(62);

	var _code2 = _interopRequireDefault(_code);

	var _imageTooltip = __webpack_require__(63);

	var _imageTooltip2 = _interopRequireDefault(_imageTooltip);

	var _linkTooltip = __webpack_require__(64);

	var _linkTooltip2 = _interopRequireDefault(_linkTooltip);

	var _toolbar = __webpack_require__(65);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _bubble = __webpack_require__(66);

	var _bubble2 = _interopRequireDefault(_bubble);

	var _snow = __webpack_require__(88);

	var _snow2 = _interopRequireDefault(_snow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_core2.default.register(_align.AlignClass, _blockquote2.default, _code2.default, _direction.DirectionClass, _header2.default, _indent.IndentClass, _list2.default, _list.ListItem);
	_core2.default.register(_background.BackgroundStyle, _bold2.default, _code.Code, _color.ColorStyle, _font.FontClass, _italic2.default, _link2.default, _script2.default, _size.SizeClass, _strike2.default, _underline2.default);
	_core2.default.register(_formula2.default, _image2.default, _video2.default);

	_core2.default.register('image-tooltip', _imageTooltip2.default);
	_core2.default.register('link-tooltip', _linkTooltip2.default);
	_core2.default.register('toolbar', _toolbar2.default);

	_core2.default.register('bubble', _bubble2.default);
	_core2.default.register('snow', _snow2.default);

	module.exports = _core2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _quill = __webpack_require__(3);

	var _quill2 = _interopRequireDefault(_quill);

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _block = __webpack_require__(30);

	var _block2 = _interopRequireDefault(_block);

	var _break = __webpack_require__(31);

	var _break2 = _interopRequireDefault(_break);

	var _cursor = __webpack_require__(37);

	var _cursor2 = _interopRequireDefault(_cursor);

	var _inline = __webpack_require__(38);

	var _inline2 = _interopRequireDefault(_inline);

	var _scroll = __webpack_require__(39);

	var _scroll2 = _interopRequireDefault(_scroll);

	var _clipboard = __webpack_require__(40);

	var _clipboard2 = _interopRequireDefault(_clipboard);

	var _keyboard = __webpack_require__(41);

	var _keyboard2 = _interopRequireDefault(_keyboard);

	var _undoManager = __webpack_require__(42);

	var _undoManager2 = _interopRequireDefault(_undoManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_quill2.default.register(_block2.default, _break2.default, _cursor2.default, _inline2.default, _scroll2.default, _parchment2.default.Text);

	_quill2.default.register('clipboard', _clipboard2.default);
	_quill2.default.register('keyboard', _keyboard2.default);
	_quill2.default.register('undo-manager', _undoManager2.default);

	exports.default = _quill2.default;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.overload = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _delta = __webpack_require__(4);

	var _delta2 = _interopRequireDefault(_delta);

	var _editor = __webpack_require__(10);

	var _editor2 = _interopRequireDefault(_editor);

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _module = __webpack_require__(34);

	var _module2 = _interopRequireDefault(_module);

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _selection = __webpack_require__(35);

	var _selection2 = _interopRequireDefault(_selection);

	var _extend = __webpack_require__(32);

	var _extend2 = _interopRequireDefault(_extend);

	var _logger = __webpack_require__(13);

	var _logger2 = _interopRequireDefault(_logger);

	var _theme = __webpack_require__(36);

	var _theme2 = _interopRequireDefault(_theme);

	var _block = __webpack_require__(30);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var debug = (0, _logger2.default)('[quill]');

	var Quill = function () {
	  _createClass(Quill, null, [{
	    key: 'debug',
	    value: function debug(limit) {
	      _logger2.default.level(limit);
	    }
	  }, {
	    key: 'getModule',
	    value: function getModule(name) {
	      return _theme2.default.modules[name];
	    }
	  }, {
	    key: 'import',
	    value: function _import(name) {
	      switch (name) {
	        case 'delta':
	          return _delta2.default;
	        case 'module':
	          return _module2.default;
	        case 'parchment':
	          return _parchment2.default;
	        case 'theme':
	          return _theme2.default;
	        case 'embedblock':
	          return _block.EmbedBlock;
	        default:
	          return undefined;
	      }
	    }
	  }, {
	    key: 'register',
	    value: function register() {
	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      if (typeof args[0] === 'string') {
	        var name = args[0];
	        var target = args[1];

	        if (target.prototype instanceof _theme2.default) {
	          if (_theme2.default.themes[name] != null) debug.warn('overwriting ' + name + ' theme');
	          _theme2.default.themes[name] = target;
	        } else {
	          if (_theme2.default.modules[name] != null) debug.warn('overwriting ' + name + ' module');
	          _theme2.default.modules[name] = target;
	        }
	      } else {
	        args.forEach(function (format) {
	          var name = format.attrName || format.blotName;
	          if (_parchment2.default.query(name)) debug.warn('Overwriting ' + name + ' format');
	          _parchment2.default.register(format);
	        });
	      }
	    }
	  }]);

	  function Quill(container) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, Quill);

	    this.container = typeof container === 'string' ? document.querySelector(container) : container;
	    if (this.container == null) {
	      return debug.error('Invalid Quill container', container);
	    }
	    var themeClass = _theme2.default.themes[options.theme || Quill.DEFAULTS.theme];
	    if (themeClass == null) {
	      return debug.error('Cannot load ' + options.theme + ' theme. It may not be registered. Loading default theme.');
	    }
	    options = (0, _extend2.default)(true, {}, Quill.DEFAULTS, themeClass.DEFAULTS, options);
	    var html = this.container.innerHTML;
	    this.container.classList.add('ql-container');
	    this.container.innerHTML = '';
	    // TODO scroll will reset innerHTML as well, do not do twice
	    this.root = this.addContainer('ql-editor');
	    this.root.innerHTML = html.trim();
	    this.emitter = new _emitter2.default();
	    this.scroll = _parchment2.default.create(this.root, this.emitter);
	    this.editor = new _editor2.default(this.scroll, this.emitter);
	    this.selection = new _selection2.default(this.scroll, this.emitter);
	    this.theme = new themeClass(this, options);
	    this.keyboard = this.theme.addModule('keyboard');
	    this.clipboard = this.theme.addModule('clipboard');
	    this.undoManager = this.theme.addModule('undo-manager');
	    if (options.readOnly) {
	      this.disable();
	    }
	    this.emitter.emit(_emitter2.default.events.READY);
	  }

	  _createClass(Quill, [{
	    key: 'destroy',
	    value: function destroy() {
	      this.scroll.detach();
	      this.theme.destroy();
	    }
	  }, {
	    key: 'addContainer',
	    value: function addContainer(container) {
	      var refNode = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	      if (typeof container === 'string') {
	        var className = container;
	        container = document.createElement('div');
	        container.classList.add(className);
	      }
	      this.container.insertBefore(container, refNode);
	      return container;
	    }
	  }, {
	    key: 'deleteText',
	    value: function deleteText(index, length) {
	      var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

	      var _overload = overload(index, length, source);

	      var _overload2 = _slicedToArray(_overload, 4);

	      index = _overload2[0];
	      length = _overload2[1];
	      source = _overload2[3];

	      this.editor.deleteText(index, length, source);
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      this.editor.enable(false);
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      this.editor.enable(enabled);
	    }
	  }, {
	    key: 'focus',
	    value: function focus() {
	      this.selection.focus();
	    }
	  }, {
	    key: 'format',
	    value: function format(name, value) {
	      var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

	      var range = this.getSelection();
	      if (range == null) return;
	      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
	        this.formatLine(range, name, value, source);
	      } else if (range.length === 0) {
	        return this.selection.format(name, value);
	      } else {
	        this.formatText(range, name, value, source);
	      }
	      this.setSelection(range, _emitter2.default.sources.SILENT);
	    }
	  }, {
	    key: 'formatLine',
	    value: function formatLine(index, length, name, value, source) {
	      var formats = undefined;

	      var _overload3 = overload(index, length, name, value, source);

	      var _overload4 = _slicedToArray(_overload3, 4);

	      index = _overload4[0];
	      length = _overload4[1];
	      formats = _overload4[2];
	      source = _overload4[3];

	      this.editor.formatLine(index, length, formats, source);
	    }
	  }, {
	    key: 'formatText',
	    value: function formatText(index, length, name, value, source) {
	      var formats = undefined;

	      var _overload5 = overload(index, length, name, value, source);

	      var _overload6 = _slicedToArray(_overload5, 4);

	      index = _overload6[0];
	      length = _overload6[1];
	      formats = _overload6[2];
	      source = _overload6[3];

	      this.editor.formatText(index, length, formats, source);
	    }
	  }, {
	    key: 'getBounds',
	    value: function getBounds(index) {
	      var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      if (typeof index === 'number') {
	        return this.selection.getBounds(index, length);
	      } else {
	        return this.selection.getBounds(index.index, index.length);
	      }
	    }
	  }, {
	    key: 'getContents',
	    value: function getContents() {
	      var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	      var length = arguments.length <= 1 || arguments[1] === undefined ? this.getLength() - index : arguments[1];

	      var _overload7 = overload(index, length);

	      var _overload8 = _slicedToArray(_overload7, 2);

	      index = _overload8[0];
	      length = _overload8[1];

	      return this.editor.getContents(index, length);
	    }
	  }, {
	    key: 'getFormat',
	    value: function getFormat() {
	      var index = arguments.length <= 0 || arguments[0] === undefined ? this.getSelection() : arguments[0];
	      var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      if (typeof index === 'number') {
	        return this.editor.getFormat(index, length);
	      } else {
	        return this.editor.getFormat(index.index, index.length);
	      }
	    }
	  }, {
	    key: 'getLength',
	    value: function getLength() {
	      return this.scroll.length();
	    }
	  }, {
	    key: 'getModule',
	    value: function getModule(name) {
	      return this.theme.modules[name];
	    }
	  }, {
	    key: 'getSelection',
	    value: function getSelection() {
	      var focus = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

	      if (focus) this.focus();
	      this.update(); // Make sure we access getRange with editor in consistent state
	      return this.selection.getRange()[0];
	    }
	  }, {
	    key: 'getText',
	    value: function getText() {
	      var index = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	      var length = arguments.length <= 1 || arguments[1] === undefined ? this.getLength() - index : arguments[1];

	      var _overload9 = overload(index, length);

	      var _overload10 = _slicedToArray(_overload9, 2);

	      index = _overload10[0];
	      length = _overload10[1];

	      return this.editor.getText(index, length);
	    }
	  }, {
	    key: 'hasFocus',
	    value: function hasFocus() {
	      return this.selection.hasFocus();
	    }
	  }, {
	    key: 'insertEmbed',
	    value: function insertEmbed(index, embed, value, source) {
	      this.editor.insertEmbed(index, embed, value, source);
	    }
	  }, {
	    key: 'insertText',
	    value: function insertText(index, text, name, value, source) {
	      var formats = undefined;

	      var _overload11 = overload(index, 0, name, value, source);

	      var _overload12 = _slicedToArray(_overload11, 4);

	      index = _overload12[0];
	      formats = _overload12[2];
	      source = _overload12[3];

	      this.editor.insertText(index, text, formats, source);
	    }
	  }, {
	    key: 'off',
	    value: function off() {
	      return this.emitter.off.apply(this.emitter, arguments);
	    }
	  }, {
	    key: 'on',
	    value: function on() {
	      return this.emitter.on.apply(this.emitter, arguments);
	    }
	  }, {
	    key: 'once',
	    value: function once() {
	      return this.emitter.once.apply(this.emitter, arguments);
	    }
	  }, {
	    key: 'setContents',
	    value: function setContents(delta) {
	      var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

	      delta = new _delta2.default(delta).slice();
	      var lastOp = delta.ops[delta.ops.length - 1];
	      // Quill contents must always end with newline
	      if (lastOp == null || lastOp.insert[lastOp.insert.length - 1] !== '\n') {
	        delta.insert('\n');
	      }
	      delta.delete(this.getLength());
	      this.editor.applyDelta(delta);
	    }
	  }, {
	    key: 'setSelection',
	    value: function setSelection(index) {
	      var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	      var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

	      var _overload13 = overload(index, length, source);

	      var _overload14 = _slicedToArray(_overload13, 4);

	      index = _overload14[0];
	      length = _overload14[1];
	      source = _overload14[3];

	      this.selection.setRange(new _selection.Range(index, length), source);
	    }
	  }, {
	    key: 'setText',
	    value: function setText(text) {
	      var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

	      var delta = new _delta2.default().insert(text);
	      this.setContents(delta, source);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var source = arguments.length <= 0 || arguments[0] === undefined ? _emitter2.default.sources.USER : arguments[0];

	      this.scroll.update(source); // Will update selection before selection.update() does if text changes
	      this.selection.update(source);
	    }
	  }, {
	    key: 'updateContents',
	    value: function updateContents(delta) {
	      var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

	      if (Array.isArray(delta)) {
	        delta = new _delta2.default(delta.slice());
	      }
	      this.editor.applyDelta(delta, source);
	    }
	  }]);

	  return Quill;
	}();

	Quill.DEFAULTS = {
	  formats: [],
	  modules: {},
	  readOnly: false,
	  theme: 'default'
	};
	Quill.events = _emitter2.default.events;
	Quill.sources = _emitter2.default.sources;
	Quill.version = ("1.0.0");

	function overload(index, length, name, value, source) {
	  var formats = {};
	  if (typeof index.index === 'number' && typeof index.length === 'number') {
	    // Allow for throwaway end (used by insertText/insertEmbed)
	    if (typeof length !== 'number') {
	      source = value, value = name, name = length, length = index.length, index = index.index;
	    } else {
	      length = index.length, index = index.index;
	    }
	  } else if (typeof length !== 'number') {
	    source = value, value = name, name = length, length = 0;
	  }
	  // Handle format being object, two format name/value strings or excluded
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    formats = name;
	    source = value;
	  } else if (typeof name === 'string') {
	    if (value != null) {
	      formats[name] = value;
	    } else {
	      source = name;
	    }
	  }
	  // Handle optional source
	  source = source || _emitter2.default.sources.API;
	  return [index, length, formats, source];
	}

	exports.overload = overload;
	exports.default = Quill;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var diff = __webpack_require__(5);
	var equal = __webpack_require__(6);
	var op = __webpack_require__(9);

	var NULL_CHARACTER = String.fromCharCode(0); // Placeholder char for embed in diff()

	var Delta = function Delta(ops) {
	  // Assume we are given a well formed ops
	  if (Array.isArray(ops)) {
	    this.ops = ops;
	  } else if (ops != null && Array.isArray(ops.ops)) {
	    this.ops = ops.ops;
	  } else {
	    this.ops = [];
	  }
	};

	Delta.prototype.insert = function (text, attributes) {
	  var newOp = {};
	  if (text.length === 0) return this;
	  newOp.insert = text;
	  if ((typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object' && Object.keys(attributes).length > 0) newOp.attributes = attributes;
	  return this.push(newOp);
	};

	Delta.prototype['delete'] = function (length) {
	  if (length <= 0) return this;
	  return this.push({ 'delete': length });
	};

	Delta.prototype.retain = function (length, attributes) {
	  if (length <= 0) return this;
	  var newOp = { retain: length };
	  if ((typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) === 'object' && Object.keys(attributes).length > 0) newOp.attributes = attributes;
	  return this.push(newOp);
	};

	Delta.prototype.push = function (newOp) {
	  var index = this.ops.length;
	  var lastOp = this.ops[index - 1];
	  newOp = op.clone(newOp);
	  if ((typeof lastOp === 'undefined' ? 'undefined' : _typeof(lastOp)) === 'object') {
	    if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
	      this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
	      return this;
	    }
	    // Since it does not matter if we insert before or after deleting at the same index,
	    // always prefer to insert first
	    if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
	      index -= 1;
	      lastOp = this.ops[index - 1];
	      if ((typeof lastOp === 'undefined' ? 'undefined' : _typeof(lastOp)) !== 'object') {
	        this.ops.unshift(newOp);
	        return this;
	      }
	    }
	    if (equal(newOp.attributes, lastOp.attributes)) {
	      if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
	        this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
	        if (_typeof(newOp.attributes) === 'object') this.ops[index - 1].attributes = newOp.attributes;
	        return this;
	      } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
	        this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
	        if (_typeof(newOp.attributes) === 'object') this.ops[index - 1].attributes = newOp.attributes;
	        return this;
	      }
	    }
	  }
	  if (index === this.ops.length) {
	    this.ops.push(newOp);
	  } else {
	    this.ops.splice(index, 0, newOp);
	  }
	  return this;
	};

	Delta.prototype.chop = function () {
	  var lastOp = this.ops[this.ops.length - 1];
	  if (lastOp && lastOp.retain && !lastOp.attributes) {
	    this.ops.pop();
	  }
	  return this;
	};

	Delta.prototype.length = function () {
	  return this.ops.reduce(function (length, elem) {
	    return length + op.length(elem);
	  }, 0);
	};

	Delta.prototype.slice = function (start, end) {
	  start = start || 0;
	  if (typeof end !== 'number') end = Infinity;
	  var delta = new Delta();
	  var iter = op.iterator(this.ops);
	  var index = 0;
	  while (index < end && iter.hasNext()) {
	    var nextOp;
	    if (index < start) {
	      nextOp = iter.next(start - index);
	    } else {
	      nextOp = iter.next(end - index);
	      delta.push(nextOp);
	    }
	    index += op.length(nextOp);
	  }
	  return delta;
	};

	Delta.prototype.compose = function (other) {
	  var thisIter = op.iterator(this.ops);
	  var otherIter = op.iterator(other.ops);
	  var delta = new Delta();
	  while (thisIter.hasNext() || otherIter.hasNext()) {
	    if (otherIter.peekType() === 'insert') {
	      delta.push(otherIter.next());
	    } else if (thisIter.peekType() === 'delete') {
	      delta.push(thisIter.next());
	    } else {
	      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
	      var thisOp = thisIter.next(length);
	      var otherOp = otherIter.next(length);
	      if (typeof otherOp.retain === 'number') {
	        var newOp = {};
	        if (typeof thisOp.retain === 'number') {
	          newOp.retain = length;
	        } else {
	          newOp.insert = thisOp.insert;
	        }
	        // Preserve null when composing with a retain, otherwise remove it for inserts
	        var attributes = op.attributes.compose(thisOp.attributes, otherOp.attributes, typeof thisOp.retain === 'number');
	        if (attributes) newOp.attributes = attributes;
	        delta.push(newOp);
	        // Other op should be delete, we could be an insert or retain
	        // Insert + delete cancels out
	      } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
	          delta.push(otherOp);
	        }
	    }
	  }
	  return delta.chop();
	};

	Delta.prototype.concat = function (other) {
	  var delta = this.slice();
	  if (other.ops.length > 0) {
	    delta.push(other.ops[0]);
	    delta.ops = delta.ops.concat(other.ops.slice(1));
	  }
	  return delta;
	};

	Delta.prototype.diff = function (other) {
	  var delta = new Delta();
	  if (this.ops === other.ops) {
	    return delta;
	  }
	  var strings = [this.ops, other.ops].map(function (ops) {
	    return ops.map(function (op) {
	      if (op.insert != null) {
	        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
	      }
	      var prep = ops === other.ops ? 'on' : 'with';
	      throw new Error('diff() called ' + prep + ' non-document');
	    }).join('');
	  });
	  var diffResult = diff(strings[0], strings[1]);
	  var thisIter = op.iterator(this.ops);
	  var otherIter = op.iterator(other.ops);
	  diffResult.forEach(function (component) {
	    var length = component[1].length;
	    while (length > 0) {
	      var opLength = 0;
	      switch (component[0]) {
	        case diff.INSERT:
	          opLength = Math.min(otherIter.peekLength(), length);
	          delta.push(otherIter.next(opLength));
	          break;
	        case diff.DELETE:
	          opLength = Math.min(length, thisIter.peekLength());
	          thisIter.next(opLength);
	          delta['delete'](opLength);
	          break;
	        case diff.EQUAL:
	          opLength = Math.min(thisIter.peekLength(), otherIter.peekLength(), length);
	          var thisOp = thisIter.next(opLength);
	          var otherOp = otherIter.next(opLength);
	          if (equal(thisOp.insert, otherOp.insert)) {
	            delta.retain(opLength, op.attributes.diff(thisOp.attributes, otherOp.attributes));
	          } else {
	            delta.push(otherOp)['delete'](opLength);
	          }
	          break;
	      }
	      length -= opLength;
	    }
	  });
	  return delta.chop();
	};

	Delta.prototype.transform = function (other, priority) {
	  priority = !!priority;
	  if (typeof other === 'number') {
	    return this.transformPosition(other, priority);
	  }
	  var thisIter = op.iterator(this.ops);
	  var otherIter = op.iterator(other.ops);
	  var delta = new Delta();
	  while (thisIter.hasNext() || otherIter.hasNext()) {
	    if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
	      delta.retain(op.length(thisIter.next()));
	    } else if (otherIter.peekType() === 'insert') {
	      delta.push(otherIter.next());
	    } else {
	      var length = Math.min(thisIter.peekLength(), otherIter.peekLength());
	      var thisOp = thisIter.next(length);
	      var otherOp = otherIter.next(length);
	      if (thisOp['delete']) {
	        // Our delete either makes their delete redundant or removes their retain
	        continue;
	      } else if (otherOp['delete']) {
	        delta.push(otherOp);
	      } else {
	        // We retain either their retain or insert
	        delta.retain(length, op.attributes.transform(thisOp.attributes, otherOp.attributes, priority));
	      }
	    }
	  }
	  return delta.chop();
	};

	Delta.prototype.transformPosition = function (index, priority) {
	  priority = !!priority;
	  var thisIter = op.iterator(this.ops);
	  var offset = 0;
	  while (thisIter.hasNext() && offset <= index) {
	    var length = thisIter.peekLength();
	    var nextType = thisIter.peekType();
	    thisIter.next();
	    if (nextType === 'delete') {
	      index -= Math.min(length, index - offset);
	      continue;
	    } else if (nextType === 'insert' && (offset < index || !priority)) {
	      index += length;
	    }
	    offset += length;
	  }
	  return index;
	};

	module.exports = Delta;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * This library modifies the diff-patch-match library by Neil Fraser
	 * by removing the patch and match functionality and certain advanced
	 * options in the diff function. The original license is as follows:
	 *
	 * ===
	 *
	 * Diff Match and Patch
	 *
	 * Copyright 2006 Google Inc.
	 * http://code.google.com/p/google-diff-match-patch/
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */

	/**
	 * The data structure representing a diff is an array of tuples:
	 * [[DIFF_DELETE, 'Hello'], [DIFF_INSERT, 'Goodbye'], [DIFF_EQUAL, ' world.']]
	 * which means: delete 'Hello', add 'Goodbye' and keep ' world.'
	 */
	var DIFF_DELETE = -1;
	var DIFF_INSERT = 1;
	var DIFF_EQUAL = 0;

	/**
	 * Find the differences between two texts.  Simplifies the problem by stripping
	 * any common prefix or suffix off the texts before diffing.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @return {Array} Array of diff tuples.
	 */
	function diff_main(text1, text2) {
	  // Check for equality (speedup).
	  if (text1 == text2) {
	    if (text1) {
	      return [[DIFF_EQUAL, text1]];
	    }
	    return [];
	  }

	  // Trim off common prefix (speedup).
	  var commonlength = diff_commonPrefix(text1, text2);
	  var commonprefix = text1.substring(0, commonlength);
	  text1 = text1.substring(commonlength);
	  text2 = text2.substring(commonlength);

	  // Trim off common suffix (speedup).
	  commonlength = diff_commonSuffix(text1, text2);
	  var commonsuffix = text1.substring(text1.length - commonlength);
	  text1 = text1.substring(0, text1.length - commonlength);
	  text2 = text2.substring(0, text2.length - commonlength);

	  // Compute the diff on the middle block.
	  var diffs = diff_compute_(text1, text2);

	  // Restore the prefix and suffix.
	  if (commonprefix) {
	    diffs.unshift([DIFF_EQUAL, commonprefix]);
	  }
	  if (commonsuffix) {
	    diffs.push([DIFF_EQUAL, commonsuffix]);
	  }
	  diff_cleanupMerge(diffs);
	  return diffs;
	};

	/**
	 * Find the differences between two texts.  Assumes that the texts do not
	 * have any common prefix or suffix.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @return {Array} Array of diff tuples.
	 */
	function diff_compute_(text1, text2) {
	  var diffs;

	  if (!text1) {
	    // Just add some text (speedup).
	    return [[DIFF_INSERT, text2]];
	  }

	  if (!text2) {
	    // Just delete some text (speedup).
	    return [[DIFF_DELETE, text1]];
	  }

	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  var i = longtext.indexOf(shorttext);
	  if (i != -1) {
	    // Shorter text is inside the longer text (speedup).
	    diffs = [[DIFF_INSERT, longtext.substring(0, i)], [DIFF_EQUAL, shorttext], [DIFF_INSERT, longtext.substring(i + shorttext.length)]];
	    // Swap insertions for deletions if diff is reversed.
	    if (text1.length > text2.length) {
	      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
	    }
	    return diffs;
	  }

	  if (shorttext.length == 1) {
	    // Single character string.
	    // After the previous speedup, the character can't be an equality.
	    return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
	  }

	  // Check to see if the problem can be split in two.
	  var hm = diff_halfMatch_(text1, text2);
	  if (hm) {
	    // A half-match was found, sort out the return data.
	    var text1_a = hm[0];
	    var text1_b = hm[1];
	    var text2_a = hm[2];
	    var text2_b = hm[3];
	    var mid_common = hm[4];
	    // Send both pairs off for separate processing.
	    var diffs_a = diff_main(text1_a, text2_a);
	    var diffs_b = diff_main(text1_b, text2_b);
	    // Merge the results.
	    return diffs_a.concat([[DIFF_EQUAL, mid_common]], diffs_b);
	  }

	  return diff_bisect_(text1, text2);
	};

	/**
	 * Find the 'middle snake' of a diff, split the problem in two
	 * and return the recursively constructed diff.
	 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @return {Array} Array of diff tuples.
	 * @private
	 */
	function diff_bisect_(text1, text2) {
	  // Cache the text lengths to prevent multiple calls.
	  var text1_length = text1.length;
	  var text2_length = text2.length;
	  var max_d = Math.ceil((text1_length + text2_length) / 2);
	  var v_offset = max_d;
	  var v_length = 2 * max_d;
	  var v1 = new Array(v_length);
	  var v2 = new Array(v_length);
	  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
	  // integers and undefined.
	  for (var x = 0; x < v_length; x++) {
	    v1[x] = -1;
	    v2[x] = -1;
	  }
	  v1[v_offset + 1] = 0;
	  v2[v_offset + 1] = 0;
	  var delta = text1_length - text2_length;
	  // If the total number of characters is odd, then the front path will collide
	  // with the reverse path.
	  var front = delta % 2 != 0;
	  // Offsets for start and end of k loop.
	  // Prevents mapping of space beyond the grid.
	  var k1start = 0;
	  var k1end = 0;
	  var k2start = 0;
	  var k2end = 0;
	  for (var d = 0; d < max_d; d++) {
	    // Walk the front path one step.
	    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
	      var k1_offset = v_offset + k1;
	      var x1;
	      if (k1 == -d || k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1]) {
	        x1 = v1[k1_offset + 1];
	      } else {
	        x1 = v1[k1_offset - 1] + 1;
	      }
	      var y1 = x1 - k1;
	      while (x1 < text1_length && y1 < text2_length && text1.charAt(x1) == text2.charAt(y1)) {
	        x1++;
	        y1++;
	      }
	      v1[k1_offset] = x1;
	      if (x1 > text1_length) {
	        // Ran off the right of the graph.
	        k1end += 2;
	      } else if (y1 > text2_length) {
	        // Ran off the bottom of the graph.
	        k1start += 2;
	      } else if (front) {
	        var k2_offset = v_offset + delta - k1;
	        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
	          // Mirror x2 onto top-left coordinate system.
	          var x2 = text1_length - v2[k2_offset];
	          if (x1 >= x2) {
	            // Overlap detected.
	            return diff_bisectSplit_(text1, text2, x1, y1);
	          }
	        }
	      }
	    }

	    // Walk the reverse path one step.
	    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
	      var k2_offset = v_offset + k2;
	      var x2;
	      if (k2 == -d || k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1]) {
	        x2 = v2[k2_offset + 1];
	      } else {
	        x2 = v2[k2_offset - 1] + 1;
	      }
	      var y2 = x2 - k2;
	      while (x2 < text1_length && y2 < text2_length && text1.charAt(text1_length - x2 - 1) == text2.charAt(text2_length - y2 - 1)) {
	        x2++;
	        y2++;
	      }
	      v2[k2_offset] = x2;
	      if (x2 > text1_length) {
	        // Ran off the left of the graph.
	        k2end += 2;
	      } else if (y2 > text2_length) {
	        // Ran off the top of the graph.
	        k2start += 2;
	      } else if (!front) {
	        var k1_offset = v_offset + delta - k2;
	        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
	          var x1 = v1[k1_offset];
	          var y1 = v_offset + x1 - k1_offset;
	          // Mirror x2 onto top-left coordinate system.
	          x2 = text1_length - x2;
	          if (x1 >= x2) {
	            // Overlap detected.
	            return diff_bisectSplit_(text1, text2, x1, y1);
	          }
	        }
	      }
	    }
	  }
	  // Diff took too long and hit the deadline or
	  // number of diffs equals number of characters, no commonality at all.
	  return [[DIFF_DELETE, text1], [DIFF_INSERT, text2]];
	};

	/**
	 * Given the location of the 'middle snake', split the diff in two parts
	 * and recurse.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} x Index of split point in text1.
	 * @param {number} y Index of split point in text2.
	 * @return {Array} Array of diff tuples.
	 */
	function diff_bisectSplit_(text1, text2, x, y) {
	  var text1a = text1.substring(0, x);
	  var text2a = text2.substring(0, y);
	  var text1b = text1.substring(x);
	  var text2b = text2.substring(y);

	  // Compute both diffs serially.
	  var diffs = diff_main(text1a, text2a);
	  var diffsb = diff_main(text1b, text2b);

	  return diffs.concat(diffsb);
	};

	/**
	 * Determine the common prefix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the start of each
	 *     string.
	 */
	function diff_commonPrefix(text1, text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.length, text2.length);
	  var pointermid = pointermax;
	  var pointerstart = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(pointerstart, pointermid) == text2.substring(pointerstart, pointermid)) {
	      pointermin = pointermid;
	      pointerstart = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};

	/**
	 * Determine the common suffix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of each string.
	 */
	function diff_commonSuffix(text1, text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 || text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.length, text2.length);
	  var pointermid = pointermax;
	  var pointerend = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(text1.length - pointermid, text1.length - pointerend) == text2.substring(text2.length - pointermid, text2.length - pointerend)) {
	      pointermin = pointermid;
	      pointerend = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};

	/**
	 * Do the two texts share a substring which is at least half the length of the
	 * longer text?
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {Array.<string>} Five element Array, containing the prefix of
	 *     text1, the suffix of text1, the prefix of text2, the suffix of
	 *     text2 and the common middle.  Or null if there was no match.
	 */
	function diff_halfMatch_(text1, text2) {
	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
	    return null; // Pointless.
	  }

	  /**
	   * Does a substring of shorttext exist within longtext such that the substring
	   * is at least half the length of longtext?
	   * Closure, but does not reference any external variables.
	   * @param {string} longtext Longer string.
	   * @param {string} shorttext Shorter string.
	   * @param {number} i Start index of quarter length substring within longtext.
	   * @return {Array.<string>} Five element Array, containing the prefix of
	   *     longtext, the suffix of longtext, the prefix of shorttext, the suffix
	   *     of shorttext and the common middle.  Or null if there was no match.
	   * @private
	   */
	  function diff_halfMatchI_(longtext, shorttext, i) {
	    // Start with a 1/4 length substring at position i as a seed.
	    var seed = longtext.substring(i, i + Math.floor(longtext.length / 4));
	    var j = -1;
	    var best_common = '';
	    var best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b;
	    while ((j = shorttext.indexOf(seed, j + 1)) != -1) {
	      var prefixLength = diff_commonPrefix(longtext.substring(i), shorttext.substring(j));
	      var suffixLength = diff_commonSuffix(longtext.substring(0, i), shorttext.substring(0, j));
	      if (best_common.length < suffixLength + prefixLength) {
	        best_common = shorttext.substring(j - suffixLength, j) + shorttext.substring(j, j + prefixLength);
	        best_longtext_a = longtext.substring(0, i - suffixLength);
	        best_longtext_b = longtext.substring(i + prefixLength);
	        best_shorttext_a = shorttext.substring(0, j - suffixLength);
	        best_shorttext_b = shorttext.substring(j + prefixLength);
	      }
	    }
	    if (best_common.length * 2 >= longtext.length) {
	      return [best_longtext_a, best_longtext_b, best_shorttext_a, best_shorttext_b, best_common];
	    } else {
	      return null;
	    }
	  }

	  // First check if the second quarter is the seed for a half-match.
	  var hm1 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 4));
	  // Check again based on the third quarter.
	  var hm2 = diff_halfMatchI_(longtext, shorttext, Math.ceil(longtext.length / 2));
	  var hm;
	  if (!hm1 && !hm2) {
	    return null;
	  } else if (!hm2) {
	    hm = hm1;
	  } else if (!hm1) {
	    hm = hm2;
	  } else {
	    // Both matched.  Select the longest.
	    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
	  }

	  // A half-match was found, sort out the return data.
	  var text1_a, text1_b, text2_a, text2_b;
	  if (text1.length > text2.length) {
	    text1_a = hm[0];
	    text1_b = hm[1];
	    text2_a = hm[2];
	    text2_b = hm[3];
	  } else {
	    text2_a = hm[0];
	    text2_b = hm[1];
	    text1_a = hm[2];
	    text1_b = hm[3];
	  }
	  var mid_common = hm[4];
	  return [text1_a, text1_b, text2_a, text2_b, mid_common];
	};

	/**
	 * Reorder and merge like edit sections.  Merge equalities.
	 * Any edit section can move as long as it doesn't cross an equality.
	 * @param {Array} diffs Array of diff tuples.
	 */
	function diff_cleanupMerge(diffs) {
	  diffs.push([DIFF_EQUAL, '']); // Add a dummy entry at the end.
	  var pointer = 0;
	  var count_delete = 0;
	  var count_insert = 0;
	  var text_delete = '';
	  var text_insert = '';
	  var commonlength;
	  while (pointer < diffs.length) {
	    switch (diffs[pointer][0]) {
	      case DIFF_INSERT:
	        count_insert++;
	        text_insert += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_DELETE:
	        count_delete++;
	        text_delete += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_EQUAL:
	        // Upon reaching an equality, check for prior redundancies.
	        if (count_delete + count_insert > 1) {
	          if (count_delete !== 0 && count_insert !== 0) {
	            // Factor out any common prefixies.
	            commonlength = diff_commonPrefix(text_insert, text_delete);
	            if (commonlength !== 0) {
	              if (pointer - count_delete - count_insert > 0 && diffs[pointer - count_delete - count_insert - 1][0] == DIFF_EQUAL) {
	                diffs[pointer - count_delete - count_insert - 1][1] += text_insert.substring(0, commonlength);
	              } else {
	                diffs.splice(0, 0, [DIFF_EQUAL, text_insert.substring(0, commonlength)]);
	                pointer++;
	              }
	              text_insert = text_insert.substring(commonlength);
	              text_delete = text_delete.substring(commonlength);
	            }
	            // Factor out any common suffixies.
	            commonlength = diff_commonSuffix(text_insert, text_delete);
	            if (commonlength !== 0) {
	              diffs[pointer][1] = text_insert.substring(text_insert.length - commonlength) + diffs[pointer][1];
	              text_insert = text_insert.substring(0, text_insert.length - commonlength);
	              text_delete = text_delete.substring(0, text_delete.length - commonlength);
	            }
	          }
	          // Delete the offending records and add the merged ones.
	          if (count_delete === 0) {
	            diffs.splice(pointer - count_insert, count_delete + count_insert, [DIFF_INSERT, text_insert]);
	          } else if (count_insert === 0) {
	            diffs.splice(pointer - count_delete, count_delete + count_insert, [DIFF_DELETE, text_delete]);
	          } else {
	            diffs.splice(pointer - count_delete - count_insert, count_delete + count_insert, [DIFF_DELETE, text_delete], [DIFF_INSERT, text_insert]);
	          }
	          pointer = pointer - count_delete - count_insert + (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
	        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
	          // Merge this equality with the previous one.
	          diffs[pointer - 1][1] += diffs[pointer][1];
	          diffs.splice(pointer, 1);
	        } else {
	          pointer++;
	        }
	        count_insert = 0;
	        count_delete = 0;
	        text_delete = '';
	        text_insert = '';
	        break;
	    }
	  }
	  if (diffs[diffs.length - 1][1] === '') {
	    diffs.pop(); // Remove the dummy entry at the end.
	  }

	  // Second pass: look for single edits surrounded on both sides by equalities
	  // which can be shifted sideways to eliminate an equality.
	  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
	  var changes = false;
	  pointer = 1;
	  // Intentionally ignore the first and last element (don't need checking).
	  while (pointer < diffs.length - 1) {
	    if (diffs[pointer - 1][0] == DIFF_EQUAL && diffs[pointer + 1][0] == DIFF_EQUAL) {
	      // This is a single edit surrounded by equalities.
	      if (diffs[pointer][1].substring(diffs[pointer][1].length - diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
	        // Shift the edit over the previous equality.
	        diffs[pointer][1] = diffs[pointer - 1][1] + diffs[pointer][1].substring(0, diffs[pointer][1].length - diffs[pointer - 1][1].length);
	        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
	        diffs.splice(pointer - 1, 1);
	        changes = true;
	      } else if (diffs[pointer][1].substring(0, diffs[pointer + 1][1].length) == diffs[pointer + 1][1]) {
	        // Shift the edit over the next equality.
	        diffs[pointer - 1][1] += diffs[pointer + 1][1];
	        diffs[pointer][1] = diffs[pointer][1].substring(diffs[pointer + 1][1].length) + diffs[pointer + 1][1];
	        diffs.splice(pointer + 1, 1);
	        changes = true;
	      }
	    }
	    pointer++;
	  }
	  // If shifts were made, the diff needs reordering and another shift sweep.
	  if (changes) {
	    diff_cleanupMerge(diffs);
	  }
	};

	var diff = diff_main;
	diff.INSERT = DIFF_INSERT;
	diff.DELETE = DIFF_DELETE;
	diff.EQUAL = DIFF_EQUAL;

	module.exports = diff;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(7);
	var isArguments = __webpack_require__(8);

	var deepEqual = module.exports = function (actual, expected, opts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalent, as determined by ===.
	  if (actual === expected) {
	    return true;
	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	    // 7.3. Other pairs that do not both pass typeof value == 'object',
	    // equivalence is determined by ==.
	  } else if (!actual || !expected || (typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) != 'object' && (typeof expected === 'undefined' ? 'undefined' : _typeof(expected)) != 'object') {
	      return opts.strict ? actual === expected : actual == expected;

	      // 7.4. For all other Object pairs, including Array objects, equivalence is
	      // determined by having the same number of owned properties (as verified
	      // with Object.prototype.hasOwnProperty.call), the same set of keys
	      // (although not necessarily the same order), equivalent values for every
	      // corresponding key, and an identical 'prototype' property. Note: this
	      // accounts for both named and indexed properties on Arrays.
	    } else {
	        return objEquiv(actual, expected, opts);
	      }
	};

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer(x) {
	  if (!x || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(a, b, opts) {
	  var i, key;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(a, b, opts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {
	    //happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length) return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i]) return false;
	  }
	  //equivalent values for every corresponding key, and
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key], b[key], opts)) return false;
	  }
	  return (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof(b));
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	exports = module.exports = typeof Object.keys === 'function' ? Object.keys : shim;

	exports.shim = shim;
	function shim(obj) {
	  var keys = [];
	  for (var key in obj) {
	    keys.push(key);
	  }return keys;
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var supportsArgumentsClass = function () {
	  return Object.prototype.toString.call(arguments);
	}() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object) {
	  return object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) == 'object' && typeof object.length == 'number' && Object.prototype.hasOwnProperty.call(object, 'callee') && !Object.prototype.propertyIsEnumerable.call(object, 'callee') || false;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var lib = {
	  attributes: {
	    clone: function clone(attributes, keepNull) {
	      if ((typeof attributes === 'undefined' ? 'undefined' : _typeof(attributes)) !== 'object') return {};
	      return Object.keys(attributes).reduce(function (memo, key) {
	        if (attributes[key] !== undefined && (attributes[key] !== null || keepNull)) {
	          memo[key] = attributes[key];
	        }
	        return memo;
	      }, {});
	    },

	    compose: function compose(a, b, keepNull) {
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object') a = {};
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') b = {};
	      var attributes = this.clone(b, keepNull);
	      for (var key in a) {
	        if (a[key] !== undefined && b[key] === undefined) {
	          attributes[key] = a[key];
	        }
	      }
	      return Object.keys(attributes).length > 0 ? attributes : undefined;
	    },

	    diff: function diff(a, b) {
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object') a = {};
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') b = {};
	      var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributes, key) {
	        if (a[key] !== b[key]) {
	          attributes[key] = b[key] === undefined ? null : b[key];
	        }
	        return attributes;
	      }, {});
	      return Object.keys(attributes).length > 0 ? attributes : undefined;
	    },

	    transform: function transform(a, b, priority) {
	      if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) !== 'object') return b;
	      if ((typeof b === 'undefined' ? 'undefined' : _typeof(b)) !== 'object') return undefined;
	      if (!priority) return b; // b simply overwrites us without priority
	      var attributes = Object.keys(b).reduce(function (attributes, key) {
	        if (a[key] === undefined) attributes[key] = b[key]; // null is a valid value
	        return attributes;
	      }, {});
	      return Object.keys(attributes).length > 0 ? attributes : undefined;
	    }
	  },

	  clone: function clone(op) {
	    var newOp = this.attributes.clone(op);
	    if (_typeof(newOp.attributes) === 'object') {
	      newOp.attributes = this.attributes.clone(newOp.attributes, true);
	    }
	    return newOp;
	  },

	  iterator: function iterator(ops) {
	    return new Iterator(ops);
	  },

	  length: function length(op) {
	    if (typeof op['delete'] === 'number') {
	      return op['delete'];
	    } else if (typeof op.retain === 'number') {
	      return op.retain;
	    } else {
	      return typeof op.insert === 'string' ? op.insert.length : 1;
	    }
	  }
	};

	function Iterator(ops) {
	  this.ops = ops;
	  this.index = 0;
	  this.offset = 0;
	};

	Iterator.prototype.hasNext = function () {
	  return this.peekLength() < Infinity;
	};

	Iterator.prototype.next = function (length) {
	  if (!length) length = Infinity;
	  var nextOp = this.ops[this.index];
	  if (nextOp) {
	    var offset = this.offset;
	    var opLength = lib.length(nextOp);
	    if (length >= opLength - offset) {
	      length = opLength - offset;
	      this.index += 1;
	      this.offset = 0;
	    } else {
	      this.offset += length;
	    }
	    if (typeof nextOp['delete'] === 'number') {
	      return { 'delete': length };
	    } else {
	      var retOp = {};
	      if (nextOp.attributes) {
	        retOp.attributes = nextOp.attributes;
	      }
	      if (typeof nextOp.retain === 'number') {
	        retOp.retain = length;
	      } else if (typeof nextOp.insert === 'string') {
	        retOp.insert = nextOp.insert.substr(offset, length);
	      } else {
	        // offset should === 0, length should === 1
	        retOp.insert = nextOp.insert;
	      }
	      return retOp;
	    }
	  } else {
	    return { retain: Infinity };
	  }
	};

	Iterator.prototype.peekLength = function () {
	  if (this.ops[this.index]) {
	    // Should never return 0 if our index is being managed correctly
	    return lib.length(this.ops[this.index]) - this.offset;
	  } else {
	    return Infinity;
	  }
	};

	Iterator.prototype.peekType = function () {
	  if (this.ops[this.index]) {
	    if (typeof this.ops[this.index]['delete'] === 'number') {
	      return 'delete';
	    } else if (typeof this.ops[this.index].retain === 'number') {
	      return 'retain';
	    } else {
	      return 'insert';
	    }
	  }
	  return 'retain';
	};

	module.exports = lib;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _delta = __webpack_require__(4);

	var _delta2 = _interopRequireDefault(_delta);

	var _op = __webpack_require__(9);

	var _op2 = _interopRequireDefault(_op);

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _block = __webpack_require__(30);

	var _block2 = _interopRequireDefault(_block);

	var _clone = __webpack_require__(33);

	var _clone2 = _interopRequireDefault(_clone);

	var _extend = __webpack_require__(32);

	var _extend2 = _interopRequireDefault(_extend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Editor = function () {
	  function Editor(scroll, emitter) {
	    _classCallCheck(this, Editor);

	    this.scroll = scroll;
	    this.emitter = emitter;
	    this.emitter.on(_emitter2.default.events.SCROLL_UPDATE, this.update, this);
	    this.delta = this.getDelta();
	    this.enable();
	  }

	  _createClass(Editor, [{
	    key: 'applyDelta',
	    value: function applyDelta(delta) {
	      var _this = this;

	      var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

	      delta.ops.reduce(function (index, op) {
	        if (typeof op.delete === 'number') {
	          _this.scroll.deleteAt(index, op.delete);
	          return index;
	        }
	        var length = op.retain || op.insert.length || 1;
	        var attributes = op.attributes || {};
	        if (op.insert != null) {
	          if (typeof op.insert === 'string') {
	            _this.scroll.insertAt(index, op.insert);
	            var leaf = undefined;
	            var _scroll$line = _this.scroll.line(index);

	            var _scroll$line2 = _slicedToArray(_scroll$line, 2);

	            var line = _scroll$line2[0];
	            var offset = _scroll$line2[1];

	            if (line instanceof _parchment2.default.Leaf) {
	              leaf = line;
	            } else {
	              var _line$descendant = line.descendant(_parchment2.default.Leaf, offset);

	              var _line$descendant2 = _slicedToArray(_line$descendant, 2);

	              leaf = _line$descendant2[0];
	              offset = _line$descendant2[1];
	            }
	            var formats = (0, _extend2.default)({}, line.formats(), (0, _block.bubbleFormats)(leaf));
	            attributes = _op2.default.attributes.diff(formats, attributes) || {};
	          } else if (_typeof(op.insert) === 'object') {
	            var key = Object.keys(op.insert)[0];
	            _this.scroll.insertAt(index, key, op.insert[key]);
	            attributes = (0, _clone2.default)(attributes);
	            delete attributes[key];
	          }
	        }
	        Object.keys(attributes).forEach(function (name) {
	          _this.scroll.formatAt(index, length, name, attributes[name]);
	        });
	        return index + length;
	      }, 0);
	      this.update(source);
	    }
	  }, {
	    key: 'deleteText',
	    value: function deleteText(index, length) {
	      var source = arguments.length <= 2 || arguments[2] === undefined ? _emitter2.default.sources.API : arguments[2];

	      this.scroll.deleteAt(index, length);
	      this.update(source);
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      var enabled = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      this.scroll.domNode.setAttribute('contenteditable', enabled);
	    }
	  }, {
	    key: 'formatLine',
	    value: function formatLine(index, length) {
	      var _this2 = this;

	      var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	      var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter2.default.sources.API : arguments[3];

	      Object.keys(formats).forEach(function (format) {
	        _this2.scroll.lines(index, Math.max(length, 1)).forEach(function (line) {
	          line.format(format, formats[format]);
	        });
	      });
	      this.update(source);
	    }
	  }, {
	    key: 'formatText',
	    value: function formatText(index, length) {
	      var _this3 = this;

	      var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	      var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter2.default.sources.API : arguments[3];

	      Object.keys(formats).forEach(function (format) {
	        _this3.scroll.formatAt(index, length, format, formats[format]);
	      });
	      this.update(source);
	    }
	  }, {
	    key: 'getContents',
	    value: function getContents(index, length) {
	      return this.delta.slice(index, index + length);
	    }
	  }, {
	    key: 'getDelta',
	    value: function getDelta() {
	      return this.scroll.lines().reduce(function (delta, line) {
	        return delta.concat(line.delta());
	      }, new _delta2.default());
	    }
	  }, {
	    key: 'getFormat',
	    value: function getFormat(index) {
	      var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	      var lines = [],
	          leaves = [];
	      if (length === 0) {
	        this.scroll.path(index).forEach(function (path) {
	          var _path = _slicedToArray(path, 2);

	          var blot = _path[0];
	          var offset = _path[1];

	          if (blot instanceof _block2.default) {
	            lines.push(blot);
	          } else if (blot instanceof _parchment2.default.Leaf) {
	            leaves.push(blot);
	          }
	        });
	      } else {
	        lines = this.scroll.lines(index, length);
	        leaves = this.scroll.descendants(_parchment2.default.Leaf, index, length);
	      }
	      var formatsArr = [lines, leaves].map(function (blots) {
	        if (blots.length === 0) return {};
	        var formats = (0, _block.bubbleFormats)(blots.shift());
	        while (Object.keys(formats).length > 0) {
	          var blot = blots.shift();
	          if (blot == null) return formats;
	          formats = combineFormats((0, _block.bubbleFormats)(blot), formats);
	        }
	      });
	      return _extend2.default.apply(_extend2.default, formatsArr);
	    }
	  }, {
	    key: 'getText',
	    value: function getText(index, length) {
	      return this.getContents(index, length).ops.map(function (op) {
	        return typeof op.insert === 'string' ? op.insert : '';
	      }).join('');
	    }
	  }, {
	    key: 'insertEmbed',
	    value: function insertEmbed(index, embed, value) {
	      var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter2.default.sources.API : arguments[3];

	      this.scroll.insertAt(index, embed, value);
	      this.update(source);
	    }
	  }, {
	    key: 'insertText',
	    value: function insertText(index, text) {
	      var formats = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	      var source = arguments.length <= 3 || arguments[3] === undefined ? _emitter2.default.sources.API : arguments[3];

	      this.scroll.insertAt(index, text);
	      this.formatText(index, index + text.length, formats, source);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var source = arguments.length <= 0 || arguments[0] === undefined ? _emitter2.default.sources.USER : arguments[0];

	      var oldDelta = this.delta;
	      this.delta = this.getDelta();
	      var change = oldDelta.diff(this.delta);
	      if (change.length() > 0) {
	        this.emitter.emit(_emitter2.default.events.TEXT_CHANGE, change, oldDelta, source);
	      }
	    }
	  }]);

	  return Editor;
	}();

	function combineFormats(formats, combined) {
	  return Object.keys(combined).reduce(function (merged, name) {
	    if (formats[name] == null) return merged;
	    if (combined[name] === formats[name]) {
	      merged[name] = combined[name];
	    } else if (Array.isArray(combined[name])) {
	      if (combined[name].indexOf(formats[name]) < 0) {
	        merged[name] = combined[name].concat([formats[name]]);
	      }
	    } else {
	      merged[name] = [combined[name], formats[name]];
	    }
	    return merged;
	  }, {});
	}

	exports.default = Editor;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _eventemitter = __webpack_require__(12);

	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	var _logger = __webpack_require__(13);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = (0, _logger2.default)('quill:events');

	var Emitter = function (_EventEmitter) {
	  _inherits(Emitter, _EventEmitter);

	  function Emitter() {
	    _classCallCheck(this, Emitter);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Emitter).call(this));

	    _this.on('error', debug.error);
	    return _this;
	  }

	  _createClass(Emitter, [{
	    key: 'emit',
	    value: function emit() {
	      debug.log.apply(debug, arguments);
	      _get(Object.getPrototypeOf(Emitter.prototype), 'emit', this).apply(this, arguments);
	    }
	  }]);

	  return Emitter;
	}(_eventemitter2.default);

	Emitter.events = {
	  READY: 'ready',
	  SCROLL_OPTIMIZE: 'scroll-optimize',
	  SCROLL_UPDATE: 'scroll-update',
	  SELECTION_CHANGE: 'selection-change',
	  TEXT_CHANGE: 'text-change'
	};
	Emitter.sources = {
	  API: 'api',
	  SILENT: 'silent',
	  USER: 'user'
	};

	exports.default = Emitter;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	//
	// We store our EE objects in a plain object whose properties are event names.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// `~` to make sure that the built-in object properties are not overridden or
	// used as an attack vector.
	// We also assume that `Object.create(null)` is available when the event name
	// is an ES6 Symbol.
	//

	var prefix = typeof Object.create !== 'function' ? '~' : false;

	/**
	 * Representation of a single EventEmitter function.
	 *
	 * @param {Function} fn Event handler to be called.
	 * @param {Mixed} context Context for function execution.
	 * @param {Boolean} once Only emit once
	 * @api private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal EventEmitter interface that is molded against the Node.js
	 * EventEmitter interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() {} /* Nothing to set */

	/**
	 * Holds the assigned EventEmitters by name.
	 *
	 * @type {Object}
	 * @private
	 */
	EventEmitter.prototype._events = undefined;

	/**
	 * Return a list of assigned event listeners.
	 *
	 * @param {String} event The events that should be listed.
	 * @param {Boolean} exists We only need to know if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(event, exists) {
	  var evt = prefix ? prefix + event : event,
	      available = this._events && this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Emit an event to all registered event listeners.
	 *
	 * @param {String} event The name of the event.
	 * @returns {Boolean} Indication if we've emitted an event.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return false;

	  var listeners = this._events[evt],
	      len = arguments.length,
	      args,
	      i;

	  if ('function' === typeof listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1:
	        return listeners.fn.call(listeners.context), true;
	      case 2:
	        return listeners.fn.call(listeners.context, a1), true;
	      case 3:
	        return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4:
	        return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5:
	        return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6:
	        return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len - 1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length,
	        j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1:
	          listeners[i].fn.call(listeners[i].context);break;
	        case 2:
	          listeners[i].fn.call(listeners[i].context, a1);break;
	        case 3:
	          listeners[i].fn.call(listeners[i].context, a1, a2);break;
	        default:
	          if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Register a new EventListener for the given event.
	 *
	 * @param {String} event Name of the event.
	 * @param {Functon} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  var listener = new EE(fn, context || this),
	      evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
	  }

	  return this;
	};

	/**
	 * Add an EventListener that's only called once.
	 *
	 * @param {String} event Name of the event.
	 * @param {Function} fn Callback function.
	 * @param {Mixed} context The context of the function.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  var listener = new EE(fn, context || this, true),
	      evt = prefix ? prefix + event : event;

	  if (!this._events) this._events = prefix ? {} : Object.create(null);
	  if (!this._events[evt]) this._events[evt] = listener;else {
	    if (!this._events[evt].fn) this._events[evt].push(listener);else this._events[evt] = [this._events[evt], listener];
	  }

	  return this;
	};

	/**
	 * Remove event listeners.
	 *
	 * @param {String} event The event we want to remove.
	 * @param {Function} fn The listener that we need to find.
	 * @param {Mixed} context Only remove listeners matching this context.
	 * @param {Boolean} once Only remove once listeners.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events || !this._events[evt]) return this;

	  var listeners = this._events[evt],
	      events = [];

	  if (fn) {
	    if (listeners.fn) {
	      if (listeners.fn !== fn || once && !listeners.once || context && listeners.context !== context) {
	        events.push(listeners);
	      }
	    } else {
	      for (var i = 0, length = listeners.length; i < length; i++) {
	        if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
	          events.push(listeners[i]);
	        }
	      }
	    }
	  }

	  //
	  // Reset the array, or remove it completely if we have no more listeners.
	  //
	  if (events.length) {
	    this._events[evt] = events.length === 1 ? events[0] : events;
	  } else {
	    delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listeners or only the listeners for the specified event.
	 *
	 * @param {String} event The event want to remove all listeners for.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  if (!this._events) return this;

	  if (event) delete this._events[prefix ? prefix + event : event];else this._events = prefix ? {} : Object.create(null);

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Expose the module.
	//
	if ('undefined' !== typeof module) {
	  module.exports = EventEmitter;
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var levels = ['error', 'warn', 'log', 'info'];
	var level = 'warn';

	function debug(method) {
	  if (levels.indexOf(method) <= levels.indexOf(level)) {
	    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    console[method].apply(console, args);
	  }
	}

	function namespace(ns) {
	  return levels.reduce(function (logger, method) {
	    logger[method] = debug.bind(console, method, ns);
	    return logger;
	  }, {});
	}

	debug.level = namespace.level = function (newLevel) {
	  level = newLevel;
	};

	exports.default = namespace;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var container_1 = __webpack_require__(15);
	var format_1 = __webpack_require__(20);
	var leaf_1 = __webpack_require__(22);
	var embed_1 = __webpack_require__(23);
	var scroll_1 = __webpack_require__(24);
	var inline_1 = __webpack_require__(25);
	var block_1 = __webpack_require__(26);
	var text_1 = __webpack_require__(27);
	var attributor_1 = __webpack_require__(19);
	var class_1 = __webpack_require__(28);
	var style_1 = __webpack_require__(29);
	var store_1 = __webpack_require__(21);
	var Registry = __webpack_require__(18);
	var Parchment = {
	    Scope: Registry.Scope,
	    create: Registry.create,
	    find: Registry.find,
	    query: Registry.query,
	    register: Registry.register,
	    Container: container_1.default,
	    Format: format_1.default,
	    Leaf: leaf_1.default,
	    Embed: embed_1.default,
	    Scroll: scroll_1.default,
	    Block: block_1.default,
	    Inline: inline_1.default,
	    Text: text_1.default,
	    Attributor: {
	        Attributor: attributor_1.default,
	        Class: class_1.default,
	        Style: style_1.default,
	        Store: store_1.default
	    }
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Parchment;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var linked_list_1 = __webpack_require__(16);
	var shadow_1 = __webpack_require__(17);
	var Registry = __webpack_require__(18);
	var ContainerBlot = (function (_super) {
	    __extends(ContainerBlot, _super);
	    function ContainerBlot() {
	        _super.apply(this, arguments);
	    }
	    ContainerBlot.prototype.appendChild = function (other) {
	        this.insertBefore(other);
	    };
	    ContainerBlot.prototype.attach = function () {
	        var _this = this;
	        _super.prototype.attach.call(this);
	        this.children = new linked_list_1.default();
	        // Need to be reversed for if DOM nodes already in order
	        [].slice.call(this.domNode.childNodes).reverse().forEach(function (node) {
	            try {
	                var child = Registry.find(node) || Registry.create(node);
	                _this.insertBefore(child, _this.children.head);
	            }
	            catch (err) {
	                if (err instanceof Registry.ParchmentError)
	                    return;
	                else
	                    throw err;
	            }
	        });
	    };
	    ContainerBlot.prototype.deleteAt = function (index, length) {
	        if (index === 0 && length === this.length()) {
	            return this.remove();
	        }
	        this.children.forEachAt(index, length, function (child, offset, length) {
	            child.deleteAt(offset, length);
	        });
	    };
	    ContainerBlot.prototype.descendant = function (criteria, index) {
	        var _a = this.children.find(index), child = _a[0], offset = _a[1];
	        if ((criteria.blotName == null && criteria(child)) ||
	            (criteria.blotName != null && child instanceof criteria)) {
	            return [child, offset];
	        }
	        else if (child instanceof ContainerBlot) {
	            return child.descendant(criteria, offset);
	        }
	        else {
	            return [null, -1];
	        }
	    };
	    ContainerBlot.prototype.descendants = function (criteria, index, length) {
	        if (index === void 0) { index = 0; }
	        if (length === void 0) { length = Number.MAX_VALUE; }
	        var descendants = [], lengthLeft = length;
	        this.children.forEachAt(index, length, function (child, index, length) {
	            if ((criteria.blotName == null && criteria(child)) ||
	                (criteria.blotName != null && child instanceof criteria)) {
	                descendants.push(child);
	            }
	            if (child instanceof ContainerBlot) {
	                descendants = descendants.concat(child.descendants(criteria, index, lengthLeft));
	            }
	            lengthLeft -= length;
	        });
	        return descendants;
	    };
	    ContainerBlot.prototype.detach = function () {
	        this.children.forEach(function (child) {
	            child.detach();
	        });
	        _super.prototype.detach.call(this);
	    };
	    ContainerBlot.prototype.formatAt = function (index, length, name, value) {
	        this.children.forEachAt(index, length, function (child, offset, length) {
	            child.formatAt(offset, length, name, value);
	        });
	    };
	    ContainerBlot.prototype.insertAt = function (index, value, def) {
	        var _a = this.children.find(index), child = _a[0], offset = _a[1];
	        if (child) {
	            child.insertAt(offset, value, def);
	        }
	        else {
	            var blot = (def == null) ? Registry.create('text', value) : Registry.create(value, def);
	            this.appendChild(blot);
	        }
	    };
	    ContainerBlot.prototype.insertBefore = function (childBlot, refBlot) {
	        childBlot.insertInto(this, refBlot);
	    };
	    ContainerBlot.prototype.length = function () {
	        // TODO can we use descendants?
	        return this.children.reduce(function (memo, child) {
	            return memo + child.length();
	        }, 0);
	    };
	    ContainerBlot.prototype.moveChildren = function (targetParent, refNode) {
	        this.children.forEach(function (child) {
	            targetParent.insertBefore(child, refNode);
	        });
	    };
	    ContainerBlot.prototype.optimize = function () {
	        _super.prototype.optimize.call(this);
	        if (this.children.length === 0) {
	            if (this.statics.childless != null) {
	                var child = Registry.create(this.statics.childless);
	                this.appendChild(child);
	                child.optimize();
	            }
	            else {
	                this.remove();
	            }
	        }
	    };
	    ContainerBlot.prototype.path = function (index, inclusive) {
	        if (inclusive === void 0) { inclusive = false; }
	        var _a = this.children.find(index, inclusive), child = _a[0], offset = _a[1];
	        var position = [[this, index]];
	        if (child instanceof ContainerBlot) {
	            return position.concat(child.path(offset, inclusive));
	        }
	        else if (child != null) {
	            position.push([child, offset]);
	        }
	        return position;
	    };
	    ContainerBlot.prototype.replace = function (target) {
	        target.moveChildren(this);
	        _super.prototype.replace.call(this, target);
	    };
	    ContainerBlot.prototype.split = function (index, force) {
	        if (force === void 0) { force = false; }
	        if (!force) {
	            if (index === 0)
	                return this;
	            if (index === this.length())
	                return this.next;
	        }
	        var after = this.clone();
	        this.parent.insertBefore(after, this.next);
	        this.children.forEachAt(index, this.length(), function (child, offset, length) {
	            child = child.split(offset, force);
	            after.appendChild(child);
	        });
	        return after;
	    };
	    ContainerBlot.prototype.unwrap = function () {
	        this.moveChildren(this.parent, this.next);
	        this.remove();
	    };
	    ContainerBlot.prototype.update = function (mutations) {
	        var _this = this;
	        var addedNodes = [], removedNodes = [];
	        mutations.forEach(function (mutation) {
	            if (mutation.target === _this.domNode && mutation.type === 'childList') {
	                addedNodes.push.apply(addedNodes, mutation.addedNodes);
	                removedNodes.push.apply(removedNodes, mutation.removedNodes);
	            }
	        });
	        removedNodes.forEach(function (node) {
	            var blot = Registry.find(node);
	            if (blot == null || blot.domNode.parentNode === _this.domNode)
	                return;
	            blot.detach();
	        });
	        addedNodes.sort(function (a, b) {
	            if (a === b)
	                return 0;
	            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
	                return -1;
	            }
	            return 1;
	        });
	        addedNodes.reverse().forEach(function (node) {
	            if (node.parentNode !== _this.domNode)
	                return;
	            var refBlot = null;
	            if (node.nextSibling != null) {
	                refBlot = Registry.find(node.nextSibling);
	            }
	            var blot = Registry.find(node) || Registry.create(node);
	            if (blot.next != refBlot || blot.next == null) {
	                if (blot.parent != null) {
	                    blot.parent.children.remove(blot);
	                }
	                _this.insertBefore(blot, refBlot);
	            }
	        });
	    };
	    return ContainerBlot;
	}(shadow_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ContainerBlot;


/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";
	var LinkedList = (function () {
	    function LinkedList() {
	        this.head = this.tail = undefined;
	        this.length = 0;
	    }
	    LinkedList.prototype.append = function () {
	        var nodes = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            nodes[_i - 0] = arguments[_i];
	        }
	        this.insertBefore(nodes[0], undefined);
	        if (nodes.length > 1) {
	            this.append.apply(this, nodes.slice(1));
	        }
	    };
	    LinkedList.prototype.contains = function (node) {
	        var cur, next = this.iterator();
	        while (cur = next()) {
	            if (cur === node)
	                return true;
	        }
	        return false;
	    };
	    LinkedList.prototype.insertBefore = function (node, refNode) {
	        node.next = refNode;
	        if (refNode != null) {
	            node.prev = refNode.prev;
	            if (refNode.prev != null) {
	                refNode.prev.next = node;
	            }
	            refNode.prev = node;
	            if (refNode === this.head) {
	                this.head = node;
	            }
	        }
	        else if (this.tail != null) {
	            this.tail.next = node;
	            node.prev = this.tail;
	            this.tail = node;
	        }
	        else {
	            node.prev = undefined;
	            this.head = this.tail = node;
	        }
	        this.length += 1;
	    };
	    LinkedList.prototype.offset = function (target) {
	        var index = 0, cur = this.head;
	        while (cur != null) {
	            if (cur === target)
	                return index;
	            index += cur.length();
	            cur = cur.next;
	        }
	        return -1;
	    };
	    LinkedList.prototype.remove = function (node) {
	        if (!this.contains(node))
	            return;
	        if (node.prev != null)
	            node.prev.next = node.next;
	        if (node.next != null)
	            node.next.prev = node.prev;
	        if (node === this.head)
	            this.head = node.next;
	        if (node === this.tail)
	            this.tail = node.prev;
	        this.length -= 1;
	    };
	    LinkedList.prototype.iterator = function (curNode) {
	        if (curNode === void 0) { curNode = this.head; }
	        // TODO use yield when we can
	        return function () {
	            var ret = curNode;
	            if (curNode != null)
	                curNode = curNode.next;
	            return ret;
	        };
	    };
	    LinkedList.prototype.find = function (index, inclusive) {
	        if (inclusive === void 0) { inclusive = false; }
	        var cur, next = this.iterator();
	        while (cur = next()) {
	            var length_1 = cur.length();
	            if (index < length_1 || (inclusive && index === length_1 && (cur.next == null || cur.next.length() !== 0))) {
	                return [cur, index];
	            }
	            index -= length_1;
	        }
	        return [null, 0];
	    };
	    LinkedList.prototype.forEach = function (callback) {
	        var cur, next = this.iterator();
	        while (cur = next()) {
	            callback(cur);
	        }
	    };
	    LinkedList.prototype.forEachAt = function (index, length, callback) {
	        if (length <= 0)
	            return;
	        var _a = this.find(index), startNode = _a[0], offset = _a[1];
	        var cur, curIndex = index - offset, next = this.iterator(startNode);
	        while ((cur = next()) && curIndex < index + length) {
	            var curLength = cur.length();
	            if (index > curIndex) {
	                callback(cur, index - curIndex, Math.min(length, curIndex + curLength - index));
	            }
	            else {
	                callback(cur, 0, Math.min(curLength, index + length - curIndex));
	            }
	            curIndex += curLength;
	        }
	    };
	    LinkedList.prototype.map = function (callback) {
	        return this.reduce(function (memo, cur) {
	            memo.push(callback(cur));
	            return memo;
	        }, []);
	    };
	    LinkedList.prototype.reduce = function (callback, memo) {
	        var cur, next = this.iterator();
	        while (cur = next()) {
	            memo = callback(memo, cur);
	        }
	        return memo;
	    };
	    return LinkedList;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LinkedList;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Registry = __webpack_require__(18);
	var ShadowBlot = (function () {
	    function ShadowBlot(domNode) {
	        this.domNode = domNode;
	        this.attach();
	    }
	    Object.defineProperty(ShadowBlot.prototype, "statics", {
	        // Hack for accessing inherited static methods
	        get: function () {
	            var statics = this.constructor;
	            return {
	                blotName: statics.blotName,
	                childless: statics.childless,
	                className: statics.className,
	                scope: statics.scope,
	                tagName: statics.tagName,
	                create: statics.create,
	                formats: statics.formats,
	                value: statics.value
	            };
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ShadowBlot.create = function (value) {
	        if (this.tagName == null) {
	            throw new Registry.ParchmentError('Blot definition missing tagName');
	        }
	        var node;
	        if (Array.isArray(this.tagName)) {
	            if (typeof value === 'string' && parseInt(value).toString() === value) {
	                value = parseInt(value);
	            }
	            if (typeof value === 'number') {
	                node = document.createElement(this.tagName[value - 1]);
	            }
	            else if (this.tagName.indexOf(value) > -1) {
	                node = document.createElement(value);
	            }
	            else {
	                node = document.createElement(this.tagName[0]);
	            }
	        }
	        else {
	            node = document.createElement(this.tagName);
	        }
	        if (this.className) {
	            node.classList.add(this.className);
	        }
	        return node;
	    };
	    ShadowBlot.prototype.attach = function () {
	        this.domNode[Registry.DATA_KEY] = { blot: this };
	    };
	    ShadowBlot.prototype.clone = function () {
	        var domNode = this.domNode.cloneNode();
	        return Registry.create(domNode);
	    };
	    ShadowBlot.prototype.detach = function () {
	        if (this.parent != null)
	            this.parent.children.remove(this);
	        delete this.domNode[Registry.DATA_KEY];
	    };
	    ShadowBlot.prototype.deleteAt = function (index, length) {
	        var blot = this.isolate(index, length);
	        blot.remove();
	    };
	    ShadowBlot.prototype.findOffset = function (node) {
	        return node === this.domNode ? 0 : -1;
	    };
	    ShadowBlot.prototype.formatAt = function (index, length, name, value) {
	        var blot = this.isolate(index, length);
	        blot.wrap(name, value);
	    };
	    ShadowBlot.prototype.insertAt = function (index, value, def) {
	        var blot = (def == null) ? Registry.create('text', value) : Registry.create(value, def);
	        var ref = this.split(index);
	        this.parent.insertBefore(blot, ref);
	    };
	    ShadowBlot.prototype.insertInto = function (parentBlot, refBlot) {
	        if (this.parent != null) {
	            this.parent.children.remove(this);
	        }
	        parentBlot.children.insertBefore(this, refBlot);
	        if (refBlot != null) {
	            var refDomNode = refBlot.domNode;
	        }
	        if (this.next == null || this.domNode.nextSibling != refDomNode) {
	            parentBlot.domNode.insertBefore(this.domNode, refDomNode);
	        }
	        this.parent = parentBlot;
	    };
	    ShadowBlot.prototype.isolate = function (index, length) {
	        var target = this.split(index);
	        target.split(length);
	        return target;
	    };
	    ShadowBlot.prototype.offset = function (root) {
	        if (root === void 0) { root = this.parent; }
	        if (this.parent == null || this == root)
	            return 0;
	        return this.parent.children.offset(this) + this.parent.offset(root);
	    };
	    ShadowBlot.prototype.optimize = function () {
	        // TODO clean up
	        if (this.domNode[Registry.DATA_KEY] != null) {
	            delete this.domNode[Registry.DATA_KEY].mutations;
	        }
	    };
	    ShadowBlot.prototype.remove = function () {
	        if (this.domNode.parentNode != null) {
	            this.domNode.parentNode.removeChild(this.domNode);
	        }
	        this.detach();
	    };
	    ShadowBlot.prototype.replace = function (target) {
	        if (target.parent == null)
	            return;
	        target.parent.insertBefore(this, target.next);
	        target.remove();
	    };
	    ShadowBlot.prototype.replaceWith = function (name, value) {
	        var replacement = typeof name === 'string' ? Registry.create(name, value) : name;
	        replacement.replace(this);
	        return replacement;
	    };
	    ShadowBlot.prototype.split = function (index, force) {
	        return index === 0 ? this : this.next;
	    };
	    ShadowBlot.prototype.update = function (mutations) {
	        if (mutations === void 0) { mutations = []; }
	        // Nothing to do by default
	    };
	    ShadowBlot.prototype.wrap = function (name, value) {
	        var wrapper = typeof name === 'string' ? Registry.create(name, value) : name;
	        if (this.parent != null) {
	            this.parent.insertBefore(wrapper, this.next);
	        }
	        wrapper.appendChild(this);
	        return wrapper;
	    };
	    ShadowBlot.blotName = 'abstract';
	    return ShadowBlot;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ShadowBlot;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var attributor_1 = __webpack_require__(19);
	var ParchmentError = (function (_super) {
	    __extends(ParchmentError, _super);
	    function ParchmentError(message) {
	        message = '[Parchment] ' + message;
	        _super.call(this, message);
	        this.message = message;
	        this.name = this.constructor.name;
	    }
	    return ParchmentError;
	}(Error));
	exports.ParchmentError = ParchmentError;
	var attributes = {};
	var classes = {};
	var tags = {};
	var types = {};
	exports.DATA_KEY = '__blot';
	(function (Scope) {
	    Scope[Scope["TYPE"] = 3] = "TYPE";
	    Scope[Scope["LEVEL"] = 12] = "LEVEL";
	    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
	    Scope[Scope["BLOT"] = 14] = "BLOT";
	    Scope[Scope["INLINE"] = 7] = "INLINE";
	    Scope[Scope["BLOCK"] = 11] = "BLOCK";
	    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
	    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
	    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
	    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
	    Scope[Scope["ANY"] = 15] = "ANY";
	})(exports.Scope || (exports.Scope = {}));
	var Scope = exports.Scope;
	;
	function create(input, value) {
	    var match = query(input);
	    if (match == null) {
	        throw new ParchmentError("Unable to create " + input);
	    }
	    if (match instanceof attributor_1.default) {
	        var blot = create(match.scope & Scope.LEVEL);
	        blot.format(input, value);
	        return blot;
	    }
	    var BlotClass = match;
	    var node = input instanceof Node ? input : BlotClass.create(value);
	    return new BlotClass(node, value);
	}
	exports.create = create;
	function find(node, bubble) {
	    if (bubble === void 0) { bubble = false; }
	    if (node == null)
	        return null;
	    if (node[exports.DATA_KEY] != null)
	        return node[exports.DATA_KEY].blot;
	    if (bubble)
	        return find(node.parentNode, bubble);
	    return null;
	}
	exports.find = find;
	function query(query, scope) {
	    if (scope === void 0) { scope = Scope.ANY; }
	    var match;
	    if (typeof query === 'string') {
	        match = types[query] || attributes[query];
	    }
	    else if (query instanceof Text) {
	        match = types['text'];
	    }
	    if (typeof query === 'number') {
	        if (query & Scope.LEVEL & Scope.BLOCK) {
	            match = types['block'];
	        }
	        else if (query & Scope.LEVEL & Scope.INLINE) {
	            match = types['inline'];
	        }
	    }
	    else if (query instanceof HTMLElement) {
	        var names = (query.getAttribute('class') || '').split(/\s+/);
	        for (var i in names) {
	            if (match = classes[names[i]])
	                break;
	        }
	        match = match || tags[query.tagName];
	    }
	    if (match == null)
	        return null;
	    if ((scope & Scope.LEVEL & match.scope) && (scope & Scope.TYPE & match.scope))
	        return match;
	    return null;
	}
	exports.query = query;
	function register() {
	    var Definitions = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        Definitions[_i - 0] = arguments[_i];
	    }
	    if (Definitions.length > 1) {
	        return Definitions.map(function (d) {
	            return register(d);
	        });
	    }
	    var Definition = Definitions[0];
	    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
	        throw new ParchmentError('Invalid definition');
	    }
	    else if (Definition.blotName === 'abstract') {
	        throw new ParchmentError('Cannot register abstract class');
	    }
	    types[Definition.blotName || Definition.attrName] = Definition;
	    if (typeof Definition.keyName === 'string') {
	        attributes[Definition.keyName] = Definition;
	    }
	    else {
	        if (Definition.className != null) {
	            classes[Definition.className] = Definition;
	        }
	        if (Definition.tagName != null) {
	            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
	            tagNames.forEach(function (tag) {
	                tag = tag.toUpperCase();
	                if (tags[tag] == null || Definition.className == null) {
	                    tags[tag] = Definition;
	                }
	            });
	        }
	    }
	    return Definition;
	}
	exports.register = register;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Registry = __webpack_require__(18);
	var Attributor = (function () {
	    function Attributor(attrName, keyName, options) {
	        if (options === void 0) { options = {}; }
	        this.attrName = attrName;
	        this.keyName = keyName;
	        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
	        if (options.scope != null) {
	            // Ignore type bits, force attribute bit
	            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
	        }
	        else {
	            this.scope = Registry.Scope.ATTRIBUTE;
	        }
	        if (options.whitelist != null)
	            this.whitelist = options.whitelist;
	    }
	    Attributor.prototype.add = function (node, value) {
	        node.setAttribute(this.keyName, value);
	        return true;
	    };
	    Attributor.prototype.canAdd = function (node, value) {
	        var match = Registry.query(node, Registry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
	        if (match != null && (this.whitelist == null || this.whitelist.indexOf(value) > -1)) {
	            return true;
	        }
	        return false;
	    };
	    Attributor.prototype.remove = function (node) {
	        node.removeAttribute(this.keyName);
	    };
	    Attributor.prototype.value = function (node) {
	        return node.getAttribute(this.keyName);
	    };
	    return Attributor;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = Attributor;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var attributor_1 = __webpack_require__(19);
	var store_1 = __webpack_require__(21);
	var container_1 = __webpack_require__(15);
	var Registry = __webpack_require__(18);
	var FormatBlot = (function (_super) {
	    __extends(FormatBlot, _super);
	    function FormatBlot() {
	        _super.apply(this, arguments);
	    }
	    FormatBlot.formats = function (domNode) {
	        var formats = {};
	        if (Registry.query(this.scope).blotName !== this.blotName) {
	            formats[this.blotName] = Array.isArray(this.tagName) ? domNode.tagName.toLowerCase() : true;
	        }
	        return formats;
	    };
	    FormatBlot.prototype.attach = function () {
	        _super.prototype.attach.call(this);
	        this.attributes = new store_1.default(this.domNode);
	    };
	    FormatBlot.prototype.format = function (name, value) {
	        var format = Registry.query(name);
	        if (format instanceof attributor_1.default) {
	            this.attributes.attribute(format, value);
	        }
	        else if (value) {
	            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
	                this.replaceWith(name, value);
	            }
	        }
	        else if (name === this.statics.blotName) {
	            this.replaceWith(Registry.create(this.statics.scope));
	        }
	    };
	    FormatBlot.prototype.formats = function () {
	        var attributes = this.attributes.values();
	        var formats = this.statics.formats(this.domNode);
	        Object.keys(formats).forEach(function (key) {
	            attributes[key] = formats[key];
	        });
	        return attributes;
	    };
	    FormatBlot.prototype.replaceWith = function (name, value) {
	        var replacement = _super.prototype.replaceWith.call(this, name, value);
	        this.attributes.copy(replacement);
	        return replacement;
	    };
	    FormatBlot.prototype.update = function (mutations) {
	        var _this = this;
	        _super.prototype.update.call(this, mutations);
	        if (mutations.some(function (mutation) {
	            return mutation.target === _this.domNode && mutation.type === 'attributes';
	        })) {
	            this.attributes.build();
	        }
	    };
	    FormatBlot.prototype.wrap = function (name, value) {
	        var wrapper = _super.prototype.wrap.call(this, name, value);
	        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
	            this.attributes.move(wrapper);
	        }
	        return wrapper;
	    };
	    return FormatBlot;
	}(container_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = FormatBlot;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var attributor_1 = __webpack_require__(19);
	var Registry = __webpack_require__(18);
	var AttributorStore = (function () {
	    function AttributorStore(domNode) {
	        this.attributes = {};
	        this.domNode = domNode;
	        this.build();
	    }
	    AttributorStore.prototype.attribute = function (attribute, value) {
	        if (value) {
	            if (attribute.add(this.domNode, value)) {
	                this.attributes[attribute.attrName] = attribute;
	            }
	        }
	        else {
	            attribute.remove(this.domNode);
	            delete this.attributes[attribute.attrName];
	        }
	    };
	    AttributorStore.prototype.build = function () {
	        var _this = this;
	        this.attributes = {};
	        var attributes = [], classes = [], styles = [];
	        [].slice.call(this.domNode.attributes).forEach(function (item) {
	            if (item.name === 'class') {
	                classes = item.value.split(/\s+/).map(function (name) {
	                    return name.split('-').slice(0, -1).join('-');
	                });
	            }
	            else if (item.name === 'style') {
	                styles = item.value.split(';').map(function (val) {
	                    var arr = val.split(':');
	                    return arr[0].trim();
	                });
	            }
	            else {
	                attributes.push(item.name);
	            }
	        });
	        attributes.concat(classes).concat(styles).forEach(function (name) {
	            var attr = Registry.query(name, Registry.Scope.ATTRIBUTE);
	            if (attr instanceof attributor_1.default) {
	                _this.attributes[attr.attrName] = attr;
	            }
	        });
	    };
	    AttributorStore.prototype.copy = function (target) {
	        var _this = this;
	        Object.keys(this.attributes).forEach(function (key) {
	            var value = _this.attributes[key].value(_this.domNode);
	            target.format(key, value);
	        });
	    };
	    AttributorStore.prototype.move = function (target) {
	        var _this = this;
	        this.copy(target);
	        Object.keys(this.attributes).forEach(function (key) {
	            _this.attributes[key].remove(_this.domNode);
	        });
	        this.attributes = {};
	    };
	    AttributorStore.prototype.values = function () {
	        var _this = this;
	        return Object.keys(this.attributes).reduce(function (attributes, name) {
	            attributes[name] = _this.attributes[name].value(_this.domNode);
	            return attributes;
	        }, {});
	    };
	    return AttributorStore;
	}());
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = AttributorStore;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var shadow_1 = __webpack_require__(17);
	var Registry = __webpack_require__(18);
	var LeafBlot = (function (_super) {
	    __extends(LeafBlot, _super);
	    function LeafBlot() {
	        _super.apply(this, arguments);
	    }
	    LeafBlot.scope = Registry.Scope.INLINE_BLOT;
	    return LeafBlot;
	}(shadow_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = LeafBlot;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var leaf_1 = __webpack_require__(22);
	var EmbedBlot = (function (_super) {
	    __extends(EmbedBlot, _super);
	    function EmbedBlot() {
	        _super.apply(this, arguments);
	    }
	    EmbedBlot.formats = function (domNode) {
	        return {};
	    };
	    EmbedBlot.value = function (domNode) {
	        return null;
	    };
	    EmbedBlot.prototype.format = function (name, value) {
	        // Do nothing by default
	    };
	    EmbedBlot.prototype.formats = function () {
	        return this.statics.formats(this.domNode);
	    };
	    EmbedBlot.prototype.index = function (node, offset) {
	        if (node !== this.domNode)
	            return -1;
	        return Math.min(offset, 1);
	    };
	    EmbedBlot.prototype.length = function () {
	        return 1;
	    };
	    EmbedBlot.prototype.position = function (index, inclusive) {
	        var offset = [].indexOf.call(this.parent.domNode.childNodes, this.domNode);
	        if (index > 0)
	            offset += 1;
	        return [this.parent.domNode, offset];
	    };
	    EmbedBlot.prototype.value = function () {
	        return this.statics.value(this.domNode) || true;
	    };
	    return EmbedBlot;
	}(leaf_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = EmbedBlot;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var container_1 = __webpack_require__(15);
	var Registry = __webpack_require__(18);
	var OBSERVER_CONFIG = {
	    attributes: true,
	    characterData: true,
	    childList: true,
	    subtree: true
	};
	var MAX_OPTIMIZE_ITERATIONS = 100;
	var ScrollBlot = (function (_super) {
	    __extends(ScrollBlot, _super);
	    function ScrollBlot(node) {
	        var _this = this;
	        _super.call(this, node);
	        this.parent = null;
	        this.observer = new MutationObserver(function (mutations) {
	            _this.update(mutations);
	        });
	        this.observer.observe(this.domNode, OBSERVER_CONFIG);
	    }
	    ScrollBlot.prototype.detach = function () {
	        _super.prototype.detach.call(this);
	        this.observer.disconnect();
	    };
	    ScrollBlot.prototype.deleteAt = function (index, length) {
	        this.update();
	        if (index === 0 && length === this.length()) {
	            this.children.forEach(function (child) {
	                child.remove();
	            });
	        }
	        else {
	            _super.prototype.deleteAt.call(this, index, length);
	        }
	        this.optimize();
	    };
	    ScrollBlot.prototype.formatAt = function (index, length, name, value) {
	        this.update();
	        _super.prototype.formatAt.call(this, index, length, name, value);
	        this.optimize();
	    };
	    ScrollBlot.prototype.insertAt = function (index, value, def) {
	        this.update();
	        _super.prototype.insertAt.call(this, index, value, def);
	        this.optimize();
	    };
	    ScrollBlot.prototype.optimize = function (mutations) {
	        var _this = this;
	        if (mutations === void 0) { mutations = []; }
	        _super.prototype.optimize.call(this);
	        // TODO use WeakMap
	        mutations = mutations.concat(this.observer.takeRecords());
	        var mark = function (blot) {
	            if (blot == null || blot === _this)
	                return;
	            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
	                blot.domNode[Registry.DATA_KEY].mutations = [];
	            }
	            mark(blot.parent);
	        };
	        var optimize = function (blot) {
	            if (blot instanceof container_1.default) {
	                blot.children.forEach(function (child) {
	                    if (!child.domNode[Registry.DATA_KEY] || child.domNode[Registry.DATA_KEY].mutations == null)
	                        return;
	                    optimize(child);
	                });
	            }
	            blot.optimize();
	        };
	        for (var i = 0; mutations.length > 0; i += 1) {
	            if (i >= MAX_OPTIMIZE_ITERATIONS) {
	                throw new Error('[Parchment] Maximum optimize iterations reached');
	            }
	            mutations.forEach(function (mutation) {
	                var blot = Registry.find(mutation.target, true);
	                if (blot != null && blot.domNode === mutation.target && mutation.type === 'childList') {
	                    mark(Registry.find(mutation.previousSibling, false));
	                    [].forEach.call(mutation.addedNodes, function (node) {
	                        var child = Registry.find(node, false);
	                        mark(child);
	                        if (child instanceof container_1.default) {
	                            child.children.forEach(mark);
	                        }
	                    });
	                }
	                mark(blot);
	            });
	            this.children.forEach(optimize);
	            mutations = this.observer.takeRecords();
	        }
	    };
	    ScrollBlot.prototype.update = function (mutations) {
	        var _this = this;
	        mutations = mutations || this.observer.takeRecords();
	        // TODO use WeakMap
	        mutations.map(function (mutation) {
	            var blot = Registry.find(mutation.target, true);
	            if (blot == null)
	                return;
	            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
	                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
	                return blot;
	            }
	            else {
	                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
	                return null;
	            }
	        }).forEach(function (blot) {
	            if (blot == null)
	                return;
	            if (blot === _this) {
	                _super.prototype.update.call(_this, blot.domNode[Registry.DATA_KEY].mutations);
	            }
	            else {
	                blot.update(blot.domNode[Registry.DATA_KEY].mutations);
	            }
	        });
	        this.optimize(mutations);
	    };
	    ScrollBlot.blotName = 'scroll';
	    ScrollBlot.childless = 'block';
	    ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
	    ScrollBlot.tagName = 'DIV';
	    return ScrollBlot;
	}(container_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ScrollBlot;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var format_1 = __webpack_require__(20);
	var Registry = __webpack_require__(18);
	// Shallow object comparison
	function isEqual(obj1, obj2) {
	    if (Object.keys(obj1).length !== Object.keys(obj2).length)
	        return false;
	    for (var prop in obj1) {
	        if (obj1[prop] !== obj2[prop])
	            return false;
	    }
	    return true;
	}
	var InlineBlot = (function (_super) {
	    __extends(InlineBlot, _super);
	    function InlineBlot() {
	        _super.apply(this, arguments);
	    }
	    InlineBlot.prototype.formatAt = function (index, length, name, value) {
	        if (this.formats()[name] != null || Registry.query(name, Registry.Scope.ATTRIBUTE)) {
	            var blot = this.isolate(index, length);
	            blot.format(name, value);
	        }
	        else {
	            _super.prototype.formatAt.call(this, index, length, name, value);
	        }
	    };
	    InlineBlot.prototype.optimize = function () {
	        _super.prototype.optimize.call(this);
	        var formats = this.formats();
	        if (Object.keys(formats).length === 0) {
	            return this.unwrap(); // unformatted span
	        }
	        var next = this.next;
	        if (next instanceof InlineBlot && next.prev === this && isEqual(formats, next.formats())) {
	            next.moveChildren(this);
	            next.remove();
	        }
	    };
	    InlineBlot.blotName = 'inline';
	    InlineBlot.scope = Registry.Scope.INLINE_BLOT;
	    InlineBlot.tagName = 'SPAN';
	    return InlineBlot;
	}(format_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = InlineBlot;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var format_1 = __webpack_require__(20);
	var Registry = __webpack_require__(18);
	var BlockBlot = (function (_super) {
	    __extends(BlockBlot, _super);
	    function BlockBlot() {
	        _super.apply(this, arguments);
	    }
	    BlockBlot.prototype.formatAt = function (index, length, name, value) {
	        if (Registry.query(name, Registry.Scope.BLOCK) != null) {
	            this.format(name, value);
	        }
	        else {
	            _super.prototype.formatAt.call(this, index, length, name, value);
	        }
	    };
	    BlockBlot.prototype.insertAt = function (index, value, def) {
	        if (def == null || Registry.query(value, Registry.Scope.INLINE) != null) {
	            _super.prototype.insertAt.call(this, index, value, def);
	        }
	        else {
	            var after = this.split(index);
	            var blot = Registry.create(value, def);
	            after.parent.insertBefore(blot, after);
	        }
	    };
	    BlockBlot.blotName = 'block';
	    BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
	    BlockBlot.tagName = 'P';
	    return BlockBlot;
	}(format_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = BlockBlot;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var leaf_1 = __webpack_require__(22);
	var Registry = __webpack_require__(18);
	var TextBlot = (function (_super) {
	    __extends(TextBlot, _super);
	    function TextBlot(node) {
	        _super.call(this, node);
	        this.text = this.statics.value(this.domNode);
	    }
	    TextBlot.create = function (value) {
	        return document.createTextNode(value);
	    };
	    TextBlot.value = function (domNode) {
	        return domNode.data;
	    };
	    TextBlot.prototype.deleteAt = function (index, length) {
	        this.domNode.data = this.text = this.text.slice(0, index) + this.text.slice(index + length);
	    };
	    TextBlot.prototype.index = function (node, offset) {
	        if (this.domNode === node) {
	            return offset;
	        }
	        return -1;
	    };
	    TextBlot.prototype.insertAt = function (index, value, def) {
	        if (def == null) {
	            this.text = this.text.slice(0, index) + value + this.text.slice(index);
	            this.domNode.data = this.text;
	        }
	        else {
	            _super.prototype.insertAt.call(this, index, value, def);
	        }
	    };
	    TextBlot.prototype.length = function () {
	        return this.text.length;
	    };
	    TextBlot.prototype.optimize = function () {
	        _super.prototype.optimize.call(this);
	        this.text = this.statics.value(this.domNode);
	        if (this.text.length === 0) {
	            this.remove();
	        }
	        else if (this.next instanceof TextBlot && this.next.prev === this) {
	            this.insertAt(this.length(), this.next.value());
	            this.next.remove();
	        }
	    };
	    TextBlot.prototype.position = function (index, inclusive) {
	        if (inclusive === void 0) { inclusive = false; }
	        return [this.domNode, index];
	    };
	    TextBlot.prototype.split = function (index, force) {
	        if (force === void 0) { force = false; }
	        if (!force) {
	            if (index === 0)
	                return this;
	            if (index === this.length())
	                return this.next;
	        }
	        var after = Registry.create(this.domNode.splitText(index));
	        this.parent.insertBefore(after, this.next);
	        this.text = this.statics.value(this.domNode);
	        return after;
	    };
	    TextBlot.prototype.update = function (mutations) {
	        var _this = this;
	        if (mutations.some(function (mutation) {
	            return mutation.type === 'characterData' && mutation.target === _this.domNode;
	        })) {
	            this.text = this.statics.value(this.domNode);
	        }
	    };
	    TextBlot.prototype.value = function () {
	        return this.text;
	    };
	    TextBlot.blotName = 'text';
	    TextBlot.scope = Registry.Scope.INLINE_BLOT;
	    return TextBlot;
	}(leaf_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = TextBlot;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var attributor_1 = __webpack_require__(19);
	function match(node, prefix) {
	    var className = node.getAttribute('class') || '';
	    return className.split(/\s+/).filter(function (name) {
	        return name.indexOf(prefix + "-") === 0;
	    });
	}
	var ClassAttributor = (function (_super) {
	    __extends(ClassAttributor, _super);
	    function ClassAttributor() {
	        _super.apply(this, arguments);
	    }
	    ClassAttributor.prototype.add = function (node, value) {
	        if (!this.canAdd(node, value))
	            return false;
	        this.remove(node);
	        node.classList.add(this.keyName + "-" + value);
	        return true;
	    };
	    ClassAttributor.prototype.remove = function (node) {
	        var matches = match(node, this.keyName);
	        matches.forEach(function (name) {
	            node.classList.remove(name);
	        });
	        if (node.classList.length === 0) {
	            node.removeAttribute('class');
	        }
	    };
	    ClassAttributor.prototype.value = function (node) {
	        var result = match(node, this.keyName)[0] || '';
	        return result.slice(this.keyName.length + 1); // +1 for hyphen
	    };
	    return ClassAttributor;
	}(attributor_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = ClassAttributor;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var attributor_1 = __webpack_require__(19);
	function camelize(name) {
	    var parts = name.split('-');
	    var rest = parts.slice(1).map(function (part) {
	        return part[0].toUpperCase() + part.slice(1);
	    }).join('');
	    return parts[0] + rest;
	}
	var StyleAttributor = (function (_super) {
	    __extends(StyleAttributor, _super);
	    function StyleAttributor() {
	        _super.apply(this, arguments);
	    }
	    StyleAttributor.prototype.add = function (node, value) {
	        if (!this.canAdd(node, value))
	            return false;
	        node.style[camelize(this.keyName)] = value;
	        return true;
	    };
	    StyleAttributor.prototype.remove = function (node) {
	        node.style[camelize(this.keyName)] = '';
	        if (!node.getAttribute('style')) {
	            node.removeAttribute('style');
	        }
	    };
	    StyleAttributor.prototype.value = function (node) {
	        return node.style[camelize(this.keyName)];
	    };
	    return StyleAttributor;
	}(attributor_1.default));
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.default = StyleAttributor;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.EmbedBlock = exports.bubbleFormats = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _delta = __webpack_require__(4);

	var _delta2 = _interopRequireDefault(_delta);

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _break = __webpack_require__(31);

	var _break2 = _interopRequireDefault(_break);

	var _extend = __webpack_require__(32);

	var _extend2 = _interopRequireDefault(_extend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var NEWLINE_LENGTH = 1;

	var EmbedBlock = function (_Parchment$Embed) {
	  _inherits(EmbedBlock, _Parchment$Embed);

	  function EmbedBlock() {
	    _classCallCheck(this, EmbedBlock);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(EmbedBlock).apply(this, arguments));
	  }

	  _createClass(EmbedBlock, [{
	    key: 'attach',
	    value: function attach() {
	      _get(Object.getPrototypeOf(EmbedBlock.prototype), 'attach', this).call(this);
	      this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
	    }
	  }, {
	    key: 'delta',
	    value: function delta() {
	      var value = {};
	      value[this.statics.blotName] = this.value();
	      return new _delta2.default().insert(value, this.formats()).insert('\n', this.attributes.values());
	    }
	  }]);

	  return EmbedBlock;
	}(_parchment2.default.Embed);

	EmbedBlock.scope = _parchment2.default.Scope.BLOCK_BLOT;
	// It is important for cursor behavior EmbedBlocks use tags that are block level elements

	var Block = function (_Parchment$Block) {
	  _inherits(Block, _Parchment$Block);

	  function Block(domNode) {
	    _classCallCheck(this, Block);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Block).call(this, domNode));

	    _this2.optimize();
	    return _this2;
	  }

	  _createClass(Block, [{
	    key: 'delta',
	    value: function delta() {
	      return this.descendants(_parchment2.default.Leaf).reduce(function (delta, leaf) {
	        if (leaf.length() === 0) return delta;
	        if (leaf instanceof _parchment2.default.Embed) {
	          var value = {};
	          value[leaf.statics.blotName] = leaf.value();
	        } else {
	          var value = leaf.value();
	        }
	        return delta.insert(value, bubbleFormats(leaf));
	      }, new _delta2.default()).insert('\n', this.formats());
	    }
	  }, {
	    key: 'formatAt',
	    value: function formatAt(index, length, name, value) {
	      if (length <= 0) return;
	      if (_parchment2.default.query(name, _parchment2.default.Scope.BLOCK)) {
	        if (index + length === this.length()) {
	          this.format(name, value);
	        }
	      } else {
	        _get(Object.getPrototypeOf(Block.prototype), 'formatAt', this).call(this, index, Math.min(length, this.length() - index - 1), name, value);
	      }
	    }
	  }, {
	    key: 'insertAt',
	    value: function insertAt(index, value, def) {
	      if (def != null) return _get(Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, value, def);
	      if (value.length === 0) return;
	      var lines = value.split('\n');
	      var text = lines.shift();
	      if (text.length > 0) {
	        if (index < this.length() - 1) {
	          _get(Object.getPrototypeOf(Block.prototype), 'insertAt', this).call(this, index, text);
	        } else {
	          this.children.tail.insertAt(this.children.tail.length(), text);
	        }
	      }
	      if (lines.length > 0) {
	        var next = this.split(index + text.length, true);
	        next.insertAt(0, lines.join('\n'));
	      }
	    }
	  }, {
	    key: 'insertBefore',
	    value: function insertBefore(blot, ref) {
	      if (this.children.head instanceof _break2.default) {
	        if (ref === this.children.head) ref = null;
	        this.children.head.remove();
	      }
	      _get(Object.getPrototypeOf(Block.prototype), 'insertBefore', this).call(this, blot, ref);
	    }
	  }, {
	    key: 'length',
	    value: function length() {
	      return _get(Object.getPrototypeOf(Block.prototype), 'length', this).call(this) + NEWLINE_LENGTH;
	    }
	  }, {
	    key: 'path',
	    value: function path(index) {
	      return _get(Object.getPrototypeOf(Block.prototype), 'path', this).call(this, index, true);
	    }
	  }, {
	    key: 'split',
	    value: function split(index) {
	      var force = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
	        var clone = this.clone();
	        if (index === 0) {
	          this.parent.insertBefore(clone, this);
	          return this;
	        } else {
	          this.parent.insertBefore(clone, this.next);
	          return clone;
	        }
	      } else {
	        return _get(Object.getPrototypeOf(Block.prototype), 'split', this).call(this, index, force);
	      }
	    }
	  }]);

	  return Block;
	}(_parchment2.default.Block);

	Block.blotName = 'block';
	Block.childless = 'break';
	Block.tagName = 'P';

	// TODO remove duplicate
	function bubbleFormats(blot) {
	  if (blot == null) return {};
	  if (blot instanceof Block) return blot.formats();
	  var formats = typeof blot.formats === 'function' ? blot.formats() : {};
	  while (blot.parent != null && blot.parent.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
	    blot = blot.parent;
	    if (typeof blot.formats === 'function') {
	      formats = (0, _extend2.default)(formats, blot.formats());
	    }
	  }
	  return formats;
	}

	exports.bubbleFormats = bubbleFormats;
	exports.EmbedBlock = EmbedBlock;
	exports.default = Block;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Break = function (_Parchment$Embed) {
	  _inherits(Break, _Parchment$Embed);

	  function Break() {
	    _classCallCheck(this, Break);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Break).apply(this, arguments));
	  }

	  _createClass(Break, [{
	    key: 'insertInto',
	    value: function insertInto(parent, ref) {
	      if (parent.children.length === 0) {
	        _get(Object.getPrototypeOf(Break.prototype), 'insertInto', this).call(this, parent, ref);
	      }
	    }
	  }, {
	    key: 'length',
	    value: function length() {
	      return 0;
	    }
	  }, {
	    key: 'value',
	    value: function value() {
	      return '';
	    }
	  }]);

	  return Break;
	}(_parchment2.default.Embed);

	Break.blotName = 'break';
	Break.tagName = 'BR';

	exports.default = Break;

/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;

	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}

		return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}

		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}

		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};

	module.exports = function extend() {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0],
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && typeof target !== 'function' || target == null) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);

							// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
								target[name] = copy;
							}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var clone = function () {
	  'use strict';

	  /**
	   * Clones (copies) an Object using deep copying.
	   *
	   * This function supports circular references by default, but if you are certain
	   * there are no circular references in your object, you can save some CPU time
	   * by calling clone(obj, false).
	   *
	   * Caution: if `circular` is false and `parent` contains circular references,
	   * your program may enter an infinite loop and crash.
	   *
	   * @param `parent` - the object to be cloned
	   * @param `circular` - set to true if the object to be cloned may contain
	   *    circular references. (optional - true by default)
	   * @param `depth` - set to a number if the object is only to be cloned to
	   *    a particular depth. (optional - defaults to Infinity)
	   * @param `prototype` - sets the prototype to be used when cloning an object.
	   *    (optional - defaults to parent prototype).
	  */

	  function clone(parent, circular, depth, prototype) {
	    var filter;
	    if ((typeof circular === 'undefined' ? 'undefined' : _typeof(circular)) === 'object') {
	      depth = circular.depth;
	      prototype = circular.prototype;
	      filter = circular.filter;
	      circular = circular.circular;
	    }
	    // maintain two arrays for circular references, where corresponding parents
	    // and children have the same index
	    var allParents = [];
	    var allChildren = [];

	    var useBuffer = typeof Buffer != 'undefined';

	    if (typeof circular == 'undefined') circular = true;

	    if (typeof depth == 'undefined') depth = Infinity;

	    // recurse this function so we don't reset allParents and allChildren
	    function _clone(parent, depth) {
	      // cloning null always returns null
	      if (parent === null) return null;

	      if (depth == 0) return parent;

	      var child;
	      var proto;
	      if ((typeof parent === 'undefined' ? 'undefined' : _typeof(parent)) != 'object') {
	        return parent;
	      }

	      if (clone.__isArray(parent)) {
	        child = [];
	      } else if (clone.__isRegExp(parent)) {
	        child = new RegExp(parent.source, __getRegExpFlags(parent));
	        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
	      } else if (clone.__isDate(parent)) {
	        child = new Date(parent.getTime());
	      } else if (useBuffer && Buffer.isBuffer(parent)) {
	        child = new Buffer(parent.length);
	        parent.copy(child);
	        return child;
	      } else {
	        if (typeof prototype == 'undefined') {
	          proto = Object.getPrototypeOf(parent);
	          child = Object.create(proto);
	        } else {
	          child = Object.create(prototype);
	          proto = prototype;
	        }
	      }

	      if (circular) {
	        var index = allParents.indexOf(parent);

	        if (index != -1) {
	          return allChildren[index];
	        }
	        allParents.push(parent);
	        allChildren.push(child);
	      }

	      for (var i in parent) {
	        var attrs;
	        if (proto) {
	          attrs = Object.getOwnPropertyDescriptor(proto, i);
	        }

	        if (attrs && attrs.set == null) {
	          continue;
	        }
	        child[i] = _clone(parent[i], depth - 1);
	      }

	      return child;
	    }

	    return _clone(parent, depth);
	  }

	  /**
	   * Simple flat clone using prototype, accepts only objects, usefull for property
	   * override on FLAT configuration object (no nested props).
	   *
	   * USE WITH CAUTION! This may not behave as you wish if you do not know how this
	   * works.
	   */
	  clone.clonePrototype = function clonePrototype(parent) {
	    if (parent === null) return null;

	    var c = function c() {};
	    c.prototype = parent;
	    return new c();
	  };

	  // private utility functions

	  function __objToStr(o) {
	    return Object.prototype.toString.call(o);
	  };
	  clone.__objToStr = __objToStr;

	  function __isDate(o) {
	    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Date]';
	  };
	  clone.__isDate = __isDate;

	  function __isArray(o) {
	    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object Array]';
	  };
	  clone.__isArray = __isArray;

	  function __isRegExp(o) {
	    return (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && __objToStr(o) === '[object RegExp]';
	  };
	  clone.__isRegExp = __isRegExp;

	  function __getRegExpFlags(re) {
	    var flags = '';
	    if (re.global) flags += 'g';
	    if (re.ignoreCase) flags += 'i';
	    if (re.multiline) flags += 'm';
	    return flags;
	  };
	  clone.__getRegExpFlags = __getRegExpFlags;

	  return clone;
	}();

	if ((typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object' && module.exports) {
	  module.exports = clone;
	}

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extend = __webpack_require__(32);

	var _extend2 = _interopRequireDefault(_extend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Module = function Module(quill) {
	  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	  _classCallCheck(this, Module);

	  this.quill = quill;
	  this.options = (0, _extend2.default)({}, this.constructor.DEFAULTS, options);
	};

	Module.DEFAULTS = {};

	exports.default = Module;

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.Range = exports.findLeaf = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _deepEqual = __webpack_require__(6);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _logger = __webpack_require__(13);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var debug = (0, _logger2.default)('[quill:selection]');

	var Range = function Range(index) {
	  var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	  _classCallCheck(this, Range);

	  this.index = index;
	  this.length = length;
	};

	var Selection = function () {
	  function Selection(scroll, emitter) {
	    var _this = this;

	    _classCallCheck(this, Selection);

	    this.emitter = emitter;
	    this.scroll = scroll;
	    this.root = this.scroll.domNode;
	    this.cursor = _parchment2.default.create('cursor', this);
	    // savedRange is last non-null range
	    this.lastRange = this.savedRange = new Range(0, 0);
	    ['keyup', 'mouseup', 'touchend', 'touchleave'].forEach(function (eventName) {
	      _this.root.addEventListener(eventName, function () {
	        // When range used to be a selection and user click within the selection,
	        // the range now being a cursor has not updated yet without setTimeout
	        setTimeout(_this.update.bind(_this, _emitter2.default.sources.USER), 1);
	      });
	    });
	    this.emitter.on(_emitter2.default.events.TEXT_CHANGE, function (delta) {
	      if (delta.length() > 0) {
	        _this.update(_emitter2.default.sources.SILENT);
	      }
	    });
	    this.update(_emitter2.default.sources.SILENT);
	  }

	  _createClass(Selection, [{
	    key: 'focus',
	    value: function focus() {
	      if (this.hasFocus()) return;
	      this.root.focus();
	      this.setRange(this.savedRange);
	    }
	  }, {
	    key: 'format',
	    value: function format(_format, value) {
	      this.scroll.update();
	      var nativeRange = this.getNativeRange();
	      if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format, _parchment2.default.Scope.BLOCK)) return;
	      if (nativeRange.start.node !== this.cursor.textNode) {
	        var blot = _parchment2.default.find(nativeRange.start.node, false);
	        if (blot == null) return;
	        // TODO Give blot ability to not split
	        if (blot instanceof _parchment2.default.Leaf) {
	          var after = blot.split(nativeRange.start.offset);
	          blot.parent.insertBefore(this.cursor, after);
	        } else {
	          blot.insertBefore(this.cursor, nativeRange.start.node); // Should never happen
	        }
	      }
	      this.cursor.format(_format, value);
	      this.scroll.optimize();
	      this.setNativeRange(this.cursor.textNode, 1);
	      this.update();
	    }
	  }, {
	    key: 'getBounds',
	    value: function getBounds(index) {
	      var length = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	      var bounds = undefined;var node = undefined;
	      var _findLeaf = findLeaf(this.scroll, index);

	      var _findLeaf2 = _slicedToArray(_findLeaf, 2);

	      var leaf = _findLeaf2[0];
	      var offset = _findLeaf2[1];

	      if (leaf == null) return null;

	      var _leaf$position = leaf.position(offset, true);

	      var _leaf$position2 = _slicedToArray(_leaf$position, 2);

	      node = _leaf$position2[0];
	      offset = _leaf$position2[1];

	      var range = document.createRange();
	      if (length > 0) {
	        range.setStart(node, offset);

	        var _findLeaf3 = findLeaf(this.scroll, index + length);

	        var _findLeaf4 = _slicedToArray(_findLeaf3, 2);

	        leaf = _findLeaf4[0];
	        offset = _findLeaf4[1];

	        if (leaf == null) return null;

	        var _leaf$position3 = leaf.position(offset, true);

	        var _leaf$position4 = _slicedToArray(_leaf$position3, 2);

	        node = _leaf$position4[0];
	        offset = _leaf$position4[1];

	        range.setEnd(node, offset);
	        bounds = range.getBoundingClientRect();
	      } else {
	        var side = 'left';
	        if (node instanceof Text) {
	          if (offset < node.data.length) {
	            range.setStart(node, offset);
	            range.setEnd(node, offset + 1);
	          } else {
	            range.setStart(node, offset - 1);
	            range.setEnd(node, offset);
	            side = 'right';
	          }
	          var rect = range.getBoundingClientRect();
	          bounds = {
	            height: rect.height,
	            left: rect[side],
	            width: 0,
	            top: rect.top
	          };
	        } else {
	          bounds = leaf.domNode.getBoundingClientRect();
	          if (offset > 0) side = 'right';
	        }
	      }
	      var containerBounds = this.root.parentNode.getBoundingClientRect();
	      return {
	        left: bounds.left - containerBounds.left,
	        right: bounds.left + bounds.width - containerBounds.left,
	        top: bounds.top - containerBounds.top,
	        bottom: bounds.top + bounds.height - containerBounds.top,
	        height: bounds.height,
	        width: bounds.width
	      };
	    }
	  }, {
	    key: 'getNativeRange',
	    value: function getNativeRange() {
	      var selection = document.getSelection();
	      if (selection == null || selection.rangeCount <= 0) return null;
	      var nativeRange = selection.getRangeAt(0);
	      if (nativeRange == null) return null;
	      if (nativeRange.startContainer !== this.root && !(nativeRange.startContainer.compareDocumentPosition(this.root) & Node.DOCUMENT_POSITION_CONTAINS)) {
	        return null;
	      }
	      if (!nativeRange.collapsed && // save a call to compareDocumentPosition
	      nativeRange.endContainer !== this.root && !(nativeRange.endContainer.compareDocumentPosition(this.root) & Node.DOCUMENT_POSITION_CONTAINS)) {
	        return null;
	      }
	      var range = {
	        start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
	        end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
	        native: nativeRange
	      };
	      [range.start, range.end].forEach(function (position) {
	        var node = position.node,
	            offset = position.offset;
	        while (!(node instanceof Text) && node.childNodes.length > 0) {
	          if (node.childNodes.length > offset) {
	            node = node.childNodes[offset];
	            offset = 0;
	          } else if (node.childNodes.length === offset) {
	            node = node.lastChild;
	            offset = node instanceof Text ? node.data.length : node.childNodes.length;
	          } else {
	            break;
	          }
	        }
	        position.node = node, position.offset = offset;
	      });
	      return range;
	    }
	  }, {
	    key: 'getRange',
	    value: function getRange() {
	      var _this2 = this,
	          _Math,
	          _Math2;

	      if (!this.hasFocus()) return [null, null];
	      var range = this.getNativeRange();
	      if (range == null) return [null, null];
	      var positions = [[range.start.node, range.start.offset]];
	      if (!range.native.collapsed) {
	        positions.push([range.end.node, range.end.offset]);
	      }
	      var indexes = positions.map(function (position) {
	        var _position = _slicedToArray(position, 2);

	        var node = _position[0];
	        var offset = _position[1];

	        var blot = _parchment2.default.find(node, true);
	        var index = blot.offset(_this2.scroll);
	        if (offset === 0) {
	          return index;
	        } else if (blot instanceof _parchment2.default.Container) {
	          return index + blot.length();
	        } else {
	          return index + blot.index(node, offset);
	        }
	      });
	      var start = (_Math = Math).min.apply(_Math, _toConsumableArray(indexes)),
	          end = (_Math2 = Math).max.apply(_Math2, _toConsumableArray(indexes));
	      return [new Range(start, end - start), range];
	    }
	  }, {
	    key: 'hasFocus',
	    value: function hasFocus() {
	      return document.activeElement === this.root;
	    }
	  }, {
	    key: 'scrollIntoView',
	    value: function scrollIntoView() {
	      if (this.lastRange == null) return;
	      var bounds = this.getBounds(this.lastRange.index, this.lastRange.length);
	      if (this.root.offsetHeight < bounds.bottom) {
	        var _scroll$line = this.scroll.line(this.lastRange.index + this.lastRange.length);

	        var _scroll$line2 = _slicedToArray(_scroll$line, 2);

	        var line = _scroll$line2[0];
	        var offset = _scroll$line2[1];

	        line.domNode.scrollIntoView(false);
	      } else if (bounds.top < 0) {
	        var _scroll$line3 = this.scroll.line(this.lastRange.index);

	        var _scroll$line4 = _slicedToArray(_scroll$line3, 2);

	        var line = _scroll$line4[0];
	        var offset = _scroll$line4[1];

	        line.domNode.scrollIntoView();
	      }
	    }
	  }, {
	    key: 'setNativeRange',
	    value: function setNativeRange(startNode, startOffset) {
	      var endNode = arguments.length <= 2 || arguments[2] === undefined ? startNode : arguments[2];
	      var endOffset = arguments.length <= 3 || arguments[3] === undefined ? startOffset : arguments[3];

	      var selection = document.getSelection();
	      if (selection == null) return;
	      if (startNode != null) {
	        if (!this.hasFocus()) this.root.focus();
	        var nativeRange = this.getNativeRange();
	        if (nativeRange == null || startNode !== nativeRange.start.node || startOffset !== nativeRange.start.offset || endNode !== nativeRange.end.node || endOffset !== nativeRange.end.offset) {
	          var range = document.createRange();
	          range.setStart(startNode, startOffset);
	          range.setEnd(endNode, endOffset);
	          selection.removeAllRanges();
	          selection.addRange(range);
	        }
	      } else {
	        selection.removeAllRanges();
	        this.root.blur();
	        document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
	      }
	    }
	  }, {
	    key: 'setRange',
	    value: function setRange(range) {
	      var _this3 = this;

	      var source = arguments.length <= 1 || arguments[1] === undefined ? _emitter2.default.sources.API : arguments[1];

	      if (range != null) {
	        (function () {
	          var indexes = range.collapsed ? [range.index] : [range.index, range.index + range.length];
	          var args = [];
	          indexes.map(function (index, i) {
	            var _findLeaf5 = findLeaf(_this3.scroll, index);

	            var _findLeaf6 = _slicedToArray(_findLeaf5, 2);

	            var leaf = _findLeaf6[0];
	            var offset = _findLeaf6[1];

	            args.push.apply(args, leaf.position(offset, i !== 0));
	          });
	          _this3.setNativeRange.apply(_this3, args);
	        })();
	      } else {
	        this.setNativeRange(null);
	      }
	      this.update(source);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var source = arguments.length <= 0 || arguments[0] === undefined ? _emitter2.default.sources.USER : arguments[0];

	      var nativeRange = undefined,
	          oldRange = this.lastRange;

	      var _getRange = this.getRange();

	      var _getRange2 = _slicedToArray(_getRange, 2);

	      this.lastRange = _getRange2[0];
	      nativeRange = _getRange2[1];

	      if (this.lastRange != null) {
	        this.savedRange = this.lastRange;
	      }
	      if (!(0, _deepEqual2.default)(oldRange, this.lastRange)) {
	        if (nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
	          this.cursor.restore();
	        }
	        if (source === _emitter2.default.sources.SILENT) return;
	        this.emitter.emit(_emitter2.default.events.SELECTION_CHANGE, this.lastRange, source);
	      }
	    }
	  }]);

	  return Selection;
	}();

	function findLeaf(blot, index) {
	  var path = blot.path(index);
	  if (path.length > 0) {
	    return path.pop();
	  } else {
	    return [null, -1];
	  }
	}

	exports.findLeaf = findLeaf;
	exports.Range = Range;
	exports.default = Selection;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _extend = __webpack_require__(32);

	var _extend2 = _interopRequireDefault(_extend);

	var _logger = __webpack_require__(13);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var debug = (0, _logger2.default)('[quill:theme]');

	var Theme = function () {
	  function Theme(quill, options) {
	    _classCallCheck(this, Theme);

	    this.quill = quill;
	    this.options = options;
	    this.modules = {};
	    this.quill.once(_emitter2.default.events.READY, this.init.bind(this));
	  }

	  _createClass(Theme, [{
	    key: 'init',
	    value: function init() {
	      var _this = this;

	      Object.keys(this.options.modules).forEach(function (name) {
	        if (_this.modules[name] == null) {
	          _this.addModule(name);
	        }
	      });
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this2 = this;

	      Object.keys(this.modules).forEach(function (name) {
	        var module = _this2.modules[name];
	        if (typeof module.destroy === 'function') {
	          module.destroy();
	        }
	      });
	    }
	  }, {
	    key: 'addModule',
	    value: function addModule(name) {
	      var moduleClass = Theme.modules[name];
	      if (moduleClass == null) {
	        return debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
	      }
	      var options = this.options.modules[name];
	      if (options === true) {
	        // Allow addModule('module', true)
	        options = {};
	      } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object' && !(options instanceof HTMLElement)) {
	        // Allow addModule('toolbar', '#toolbar');
	        options = { container: options };
	      }
	      options = (0, _extend2.default)(true, {}, moduleClass.DEFAULTS || {}, options);
	      this.modules[name] = new moduleClass(this.quill, options);
	      return this.modules[name];
	    }
	  }]);

	  return Theme;
	}();

	Theme.DEFAULTS = {};
	Theme.themes = {
	  'default': Theme
	};
	Theme.modules = {};

	exports.default = Theme;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Cursor = function (_Parchment$Embed) {
	  _inherits(Cursor, _Parchment$Embed);

	  function Cursor(domNode, selection) {
	    _classCallCheck(this, Cursor);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cursor).call(this, domNode));

	    _this.selection = selection;
	    _this.textNode = document.createTextNode(Cursor.CONTENTS);
	    _this.domNode.appendChild(_this.textNode);
	    _this._length = 0;
	    return _this;
	  }

	  _createClass(Cursor, [{
	    key: 'format',
	    value: function format(name, value) {
	      if (this._length !== 0) {
	        return _get(Object.getPrototypeOf(Cursor.prototype), 'format', this).call(this, name, value);
	      }
	      var target = this,
	          index = 0;
	      this._length = Cursor.CONTENTS.length;
	      while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
	        index += target.offset(target.parent);
	        target = target.parent;
	      }
	      if (target != null) {
	        target.formatAt(index, Cursor.CONTENTS.length, name, value);
	      }
	      this._length = 0;
	    }
	  }, {
	    key: 'index',
	    value: function index(node, offset) {
	      if (node === this.textNode) return 0;
	      return _get(Object.getPrototypeOf(Cursor.prototype), 'index', this).call(this, node, offset);
	    }
	  }, {
	    key: 'length',
	    value: function length() {
	      return this._length;
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      _get(Object.getPrototypeOf(Cursor.prototype), 'remove', this).call(this);
	      this.parent = null;
	    }
	  }, {
	    key: 'restore',
	    value: function restore() {
	      if (this.parent == null) return;
	      var textNode = this.textNode;
	      var range = this.selection.getNativeRange();
	      if (this.textNode.data !== Cursor.CONTENTS) {
	        var native = this.selection.getNativeRange();
	        this.textNode.data = this.textNode.data.split(Cursor.CONTENTS).join('');
	        this.parent.insertBefore(_parchment2.default.create(this.textNode), this);
	        this.textNode = document.createTextNode(Cursor.CONTENTS);
	        this.domNode.appendChild(this.textNode);
	      }
	      this.remove();
	      if (range != null && range.start.node === textNode && range.end.node === textNode) {
	        this.selection.setNativeRange(textNode, Math.max(0, range.start.offset - 1), textNode, Math.max(0, range.end.offset - 1));
	      }
	    }
	  }, {
	    key: 'update',
	    value: function update(mutations) {
	      var _this2 = this;

	      mutations.forEach(function (mutation) {
	        if (mutation.type === 'characterData' && mutation.target === _this2.textNode) {
	          _this2.restore();
	        }
	      });
	    }
	  }, {
	    key: 'value',
	    value: function value() {
	      return '';
	    }
	  }]);

	  return Cursor;
	}(_parchment2.default.Embed);

	Cursor.blotName = 'cursor';
	Cursor.className = 'ql-cursor';
	Cursor.tagName = 'span';
	Cursor.CONTENTS = '﻿'; // Zero width space

	exports.default = Cursor;

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Inline = function (_Parchment$Inline) {
	  _inherits(Inline, _Parchment$Inline);

	  function Inline() {
	    _classCallCheck(this, Inline);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Inline).apply(this, arguments));
	  }

	  _createClass(Inline, [{
	    key: 'formatAt',
	    value: function formatAt(index, length, name, value) {
	      if (Inline.compare(this.statics.blotName, name) < 0 && _parchment2.default.query(name, _parchment2.default.Scope.BLOT)) {
	        var blot = this.isolate(index, length);
	        blot.wrap(name, value);
	      } else {
	        _get(Object.getPrototypeOf(Inline.prototype), 'formatAt', this).call(this, index, length, name, value);
	      }
	    }
	  }]);

	  return Inline;
	}(_parchment2.default.Inline);

	Inline.compare = function (self, other) {
	  return Inline.order.indexOf(self) - Inline.order.indexOf(other);
	};

	// Lower index means deeper in the DOM tree, since not found (-1) is for embeds
	Inline.order = ['cursor', 'inline', // Must be lower
	'code', 'underline', 'strike', 'bold', 'italic', 'script', 'link' // Must be higher
	];

	exports.default = Inline;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _block = __webpack_require__(30);

	var _block2 = _interopRequireDefault(_block);

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// TODO move
	function clean(container) {
	  var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null, false);
	  var node = undefined,
	      textNodes = [];
	  while (node = walker.nextNode()) {
	    textNodes.push(node);
	  }
	  textNodes.forEach(function (textNode) {
	    if (_parchment2.default.query(textNode.previousSibling, _parchment2.default.Scope.BLOCK) || _parchment2.default.query(textNode.nextSibling, _parchment2.default.Scope.BLOCK)) {
	      textNode.parentNode.removeChild(textNode);
	    }
	  });
	  return container;
	}

	function isLine(blot) {
	  return blot instanceof _block2.default || blot instanceof _block.EmbedBlock;
	}

	var Scroll = function (_Parchment$Scroll) {
	  _inherits(Scroll, _Parchment$Scroll);

	  function Scroll(domNode, emitter) {
	    _classCallCheck(this, Scroll);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Scroll).call(this, clean(domNode)));

	    _this.emitter = emitter;
	    _this.optimize();
	    return _this;
	  }

	  _createClass(Scroll, [{
	    key: 'deleteAt',
	    value: function deleteAt(index, length) {
	      var _children$find = this.children.find(index);

	      var _children$find2 = _slicedToArray(_children$find, 2);

	      var first = _children$find2[0];
	      var firstOffset = _children$find2[1];

	      var _children$find3 = this.children.find(index + length);

	      var _children$find4 = _slicedToArray(_children$find3, 2);

	      var last = _children$find4[0];
	      var lastOffset = _children$find4[1];

	      _get(Object.getPrototypeOf(Scroll.prototype), 'deleteAt', this).call(this, index, length);
	      if (last != null && first !== last && firstOffset > 0) {
	        var lastChild = first.children.tail;
	        last.moveChildren(first);
	        last.remove();
	      }
	      this.optimize();
	    }
	  }, {
	    key: 'insertBefore',
	    value: function insertBefore(childBlot, refBlot) {
	      if (!isLine(childBlot) && isLine(refBlot)) {
	        var block = _parchment2.default.create(this.statics.childless);
	        block.insertBefore(childBlot);
	        childBlot = block;
	      }
	      _get(Object.getPrototypeOf(Scroll.prototype), 'insertBefore', this).call(this, childBlot, refBlot);
	    }
	  }, {
	    key: 'line',
	    value: function line(index) {
	      return this.descendant(isLine, index);
	    }
	  }, {
	    key: 'lines',
	    value: function lines(index, length) {
	      return this.descendants(isLine, index, length);
	    }
	  }, {
	    key: 'optimize',
	    value: function optimize(mutations) {
	      _get(Object.getPrototypeOf(Scroll.prototype), 'optimize', this).call(this, mutations);
	      this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZE);
	    }
	  }, {
	    key: 'path',
	    value: function path(index) {
	      return _get(Object.getPrototypeOf(Scroll.prototype), 'path', this).call(this, index).slice(1); // Exclude self
	    }
	  }, {
	    key: 'update',
	    value: function update(mutations) {
	      var source = _emitter2.default.sources.USER;
	      if (typeof mutations === 'string') {
	        source = mutations;
	      }
	      if (!Array.isArray(mutations)) {
	        mutations = this.observer.takeRecords();
	      }
	      _get(Object.getPrototypeOf(Scroll.prototype), 'update', this).call(this, mutations);
	      if (mutations.length > 0) {
	        this.emitter.emit(_emitter2.default.events.SCROLL_UPDATE, source);
	      }
	    }
	  }]);

	  return Scroll;
	}(_parchment2.default.Scroll);

	Scroll.blotName = 'scroll';
	Scroll.className = 'ql-editor';
	Scroll.childless = 'block';
	Scroll.tagName = 'DIV';

	exports.default = Scroll;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _delta = __webpack_require__(4);

	var _delta2 = _interopRequireDefault(_delta);

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _module = __webpack_require__(34);

	var _module2 = _interopRequireDefault(_module);

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _logger = __webpack_require__(13);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = (0, _logger2.default)('quill:clipboard');

	var DOM_KEY = '__ql-matcher';
	var BLOCK_ELEMENTS = {
	  'ADDRESS': true,
	  'ARTICLE': true,
	  'ASIDE': true,
	  'BLOCKQUOTE': true,
	  'CANVAS': true,
	  'DIV': true,
	  'DL': true,
	  'FIELDSET': true,
	  'FIGCAPTION': true,
	  'FIGURE': true,
	  'FOOTER': true,
	  'FORM': true,
	  'HEADER': true,
	  'H1': true, 'H2': true, 'H3': true, 'H4': true, 'H5': true, 'H6': true,
	  'HGROUP': true,
	  'HR': true,
	  'LI': true,
	  'MAIN': true,
	  'NAV': true,
	  'NOSCRIPT': true,
	  'OL': true,
	  'OUTPUT': true,
	  'P': true,
	  'PRE': true,
	  'SECTION': true,
	  'TABLE': true,
	  'TFOOT': true,
	  'UL': true,
	  'VIDEO': true
	};

	var Clipboard = function (_Module) {
	  _inherits(Clipboard, _Module);

	  function Clipboard(quill, options) {
	    _classCallCheck(this, Clipboard);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Clipboard).call(this, quill, options));

	    _this.onCopy = _this.onCopy.bind(_this);
	    _this.onCut = _this.onCut.bind(_this);
	    _this.onPaste = _this.onPaste.bind(_this);
	    _this.bind();
	    _this.container = _this.quill.addContainer('ql-clipboard');
	    _this.container.setAttribute('contenteditable', true);
	    _this.matchers = [[Node.TEXT_NODE, matchText], [Node.ELEMENT_NODE, matchNewline], [Node.ELEMENT_NODE, matchBlot], [Node.ELEMENT_NODE, matchSpacing], ['b, i', matchAliases]];
	    return _this;
	  }

	  _createClass(Clipboard, [{
	    key: 'bind',
	    value: function bind() {
	      this.quill.root.addEventListener('copy', this.onCopy);
	      this.quill.root.addEventListener('cut', this.onCut);
	      this.quill.root.addEventListener('paste', this.onPaste);
	    }
	  }, {
	    key: 'unbind',
	    value: function unbind() {
	      this.quill.root.removeEventListener('copy', this.onCopy);
	      this.quill.root.removeEventListener('cut', this.onCut);
	      this.quill.root.removeEventListener('paste', this.onPaste);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.unbind();
	    }
	  }, {
	    key: 'addMatcher',
	    value: function addMatcher(selector, matcher) {
	      this.matchers.push([selector, matcher]);
	    }
	  }, {
	    key: 'convert',
	    value: function convert(container) {
	      var _this2 = this;

	      this.matchers.forEach(function (pair) {
	        var _pair = _slicedToArray(pair, 2);

	        var selector = _pair[0];
	        var matcher = _pair[1];

	        if (typeof selector === 'string') {
	          [].forEach.call(container.querySelectorAll(selector), function (node) {
	            // TODO use weakmap
	            node[DOM_KEY] = node[DOM_KEY] || [];
	            node[DOM_KEY].push(matcher);
	          });
	        }
	      });
	      var traverse = function traverse(node) {
	        // Post-order
	        return [].reduce.call(node.childNodes || [], function (delta, childNode) {
	          var childrenDelta = traverse(childNode);
	          childrenDelta = _this2.matchers.reduce(function (childrenDelta, pair) {
	            var _pair2 = _slicedToArray(pair, 2);

	            var type = _pair2[0];
	            var matcher = _pair2[1];

	            if (type === true || childNode.nodeType === type) {
	              childrenDelta = matcher(childNode, childrenDelta);
	            }
	            return childrenDelta;
	          }, childrenDelta);
	          childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDelta, matcher) {
	            return matcher(childNode, childrenDelta);
	          }, childrenDelta);
	          return delta.concat(childrenDelta);
	        }, new _delta2.default());
	      };
	      return traverse(container);
	    }
	  }, {
	    key: 'onCopy',
	    value: function onCopy(e) {
	      var range = this.quill.getSelection();
	      if (range == null || range.length === 0 || e.defaultPrevented) return;
	      var clipboard = e.clipboardData || window.clipboardData;
	      clipboard.setData('text', this.quill.getText(range));
	      if (e.clipboardData) {
	        // IE11 does not let us set non-text data
	        clipboard.setData('application/json', JSON.stringify(this.quill.getContents(range)));
	      }
	      e.preventDefault();
	    }
	  }, {
	    key: 'onCut',
	    value: function onCut(e) {
	      if (e.defaultPrevented) return;
	      this.onCopy(e);
	      var range = this.quill.getSelection();
	      this.quill.deleteText(range, _emitter2.default.sources.USER);
	      this.quill.setSelection(range.index, _emitter2.default.sources.SILENT);
	    }
	  }, {
	    key: 'onPaste',
	    value: function onPaste(e) {
	      var _this3 = this;

	      if (e.defaultPrevented) return;
	      var range = this.quill.getSelection();
	      var clipboard = e.clipboardData || window.clipboardData;
	      var delta = new _delta2.default().retain(range.index).delete(range.length);
	      var callback = function callback(delta) {
	        _this3.quill.updateContents(delta, _emitter2.default.sources.USER);
	        // range.length contributes to delta.length()
	        _this3.quill.setSelection(delta.length() - range.length * 2, _emitter2.default.sources.SILENT);
	        _this3.quill.selection.scrollIntoView();
	      };
	      var intercept = function intercept(delta) {
	        _this3.container.focus();
	        setTimeout(function () {
	          delta = delta.concat(_this3.convert(_this3.container));
	          debug.info('paste', _this3.container.innerHTML, delta);
	          _this3.container.innerHTML = '';
	          callback(delta);
	        }, 1);
	      };
	      // Firefox types is an iterable, not array
	      // IE11 types can be null
	      if ([].indexOf.call(clipboard.types || [], 'application/json') > -1) {
	        try {
	          var pasteJSON = JSON.parse(clipboard.getData('application/json'));
	          callback(delta.concat(pasteJSON));
	        } catch (err) {
	          intercept(delta);
	        }
	        e.preventDefault();
	        return;
	      }
	      intercept(delta);
	    }
	  }]);

	  return Clipboard;
	}(_module2.default);

	function deltaEndsWith(delta, text) {
	  var lastOp = delta.ops[delta.ops.length - 1];
	  // TODO fix case where delta lastOp length < text.length
	  var endText = lastOp == null || typeof lastOp.insert !== 'string' ? '' : lastOp.insert;
	  return endText.slice(-1 * text.length) === text;
	}

	function matchAliases(node, delta) {
	  var formats = {};
	  switch (node.tagName) {
	    case 'B':
	      formats = { bold: true };
	      break;
	    case 'I':
	      formats = { italic: true };
	      break;
	    default:
	      return delta;
	  }
	  return delta.compose(new _delta2.default().retain(delta.length(), formats));
	}

	function matchBlot(node, delta) {
	  var match = _parchment2.default.query(node);
	  if (match == null) return delta;
	  if (match.prototype instanceof _parchment2.default.Embed) {
	    var embed = {};
	    embed[match.blotName] = match.value(node);
	    delta.insert(embed, match.formats(node));
	  } else if (typeof match.formats === 'function') {
	    delta = delta.compose(new _delta2.default().retain(delta.length(), match.formats(node)));
	  }
	  return delta;
	}

	function matchNewline(node, delta) {
	  if (BLOCK_ELEMENTS[node.tagName] || node.style.display === 'block') {
	    if (!deltaEndsWith(delta, '\n')) {
	      delta.insert('\n');
	    }
	  }
	  return delta;
	}

	function matchSpacing(node, delta) {
	  if (node.style.paddingBottom || node.style.marginBottom && !deltaEndsWith(delta, '\n\n')) {
	    delta.insert('\n');
	  }
	  return delta;
	}

	function matchText(node, delta) {
	  var text = node.data.replace(/\s\s+/g, ' ');
	  return delta.insert(text);
	}

	exports.default = Clipboard;

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bindKeys = exports.default = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _clone = __webpack_require__(33);

	var _clone2 = _interopRequireDefault(_clone);

	var _deepEqual = __webpack_require__(6);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _delta = __webpack_require__(4);

	var _delta2 = _interopRequireDefault(_delta);

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _logger = __webpack_require__(13);

	var _logger2 = _interopRequireDefault(_logger);

	var _module = __webpack_require__(34);

	var _module2 = _interopRequireDefault(_module);

	var _selection = __webpack_require__(35);

	var _block = __webpack_require__(30);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = (0, _logger2.default)('quill:keyboard');

	var Keyboard = function (_Module) {
	  _inherits(Keyboard, _Module);

	  function Keyboard(quill, options) {
	    _classCallCheck(this, Keyboard);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Keyboard).call(this, quill, options));

	    _this.bindings = {};
	    _this.addBinding({ key: 'B', metaKey: true }, _this.onFormat.bind(_this, 'bold'));
	    _this.addBinding({ key: 'I', metaKey: true }, _this.onFormat.bind(_this, 'italic'));
	    _this.addBinding({ key: 'U', metaKey: true }, _this.onFormat.bind(_this, 'underline'));
	    _this.addBinding({ key: Keyboard.keys.ENTER, shiftKey: null }, _this.onEnter.bind(_this));
	    _this.addBinding({ key: Keyboard.keys.BACKSPACE }, _this.onDelete.bind(_this, true));
	    _this.addBinding({ key: Keyboard.keys.DELETE }, _this.onDelete.bind(_this, false));
	    // TODO implement
	    // this.addBinding({ key: Keyboard.keys.BACKSPACE }, this.onDeleteWord.bind(this, true));
	    // this.addBinding({ key: Keyboard.keys.DELETE }, this.onDeleteWord.bind(this, false));
	    _this.addBinding({ key: Keyboard.keys.TAB, shiftKey: null }, _this.onTab.bind(_this));
	    _this.keydownHandler = _this.keydownHandler.bind(_this);
	    _this.bind();
	    return _this;
	  }

	  _createClass(Keyboard, [{
	    key: 'bind',
	    value: function bind() {
	      this.quill.root.addEventListener('keydown', this.keydownHandler);
	    }
	  }, {
	    key: 'unbind',
	    value: function unbind() {
	      this.quill.root.removeEventListener('keydown', this.keydownHandler);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.unbind();
	    }
	  }, {
	    key: 'keydownHandler',
	    value: function keydownHandler(evt) {
	      var _this2 = this;

	      var which = evt.which || evt.keyCode;
	      var handlers = (this.bindings[which] || []).reduce(function (handlers, binding) {
	        var _binding = _slicedToArray(binding, 2);

	        var key = _binding[0];
	        var handler = _binding[1];

	        if (match(evt, key)) handlers.push(handler);
	        return handlers;
	      }, []);
	      if (handlers.length > 0) {
	        (function () {
	          var range = _this2.quill.getSelection();
	          handlers.forEach(function (handler) {
	            handler(range, evt);
	          });
	          evt.preventDefault();
	        })();
	      }
	    }
	  }, {
	    key: 'addBinding',
	    value: function addBinding(binding, handler) {
	      binding = normalize(binding);
	      if (binding == null) {
	        return debug.warn('Attempted to add invalid keyboard binding', binding);
	      }
	      this.bindings[binding.key] = this.bindings[binding.key] || [];
	      this.bindings[binding.key].push([binding, handler]);
	    }
	  }, {
	    key: 'onDelete',
	    value: function onDelete(backspace, range) {
	      if (range.length > 0) {
	        this.quill.deleteText(range, _emitter2.default.sources.USER);
	      } else if (!backspace) {
	        this.quill.deleteText(range.index, 1, _emitter2.default.sources.USER);
	      } else {
	        var _quill$scroll$descend = this.quill.scroll.descendant(_block2.default, range.index);

	        var _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend, 2);

	        var line = _quill$scroll$descend2[0];
	        var offset = _quill$scroll$descend2[1];

	        var formats = this.quill.getFormat(range);
	        if (line != null && offset === 0 && (formats['indent'] || formats['list'])) {
	          if (formats['indent'] != null) {
	            line.format('indent', parseInt(formats['indent']) - 1, _emitter2.default.sources.USER);
	          } else {
	            line.format('list', false);
	          }
	        } else {
	          this.quill.deleteText(range.index - 1, 1, _emitter2.default.sources.USER);
	          range = new _selection.Range(Math.max(0, range.index - 1));
	        }
	      }
	      this.quill.setSelection(range.index, _emitter2.default.sources.SILENT);
	    }
	  }, {
	    key: 'onEnter',
	    value: function onEnter(range) {
	      var _this3 = this;

	      var formats = this.quill.getFormat(range);
	      var lineFormats = Object.keys(formats).reduce(function (lineFormats, format) {
	        if (_parchment2.default.query(format, _parchment2.default.Scope.BLOCK)) {
	          lineFormats[format] = formats[format];
	        }
	        return lineFormats;
	      }, {});
	      var added = 1;
	      var delta = new _delta2.default().retain(range.index).insert('\n', lineFormats);
	      if (range.length === 0) {
	        var _quill$scroll$line = this.quill.scroll.line(range.index);

	        var _quill$scroll$line2 = _slicedToArray(_quill$scroll$line, 2);

	        var line = _quill$scroll$line2[0];
	        var offset = _quill$scroll$line2[1];
	        // Browsers do not display a newline with just <pre>\n</pre>

	        if (line.statics.blotName === 'code-block' && offset >= line.length() - 1 && this.quill.getText(range.index - 1, 1) !== '\n') {
	          delta.insert('\n', lineFormats);
	          added += 1;
	        }
	      } else {
	        delta.delete(range.length);
	      }
	      this.quill.updateContents(delta, _emitter2.default.sources.USER);
	      this.quill.setSelection(range.index + added, _emitter2.default.sources.SILENT);
	      Object.keys(formats).forEach(function (name) {
	        if (lineFormats[name] == null) {
	          _this3.quill.format(name, formats[name]);
	        }
	      });
	    }
	  }, {
	    key: 'onFormat',
	    value: function onFormat(format, range) {
	      var formats = this.quill.getFormat(range);
	      this.quill.format(format, !formats[format], _emitter2.default.sources.USER);
	    }
	  }, {
	    key: 'onTab',
	    value: function onTab(range, evt) {
	      var _this4 = this;

	      if (range.length === 0) {
	        var delta = new _delta2.default().retain(range.index).insert('\t').delete(range.length);
	        this.quill.updateContents(delta, _emitter2.default.sources.USER);
	        this.quill.setSelection(range.index + 1, _emitter2.default.sources.SILENT);
	      } else {
	        (function () {
	          var modifier = evt.shiftKey ? -1 : 1;
	          _this4.quill.scroll.descendants(_block2.default, range.index, range.length).forEach(function (line) {
	            var format = line.formats();
	            var indent = parseInt(format['indent'] || 0);
	            line.format('indent', Math.max(0, indent + modifier));
	          });
	          _this4.quill.update(_emitter2.default.sources.USER);
	          _this4.quill.setSelection(range, _emitter2.default.sources.SILENT);
	        })();
	      }
	    }
	  }, {
	    key: 'removeAllBindings',
	    value: function removeAllBindings(binding) {
	      var handler = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	      binding = normalize(binding);
	      if (binding == null || this.bindings[binding.key] == null) return [];
	      var removed = [];
	      this.bindings[binding.key] = this.bindings[binding.key].filter(function (target) {
	        var _target = _slicedToArray(target, 2);

	        var key = _target[0];
	        var callback = _target[1];

	        if ((0, _deepEqual2.default)(key, binding) && (handler == null || callback === handler)) {
	          removed.push(handler);
	          return false;
	        }
	        return true;
	      });
	      return removed;
	    }
	  }, {
	    key: 'removeBinding',
	    value: function removeBinding(binding, handler) {
	      this.removeAllBindings(binding, handler);
	    }
	  }]);

	  return Keyboard;
	}(_module2.default);

	Keyboard.keys = {
	  BACKSPACE: 8,
	  TAB: 9,
	  ENTER: 13,
	  ESCAPE: 27,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,
	  DELETE: 46
	};

	function bindKeys(target, keys) {
	  target.addEventListener('keydown', function (evt) {
	    if (Object.keys(keys).some(function (key) {
	      var which = evt.which || evt.keyCode;
	      if (which === key || which === Keyboard.keys[key.toUpperCase()]) {
	        keys[key]();
	        return true;
	      }
	      return false;
	    })) {
	      event.preventDefault();
	    }
	  });
	}

	function match(evt, binding) {
	  var metaKey = /Mac/i.test(navigator.platform) ? evt.metaKey : evt.metaKey || evt.ctrlKey;
	  if (!!binding.metaKey !== metaKey && binding.metaKey !== null) return false;
	  if (!!binding.shiftKey !== evt.shiftKey && binding.shiftKey !== null) return false;
	  if (!!binding.altKey !== evt.altKey && binding.altKey !== null) return false;
	  return true;
	}

	function normalize(binding) {
	  switch (typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) {
	    case 'string':
	      if (Keyboard.keys[binding.toUpperCase()] != null) {
	        binding = (0, _clone2.default)(Keyboard.keys[binding.toUpperCase()], false);
	      } else if (binding.length === 1) {
	        binding = { key: binding };
	      } else {
	        return null;
	      }
	      break;
	    case 'number':
	      binding = { key: binding };
	      break;
	    case 'object':
	      binding = (0, _clone2.default)(binding, false);
	      break;
	    default:
	      return null;
	  }
	  if (typeof binding.key === 'string') {
	    binding.key = binding.key.toUpperCase().charCodeAt(0);
	  }
	  return binding;
	}

	exports.default = Keyboard;
	exports.bindKeys = bindKeys;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _module = __webpack_require__(34);

	var _module2 = _interopRequireDefault(_module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UndoManager = function (_Module) {
	  _inherits(UndoManager, _Module);

	  function UndoManager(quill, options) {
	    _classCallCheck(this, UndoManager);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UndoManager).call(this, quill, options));

	    _this.lastRecorded = 0;
	    _this.ignoreChange = false;
	    _this.clear();
	    _this.quill.on(_emitter2.default.events.TEXT_CHANGE, function (delta, oldDelta, source) {
	      if (_this.ignoreChange) return;
	      if (!_this.options.userOnly || source === _emitter2.default.sources.USER) {
	        _this.record(delta, oldDelta);
	      } else {
	        _this.transform(delta);
	      }
	    });
	    _this.quill.keyboard.addBinding({ key: 'Z', metaKey: true }, _this.undo.bind(_this));
	    _this.quill.keyboard.addBinding({ key: 'Z', metaKey: true, shiftKey: true }, _this.redo.bind(_this));
	    return _this;
	  }

	  _createClass(UndoManager, [{
	    key: 'change',
	    value: function change(source, dest) {
	      if (this.stack[source].length === 0) return;
	      var delta = this.stack[source].pop();
	      this.lastRecorded = 0;
	      this.ignoreChange = true;
	      this.quill.updateContents(delta[source], _emitter2.default.sources.USER);
	      this.ignoreChange = false;
	      var index = getLastChangeIndex(delta[source]);
	      this.quill.setSelection(index);
	      this.stack[dest].push(delta);
	    }
	  }, {
	    key: 'clear',
	    value: function clear() {
	      this.stack = { undo: [], redo: [] };
	    }
	  }, {
	    key: 'record',
	    value: function record(changeDelta, oldDelta) {
	      if (changeDelta.ops.length === 0) return;
	      this.stack.redo = [];
	      var undoDelta = this.quill.getContents().diff(oldDelta);
	      var timestamp = Date.now();
	      if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
	        var delta = this.stack.undo.pop();
	        undoDelta = undoDelta.compose(delta.undo);
	        changeDelta = delta.redo.compose(changeDelta);
	      } else {
	        this.lastRecorded = timestamp;
	      }
	      this.stack.undo.push({
	        redo: changeDelta,
	        undo: undoDelta
	      });
	      if (this.stack.undo.length > this.options.maxStack) {
	        this.stack.undo.unshift();
	      }
	    }
	  }, {
	    key: 'redo',
	    value: function redo() {
	      this.change('redo', 'undo');
	    }
	  }, {
	    key: 'transform',
	    value: function transform(delta) {
	      this.stack.undo.forEach(function (change) {
	        change.undo = delta.transform(change.undo, true);
	        change.redo = delta.transform(change.redo, true);
	      });
	      this.stack.redo.forEach(function (change) {
	        change.undo = delta.transform(change.undo, true);
	        change.redo = delta.transform(change.redo, true);
	      });
	    }
	  }, {
	    key: 'undo',
	    value: function undo() {
	      this.change('undo', 'redo');
	    }
	  }]);

	  return UndoManager;
	}(_module2.default);

	UndoManager.DEFAULTS = {
	  delay: 1000,
	  maxStack: 100,
	  userOnly: false
	};

	function getLastChangeIndex(delta) {
	  var index = 0,
	      lastIndex = 0;
	  delta.ops.forEach(function (op) {
	    if (op.insert != null) {
	      lastIndex = Math.max(index + (op.insert.length || 1), lastIndex);
	    } else if (op["delete"] != null) {
	      lastIndex = Math.max(index, lastIndex);
	    } else if (op.retain != null) {
	      if (op.attributes != null) {
	        lastIndex = Math.max(index + op.retain, lastIndex);
	      }
	      index += op.retain;
	    }
	  });
	  return lastIndex;
	}

	exports.default = UndoManager;

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.AlignStyle = exports.AlignClass = undefined;

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var config = {
	  scope: _parchment2.default.Scope.BLOCK,
	  whitelist: ['right', 'center', 'justify']
	};

	var AlignClass = new _parchment2.default.Attributor.Class('align', 'ql-align', config);
	var AlignStyle = new _parchment2.default.Attributor.Style('align', 'text-align', config);

	exports.AlignClass = AlignClass;
	exports.AlignStyle = AlignStyle;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.DirectionStyle = exports.DirectionClass = undefined;

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var config = {
	  scope: _parchment2.default.Scope.BLOCK,
	  whitelist: ['rtl']
	};

	var DirectionClass = new _parchment2.default.Attributor.Class('direction', 'ql-direction', config);
	var DirectionStyle = new _parchment2.default.Attributor.Style('direction', 'direction', config);

	exports.DirectionClass = DirectionClass;
	exports.DirectionStyle = DirectionStyle;

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.IndentClass = undefined;

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var IndentClass = new _parchment2.default.Attributor.Class('indent', 'ql-indent', {
	  scope: _parchment2.default.Scope.BLOCK,
	  whitelist: [1, 2, 3, 4, 5, 6, 7, 8]
	});

	exports.IndentClass = IndentClass;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _block = __webpack_require__(30);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Blockquote = function (_Block) {
	  _inherits(Blockquote, _Block);

	  function Blockquote() {
	    _classCallCheck(this, Blockquote);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Blockquote).apply(this, arguments));
	  }

	  return Blockquote;
	}(_block2.default);

	Blockquote.blotName = 'blockquote';
	Blockquote.tagName = 'blockquote';

	exports.default = Blockquote;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _block = __webpack_require__(30);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Header = function (_Block) {
	  _inherits(Header, _Block);

	  function Header() {
	    _classCallCheck(this, Header);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
	  }

	  _createClass(Header, [{
	    key: 'formats',
	    value: function formats() {
	      var format = _get(Object.getPrototypeOf(Header.prototype), 'formats', this).call(this);
	      format.header = Header.tagName.indexOf(this.domNode.tagName) + 1;
	      return format;
	    }
	  }]);

	  return Header;
	}(_block2.default);

	Header.blotName = 'header';
	Header.tagName = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'];

	exports.default = Header;

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.ListItem = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _delta = __webpack_require__(4);

	var _delta2 = _interopRequireDefault(_delta);

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _block = __webpack_require__(30);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var List = function (_Parchment$Container) {
	  _inherits(List, _Parchment$Container);

	  function List() {
	    _classCallCheck(this, List);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(List).apply(this, arguments));
	  }

	  _createClass(List, [{
	    key: 'optimize',
	    value: function optimize(mutations) {
	      _get(Object.getPrototypeOf(List.prototype), 'optimize', this).call(this);
	      var next = this.next;
	      if (next instanceof List && next.prev === this && next.domNode.tagName === this.domNode.tagName) {
	        next.moveChildren(this);
	        next.remove();
	      }
	    }
	  }, {
	    key: 'replace',
	    value: function replace(target) {
	      _get(Object.getPrototypeOf(List.prototype), 'replace', this).call(this, target);
	      var item = _parchment2.default.create('list-item');
	      this.moveChildren(item);
	      this.appendChild(item);
	    }
	  }], [{
	    key: 'create',
	    value: function create(value) {
	      if (value === 'ordered') {
	        value = 'OL';
	      } else if (value === 'bullet') {
	        value = 'UL';
	      }
	      return _get(Object.getPrototypeOf(List), 'create', this).call(this, value);
	    }
	  }]);

	  return List;
	}(_parchment2.default.Container);

	List.blotName = 'list';
	List.scope = _parchment2.default.Scope.BLOCK_BLOT;
	List.tagName = ['OL', 'UL'];

	var ListItem = function (_Block) {
	  _inherits(ListItem, _Block);

	  function ListItem() {
	    _classCallCheck(this, ListItem);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ListItem).apply(this, arguments));
	  }

	  _createClass(ListItem, [{
	    key: 'format',
	    value: function format(name, value) {
	      if (name === 'list' && !value) {
	        this.replaceWith(_parchment2.default.create(this.statics.scope));
	      } else {
	        _get(Object.getPrototypeOf(ListItem.prototype), 'format', this).call(this, name, value);
	      }
	    }
	  }, {
	    key: 'formats',
	    value: function formats() {
	      var format = _get(Object.getPrototypeOf(ListItem.prototype), 'formats', this).call(this);
	      format['list'] = this.parent.domNode.tagName === 'OL' ? 'ordered' : 'bullet';
	      delete format[this.statics.blotName];
	      return format;
	    }
	  }, {
	    key: 'replaceWith',
	    value: function replaceWith(name, value) {
	      this.parent.isolate(this.offset(this.parent), this.length());
	      var replacement = _get(Object.getPrototypeOf(ListItem.prototype), 'replaceWith', this).call(this, name, value);
	      replacement.parent.unwrap();
	      return replacement;
	    }
	  }]);

	  return ListItem;
	}(_block2.default);

	ListItem.blotName = 'list-item';
	ListItem.tagName = 'LI';

	exports.ListItem = ListItem;
	exports.default = List;

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.BackgroundStyle = exports.BackgroundClass = undefined;

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BackgroundClass = new _parchment2.default.Attributor.Class('background', 'ql-bg', {
	  scope: _parchment2.default.Scope.INLINE
	});
	var BackgroundStyle = new _parchment2.default.Attributor.Style('background', 'background-color', {
	  scope: _parchment2.default.Scope.INLINE
	});

	exports.BackgroundClass = BackgroundClass;
	exports.BackgroundStyle = BackgroundStyle;

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ColorStyle = exports.ColorClass = undefined;

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var ColorClass = new _parchment2.default.Attributor.Class('color', 'ql-color', {
	  scope: _parchment2.default.Scope.INLINE
	});
	var ColorStyle = new _parchment2.default.Attributor.Style('color', 'color', {
	  scope: _parchment2.default.Scope.INLINE
	});

	exports.ColorClass = ColorClass;
	exports.ColorStyle = ColorStyle;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.FontClass = exports.FontStyle = undefined;

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var config = {
	  scope: _parchment2.default.Scope.INLINE,
	  whitelist: ['serif', 'monospace']
	};

	var FontClass = new _parchment2.default.Attributor.Class('font', 'ql-font', config);
	var FontStyle = new _parchment2.default.Attributor.Style('font', 'font-family', config);

	exports.FontStyle = FontStyle;
	exports.FontClass = FontClass;

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SizeStyle = exports.SizeClass = undefined;

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SizeClass = new _parchment2.default.Attributor.Class('size', 'ql-size', {
	  scope: _parchment2.default.Scope.INLINE,
	  whitelist: ['small', 'large', 'huge']
	});
	var SizeStyle = new _parchment2.default.Attributor.Style('size', 'font-size', {
	  scope: _parchment2.default.Scope.INLINE,
	  whitelist: ['10px', '18px', '32px']
	});

	exports.SizeClass = SizeClass;
	exports.SizeStyle = SizeStyle;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inline = __webpack_require__(38);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Bold = function (_Inline) {
	  _inherits(Bold, _Inline);

	  function Bold() {
	    _classCallCheck(this, Bold);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bold).apply(this, arguments));
	  }

	  return Bold;
	}(_inline2.default);

	Bold.blotName = 'bold';
	Bold.tagName = 'STRONG';

	exports.default = Bold;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inline = __webpack_require__(38);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Italic = function (_Inline) {
	  _inherits(Italic, _Inline);

	  function Italic() {
	    _classCallCheck(this, Italic);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Italic).apply(this, arguments));
	  }

	  return Italic;
	}(_inline2.default);

	Italic.blotName = 'italic';
	Italic.tagName = 'EM';

	exports.default = Italic;

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inline = __webpack_require__(38);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Link = function (_Inline) {
	  _inherits(Link, _Inline);

	  function Link() {
	    _classCallCheck(this, Link);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Link).apply(this, arguments));
	  }

	  _createClass(Link, [{
	    key: 'format',
	    value: function format(name, value) {
	      if (name !== this.statics.blotName || !value) return _get(Object.getPrototypeOf(Link.prototype), 'format', this).call(this, name, value);
	      value = this.constructor.sanitize(value);
	      this.domNode.setAttribute('href', value);
	      this.domNode.setAttribute('title', value);
	    }
	  }], [{
	    key: 'create',
	    value: function create(value) {
	      var node = _get(Object.getPrototypeOf(Link), 'create', this).call(this, value);
	      if (typeof value === 'string') {
	        value = this.sanitize(value);
	        node.setAttribute('href', value);
	        node.setAttribute('title', value);
	      }
	      return node;
	    }
	  }, {
	    key: 'formats',
	    value: function formats(domNode) {
	      var formats = {};
	      if (domNode.hasAttribute('href')) {
	        formats[this.blotName] = domNode.getAttribute('href');
	      }
	      return formats;
	    }
	  }, {
	    key: 'sanitize',
	    value: function sanitize(url) {
	      return url.replace(/[^-A-Za-z0-9+&@#/%?=~_|!:,.;\(\)]/g, '');
	    }
	  }]);

	  return Link;
	}(_inline2.default);

	Link.blotName = 'link';
	Link.tagName = 'A';

	exports.default = Link;

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inline = __webpack_require__(38);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Script = function (_Inline) {
	  _inherits(Script, _Inline);

	  function Script() {
	    _classCallCheck(this, Script);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Script).apply(this, arguments));
	  }

	  _createClass(Script, [{
	    key: 'formats',
	    value: function formats() {
	      var format = _get(Object.getPrototypeOf(Script.prototype), 'formats', this).call(this);
	      format.script = this.domNode.tagName === 'SUP' ? 'super' : 'sub';
	      return format;
	    }
	  }], [{
	    key: 'create',
	    value: function create(value) {
	      if (value === 'super') {
	        return document.createElement('sup');
	      } else if (value === 'sub') {
	        return document.createElement('sub');
	      } else {
	        return _get(Object.getPrototypeOf(Script), 'create', this).call(this, value);
	      }
	    }
	  }]);

	  return Script;
	}(_inline2.default);

	Script.blotName = 'script';
	Script.tagName = ['SUB', 'SUP'];

	exports.default = Script;

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inline = __webpack_require__(38);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Strike = function (_Inline) {
	  _inherits(Strike, _Inline);

	  function Strike() {
	    _classCallCheck(this, Strike);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Strike).apply(this, arguments));
	  }

	  return Strike;
	}(_inline2.default);

	Strike.blotName = 'strike';
	Strike.tagName = 'S';

	exports.default = Strike;

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _inline = __webpack_require__(38);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Underline = function (_Inline) {
	  _inherits(Underline, _Inline);

	  function Underline() {
	    _classCallCheck(this, Underline);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Underline).apply(this, arguments));
	  }

	  return Underline;
	}(_inline2.default);

	Underline.blotName = 'underline';
	Underline.tagName = 'U';

	exports.default = Underline;

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Formula = function (_Parchment$Embed) {
	  _inherits(Formula, _Parchment$Embed);

	  function Formula() {
	    _classCallCheck(this, Formula);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Formula).apply(this, arguments));
	  }

	  _createClass(Formula, null, [{
	    key: 'create',
	    value: function create(value) {
	      var node = _get(Object.getPrototypeOf(Formula), 'create', this).call(this, value);
	      if (typeof value === 'string') {
	        katex.render(value, node);
	        node.setAttribute('data-value', value);
	      }
	      node.setAttribute('contenteditable', false);
	      return node;
	    }
	  }, {
	    key: 'value',
	    value: function value(domNode) {
	      return domNode.getAttribute('data-value');
	    }
	  }]);

	  return Formula;
	}(_parchment2.default.Embed);

	Formula.blotName = 'formula';
	Formula.className = 'ql-formula';
	Formula.tagName = 'SPAN';

	exports.default = Formula;

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _link = __webpack_require__(55);

	var _link2 = _interopRequireDefault(_link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Image = function (_Parchment$Embed) {
	  _inherits(Image, _Parchment$Embed);

	  function Image() {
	    _classCallCheck(this, Image);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));
	  }

	  _createClass(Image, null, [{
	    key: 'create',
	    value: function create(value) {
	      var node = _get(Object.getPrototypeOf(Image), 'create', this).call(this, value);
	      if (typeof value === 'string') {
	        node.setAttribute('src', this.sanitize(value));
	      }
	      return node;
	    }
	  }, {
	    key: 'match',
	    value: function match(url) {
	      return (/^https?:\/\/.+\.(jpe?g|gif|png)$/.test(url)
	      );
	    }
	  }, {
	    key: 'sanitize',
	    value: function sanitize(url) {
	      return _link2.default.sanitize(url);
	    }
	  }, {
	    key: 'value',
	    value: function value(domNode) {
	      return domNode.getAttribute('src');
	    }
	  }]);

	  return Image;
	}(_parchment2.default.Embed);

	Image.blotName = 'image';
	Image.tagName = 'IMG';

	exports.default = Image;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _block = __webpack_require__(30);

	var _link = __webpack_require__(55);

	var _link2 = _interopRequireDefault(_link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Video = function (_EmbedBlock) {
	  _inherits(Video, _EmbedBlock);

	  _createClass(Video, null, [{
	    key: 'create',
	    value: function create(value) {
	      var node = _get(Object.getPrototypeOf(Video), 'create', this).call(this, value);
	      node.setAttribute('src', this.sanitize(value));
	      node.setAttribute('controls', true);
	      node.setAttribute('contenteditable', false);
	      return node;
	    }
	  }, {
	    key: 'formats',
	    value: function formats(domNode) {
	      var formats = _get(Object.getPrototypeOf(Video), 'formats', this).call(this);
	      if (domNode.hasAttribute('height')) formats['height'] = domNode.getAttribute('height');
	      if (domNode.hasAttribute('width')) formats['width'] = domNode.getAttribute('width');
	      return formats;
	    }
	  }, {
	    key: 'sanitize',
	    value: function sanitize(url) {
	      return _link2.default.sanitize(url);
	    }
	  }, {
	    key: 'value',
	    value: function value(domNode) {
	      return domNode.getAttribute('src');
	    }
	  }]);

	  function Video(domNode) {
	    _classCallCheck(this, Video);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Video).call(this, domNode));

	    _this.domNode.addEventListener('mouseenter', function () {
	      _this.domNode.setAttribute('controls', true);
	    });
	    _this.domNode.addEventListener('mouseleave', function () {
	      _this.domNode.removeAttribute('controls');
	    });
	    return _this;
	  }

	  _createClass(Video, [{
	    key: 'format',
	    value: function format(name, value) {
	      if (name === 'height' || name === 'width') {
	        if (value) {
	          this.domNode.setAttribute(name, value);
	        } else {
	          this.domNode.removeAttribute(name);
	        }
	      } else {
	        _get(Object.getPrototypeOf(Video.prototype), 'format', this).call(this, name, value);
	      }
	    }
	  }]);

	  return Video;
	}(_block.EmbedBlock);

	Video.blotName = 'video';
	Video.tagName = 'VIDEO';

	exports.default = Video;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = exports.Code = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _delta = __webpack_require__(4);

	var _delta2 = _interopRequireDefault(_delta);

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _block = __webpack_require__(30);

	var _block2 = _interopRequireDefault(_block);

	var _inline = __webpack_require__(38);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Code = function (_Inline) {
	  _inherits(Code, _Inline);

	  function Code() {
	    _classCallCheck(this, Code);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Code).apply(this, arguments));
	  }

	  return Code;
	}(_inline2.default);

	Code.blotName = 'code';
	Code.tagName = 'CODE';

	var CodeBlock = function (_Block) {
	  _inherits(CodeBlock, _Block);

	  function CodeBlock() {
	    _classCallCheck(this, CodeBlock);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(CodeBlock).apply(this, arguments));
	  }

	  _createClass(CodeBlock, [{
	    key: 'delta',
	    value: function delta() {
	      var _this3 = this;

	      return this.domNode.innerText.split('\n').reduce(function (delta, text) {
	        return delta.insert(text).insert('\n', _this3.formats());
	      }, new _delta2.default());
	    }
	  }, {
	    key: 'format',
	    value: function format(name, value) {
	      if (name !== this.statics.blotName) return;
	      _get(Object.getPrototypeOf(CodeBlock.prototype), 'formatAt', this).call(this, name, value);
	    }
	  }, {
	    key: 'formatAt',
	    value: function formatAt(index, length, name, value) {
	      if (name !== this.statics.blotName) return;
	      _get(Object.getPrototypeOf(CodeBlock.prototype), 'formatAt', this).call(this, index, length, name, value);
	    }
	  }, {
	    key: 'insertAt',
	    value: function insertAt(index, value, def) {
	      if (def != null) return; // Cannot insert embeds into code
	      if (index < this.length() - 1) {
	        var _children$find = this.children.find(index);

	        var _children$find2 = _slicedToArray(_children$find, 2);

	        var child = _children$find2[0];
	        var offset = _children$find2[1];

	        child.insertAt(offset, value);
	      } else {
	        this.children.tail.insertAt(this.children.tail.length(), value);
	      }
	    }
	  }, {
	    key: 'optimize',
	    value: function optimize(mutations) {
	      _get(Object.getPrototypeOf(CodeBlock.prototype), 'optimize', this).call(this, mutations);
	      var next = this.next;
	      if (next instanceof CodeBlock && next.prev === this) {
	        next.moveChildren(this);
	        next.remove();
	      }
	    }
	  }]);

	  return CodeBlock;
	}(_block2.default);

	CodeBlock.blotName = 'code-block';
	CodeBlock.tagName = 'PRE';

	exports.Code = Code;
	exports.default = CodeBlock;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _image = __webpack_require__(60);

	var _image2 = _interopRequireDefault(_image);

	var _keyboard = __webpack_require__(41);

	var _module = __webpack_require__(34);

	var _module2 = _interopRequireDefault(_module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ImageTooltip = function (_Module) {
	  _inherits(ImageTooltip, _Module);

	  function ImageTooltip(quill, options) {
	    _classCallCheck(this, ImageTooltip);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ImageTooltip).call(this, quill, options));

	    _this.container = _this.quill.addContainer('ql-image-tooltip');
	    _this.container.classList.add('ql-hidden');
	    _this.container.classList.add('ql-tooltip');
	    _this.container.innerHTML = options.template;
	    _this.preview = _this.container.querySelector('.ql-preview');
	    _this.textbox = _this.container.querySelector('input[type=text]');
	    _this.save = _this.save.bind(_this);
	    _this.hide = _this.hide.bind(_this);
	    _this.update = _this.update.bind(_this);
	    (0, _keyboard.bindKeys)(_this.textbox, {
	      'enter': _this.save,
	      'escape': _this.hide
	    });
	    _this.bind();
	    return _this;
	  }

	  _createClass(ImageTooltip, [{
	    key: 'bind',
	    value: function bind() {
	      this.container.querySelector('a.ql-action').addEventListener('click', this.save);
	      this.container.querySelector('a.ql-cancel').addEventListener('click', this.hide);
	      this.textbox.addEventListener('input', this.update);
	    }
	  }, {
	    key: 'unbind',
	    value: function unbind() {
	      this.container.querySelector('a.ql-action').removeEventListener('click', this.save);
	      this.container.querySelector('a.ql-cancel').removeEventListener('click', this.hide);
	      this.textbox.removeEventListener('input', this.update);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.unbind();
	    }
	  }, {
	    key: 'center',
	    value: function center() {
	      this.container.style.left = this.quill.container.offsetWidth / 2 - this.container.offsetWidth / 2 + 'px';
	      this.container.style.top = this.quill.container.offsetHeight / 2 - this.container.offsetHeight / 2 + 'px';
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.container.classList.add('ql-hidden');
	      if (this.preview.firstChild != null) {
	        this.preview.removeChild(this.preview.firstChild);
	        this.preview.classList.add('ql-empty');
	      }
	      this.quill.focus();
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var range = this.quill.getSelection(true);
	      var index = range.index + range.length;
	      this.quill.insertEmbed(index, _image2.default.blotName, this.textbox.value, _emitter2.default.sources.USER);
	      this.quill.setSelection(index + 1, _emitter2.default.sources.SILENT);
	      this.hide();
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.container.classList.remove('ql-hidden');
	      this.textbox.focus();
	      this.center();
	      return true;
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      if (!_image2.default.match(this.textbox.value)) return;
	      var url = _image2.default.sanitize(this.textbox.value);
	      if (this.preview.firstChild != null) {
	        this.preview.firstChild.setAttribute('src', url);
	      } else {
	        var img = document.createElement('img');
	        img.setAttribute('src', url);
	        this.preview.appendChild(img);
	        this.preview.classList.remove('ql-empty');
	      }
	    }
	  }]);

	  return ImageTooltip;
	}(_module2.default);

	ImageTooltip.DEFAULTS = {
	  template: ['<input class="input" type="text">', '<div class="ql-empty ql-preview"></div>', '<a class="ql-cancel"></a>', '<a class="ql-action"></a>'].join('')
	};

	exports.default = ImageTooltip;

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _keyboard = __webpack_require__(41);

	var _link = __webpack_require__(55);

	var _link2 = _interopRequireDefault(_link);

	var _module = __webpack_require__(34);

	var _module2 = _interopRequireDefault(_module);

	var _selection = __webpack_require__(35);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LinkTooltip = function (_Module) {
	  _inherits(LinkTooltip, _Module);

	  function LinkTooltip(quill) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    _classCallCheck(this, LinkTooltip);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LinkTooltip).call(this, quill, options));

	    _this.container = _this.quill.addContainer('ql-link-tooltip');
	    _this.container.classList.add('ql-tooltip');
	    _this.hide();
	    _this.container.innerHTML = _this.options.template;
	    _this.preview = _this.container.querySelector('a.ql-preview');
	    _this.textbox = _this.container.querySelector('input[type=text]');
	    (0, _keyboard.bindKeys)(_this.textbox, {
	      'enter': _this.save.bind(_this),
	      'escape': _this.hide.bind(_this)
	    });
	    _this.clickHandler = _this.clickHandler.bind(_this);
	    _this.remove = _this.remove.bind(_this);
	    _this.bind();
	    // quill.keyboard.addBinding({ key: 'K', metaKey: true }, this.show.bind(this));
	    quill.on(_emitter2.default.events.SELECTION_CHANGE, function (range) {
	      if (range != null && range.length === 0) {
	        var offset = undefined;

	        var _this$quill$scroll$de = _this.quill.scroll.descendant(_link2.default, range.index);

	        var _this$quill$scroll$de2 = _slicedToArray(_this$quill$scroll$de, 2);

	        _this.link = _this$quill$scroll$de2[0];
	        offset = _this$quill$scroll$de2[1];

	        if (_this.link != null) {
	          _this.range = new _selection.Range(range.index - offset, _this.link.length());
	          return _this.show();
	        }
	      }
	      _this.hide();
	    });
	    return _this;
	  }

	  _createClass(LinkTooltip, [{
	    key: 'bind',
	    value: function bind() {
	      this.container.querySelector('a.ql-action').addEventListener('click', this.clickHandler);
	      this.container.querySelector('a.ql-remove').addEventListener('click', this.remove);
	    }
	  }, {
	    key: 'unbind',
	    value: function unbind() {
	      this.container.querySelector('a.ql-action').removeEventListener('click', this.clickHandler);
	      this.container.querySelector('a.ql-remove').removeEventListener('click', this.remove);
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.unbind();
	    }
	  }, {
	    key: 'clickHandler',
	    value: function clickHandler() {
	      if (this.container.classList.contains('ql-editing')) {
	        this.save();
	      } else {
	        this.edit();
	      }
	    }
	  }, {
	    key: 'edit',
	    value: function edit() {
	      this.container.classList.add('ql-editing');
	      this.textbox.focus();
	      this.textbox.setSelectionRange(0, this.textbox.value.length);
	    }
	  }, {
	    key: 'open',
	    value: function open() {
	      this.range = new _selection.Range(this.quill.selection.savedRange.index, this.quill.selection.savedRange.length);
	      this.show();
	      this.edit();
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.range = this.link = null;
	      this.container.classList.add('ql-hidden');
	    }
	  }, {
	    key: 'position',
	    value: function position(bounds) {
	      this.container.style.left = bounds.left + bounds.width / 2 - this.container.offsetWidth / 2 + 'px';
	      this.container.style.top = bounds.bottom + this.options.offset + 'px';
	    }
	  }, {
	    key: 'remove',
	    value: function remove() {
	      this.quill.formatText(this.range, 'link', false, _emitter2.default.sources.USER);
	      this.quill.setSelection(this.range, _emitter2.default.sources.SILENT);
	      this.hide();
	    }
	  }, {
	    key: 'save',
	    value: function save() {
	      var url = this.textbox.value;
	      this.quill.formatText(this.range, 'link', url, _emitter2.default.sources.USER);
	      this.quill.setSelection(this.range, _emitter2.default.sources.SILENT);
	      this.hide();
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.container.classList.remove('ql-editing');
	      this.container.classList.remove('ql-hidden');
	      var preview = undefined,
	          bounds = undefined;
	      var range = this.quill.selection.savedRange;
	      if (this.link != null) {
	        preview = this.link.formats()['link'];
	      } else {
	        preview = this.quill.getText(range);
	      }
	      this.preview.textContent = this.textbox.value = preview;
	      this.preview.setAttribute('href', preview);
	      this.position(this.quill.getBounds(this.range));
	    }
	  }]);

	  return LinkTooltip;
	}(_module2.default);

	LinkTooltip.DEFAULTS = {
	  offset: 10,
	  template: ['<a class="ql-preview" target="_blank" href="about:blank"></a>', '<input type="text">', '<a class="ql-action"></a>', '<a class="ql-remove"></a>'].join('')
	};

	exports.default = LinkTooltip;

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.addControls = exports.default = undefined;

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extend = __webpack_require__(32);

	var _extend2 = _interopRequireDefault(_extend);

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _parchment = __webpack_require__(14);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _module = __webpack_require__(34);

	var _module2 = _interopRequireDefault(_module);

	var _logger = __webpack_require__(13);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var debug = (0, _logger2.default)('quill:toolbar');

	var Toolbar = function (_Module) {
	  _inherits(Toolbar, _Module);

	  function Toolbar(quill, options) {
	    _classCallCheck(this, Toolbar);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Toolbar).call(this, quill, options));

	    if (typeof _this.options.container === 'string') {
	      _this.options.container = document.querySelector(_this.options.container);
	    } else if (Array.isArray(_this.options.container)) {
	      var container = document.createElement('div');
	      addControls(container, options.container);
	      quill.container.parentNode.insertBefore(container, quill.container);
	      _this.options.container = container;
	    }
	    if (!(_this.options.container instanceof HTMLElement)) {
	      var _ret;

	      return _ret = debug.error('Container required for toolbar', _this.options), _possibleConstructorReturn(_this, _ret);
	    }
	    _this.container = _this.options.container;
	    _this.container.classList.add('ql-toolbar');
	    _this.container.classList.toggle('ios', /iPhone|iPad/i.test(navigator.userAgent));
	    _this.controls = [];
	    _this.handlers = {};
	    [].forEach.call(_this.container.querySelectorAll('a, button, input[type=button], select'), function (input) {
	      _this.attach(input);
	    });
	    _this.quill.on(_emitter2.default.events.SELECTION_CHANGE, _this.update, _this).on(_emitter2.default.events.SCROLL_OPTIMIZE, _this.update, _this);
	    return _this;
	  }

	  _createClass(Toolbar, [{
	    key: 'attach',
	    value: function attach(input) {
	      var _this2 = this;

	      var format = [].find.call(input.classList, function (className) {
	        return className.indexOf('ql-') === 0;
	      });
	      if (!format) return;
	      format = format.slice('ql-'.length);
	      // if (this.quill.options.formats.indexOf(format) < 0) return;  // TODO enable
	      var eventName = input.tagName === 'SELECT' ? 'change' : 'click';
	      input.addEventListener(eventName, function () {
	        _this2.quill.focus();
	        var value = undefined;
	        if (input.tagName === 'SELECT') {
	          value = input.options[input.selectedIndex].value || false;
	        } else {
	          value = input.classList.contains('ql-active') ? false : input.getAttribute('data-value') || true;
	        }
	        if (_this2.handlers[format]) {
	          if (_this2.handlers[format](value)) return;
	        }
	        _this2.quill.format(format, value, _emitter2.default.sources.USER);
	      });
	      // TODO use weakmap
	      this.controls.push([format, input]);
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var _quill$selection$getR = this.quill.selection.getRange();

	      var _quill$selection$getR2 = _slicedToArray(_quill$selection$getR, 1);

	      var range = _quill$selection$getR2[0]; // quill.getSelection triggers update

	      if (range == null) return;
	      var formats = this.quill.getFormat(range);
	      this.controls.forEach(function (pair) {
	        var _pair = _slicedToArray(pair, 2);

	        var format = _pair[0];
	        var input = _pair[1];

	        if (input.tagName === 'SELECT') {
	          if (formats[format] == null) {
	            input.querySelector('option[selected]').selected = true;
	          } else {
	            // TODO never reports array
	            input.value = Array.isArray(formats[format]) ? '' : formats[format];
	          }
	        }if (input.hasAttribute('data-value')) {
	          input.classList.toggle('ql-active', input.getAttribute('data-value') == formats[format]); // Intentional ==
	        } else {
	            input.classList.toggle('ql-active', formats[format] || false);
	          }
	      });
	    }
	  }]);

	  return Toolbar;
	}(_module2.default);

	Toolbar.DEFAULTS = {
	  container: null
	};

	function addButton(container, format, value) {
	  var input = document.createElement('button');
	  input.classList.add('ql-' + format);
	  if (value != null) {
	    input.setAttribute('data-value', value);
	  }
	  container.appendChild(input);
	}

	function addControls(container, groups) {
	  if (!Array.isArray(groups[0])) {
	    groups = [groups];
	  }
	  groups.forEach(function (controls) {
	    var group = document.createElement('span');
	    group.classList.add('ql-formats');
	    controls.forEach(function (control) {
	      if (typeof control === 'string') {
	        addButton(group, control);
	      } else {
	        var format = Object.keys(control)[0];
	        var value = control[format];
	        if (Array.isArray(value)) {
	          addSelect(group, format, value);
	        } else {
	          addButton(group, format, value);
	        }
	      }
	    });
	    container.appendChild(group);
	  });
	}

	function addSelect(container, format, values) {
	  var input = document.createElement('select');
	  input.classList.add('ql-' + format);
	  values.forEach(function (value) {
	    var option = document.createElement('option');
	    if (value !== false) {
	      option.setAttribute('value', value);
	    } else {
	      option.setAttribute('selected', 'selected');
	    }
	    input.appendChild(option);
	  });
	  container.appendChild(input);
	}

	exports.default = Toolbar;
	exports.addControls = addControls;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(67);

	var _base2 = _interopRequireDefault(_base);

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _icons = __webpack_require__(70);

	var _icons2 = _interopRequireDefault(_icons);

	var _keyboard = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BubbleTheme = function (_BaseTheme) {
	  _inherits(BubbleTheme, _BaseTheme);

	  function BubbleTheme(quill, options) {
	    _classCallCheck(this, BubbleTheme);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BubbleTheme).call(this, quill, options));

	    _this.quill.container.classList.add('ql-bubble');
	    return _this;
	  }

	  _createClass(BubbleTheme, [{
	    key: 'buildLinkEditor',
	    value: function buildLinkEditor(toolbar) {
	      var _this2 = this;

	      var container = document.createElement('div');
	      container.classList.add('ql-link-editor');
	      var input = document.createElement('input');
	      input.setAttribute('type', 'text');
	      var close = document.createElement('a');
	      container.appendChild(input);
	      container.appendChild(close);
	      this.tooltip.appendChild(container);
	      this.quill.on(_emitter2.default.events.SELECTION_CHANGE, function (range) {
	        if (range != null && range.length > 0) {
	          _this2.tooltip.classList.remove('ql-editing');
	          _this2.tooltip.classList.remove('ql-hidden');
	          _this2.position(_this2.quill.getBounds(range));
	        } else if (document.activeElement !== input) {
	          _this2.tooltip.classList.add('ql-hidden');
	        }
	      });
	      // TODO handle line height changing like with header formatting
	      toolbar.handlers['link'] = function (value) {
	        if (!value) return false;
	        _this2.tooltip.classList.add('ql-editing');
	        input.focus();
	      };
	      close.addEventListener('click', function () {
	        _this2.tooltip.classList.remove('ql-editing');
	      });
	      (0, _keyboard.bindKeys)(input, {
	        'enter': function enter() {
	          _this2.quill.focus();
	          _this2.quill.format('link', input.value);
	          _this2.tooltip.classList.add('ql-hidden');
	          input.value = '';
	        },
	        'escape': function escape() {
	          _this2.tooltip.classList.remove('ql-editing');
	        }
	      });
	    }
	  }, {
	    key: 'extendToolbar',
	    value: function extendToolbar(toolbar) {
	      this.tooltip = this.quill.addContainer('ql-tooltip', this.quill.root);
	      this.buildLinkEditor(toolbar);
	      this.tooltip.appendChild(toolbar.container);
	      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')));
	      this.tooltip.classList.add('ql-hidden');
	    }
	  }, {
	    key: 'position',
	    value: function position(bounds) {
	      this.tooltip.style.left = bounds.left + bounds.width / 2 - this.tooltip.offsetWidth / 2 + 'px';
	      this.tooltip.style.top = bounds.bottom + 10 + 'px';
	    }
	  }]);

	  return BubbleTheme;
	}(_base2.default);

	BubbleTheme.DEFAULTS = {
	  modules: {
	    toolbar: {
	      container: [['bold', 'italic', 'link'], [{ header: 1 }, { header: 2 }, 'blockquote']]
	    }
	  }
	};

	exports.default = BubbleTheme;

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _theme = __webpack_require__(36);

	var _theme2 = _interopRequireDefault(_theme);

	var _picker = __webpack_require__(68);

	var _picker2 = _interopRequireDefault(_picker);

	var _icons = __webpack_require__(70);

	var _icons2 = _interopRequireDefault(_icons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseTheme = function (_Theme) {
	  _inherits(BaseTheme, _Theme);

	  function BaseTheme() {
	    _classCallCheck(this, BaseTheme);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseTheme).apply(this, arguments));
	  }

	  _createClass(BaseTheme, [{
	    key: 'addModule',
	    value: function addModule(name) {
	      var module = _get(Object.getPrototypeOf(BaseTheme.prototype), 'addModule', this).call(this, name);
	      if (name === 'toolbar') {
	        this.extendToolbar(module);
	      }
	      return module;
	    }
	  }, {
	    key: 'buildButtons',
	    value: function buildButtons(buttons) {
	      buttons.forEach(function (button) {
	        var className = button.getAttribute('class') || '';
	        className.split(/\s+/).forEach(function (name) {
	          name = name.slice('ql-'.length);
	          if (_icons2.default[name] == null) return;
	          if (typeof _icons2.default[name] === 'string') {
	            button.innerHTML = _icons2.default[name];
	          } else {
	            var value = button.getAttribute('data-value') || '';
	            if (value != null && _icons2.default[name][value]) {
	              button.innerHTML = _icons2.default[name][value];
	            }
	          }
	        });
	      });
	    }
	  }]);

	  return BaseTheme;
	}(_theme2.default);

	BaseTheme.DEFAULTS = {};

	exports.default = BaseTheme;

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _dropdown = __webpack_require__(69);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Picker = function () {
	  function Picker(select) {
	    var _this = this;

	    _classCallCheck(this, Picker);

	    this.select = select;
	    this.container = document.createElement('span');
	    this.buildPicker();
	    this.select.style.display = 'none';
	    this.select.parentNode.insertBefore(this.container, this.select);
	    this.label.addEventListener('click', function () {
	      _this.container.classList.toggle('ql-expanded');
	    });
	    this.select.addEventListener('change', this.update.bind(this));
	  }

	  _createClass(Picker, [{
	    key: 'buildItem',
	    value: function buildItem(option) {
	      var item = document.createElement('span');
	      item.classList.add('ql-picker-item');
	      if (option.hasAttribute('value')) {
	        item.setAttribute('data-value', option.getAttribute('value'));
	      }
	      item.addEventListener('click', this.selectItem.bind(this, item, true));
	      return item;
	    }
	  }, {
	    key: 'buildLabel',
	    value: function buildLabel() {
	      var label = document.createElement('span');
	      label.classList.add('ql-picker-label');
	      label.innerHTML = _dropdown2.default;
	      this.container.appendChild(label);
	      return label;
	    }
	  }, {
	    key: 'buildOptions',
	    value: function buildOptions() {
	      var _this2 = this;

	      var options = document.createElement('span');
	      options.classList.add('ql-picker-options');
	      [].slice.call(this.select.options).forEach(function (option) {
	        var item = _this2.buildItem(option);
	        options.appendChild(item);
	        if (option.hasAttribute('selected')) {
	          _this2.selectItem(item);
	        }
	      });
	      this.container.appendChild(options);
	    }
	  }, {
	    key: 'buildPicker',
	    value: function buildPicker() {
	      var _this3 = this;

	      [].slice.call(this.select.attributes).forEach(function (item) {
	        _this3.container.setAttribute(item.name, item.value);
	      });
	      this.container.classList.add('ql-picker');
	      this.label = this.buildLabel();
	      this.buildOptions();
	    }
	  }, {
	    key: 'close',
	    value: function close() {
	      this.container.classList.remove('ql-expanded');
	    }
	  }, {
	    key: 'selectItem',
	    value: function selectItem(item) {
	      var trigger = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

	      var selected = this.container.querySelector('.ql-selected');
	      if (selected != null) {
	        selected.classList.remove('ql-selected');
	      }
	      if (item != null) {
	        var value = item.getAttribute('data-value');
	        item.classList.add('ql-selected');
	        this.select.selectedIndex = [].indexOf.call(item.parentNode.children, item);
	        this.label.setAttribute('data-value', value || '');
	        if (trigger) {
	          this.select.dispatchEvent(new Event('change'));
	        }
	      } else {
	        this.label.removeAttribute('data-value');
	      }
	      this.close();
	    }
	  }, {
	    key: 'update',
	    value: function update() {
	      var item = undefined,
	          option = undefined;
	      if (this.select.selectedIndex > -1) {
	        item = this.container.querySelectorAll('.ql-picker-item')[this.select.selectedIndex];
	        option = this.select.options[this.select.selectedIndex];
	      }
	      this.selectItem(item);
	      var isActive = option !== this.select.querySelector('option[selected]');
	      this.label.classList.toggle('ql-active', isActive);
	    }
	  }]);

	  return Picker;
	}();

	exports.default = Picker;

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = {
	  'align': {
	    '': __webpack_require__(71),
	    'center': __webpack_require__(72),
	    'right': __webpack_require__(73),
	    'justify': __webpack_require__(74)
	  },
	  'background': __webpack_require__(75),
	  'blockquote': __webpack_require__(76),
	  'bold': __webpack_require__(77),
	  'color': __webpack_require__(78),
	  'italic': __webpack_require__(79),
	  'header': {
	    '1': __webpack_require__(80),
	    '2': __webpack_require__(81)
	  },
	  'image': __webpack_require__(82),
	  'link': __webpack_require__(83),
	  'list': {
	    'ordered': __webpack_require__(84),
	    'bullet': __webpack_require__(85)
	  },
	  'strike': __webpack_require__(86),
	  'underline': __webpack_require__(87)
	};

/***/ },
/* 71 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";

/***/ },
/* 74 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";

/***/ },
/* 75 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";

/***/ },
/* 76 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";

/***/ },
/* 78 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";

/***/ },
/* 79 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";

/***/ },
/* 80 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <line class=\"ql-stroke ql-thin\" x1=13.5 x2=15.5 y1=14.5 y2=14.5></line> <path class=ql-fill d=M14.5,15a0.5,0.5,0,0,1-.5-0.5V12.085l-0.276.138A0.5,0.5,0,0,1,13.053,12c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,15,11.5v3A0.5,0.5,0,0,1,14.5,15Z></path> </svg>";

/***/ },
/* 81 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <path class=\"ql-stroke ql-thin\" d=M15.5,14.5h-2c0-.234,1.85-1.076,1.85-2.234a0.959,0.959,0,0,0-1.85-.109></path> </svg>";

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";

/***/ },
/* 84 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";

/***/ },
/* 85 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";

/***/ },
/* 87 */
/***/ function(module, exports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _emitter = __webpack_require__(11);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _base = __webpack_require__(67);

	var _base2 = _interopRequireDefault(_base);

	var _colorPicker = __webpack_require__(89);

	var _colorPicker2 = _interopRequireDefault(_colorPicker);

	var _iconPicker = __webpack_require__(90);

	var _iconPicker2 = _interopRequireDefault(_iconPicker);

	var _picker = __webpack_require__(68);

	var _picker2 = _interopRequireDefault(_picker);

	var _icons = __webpack_require__(70);

	var _icons2 = _interopRequireDefault(_icons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var COLORS = ["#000000", "#e60000", "#ff9900", "#ffff00", "#008A00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466"];

	var SnowTheme = function (_BaseTheme) {
	  _inherits(SnowTheme, _BaseTheme);

	  function SnowTheme(quill, options) {
	    _classCallCheck(this, SnowTheme);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SnowTheme).call(this, quill, options));

	    _this.quill.container.classList.add('ql-snow');
	    _this.pickers = [];
	    document.body.addEventListener('click', function (e) {
	      _this.pickers.forEach(function (picker) {
	        if (!(e.target.compareDocumentPosition(picker.container) & Node.DOCUMENT_POSITION_CONTAINS)) {
	          picker.close();
	        }
	      });
	    });
	    _this.quill.on(_emitter2.default.events.SELECTION_CHANGE, _this.updatePickers, _this).on(_emitter2.default.events.TEXT_CHANGE, _this.updatePickers, _this);
	    return _this;
	  }

	  _createClass(SnowTheme, [{
	    key: 'buildPickers',
	    value: function buildPickers(selects) {
	      var _this2 = this;

	      selects.forEach(function (select) {
	        if (select.classList.contains('ql-align')) {
	          _this2.pickers.push(new _iconPicker2.default(select, _icons2.default.align));
	        } else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
	          var format = select.classList.contains('ql-background') ? 'background' : 'color';
	          if (select.querySelector('option') == null) {
	            (function () {
	              var defaultColor = format === 'background' ? '#ffffff' : '#000000';
	              COLORS.forEach(function (color) {
	                var option = document.createElement('option');
	                if (color === defaultColor) {
	                  option.setAttribute('selected', 'selected');
	                } else {
	                  option.setAttribute('value', color);
	                }
	                select.appendChild(option);
	              });
	            })();
	          }
	          var picker = new _colorPicker2.default(select, _icons2.default[format]);
	          _this2.pickers.push(picker);
	        } else if (select.classList.contains('ql-font')) {
	          _this2.pickers.push(new _picker2.default(select));
	        } else if (select.classList.contains('ql-size')) {
	          _this2.pickers.push(new _picker2.default(select));
	        }
	      });
	    }
	  }, {
	    key: 'extendToolbar',
	    value: function extendToolbar(toolbar) {
	      var _this3 = this;

	      toolbar.container.classList.add('ql-snow');
	      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button')));
	      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select')));
	      this.imageTooltip = this.addModule('image-tooltip');
	      this.linkTooltip = this.addModule('link-tooltip');
	      toolbar.handlers['image'] = this.imageTooltip.show.bind(this.imageTooltip);
	      toolbar.handlers['link'] = function (value) {
	        if (!value) return false;
	        _this3.linkTooltip.open(_this3.quill.selection.savedRange);
	        return true;
	      };
	    }
	  }, {
	    key: 'updatePickers',
	    value: function updatePickers() {
	      this.pickers.forEach(function (picker) {
	        picker.update();
	      });
	    }
	  }]);

	  return SnowTheme;
	}(_base2.default);

	SnowTheme.DEFAULTS = {
	  modules: {
	    'toolbar': {
	      container: [[{ font: [false, 'serif', 'monospace'] }, { size: ['small', false, 'large', 'huge'] }], ['bold', 'italic', 'underline', 'strike'], [{ color: [] }, { background: [] }], [{ list: 'ordered' }, { list: 'bullet' }, { align: [false, 'center', 'right', 'justify'] }], ['link', 'image']]
	    }
	  }
	};

	exports.default = SnowTheme;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _picker = __webpack_require__(68);

	var _picker2 = _interopRequireDefault(_picker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ColorPicker = function (_Picker) {
	  _inherits(ColorPicker, _Picker);

	  function ColorPicker(select, label) {
	    _classCallCheck(this, ColorPicker);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ColorPicker).call(this, select));

	    _this.label.innerHTML = label;
	    _this.container.classList.add('ql-color-picker');
	    [].slice.call(_this.container.querySelectorAll('.ql-picker-item'), 0, 7).forEach(function (item) {
	      item.classList.add('ql-primary');
	    });
	    return _this;
	  }

	  _createClass(ColorPicker, [{
	    key: 'buildItem',
	    value: function buildItem(option) {
	      var item = _get(Object.getPrototypeOf(ColorPicker.prototype), 'buildItem', this).call(this, option);
	      item.style.backgroundColor = option.getAttribute('value') || '';
	      return item;
	    }
	  }, {
	    key: 'selectItem',
	    value: function selectItem(item, trigger) {
	      _get(Object.getPrototypeOf(ColorPicker.prototype), 'selectItem', this).call(this, item, trigger);
	      // let colorLabel = this.label.querySelector('.ql-color-label');
	      // let value = item ? item.getAttribute('data-value') : '';
	      // if (colorLabel) {
	      //   if (colorLabel.tagName === 'line') {
	      //     colorLabel.style.stroke = value;
	      //   } else {
	      //     colorLabel.style.fill = value;
	      //   }
	      // }
	    }
	  }]);

	  return ColorPicker;
	}(_picker2.default);

	exports.default = ColorPicker;

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _picker = __webpack_require__(68);

	var _picker2 = _interopRequireDefault(_picker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var IconPicker = function (_Picker) {
	  _inherits(IconPicker, _Picker);

	  function IconPicker(select, icons) {
	    _classCallCheck(this, IconPicker);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(IconPicker).call(this, select));

	    _this.container.classList.add('ql-icon-picker');
	    [].forEach.call(_this.container.querySelectorAll('.ql-picker-item'), function (item) {
	      item.innerHTML = icons[item.getAttribute('data-value') || ''];
	    });
	    _this.selectItem(_this.container.querySelector('.ql-selected'));
	    return _this;
	  }

	  _createClass(IconPicker, [{
	    key: 'selectItem',
	    value: function selectItem(item, trigger) {
	      _get(Object.getPrototypeOf(IconPicker.prototype), 'selectItem', this).call(this, item, trigger);
	      this.label.innerHTML = item.innerHTML;
	    }
	  }]);

	  return IconPicker;
	}(_picker2.default);

	exports.default = IconPicker;

/***/ }
/******/ ])
});
;
