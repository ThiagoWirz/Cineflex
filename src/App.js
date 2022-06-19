import "./assets/css/reset.css";
import "./assets/css/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Header from "./components/header/Header";
import MainPage from "./components/main page/MainPage";
import MoviePage from "./components/movie/MoviePage";
import SeatsPage from "./components/seats page/SeatsPage";
import SuccessPage from "./components/succsess page/SuccessPage";

export default function App() {
  const [movieName, setMovieName] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [sessionTime, setSessionTime] = useState("");
  const [finalSeats, setFinalSeats] = useState([]);
  const [buyerName, setBuyerName] = useState("");
  const [buyerCPF, setBuyerCPF] = useState("");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage setMovieName={setMovieName} />} />
        <Route
          path="/filme/:movieID"
          element={
            <MoviePage
              setSessionDate={setSessionDate}
              setSessionTime={setSessionTime}
            />
          }
        />
        <Route
          path="/sessao/:sessionID"
          element={
            <SeatsPage
              setFinalSeats={setFinalSeats}
              setBuyerName={setBuyerName}
              setBuyerCPF={setBuyerCPF}
              buyerName={buyerName}
              buyerCPF={buyerCPF}
            />
          }
        />
        <Route
          path="/sucesso"
          element={
            <SuccessPage
              movieName={movieName}
              sessionDate={sessionDate}
              sessionTime={sessionTime}
              finalSeats={finalSeats}
              buyerName={buyerName}
              buyerCPF={buyerCPF}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
