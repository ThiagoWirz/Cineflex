import "./seatspage.css";
import Footer from "../footer/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function SeatsPage() {
  const [seats, setSeats] = useState([]);

  const {sessionID} = useParams()

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionID}/seats`
    );

    promise.then((response) => {
      setSeats(response.data.seats);
    });
  }, []);

  if (seats === []) {
    return (
      <div className="seats-page">
        <span>Carregando...</span>
      </div>
    );
  }
  return (
    <div className="seats-page">
      <h1>Selecione o(s) assento(s)</h1>
      <div className="seats">
        {seats.map(({ name, isAvailable }) => (
          <button className={isAvailable === true ? "available" : "occupied"}>
            <span>{name}</span>
          </button>
        ))}
      </div>
      <div className="seats-example">
        <div>
          <button className="selected"></button>Selecionado
        </div>
        <div>
          <button className="available"></button>Disponível
        </div>
        <div>
          <button className="occupied"></button>Indisponível
        </div>
      </div>

      <div className="input-box">
        <div className="buyer-name">
          <h3>Nome do comprador:</h3>
          <input type="text" placeholder="Digite seu nome..."></input>
        </div>
        <div className="buyer-cpf">
          <h3>CPF do comprador:</h3>
          <input type="text" placeholder="Digite seu CPF..."></input>
        </div>
      </div>

      <button>Reservar Assento(s)</button>
      <Footer />
    </div>
  );
}
