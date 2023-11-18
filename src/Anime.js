import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Anime({animes, toggle}) {
    const [imageLoading, setImageLoading] = useState(true);
    const navigate = useNavigate();

    const handleImageLoad = () => {
      setImageLoading(false);
    };
const picklevel = (anime)=>{
  if(animes.length > 1){
    navigate(`/home/${anime.title}`)
  }
}    
  return (
    <div className='mt-5'>
      <div className='row'>
         {animes.map((anime, index) => (
          <div key={index} className="col-md-3 mt-3" id="picha">
            <div className="card">
            {imageLoading && (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
              <img src={anime.poster} className={`card-img-top img-fluid ${imageLoading ? 'd-none' : ''}`} alt="Loading..." onLoad={handleImageLoad}  />
              <div className={`card-body pd-3 ${toggle}`}>
                <h5 className="card-title">{anime.title}</h5>
                <p className="card-text">Rating : {anime.rating}</p>
                <p className="card-text">Episodes : {anime.episodes}</p>
                <div className='buttons'>
                <Link  className="btn btn-success" onClick={(anime)=>(picklevel)} >Play</Link>
                </div>

              </div>
            </div>
          </div>
        ))}
        </div>
        
    </div>
  )
}
