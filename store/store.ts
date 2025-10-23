import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites-slice";
import charactersReducer from "./characters-slice";
import selectedCharacterReducer from "./selected-character-slice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    characters: charactersReducer,
    selectedCharacter: selectedCharacterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
