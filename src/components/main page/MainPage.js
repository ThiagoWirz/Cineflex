import "./mainpage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";

export default function MainPage() {

const [movies, setMovies] = useState([]);

useEffect(() => {
  const promise = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");
  promise.then((response) => {
    setMovies(response.data)
  })
},[])

  if(movies.length === 0){
    return(
      <main>
      <h1>Carregando...</h1>
      </main>
    )
  }

  return (
    <main>
      <h1>Selecione o filme</h1>
      <div className="movies-box">
        {movies.map((movie) => <Movie  movie = {movie} key = {movie.id}/>)}
      </div>
    </main>
  );
}
