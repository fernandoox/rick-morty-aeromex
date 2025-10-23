import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "@/types/character";
import { FavoritesState } from "@/types/favorites";

const initialState: FavoritesState = {
  characters: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Character>) => {
      const exists = state.characters.find(
        (char) => char.id === action.payload.id
      );
      if (!exists) {
        state.characters.push(action.payload);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.characters = state.characters.filter(
        (char) => char.id !== action.payload
      );
    },
    setFavorites: (state, action: PayloadAction<Character[]>) => {
      state.characters = action.payload;
    },
  },
});

export const { addFavorite, removeFavorite, setFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
