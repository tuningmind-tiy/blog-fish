import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router'
import Nav from './components/Nav'
import { EventEmitter } from 'events'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import './styles/app.css';

class App extends Component {
// 
//   constructor(props) {
//     super(props)
//     this.state = {
//       screenIndex: 1
//     }
//   }
// 
//   componentWillMount() {
//     this.eventEmitter = new EventEmitter()
// 
//     this.eventEmitter.addListener("navigateScreen", ({screenIndex}) => {
//       this.updateScreen({newScreenIndex: screenIndex})
//     })
//   }
// 
//   updateScreen({newScreenIndex}) {
//     this.setState({screenIndex: newScreenIndex})
//   }
// 
  render() {
    return (
      <div className="app">
        <div className="app-header"></div>
        <div className="app-wrapper">
          <div className="app-nav"></div>
          <div className="main-content"></div>
            {this.props.children}
        </div> 
     </div>
    )
  }
}
ReactDOM.render(
  <App>nested content</App>,
  document.getElementById('root')
);
