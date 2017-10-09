            // <button onClick={this.submitComment.bind(this)}>Submit</button>
import React, { Component } from 'react'
import { Comment, ToggleBar } from '../presentation'
import firebase from 'firebase'
import { Base64 } from 'js-base64';

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

    const path = Base64.encode(window.location.href) + '/comments'

    fbApp.database().ref(path).on('value', (snapshot) => {
      if (snapshot == null)
        return

      const data = snapshot.val()
      // console.log('COMMENTS UPDATED: '+JSON.stringify(data))
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

  toggleComments(){
    console.log('toggle comments: '+this.state.showComments)
    this.setState({
      showComments: !this.state.showComments
    })
    // console.log('toggle comments: '+this.state.showComments)
  }

  submitComment(event){
    if (event.keyCode != 13)
      return

    // console.log('submitComment: ' + event.keyCode)  //NEED TO REMEMBER THIS
    // console.log('submitComment: ' + event.target.value)
    const comment = {
      text: event.target.value,
      // timestamp: Math.round(Date.now()/1000)
      timestamp: Date.now()
    }

    const encoded = Base64.encode(window.location.href)
    console.log('submitComment: ' + encoded)
    console.log('DECODED: ' + Base64.decode(encoded))
    
    
    let comments = Object.assign([], this.state.comments)
    const path = Base64.encode(window.location.href) + '/comments/' + comments.length //NOT '/comments'

    this.state.firebase.database().ref(path).set(comment)

    // comments.unshift(comment)
    console.log('submitComment: ' + JSON.stringify(comments))
    // // this.setState({
    // //   comments: comments
    // // })

    event.target.value = '' //clear out the input


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
           
            


          <ToggleBar label="Hide Comments" onToggle={this.toggleComments.bind(this)} />
        </div>

      )
    

    return(
      <ToggleBar label="Show Comments" onToggle={this.toggleComments.bind(this)} />
      
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
    background: '#f1f9f5',
    borderLeft: '1px solid #ddd',
    overflowY: 'scroll',
    paddingBottom: 96
  },
  input: {
    width:100+'%',
    height:36,
    border:'none',
    padding:9,
    padding:6
  }
}

export default Widget