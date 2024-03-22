import React from 'react'
//import VacancyEditDelete from './components/VacancyEditDelete/VacancyEditDelete'
import './EditService.css'
import post4 from './Images/post4.png'

const EditVacancy = () => {
  return (
    <div className='editvacancy container'>
      
      <div>
        <div className='form-frame'>
          <h2 style={{marginLeft: '10px'}}>KLM.PVT(LTD)</h2>
          <p style={{marginLeft: '10px', marginRight: '10px'}}>Recently, I came across an impressive SQL Cheat Sheet that is incredibly useful for beginners. This cheat sheet covers a wide range of topics, starting from the very basics like creating databases and tables, to more advanced topics including data manipulation commands such as SELECT, INSERT, UPDATE, <b>....SEE MORE</b></p>
          <img src={post4} alt= "" className='editimage'></img>
          <div className='buttoncontainer'>
          <button className="button ps-button">Edit</button>
          <button className="button ps-button">Delete</button>
          </div>
        </div>


        <div className='form-frame'>
          <h2 style={{marginLeft: '10px'}}>ZAPIER.PVT(LTD)</h2>
          <p style={{marginLeft: '10px', marginRight: '10px'}}>Recently, I came across an impressive SQL Cheat Sheet that is incredibly useful for beginners. This cheat sheet covers a wide range of topics, starting from the very basics like creating databases and tables, to more advanced topics including data manipulation commands such as SELECT, INSERT, UPDATE, <b>....SEE MORE</b></p>
          <img src={post4} alt= "" className='editimage'></img>
          <div className='buttoncontainer'>
          <button className="button ps-button">Edit</button>
          <button className="button ps-button">Delete</button>
          </div>
        </div>
      
      


        
      </div>

      
        
      
      
    </div>
  )
}

export default EditVacancy
