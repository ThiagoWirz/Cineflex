export default function Seat({seat, setSelectedSeatsID, selectedSeatsID}){  

    function selectSeat(){
        if(!selectedSeatsID.includes(seat.id)){
        setSelectedSeatsID([...selectedSeatsID, seat.id])
      }else{
        setSelectedSeatsID(selectedSeatsID.filter(id => id !== seat.id ) )
      }
      }


    if(selectedSeatsID.includes(seat.id)){
        return(
            <button onClick={() => selectSeat()} className="selected">
            <span>{seat.name}</span>
          </button>
        )
    }
    return(
        <button onClick={() => seat.isAvailable ? selectSeat() : alert("Esse assento não está disponível")} className={seat.isAvailable  ? "available" : "occupied"}>
            <span>{seat.name}</span>
          </button>
    )
}


