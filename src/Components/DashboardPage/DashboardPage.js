import React from "react";
import c1 from "../../Image/cardclass.png";
import l1 from '../../Image/cardlab.png'
import e1 from '../../Image/cardxam.webp'
import {DashboardClasses,DashboardLabs,DashboardExams} from "../DashboardPage/DashboardInfo";

export default function DashboardPage() {
  return (
    <>
      <div>
        <h2 className="py-2 my-5 border-bottom fs-3 fw-bold">Your Classes</h2>
      </div> 
      <div className="d-flex gap-4 flex-wrap">
        {DashboardClasses.map((card) => (
          <div key={card.id} className="card rounded shadow-lg" >

            <div className="">
              <img src={c1} alt="" width="100%" height="220px" className="rounded-top"/>
            </div>

            <div className="d-flex my-auto bg-theme-2 p-2 rounded-bottom">
             <div>
             <img src={c1} alt="" width="35px" height="35px"  className="rounded-circle my-auto mx-2"/>
             </div>
              <div className="text-white my-auto">
              <h6 className="fs-6 fw-bold my-0">{card.className}</h6>
              <small className="my-0">Author: Akash</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-5">
        <h2 className="py-2 my-5 fs-3 fw-bold border-bottom">Your Labs</h2>
      </div> 
      <div className="d-flex gap-4 flex-wrap">
        {DashboardLabs.map((card) => (
          <div key={card.id} className="card rounded shadow-lg" >

            <div className="">
              <img src={l1} alt="" width="100%" height="220px" className="rounded-top"/>
            </div>

            <div className="d-flex my-auto bg-theme-3 p-2 rounded-bottom">
             <div>
             <img src={l1} alt="" width="35px" height="35px"  className="rounded-circle my-auto mx-2"/>
             </div>
              <div className="text-white my-auto">
              <h6 className="fs-6 fw-bold my-0">{card.className}</h6>
              <small className="my-0">Author: {card.author}</small>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* for exams */}
      <div className="pt-5">
        <h2 className="py-2 my-5 fs-3 fw-bold border-bottom">Your Exams</h2>
      </div> 
      <div className="d-flex gap-4 flex-wrap mb-5">
        {DashboardExams.map((card) => (
          <div key={card.id} className="card rounded shadow-lg" >

            <div className="">
              <img src={e1} alt="" width="100%" height="220px" className="rounded-top"/>
            </div>

            <div className="d-flex my-auto bg-theme-dark p-2 rounded-bottom">
             <div>
             <img src={e1} alt="" width="35px" height="35px"  className="rounded-circle my-auto mx-2"/>
             </div>
              <div className="text-white my-auto">
              <h6 className="fs-6 fw-bold my-0">{card.className}</h6>
              <small className="my-0">Author: {card.author}</small>
              </div>
            </div>
          </div>
        ))}
      </div>


    </>
  );
}
