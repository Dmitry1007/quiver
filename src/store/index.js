import { configureStore } from "@reduxjs/toolkit";
import {
  surfboardsReducer,
  changeSearchTerm,
  addSurfboard,
  removeSurfboard,
} from "./slices/surfboardsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    surfboards: surfboardsReducer,
    form: formReducer,
  },
});

export {
  store,
  changeSearchTerm,
  addSurfboard,
  removeSurfboard,
  changeName,
  changeCost,
};
