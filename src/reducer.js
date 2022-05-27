import { addTask, deleteTask, updateTaskTitle } from './reducerService';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const operationList = {
  updateTaskTitle: (state, action) => updateTaskTitle(state, action),
  addTask: (state) => addTask(state),
  deleteTask: (state, action) => deleteTask(state, action),
};

export default function reducer(state = initialState, action) {
  return operationList[action.type]
    ? (operationList[action.type](state, action))
    : (state);
}
