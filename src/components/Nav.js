import React, { Component } from 'react'

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      screenIndex: 1
    }
  }

  render() {
    return (
      <div className="app-nav">
        <div 
          className={this.props.screenIndex === 1 ? "nav-item screen1 active-nav" : "nav-item screen1"}
          onClick={(event) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: 1}) }}>
          <p>Screen 1</p>
        </div>
        <div
          className={this.props.screenIndex === 2 ? "nav-item screen2 active-nav" : "nav-item screen2"}
          onClick={(event) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: 2}) }}>
          <p>Screen 2</p>
        </div>
        <div 
          className={this.props.screenIndex === 3 ? "nav-item screen3 active-nav" : "nav-item screen3"}
          onClick={(event) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: 3}) }}>
          <p>Screen 3</p>
        </div>
      </div>
    )
  }

}
module.exports = Nav
