export default function Input({setBuyerName, setBuyerCPF}){
    return(
        <>
        <div className="buyer-name">
          <h3>Nome do comprador:</h3>
          <input onChange={(event) => setBuyerName(event.target.value)} type="text" placeholder="Digite seu nome..."></input>
        </div>
        <div className="buyer-cpf">
          <h3>CPF do comprador:</h3>
          <input onChange={(event) => setBuyerCPF(event.target.value)} type="number" placeholder="Digite seu CPF..."></input>
        </div>
        </>
    )
}