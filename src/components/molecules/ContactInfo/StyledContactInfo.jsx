import styled from "styled-components";

import mailIcon from 'assets/images/mail-icon.svg';
import phoneIcon from 'assets/images/phone-icon.svg';

const StyledContactInfo = styled.address`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;

  margin: 3rem 0 3rem;

  @media screen and (min-width: 1024px) {
    align-items: flex-end;

    grid-column: 2 / 3;
    grid-row: 1 / 3;

    .brand-name,
    .address-line {
      text-align: right;
    }
  }

  &::before {
    content: '';

    display: block;

    width: 1px;
    height: 100%;

    position: absolute;
    top: 0;
    left: -1rem;

    background: rgb(var(--color-accent));
    border-radius: 1rem;
    opacity: .2;

    @media screen and (min-width: 1024px) {
      left: unset;
      right: -1rem;
    }
  }

  .contact-data-innerwrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .brand-name {
      font-size: 1.25rem;
      font-weight: 500;
    }

    .address-line, .email, .phone {
      font-weight: 300;
    }

    .email, .phone {
      display: flex;
      gap: .75rem;

      text-decoration: none;

      color: rgb(var(--color-text));

      @media screen and (min-width: 1024px) {
        justify-content: flex-end;
      }
    }

    .email::before,
    .phone::before {
      content: '';

      display: grid;
      place-items: center;

      width: 1.25rem;
      height: 1.25rem;

      background-image: url('${mailIcon}');
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }

    .phone::before {
      background-image: url('${phoneIcon}');
    }
  }
`;

export default StyledContactInfo;
