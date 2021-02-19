import React from 'react';

export default function InputContainer({
  taskTitle, onChangeTitle, onClickAddTask,
}) {
  return (
    <InputContainer
      value={taskTitle}
      onChange={onChangeTitle}
      onClick={onClickAddTask}
    />
  );
}
