import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainNavbar from './components/navbar/MainNav';
import Home from "./pages/Home"
import Header from './components/navbar/Header';
import Benefits from './pages/Benefits';
import ContactUs from './contactUs/ContactUs';
import Partnership from './contactUs/Partnership';
import Login from './components/login/Login';
import BenefitsDetails from './components/benefitsDetails/BenefitsDetails';
import AccountSettings from './components/profile/AccountSettings';
import DigitalCard from './components/profile/DigitalCard';
import Profile from './components/profile/Profile';
import Register from './register/Register';
import Privacy from './pages/Privacy';
import Edit from './components/profile/Edit';



function App() {
  return (
    <>
    <Router>
      <MainNavbar />
      <Header />
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/partnership" element={<Partnership />} />
        <Route path="/login" element={<Login />} />
        <Route path="/benefitsdetails" element={<BenefitsDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/accountsettings" element={<AccountSettings />} />
        <Route path="/digitalcard" element={<DigitalCard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/edit" element={<Edit />} />

      </Routes>

    </Router>
    </>
  );
}

export default App;
