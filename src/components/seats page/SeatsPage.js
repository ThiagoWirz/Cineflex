import "./seatspage.css";
import Footer from "../footer/Footer";
import Seat from "./Seat";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../../assets/loading.svg";

export default function SeatsPage({
  setFinalSeats,
  setBuyerName,
  setBuyerCPF,
  buyerName,
  buyerCPF,
}) {
  const [seats, setSeats] = useState([]);
  const [selectedSeatsID, setSelectedSeatsID] = useState([]);
  const [selectedSeatsNames, setSelectedSeatsNames] = useState([]);
  const { sessionID } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const promise = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${sessionID}/seats`
    );

    promise.then((response) => {
      setSeats(response.data);
    });
  }, []);

  if (seats.length === 0) {
    return (
      <div className="seats-page">
        <img src={Loading} alt="Carregando" />
      </div>
    );
  }
  return (
    <div className="seats-page">
      <h1>Selecione o(s) assento(s)</h1>
      <div className="seats">
        {seats.seats.map((seat) => (
          <Seat
            seat={seat}
            setSelectedSeatsID={setSelectedSeatsID}
            selectedSeatsID={selectedSeatsID}
            setSelectedSeatsNames={setSelectedSeatsNames}
            selectedSeatsNames={selectedSeatsNames}
            key={seat.id}
          />
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
          <input
            onChange={(event) => setBuyerName(event.target.value)}
            type="text"
            placeholder="Digite seu nome..."
          ></input>
        </div>
        <div className="buyer-cpf">
          <h3>CPF do comprador:</h3>
          <input
            onChange={(event) => setBuyerCPF(event.target.value)}
            type="number"
            placeholder="Digite seu CPF..."
          ></input>
        </div>
      </div>

      <button
        className="confirm-button"
        onClick={() =>confirmSeats(selectedSeatsID)}
      >
        Reservar Assento(s)
      </button>
      <Footer
        time={seats.name}
        day={seats.day.weekday}
        title={seats.movie.title}
        img={seats.movie.posterURL}
        key={seats.movie.id}
      />
    </div>
  );

  function confirmSeats(ids) {
    if (ids.length === 0) {
      alert("Nenhum assento selecionado");
      return;
    }

    if (buyerName === "") {
      alert("As informações do comprador não podem estar vazias");
      return;
    }
    if (!CPFValidation(buyerCPF)) {
      alert("CPF inválido");
      return;
    }

    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many",
      { ids, buyerName, buyerCPF }
    );
    promise.then(() => {
      setFinalSeats(selectedSeatsNames);
      setBuyerName(buyerName);
      setBuyerCPF(
        buyerCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
      );
      navigate("/sucesso");
    });
  }

  function CPFValidation(cpf) {
    let sum = 0;
    let remnant = 0;
    if (
      cpf === "" ||
      cpf.length !== 11 ||
      cpf === "11111111111" ||
      cpf === "22222222222" ||
      cpf === "33333333333" ||
      cpf === "44444444444" ||
      cpf === "55555555555" ||
      cpf === "66666666666" ||
      cpf === "77777777777" ||
      cpf === "88888888888" ||
      cpf === "99999999999" ||
      cpf === "00000000000"
    ) {
      return false;
    }
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cpf[i]) * (10 - i);
    }
    remnant = (sum * 10) % 11;
    if (remnant === 10) {
      remnant = 0;
    }
    if (remnant !== parseInt(cpf[9])) {
      return false;
    }
    sum = 0;
    remnant = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cpf[i]) * (11 - i);
    }
    remnant = (sum * 10) % 11;
    if (remnant === 10) {
      remnant = 0;
    }
    if (remnant !== parseInt(cpf[10])) {
      return false;
    }
    return true;
  }
}
