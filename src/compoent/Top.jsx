import React from 'react'
import './top.css'
function Top() {
  return (
   <>
   <div className='d-flex py-2 bg-success'>
    <div className='d-flex justify-content-around top-bar'>
        <div ><a className='text-white top-contact' href="tel:01274-248753">Helpline No : 01274-248753</a></div>
        <div className='text-white'>|</div>
        <div ><a className='text-white top-contact' href="mailto:admissions@igu.ac.in">Email: admissions@igu.ac.in</a></div>
    </div>
    <div className='d-flex top-bar d-none d-sm-block'>
        <button className='btn btn-top btn-sm mx-1'>A+</button>
        <button className='btn btn-top btn-sm mx-1'>A</button>
        <button className='btn btn-top btn-sm mx-1'>A-</button>
        <button className='btn btn-top btn-sm mx-1'><i className="bi bi-moon-fill"></i></button>
        <button className='btn btn-top btn-sm mx-1'><i className="bi bi-volume-up-fill"></i></button>
    </div>
    </div>
    </>
  )
}

export default Top
