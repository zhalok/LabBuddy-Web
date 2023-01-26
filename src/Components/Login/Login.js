import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import g from "../../Image/google.png";
import logbg from "../../Image/logimg.webp";

const Login = () => {
  /*
    const [ email, setemail ] = useState('');
    const [ pass, setpass ] = useState('');
    const { signInUsingGoogle, user,signinMailandPass } = useAuth();
   

    const handleEmailchange = e => {
         setemail(e.target.value);
        // console.log(email);
        
    }
    const handlePassChange = e => {
        setpass(e.target.value);
        // console.log(pass);
       
    }
    const handleLogin = e => {
        // console.log(email);
        // console.log(pass);
        signinMailandPass(email, pass);
        e.preventDefault();
    }*/
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
                  type="email"
                  className="form-control mx-auto"
                  placeholder="Email"
                />
                <br />
                <input
                  type="password"
                  className="form-control mx-auto"
                  placeholder="Password"
                />
                <br />
                <input
                  type="submit"
                  className="btn btn-theme-dark px-5 py-2 text-light"
                  value="Login"
                />
              </form>
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
