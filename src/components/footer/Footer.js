import "./footer.css";
export default function Footer({title, img}) {
  return (
    <footer>
      <div className="movie">
        <img src={img} alt="" />
      </div>
      <p>{title}</p>
    </footer>
  );
}
