import React, { Component } from 'react'

class Widget extends Component {
  render(){
    return(
      <div style={styles.Widget}>
        this is the Widget.
      </div>
    )
  }
}

const styles = {
  Widget: {
  	color:'#fff', 
  	position:'fixed', 
  	width:'320', 
  	bottom:0, 
  	right:0, 
  	background:'#000'
  }
}

export default Widget