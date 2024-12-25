import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  languageModalVisibilty: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    languageModalVisibiltyAction(state) {
      state.languageModalVisibilty = !state.languageModalVisibilty;
    },
  },
});

export const { languageModalVisibiltyAction } = modalSlice.actions;
export default modalSlice.reducer;
