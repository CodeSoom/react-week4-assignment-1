import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  context('updateTaskTitle', () => {
    it('change taskTitle(New Title)', () => {
      const previouseState = {
        taskTitle: '',
      };

      const state = reducer(previouseState, updateTaskTitle('New Title'));
      expect(state.taskTitle).toBe('New Title');
    });
  });

  const reduceAddTask = (taskTitle) => reducer({ taskTitle, tasks: [] }, addTask());
  context('addTask with tasktitle', () => {
    it('add a new task', () => {
      const state = reduceAddTask('New Title');
      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).toBe('New Title');
    });
  });

  context('addTask without tasktitle', () => {
    it('does not work', () => {
      const state = reduceAddTask('');
      expect(state.tasks).toHaveLength(0);
    });
  });

  context('deleteTask without tasktitle', () => {
    it('does not work', () => {
      const state = reducer({ tasks: [{ id: 1, title: 'Task' }] }, deleteTask(1));
      expect(state.tasks).toHaveLength(0);
    });
  });
});
