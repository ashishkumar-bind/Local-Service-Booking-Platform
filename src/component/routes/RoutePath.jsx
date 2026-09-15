
import {Routes, Route } from "react-router-dom";
import Home from '../home/Home';
import Login from '../login/Login';
import Register from '../register/Register';
import CustomerDashboard from '../../Dashboard/CustomerDashboard';
import CustomerRegister from "../register/CustomerRegister/CustomerRegister";
import ServiceProviderRegister from "../register/ServiceProviderRegstration/ServiceProviderRegistration";
import AdminLogin from "../login/AdminLogin/AdminLogin";
import CustomerLogin from "../login/CustomerLogin/CustomerLogin";
import ServiceProviderLogin from "../login/ServiceProviderLogin/ServiceProviderLogin";
export default function RoutePath() {
  return (
   <>
    <div>
        <Routes>
            <Route path="/" element={<Home /> } />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} /> */}
            <Route path="/register/customer" element={<CustomerRegister/>}/>
            <Route path="/register/service-provider" element={<ServiceProviderRegister/>}/>
            <Route path="/login/admin" element={<AdminLogin/>}/>
            <Route path="/login/customer" element={<CustomerLogin/>}/>
            <Route path="/login/service-provider-login" element={<ServiceProviderLogin/>}/>
            {/* <Route path="/Dashboard" element={<CustomerDashboard />} /> */}
            {/* <Route path="/card" element={<Cards />} /> */}
          
        </Routes>
    </div>
   </>
    
  )
}