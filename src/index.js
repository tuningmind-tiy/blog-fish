import React, { Component } from 'react'
import { render } from 'react-dom'
import Header from './components/Header'
import Home from './components/Home'
// import PostsHome from './components/PostsHome'
// import Sidebar1 from './components/Sidebar1'
// import Sidebar2 from './components/Sidebar2'
import './styles/app.css'
import Posts from './posts.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = Posts
    console.log("index.js has: ", this.state)
    this.posts = this.state.posts
  }

  render(){
    return(
      <div className="app">
        <Header />
        <div className="main">
          {/*<Sidebar1 />*/}
          <div id="content"><Home posts={this.posts} /></div>
          {/*<div id="sidebar2"><Sidebar2 /></div>*/}
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
