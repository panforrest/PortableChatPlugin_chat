import React, { Component } from 'react'
import { Comments, ToggleBar } from '../presentation'

class Widget extends Component {
  constructor(){
    super()
    this.state = {
      showComments: false
    }
  }

  toggleComments(){
    console.log('toggle comments: '+this.state.showComments)
    this.setState({
      showComments: !this.state.showComments
    })
    console.log('toggle comments: '+this.state.showComments)
  }

  render(){
    if (this.state.showComments == true)
      return <Comments />

    return(
      <ToggleBar onToggle={this.toggleComments.bind(this)} />
      
    )
  }
}

export default Widget