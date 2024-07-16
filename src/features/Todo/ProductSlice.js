import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) {
      throw new Error("Something Is Wrong");
    }
    const data = await response.json();
    return data.products;
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        (state.loading = false), (state.products = action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        (state.loading = false), (state.error = action.error.message);
      });
  },
});

export default ProductSlice.reducer;
