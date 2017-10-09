            // <button onClick={this.submitComment.bind(this)}>Submit</button>
import React, { Component } from 'react'
import { Comment, ToggleBar } from '../presentation'
import firebase from 'firebase'

class Widget extends Component {
  constructor(){
    super()
    this.state = {
      showComments: false,
      comments:[],
      firebase: null
    }
  }

  componentDidMount(){
    const fbApp = firebase.initializeApp({
      apiKey: "AIzaSyCLUqNMdqONu-fw6fAIFbYjSNTytTqDvJg",
      authDomain: "chat-app-58a18.firebaseapp.com",
      databaseURL: "https://chat-app-58a18.firebaseio.com",
      projectId: "chat-app-58a18",
      storageBucket: "chat-app-58a18.appspot.com",
      messagingSenderId: "999072206574"
    })

    this.setState({
      firebase: fbApp
    })

    fbApp.database().ref('/comments').on('value', (snapshot) => {
      const data = snapshot.val()
      console.log('COMMENTS UPDATED: '+JSON.stringify(data))
      //COMMENTS UPDATED: [{"text":"123","timestamp":1507506142}]
      this.setState({
        comments: data.reverse()
      })
    })

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
    // console.log('submitComment: ' + event.target.value)
    const comment = {
      text: event.target.value,
      timestamp: Math.round(Date.now()/1000)
    }

    console.log('submitComment: ' + window.location.href)
    
    
    // let comments = Object.assign([], this.state.comments)
    // this.state.firebase.database().ref('/comments/'+comments.length).set(comment)

    // comments.unshift(comment)
    // console.log('submitComment: ' + JSON.stringify(comments))
    // // this.setState({
    // //   comments: comments
    // // })

    // event.target.value = '' //clear out the input


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

            { this.state.comments.map((comment, i) => {
                return <Comment key={comment.timestamp} {...comment} />
              })
            }
           
            


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
    zIndex: 100,
    height: 650,
    width: 320,
    position: 'fixed',
    top: 0,
    right: 0,
    background: 'red',
    overflowY: 'scroll',
    paddingBottom: 96
  },
  input: {
    width:100+'%',
    height:32,
    border:'none',
    padding:6
  }
}

export default Widget