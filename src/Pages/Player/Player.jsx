import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Player.css'
import backArrow_icon from '../../assets/backArrow_icon.png'

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZmMyMWQwYjY5ZmNiYzRiOGNhMDZjNTYzMTYwMDBmOSIsIm5iZiI6MTc0NzU0NDkyOC4xNDcsInN1YiI6IjY4Mjk2YjYwZTYzZmNlNzUzNDViNTNiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EL56EopZWWoLPX5OEmKQUF3XfyAfjW3E2GNlb5BKgjY'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <img 
        src={backArrow_icon} 
        alt="Back" 
        onClick={() => navigate(-2)}
        style={{ cursor: 'pointer' }}
      />
      <iframe 
        width='90%' 
        height='90%'
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title='trailer' 
        frameBorder="0" 
        allowFullScreen
      />
      <div className="player-info">
        <p>{apiData.published_at?.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
