import React, { Component } from 'react'

export default (props) => {
  return(
    <div style={style.container}>
      <div style={{width:320, padding:24, height:64, background:'#000'}}></div>
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

