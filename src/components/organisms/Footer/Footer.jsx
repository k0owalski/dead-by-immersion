import logo from 'assets/images/logo.png';
import ContactInfo from 'components/molecules/ContactInfo/ContactInfo';

import StyledFooter from "./StyledFooter";

const Footer = () => (
  <StyledFooter>
    <img className="logo" src={logo} alt="Dead by Immersion logo" />
    <ContactInfo />
    <span className="copyright">Copyright &copy; 2022 Dead by Immersion sp. z.o.o.</span>
  </StyledFooter>
);

export default Footer;
