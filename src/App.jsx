import { useSelector, useDispatch } from 'react-redux';

import Page from './Page';
import actions, { ACTION_TYPES } from './store/actions';

export default function App() {
  const state = useSelector((storeState) => storeState);
  const dispatch = useDispatch();

  const { taskTitle, tasks } = state;

  function handleChangeTitle(event) {
    dispatch(actions[ACTION_TYPES.CHANGE_TITLE](event.target.value));
  }

  function handleClickAddTask() {
    dispatch(actions[ACTION_TYPES.ADD_TASK]());
  }

  function handleClickDeleteTask(id) {
    dispatch(actions[ACTION_TYPES.DELETE_TASK](id));
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
