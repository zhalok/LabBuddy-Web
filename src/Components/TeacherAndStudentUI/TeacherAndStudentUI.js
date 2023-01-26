import React from 'react'
import s1 from '../../Image/ss.png'
import p1 from '../../Image/teaching.png'

export default function TeacherAndStudentUI() {
  return (
    <div className="bg-TAS d-flex ">
        <div className="my-auto mx-auto">
            <div className="d-flex ">
            <div className="bg-theme shadow-lg p-4 me-4">
                <img src={s1} alt="" width="140px" height="120px"/>
                <h4 className="text-light fw-bold my-3">Students</h4>
            </div>
            <div className="bg-theme shadow-lg p-4">
                <img src={p1} alt="" width="140px" height="120px"/>
                <h4 className="text-light fw-bold my-3">Teacher</h4>
            </div>
            </div>

        </div>
      
    </div>
  )
}
