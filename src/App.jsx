import { useState } from 'react';

import Page from './Page';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const updateTaskTitle = (state, taskTitle) => ({
  ...state,
  taskTitle,
});

const addTask = (state) => ({
  ...state,
  newId: state.newId + 1,
  taskTitle: '',
  tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
});

const deleteTask = (state, id) => ({
  ...state,
  tasks: state.tasks.filter((task) => task.id !== id),
});

const App = () => {
  const [state, setState] = useState(initialState);
  const { taskTitle, tasks } = state;

  const handleChangeTitle = ({ target: { value } }) => setState(updateTaskTitle(state, value));
  const handleClickAddTask = () => setState(addTask(state));
  const handleClickDeleteTask = (id) => setState(deleteTask(state, id));

  return (
    <Page
      taskTitle={taskTitle}
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  );
};

export default App;
