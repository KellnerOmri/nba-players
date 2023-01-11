import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DataSliceModel} from "../models/data-slice.model";
import {PlayerModel} from "../models/player.model";

const initialState: DataSliceModel = {
  playersDict: {},
  searchInput:"",
  backgroundColor:"#ffffff"
};

export const dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setPlayersList: (state, action: PayloadAction<{ [key: string]: PlayerModel }>) => {
      state.playersDict = action.payload;
    },
    setSearchInput: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<string>) => {
      state.backgroundColor = action.payload;
    },
  },
  extraReducers:{}
});

export const {
  setPlayersList,setSearchInput,setBackgroundColor
} = dataSlice.actions;

export default dataSlice.reducer;
