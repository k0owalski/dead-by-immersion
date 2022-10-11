import styled from "styled-components";

const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;

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
`;

export default StyledContactForm;
