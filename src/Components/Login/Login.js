import { React, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import g from "../../Image/google.png";
import logbg from "../../Image/logimg.webp";
import axios from "../../utils/axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const Login = ({ setLoggedIn }) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const navigate = useNavigate();
  const login = () => {
    setLoading(true);
    axios
      .post(
        "/user/login",
        { email: email, password: password },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        setLoading(false);

        Cookies.set("jwt", response.data.token, {
          expires: 30,
          path: "/",
        });
        setLoggedIn(true);
        navigate("/dashboard");
      })
      .catch((e) => {
        if (e.response.status == 401) {
          setErrMessage("Invalid Email or Password");
        } else {
          setErrMessage("Unknown Error");
        }
        // setErrMessage(false);
        setLoading(false);
        setTimeout(() => {
          setErrMessage("");
        }, 1000);
      });
  };
  // const { signInUsingGoogle, user, signinMailandPass } = useAuth();

  // const handleEmailchange = (e) => {
  //   setemail(e.target.value);
  //   // console.log(email);
  // };
  // const handlePassChange = (e) => {
  //   setpass(e.target.value);
  //   // console.log(pass);
  // };
  // const handleLogin = (e) => {
  //   // console.log(email);
  //   // console.log(pass);
  //   signinMailandPass(email, pass);
  //   e.preventDefault();
  // };
  return (
    <div className="text-center d-flex ">
      <div className="d-flex shadow-lg mx-auto my-5">
        <div className="w-50 d-flex mx-4">
          <img src={logbg} alt="login img" className="my-auto" width="100%" />
        </div>
        <div className="w-50">
          <Container className="border-start p-5">
            <h4 className="pt-5 pb-3 text-theme-dark border-theme mx-auto">
              Log-In
            </h4>
            <div className="my-5 ">
              <form>
                <input
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                  type="email"
                  className="form-control mx-auto"
                  placeholder="Email"
                />
                <br />
                <input
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  type="password"
                  className="form-control mx-auto"
                  placeholder="Password"
                />
                <br />
                {loading ? (
                  <PulseLoader />
                ) : (
                  <input
                    onClick={(e) => {
                      e.preventDefault();
                      login();
                    }}
                    type="submit"
                    className="btn btn-theme-dark px-5 py-2 text-light"
                    value="Login"
                  />
                )}
              </form>
              <small className="text-danger">{errMessage}</small>
              <p className="my-4 ">
                New to Lab Buddy ?
                <Link to="/signup" className="ms-2">
                  Sign Up
                </Link>
              </p>
              <button className="btn-light my-2 px-5 py-2 btn shadow mb-5">
                <img
                  src={g}
                  className="pe-2"
                  width="28px"
                  height="20px"
                  alt="Google icon"
                />
                Continue with Google
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Login;
