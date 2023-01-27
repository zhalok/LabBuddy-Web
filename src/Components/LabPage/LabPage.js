import React from "react";
import Labinfo from "./LabInfo";
import gate from "../../Image/lab/gate.png";
import hall from "../../Image/lab/halleffect.png";
import sp from "../../Image/lab/spring.png";
import {useNavigate} from 'react-router-dom'

export default function LabPage() {
  const navigate=useNavigate()
  return (
    <div className=""> 
      <div>
        <h2 className="p-2 my-4 border-bottom fs-3 fw-bold">Physics Labs</h2>
      </div>
      <div className="d-flex flex-wrap gap-4">


      <div className="d-flex gap-4 flex-wrap" onClick={()=>navigate('/spring')}>
        <div className="card rounded shadow-lg">
          <div className="">
            <img
              src={sp}
              alt=""
              width="100%"
              height="220px"
              className="rounded-top"
            />
          </div>

          <div className="d-flex my-auto bg-success p-2 rounded-bottom">
            <div>
              <img
                src={sp}
                alt=""
                width="35px"
                height="35px"
                className="rounded-circle my-auto mx-2"
              />
            </div>
            <div className="text-white my-auto">
              <h6 className="fs-6 fw-bold my-0">Mangenic Spring Force</h6>
              <small className="my-0">Subject : Physics</small>
            </div>
          </div>
        </div>
      </div>


      <div className="d-flex gap-4 flex-wrap" onClick={()=>navigate('/hall')}>
        <div className="card rounded shadow-lg">
          <div className="">
            <img
              src={hall}
              alt=""
              width="100%"
              height="220px"
              className="rounded-top"
            />
          </div>

          <div className="d-flex my-auto bg-danger p-2 rounded-bottom">
            <div>
              <img
                src={hall}
                alt=""
                width="35px"
                height="35px"
                className="rounded-circle my-auto mx-2"
              />
            </div>
            <div className="text-white my-auto">
              <h6 className="fs-6 fw-bold my-0">Hall Effect</h6>
              <small className="my-0">Subject : Physics</small>
            </div>
          </div>
        </div>
      </div>




      <div className="d-flex gap-4 flex-wrap" onClick={()=>navigate('/circuit')}>
        <div className="card rounded shadow-lg">
          <div className="">
            <img
              src={gate}
              alt=""
              width="100%"
              height="220px"
              className="rounded-top"
            />
          </div>

          <div className="d-flex my-auto bg-theme-dark p-2 rounded-bottom">
            <div>
              <img
                src={gate}
                alt=""
                width="35px"
                height="35px"
                className="rounded-circle my-auto mx-2"
              />
            </div>
            <div className="text-white my-auto">
              <h6 className="fs-6 fw-bold my-0">Logical Circuit</h6>
              <small className="my-0">Subject : Physics</small>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
