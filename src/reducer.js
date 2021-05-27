// Redux action
// - type (String)
// - payload => object => { taskTitle }

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payLoad.taskTitle,
    };
  }
  return state;
}
