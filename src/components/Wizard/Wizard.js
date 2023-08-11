import React from 'react';
import { useSelector } from 'react-redux';
import NameStep from './NameStep';
import EmailStep from './EmailStep';
import PhoneStep from './PhoneStep';
import FinalStep from './FinalStep';
const Wizard = () => {
  const step = useSelector((state) => state.formWizard.step);

  const renderStep = () => {
    switch (step) {
      case 0:
        return <NameStep />;
      case 1:
        return <EmailStep />;
      case 2:
        return <PhoneStep />;
        case 3:
        return <FinalStep />;
      default:
        return <NameStep />;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export default Wizard;
