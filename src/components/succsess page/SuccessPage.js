import "./successpage.css";
export default function SuccessPage({movieName, sessionDate, sessionTime, finalSeats, buyerName, buyerCPF}) {
  return (
    <div className="success-page">
      <h1>
        Pedido feito
        <br />
        com sucesso!
      </h1>
      <div className="infos">
        <div className="session-info">
          <h2>Filme e sessão</h2>
          <p>{movieName}</p>
          <p>{`${sessionDate} ${sessionTime}`}</p>
        </div>
        <div className="ticket-info">
          <h2>Ingressos</h2>
          {finalSeats.map((seat) => <p>Assento {seat}</p>)}
          {/* <p>Assento 15</p>
          <p>Assento 16</p> */}
        </div>
        <div className="buyer-info">
          <h2>Comprador</h2>
          <p>Nome: {buyerName}</p>
          <p>CPF: {buyerCPF}</p>
        </div>
      </div>
      <button>Voltar para Home</button>
    </div>
  );
}
