import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  parts: {
    motherboard: {},
    cpu_processor: {},
    ram: {},
    power_supply_unit: {},
    storage_device: {},
    monitor: {},
    others: {},
  },
  totalComponents: 0,
};

export const productSlice = createSlice({
  name: 'parts',
  initialState,
  reducers: {
    setBuild: (state, { payload }) => {
      state.parts[payload.category] = payload;
      state.totalComponents += 1;
    },
    clearBuild: (state) => {
      state.parts = {
        motherboard: {},
        cpu_processor: {},
        ram: {},
        power_supply_unit: {},
        storage_device: {},
        monitor: {},
        others: {},
      };
      state.totalComponents = 0;
    },
    removeSingleBuild: (state, { payload }) => {
      state.parts[payload.category] = {};
      state.totalComponents -= 1;
    },
  },
});

export const { setBuild, clearBuild, removeSingleBuild } = productSlice.actions;
export default productSlice.reducer;
