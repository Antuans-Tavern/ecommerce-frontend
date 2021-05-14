import { configureStore, createReducer, EnhancedStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

export const createStore = () =>
  createWrapper(
    (_?: any): EnhancedStore =>
      configureStore({
        reducer: createReducer({}, (builder) => builder),
        devTools: process.env.NODE_ENV === "development",
      })
  );
