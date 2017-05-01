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
              <li

                onClick={(e) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: "home"}) }}

                className={this.props.screenIndex === "home" ? "item active" : "item"}

              >home</li>
              <li

                 onClick={(e) => {       this.props.eventEmitter.emit("navigateScreen", {screenIndex: "links"}) }}

                className={this.props.screenIndex === "links" ? "item active" : "item"}

              >links</li>

              <li
                onClick={(e) => { this.props.eventEmitter.emit("navigateScreen", {screenIndex: "about"}) }}

                className={this.props.screenIndex === "about" ? "item active" : "item"}
                
              >about</li>
            </ul>
          </nav>
        </div>
    )
  }
}

module.exports = Header
