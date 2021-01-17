import React from 'react';

export default function Input({ value, onChangeTitle, onClickAddTask }) {
  return (
    <p>
      <label htmlFor="input-task-title">
        할 일
      </label>
      <input
        id="input-task-title"
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={value}
        onChange={onChangeTitle}
      />
      <button type="button" onClick={onClickAddTask}>
        추가
      </button>
    </p>
  );
}
