webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(260);


/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(36);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _moment = __webpack_require__(174);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _rcTimePickerEvand = __webpack_require__(175);
	
	var _rcTimePickerEvand2 = _interopRequireDefault(_rcTimePickerEvand);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var showSecond = false; /* eslint no-console:0 */
	
	var showAMPM = true;
	var str = showSecond ? 'HH:mm:ss' : 'HH:mm';
	
	function onChange(value) {
	  console.log(value && value.format(str));
	}
	
	_reactDom2.default.render(_react2.default.createElement(_rcTimePickerEvand2.default, {
	  style: { width: 100 },
	  showSecond: showSecond,
	  showAMPM: showAMPM,
	  defaultValue: (0, _moment2.default)(),
	  className: 'xxx',
	  onChange: onChange
	}), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=pick-time.js.map