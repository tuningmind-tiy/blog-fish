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

 constructor(props) {
   super(props)
   this.state = {
     screenIndex: 1
   }
 }

//   componentWillMount() {
//     this.eventEmitter = new EventEmitter()
// 
//     this.eventEmitter.addListener("navigateScreen", ({screenIndex}) => {
//       this.updateScreen({newScreenIndex: screenIndex})
//     })
//   }
  updateScreen({newScreenIndex}) {
    this.setState({screenIndex: newScreenIndex})
  }
  render() {

    let ActiveScreen

    if(this.state.screenIndex === 1) {
      ActiveScreen = <Screen1 />
    }
    if(this.state.screenIndex === 2) {
      ActiveScreen = <Screen2 />
    }
    if(this.state.screenIndex === 3) {
      ActiveScreen = <Screen3 />
    }
    
    return (
      <div className="app">
        <div className="app-header"></div>
        <div className="app-wrapper">
          <div className="app-nav">
            <div className="nav-item screen1"
              onClick={(event) => { this.setState({screenIndex: 1})}}
            >
              <p>Screen 1</p>
            </div>
            <div className="nav-item screen2"
              onClick={(event) => { this.setState({screenIndex: 2})}}
            >
              <p>Screen 2</p>
            </div>
            <div className="nav-item screen3"
              onClick={(event) => { this.setState({screenIndex: 3})}}
            >
              <p>Screen 3</p>
            </div>
          </div>

          <div className="main-content">
            {ActiveScreen}

          </div>
        </div> 
     </div>
    )
  }
}
ReactDOM.render(
  <App>nested content</App>,
  document.getElementById('root')
);
