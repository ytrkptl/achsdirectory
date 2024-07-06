import styled from "styled-components";

export const ParentContainer = styled.div`
  margin: 0px;
  padding: 0px;
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 58px 1fr 54px;
  overflow: hidden;
  background-image: url("./assets/chalkboard.jpg");
  box-sizing: border-box;
`;

export const StyledMainElement = styled.main`
  box-sizing: border-box;
  overflow-y: scroll;
  border: 1px solid black;
  border-top: 0;
  width: 100%;
  padding: 4px;
  min-height: calc(100vh - 58px - 54px);
  grid-template-columns: 1fr;
  grid-template-rows: 58px 1fr 54px;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li > div > a {
      color: white;
      text-decoration: none;
    }
  }
`;
