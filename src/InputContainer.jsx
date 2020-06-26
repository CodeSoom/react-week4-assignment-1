import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Input from './Input';
import { changeTitleAction } from './actions';

export default function InputContainer({ value, onClick }) {
  const dispatch = useDispatch();
  const handleChangeTaskTitle = (e) => {
    dispatch(changeTitleAction(e.target.value));
  };

  return (
    <Input value={value} onChange={handleChangeTaskTitle} onClick={onClick} />
  );
}
