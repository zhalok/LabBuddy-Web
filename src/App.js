import logo from './logo.svg';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import './App.css';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
