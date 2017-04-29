import React, { Component } from 'react'

class Post extends Component {

  render() {
    const post = this.props.post
    return (
      <div>
        <h1>{post.date} {post.title} </h1>
        <div className="post">
          <p>
            {post.guts}
          </p>
          <p className="tags">
            tags: {post.tags}
          </p>
        </div>
      </div>
    )
  }
}

module.exports = Post
