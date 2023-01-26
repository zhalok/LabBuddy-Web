import React from 'react'
import p1 from '../../Image/png2.webp'

export default function Home() {
  return (
    <>
    <div className="d-flex my-auto">
     <div className="mx-auto my-auto w-50 p-5">
     <h1 className="fw-bold fw-1 bigText my-4">Welcome to Lab Buddy</h1>
     <p className="text-start">A web site or software for interactive learning based on simulation of real phenomena. It allows students to explore a topic by comparing and contrasting different scenarios, to pause and restart application for reflection and note taking, to get practical experimentation experience over the Internet. </p>
      <div className="my-4">
      <button type="" className='btn  px-5 py-2 me-2 btn-theme '>Log In</button>
      <button type="" className='btn px-5 py-2 outline-theme text-theme'>Sign Up</button>
      </div>
     </div>
     <div className="w-50">
      <img src={p1} width="100%" alt='' className=" my-5" />

     </div>
    </div>
    <button type="" className=" btn outline-theme px-5 py-2 rounded my-5 rounded-pill text-theme"> Skip </button>
    </>
  )
}
