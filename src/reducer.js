import { addTask, deleteTask, updateTaskTitle } from './reducerService';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

const operations = {
  updateTaskTitle: (state, action) => updateTaskTitle(state, action),
  addTask: (state) => addTask(state),
  deleteTask: (state, action) => deleteTask(state, action),
};

export default function reducer(state = initialState, action) {
  return operations[action.type]
    ? (operations[action.type](state, action))
    : (state);
}
