import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character } from "@/types/character";

interface SelectedCharacterState {
  character: Character | null;
}

const initialState: SelectedCharacterState = {
  character: null,
};

const selectedCharacterSlice = createSlice({
  name: "selectedCharacter",
  initialState,
  reducers: {
    setSelectedCharacter: (state, action: PayloadAction<Character>) => {
      state.character = action.payload;
    },
    clearSelectedCharacter: (state) => {
      state.character = null;
    },
  },
});

export const { setSelectedCharacter, clearSelectedCharacter } =
  selectedCharacterSlice.actions;
export default selectedCharacterSlice.reducer;
