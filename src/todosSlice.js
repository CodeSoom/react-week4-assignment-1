import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newId: 100,
  taskTitle: '',
  tasks: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    updateTaskTitle: (state, action) => {
      state.taskTitle = action.payload;
    },
    addTask: (state) => {
      const { newId, taskTitle, tasks } = state;
      if (taskTitle) {
        state.newId = newId + 1;
        state.taskTitle = '';
        state.tasks = [...tasks, { id: newId, title: taskTitle }];
      }
    },
    deleteTask: (state, action) => {
      const { tasks } = state;
      state.tasks = tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { updateTaskTitle, addTask, deleteTask } = todoSlice.actions;

export default todoSlice.reducer;
