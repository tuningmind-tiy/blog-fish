import React, { Component } from 'react'
import Post from '../components/Post.js'

class Home extends Component {
  render() {
    console.log("Home.js has: ", this.props)
    const posts = this.props.posts
    return (
      <div id="home">
        {
          posts.map((p, i) => (
            <Post key={i} post={p}/>
          ))
        }
      </div>
    )
  }
}
module.exports = Home
