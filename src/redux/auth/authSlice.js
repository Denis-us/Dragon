import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations'

const initialState = {
  user: { email: null, password: null, },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.registration.fulfilled](state, {payload}) {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
    },
    [authOperations.login.fulfilled](state, {payload}) {
        state.user = payload.user
        state.token = payload.token
        state.isLoggedIn = true
    },
    [authOperations.logout.fulfilled](state, {payload}) {
        state.user = {email: null, password: null}
        state.token = null
        state.isLoggedIn = false
    },
    [authOperations.getCurrentUser.pending](state, {payload}) {
        state.isFetchingCurrentUser = true
    },
    [authOperations.getCurrentUser.fulfilled](state, {payload}) {
        state.user = payload
        state.isLoggedIn = true
        state.isFetchingCurrentUser = false
    },
    [authOperations.getCurrentUser.rejected](state, {payload}) {
        state.isFetchingCurrentUser = false
    },
  },
});

export default authSlice.reducer;