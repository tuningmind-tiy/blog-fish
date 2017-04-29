import React, { Component } from 'react'

class Sidebar1 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      postIndex: 1
    }
  }

  render() {
    return (
      <aside id="sidebar">
        <div
          className={this.props.postIndex === 1 ? "item active" : "item"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 1}) }}>
          <p>April 2017</p>
        </div>
        <div
          className={this.props.postIndex === 2 ? "item active" : "item"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 2}) }}>
          <p>March 2017</p>
        </div>
        <div
          className={this.props.postIndex === 3 ? "item active" : "item"}
          onClick={(event) => { this.props.eventEmitter.emit("navigatepost", {postIndex: 3}) }}>
          <p>Feb 2017</p>
        </div>
      </aside>
    )
  }

}
module.exports = Sidebar1
