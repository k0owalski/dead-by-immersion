import styled from "styled-components";

const StyledSectionTitle = styled.h2`
  position: relative;

  margin: 0 0 2rem;

  font-family: 'Oxygen';
  font-size: 2rem;
  font-weight: 700;

  &::before {
    content: '';

    display: block;

    width: 3rem;
    height: 3rem;

    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-1rem, -.25rem);

    border: 1px solid rgb(var(--color-accent));
    opacity: .2;

    z-index: -1;
  }
`;

export default StyledSectionTitle;
