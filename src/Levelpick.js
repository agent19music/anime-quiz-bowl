import React,{useState} from 'react';
import { Link, useParams } from 'react-router-dom';

export default function Levelpick() {
  const { animeId } = useParams();
  

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card text-center p-3 m-3">
        <h3 className="card-title">Easy</h3>
        <p className="card-text">Start with some basic knowledge questions.</p>
        <Link to={`/questionholder/easy/${animeId}`} className="btn btn-success" >Take Easy Quiz</Link>
      </div>

      <div className="card text-center p-3 m-3">
        <h3 className="card-title">Intermediate</h3>
        <p className="card-text">Challenge yourself with moderately difficult questions.</p>
        <Link to={`/questionholder/intermediate/${animeId}`} className="btn btn-warning" >Take Intermediate Quiz</Link>
      </div>

      <div className="card text-center p-3 m-3">
        <h3 className="card-title">Expert</h3>
        <p className="card-text">Prove your expertise with advanced questions.</p>
        <Link to={`/questionholder/expert/${animeId}`} className="btn btn-danger" >Take Expert Quiz</Link>
      </div>
    </div>
  );
}
