
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

import CustomerRegisterNew from "../register/CustomerRegister/CustomerRegister";
import ServiceProviderRegister from "../register/ServiceProviderRegstration/ServiceProviderRegistration";
import AdminLoginNew from "../login/AdminLogin/AdminLogin";
import CustomerLoginNew from "../login/CustomerLogin/CustomerLogin";
import ServiceProviderLogin from "../login/ServiceProviderLogin/ServiceProviderLogin";

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

          <Route path="/register/customer" element={<CustomerRegisterNew />} />
          <Route
            path="/register/service-provider"
            element={<ServiceProviderRegister />}
          />
          <Route path="/login/admin" element={<AdminLoginNew />} />
          <Route path="/login/customer" element={<CustomerLoginNew />} />
          <Route
            path="/login/service-provider-login"
            element={<ServiceProviderLogin />}
          />

          {/* <Route path="/card" element={<Cards />} /> */}
        </Routes>
      </div>
    </>
  );
}

