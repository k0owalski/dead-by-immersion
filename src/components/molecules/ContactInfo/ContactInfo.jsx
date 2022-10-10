import PropTypes from 'prop-types';

import StyledContactInfo from "./StyledContactInfo";

const ContactInfo = ({ rightAlign }) => (
  <StyledContactInfo rightAlign={rightAlign}>
    <div className="contact-data-innerwrapper">
      <span className="brand-name">Dead by Immersion sp. z.o.o.</span>
      <span className="address-line">xerceserty 034/04</span>
      <span className="address-line">00-000, Kraków</span>
    </div>
    <div className="contact-data-innerwrapper">
      <div className="email">contact@deadbyimmersion.com</div>
      <div className="phone">+48 000 000 000</div>
    </div>
  </StyledContactInfo>
);

ContactInfo.propTypes = {
  rightAlign: PropTypes.bool
};

ContactInfo.defaultProps = {
  rightAlign: false
}

export default ContactInfo;
