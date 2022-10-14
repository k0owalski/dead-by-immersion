import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;

  margin: 9rem 0 0;
  padding: 3rem 10%;

  background: rgb(var(--color-tile));

  .logo {
    height: 4rem;
  }

  .copyright {
    font-size: .75rem;
    font-weight: 300;
  }

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: max-content 1fr;

    align-items: center;
  }
`;

export default StyledFooter;
