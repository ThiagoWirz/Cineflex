import "./mainpage.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import Loading from "../../assets/loading.svg"

export default function MainPage({setMovieName}) {

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
      <img src = {Loading} alt = "Carregando"/>
      </main>
    )
  }

  return (
    <main>
      <h1>Selecione o filme</h1>
      <div className="movies-box">
        {movies.map((movie) => <Movie  movie = {movie} key = {movie.id} setMovieName = {setMovieName}/>)}
      </div>
    </main>
  );
}
