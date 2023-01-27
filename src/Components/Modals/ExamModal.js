import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import temp from '../../Image/temp.png'
import fileup from '../../Image/fileup.png'
import DragAndUpload from '../DragAndUpload/DragAndUpload';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const fileurl = 'https://drive.google.com/drive/folders/1-WT8AqKy5GNmuy5lPcIWEoeYvfGzmJkF?usp=share_link'

// const openInNewTab = (url) => {
//   const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
//   if (newWindow) newWindow.opener = null
// }

// //Then add to your onClick
// onClick={() => openInNewTab('https://stackoverflow.com')}



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
                <img src={temp} alt="" className="mx-auto ps-4" width="160px" height="150px"/>
              <button className="my-3 btn-theme btn w-100 text-light"  onClick={()=>(downloadFile(fileurl))}> <div className='d-flex'>
              <FileDownloadIcon className='mx-2'/>  <h6 className='my-auto'>Question Templete</h6>
              </div> </button>
            </Col>
            <Col md={6}>
            {/* <img src={fileup} alt="" className="mx-auto" width="120px" height="130px"/> */}
              <DragAndUpload></DragAndUpload>
            
            </Col>
          </Row>

          <Row className='mb-4 mt-3'> 
            <Col xs={6} md={6}>
              <h6 className=" fw-bold">Exam Title</h6><input type="text" className="w-100" placeholder="Ex: Physics "></input> 
            </Col>
            <Col xs={6} md={6}>
             <h6 className=" fw-bold">Topic</h6>
             <input type="text" className="w-100" placeholder="Ex: Wave"></input>
            </Col>
            
          </Row>
          <Row className='mb-3'>
            <Col xs={6} md={6}>
              <h6 className=" fw-bold">Set Time </h6><input type="text" className="w-100" placeholder="Ex: 30 Min "></input> 
            </Col>
            <Col xs={6} md={6}>
             <h6 className=" fw-bold">Set Expire Time</h6>
             <input type="text" className="w-100" placeholder="Ex: 6 Hour "></input>
            </Col>
            
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-theme  theme-light px-4 me-3" onClick={props.onHide}> Submit</Button>
      </Modal.Footer>
    </Modal>
      
    </div>
  )
}
