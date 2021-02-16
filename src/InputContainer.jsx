import React from 'react';
import { useSelector } from 'react-redux';

import Input from './Input';

function InputContainer() {
  const taskTitle = useSelector((state) => (state.taskTitle));

  return (
    <Input
      value={taskTitle}
      onChange={() => {}}
      onClick={() => {}}
    />
  );
}

export default InputContainer;
