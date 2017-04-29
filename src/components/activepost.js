import React, { Component } from 'react'
import { EventEmitter } from 'events'
import Post1 from './posts/Post1'
import Post2 from './posts/Post2'
import Post3 from './posts/Post3'

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

    this.eventEmitter.addListener("choosetag", ({tag}) => {
      this.updatetag({newtag: tag})
    })
  }

  updatetag({newtag}) {
    this.setState({
      tag: newtag
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
          <div id="sidebar1">
            <Sidebar1
              eventEmitter={this.eventEmitter}
              postIndex={this.state.postIndex} />
          </div>
          <div className="content">
            {Activepost}
          </div>
          <div id="sidebar2">
            <Sidebar2 />
          </div>
        </div>
        <div className="footer">
          <p>something in the footer</p>
        </div>
      </div>
    )
  }
}

module.exports = PostsHome
