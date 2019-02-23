import React from 'react';
import ReactDOM from 'react-dom';
import I18n,{I18nContext} from '../lib/index';
import '../src/_index';
// import PropTypes from 'prop-types';
import en from '../src/components/en';
import zh_CN from '../src/components/zh_CN';
// console.log(I18nContext)
// debugger
var appElement = document.getElementById('example');
// class Instance extends React.Component {
//   render(){
//     let local = this.context;
//     console.log(local)
//     console.log(this.props.componentName)
//     return (
//       <div>{local.global.submit}</div>
//     )
//   }
// }
// Instance.contextType = I18n;

class Test extends React.Component {
  static contextType = I18nContext;

  renderContent=()=>{
    // return  <Instance local={local}></Instance>
    let {global} = this.context;
    debugger
    return (
    <div>
    abc{global.submit}
    </div>
    )
  }
  render(){
    return (
      <div>
        {this.renderContent()}
      </div>
    )
  }
}

class App extends React.Component {
  static contextType = I18nContext;
  constructor(props) {
    super(props);
    this.state = { show: false ,local:en};
  }
  // static contextType ={
  //   local:PropTypes.object
  // }
  testFunc() {
    this.setState({ show: !this.state.show });
  }
  renderContent=({global},localCode)=>{
    // console.log(this.context)
    // debugger;
    // let local = this.context;
    // console.log(global)
    // return  <Instance local={local}></Instance>
    return (
    <div>
    {global.submit}
    <button onClick={this.change.bind(this,'en')}>en</button>
    <button onClick={this.change.bind(this,'zh_CN')}>zh_CN</button>
    <Test></Test>
    </div>
    )
  }
  static contextType = I18n;
  change=(lng)=>{
    if(lng=="en"){
      this.setState({local:en})
    }else{
      this.setState({local:zh_CN})
    }
  }
  render() {
    return (
      <I18n defaultValue={this.state.local}>
        {this.renderContent}
      </I18n>
    )
  }
}
ReactDOM.render(<App />, appElement);