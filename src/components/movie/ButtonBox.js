import { Link } from "react-router-dom"
export default function ButtonBox({id, time}){
    return(
        <Link to={`/sessao/${id}`}>
        <button className="time">
            {time}
        </button>
        </Link>
    )
}