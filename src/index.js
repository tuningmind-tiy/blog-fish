import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'
import { EventEmitter } from 'events'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import Screen3 from './screens/Screen3'
import './styles/app.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      screenIndex: 1
    }
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter()

    this.eventEmitter.addListener("navigateScreen", ({screenIndex}) => {
      this.updateScreen({newScreenIndex: screenIndex})
    })
  }

  updateScreen({newScreenIndex}) {
    this.setState({
      screenIndex: newScreenIndex
    })
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
          <Nav 
            eventEmitter={this.eventEmitter} 
            screenIndex={this.state.screenIndex}/>
          <div className="main-content">
            {ActiveScreen}
          </div>

        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <App>
  </App>,
  document.getElementById('root')
);
