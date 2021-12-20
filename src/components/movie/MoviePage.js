import "./moviepage.css";
import Footer from "../footer/Footer";
import Session from "./Session";
import Loading from "../../assets/loading.svg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function MoviePage({ setSessionDate, setSessionTime }) {
  const { movieID } = useParams();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/movies/${movieID}/showtimes`
    );
    promise.then((response) => {
      setSessions(response.data);
    });
  }, []);

  if (sessions.length === 0) {
    return (
      <div className="movie-page">
        <img src={Loading} alt="Carregando" />
      </div>
    );
  }

  return (
    <div className="movie-page">
      <h1>Selecione o horário</h1>
      <div className="sessions-list">
        {sessions.days.map((session) => (
          <Session
            setSessionDate={setSessionDate}
            setSessionTime={setSessionTime}
            session={session}
            key={session.id}
          />
        ))}
      </div>
      <Footer
        title={sessions.title}
        img={sessions.posterURL}
        key={sessions.id}
      />
    </div>
  );
}
