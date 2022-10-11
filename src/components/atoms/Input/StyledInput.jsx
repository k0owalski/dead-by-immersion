import styled from "styled-components";

const StyledInput = styled.div`
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

  .textarea {
    padding: .75rem 1rem;
  }
`;

export default StyledInput;
