import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  width: 100%;

  margin: 9rem 0 0;
  padding: 0 10%;

  .section-content {
    order: 2;

    .heading {
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
        translate: -1rem -.25rem;

        border: 1px solid rgb(var(--color-accent));
        opacity: .2;

        z-index: -1;
      }
    }

    .content {
      padding: 0 0 1.5rem;

      font-weight: 300;
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      width: 100%;

      .input {
        display: flex;
        flex-direction: column;
        gap: .75rem;

        .label {
          font-weight: 500;
        }

        .input-field {
          width: 100%;
          height: 2.5rem;

          padding: 0 1rem;

          color: var(--color-text);
          background: rgb(var(--color-tile));
          border: 1px solid rgba(var(--color-text), .2);

          outline: none;

          &.message-field {
            height: 12rem;
          }
        }
      }

      .submit {
        display: grid;
        place-items: center;

        width: fit-content;
        height: 1.5rem;

        padding: 0 1rem;

        font-size: 1.25rem;
        font-weight: 500;
        text-decoration: none;

        color: rgb(var(--color-accent));
        background: unset;
        border: none;
        border-left: 1px solid rgb(var(--color-accent));
      }
    }
  }

  .images {
    position: relative;

    order: 1;

    &::before {
      content: '';

      display: block;

      width: 6rem;
      height: 6rem;

      position: absolute;
      top: 0;
      right: 0;
      translate: 1rem -1rem;

      border: 1px solid rgb(var(--color-accent));
      opacity: .2;

      z-index: -1;
    }

    .image {
      width: 100%;
      height: 16rem;

      object-fit: cover;
    }
  }
`;

export default StyledSection;
