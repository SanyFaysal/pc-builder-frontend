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
};

export const productSlice = createSlice({
  name: 'parts',
  initialState,
  reducers: {
    setBuild: (state, { payload }) => {
      state.parts[payload.category] = payload;
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
    },
    removeSingleBuild: (state, { payload }) => {
      state.parts[payload.category] = {};
    },
  },
});

export const { setBuild, clearBuild, removeSingleBuild } = productSlice.actions;
export default productSlice.reducer;
