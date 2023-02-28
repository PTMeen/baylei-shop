import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import cartReducer from "@/features/cart/cartSlice";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: hardSet,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
