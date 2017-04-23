import React, { Component } from 'react'

class Sidebar2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {
    let tagwords = ["Alice", "considering", "remarkable", "marmalade", "waistcoat", "rabbit", "wonder", "passage", "dinah", "book", "thump", "shelves", "pocket", "hall", "doors", "cupboard", "maps", "tumbling", "latitude", "longitude", "school", "zealand", "australia", "bats", "whiskers"]
    let tags = tagwords.forEach( (tag) => {
      return ("<a>" + tag + "</a>")
    })
    return (
      <aside className="aside2">
        <p>{tags}</p>
      </aside>
    )
  }

}
module.exports = Sidebar2 
