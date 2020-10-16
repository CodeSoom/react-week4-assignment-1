import reducer from './reducer';

import { updateTaskTitle, updateTaskTitleAction } from './actions/updateTaskTitle';
import { addTask, addTaskAction } from './actions/addTask';
import { deleteTask, deletTaskAction } from '';

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

  describe('deleteTask', () => {
    context('with existed id', () => {
      it('remove from tasks', () => {
        const state = reducer(
          {
            tasks: [
              { id: 1, title: 'task-1' },
              { id: 2, title: 'task-2' },
            ],
          },
          deletTaskAction(1),
        )(deleteTask);

        expect(state.tasks).toHaveLength(1);
      });
    });

    context('without existed id', () => {
      it('doesn\'t work', () => {
        const state = reducer(
          {
            tasks: [
              { id: 1, title: 'task-1' },
              { id: 2, title: 'task-2' },
            ],
          },
          deletTaskAction(5),
        )(deleteTask);

        expect(state.tasks).toHaveLength(2);
      });
    });
  });
});
