// src/redux/onboardingSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentStep: 1, 
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    nextStep: (state) => {
      if (state.currentStep <= 3) state.currentStep += 1;
    },
    prevStep: (state) => {
      if (state.currentStep > 1) state.currentStep -= 1;
    },
    resetOnboarding: (state) => {
      state.currentStep = 1;
    },
  },
});

export const { nextStep, prevStep, resetOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer;
