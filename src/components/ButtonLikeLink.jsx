import { Link, useNavigate } from "react-router";
import "./ButtonLikeLink.css";

const ButtonLikeLink = ({ to, text, goBack = false }) => {
  const navigate = useNavigate();

  if (goBack) {
    return (
      <Link
        to=".."
        onClick={(e) => {
          e.preventDefault();
          navigate(-1);
        }}
        className="button-like-link"
      >
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
