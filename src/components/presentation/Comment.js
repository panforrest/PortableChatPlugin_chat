import React, { Component } from 'react'
import Moment from 'react-moment'

export default (props) => {

  const comment = props
  const timestamp = new Date(comment.timestamp)

  return(
    <div style={{padding:12, borderBottom:'1px dotted #ddd'}}>
      
      <Moment style={style.date} format="MMM D, YYYY" date={comment.timestamp} /><br />
      {comment.text}
    </div>
  )
} 

const style = {
  date: {
    color:'#777', 
    fontSize:12, 
    fontWeight:100
  }
}