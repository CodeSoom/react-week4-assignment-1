import { useDispatch, useSelector } from 'react-redux';

import Page from './Page';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function updateTaskTitle(taskTitle) {
  return {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  };
}

function addTask() {
  return {
    type: 'addTask',

  };
}

function deleteTask(id) {
  return {
    type: 'deleteTask',
    payload: {
      id,
    },

  };
}
function selector(state) {
  return {
    taskTitle: state.taskTitle,
    tasks: state.tasks,
  };
}
export default function App() {
  // const [state, setState] = useState(initialState);
  const { taskTitle, tasks } = useSelector(selector);
  const dispatch = useDispatch();

  function handleChangeTitle(event) {
    console.log(event.target.value);
    dispatch(updateTaskTitle(event.target.value));
  }

  function handleClickAddTask() {
    dispatch(addTask());
  }

  function handleClickDeleteTask(id) {
    dispatch(deleteTask(id));
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
