import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import Header from "./components/header/Header";
import MainPage from "./components/main page/MainPage";
import MoviePage from "./components/movie/MoviePage";
import SeatsPage from "./components/seats page/SeatsPage";
import SuccessPage from "./components/succsess page/SuccessPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/filme/:movieID" element={<MoviePage/>}/>
          <Route path="/sessao/:sessionID" element={<SeatsPage/>}/>
          <Route path="/sucesso" element={<MoviePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
