import React, { Component } from 'react'

export default (props) => {   //NOT SURE WHY THIS LINE IS LIKE THIS?
  return(
      <div onClick={props.onToggle.bind(this)} style={style.container} >
        This is ToggleBar!
      </div>
  )
}

const style = {
  container: {
  	color:'#fff', 
  	position:'fixed', 
  	width:'320', 
  	bottom:0, 
  	right:0, 
  	background:'#000',
    padding:6
  }
}