import React, { Component } from 'react'

class Post extends Component {


  render() {
    const post = this.props.post
    return (
      <div>
        <h1>{post.title} </h1>
        <div className="post">
          <p>
            {post.guts}
          </p>
        </div>
      </div>
    )

  }
}

module.exports = Post
