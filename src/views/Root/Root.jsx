import HeaderTiles from 'components/molecules/HeaderTiles/HeaderTiles';
import ProjectBanner from 'components/organisms/ProjectBanner/ProjectBanner';

function Root() {
  return (
    <div className="root-view">
      <ProjectBanner />
      <HeaderTiles />
    </div>
  );
}

export default Root;
