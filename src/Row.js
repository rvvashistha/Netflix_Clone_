import React, { useEffect, useState } from "react";
import "./Rows.css";
import axios from "./axios";
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("")

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  //console.log(movie);

  const opts={
    height:"390",
    width:"100%",
    playerVars:{
      //https://developer.google.com/youtube/player_parameters,
      autoplay:1
    }

  }
  const handleClick=(movie)=>{
      if(trailerUrl){
        settrailerUrl("");
      }
      else{
          movieTrailer(movie?.name || "" )
          .then(url=>{
            const urlParmas=new URLSearchParams(new URL(url).search)
           settrailerUrl(urlParmas.get('v'));
          }).catch((error)=>console.log(error))
      }
  }


  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            key={movie.id}
            onClick={()=>handleClick(movie)}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
        </div>
            {
              trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>
            }
    </div>
  );
}

export default Row;