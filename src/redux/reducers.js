import { createReducer } from "@reduxjs/toolkit";
import { addAction, deleteAction, findAction } from "./actions";

import { nanoid } from "nanoid";

const initialState = {
  contacts: [],
  filter: "",
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addAction, (state, action) => {
      const newContact = {
        id: nanoid(5),
        name: action.payload.name,
        number: action.payload.number,
      };

      return {
        ...state,
        contacts: [...state.contacts, newContact],
      };
    })
    .addCase(deleteAction, (state, action) => {
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    })
    .addCase(findAction, (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    })
});
