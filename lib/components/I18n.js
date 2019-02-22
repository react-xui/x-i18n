'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _zh_CN = require('./zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created with Visual Studio Code.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * github: https://github.com/React-xui/x-seed
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * User: 田想兵
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Date: 2019-02-20
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Time: 20:00:00
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Contact: 55342775@qq.com
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var I18n = _react2.default.createContext({
  local: _zh_CN2.default
});
// export default I18n;

var LocalReceiver = function (_Component) {
  _inherits(LocalReceiver, _Component);

  function LocalReceiver() {
    _classCallCheck(this, LocalReceiver);

    return _possibleConstructorReturn(this, (LocalReceiver.__proto__ || Object.getPrototypeOf(LocalReceiver)).apply(this, arguments));
  }

  _createClass(LocalReceiver, [{
    key: 'getLocalData',

    //返回当前的语言包
    value: function getLocalData() {
      var local = this.context.local;
      var _props = this.props,
          componentName = _props.componentName,
          defaultValue = _props.defaultValue;
      //默认语言包如果未传值，则使用i18n的默认包
      //如果顶层还有i18n的，进行合并
      // debugger;

      return _extends({}, local[componentName || 'global'], defaultValue || {});
    }
    //当前语言代码

  }, {
    key: 'getLocalCode',
    value: function getLocalCode() {
      var local = this.context.local;

      return local.local;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        I18n.Provider,
        { value: _zh_CN2.default },
        this.props.children(this.getLocalData(), this.getLocalCode())
      );
    }
  }]);

  return LocalReceiver;
}(_react.Component);

// export default class i18n extends Component {
//   static childContextTypes={
//     local:PropTypes.object,
//     getLocal:PropTypes.func
//   }
//   getChildContext(){
//     return {
//       local:{
//         test:{
//           "hello":"你好!"
//         }
//       },
//       getLocal:this.getLocal
//     }
//   }
//   static contextTypes ={
//     local:PropTypes.object
//   }
//   //返回当前语言包
//   getLocal(){
//     debugger
//     return this.context.local;
//   }
//   render () {
//     //调用子组件的方法，把语言包传给他
//     return this.props.children(this.getLocal());
//   }
// }


LocalReceiver.contextType = I18n;
exports.default = LocalReceiver;