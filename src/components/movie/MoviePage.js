import "./moviepage.css";
import Footer from "../footer/Footer";
import Session from "./Session";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

export default function MoviePage() {
  const {movieID} = useParams()
  
  const [sessions, setSessions] = useState([])
  const [movie, setMovie] = useState([])


  useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${movieID}/showtimes`);
    promise.then((response) => {
      setMovie(response.data)
      setSessions(response.data.days)
    })
  }, [])
  
  if(sessions === []){
    return(
      <div className="movie-page">
      <h1>Carregando...</h1>
      </div>
    )
  }

    return (
    <div className="movie-page">
      <h1>Selecione o horário</h1>
      <div className="sessions-list">
        {sessions.map(session => <Session session = {session} key = {session.id} />)}
      </div>
      <Footer title = {movie.title} img = {movie.posterURL} key = {movie.id} />
    </div>
  );
}
