import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Home from './components/Home'
import Links from './components/Links'
import About from './components/About'
import Sidebar1 from './components/Sidebar1'
import './styles/app.css'
import Posts from './posts.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: Posts.posts,
      screenIndex: 1
    }
  }

  updateScreen(newScreenIndex) {
    this.setState({
      screenIndex: newScreenIndex
    })
  }

  render(){
    let ActiveScreen

    if (this.state.screenIndex === 1) {
      ActiveScreen = <Home posts={this.state.posts}/>
    }
    if (this.state.screenIndex === 2) {
      ActiveScreen = <Links />
    }
    if (this.state.screenIndex === 3) {
      ActiveScreen = <About />
    }
    console.log("ActiveScreen: ", ActiveScreen)
    return(
      <div className="app">
        <Header />
        <div className="main">
          <Sidebar1
            eventEmitter={this.eventEmitter}
            postIndex={this.state.postIndex} />
          <div id="content">{ ActiveScreen }</div>
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
