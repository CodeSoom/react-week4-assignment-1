export const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export default function reducer(state = initialState, action) {
  const { newId, tasks, taskTitle } = state;

  const operatorOnState = {
    'tasks/updateTitle': (oldState) => ({
      ...oldState,
      taskTitle: action.payload.taskTitle,
    }),

    'tasks/addNewTask': (oldState) => {
      if (taskTitle === '') {
        return oldState;
      }
      return {
        ...oldState,
        newId: newId + 1,
        taskTitle: '',
        tasks: [...tasks, { id: newId, title: taskTitle }],
      };
    },

    'tasks/deleteTask': (oldState) => ({
      ...oldState,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    }),
  };

  const getNewState = operatorOnState[action.type];
  return getNewState ? getNewState(state) : state;
}
