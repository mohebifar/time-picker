webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(261);


/***/ },

/***/ 261:
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
	
	var App = _react2.default.createClass({
	  displayName: 'App',
	  getInitialState: function getInitialState() {
	    return {
	      value: (0, _moment2.default)()
	    };
	  },
	  handleValueChange: function handleValueChange(value) {
	    console.log(value && value.format('HH:mm:ss'));
	    this.setState({ value: value });
	  },
	  clear: function clear() {
	    this.setState({
	      value: undefined
	    });
	  },
	  render: function render() {
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_rcTimePickerEvand2.default, {
	        defaultValue: this.state.value,
	        onChange: this.handleValueChange
	      }),
	      _react2.default.createElement(_rcTimePickerEvand2.default, {
	        value: this.state.value,
	        onChange: this.handleValueChange
	      }),
	      _react2.default.createElement(
	        'button',
	        { onClick: this.clear },
	        'clear'
	      )
	    );
	  }
	}); /* eslint no-console:0 */
	
	_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('__react-content'));

/***/ }

});
//# sourceMappingURL=value-and-defaultValue.js.map