import React from 'react'
import Anime from './Anime'

export default function Homepage({animes, toggle}) {
  return (
    <div className='container mt-5 pt-4' id='main-container'>
       <Anime animes={animes} key={animes.id} toggle={toggle}/>
    </div>
  )
}
