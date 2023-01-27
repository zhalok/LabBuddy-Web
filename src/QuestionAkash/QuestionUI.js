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
        <div className='outline-theme pe-4 rounded'><Checkbox {...label} defaultUnChecked color="secondary" /> Math
        </div>
       </div>


        {/* questions */}
        <div>
        <SingleQuestion></SingleQuestion>
        </div>
     
    </div>
  )
}
