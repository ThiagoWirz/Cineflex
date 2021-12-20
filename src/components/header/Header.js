import "./header.css";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header>
      {window.location.pathname === "/" || (
        <button onClick={() => navigate(-1)}>Voltar</button>
      )}
      <h1>cineflex</h1>
    </header>
  );
}
