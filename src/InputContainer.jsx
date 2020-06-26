import React from 'react';

import { useDispatch } from 'react-redux';

import Input from './Input';

import {
  updateTaskTitle,
} from './actions';

export default function InputContainer() {
  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  return (
    <Input
      onChange={handleChangeTitle}
    />
  );
}
