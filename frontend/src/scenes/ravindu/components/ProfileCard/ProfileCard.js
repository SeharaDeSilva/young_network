import React from 'react'
import './ProfileCard.css'
import CoverImage from '../../Images/CoverImage.jpg'
import ProfileImage from '../../Images/ProfileImage.jpg'

const ProfileCard = () => {
  return (
    <div className= "ProfileCard">
      <div className="ProfileImages">
        <img src={CoverImage} alt= ""/>
        <img src={ProfileImage} alt= ""/>
      </div>

      <div className="ProfileName">
        <span>Kevin MJ</span>
        <span>Senior UI/UX Designer</span>
      </div>

      <div className="followStatus">
        <hr/>
        <div>
            <div className="follow">
                <span>1,400</span>
                <span>Followings</span>
            </div>
            <div className='vl'></div>
            <div className='follow'>
                <span>20</span>
                <span>Followers</span>
            </div>
        </div>
        <hr/>
      </div>

      <span>
        My Profile
      </span>
    </div>
  )
}

export default ProfileCard
