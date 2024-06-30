import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// usage of useHistory is perfectly fine here as we don't expect
// users to bookmark from an Error page.
// also need to use useHistory for the goBack Function.
const ErrorImageOverlay = styled.div`
  height: calc(100vh - 58px - 54px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  button {
    margin: 0.5rem;
    background: none;
    color: var(--blue-500);
    border: none;
    text-decoration: underline;
    font-size: 1.2rem;
    line-height: 1.5em;
    text-underline-offset: 0.2em;
    text-wrap: pretty;

    &:hover {
      cursor: pointer;
    }
  }
  h2 {
    font-size: 28px;
    color: #2f8e89;
  }
`;

const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: url(${(props) => props.imageUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 760px;
  height: 760px;
  margin: 1rem;
  max-width: 100%;
  max-height: 33vh; // 33% of the viewport height

  // bootstrap breakpoint lg
  @media (min-width: 992px) {
    max-height: 53vh;
    margin-top: 30px;
  }

  @media (min-width: 576px) {
    margin-top: 30px;
  }
`;

const NoMatch = () => {
  const navigate = useNavigate();

  return (
    <ErrorImageOverlay>
      <button onClick={() => navigate("/")}>
        Click here to go to the home page!
      </button>
      <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
      <h2>Sorry this page is broken</h2>
    </ErrorImageOverlay>
  );
};

export default NoMatch;
