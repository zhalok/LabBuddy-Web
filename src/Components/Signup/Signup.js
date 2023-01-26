import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import g from "../../Image/google.png";
import signbg from "../../Image/signimg.webp";

export default function Signup() {
  return (
    <div className='text-center d-flex '>   
        <div className="d-flex shadow-lg mx-auto my-5">
          <div className="w-50 d-flex mx-4">
            <img src={signbg} alt="login img" className="my-auto" width="100%"/>
          </div>
          <div className="w-50">
          <Container className='border-start w-100   p-5' >
           <h4 className="pt-5 pb-3 text-theme-dark border-theme mx-auto">Sign-Up</h4>
            <div className="py-5 ">
                    <form >
                    <input type="text" className="form-control mx-auto" placeholder="Enter Name" /><br />
                    <input type="email" className="form-control  mx-auto" placeholder="Enter Email" /> <br/ >
                    <input type="password" className="form-control mx-auto" placeholder="Password" /><br />
                    
                    <input type="submit" className="btn btn-theme-dark text-light px-5 py-2 btn" value="Sign Up" />
                        </form>
                    <p className="my-3 ">Already register ?<Link to="/login" className='ms-2'> Log In</Link></p>
                    <button className="btn-light my-2 px-5 py-2 btn shadow"><img src={g} className="pe-2" width="28px" height="20px" alt="Google icon"/> Sign in with Google</button>
            </div>
            </Container>
          </div>
          
        </div>
        </div>
  )
}
