import { Link, useNavigate } from "react-router-dom";
import "./ButtonLikeLink.css";

const ButtonLikeLink = ({ to, text, goBack = false }) => {
  const navigate = useNavigate();

  if (goBack) {
    return (
      <Link onClick={() => navigate(-1)} className="button-like-link">
        {text}
      </Link>
    );
  }

  return (
    <Link to={to} className="button-like-link">
      {text}
    </Link>
  );
};

export default ButtonLikeLink;
