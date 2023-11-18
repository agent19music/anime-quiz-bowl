import React from 'react'
import { Link } from 'react-router-dom'
export default function Landingpage() {
  return (
    <div>
      <div className='container text-center'>
      <div className='row justify-content-center align-items-center' style={{ height: '100vh' }}>
        <div className='col-md-12'>
            <h5 className='pb-3'>WELCOME TO ANIME QUIZ BOWL !!</h5>
          <img src='/landing.jpeg' alt='loading...' className='img-fluid pb-2' />
          <div class="d-grid gap-2 pt-3">
               <Link className="btn btn-success " to='/homepage'type="button"> <i class="fas fa-circle-arrow-right"></i> Begin</Link>
              
          </div>
        </div>
       
      </div>
    </div>
    </div>
  )
}
