import React, { Component } from 'react'

class Header extends Component {

  render() {
    return (
        <div className="header">
          <p className="title">Blog-Fish</p>
          <nav className="navbar">
            <ul>
              <li onClick={(e) => console.log("CLICKED")}>posts</li>
              <li>links</li>
              <li>about</li>
            </ul>
          </nav>
        </div>
    )
  }
}

module.exports = Header
