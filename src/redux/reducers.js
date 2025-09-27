import { ADD, DELETE, FIND } from "./constants";

import { nanoid } from "nanoid";

const initialState = {
  contacts: [],
  filter: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const newContact = {
        id: nanoid(5),
        name: action.payload.name,
        number: action.payload.number,
      };

      return {
        ...state,
        contacts: [...state.contacts, newContact],
      };
    case DELETE:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case FIND:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
