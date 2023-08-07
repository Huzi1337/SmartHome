import { configureStore } from "@reduxjs/toolkit";
import roomsReducer from "./slices/roomsSlice";

const store = configureStore({
  reducer: {
    rooms: roomsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
