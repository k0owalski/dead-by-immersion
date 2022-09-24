import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledButton = styled(Link)`
  display: grid;
  place-items: center;

  width: fit-content;
  height: 1.5rem;

  padding: 0 1rem;

  font-size: ${({ size }) => size === "large" ? '1.25rem' : '1rem'};
  font-weight: 500;
  text-decoration: none;

  color: rgb(var(--color-accent));
  background: unset;
  border: none;
  border-left: 1px solid rgb(var(--color-accent));
`;

export default StyledButton;
