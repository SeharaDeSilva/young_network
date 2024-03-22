import React from 'react'
import './AddVacancy.css'
//import CoverImg from './Images/serviceIMG1.jpg'
//import ProfileImg from './Images/profileimg1.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const AddVacancy = () => {
  return (
    <div>

<hr style={{height:'100px'}}></hr>

      <div style={{textAlign: 'center'}}>
    <h2>Add New Service</h2>
      </div>

    <div className='form-frame'>
      
      <form className='text1'>
  
      <div class="form-group space">
        <label for="exampleFormControlSelect1">Service Category</label>
        <select class="form-control space1" id="exampleFormControlSelect1" required>
          <option selected>Choose...</option>
          <option>Architechture Services</option>
          <option>Consultant Services</option>
          <option>Management Services</option>
          <option>HR Services</option>
        </select>
      </div>
  
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Add Description</label>
        <textarea class="form-control space1" id="exampleFormControlTextarea1" rows="3" required></textarea>
      </div>

      <label for="exampleFormControlSelect1">Upload Image</label>
      
        <div className='space1'>
          <label htmlFor="imageFile">Select an image:</label>
          <input
            type="file"
            id="imageFile"
            accept="image/*"
            
          />
        </div>
        <button type="submit" style={{ cursor: 'pointer' }}>Upload</button>
      
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="button ps-button" type="button">Publish</button>
          
        </div>

</form>

    </div>
    </div>
  )
}

export default AddVacancy
