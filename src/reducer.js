const initialState = ({
  newId: 100,
  taskTitle: '',
  tasks: [],
});

function getValidater(state, action) {
  const { taskTitle } = state;
  const { type } = action;

  const defaultValidater = () => true;

  return ({
    updateTaskTitle: ({ taskTitle: newTitle }) => typeof newTitle === 'string',
    addTask: () => taskTitle.trim().length !== 0,
  })[type] || defaultValidater;
}

function getUpdater(state, action) {
  const { newId, tasks, taskTitle } = state;
  const { type, payload } = action;

  const validate = getValidater(state, action);
  const defaultUpdater = () => state;

  if (!validate(payload)) {
    return defaultUpdater;
  }

  return ({
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
  }[type]) || defaultUpdater;
}

export default function reducer(state = initialState, action = { type: 'default' }) {
  const { payload } = action;

  const update = getUpdater(state, action);

  return update(payload);
}
