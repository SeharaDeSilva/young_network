import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import AddServicePage from './scenes/ravindu/add_service'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddServicePage />} />
        </Routes>
      </BrowserRouter>
       
      
    </div>
  );
}

export default App;
