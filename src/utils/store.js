import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: appslice,
    search: searchSlice,
  },
});

export default store;
