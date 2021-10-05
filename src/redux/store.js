import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { contactsReducer } from "./contacts/contacts-reducer";

const persistConfig = {
  key: "items",
  storage,
  blacklist: ["filter"],
};

const contactsPersistedReducer = persistReducer(persistConfig, contactsReducer);
const store = configureStore({
  reducer: {
    contacts: contactsPersistedReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export { store, persistor };
