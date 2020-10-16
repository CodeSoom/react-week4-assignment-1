const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const addTask = ({ state }) => {
  const { tasks, taskTitle, newId } = state;

  if (!taskTitle) {
    return state;
  }

  return {
    newId: newId + 1,
    taskTitle: '',
    tasks: [...tasks, { id: newId, title: taskTitle }],
  };
};

const deleteTask = ({ state, action }) => {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter((task) => (task.id !== action.payload.id)),
  };
};

const updateTaskTitle = ({ state, action }) => ({
  ...state,
  taskTitle: action.payload.taskTitle,
});

const actions = {
  addTask,
  deleteTask,
  updateTaskTitle,
};

export default function reducer(state = initialState, action) {
  if (Object.keys(actions).includes(action.type)) {
    return actions[`${action.type}`]({ state, action });
  }

  return state;
}
