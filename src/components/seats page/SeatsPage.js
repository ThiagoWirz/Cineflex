import "./seatspage.css";
import Footer from "../footer/Footer";
import Seat from "./Seat";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function SeatsPage() {
  const [seats, setSeats] = useState([]);
  const [selectedSeatsID, setSelectedSeatsID] = useState([])
  const [buyerName, setBuyerName] = useState("")
  const [buyerCPF, setBuyerCPF] = useState("")
  const {sessionID} = useParams()
  let navigate = useNavigate()

 

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionID}/seats`
    );

    promise.then((response) => {
      setSeats(response.data);
    });
  }, []);

  if(seats.length === 0) {
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
        {seats.seats.map((seat) => <Seat seat = {seat} setSelectedSeatsID = {setSelectedSeatsID} selectedSeatsID = {selectedSeatsID} key = {seat.id}/> )}
          
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
          <input onChange={(event) => setBuyerName(event.target.input)} type="text" placeholder="Digite seu nome..."></input>
        </div>
        <div className="buyer-cpf">
          <h3>CPF do comprador:</h3>
          <input onChange={(event) => setBuyerCPF(event.target.input)} type="number" placeholder="Digite seu CPF..."></input>
        </div>
      </div>

      <button onClick={() => confirmSeats(selectedSeatsID, buyerName, buyerCPF, navigate)}>Reservar Assento(s)</button>
      <Footer title = {seats.movie.title} img = {seats.movie.posterURL} key = {seats.movie.id} />
    </div>
  );



  function confirmSeats(ids, name, cpf, navigate){
    if(name === "" || cpf === ""){
      alert("As informações do comprador não podem estar vazias")
      return
    }

    const promise = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", {ids, name, cpf})
    promise.then(() => navigate("/sucesso"))

  }
}
