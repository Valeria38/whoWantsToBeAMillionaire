import { useSelector } from 'react-redux';

import Field from 'features/Game/Questions/components/Field';

import data from 'features/Game/Questions/data.json';
import { fieldSizes } from 'constants/fieldSizes';

import { useBreakpoints } from 'hooks/useBreakpoints';

import { getCurrentId } from 'features/Game/selectors';

import { modifyScore } from 'helpers/modifyScore';

import './styles.scss';

const ScoreListMobile = () => {
  const { isMd } = useBreakpoints();
  const currentId = useSelector(getCurrentId);

  return (
    <div className="score">
      {[...data].reverse().map(({ id, price }) => {
        return (
          <Field
            isActive={currentId === id}
            isDisabled={currentId - 1 >= id}
            size={isMd ? fieldSizes.lg : fieldSizes.sm}
            modifyLabel={modifyScore}
          >
            {price}
          </Field>
        );
      })}
    </div>
  );
};

export default ScoreListMobile;
