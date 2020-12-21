import { useState } from 'react';
import classNames from 'classnames';

import ScoreListMobile from 'features/Game/Questions/components/ScoreListMobile';

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

      {isMenuOpened && <ScoreListMobile data={data} />}
    </>
  );
};

export default MobileNavMenu;
