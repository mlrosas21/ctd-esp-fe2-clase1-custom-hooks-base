import Languages from 'features/language/language.types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LS = {
  language: Languages
}

const initialState: LS = {
  language: "ENGLISH"
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Languages>) => {
      state.language = action.payload
    }
  }
})


export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer
