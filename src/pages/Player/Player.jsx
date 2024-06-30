import React, { useState, useEffect } from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate,useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "" 
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODI1YzQ2YzM4MGFjYWI1ZTkxMWY1MDkxNjNmMmZjMSIsIm5iZiI6MTcxOTY5NTU5NS4zNjE4MzksInN1YiI6IjY2ODA3NzQzOTljNTY3YWUzOGZlZmIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u8EZtVjxPwVrscp_SkPgMAUfp26GcZ2CrHEyOPJ2VQA'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results[0]))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back Arrow" onClick={()=>{navigate(-2)}}/>
      <iframe 
        width="90%" 
        height="90%" 
        src={`https://www.youtube.com/embed/${apiData.key}`} 
        title='trailer' 
        frameBorder='0' 
        allowFullScreen>
      </iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default Player;
