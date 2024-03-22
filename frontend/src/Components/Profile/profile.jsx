import React, { useEffect, useState } from 'react';
import "./profile.css"
import propic_icon from '../Assets/profileImage.jpg'
import cover_image from '../Assets/coverImage.jpg'
import About from './About/about';
import Experience from './Experience/experience';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';



const Profile = () => {

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    experiences: "",
    education: "",
    projects: "",
    skills: "",
    friends: [],

  })

  const [isEditting, setIsEditting] = useState(false)
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    getUserProfile();
  }, [])


  // Function to update profile name
  // const updateProfileName = () => {
  //   setProfileName();
  // };

  // // Function to update profile description
  // const updateProfileDesc = () => {
  //   setProfileDesc();
  // };

  const getUserProfile = () => {
    axios.get(`http://localhost:5000/api/user/${id}`).then((user) => {
      const userData = user.data.user;
      console.log(user.data.user)
      setUserInfo(userData)
    }).catch((error) => console.log(error))
  }

  const updateUserProfile = () => {
    axios.put(`http://localhost:5000/api/user/update/${id}`, userInfo).then((user) => {
      const userData = user.data.user;
      console.log(userData)
      alert(`Update user: ${id}`)
      setIsEditting(false)
    }).catch((error) => console.log(error))
  }
  console.log(id)
  
  const deleteUserProfile = () => {
    axios.delete(`http://localhost:5000/api/user/delete/${id}`).then((user) => {
      const userData = user.data.user;
      console.log(userData);
      alert(`Delete user :${id}`)
      navigate('/profile/delete')
    }).catch((error) => console.log(error))
  }
  console.log(id)

  return (
    <div className="profile">
      <div className="profileRight">

        <div className="profileRightTop">

          <div className="profileCover">
            <img className="coverImg" src={cover_image} alt="" />
            <img className="profileImg" src={propic_icon} alt="" />
          </div>

          <div className="profileInfo">
            {
              isEditting ?
                <div style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "start"
                }}>
                  <input type='text' style={{
                    maxWidth: "400px",
                    margin: "10px"
                  }} onChange={(e) => setUserInfo({...userInfo, lastName:e.target.value})}/>

                  <div onClick={updateUserProfile}>
                    <AddCircleIcon />
                  </div>

                  <div onClick={() => setIsEditting(false)}>
                    <CancelIcon />
                  </div>

                  
                </div>
                :
                <h4 className="profileName">{userInfo.firstName + " " + userInfo.lastName}</h4>
            }
            <span className="profileInfoDesc">{""}</span>
          </div>
          <button onClick={() => setIsEditting(true)}>Change Name</button>
          <IconButton onClick={deleteUserProfile}>
            <DeleteIcon />
          </IconButton>
          
          <div className="about">
            <About />
          </div>

          <div className="experience">
            <Experience />
          </div>


          {/* <button onClick={updateProfileDesc}>Change Description</button> */}

        </div>
        <div className="profileRightBottom"></div>
      </div>



    </div>
  )
}
export default Profile