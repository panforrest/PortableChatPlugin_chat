import React, { Component } from 'react'
// import ToggleBar from './ToggleBar'

export default (props) => {
  return(
    <div style={style.container}>
      <div style={{color:'#fff', width:320, padding:6, background:'#000'}}>
        This is Widget!
      </div>
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

