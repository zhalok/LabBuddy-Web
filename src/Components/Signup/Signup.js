import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Container } from "react-bootstrap";
import g from "../../Image/google.png";
import signbg from "../../Image/signimg.webp";
// import DropDown from "../Dropdown/DropDown";
import FormSelect from "../Dropdown/DropDown";
// import axios from "axios"
import axios from "../../utils/axios";
import { PulseLoader } from "react-spinners";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("Select User Type");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const SignUp = async (info) => {
    const { email, name, password, type } = info;
    // console.log(name);
    // if (name) console.log("Hi");
    if (
      email == "" ||
      name == "" ||
      password == "" ||
      type == "Select User Type"
    ) {
      alert("Fullfill all the necessary fields");
      return;
    }
    // setLoadin();
    setLoading(true);
    axios
      .post(
        "/user/signup",
        {
          name,
          email,
          password,
          type,
        },
        {
          headers: {
            "Content-Type": "Application/json",
          },
        }
      )
      .then((response) => {
        setLoading(false);
        // console.log(response);
        setMessage(response.data.message);
        setEmail("");
        setPassword("");
        setName("");
        setType("Select User Type");
      });
  };

  return (
    <div className="text-center d-flex ">
      <div className="d-flex shadow-lg mx-auto my-5">
        <div className="w-50 d-flex mx-4">
          <img src={signbg} alt="login img" className="my-auto" width="100%" />
        </div>
        <div className="w-50">
          <Container className="border-start w-100   p-5">
            <h4 className="pt-5 pb-3 text-theme-dark border-theme mx-auto">
              Sign-Up
            </h4>
            <div className="py-5 ">
              <form>
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  className="form-control mx-auto"
                  placeholder="Enter Name"
                />
                <br />
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="form-control  mx-auto"
                  placeholder="Enter Email"
                />{" "}
                <br />
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control mx-auto"
                  placeholder="Password"
                />
                <br />
                {/* <DropDown items={["a", "b", "c"]} />
                 */}
                <FormSelect
                  setType={setType}
                  items={["general", "teacher", "student"]}
                />
                {/* <FormSelect items={["general", "teacher", "student"]} /> */}
                <br />
                {loading ? (
                  <PulseLoader />
                ) : (
                  <input
                    onClick={(e) => {
                      e.preventDefault();
                      SignUp({ name, email, password, type });
                      // console.log(name);
                    }}
                    // type="submit"
                    className="btn btn-theme-dark text-light px-5 py-2 btn "
                    value="Sign Up"
                  />
                )}
              </form>
              <small>{message}</small>
              <p className="my-3 ">
                Already register ?
                <Link to="/login" className="ms-2">
                  {" "}
                  Log In
                </Link>
              </p>
              <button className="btn-light my-2 px-5 py-2 btn shadow">
                <img
                  src={g}
                  className="pe-2"
                  width="28px"
                  height="20px"
                  alt="Google icon"
                />{" "}
                Sign in with Google
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
