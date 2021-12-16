import "./moviepage.css";
import Footer from "../footer/Footer";

export default function MoviePage() {
  return (
    <div className="movie-page">
      <h1>Selecione o horário</h1>
      <div className="sessions-list">
        <div className="sessions">
          <p className="day">Quinta-feira - 24/06/2021</p>
          <div className="button-box">
            <button className="time">15:00</button>
            <button className="time">19:00</button>
          </div>
        </div>
        <div className="sessions">
          <p className="day">Sexta-feira - 25/06/2021</p>
          <div className="button-box">
            <button className="time">15:00</button>
            <button className="time">19:00</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
