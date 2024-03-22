
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import DeleteAcc from './Components/Profile/DeleteAcc/DeleteAcc';
import Profile from './Components/Profile/profile';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <Router>
       <Routes>
        <Route/>
        <Route path="/login" element={<LoginSignup/>}/>
        <Route path='/profile/delete' element={<DeleteAcc />}/>
        <Route path="/user/profile/:id" element ={<Profile/>}/>
      </Routes>
    </Router>

  );
}

export default App;
