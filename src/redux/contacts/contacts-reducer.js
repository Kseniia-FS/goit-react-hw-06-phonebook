import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { addContact, changeFilter, deleteContact } from "./contacts-actions";

const initialContacts = JSON.parse(window.localStorage.getItem("contacts")) ?? [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const items = createReducer(initialContacts, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items,
  filter,
});
