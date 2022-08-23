import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./covidSlice";

export default configureStore({
  reducer: {
    covidData: DataReducer,
  },
});
