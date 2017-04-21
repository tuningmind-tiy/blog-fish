import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Sidebar from './components/Sidebar'
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
          <sidebar> 
            <Sidebar
            eventEmitter={this.eventEmitter}
            postIndex={this.state.postIndex}/>
          </sidebar>
          <div className="content">
            {Activepost}
          </div>
        </div>
        <div className="footer">
          <p>get this template</p>
          <p>license MIT with attribution</p>
          <p>copyright</p>
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
