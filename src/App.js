import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import TeacherAndStudentUI from './Components/TeacherAndStudentUI/TeacherAndStudentUI';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/tas" element={<TeacherAndStudentUI></TeacherAndStudentUI>} />
       
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
