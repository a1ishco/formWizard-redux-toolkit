import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  step: 0,
  name: '',
  email: '',
  phone: '',
  dialCode: '',
  country: ''
};

const formWizardSlice = createSlice({
  name: 'formWizard',
  initialState,
  reducers: {
    // setStep: (state, action) => {
    //   state.step = action.payload;
    // },
    // setName: (state, action) => {
    //   state.name = action.payload;
    // },
    // setEmail: (state, action) => {
    //   state.email = action.payload;
    // },
    // setPhone: (state, action) => {
    //   state.phone = action.payload;
    // },
    // setDialCode: (state, action) => {
    //   state.dialCode = action.payload;
    // },
    // setCountry: (state, action) => {
    //   state.country = action.payload;
    // },
    setField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
  },
});

// export const { setStep, setName, setEmail, setPhone, setDialCode, setCountry } = formWizardSlice.actions;
export const { setField } = formWizardSlice.actions;

export default formWizardSlice.reducer;
