import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import AddServicePage from './scenes/ravindu/add_service'
import Homepage from './scenes/ravindu/homepage'
function App() {
  return (
    <div className="App">

<div className="blur" style = {{top: '-18%', right: '0'}}></div>
      <div className="blur"></div>

      <BrowserRouter>
        <Routes>
          <Route path="/AddServicesPage" element={<AddServicePage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
       
      
    </div>
  );
}

export default App;
