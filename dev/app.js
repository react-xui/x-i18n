import React from 'react';
import ReactDOM from 'react-dom';
import I18n from '../src/index';
import '../src/_index';
import PropTypes from 'prop-types';
import en from '../src/components/en';
import zh_CN from '../src/components/zh_CN';

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
  renderContent=(local,localCode)=>{
    console.log(arguments)
    debugger;
    // let local = this.context;
    console.log(local)
    // return  <Instance local={local}></Instance>
    return (
    <div>
    {local.submit}
    </div>
    )
  }
  render(){
    return (
      <div>
        <I18n>
        {this.renderContent}
        </I18n>
      </div>
    )
  }
}

class App extends React.Component {
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
  renderContent=(local,localCode)=>{
    console.log(arguments)
    debugger;
    // let local = this.context;
    console.log(local)
    // return  <Instance local={local}></Instance>
    return (
    <div>
    {local.submit}
    <button onClick={this.change.bind(this,'en')}>en</button>
    <button onClick={this.change.bind(this,'zh_CN')}>zh_CN</button>
    
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