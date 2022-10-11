import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 8rem;

  position: absolute;
  top: 0;
  left: 0;

  padding: 0 10%;

  z-index: 10;

  .brand {
    height: 3rem;
  }

  .brand-link {
    z-index: 1;
  }

  .navigation {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    width: 100%;
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;

    padding: 10rem 10% 3rem;

    list-style-type: none;

    background-color: rgba(var(--color-background), .95);

    transition: transform .3s ease, opacity .15s ease-in-out;
    opacity: 1;

    &.is-hidden {
      transform: translate(-100%, 0);
      opacity: 0;
    }

    .nav-link {
      font-size: 1.25rem;
      text-decoration: none;

      color: rgb(var(--color-text));
    }

    .nav-lang {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: .25rem;

      position: absolute;
      bottom: 3rem;

      padding: .5rem 0.75rem;

      color: rgb(var(--color-text));
      background: unset;
      border: 1px solid rgb(var(--color-text));

      .nav-lang-icon {
        height: 1.5rem;
      }
    }
  }
`;

export default StyledNavbar;
