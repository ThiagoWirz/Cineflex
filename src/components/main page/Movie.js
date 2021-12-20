import { Link } from "react-router-dom";
export default function Movie({ movie, setMovieName }) {
  return (
    <Link to={`filme/${movie.id}`}>
      <div onClick={() => setMovieName(movie.title)} className="movie">
        <img src={movie.posterURL} alt={movie.title} />
      </div>
    </Link>
  );
}
