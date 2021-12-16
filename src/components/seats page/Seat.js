export default function Seat({seat, setSelectedSeatsID, selectedSeatsID, selectedSeatsNames, setSelectedSeatsNames}){  

    function selectSeat(){
        if(!selectedSeatsID.includes(seat.id)){
        setSelectedSeatsID([...selectedSeatsID, seat.id])
        setSelectedSeatsNames([...selectedSeatsNames, seat.name])
      }else{
        setSelectedSeatsID(selectedSeatsID.filter(id => id !== seat.id ) )
        setSelectedSeatsNames(selectedSeatsNames.filter(name => name !== seat.name ) )
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


