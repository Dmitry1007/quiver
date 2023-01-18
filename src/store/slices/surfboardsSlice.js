import { createSlice, nanoid } from "@reduxjs/toolkit";

const surfboardsSlice = createSlice({
  name: "surfboards",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addSurfboard(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeSurfboard(state, action) {
      // action.payload should be the id of the surfboard
      const updated = state.data.filter((surfboard) => {
        return surfboard.id !== action.payload;
      });
      state.data = updated;
    },
  },
});

export const { changeSearchTerm, addSurfboard, removeSurfboard } =
  surfboardsSlice.actions;
export const surfboardsReducer = surfboardsSlice.reducer;
