// Packages
import { createSelector, createSlice } from '@reduxjs/toolkit';

// Interfaces
import { RootState } from '@app/store';
import { PlannerInitialState } from './types';

// Slice
const initialState: PlannerInitialState = {
  payload: {},
  plannerStep: 0
};

export const plannerSlice = createSlice({
  name: 'planner',
  initialState,
  reducers: {
    setPayload: (state, action) => {
      state.payload = { ...state.payload, ...action.payload };
    },
    updatePlannerStep: (state, action) => {
      state.plannerStep = action.payload;
    },
    reset: (state) => {
      state.payload = {};
      state.plannerStep = 0;
    }
  }
});

// Action creators are generated for each case reducer function
export const plannerActions = plannerSlice.actions;

export default plannerSlice.reducer;

// Selectors
const _planner = (state: RootState) => state.planner;

export const getPlannerPayload = createSelector(_planner, (data) => data.payload);

export const getPlannerStep = createSelector(_planner, (data) => data.plannerStep);
