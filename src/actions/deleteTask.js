export function deleteTaskAction(id) {
  return {
    type: 'deleteTask',
    payload: {
      id,
    },
  };
}

export const deleteTask = ({ state, action }) => {
  const { tasks } = state;
  return {
    ...state,
    tasks: tasks.filter((task) => (task.id !== action.payload.id)),
  };
};
