import "./menu-item.css";
import { Link } from "react-router-dom";

export default function MenuItem({ item, index }) {
  return (
    <div className="card" key={index}>
      <div className="card-image">
        <img src={item.imgUrl} alt="" />
      </div>
      <div className="card-body">
        <h1 className="card-title">{item.title}</h1>
        <h3 className="card-subtitle">{item.subtitle}</h3>
        <p className="card-description">{item.description}</p>
        <button className="details">
          <Link to="/" className="details-link">
            details
          </Link>
        </button>
      </div>
    </div>
  );
}
