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

  @media screen and (min-width: 480px) {
    padding: 2.5rem;
  }

  &:nth-last-of-type(2) { background: rgb(var(--color-tile-lighter)); }

  &:nth-last-of-type(3) { background: rgb(var(--color-tile-lightest)); }

  .icon {
    width: 2rem;
    height: 2rem;

    @media screen and (min-width: 480px) {
      width: 3rem;
      height: 3rem;
    }
  }

  .text-content {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    .title {
      font-weight: 500;

      @media screen and (min-width: 480px) {
        font-size: 1.25rem;
      }
    }

    .content {
      font-size: .75rem;
      font-weight: 300;

      @media screen and (min-width: 480px) {
        font-size: 1rem;
      }
    }
  }
`;

export default StyledHeaderTile;
