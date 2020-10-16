import reducer from './reducer';

import { updateTaskTitle, updateTaskTitleAction } from './actions/updateTaskTitle';
import { addTask, addTaskAction } from './actions/addTask';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    context('changes new task title', () => {
      it('from initial state', () => {
        const state = reducer(undefined, updateTaskTitleAction('new task'))(updateTaskTitle);

        expect(state.taskTitle).toBe('new task');
      });
    });

    context('from previous state', () => {
      const state = reducer(
        {
          taskTitle: 'task-1',
        },
        updateTaskTitleAction('new task'),
      )(updateTaskTitle);

      expect(state.taskTitle).toBe('new task');
    });
  });

  describe('addTask', () => {
    context('with task title', () => {
      it('added into tasks', () => {
        const state = reducer(
          {
            newId: 1,
            taskTitle: 'new task',
            tasks: [],
          },
          addTaskAction(),
        )(addTask);

        expect(state.tasks).toHaveLength(1);
      });
    });

    context('without task title', () => {
      it("doesn't work", () => {
        const state = reducer(
          {
            newId: 1,
            taskTitle: '',
            tasks: [],
          },
          addTaskAction(),
        )(addTask);

        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
