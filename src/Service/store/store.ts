import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../api/model/ProductsModel";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


type InitialState = {
  products: IProducts[];
  category: string;
  filter: number;
};


const initialState: InitialState = {
  products: [],
  category: "default",
  filter: 8,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<IProducts[]>) => {
      state.products = action.payload;
    },
    AddItem: (state ,action: PayloadAction<number>) => {
      state.filter = action.payload;
    },
    AddCategory: (state,action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { getProducts,AddCategory ,AddItem} = productSlice.actions;

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    filter: productSlice.reducer,
    category: productSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatchItems = () => useDispatch<AppDispatch>();
export const useAppSelectorItem: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatchCategory = () => useDispatch<AppDispatch>();
export const useAppSelectorCategory: TypedUseSelectorHook<RootState> = useSelector;
