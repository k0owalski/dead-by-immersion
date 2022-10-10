import styled from "styled-components";

const StyledHamburger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;

  position: relative;

  transition: all .32s ease-in-out;
  z-index: 1;

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    display: inline-block;

    width: 2rem;
    height: 2px;

    background: rgb(var(--color-text));
    border-radius: 1rem;

    transition: all .32s ease-in-out;
  }

  .hamburger-inner::before,
  .hamburger-inner::after {
    content: '';

    position: absolute;
  }

  .hamburger-inner::before {
    transform: translate(-50%, -0.5rem);
  }

  .hamburger-inner::after {
    transform: translate(-50%, 0.5rem);
  }


  &.is-active .hamburger-inner {
    background: transparent;
    transform: translateX(-1rem);

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }
  }
`;

export default StyledHamburger;
