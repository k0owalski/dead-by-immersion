import Button from 'components/atoms/Button/Button';
import ContactInfo from 'components/molecules/ContactInfo/ContactInfo';
import HeaderTiles from 'components/molecules/HeaderTiles/HeaderTiles';
import ProjectBanner from 'components/organisms/ProjectBanner/ProjectBanner';
import Section from 'components/organisms/Section/Section';

import StyledRoot from './StyledRoot';

function Root() {
  return (
    <StyledRoot>
      <ProjectBanner />
      <main className="root-main">
        <HeaderTiles />
        <Section>
          <>
            <article className="section-content">
              <h2 className='heading'>The Dead by Immersion team</h2>
              <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nostrum, sit voluptatum provident quos rem necessitatibus impedit quibusdam quisquam perferendis dicta quis accusamus nulla eos ab eum qui autem?</p>
              <Button className="btn" title='See more' to='/about-us' />
            </article>
            <div className="images">
              <img className="image image-s" src={`${process.env.PUBLIC_URL}images/home/home-s.png`} alt="Our team" />
            </div>
          </>
        </Section>
        <Section>
          <div className="section-content">
            <h2 className='heading'>Have a question?</h2>
            <ContactInfo />
            <form className="contact-form">
              <div className="input">
                <label className="label" htmlFor="name-field">Full name</label>
                <input className="input-field name-field" id="name-field" name="name-field" type="text" />
              </div>
              <div className="input">
                <label className="label" htmlFor="subject-field">Subject</label>
                <input className="input-field subject-field" id="subject-field" name="subject-field" type="text" />
              </div>
              <div className="input">
                <label className="label" htmlFor="message-field">Message</label>
                <textarea className='input-field message-field' id="message-field" name="message-field" />
              </div>
              <input className="submit" type="submit" value="Submit" />
            </form>
          </div>
        </Section>
      </main>
    </StyledRoot>
  );
}

export default Root;
