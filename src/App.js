import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import LogIn from './Components/Auth/LogIn';
import Register from './Components/Auth/Register';
import Nav from './Components/Home/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} > </Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/contact' element={<Contact/>} > </Route>
        <Route path='/services' element={<Services/>} ></Route>
        <Route path='/login' element={<LogIn/>} ></Route>
        <Route path='/register' element={<Register/>} ></Route>

      </Routes>
    </div>
  );
}

export default App;
