import React, {useEffect,useRef,useState} from 'react'
import './Tittlecards.css'
import cards_data from '../../assets/cards/Cards_data.js'
import {Link} from 'react-router-dom'

const Titlecards = ({title,category}) => {

  const [apiData,setApiData] = useState([])

  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODI1YzQ2YzM4MGFjYWI1ZTkxMWY1MDkxNjNmMmZjMSIsIm5iZiI6MTcxOTY5NTU5NS4zNjE4MzksInN1YiI6IjY2ODA3NzQzOTljNTY3YWUzOGZlZmIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.u8EZtVjxPwVrscp_SkPgMAUfp26GcZ2CrHEyOPJ2VQA'
    }
  };
  
 

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));
    const ref = cardsRef.current;
    ref.addEventListener('wheel', handleWheel, { passive: false }); 
    return () => {
      ref.removeEventListener('wheel', handleWheel);
    };
  }, []); 

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          
          <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt={card.name} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Titlecards;