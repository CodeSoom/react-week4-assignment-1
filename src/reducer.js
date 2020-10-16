// Redux action
// - type   : String)
// - payload: Object

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

// 상태에 대한 관심사 분리
// 새로운 상태를 리턴하는 reducer() 생성
const reduce = {
  updateTaskTitle: (state, action) => ({
    ...state,
    taskTitle: action.payload.taskTitle,
  }),

  addTask: (state) => {
    const { newId, taskTitle, tasks } = state;

    if (!taskTitle) {
      return state;
    }

    return {
      ...state,
      newId: newId + 1,
      taskTitle: '',
      tasks: [...tasks, { id: newId, title: taskTitle }],
    };
  },

  deleteTask: (state, action) => {
    const { tasks } = state;

    return {
      ...state,
      tasks: tasks.filter((task) => task.id !== action.payload.id),
    };
  },
};

export default function reducer(state = initialState, action = { type: 'initTask' }) {
  if (action.type === 'initTask') {
    return state;
  }

  return reduce[action.type](state, action);
}
