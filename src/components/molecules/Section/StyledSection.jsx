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

    .content {
      padding: 0 0 1.5rem;

      font-weight: 300;
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
      transform: translate(1rem, -1rem);

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
