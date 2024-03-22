import React from 'react'
import './Post.css'
import Comment from '../../../Images/comment.png'
import Share from '../../../Images/share.png'
import Heart from '../../../Images/like.png'
import NotLike from '../../../Images/notlike.png'

const post = (data) => {
  return (
    <div className="Post">
      <img src={data.img} alt=""/>

      <div className='postReact'>
        <img src={data.likes?Heart: NotLike} alt=""/>
        <img src={Comment} alt=""/>
        <img src={Share} alt=""/>

      </div>
    </div>
  )
}

export default post
