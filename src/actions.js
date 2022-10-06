export function updateTaskTitle(state, taskTitle){
  return {
    type: 'updateTaskTitle',
    payload: {
      taskTitle,
    },
  }
}

export function addTask(state) {
  return {
    type:'addTask',
  };
}

export function deleteTask(id){
  return{
    type:'deleteTask',
    payload: {
      id,
    }
  };
}