import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Home from './components/Home'
import Sidebar1 from './components/Sidebar1'
import './styles/app.css'
import Posts from './posts.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = Posts
    this.posts = this.state.posts
  }

  render(){
    return(
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar1
            eventEmitter={this.eventEmitter}
            postIndex={this.state.postIndex} />
          <div id="content"><Home posts={this.posts} /></div>
        </div>
        <div id="footer"><p>something in the footer</p></div>
      </div>
    )
  }
}
render(
  <App />,
  document.getElementById('root')
)
