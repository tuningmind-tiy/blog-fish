import React, { Component } from 'react'

class Sidebar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      screenIndex: ""
    }
  }

  render() {
    return (
      <aside id="sidebar">
        <div

          className={this.props.screenIndex === "April" ? "item active" : "item"}

          onClick={(event) => { this.props.eventEmitter.emit("navigatescreen", {screenIndex: "April"}) }}

          ><p>April 2017</p>

        </div>
        <div

          className={this.props.screenIndex === "March" ? "item active" : "item"}

          onClick={(event) => { this.props.eventEmitter.emit("navigatescreen", {screenIndex: "March"}) }}

          ><p>March 2017</p>

        </div>
        <div

          className={this.props.screenIndex === "February" ? "item active" : "item"}

          onClick={(event) => { this.props.eventEmitter.emit("navigatescreen", {screenIndex: "February"}) }}

          ><p>Feb 2017</p>

        </div>
      </aside>
    )
  }

}
module.exports = Sidebar
