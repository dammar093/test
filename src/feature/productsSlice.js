import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // add products in the global state
    addProducts:(state,action)=>{
      state.products = action.payload;
    },
    isChecked:(state,action)=>{
    const index = state.products.findIndex(product=>product.id == action.payload.id)
    console.log(index);
    state.products[index].isChecked=action.payload.isChecked
    }
  },
})

// Action creators are generated for each case reducer function
export const { addProducts,isChecked } = productsSlice.actions

export default productsSlice.reducer