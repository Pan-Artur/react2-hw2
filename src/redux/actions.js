import { ADD, DELETE, FIND } from "./constants";

export const addAction = (contact) => ({
  type: ADD,
  payload: contact
});

export const deleteAction = (id) => ({
  type: DELETE,
  payload: id
});

export const findAction = (filter) => ({
  type: FIND,
  payload: filter
});