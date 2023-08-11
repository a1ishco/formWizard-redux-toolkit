import React from 'react';
import styles from './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { setField } from '../../redux/formWizardSlice';
import { validateName } from '../../utils/validation';

const NameStep = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.formWizard.name);

  const handleNext = () => {
    if (validateName(name)) {
      dispatch(setField({ field: 'name', value: name }));
      dispatch(setField({ field: 'step', value: 1 }));
    }
  };

  return (
    <div className="formName">
      <h3>Please enter your name and surname</h3>
      <input
        type="text"
        placeholder=" eg. John Smith"
        value={name}
        onChange={(e) => dispatch(setField({ field: 'name', value: e.target.value }))}
      />
      <br />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default NameStep;
