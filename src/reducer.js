const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ],
};

// Redux action
// - type (string)
// - payload => object => { taskTitle }

export default function reducer(state = initialState, action){
	if(action.type === 'updateTaskTitle') {
		return {
			...state,
			taskTitle: action.payload.taskTitle,
		}
	}
	if(action.type === 'addTask') {
		const { newId, taskTitle, tasks } = state;

    if (!taskTitle) {
      return state;
    }

		return {
			newId: newId + 1,
			taskTitle: '',
			tasks: [...tasks, { id: newId, title: taskTitle }],
		}
	}
	if(action.type === 'deleteTask') {
		const { tasks } = state;
		return {
		...state,
    tasks: tasks.filter((task) => task.id !== action.payload.id),
		}
	}

	return state;
}