import React, { Component } from 'react'

export default (props) => {
  return(
    <div style={styles.container}>
      Comment Component!
    </div>
  )
}

const styles = {
  container: {
  	zIndex:100,
  	height:650,
  	position:'fixed', 
  	width:'320', 
  	bottom:0, 
  	right:0, 
  	background:'red',
    padding:6
  }
}

