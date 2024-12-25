import { configureStore } from "@reduxjs/toolkit";
import langugageSlice from "./langugage-slice";
import modalSlice from "./modal-slice";
export const store = configureStore({
  reducer: {
    langugageSlice,
    modalSlice,
  },
});
