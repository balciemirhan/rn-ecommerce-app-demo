import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../data/mockData";
import { Product } from "../../types";

interface ProductState {
  items: Product[];
  categories: string[];
}

const initialState: ProductState = {
  items: mockData,
  categories: Array.from(new Set(mockData.map(product => product.category))),
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    // Ürünlerle ilgili reducer'lar ekleyebilirsiniz
  },
});

export default productSlice.reducer;
