import { CHANGE_TITLE, ADD_TASK, REMOVE_TASK } from './actions';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === CHANGE_TITLE) {
    return {
      ...state,
      taskTitle: action.payload,
    };
  }

  if (action.type === ADD_TASK) {
    const {
      newId,
      taskTitle,
      tasks,
    } = state;

    return {
      ...state,
      taskTitle: initialState.taskTitle,
      newId: newId + 1,
      tasks: [
        ...tasks, { id: newId, title: taskTitle },
      ],
    };
  }

  if (action.type === REMOVE_TASK) {
    const { tasks } = state;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload),
    };
  }

  return state;
}
