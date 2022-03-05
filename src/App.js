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
import LoginNav from './components/navbar/LoginNav';
import Business from './pages/Business';
import Lifestyle from './pages/Lifestyle';
import Education from './pages/Education';
import SAAS from './pages/SAAS';
import EmailMarketing from './pages/EmailMarketing';
import CompanyRegistration from './pages/CompanyRegistration';
import Tools from './pages/Tools';
import Headphones from './pages/Headphones';
import Fashion from './pages/Fashion';
import Courses from './pages/Courses';
import Languages from './pages/Languages';
import PGPrograms from './pages/PGPrograms';
import Travel from './pages/Travel';
import Hotels from './pages/Hotels';
import Flights from './pages/Flights';
import Staycations from './pages/Staycations';
import Villas from './pages/Villas';
import CarRent from './pages/CarRent';



function App() {
  return (
    <>
    <Router>
      <MainNavbar />
      {/* <LoginNav /> */}
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
        <Route path="/business" element={<Business />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/education" element={<Education />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/saas" element={<SAAS />} />
        <Route path="/emailmarketing" element={<EmailMarketing />} />
        <Route path="/companyregistration" element={<CompanyRegistration />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/business" element={<Business />} />
        <Route path="/language" element={<Languages />} />
        <Route path="/pgprograms" element={<PGPrograms />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/staycations" element={<Staycations />} />
        <Route path="/villas" element={<Villas />} />
        <Route path="/carrent" element={<CarRent />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/edit" element={<Edit />} />

      </Routes>

    </Router>
    </>
  );
}

export default App;
