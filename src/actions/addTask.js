export function addTaskAction() {
  return {
    type: 'addTask',
  };
}

export const addTask = ({ state }) => {
  const { tasks, taskTitle, newId } = state;

  if (!taskTitle) {
    return state;
  }

  return {
    newId: newId + 1,
    taskTitle: '',
    tasks: [...tasks, { id: newId, title: taskTitle }],
  };
};
