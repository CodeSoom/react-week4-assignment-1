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
    const previousState = { taskTitle: 'prevTitle' };

    context('with valid taskTitle', () => {
      const newTaskTitle = 'New Task';

      it('update', () => {
        const newState = reducer(previousState, updateTaskTitle(newTaskTitle));

        expect(newState.taskTitle).toBe(newTaskTitle);
      });
    });

    context('with invalid taskTitle', () => {
      const newTaskTitle = 0.555;

      it('doesn`t update', () => {
        const newState = reducer(previousState, updateTaskTitle(newTaskTitle));

        expect(newState.taskTitle).toBe(previousState.taskTitle);
      });
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      const previousState = {
        newId: 105,
        taskTitle: 'newTask',
        tasks: [],
      };

      it('add new task, empty title and update id', () => {
        const newState = reducer(previousState, addTask());

        expect(newState.tasks).toContainEqual({
          id: previousState.newId,
          title: previousState.taskTitle,
        });
        expect(newState.newId).toBe(previousState.newId + 1);
        expect(newState.taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      const previousState = {
        newId: 105,
        taskTitle: '',
        tasks: [],
      };

      it('doesn\'t add', () => {
        const newState = reducer(previousState, addTask());

        expect(newState).toEqual(previousState);
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

    context('with existing id', () => {
      const targetId = 101;

      it('delete existing task', () => {
        const newState = reducer(previousState, deleteTask(targetId));

        expect(newState.tasks.find(({ id }) => id === targetId)).toBeUndefined();
      });
    });

    context('with non-existing id', () => {
      const targetId = 404;

      it('doesn\'t delete', () => {
        expect(reducer(previousState, deleteTask(targetId))).toEqual(previousState);
      });
    });

    context('with invalid id', () => {
      const targetId = 'xxo';

      it('doesn\'t delete', () => {
        expect(reducer(previousState, deleteTask(targetId))).toEqual(previousState);
      });
    });
  });
});
