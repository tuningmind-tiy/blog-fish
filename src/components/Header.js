import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      screenIndex: "home" 
    }
  }

  render() {
    return (
        <div className="header">
          <p className="title">Blog-Fish</p>
          <nav className="navbar">
            <ul>
              <li onClick={(e) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: "home"}) }}>home</li>
              <li onClick={(e) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: "links"}) }}>links</li>
              <li onClick={(e) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: "about"}) }}>about</li>
            </ul>
          </nav>
        </div>
    )
  }
}

module.exports = Header
