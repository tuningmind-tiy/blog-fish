import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Sidebar1 from './components/Sidebar1'
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
        <div className="header">
          <p className="title">Blog-Fish</p>
          <nav className="navbar">
            <ul>
              <li>posts home</li>
              <li>links</li>
              <li>about</li>
            </ul>
          </nav>
        </div>
        <div className="main">
          <Sidebar1
          eventEmitter={this.eventEmitter}
          postIndex={this.state.postIndex}/>
          <div className="content">
            {Activepost}
          </div>
          <aside className="aside2">
            <p>tags</p>
            <p>Alice</p>
            <p>considering</p>
            <p>remarkable</p>
            <p>marmalade</p>
          </aside>
        </div>
        <div className="footer">
          <p>something in the footer</p>
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
