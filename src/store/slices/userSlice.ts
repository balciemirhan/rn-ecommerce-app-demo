import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

const initialState: User = {
  id: 1,
  name: "Kullanıcı Adı",
  email: "kullanici@example.com",
  favorites: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<number>) {
      if (!state.favorites.includes(action.payload)) {
        state.favorites.push(action.payload);
      }
    },
    removeFromFavorites(state, action: PayloadAction<number>) {
      state.favorites = state.favorites.filter(id => id !== action.payload);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = userSlice.actions;
export default userSlice.reducer;
