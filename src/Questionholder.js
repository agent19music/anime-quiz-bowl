import React,{useState, useEffect} from 'react'
import Question from './Question'
import { useParams } from 'react-router-dom'

export default function Questionholder() {
const {id} = useParams();
const [anime, setAnime] = useState(null)
useEffect(()=>{
    fetch(`http://localhost:8001/animes/${id}`)
    .then((res)=>res.json())
    .then((res)=>setAnime(res))
    .catch((error) => console.error(error));
}, [id]);
console.log(anime);
  return (
    <div>
        <Question/>
    </div>
  )
}
