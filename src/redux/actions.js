import { createAction } from "@reduxjs/toolkit";
import { ADD, DELETE, FIND } from "./constants";

export const addAction = createAction(ADD);

export const deleteAction = createAction(DELETE);

export const findAction = createAction(FIND);
