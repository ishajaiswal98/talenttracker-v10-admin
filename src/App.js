import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import ScrollToTop from "./Components/ScrollToTop";
import Login from "./Components/Login/Login";
import LogOut from "./Components/Login/LogOut";
import People from "./Components/People/People";
import RecruiterMaster from "./Components/RecruiterMaster/RecruiterMaster";
import JdMaster from "./Components/JdMaster/JdMaster";
import Filter from './Components/Filter/Filter'
import UserIdChang from "./Components/UserIdChang/UserIdChang";
import UserDashboard from "./Components/UserDashboard/UserDashboard";
import LandingPage from "./Components/LandingPage/LandingPage";
import ClientAgreement from "./Components/ClientAgreement/ClientAgreement";
import Client from "./Components/Client/Client";
import Freelance from "./Components/Freelance/Freelence";
import FilterReport from "./Components/Report/FilterReport";
import Report from "./Components/Report/Report";
import CreateEmail from "./Components/CreateEmail/CreateEmail";
function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashbaord" element={<Dashboard />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/People" element={<People />} />
      <Route path="/RecruiterMaster" element={<RecruiterMaster/>} />
      <Route path="/JdMaster" element={<JdMaster/>}/>
      <Route path="/Filter" element={<Filter/>}/>
      <Route path="/useridlevl" element={<UserIdChang/>}/>
      <Route path="/userdashboard" element={<UserDashboard/>}/>
      <Route path="/landing-page" element={<LandingPage/>}/>
      <Route path="/client-agreement" element={<ClientAgreement/>}/>
      <Route path="/client-master" element={<Client/>}/>
      <Route path="/freelance" element={<Freelance/>}/>
      <Route path="/report-filter" element={<FilterReport/>}/>
      <Route path="/report" element={<Report/>}/>
      <Route path="/create-email" element={<CreateEmail/>}/>
    </Routes>
  </BrowserRouter>
    </>
  );
};

export default App;