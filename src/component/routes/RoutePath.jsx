
import {Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import Login from '../login/Login';
import Register from '../register/Register';
import CustomerDashboard from '../../Dashboard/CustomerDashboard';


export default function RoutePath() {
  return (
   
   <>
    
    <div>
        <Routes>
            <Route path="/" element={<Home /> } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Dashboard" element={<CustomerDashboard />} />
            {/* <Route path="/card" element={<Cards />} /> */}
          
        </Routes>
    </div>
   </>
    
  )
}