import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import temp from "../../Image/temp.png";
import fileup from "../../Image/fileup.png";
import axios from "axios";
import Cookies from "js-cookie";
import { PulseLoader } from "react-spinners";

const fileurl =
  "https://drive.google.com/drive/u/0/folders/1g2p3LXh-szlLYkTB-gnyuDw9P5JopXUC?fbclid=IwAR1T-6GGYst4isi27VA-ri5xh9qthF4UlxjOeNKPzCPHGXyqwlfhk44u4TA/hacknsu.jpg";

export default function ExamModal(props) {
  const downloadFile = (url) => {
    const fileName = url.split("/").pop();
    const atag = document.createElement("a");
    atag.href = url;
    atag.setAttribute("downlaod", fileName);
    document.body.appendChild(atag);
    atag.click();
    atag.remove();
  };
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  // const [starsAt, setStartsAt] = useState("");
  // const [endsAt, setEndsAt] = useState("");
  const [duration, setDuration] = useState(0);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    // formData.append("startsAt", Date.now());
    formData.append("duration", duration);
    // formData.append("endsAt", Date.now() + 10 * 60 * 60 * 1000);
    formData.append("topic", topic);
    // console.log(formData.get("file"));
    axios
      .post("/exam/createFromCSV", formData, {
        headers: {
          Authorization: `Bearer ${Cookies.get("jwt")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setLoading(false);
        setFile(null);
        setTitle("");
        setTopic("");
        setDuration("");

        props.setChange((prevState) => {
          return { ...prevState };
        });
        props.onHide();

        // console.log(res);
      })
      .catch((e) => setLoading(false));
  };

  return (
    <div>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <HelpCenterIcon className="fs-1 mb-1 me-2 text-theme" />
            Create a Question
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
              <Col md={6}>
                <img
                  src={temp}
                  alt=""
                  className="mx-auto ps-4"
                  width="150px"
                  height="140px"
                />
                <button
                  className="my-3 btn-theme btn w-100 text-light"
                  onClick={() => downloadFile(fileurl)}
                >
                  Question Templete
                </button>
              </Col>
              <Col md={6}>
                <img
                  src={fileup}
                  alt=""
                  className="mx-auto ps-4"
                  width="150px"
                  height="140px"
                />
                <form onSubmit={onSubmit}>
                  <div className="form-group  mt-4">
                    <input
                      type="file"
                      className="bg-theme text-light w-100"
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                    />
                  </div>
                  {/* <div className="form-group">
                    <button className="btn btn-primary" type="submit">
                      Upload
                    </button>
                  </div> */}
                  {/* <button
                    className="my-3 btn-theme btn w-100  text-light"
                    onClick={onSubmit}
                  >
                    Upload Question File
                  </button> */}
                </form>
              </Col>
            </Row>

            <Row className="my-3">
              <Col xs={6} md={6}>
                <h6 className="fw-bold">Set Time </h6>
                <input
                  value={duration}
                  onChange={(e) => {
                    setDuration(e.target.value);
                  }}
                  type="text"
                  className="w-100"
                  placeholder="Ex: 30 Min "
                ></input>
              </Col>
              {/* <Col xs={6} md={6}>
                <h6 className="fw-bold">Set Expire Time</h6>
                <input
                  type="text"
                  className="w-100"
                  placeholder="Ex: 6 Hour "
                ></input>
              </Col> */}
            </Row>
            <Row className="">
              <Col xs={6} md={6}>
                <h6 className="fw-bold">Set Title </h6>
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                  className="w-100"
                  placeholder="Ex: Physics Exam"
                ></input>
              </Col>
              <Col xs={6} md={6}>
                <h6 className="fw-bold">Set Topic</h6>
                <input
                  value={topic}
                  onChange={(e) => {
                    setTopic(e.target.value);
                  }}
                  type="text"
                  className="w-100"
                  placeholder="Ex: Motion"
                ></input>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          {loading ? (
            <PulseLoader />
          ) : (
            <Button
              className="btn-theme  theme-light px-4"
              // onClick={props.onHide}
              onClick={(e) => {
                onSubmit(e);
              }}
            >
              {" "}
              Submit
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
