import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCharacters } from "@/services/characters";
import { CharactersState } from "@/types/characters-state";

const initialState: CharactersState = {
  characters: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalPages: 0,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async ({ page = 1 }: { page?: number }) => {
    const response = await getCharacters(page);
    return response;
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload.results;
        state.currentPage = 1;
        state.totalPages = action.payload.info.pages;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch characters";
      });
  },
});

export default charactersSlice.reducer;
