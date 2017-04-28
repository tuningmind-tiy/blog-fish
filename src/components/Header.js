import React, { Component } from 'react'

class Header extends Component {

  render() {
    // let sidebar = document.querySelector(aside[className="aside1"])
    // console.log("sidebar", sidebar)
    // let li = document.createElement('li')
    // unorderedlist.appendChild(li)
    //
    return (
        <div className="header">
          <p className="title">Blog-Fish</p>
          <nav className="navbar">
            <ul>
              <li onClick={(e) => { console.log("CLICKED") }} >posts</li>
              <li>links</li>
              <li>about</li>
            </ul>
          </nav>
        </div>
    )
  }
}

module.exports = Header
