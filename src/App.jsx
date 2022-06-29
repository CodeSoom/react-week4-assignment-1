import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';

import {
  updateTaskTitle,
  addTask,
} from './actions';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const selector = (state) => ({
  newId: state.newId,
  taskTitle: state.taskTitle,
  tasks: state.tasks,
});

export default function App() {
  const [state, setState] = useState(initialState);

  const dispatch = useDispatch();

  const { taskTitle, tasks } = useSelector(selector);

  function handleChangeTitle(event) {
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    setState({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    });
  }

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
}
