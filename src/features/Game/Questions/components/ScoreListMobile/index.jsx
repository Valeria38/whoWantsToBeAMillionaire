import { useSelector } from 'react-redux';

import Field from 'features/Game/Questions/components/Field';

import fieldSizes from 'Constants/fieldSizes';

import useBreakpoints from 'hooks/useBreakpoints';

import { getCurrentId } from 'features/Game/selectors';

import data from 'features/Game/Questions/data.json';

import modifyScore from 'helpers/modifyScore';

import './styles.scss';

const ScoreListMobile = () => {
  const { isMd } = useBreakpoints();
  const currentId = useSelector(getCurrentId);

  return (
    <div className="score" data-testid="mobile-score-list">
      {[...data].reverse().map(({ id, price }) => (
        <Field
          key={id}
          id={id}
          isActive={currentId === id}
          isDisabled={currentId - 1 >= id}
          size={isMd ? fieldSizes.lg : fieldSizes.sm}
          modifyLabel={modifyScore}
        >
          {price}
        </Field>
      ))}
    </div>
  );
};

export default ScoreListMobile;
