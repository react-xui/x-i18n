/*
 * Created with Visual Studio Code.
 * github: https://github.com/React-xui/x-seed
 * User: 田想兵
 * Date: 2019-02-20
 * Time: 20:00:00
 * Contact: 55342775@qq.com
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import local from './zh_CN';

const I18n = React.createContext({
    local
})
// export default I18n;

export default class LocalReceiver extends Component{
  static contextType = I18n;
  //返回当前的语言包
  getLocalData(){
    let {local} = this.context;
    let {componentName,defaultValue} = this.props;
debugger;
    return {
      ...local[componentName||'global'],
      ...defaultValue[componentName||'global'],
    };
  }
  //当前语言代码
  getLocalCode(){

  }
  render(){
    return (
    <I18n.Provider value={local}>
    {/* //把语言包和代码传给子组件 */}
    {this.props.children(this.getLocalData(),this.getLocalCode())}
    </I18n.Provider>
    )
  }
}

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
