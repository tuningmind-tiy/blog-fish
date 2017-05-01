import React, { Component } from 'react'
import { render } from 'react-dom'
import { EventEmitter } from 'events'
import Header from './components/Header'
import Home from './components/Home'
import Links from './components/Links'
import About from './components/About'
import Sidebar from './components/Sidebar'
import './styles/app.css'
import Posts from './posts.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: Posts.posts,
      screenIndex: "home"
    }
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter()

    this.eventEmitter.addListener("navigateScreen", ({screenIndex}) => {
      this.updateScreen({newScreenIndex: screenIndex})
    })
  }

  updateScreen({newScreenIndex}) {
    this.setState({
      screenIndex: newScreenIndex
    })
  }

  render(){
    let ActiveScreen

    if (this.state.screenIndex === "home") {
      ActiveScreen = <Home posts={this.state.posts}/>
    }
    if (this.state.screenIndex === "links") {
      ActiveScreen = <Links />
    }
    if (this.state.screenIndex === "about") {
      ActiveScreen = <About />
    }
    if (this.state.screenIndex === "April") {
      let filtered = this.state.posts.filter((p) => (p.month === "April"))
      ActiveScreen = <Home posts={filtered}/>
    }
    return(
      <div className="app">
        <Header eventEmitter={this.eventEmitter}
                screenIndex={this.state.screenIndex}/>
        <div className="main">
          <Sidebar
            eventEmitter={this.eventEmitter}
            screenIndex={this.state.screenIndex} />
          <div id="content">
              <div>{ ActiveScreen }</div>
          </div>
        </div>
        <div id="footer">
          <p>This blog created by
            <span className="italic"> tuningmind</span>
          </p>
        </div>
      </div>
    )
  }
}
render(
  <App />,
  document.getElementById('root')
)
