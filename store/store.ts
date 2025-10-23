import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favorites-slice";
import charactersReducer from "./characters-slice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    characters: charactersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
