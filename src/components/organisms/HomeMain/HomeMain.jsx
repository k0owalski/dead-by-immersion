import HeaderTiles from 'components/molecules/HeaderTiles/HeaderTiles';
import HomeAboutUsSection from 'components/organisms/HomeAboutUsSection/HomeAboutUsSection';
import HomeContactSection from 'components/organisms/HomeContactSection/HomeContactSection';

import StyledHomeMain from "./StyledHomeMain";

const HomeMain = () => (
  <StyledHomeMain>
    <HeaderTiles />
    <HomeAboutUsSection />
    <HomeContactSection />
  </StyledHomeMain>
);

export default HomeMain;
