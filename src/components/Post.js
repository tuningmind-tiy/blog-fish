import React, { Component } from 'react'

class Post extends Component {

  render() {
    const post = this.props.post
    return (
      <div>
        <p className="tags">date: {post.date}</p>
        <h1>{post.title} </h1>
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
