import { React, useState, useEffect } from 'react';
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'







const base_url = "https://image.tmdb.org/t/p/original";





function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("");

  // Options for react-youtube
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };


  useEffect(() => {
    //we use async await function to request get data from axios.js and fetchurl there is important variable is 
    //fetchurl because it depends on useEffect everyTime when this change so useEffect also render..

    async function FetchData() {
      const request = await axios.get(fetchURL);
      //   console.log(request.data.results)
      setMovies(request.data.results)


      return request;
    }
    FetchData();



  }, [fetchURL])

  // console.table(movies)

  const handleClick = async (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let trailerurl = await axios.get(
        `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
      );
      setTrailerUrl(trailerurl.data.results[0]?.key); 
    }
  };




  return (
    <div className="row">
      <h1 style={{ color: 'white' }}> {title}  </h1>

      <div className="row_posters">
        {movies.map(movie => (
          <img key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}

            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
            />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}




export default Row;