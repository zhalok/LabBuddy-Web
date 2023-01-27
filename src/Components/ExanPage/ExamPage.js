import React ,{useState} from 'react'
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';
import ExamModal from '../Modals/ExamModal';

export default function ExamPage() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
           <div className="text-start">
                <h3 className="my-3 fw-bold">Exam</h3>
            </div>
            <div className="flex text-start">
                <button className="btn-theme btn rounded text-light px-4 me-3" onClick={() => setModalShow(true)}><CreateIcon className='me-2'/>Create Exam</button>
                <button className="outline-theme text-theme btn rounded px-4"> <AddIcon className='me-2 my-auto'/>Participate Exam</button>
                
            </div>
            <ExamModal show={modalShow} onHide={() => setModalShow(false)}></ExamModal>

            {/* render clsss  */}
            <div>
                
            </div>
      
    </div>
  )
}
