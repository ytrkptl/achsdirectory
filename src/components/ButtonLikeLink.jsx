import { Link } from "react-router-dom";
import "./ButtonLikeLink.css";

const ButtonLikeLink = ({ to, text }) => {
  return (
    <Link to={to} className="button-like-link">
      {text}
    </Link>
  );
};

export default ButtonLikeLink;
