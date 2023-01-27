import React from 'react'
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import SingleQuestion from './SingleQuestion';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function QuestionUI() {
  return (
    <div>
        {/* filter */}
        <div className='py-3'> <h4>Filter Question</h4></div>
        <div className='d-flex border-botoom'>
        <div className='outline-theme pe-4 me-3 rounded'><Checkbox {...label} defaultUnChecked color="secondary" /> Physics</div>
        <div className='outline-theme pe-4 me-3 rounded'><Checkbox {...label} defaultUnChecked color="secondary" /> Chemistry</div>
        <div className='outline-theme pe-4 me-3 rounded'><Checkbox {...label} defaultUnChecked color="secondary" /> Bilology</div>
        <div className='outline-theme pe-4 me-3 rounded'><Checkbox {...label} defaultUnChecked color="secondary" /> ICT</div>
        <div className='outline-theme pe-4 me-3 rounded'><Checkbox {...label} defaultUnChecked color="secondary" /> English</div>
        <div className='outline-theme pe-4 me-3 rounded'><Checkbox {...label} defaultUnChecked color="secondary" /> Bangla</div>
        <div className='outline-theme pe-4 rounded'><Checkbox {...label} defaultUnChecked color="secondary" /> Math
        </div>
       </div>


        {/* questions */}
        <div className='w-100 d-flex'>
            
        
        <div className='w-75'>
        <SingleQuestion></SingleQuestion>
        <SingleQuestion></SingleQuestion>
        <SingleQuestion></SingleQuestion>
        <SingleQuestion></SingleQuestion>
        <SingleQuestion></SingleQuestion>
        <SingleQuestion></SingleQuestion>
        <SingleQuestion></SingleQuestion>
        </div>

        <div className='w-25 border-start mx-4'>
            <div className='p-4 fw-bold '>
                <h6 className='fw-bold '>Time Duration: 30 Min</h6>
                <h6 className='fw-bold my-4 '>Expired Time : 06 Hour </h6>
                <h6 className='fw-bold '>Obtain Marks: 00.00 </h6>
            </div>
            
        </div>

        
        </div>
     
    </div>
  )
}
