import React, { Component } from 'react'
import { render } from 'react-dom'
import { EventEmitter } from 'events'
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
    const backgroundImage =  "url('../img/diplomystus-dentatus.jpg')"
    let ActiveScreen

    if (this.state.screenIndex === "home") {
      ActiveScreen = <Home posts={this.state.posts}/>
    }
    if (this.state.screenIndex === "link") {
      ActiveScreen = <Links />
    }
    if (this.state.screenIndex === "about") {
      ActiveScreen = <About />
    }
    return(
      <div className="app">
        <Header eventEmitter={this.eventEmitter}
                screenIndex={this.state.screenIndex}/>
        <div className="main">
          <Sidebar1
            eventEmitter={this.eventEmitter}
            screenIndex={this.state.screenIndex} />
          <div id="content" style={{backgroundImage}}>
              <div>{ ActiveScreen }</div>
          </div>
        </div>
        <div id="footer"><p>Blog created by tuningmind</p></div>
      </div>
    )
  }
}
render(
  <App />,
  document.getElementById('root')
)
