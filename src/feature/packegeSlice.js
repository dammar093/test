import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  packages: []
}

export const packageSlice = createSlice({
  name: 'packages',
  initialState,
  reducers: {
    // add package in the global state
    addPackage:(state,action)=>{
      state.products = action.payload;
      console.log(initialState);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addPackage } = packageSlice.actions

export default packageSlice.reducer