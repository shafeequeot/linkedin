import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user:null
  },
  // The `reducers` field lets us define reducers and generate associated actions

    // Use the PayloadAction type to declare the contents of `action.payload`
    logIn: (state, action) => {
      state.value = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    },

})

export const { logIn, logOut } = userSlice.actions;

export const selectUser = (state) => state.user;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.


export default userSlice.reducer;
