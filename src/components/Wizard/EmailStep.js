import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  // setStep,
  // setEmail,
  setField } from "../../redux/formWizardSlice";
import { validateEmail } from "../../utils/validation";

const EmailStep = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.formWizard.email);

  const handleNext = () => {
    if (validateEmail(email)) {
      dispatch(setField({ field: "email", value: email }));
      dispatch(setField({ field: "step", value: 2 }));
    }
  };

  return (
    <div className="formEmail">
      <h3>Please enter your email address</h3>
      <input
        type="text"
        placeholder=" eg. example@john.com"
        value={email}
        onChange={(e) =>
          dispatch(setField({ field: "email", value: e.target.value }))
        }
      />
      <br />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default EmailStep;
