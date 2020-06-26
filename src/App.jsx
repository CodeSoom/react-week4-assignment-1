import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTaskTitle } from "./actions";

import Page from "./Page";

export default function App() {

  const dispatch = useDispatch();

  const { taskTitle } = useSelector((selector) => (
    {
      taskTitle: selector.taskTitle
    })
  );

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
    />
  );
}
