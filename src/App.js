import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import TeacherAndStudentUI from './Components/TeacherAndStudentUI/TeacherAndStudentUI';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar></NavBar>
      <Routes>
    

        <Route path="/" element={<Home></Home>} />
        <Route path="/tas" element={<TeacherAndStudentUI></TeacherAndStudentUI>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
       
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
