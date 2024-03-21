import React from 'react'
import './LogoSearch.css'
import Logo from '../../Images/logo.png'
import { UilSearch } from '@iconscout/react-unicons';


const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img className = "logo" src = {Logo} alt = "Young Network Logo"/>
      <div className="Search">
      <input type= "text" placeholder='SEARCH'/>
      <div className="s-icon">
        <UilSearch/>

      </div>
      </div>
    </div>
  )
}

export default LogoSearch
