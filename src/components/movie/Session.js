import ButtonBox from "./ButtonBox"

export default function Session({session, setSessionDate, setSessionTime}){
    return (
        <div className="sessions">
          <p className="day">{session.weekday} - {session.date}</p>
          <div className="button-box">
              {session.showtimes.map((time) => <ButtonBox setSessionDate = {setSessionDate} setSessionTime = {setSessionTime} date = {session.date} id= {time.id} time = {time.name} key = {time.id}/>)}
          </div>
        </div>
    )
}