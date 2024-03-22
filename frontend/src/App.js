import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import AddServicePage from './scenes/ravindu/add_service'
import Homepage from './scenes/ravindu/homepage'
import EditVacancy from './scenes/ravindu/EditVacancy';
function App() {
  return (
    <div className="App">

<div className="blur" ></div>
      <div className="blur"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/AddServicesPage" element={<AddServicePage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/EditVacancy" element={<EditVacancy />} />
        </Routes>
      </BrowserRouter>
       
      
    </div>
  );
}

export default App;
