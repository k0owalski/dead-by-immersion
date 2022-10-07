import PropTypes from 'prop-types';

import Button from "components/atoms/Button/Button";

import StyledSlide from "./StyledSlide";

const Slide = ({ slide: { title, description, image, opacity } }) => (
  <StyledSlide slideOpacity={opacity}>
    <div className="content">
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <Button title="See more" to="/project/when-the-sun-goes-down" />
    </div>
    <div className="background">
      <img className="background-image" src={`${process.env.PUBLIC_URL}images/slider/${image}`} alt={title} />
    </div>
  </StyledSlide>
);

Slide.propTypes = {
  slide: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired
};

export default Slide;
