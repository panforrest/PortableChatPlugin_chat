import React, { Component } from 'react'
import ToggleBar from './ToggleBar'

export default (props) => {
  return(
    <div style={style.container}>
      <ToggleBar />
      Comments Component!
    </div>
  )
}

const style = {
  container: {
  	zIndex:100,
  	height:650,
  	position:'fixed', 
  	width:'320', 
  	top:0, 
  	right:0, 
  	background:'red'
  }
}

