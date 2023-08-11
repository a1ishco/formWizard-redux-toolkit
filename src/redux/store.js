import { configureStore } from '@reduxjs/toolkit';
import formWizardReducer from './formWizardSlice';

const store = configureStore({
  reducer: {
    formWizard: formWizardReducer,
  },
});

export default store;
