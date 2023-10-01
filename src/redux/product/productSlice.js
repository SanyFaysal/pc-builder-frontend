const initialState = {
  parts: {
    motherBoard: {},
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
    setMotherboard: (state, { payload }) => {
      state.parts.motherboard = payload;
    },
    setCpuProcessor: (state, { payload }) => {
      state.parts.cpu_processor = payload;
    },
    setRam: (state, { payload }) => {
      state.parts.ram = payload;
    },
    setPowerSupplyUnit: (state, { payload }) => {
      state.parts.power_supply_unit = payload;
    },
    setStorageDevice: (state, { payload }) => {
      state.parts.storage_device = payload;
    },
    setMonitor: (state, { payload }) => {
      state.parts.monitor = payload;
    },
    setOthers: (state, { payload }) => {
      state.parts.others = payload;
    },
  },
});

export const {
  setMonitor,
  setCpuProcessor,
  setMotherboard,
  setOthers,
  setPowerSupplyUnit,
  setRam,
  setStorageDevice,
} = productSlice.actions;
