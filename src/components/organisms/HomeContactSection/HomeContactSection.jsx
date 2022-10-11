import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import ContactForm from 'components/molecules/ContactForm/ContactForm';
import ContactInfo from 'components/molecules/ContactInfo/ContactInfo';
import StyledSection from "components/molecules/Section/StyledSection";

const HomeContactSection = () => (
  <StyledSection>
    <div className="section-content">
      <SectionTitle title="Have a question?" />
      <ContactInfo />
      <ContactForm />
    </div>
  </StyledSection>
);

export default HomeContactSection;
