import React from "react";
import {
  GET_NAME,
  DELETE_PROFILE,
  ADD_PROFILE,
  DUPLICATE,
  GET_EDIT_NAME,
  EDIT_NAME,
} from "../constant/Profile";
export const Getname = (Name, index) => {
  return {
    type: GET_NAME,
    payload: Name,
    index: index,
  };
};

export const DeleteProfile = () => {
  return {
    type: DELETE_PROFILE,
  };
};
export const addProfile = () => {
  return {
    type: ADD_PROFILE,
  };
};
export const duplicate = () => {
  return {
    type: DUPLICATE,
  };
};
export const getEditNameAction = (editName) => {
  return {
    type: GET_EDIT_NAME,
    payload: editName,
  };
};
export const editName = () => {
  return {
    type: EDIT_NAME,
  };
};
