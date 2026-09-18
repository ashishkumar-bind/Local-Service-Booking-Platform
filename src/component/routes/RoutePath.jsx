import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import CustomerLogin from "../login/CustomerLogin";
import ProviderLogin from "../login/ProviderLogin";
import AdminLogin from "../login/AdminLogin"; 
import CustomerRegister from "../register/CustomerRegister";
import ProviderRegister from "../register/ProviderRegister";   
import CustomerDashboard from "../../Dashboard/CustomerDashboard";
import ProviderDashboard from "../../Dashboard/ProviderDashboard";
import AdminDashboard from "../../Dashboard/AdminDashboard";


export default function RoutePath() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<CustomerLogin />} />
          <Route path="/register" element={<CustomerRegister />} />
          <Route path="/login/provider" element={<ProviderLogin />} />
          <Route path="/register/provider" element={<ProviderRegister />} />
          <Route path="/login/admin" element={<AdminLogin />} /> 

          <Route path="/Dashboard" element={<CustomerDashboard />} />
          <Route path="/Dashboard/provider" element={<ProviderDashboard />} />
          <Route path="/Dashboard/admin" element={<AdminDashboard />} />
          {/* <Route path="/card" element={<Cards />} /> */}
        </Routes>
      </div>
    </>
  );
}
