import "./footer.css";
export default function Footer({time, day, title, img}) {
  return (
    <footer>
      <div className="movie">
        <img src={img} alt="" />
      </div>
      <p>{title}<br/>
      {time!==undefined &&<>{day} - {time}</>}
      </p>
      
    </footer>
  );
}
