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
      screenIndex: 1
    }
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter()

    this.eventEmitter.addListener("navigateScreen", ({screenIndex}) => {
      this.updateScreen({newScreenIndex: screenIndex})
    })
  }

  updateScreen(newScreenIndex) {
    this.setState({
      screenIndex: newScreenIndex
    })
      console.log("this.state.screenIndex in index.js", this.state.screenIndex)
  }

  render(){
    const backgroundImage =  "background-image: url('./img/diplomystus-dentatus.jpg')"
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
        <div id="footer">
          <p>Blog created by
            <span className="italic">tuningmind</span>
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
