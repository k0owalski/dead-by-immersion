import styled from "styled-components";

const StyledHeaderTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  width: 100%;

  padding: 1.5rem;

  background: rgb(var(--color-tile));

  &:nth-last-of-type(2) { background: rgb(var(--color-tile-lighter)); }

  &:nth-last-of-type(3) { background: rgb(var(--color-tile-lightest)); }

  .icon {
    width: 2rem;
    height: 2rem;
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    .title {
      font-weight: 500;
    }

    .content {
      font-size: .75rem;
      font-weight: 300;
    }
  }
`;

export default StyledHeaderTile;
