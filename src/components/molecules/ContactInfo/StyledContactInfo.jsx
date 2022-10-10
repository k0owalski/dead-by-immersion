import styled, { css } from "styled-components";

import mailIcon from 'assets/images/mail-icon.svg';
import phoneIcon from 'assets/images/phone-icon.svg';

const StyledContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;

  margin: 3rem 0 3rem;

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

  ${({ rightAlign }) => rightAlign && css`
    align-items: flex-end;

    .brand-name,
    .address-line {
      text-align: right;
    }

    .email,
    .phone {
      justify-content: flex-end;
    }

    &::before {
      content: '';

      display: block;

      width: 1px;
      height: 100%;

      position: absolute;
      top: 0;
      left: unset;
      right: -1rem;

      background: rgb(var(--color-accent));
      border-radius: 1rem;
      opacity: .2;
    }
  `}
`;

export default StyledContactInfo;