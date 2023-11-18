import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div>
        <Navbar/>
        <div id='main-container' className='container mx-auto'>
            <Outlet/>
        </div>

    </div>
  )
}
