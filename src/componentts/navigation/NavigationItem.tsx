import { Link } from "react-router-dom";

const NavigationItem = ({
  id,
  title,
  url,
  active = false,
  available=false,
}: {
  id: number;
  title: string;
  url: string;
  active?: boolean;
  available:boolean;
}) => {
  return (
    <li className={`navigation-item ${active ? "active" : ""} ${available || id===1 ? "" : "not-avilable"}`}>
      <Link className="navigation-item-link" to={url}>
        <div className="item-number">{id}</div>
        <div className="item-description">
          <div className="item-step">step {id}</div>
          <div className="item-title">{title}</div>
        </div>
      </Link>
    </li>
  );
};

export default NavigationItem;
