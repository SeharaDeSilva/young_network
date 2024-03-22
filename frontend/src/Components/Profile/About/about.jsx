
//import { useState } from "react"
import "./about.css"
//import { Link } from 'react-router-dom';
const About = () => {
  //const [aboutInfo,setAboutInfo] = useState('');

  return (
    <div>
      <div className="aboutCard">
        <div className="aboutHead">
          <h4>About</h4>
        </div>
        <div className="abouInfo">
          <span>As an open-minded creative individual and an undergraduate in Information Technology , 
            it is my personal goal to learn and experiment with new technologies to expand my skill set further.
            My unique approach to problem-solving and my ability to work effectively with team members are two important qualities that define me as an individual.</span>
        </div>
        <div className="editabout">
        <button>Edit About</button> 
        </div>
        </div>
      </div>
    
  )
}

export default About