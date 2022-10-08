import PropTypes from 'prop-types';

import StyledHeaderTile from "./StyledHeaderTile";

const HeaderTile = ({ data: { icon, title, content } }) => (
  <StyledHeaderTile>
    <img className="icon" src={icon} alt={title} />
    <div className="text-content">
      <span className="title">{title}</span>
      <span className="content">{content}</span>
    </div>
  </StyledHeaderTile>
);

HeaderTile.propTypes = {
  data: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])).isRequired
};

export default HeaderTile;
