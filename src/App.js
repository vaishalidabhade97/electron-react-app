import './App.css';
import Calculator from './Components/Calculator/Calculator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import About from './Components/About/About';
import Navigation from './Components/Navigation/Navigation';
import SignUp from './Components/SignUp/SignUp';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' exact element={<SignIn />} />
          <Route path='/about' element={<About />} />
          <Route path='/calculator' element={<Calculator />}/>
          <Route path='/signup' element={<SignUp />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
