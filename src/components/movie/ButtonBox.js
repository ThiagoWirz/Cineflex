import { Link } from "react-router-dom"
export default function ButtonBox({setSessionDate, setSessionTime,date,id, time}){
    return(
        <Link to={`/sessao/${id}`}>
        <button onClick={() => selectSession(setSessionDate, setSessionTime, date, time)} className="time">
            {time}
        </button>
        </Link>
    )

    function selectSession(setSessionDate, setSessionTime, date, time){
        setSessionDate(date)
        setSessionTime(time)
    }
}