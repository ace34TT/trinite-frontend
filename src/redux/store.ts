import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "../features/theme.feature";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const reducers = combineReducers({
  theme: ThemeReducer,
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["theme"],
};
const persistedReducer = persistReducer(persistConfig, reducers);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [""],
      ignoredPaths: ["theme"],
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
