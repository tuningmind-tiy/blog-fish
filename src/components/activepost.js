import React, { Component } from 'react'
import { EventEmitter } from 'events'

class PostsHome extends Component {

  constructor(props) {
    super(props)
    this.state = {
      postIndex: 1
    }
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter()

    this.eventEmitter.addListener("navigatepost", ({postIndex}) => {
      this.updatepost({newpostIndex: postIndex})
    })
  }

  updatepost({newpostIndex}) {
    this.setState({
      postIndex: newpostIndex
    })
  }

  render() {
    let Activepost

    if (this.state.postIndex === 1) {
      Activepost = <Post1 />
    }
    if (this.state.postIndex === 2) {
      Activepost = <Post2 />
    }
    if (this.state.postIndex === 3) {
      Activepost = <Post3 />
    }

    return (
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar1
            eventEmitter={this.eventEmitter}
            postIndex={this.state.postIndex} />
          <div id="content">
            {Activepost}
          </div>
        </div>
        <div id="footer"><p>something in the footer</p></div>
      </div>
    )
  }
}

module.exports = PostsHome
