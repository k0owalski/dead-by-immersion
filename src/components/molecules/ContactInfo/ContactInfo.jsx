import StyledContactInfo from "./StyledContactInfo";

const ContactInfo = () => (
  <StyledContactInfo>
    <div className="contact-data-innerwrapper">
      <span className="brand-name">Dead by Immersion sp. z.o.o.</span>
      <span className="address-line">xerceserty 034/04</span>
      <span className="address-line">00-000, Kraków</span>
    </div>
    <div className="contact-data-innerwrapper">
      <a className="email" href="mailto:contact@deadbyimmersion">contact@deadbyimmersion</a>
      <a className="phone" href="tel:+48000000000">+48 000 000 000</a>
    </div>
  </StyledContactInfo>
);

export default ContactInfo;
