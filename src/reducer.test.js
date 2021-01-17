import reducer from './reducer';

import { updateTaskTitle, addTask, deleteTask } from './actions';

describe('reducer', () => {
  it('returns initial state in case of undefined state', () => {
    const initialState = ({
      newId: 100,
      taskTitle: '',
      tasks: [],
    });

    expect(reducer()).toEqual(initialState);
  });

  describe('updateTaskTitle', () => {
    it('update title with valid taskTitle', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('new title'));

      expect(state.taskTitle).toBe('new title');
    });

    it('doesn\'t update with invalid taskTitle', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle(0.555));

      expect(state.taskTitle).toBe('');
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      const previousState = {
        newId: 105,
        taskTitle: 'newTask',
        tasks: [],
      };

      it('add task, empty title and update id', () => {
        const { newId, tasks, taskTitle } = reducer(previousState, addTask());

        expect(tasks).toContainEqual({
          id: previousState.newId,
          title: previousState.taskTitle,
        });
        expect(newId).toBe(previousState.newId + 1);
        expect(taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      const previousState = {
        newId: 105,
        taskTitle: '',
        tasks: [],
      };

      it('doesn\'t add', () => {
        const state = reducer(previousState, addTask());

        expect(state).toEqual(previousState);
      });
    });
  });

  describe('deleteTask', () => {
    const previousState = {
      tasks: [
        { id: 101, title: 'TASK-1' },
        { id: 102, title: 'TASK-2' },
      ],
    };

    it('delete task with existing id', () => {
      const { id: existingId } = previousState.tasks[0];
      const state = reducer(previousState, deleteTask(existingId));

      expect(state.tasks.find(({ id }) => id === existingId)).toBeUndefined();
    });

    it('doesn\'t delete with non-existing id', () => {
      expect(reducer(previousState, deleteTask(404))).toEqual(previousState);
    });
  });
});
