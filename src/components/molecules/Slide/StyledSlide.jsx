import styled from 'styled-components';

const StyledSlide = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  opacity: ${({ slideOpacity }) => `${Math.max(0, Math.min(slideOpacity, 1))}`};

  padding: 12rem 10% 0;

  transition: opacity .32s ease;

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    transform: translate(${({ slideOpacity }) => Math.max(0, Math.min(slideOpacity, 1)) ? '0, 0' : '-1rem, 0'});

    transition: transform .64s;

    .title {
      font-family: 'Oxygen';
      font-size: 2.5rem;
      font-weight: 600;

      @media screen and (min-width: 480px) {
        font-size: 3rem;
      }
    }

    .description {
      display: -webkit-box;

      max-width: 100%;

      font-size: 1rem;

      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;

      overflow: hidden;

      @media screen and (min-width: 480px) {
        font-size: 1.25rem;
      }
    }
  }

  .background {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    left: 0;

    z-index: -1;

    &::before,
    &::after {
      content: '';

      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      left: 0;
    }

    &::before {
      background: #1a1a1a;
    }

    &::after {
      background: linear-gradient(0deg, rgba(var(--color-background), 1) 0%, rgba(var(--color-background), 0) 100%);
    }

    .background-image {
      width: 100%;
      height: 100%;

      object-fit: cover;
      opacity: .5;
    }
  }
`;

export default StyledSlide;
