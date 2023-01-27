import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import { v4 } from "uuid";
import Footer from "./Components/Footer/Footer";
import TeacherAndStudentUI from "./Components/TeacherAndStudentUI/TeacherAndStudentUI";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
// import Questions from "./component/"
import Questions from "./question_bank/Questions";
import Forum from "./discussion_forum/Forum";
import Spring from "./Spring";
import Hall from "./Hall";
import LogicCircuit from "./logicalcircuit/page/App";
import AuthContext from "./Contexts/AuthorizationContext";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { useState } from "react";
function App() {
  localStorage.setItem("User", v4());
  const jwt = localStorage.getItem("jwt");
  const [loggedIn, setLoggedIn] = useState(false);
  if (jwt) setLoggedIn(true);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home loggedIn={loggedIn}></Home>} />
          <Route
            path="/tas"
            element={<TeacherAndStudentUI></TeacherAndStudentUI>}
          />

          <Route
            path="/dashboard"
            element={<Dashboard loggedIn={loggedIn}></Dashboard>}
          />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/spring" element={<Spring loggedIn={loggedIn} />} />
          <Route path="/hall" element={<Hall loggedIn={loggedIn} />} />
          <Route
            path="/circuit"
            element={<LogicCircuit loggedIn={loggedIn} />}
          />
          <Route path="/question" element={<Questions loggedIn={loggedIn} />} />
          <Route path="/forum" element={<Forum loggedIn={loggedIn} />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
      );
    </div>
  );
}

export default App;
