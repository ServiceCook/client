import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import SignupPage from './pages/SignUpPages';
import LoginPages from "./pages/LoginPage"
import IsPrivate from './components/IsPrivate';
import IsAnon from "./components/IsAnon"
import ServiceList from "./pages/ServiceList"
import ServiceDetails from './pages/ServiceDetails';
import ReservationPage from './pages/ReservationPage';
import ConfirmationPage from "./pages/ConfirmationPage";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/services" element={ <ServiceList/>} />
        <Route path='/services/:serviceId' element={ <ServiceDetails/> } />
        <Route path='/services/:serviceId/reserve' element={ <ReservationPage/>} />
        <Route path="/signup" element={<IsAnon> <SignupPage/> </IsAnon>} />
        <Route path="/login" element={ <IsAnon> <LoginPages/> </IsAnon> } />
        <Route path="/confirmation" element={<ConfirmationPage />}/>
      </Routes>
    </div>
  );
}

export default App;
