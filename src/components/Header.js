import React, { Component } from 'react'

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      screenIndex: 1
    }
  }

  render() {
    console.log("this.props.eventEmitter:", this.props.eventEmitter)
    return (
        <div className="header">
          <p className="title">Blog-Fish</p>
          <nav className="navbar">
            <ul>
              <li onClick={(e) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: 1})
              console.log("this.state.screenIndex after clicking home", this.state.screenIndex)
              }}>home</li>

              <li onClick={(e) => {
              this.props.eventEmitter.emit("navigateScreen", {screenIndex: 2})
              console.log("this.state.screenIndex after clicking links: ", this.state.screenIndex)
              }}>links</li>

              <li onClick={(e) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: 3})
              console.log("this.props.eventEmitter._events.navigateScreen after clicking 'about': ", this.props.eventEmitter._events.navigateScreen)
              }}>about</li>
            </ul>
          </nav>
        </div>
    )
  }
}

module.exports = Header
