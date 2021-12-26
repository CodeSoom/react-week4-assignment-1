// Redux action
// - type (string)
// - payload => object => { taskTitle }
const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export function updateReducer(state = initialState, action) {
  return {
    ...state,
    taskTitle: action.payload.taskTitle,
  };
}

export function addReducer(state = initialState) {
  const { newId, taskTitle, tasks } = state;

  if (!taskTitle) {
    return state;
  }

  return {
    ...state,
    newId: newId + 1,
    taskTitle: '',
    tasks: [...tasks, { id: newId, title: taskTitle }],
  };
}

export function deleteReducer(state = initialState, action) {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== action.payload.id),
  };
}

export function missingReducer(state = initialState) {
  return state;
}
