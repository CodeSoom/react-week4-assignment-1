import { v4 as uuidv4 } from 'uuid';

const initialState = {
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateTaskTitle') {
    return {
      ...state,
      taskTitle: action.payload.taskTitle,
    };
  }

  if (action.type === 'addTask') {
    const { taskTitle, tasks } = state;

    if (!taskTitle) return state;

    return {
      taskTitle: '',
      tasks: [
        ...tasks,
        { id: uuidv4(), title: taskTitle },
      ],
    };
  }

  if (action.type === 'deleteTask') {
    const { tasks } = state;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  }

  return state;
}
