            // <button onClick={this.submitComment.bind(this)}>Submit</button>
import React, { Component } from 'react'
import { Comment, ToggleBar } from '../presentation'

class Widget extends Component {
  constructor(){
    super()
    this.state = {
      showComments: false,
      comment:''
    }
  }

  // updateText(event){
  //   console.log('updateText: ' + event.target.value)
  //   this.setState({
  //     comment: event.target.value
  //   })
  // }

  submitComment(event){
    if (event.keyCode != 13)
      return

    // console.log('submitComment: ' + event.keyCode)  //NEED TO REMEMBER THIS
    console.log('submitComment: ' + event.target.value)
  }

  toggleComments(){
    console.log('toggle comments: '+this.state.showComments)
    this.setState({
      showComments: !this.state.showComments
    })
    // console.log('toggle comments: '+this.state.showComments)
  }

  render(){
    // const comment = this.state.comment


    if (this.state.showComments == true)
      return (
        <div style={style.comments}>
          <div>
            <input onKeyDown={this.submitComment.bind(this)} style={style.input} type="text" placeholder="Enter Comment" />

          </div>

            <Comment />
            <Comment />
            <Comment />


          <ToggleBar onToggle={this.toggleComments.bind(this)} />
        </div>

      )
    

    return(
      <ToggleBar onToggle={this.toggleComments.bind(this)} />
      
    )
  }
}

const style = {
  comments: {
    zIndex:100,
    height:650,
    width:320,     //NOT width:'320', 
    position:'fixed', 
    top:0, 
    right:0, 
    background:'red'
  },
  input: {
    width:100+'%',
    height:32,
    border:'none',
    padding:6
  }
}

export default Widget