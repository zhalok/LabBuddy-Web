import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import temp from '../../Image/temp.png'
import fileup from '../../Image/fileup.png'
const fileurl = 'https://drive.google.com/drive/u/0/folders/1g2p3LXh-szlLYkTB-gnyuDw9P5JopXUC?fbclid=IwAR1T-6GGYst4isi27VA-ri5xh9qthF4UlxjOeNKPzCPHGXyqwlfhk44u4TA/hacknsu.jpg'


export default function ExamModal(props) {
    const downloadFile=(url)=>{
        const fileName=url.split('/').pop();
        const atag = document.createElement('a');
        atag.href=url;
        atag.setAttribute("downlaod",fileName);
        document.body.appendChild(atag);
        atag.click();
        atag.remove();

    };
  return (
    <div>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            <HelpCenterIcon className='fs-1 mb-1 me-2 text-theme'/>
          Create a Question
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col md={6}>
                <img src={temp} alt="" className="mx-auto" width="120px" height="130px"/>
              <button className="my-3 btn-theme btn w-100 text-light" onClick={()=>(downloadFile(fileurl))}>Question Templete</button>
            </Col>
            <Col md={6}>
            <img src={fileup} alt="" className="mx-auto" width="120px" height="130px"/>
             <button className="my-3 btn-theme btn w-100  text-light">Upload Question File</button>
            </Col>
          </Row>

          <Row>
            <Col xs={6} md={6}>
              <h6>Set Time </h6><input type="text" className="w-100" placeholder="Ex: 30 Min "></input> 
            </Col>
            <Col xs={6} md={6}>
             <h6>Set Expire Time</h6>
             <input type="text" className="w-100" placeholder="Ex: 6 Hour "></input>
            </Col>
            
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-theme  theme-light px-4" onClick={props.onHide}> Submit</Button>
      </Modal.Footer>
    </Modal>
      
    </div>
  )
}
