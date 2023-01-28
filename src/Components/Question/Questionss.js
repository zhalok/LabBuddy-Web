import React, { useEffect, useState } from "react";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import SingleQuestion from "./SingleQuestion";
import axios from "../../utils/axios";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Questionss() {
  const [questions, setQuestions] = useState([]);
  const [exam, setExam] = useState();
  const [timer, setTimer] = useState(0);
  const { id } = useParams();
  console.log("Exam", exam);

  useEffect(() => {
    if (id)
      axios(`/exam/questions/${id}`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
        },
      }).then((res) => {
        setQuestions(res.data);
      });
    axios(`/exam/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("jwt")}`,
      },
    }).then((res) => {
      setExam(res.data);
      setTimer(exam?.endsAt - exam?.startsAt);
    });
    setInterval(() => {
      setTimer((timer) => timer - 1);
    }, timer);
  }, [id]);

  return (
    <div>
      {/* filter */}
      {/* <div className="py-3">
        {" "}
        <h4>Filter Question</h4>
      </div> */}
      {/* <div className="d-flex border-botoom">
        <div className="outline-theme pe-4 me-3 rounded">
          <Checkbox {...label} defaultUnChecked color="secondary" /> Physics
        </div>
        <div className="outline-theme pe-4 me-3 rounded">
          <Checkbox {...label} defaultUnChecked color="secondary" /> Chemistry
        </div>
        <div className="outline-theme pe-4 me-3 rounded">
          <Checkbox {...label} defaultUnChecked color="secondary" /> Bilology
        </div>
        <div className="outline-theme pe-4 me-3 rounded">
          <Checkbox {...label} defaultUnChecked color="secondary" /> ICT
        </div>
        <div className="outline-theme pe-4 me-3 rounded">
          <Checkbox {...label} defaultUnChecked color="secondary" /> English
        </div>
        <div className="outline-theme pe-4 me-3 rounded">
          <Checkbox {...label} defaultUnChecked color="secondary" /> Bangla
        </div>
        <div className="outline-theme pe-4 rounded">
          <Checkbox {...label} defaultUnChecked color="secondary" /> Math
        </div>
      </div> */}
      <h5>{exam?.title}</h5>
      <h6>{exam?.topic}</h6>

      {/* questions */}
      <div className="w-100 d-flex">
        <div className="w-75">
          {questions.length > 0 &&
            questions.map((e, index) => {
              // console.log(e);
              return <SingleQuestion idx={index} question={e}></SingleQuestion>;
            })}
          {/* <SingleQuestion></SingleQuestion>
          <SingleQuestion></SingleQuestion>
          <SingleQuestion></SingleQuestion>
          <SingleQuestion></SingleQuestion>
          <SingleQuestion></SingleQuestion>
          <SingleQuestion></SingleQuestion>
          <SingleQuestion></SingleQuestion> */}
        </div>

        <div className="w-25 border-start mx-4">
          <div className="p-4 fw-bold ">
            <h6 className="fw-bold ">Time Duration: {timer} Min</h6>
            <h6 className="fw-bold my-4 ">Expired Time : 06 Hour </h6>
            <h6 className="fw-bold ">Obtain Marks: 00.00 </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
