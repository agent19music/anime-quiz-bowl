import React from 'react'
import Anime from './Anime'

export default function Homepage({animes}) {
  return (
    <div className='container'>
       <Anime animes={animes} key={animes.id}/>
    </div>
  )
}
