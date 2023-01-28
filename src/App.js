import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";

import Footer from "./Components/Footer/Footer";
import TeacherAndStudentUI from "./Components/TeacherAndStudentUI/TeacherAndStudentUI";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import { v4 } from "uuid";
import Forum from "./discussion_forum/Forum";

import Spring from "./Spring";
import Hall from "./Hall";
import LogicCircuit from "./logicalcircuit/page/App";
import { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import Questionss from "./Components/Question/Questionss";
function App() {
  localStorage.setItem("User", v4());
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const jwt = Cookies.get("jwt");
    // const token = jwtDecode(jwt)
    if (jwt) setLoggedIn(true);
    else setLoggedIn(false);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}></NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route
            path="/tas"
            element={<TeacherAndStudentUI></TeacherAndStudentUI>}
          />

          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route
            path="/login"
            element={<Login setLoggedIn={setLoggedIn}></Login>}
          />
          <Route path="/signup" element={<Signup></Signup>} />
          <Route path="/spring" element={<Spring />} />
          <Route path="/hall" element={<Hall />} />
          <Route path="/circuit" element={<LogicCircuit />} />
          <Route path="/questions" element={<Questionss />} />

          {/* <Route>
            <Questions />{" "}
          </Route> */}
          <Route path="/forum" element={<Forum />} />
          <Route path="/exam/:id" element={<Questionss />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
