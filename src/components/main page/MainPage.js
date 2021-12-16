import "./mainpage.css";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function MainPage() {

const [movies, setMovies] = useState([]);

useEffect(() => {
  const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
  promise.then((response) => {
    setMovies(response.data)
  })
},[])

  if(movies === []){
    return(
      <div className="movies-box">
      <h1>Carregando...</h1>
      </div>
    )
  }

  return (
    <main>
      <h1>Selecione o filme</h1>
      <div className="movies-box">
        {movies.map((movie) => <Link to={`filme/${movie.id}`}><div className="movie"><img src = {movie.posterURL} alt ={movie.title}/></div></Link>)}
      </div>
    </main>
  );
}
