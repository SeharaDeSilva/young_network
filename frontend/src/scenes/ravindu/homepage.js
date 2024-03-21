import React from 'react'
import './Homepage.css'
import ProfileSide from './components/ProfileSide'


const homepage = () => {
  return (
    <div className="home">
      
      <ProfileSide/>
      <div className= "postSide">Posts</div>
      <div className= "RightSide">RightSide</div>

    </div>
  )
}

export default homepage
