import React from 'react'

function Footer() {
  return (
    <div className=' p-4 d-sm-flex text-white' style={{backgroundColor:'#004e47'}}>
      <div style={{flex:1}}>
        <div>
        <h5>HELP DESK</h5>
        <p className='m-0'>Addmission Helpline No:</p>
        <p className='m-0'>01274-248753(9:00 AM to 5:00 PM)</p>
        <p >email:addmission@igu.ac.in</p>
        </div>
        <div>
            <h5>Examination Helpline No:</h5>
            <p  className='m-0'>+919467148929 (9:00 AM to 5:00 PM) </p>
            <p >Email:cohelpline@igu.ac.in</p>

        </div>
      </div>
      <div style={{flex:1}} className='d-sm-flex'>
        <div style={{flex:1}}>
            <h5>COMMITTEES/CELLS</h5>
            <p className='m-0'>Grievance Redressal Officer</p>
            <p className='m-0'>CPC</p>
            <p className='m-0'>Purchase and Store</p>
            <p >Tenders</p>
        </div>
        <div style={{flex:1}}>
            <h5>CONTACT US</h5>
            <p className='m-0'>Phone: 01274-248011</p>
            <p >Address: Indira Gandhi University, Meerpur,Rewari,Haryana - 122502.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
