import React, { Component } from 'react'

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      postIndex: 1
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div 
          className={this.props.postIndex === 1 ? "sidebar-item post active-item" : "sidebar-item post"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 1}) }}>
          <p>post 1</p>
        </div>
        <div
          className={this.props.postIndex === 2 ? "sidebar-item post active-item" : "sidebar-item post"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 2}) }}>
          <p>post 2</p>
        </div>
        <div 
          className={this.props.postIndex === 3 ? "sidebar-item post active-item" : "sidebar-item post"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 3}) }}>
          <p>post 3</p>
      
        </div>
      </div>
    )
  }

}
module.exports = Sidebar 
