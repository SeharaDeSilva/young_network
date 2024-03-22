import React from 'react'
import './Homepage.css'
import ProfileSide from './components/ProfileSide'
import PostSide from './components/PostSide/PostSide'

const homepage = () => {
  return (
    <div className="home app" style = {{top: '-18%', right: '0'}}>
      
      <ProfileSide/>
      <PostSide/>
      <div className= "RightSide">RightSide</div>
      


    </div>
  )
}

export default homepage
