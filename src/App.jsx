import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

const updateTaskTitle = (state, taskTitle) => (
  {
    ...state,
    taskTitle,
  }
);

const addTask = (state) => {
  const { newId, taskTitle, tasks } = state;
  return {
    ...state,
    newId: newId + 1,
    taskTitle: '',
    tasks: [...tasks, { id: newId, title: taskTitle }],
  };
};

const deleteTask = (state, id) => {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== id),
  };
};

export default function App() {
  const dispatch = useDispatch();

  const { taskTitle, tasks } = useSelector((state) => ({
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  }));

  const handleChangeTitle = (event) => (
    dispatch(updateTaskTitle(state, event.target.value))
  );

  const handleClickAddTask = () => (
    dispatch(addTask(state))
  );

  const handleClickDeleteTask = (id) => (
    dispatch(deleteTask(state, id))
  );

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
