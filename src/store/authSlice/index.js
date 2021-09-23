import { createSlice } from '@reduxjs/toolkit'

const authInitialState = {
  isLogged:!!localStorage.getItem("token_id"),
  user: {
    isAdmin:false,
    firstName:null,
    lastName:null,
    avatar:null,
    email:null
  }
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
      fillUserData : ( state , action )=> {
        state.user = action.payload
        state.isLogged = true
      }
  }
});

export default authSlice.reducer;
export const { fillUserData } = authSlice.actions;