import "./successpage.css";
export default function SuccessPage() {
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
          <p>Enola Holmes</p>
          <p>24/06/2021 15:00</p>
        </div>
        <div className="ticket-info">
          <h2>Ingressos</h2>
          <p>Assento 15</p>
          <p>Assento 16</p>
        </div>
        <div className="buyer-info">
          <h2>Comprador</h2>
          <p>Nome: João da Silva Sauro</p>
          <p>CPF: 123.456.789-10</p>
        </div>
      </div>
      <button>Voltar para Home</button>
    </div>
  );
}
