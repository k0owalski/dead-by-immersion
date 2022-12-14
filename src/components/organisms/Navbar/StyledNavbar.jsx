import styled from "styled-components";

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 8rem;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);

  z-index: 10;

  .nav-inner-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 80%;
    max-width: 1440px;
    height: 100%;

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
      transform: translate(-100%, 0);

      padding: 12rem 10% 3rem;

      list-style-type: none;

      background-color: rgba(var(--color-background), .96);

      transition: transform .3s ease, opacity .15s ease-in-out;
      opacity: 0;

      @media screen and (min-width: 1024px) {
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 4rem;

        height: 100%;

        position: static;
        transform: translate(0, 0);

        padding: unset;

        background: transparent;
        opacity: 1;
      }

      &.is-active {
        transform: translate(0, 0);
        opacity: 1;
      }

      .nav-item {
        display: flex;
      }

      .nav-link {
        display: block;

        position: relative;

        font-size: 1.5rem;
        text-decoration: none;

        color: rgb(var(--color-text));

        @media screen and (min-width: 1024px) {
          font-size: 1.25rem;
        }

        &::before {
          content: '';

          display: block;

          width: 0;
          height: 1px;

          position: absolute;
          bottom: -.5rem;
          left: 0;

          background: rgb(var(--color-accent));
          border-radius: 1rem;

          transition: width .2s;
        }

        &:hover::before,
        &.nav-link--active::before {
          width: 100%;
        }
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

        cursor: pointer;

        @media screen and (min-width: 1024px) {
          position: static;
        }

        .nav-lang-icon {
          height: 1.5rem;
        }
      }
    }
  }
`;

export default StyledNavbar;
