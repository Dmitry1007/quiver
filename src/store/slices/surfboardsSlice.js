import { createSlice, nanoid } from "@reduxjs/toolkit";

const surfboardsSlice = createSlice({
  name: "surfboards",
  initialState: {
    searchTerm: "",
    surfboards: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addSurfboard(state, action) {
      state.surfboards.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid,
      });
    },
    removeSurfboard(state, action) {
      // action.payload should be the id of the surfboard
      const updated = state.surfboards.filter((surfboard) => {
        return surfboard.id !== action.payload;
      });
      state.surfboards = updated;
    },
  },
});

export const { changeSearchTerm, addSurfboard, removeSurfboard } =
  surfboardsSlice.actions;
export const surfboardsReducer = surfboardsSlice.reducer;
