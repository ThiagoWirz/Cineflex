import { Link } from "react-router-dom";
export default function Movie({movie}) {
  return (
    <Link to={`filme/${movie.id}`}>
      <div className="movie">
        <img src={movie.posterURL} alt={movie.title} />
      </div>
    </Link>
  );
}
