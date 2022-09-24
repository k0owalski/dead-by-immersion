import projectImage from "assets/images/when-the-sun-goes-down-header-background-image.png";
import Button from "components/atoms/Button/Button";
import StyledProjectBanner from "./StyledProjectBanner";

function ProjectBanner() {

  return (
    <StyledProjectBanner className="project-banner" projectImage={projectImage}>
      <p className="title">When the sun goes down</p>
      <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec diam gravida euismod orci. Nunc enim et, semper magna senectus tellus...</p>
      <Button title="See more" />
    </StyledProjectBanner>
  );
}

export default ProjectBanner;
