import HeaderTile from "components/atoms/HeaderTile/HeaderTile";

import firstTileIcon from 'assets/images/header-tile-icon.svg';

import StyledHeaderTiles from "./StyledHeaderTiles";


const HeaderTiles = () => {
  const data = [
    { id: 0, title: 'Number I', content: 'Winner of the award for the best game of 2022', icon: firstTileIcon },
    { id: 1, title: 'Number I', content: 'Winner of the award for the best game of 2022', icon: firstTileIcon },
    { id: 2, title: 'Number I', content: 'Winner of the award for the best game of 2022', icon: firstTileIcon },
  ];

  return (
    <StyledHeaderTiles className="header-tiles">
      {
        data.map(item => <HeaderTile key={item.id} data={item} />)
      }
    </StyledHeaderTiles>
  );
};

export default HeaderTiles;
