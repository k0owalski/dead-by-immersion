import Button from 'components/atoms/Button/Button';
import SectionTitle from 'components/atoms/SectionTitle/SectionTitle';
import StyledSection from "components/molecules/Section/StyledSection";

const HomeAboutUsSection = () => (
  <StyledSection>
    <div className="section-content">
      <SectionTitle title="The Dead by Immersion team" />
      <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nostrum, sit voluptatum provident quos rem necessitatibus impedit quibusdam quisquam perferendis dicta quis accusamus nulla eos ab eum qui autem?</p>
      <Button className="btn" title="See more" to="/about-us" />
    </div>
    <div className="images">
      <img className="image image-s" src={`${process.env.PUBLIC_URL}images/home/home-s.png`} alt="Our team" />
    </div>
  </StyledSection>
);

export default HomeAboutUsSection;
