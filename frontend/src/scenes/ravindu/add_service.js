import React from 'react'
import './add_service.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//import Header from './components/Header/Header'


const AddVacancy = () => {
  return (
    <div>

<hr style={{height:'100px'}}></hr>

      <div style={{textAlign: 'center'}}>
    <h2>Add New Vacancy</h2>
      </div>

    <div className='form-frame'>
      
      <form className='text1'>

        <div class="form-group">
            <label for="formGroupExampleInput">Job Position</label>
            <input type="text" class="form-control space1" id="formGroupExampleInput" placeholder="Add Job Position" required/>
        </div>
        <div class="form-group">
            <label for="formGroupExampleInput2">Job Location</label>
            <input type="text" class="form-control space1" id="formGroupExampleInput2" placeholder="Add Job Location" required/>
        </div>
  
        <div class="form-group space">
        <label for="exampleFormControlSelect1">Skills</label>
        <select class="form-control space1" id="exampleFormControlSelect1" required>
          <option selected>Choose...</option>
          <option>React JS</option>
          <option>Node JS</option>
          <option>Java</option>
          <option>Mongodb</option>
        </select>
      </div>
  
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Add Description</label>
        <textarea class="form-control space1" id="exampleFormControlTextarea1" rows="3" placeholder= "Add Description" required></textarea>
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
        <button class="button ps-button" type="submit" style={{ cursor: 'pointer' }}>Upload</button>
      
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="button ps-button" type="button">Publish</button>
          
        </div>

</form>

    </div>
    </div>
  )
}

export default AddVacancy
