// Redux Action
// - type(string)
// - payload => object => { taskTitle }

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [
    { id: 1, title: 'redux 강의 듣기 #1' },
    { id: 2, title: 'redux 과제 하기 #2' },
  ],
};

const reducer = (state = initialState, action) => {
  if(action.type === 'updateTaskTitle'){
    return {
      state,
      taskTitle: action.payload.taskTitle,
    };
  };

  if(action.type === 'addTask'){
    const { newId, taskTitle, tasks } = state;

    if(!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    }
  }
};

export default reducer;
