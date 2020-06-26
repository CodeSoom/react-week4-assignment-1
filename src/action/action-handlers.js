import { UPDATE_TASK_TITLE, ADD_TASK, DELETE_TASK } from './action-types';

export default {
  [UPDATE_TASK_TITLE]: (previousState, payload) => ({
    ...previousState,
    taskTitle: payload.taskTitle,
  }),

  [ADD_TASK]: (previousState) => {
    const { tasks, taskId, taskTitle } = previousState;
    if (taskTitle === '') {
      return previousState;
    }
    return {
      ...previousState,
      taskId: taskId + 1,
      taskTitle: '',
      tasks: [
        ...tasks,
        {
          id: taskId,
          title: taskTitle,
        },
      ],
    };
  },

  [DELETE_TASK]: (previousState, payload) => {
    const { tasks } = previousState;
    return {
      ...previousState,
      tasks: tasks.filter((task) => task.id !== payload.id),
    };
  },
};
