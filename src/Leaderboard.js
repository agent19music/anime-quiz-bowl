import React,{useEffect, useState} from 'react'

export default function Leaderboard() {
const [board, setBoard] = useState([])

useEffect(()=>{
    fetch(' http://localhost:8001/leadeboard')
    .then((res)=>res.json())
    .then((res)=> setBoard(res))
})
  return (
    <div>Leaderboard</div>
  )
}
