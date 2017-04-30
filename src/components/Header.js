import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postIndex: 1
    }
  }

  render() {
    return (
        <div className="header">
          <p className="title">Blog-Fish</p>
          <nav className="navbar">
            <ul>
              <li onClick={(e) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: 1}) }}>home</li>
              <li onClick={(e) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: 2}) }}>links</li>
              <li onClick={(e) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: 3}) }}>about</li>
            </ul>
          </nav>
        </div>
    )
  }
}

module.exports = Header
