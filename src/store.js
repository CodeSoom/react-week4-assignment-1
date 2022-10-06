import { createStore } from 'redux';

// Redux action
// - type (string)
// - payload => object => { taskTitle }

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ],
};

function reducer(state = initialState, action){
	if(action === 'updateTaskTitle') {
		return {
			...state,
			taskTitle: action.payload.taskTitle,
		}
	}
	if(action === 'addTask') {
		return {
			...state,
			newId: newId + 1,
			taskTitle: '',
			tasks: [...tasks, { id: newId, title: taskTitle }],
		}
	}
	if(action === 'deleteTask') {
		return {
		...state,
    tasks: tasks.filter((task) => task.id !== id),
		}
	}

	return state;
}

const store = createStore(reducer);

export default store;