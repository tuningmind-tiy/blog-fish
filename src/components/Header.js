import React, { Component } from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
        <div className="header">
          <p className="title">Blog-Fish</p>
          <nav className="navbar">
            <ul>
              <li onClick={(e) => { this.updateScreen(1) }}>home</li>
              <li onClick={(e) => { this.updateScreen(2) }}>links</li>
              <li onClick={(e) => { this.updateScreen(3) }}>about</li>
            </ul>
          </nav>
        </div>
    )
  }
}

module.exports = Header
