import React from 'react'
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BiotechIcon from '@mui/icons-material/Biotech';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
import CreateIcon from '@mui/icons-material/Create';
import AddIcon from '@mui/icons-material/Add';

export default function Dashboard() {
  return (
    <div>
      <div className="d-flex container-full">
        <div className="w-15 bg-theme-light p-3">
            <div>
            <button className="text-light btn btn-theme-dark px-5 py-2 rounded my-2 w-100"> <div className="d-flex"><DashboardCustomizeIcon className='me-2'/> Dashboard </div> </button>
            <button className="text-light btn btn-theme-dark px-5 py-2 rounded my-2 w-100 "> <div className="d-flex "><PeopleAltIcon className='me-2'/> Class </div> </button>
            <button className="text-light btn btn-theme-dark px-5 py-2 rounded my-2 w-100"> <div className="d-flex "><BiotechIcon className='me-2'/> Lab </div> </button>

            <button className="text-light btn btn-theme-dark px-5 py-2 rounded my-2 w-100"> <div className="d-flex "><MonetizationOnIcon className='me-2'/> Pricing </div> </button>
            <button className="text-light btn btn-theme-dark px-5 py-2 rounded my-2 w-100"> <div className="d-flex"><InfoIcon className='me-2'/> About Us </div> </button>
            </div>
        </div>
        <div className="w-100 b-light text-start p-4">
            <div className="text-start">
                <h3 className="my-3 fw-bold">Classes</h3>
            </div>
            <div className="flex text-start">
                <button className="btn-theme btn rounded text-light px-4 me-3"><CreateIcon className='me-2'/> Create Class</button>
                <button className="outline-theme text-theme btn rounded px-4"> <AddIcon className='me-2 my-auto'/>  Join Class</button>
                
            </div>

        </div>

      </div>
    </div>
  )
}
