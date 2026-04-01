import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  role: null,
  is_superadmin: false,
  hydrated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    hydrateFromStorage(state, action) {
      state.token = action.payload?.token ?? null;
      state.hydrated = true;
    },
    setAuth(state, action) {
      state.token = action.payload?.token ?? null;
      state.role = action.payload?.role ?? null;
      state.is_superadmin = Boolean(action.payload?.is_superadmin);
      state.hydrated = true;
    },
    clearAuth(state) {
      state.token = null;
      state.role = null;
      state.is_superadmin = false;
      state.hydrated = true;
    },
  },
});

export const { hydrateFromStorage, setAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;

