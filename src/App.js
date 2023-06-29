import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import SignupPage from './pages/SignUpPages';
import LoginPages from "./pages/LoginPage"
import IsPrivate from './components/IsPrivate';
import IsAnon from "./components/IsAnon"

function App() {
  return (
    <div className="App">
      <NavBar />
      <p>cc</p>
      <Routes>
        <Route path="/" element={ <HomePage/>} />
        <Route path="/signup" element={<IsAnon> <SignupPage/> </IsAnon>}></Route>
        <Route path="/login" element={ <IsAnon> <LoginPages/> </IsAnon> }></Route>
      </Routes>
    </div>
  );
}

export default App;
