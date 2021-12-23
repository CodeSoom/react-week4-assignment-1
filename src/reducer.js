const initialState = {
  newId: 100,
  taskTitle: "",
  tasks: [],
};

export default function (state = initialState, action) {
  const reducer = {
    changeTodo: { ...state, taskTitle: action.payload?.taskTitle },
    addTodo: {
      ...state,
      newId: state.newId + 1,
      taskTitle: "",
      tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
    },
    deleteTodo: {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    },
  };
  // if (!reducer.ADD_TODO.taskTitle) return state;
  return reducer[`${action.type}`] || state;
}

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case "CHANGE_TODO":
//       return {
//         ...state,
//         taskTitle: action.payload.taskTitle,
//       };
//     case "ADD_TODO":
//       if (!state.taskTitle) return state;
//       return {
//         ...state,
//         newId: state.newId + 1,
//         taskTitle: "",
//         tasks: [...state.tasks, { id: state.newId, title: state.taskTitle }],
//       };
//     case "DELETE_TODO":
//       return {
//         ...state,
//         tasks: state.tasks.filter((task) => task.id !== action.payload.id),
//       };
//     default:
//       return state;
//   }
// }
