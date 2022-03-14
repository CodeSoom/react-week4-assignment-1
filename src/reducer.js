// Redux action
// - type (string)
// - payload => object => { taskTitle }
const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

function createReducer(originState, handlers) {
  return function reducer(state = originState, action) {
    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

function updateReducer(state, action) {
  return {
    ...state,
    taskTitle: action.payload.taskTitle,
  };
}

function addReducer(state) {
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

function deleteReducer(state, action) {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter((task) => task.id !== action.payload.id),
  };
}

const reducer = createReducer(initialState, {
  updateTaskTitle: updateReducer,
  addTask: addReducer,
  deleteTask: deleteReducer,
});

export default reducer;
