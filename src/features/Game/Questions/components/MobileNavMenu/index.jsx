import { useState } from 'react';
import classNames from 'classnames';

import ScoreListMobile from 'features/Game/Questions/components/ScoreListMobile';

import dataPropType from 'customPropTypes/dataPropType';

import './styles.scss';

const MobileNavMenu = ({ data }) => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const toggleMenu = () => setIsMenuOpened(!isMenuOpened);

  return (
    <>
      <div
        onClick={toggleMenu}
        className={classNames('menu-btn', { open: isMenuOpened })}
      >
        <div className="menu-btn--burger" data-testid="burger"></div>
      </div>

      {isMenuOpened && <ScoreListMobile />}
    </>
  );
};

MobileNavMenu.propTypes = {
  data: dataPropType.isRequired,
};

export default MobileNavMenu;
