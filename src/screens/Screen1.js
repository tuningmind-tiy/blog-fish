import React, { Component } from 'react'

class Screen1 extends Component {

 componentwillmount() {
   this.props.eventemitter.emit("navigatescreen", {screenindex: 1})
 }

  render() {
    return (
      <div className="screen screen1">
        <h1> Screen 1 Data </h1>
      </div>
    )

  }
}

module.exports = Screen1
