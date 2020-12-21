import { useSelector } from 'react-redux';

import Field from 'features/Game/Questions/components/Field';

import data from 'features/Game/Questions/data.json';

import fieldSizes from 'constants/fieldSizes';

import { getCurrentId } from 'features/Game/selectors';

import modifyScore from 'helpers/modifyScore';

const ScoreList = () => {
  const currentId = useSelector(getCurrentId);
  return (
    <>
      {[...data].reverse().map(({ id, price }) => (
        <Field
          key={id}
          isActive={currentId === id}
          isDisabled={currentId - 1 >= id}
          id={id}
          size={fieldSizes.smToMd}
          modifyLabel={modifyScore}
        >
          {price}
        </Field>
      ))}
    </>
  );
};

export default ScoreList;
