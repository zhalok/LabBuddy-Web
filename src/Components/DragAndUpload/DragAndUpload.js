import React from 'react'
import { useState, useRef } from "react";
import draoimg from "../../Image/dragimg.png";
import '../../Style/CustomStyle.css'
import PublishIcon from '@mui/icons-material/Publish';
import BackupIcon from '@mui/icons-material/Backup';

export default function DragAndUpload() {

    const [files, setFiles] = useState(null);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setFiles(event.dataTransfer.files);
  };
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData.getAll());
    // fetch(
    //   "link", {
    //     method: "POST",
    //     body: formData
    //   }
    // )
  };

  
  return (
    <div>
          <div className="">
        <div
          className="dropzone bg-theme-light container rounded-3"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <h5 className="fs-6">
            Drag and Drop file 
          </h5>
          <BackupIcon className="fs-1 mx-auto"/>
          <small>Ex: Excel file</small>
          <input
            type="file"
            multiple
            onChange={(event) => setFiles(event.target.files)}
            hidden
            accept="image/png, image/jpeg"
            ref={inputRef}
          />
          
        </div>
        <button
            className="btn btn-theme d-flex text-light  my-3 w-100"
            onClick={() => inputRef.current.click()}
          >
          <PublishIcon className='mx-2'/>
            <h6 className='my-auto'>Upload Question</h6>
          </button>
      </div>
      
    </div>
  )
}
