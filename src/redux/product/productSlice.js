import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  parts: {
    motherboard: {},
    cpu_processor: {},
    ram: {},
    power_supply_unit: {},
    storage_device: {},
    monitor: {},
    others: [],
  },
  totalComponents: 0,
};

export const productSlice = createSlice({
  name: 'parts',
  initialState,
  reducers: {
    setBuild: (state, { payload }) => {
      if (payload?.category !== 'others') {
        state.parts[payload.category] = payload;
        state.totalComponents += 1;
      } else if (payload?.category === 'others') {
        state.parts['others'].push(payload);
      }
    },
    clearBuild: (state) => {
      state.parts = {
        motherboard: {},
        cpu_processor: {},
        ram: {},
        power_supply_unit: {},
        storage_device: {},
        monitor: {},
        others: [],
      };
      state.totalComponents = 0;
    },
    removeSingleBuild: (state, { payload }) => {
      state.parts[payload.category] = {};
      state.totalComponents -= 1;
    },
    removeOthersSingleBuild: (state, { payload }) => {
      state.parts.others = state.parts.others.filter(
        (p) => p?._id !== payload?._id
      );
    },
  },
});

export const {
  setBuild,
  clearBuild,
  removeSingleBuild,
  removeOthersSingleBuild,
} = productSlice.actions;
export default productSlice.reducer;
