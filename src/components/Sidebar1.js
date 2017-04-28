import React, { Component } from 'react'
import PostsHome from './components/PostsHome'

class Sidebar1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      postIndex: 1
    }
  }

  render() {
    return (
      <aside className="aside1" id="sidebar1">
        <div
          className={this.props.postIndex === 1 ? "sidebar-item active-item" : "sidebar-item"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 1}) }}>
          <p>post 1</p>
        </div>
        <div
          className={this.props.postIndex === 2 ? "sidebar-item active-item" : "sidebar-item"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 2}) }}>
          <p>post 2</p>
        </div>
        <div
          className={this.props.postIndex === 3 ? "sidebar-item active-item" : "sidebar-item"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 3}) }}>
          <p>post 3</p>
        </div>
      </aside>
    )
  }

}
module.exports = Sidebar1
