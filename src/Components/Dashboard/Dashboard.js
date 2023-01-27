
import React, { useEffect, useState } from "react";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BiotechIcon from "@mui/icons-material/Biotech";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import InfoIcon from "@mui/icons-material/Info";
import QuizIcon from "@mui/icons-material/Quiz";
import DashboardPage from "../DashboardPage/DashboardPage";
import ClassPage from "../ClassPage/ClassPage";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Dashboard(props) {
  const [ui, setUi] = useState("dashboard");
  const navigate = useNavigate();
  useEffect(() => {
    const jwt = Cookies.get("jwt");
    if (!jwt) {
      navigate("/login");
    }
  }, []);

import React, { useState } from 'react'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BiotechIcon from '@mui/icons-material/Biotech';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import QuizIcon from '@mui/icons-material/Quiz';
import DashboardPage from '../DashboardPage/DashboardPage';
import ClassPage from '../ClassPage/ClassPage';
import LabPage from '../LabPage/LabPage';
import ExamPage from '../ExanPage/ExamPage';


export default function Dashboard() {

  const [ui,setUi]=useState('dashboard');


  return (
    <div>
      <div className="d-flex container-full">
        <div className="w-15 bg-theme-light p-3">
          <div>
            <button
              className="text-light btn btn-theme-dark px-5 py-2 rounded my-2 w-100"
              onClick={() => {
                setUi("dashboard");
              }}
            >
              <div className="d-flex">
                <DashboardCustomizeIcon className="me-2" /> Dashboard{" "}
              </div>{" "}
            </button>
            <button
              className="text-light btn btn-theme-dark px-5 py-2 rounded my-2 w-100 "
              onClick={() => {
                setUi("class");
              }}
            >
              <div className="d-flex ">
                <PeopleAltIcon className="me-2" /> Class{" "}
              </div>{" "}
            </button>
            <button
              className="text-light btn btn-theme-dark px-5 py-2 rounded my-2 w-100"
              onClick={() => {
                setUi("lab");
              }}
            >
              {" "}
              <div className="d-flex ">
                <BiotechIcon className="me-2" /> Lab{" "}
              </div>{" "}
            </button>
            <button
              className="text-light btn btn-theme-dark px-5 py-2 rounded my-2 w-100"
              onClick={() => {
                setUi("exam");
              }}
            >
              {" "}
              <div className="d-flex ">
                <QuizIcon className="me-2" /> Exam{" "}
              </div>{" "}
            </button>
            <button
              className="text-light btn btn-theme-dark px-5 py-2 rounded my-2 w-100"
              onClick={() => {
                setUi("pricing");
              }}
            >
              {" "}
              <div className="d-flex ">
                <MonetizationOnIcon className="me-2" /> Pricing{" "}
              </div>{" "}
            </button>
            <button
              className="text-light btn btn-theme-dark px-5 py-2 rounded my-2 w-100"
              onClick={() => {
                setUi("about");
              }}
            >
              {" "}
              <div className="d-flex">
                <InfoIcon className="me-2" /> About Us{" "}
              </div>{" "}
            </button>
          </div>
        </div>
        <div className="w-100 b-light text-start p-4">
          {ui === "dashboard" && <DashboardPage></DashboardPage>}
          {ui === "class" && <ClassPage></ClassPage>}

            {
              ui==='dashboard'&&<DashboardPage></DashboardPage>
              
            }
            {
               ui==='class'&&<ClassPage></ClassPage>
               
            }
            {
               ui==='lab'&&<LabPage></LabPage>
            }
            {
              ui==='exam'&&<ExamPage></ExamPage>
            }


        </div>
      </div>
    </div>
  );
}
