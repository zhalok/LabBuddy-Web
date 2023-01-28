import React, { useEffect, useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import ExamModal from "../Modals/ExamModal";
import c1 from "../../Image/cardclass.png";
import l1 from "../../Image/cardlab.png";
import e1 from "../../Image/cardxam.webp";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export default function ExamPage() {
  const [modalShow, setModalShow] = useState(false);

  const [exams, setExams] = useState([]);
  const [change, setChange] = useState({});
  // console.log(exams);

  useEffect(() => {
    axios
      .get("/exam", {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setExams(res.data);
      })
      .catch((e) => console.log(e));
  }, [change]);

  const navigate = useNavigate();

  return (
    <div>
      <div className="text-start">
        <h3 className="my-3 fw-bold">Exam</h3>
      </div>
      <div className="flex text-start">
        <button
          className="btn-theme btn rounded text-light px-4 me-3"
          onClick={() => setModalShow(true)}
        >
          <CreateIcon className="me-2" />
          Create Exam
        </button>
        <button className="outline-theme text-theme btn rounded px-4">
          {" "}
          <AddIcon className="me-2 my-auto" />
          Participate Exam
        </button>
      </div>
      <ExamModal
        change={change}
        setChange={setChange}
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></ExamModal>

      <div style={{ display: "flex", flexDirection: "row" }}>
        {exams.map((e) => {
          return (
            <div
              key={e._id}
              className="card rounded shadow-lg mt-5"
              onClick={() => {
                navigate(`/exam/${e._id}`);
              }}
            >
              <div className="">
                <img
                  src={c1}
                  alt=""
                  width="100%"
                  height="220px"
                  className="rounded-top"
                />
              </div>

              <div className="d-flex my-auto bg-theme-2 p-2 rounded-bottom">
                <div>
                  <img
                    src={c1}
                    alt=""
                    width="35px"
                    height="35px"
                    className="rounded-circle my-auto mx-2"
                  />
                </div>
                <div className="text-white my-auto">
                  <h6 className="fs-6 fw-bold my-0">{e.title}</h6>
                  {/* <small className="my-0">{e.creator}</small> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
