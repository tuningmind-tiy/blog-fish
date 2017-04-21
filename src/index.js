import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Nav from './components/Nav'
import { EventEmitter } from 'events'
import Post1 from './posts/Post1'
import Post2 from './posts/Post2'
import Post3 from './posts/Post3'
import './styles/app.css'

class App extends Component {

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

    if(this.state.postIndex === 1) {
      Activepost = <Post1 />
    }
    if(this.state.postIndex === 2) {
      Activepost = <Post2 />
    }
    if(this.state.postIndex === 3) {
      Activepost = <Post3 />
    }

    return (
      <div className="app">
        <div className="app-header">
          <p>Blog-Fish</p>
          <div className="navbar">
            <ul>
              <li>posts</li>
              <li>links</li>
              <li>about</li>
            </ul>
          </div>
        </div>
        <div className="app-wrapper">
          <Nav 
            eventEmitter={this.eventEmitter}
            postIndex={this.state.postIndex}/>
          <div className="main-content">
            {Activepost}
          </div>

        </div>
      </div>
    )
  }
}
ReactDOM.render(
  <App>
  </App>,
  document.getElementById('root')
)
