import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';

export default function ClassPage() {
  return (
    <div>
           <div className="text-start">
                <h3 className="my-3 fw-bold">Classes</h3>
            </div>
            <div className="flex text-start">
                <button className="btn-theme btn rounded text-light px-4 me-3"><CreateIcon className='me-2'/> Create Class</button>
                <button className="outline-theme text-theme btn rounded px-4"> <AddIcon className='me-2 my-auto'/>  Join Class</button>
                
            </div>

            {/* render clsss  */}
            <div>
                
            </div>
      
    </div>
  )
}
