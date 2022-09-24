import styled from "styled-components";

const StyledProjectBanner = styled.header`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
  min-height: 100vh;

  padding: 12rem 10%;

  background-image: linear-gradient(0deg, rgba(26,26,26,1) 0%, rgba(26,26,26,0.5) 100%), url('${({ projectImage }) => projectImage}');
  background-size: cover;
  background-repeat: no-repeat;

  .title {
    font-family: 'Oxygen';
    font-size: 2.5rem;
    font-weight: 600;
  }
`;

export default StyledProjectBanner;
