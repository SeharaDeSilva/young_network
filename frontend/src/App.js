import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import AddServicePage from './scenes/ravindu/add_service'
import Homepage from './scenes/ravindu/homepage'
import EditVacancy from './scenes/ravindu/EditVacancy'
import EditService from './scenes/ravindu/EditService'
import AddVacancy from './scenes/ravindu/AddVacancy'
import AddService from './scenes/ravindu/add_service'
import EmployeeDashboard from './scenes/ravindu/EmployeeDashboard';

function App() {
  return (
    <div className="App">


      

      <BrowserRouter>
        <Routes>
          <Route path="/AddServicesPage" element={<AddServicePage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/EditVacancy" element={<EditVacancy />} />
          <Route path="/EditService" element={<EditService />} />
          <Route path="/AddVacancy" element={<AddVacancy />} />
          <Route path="/AddService" element={<AddService />} />
          <Route path="/EmployeeDashboard" element={<EmployeeDashboard />} />
        </Routes>
      </BrowserRouter>
       
      
    </div>
  );
}

export default App;
