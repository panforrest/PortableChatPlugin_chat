import React, { Component } from 'react'

export default (props) => {   //NOT SURE WHY THIS LINE IS LIKE THIS?
  return(
      <div style={style.container}>
        This is Widget!
      </div>
  )
}

const style = {
  container: {
  	color:'#fff', 
  	width:320, 
  	padding:6, 
  	background:'#000'
  }
}