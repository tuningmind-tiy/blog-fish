import React, { Component } from 'react'

class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      postIndex: 1
    }
  }

  render() {
    return (
      <div className="app-nav">
        <div 
          className={this.props.postIndex === 1 ? "nav-item post1 active-nav" : "nav-item post1"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 1}) }}>
          <p>post 1</p>
        </div>
        <div
          className={this.props.postIndex === 2 ? "nav-item post2 active-nav" : "nav-item post2"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 2}) }}>
          <p>post 2</p>
        </div>
        <div 
          className={this.props.postIndex === 3 ? "nav-item post3 active-nav" : "nav-item post3"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 3}) }}>
          <p>post 3</p>
      
        </div>
      </div>
    )
  }

}
module.exports = Nav
