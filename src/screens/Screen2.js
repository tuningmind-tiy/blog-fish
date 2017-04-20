import React, { Component } from 'react'

class Screen2 extends Component {

 componentwillmount() {
   this.props.eventemitter.emit("navigatescreen", {screenindex: 2})
 }

  render() {
    return (
      <div className="screen screen2">
        <h1> Screen 2 Data </h1>
      </div>
    )
  }
}

module.exports = Screen2
