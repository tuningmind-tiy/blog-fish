import React, { Component } from 'react'

class Sidebar2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      tag: "remarkable"
    }
  }

  render() {
    let tags = ["Alice", "remarkable", "marmalade", "Longitude", "Australia", "late"]

    return (
      <aside className="aside2">
        <div
          className={this.state.tag === "Alice" ? "sidebar-item active-item" : "sidebar-item"}
          onClick={(e) => { return ('<p>' + {tag: "Alice"} + '</p>') }}>
          <p>Alice</p>
        </div>
        <div
          className={this.state.tag === "remarkable" ? "sidebar-item active-item" : "sidebar-item"}
          onClick={(e) => { return ('<p>' + {tag: "remarkable"} + '</p>') }}>
          <p>remarkable</p>
        </div>
        <div
          className={this.state.tag === "marmalade" ? "sidebar-item active-item" : "sidebar-item"}
          onClick={(e) => { return ('<p>' + {tag: "marmalade"} + '</p>') }}>
          <p>marmalade</p>
        </div>
        <div
          className={this.state.tag === "Longitude" ? "sidebar-item active-item" : "sidebar-item"}
          onClick={(e) => { return ('<p>' + {tag: "Longitude"} + '</p>') }}>
          <p>Longitude</p>
        </div>
        <div
          className={this.state.tag === "Australia" ? "sidebar-item active-item" : "sidebar-item"}
          onClick={(e) => { return ('<p>' + {tag: "Australia"} + '</p>') }}>
          <p>Australia</p>
        </div>
        <div
          className={this.state.tag === "late" ? "sidebar-item active-item" : "sidebar-item"}
          onClick={(e) => { return ('<p>' + {tag: "late"} + '</p>') }}>
          <p>late</p>
        </div>
      </aside>
    )
  }

}
module.exports = Sidebar2
