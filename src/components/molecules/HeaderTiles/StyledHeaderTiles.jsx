import styled from "styled-components";

const StyledHeaderTiles = styled.div`
  width: 100%;

  padding: 0 10%;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default StyledHeaderTiles;
