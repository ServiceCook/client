import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import SignupPage from './pages/SignUpPages';
import LoginPage from "./pages/LoginPage"
import IsAnon from "./components/IsAnon"
import ServiceList from "./pages/ServiceList"
import ServiceDetails from './pages/ServiceDetails';
import ReservationPage from './pages/ReservationPage';
import ConfirmationPage from "./pages/ConfirmationPage";
import ProfilePage from './pages/ProfilePage';
import AddNewService from './components/AddNewService';
import EditServicesPage from './pages/EditServicesPage';
import ReservationListPage from './pages/ReservationListPage';

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/services" element={ <ServiceList/> } />
        <Route path="/profile" element={ <ProfilePage /> } />
        <Route path='/services/:serviceId' element={ <ServiceDetails/> } />
        <Route path='/services/:serviceId/reserve' element={ <ReservationPage/>} />
        <Route path="/signup" element={<IsAnon> <SignupPage/> </IsAnon>} />
        <Route path="/login" element={ <IsAnon> <LoginPage/> </IsAnon> } />
        <Route path="/confirmation" element={<ConfirmationPage />}/>
        <Route path='/create' element={<AddNewService />} />
        <Route path='/services/edit/:serviceId' element={ <EditServicesPage /> } />
        <Route path="/reservations" element={<ReservationListPage />} />
      </Routes>
    </div>
  );
}

export default App;
