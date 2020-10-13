const initialState = ({
  newId: 100,
  taskTitle: '',
  tasks: [],
});

function getValidater(state, action) {
  const { taskTitle } = state;
  const { type } = action;

  const defaultValidater = () => true;

  const isString = (value) => typeof value === 'string';
  const isBlank = (string) => string.trim().length === 0;

  return ({
    updateTaskTitle: ({ taskTitle: newTitle }) => isString(newTitle),
    addTask: () => !isBlank(taskTitle),
  })[type] || defaultValidater;
}

export default function reducer(state = initialState, action = { type: 'default' }) {
  const { newId, tasks, taskTitle } = state;
  const { type, payload } = action;

  const validate = getValidater(state, action);

  if (!validate(payload)) {
    return state;
  }

  const newStates = {
    updateTaskTitle: ({ taskTitle: newTitle }) => ({
      ...state,
      taskTitle: newTitle,
    }),
    addTask: () => ({
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    }),
    deleteTask: ({ id }) => ({
      ...state,
      tasks: tasks.filter((task) => task.id !== id),
    }),
    default: () => state,
  };

  return newStates[type](payload);
}
