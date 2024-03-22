import "./profile.css"
import propic_icon from '../Assets/profileImage.jpg'
import cover_image from '../Assets/coverImage.jpg'

export default function profile() {
  return (
    <div className="profile">
      <div className="profileRight">

        <div className="profileRightTop">

          <div className="profileCover">
          <img className="coverImg"src={cover_image} alt="" />
          <img className="profileImg" src={propic_icon} alt=""/>
          </div>
        
        <div className="profileInfo">
          <h4 className="profileName">Christina</h4>
          <span className="profileInfoDesc">Software Engineer</span>
        </div>
         
        </div>
        <div className="profileRightBottom"></div>
      </div>
      
      
      
    </div>
  )
}
