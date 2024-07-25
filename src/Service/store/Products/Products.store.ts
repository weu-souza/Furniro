import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../../api/model/ProductsModel";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


type InitialState = {
  products: IProducts[];
};


const initialState: InitialState = {
  products: [],
};


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProducts: (state, action: PayloadAction<IProducts[]>) => {
      state.products = action.payload;
    },
  },
});

export const { getProducts } = productSlice.actions;

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
