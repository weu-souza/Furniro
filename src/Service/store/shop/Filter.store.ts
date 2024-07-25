import { configureStore, createSlice } from "@reduxjs/toolkit";

interface IFilter {
  show: number;
  shortBy: string;
}

type InitialState = {
  filter: IFilter[];
};

const initialState: InitialState = {
  filter: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    AddFilter: (state, { payload }) => {
      state.filter.push(payload);
    },
  },
});
export const { AddFilter } = filterSlice.actions;

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
  },
});
