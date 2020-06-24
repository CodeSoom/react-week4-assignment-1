import reducer from './reducer';
import { updateTaskTitle, addTask, deleteTask } from './actions';

const previousState = {
  newId: 1234,
  taskTitle: '어제 할 일',
  tasks: [{ id: 1, title: '하루 전에 한 일' },
    { id: 2, title: '이틀 전에 한 일' }],
};

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    const reduceUpdateTaskTitle = (taskTitle) => {
      const action = updateTaskTitle(taskTitle);
      return reducer(previousState, action);
    };

    context('with new task title', () => {
      it('update the title of the state', () => {
        // given
        const taskTitle = '오늘 할 일';
        // when
        const state = reduceUpdateTaskTitle(taskTitle);
        // then
        expect(state.taskTitle).toBe(taskTitle);
      });

      it('does not change the new id of the state', () => {
        // when
        const state = reduceUpdateTaskTitle('오늘 할 일');
        // then
        expect(state.newId).toBe(previousState.newId);
      });

      it('does not change the tasks of the state', () => {
        // when
        const state = reduceUpdateTaskTitle('오늘 할 일');
        // then
        expect(state.tasks).toEqual(previousState.tasks);
      });
    });

    context('without new task title', () => {
      it('do not work', () => {
        // given
        const taskTitle = null;
        // when
        const state = reduceUpdateTaskTitle(taskTitle);
        // then
        expect(state.taskTitle).toBe(previousState.taskTitle);
      });
    });
  });

  describe('addTask', () => {
    const reduceAddTask = () => {
      const action = addTask();
      return reducer(previousState, action);
    };

    context('with task title', () => {
      it('add a task to the tasks of state', () => {
        // when
        const state = reduceAddTask();
        // then
        expect(state.tasks).toHaveLength(previousState.tasks.length + 1);
      });

      it('increases new id by one', () => {
        // when
        const state = reduceAddTask();
        // then
        expect(state.newId).toBe(previousState.newId + 1);
      });

      it('clears task title', () => {
        // when
        const state = reduceAddTask();
        // then
        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it('do not work', () => {
        // when
        const state = reduceAddTask();
        // then
        expect(state.tasks).toEqual(previousState.tasks);
      });
    });
  });

  describe('deleteTask', () => {
    const reduceDeleteTask = (id) => {
      const action = deleteTask(id);
      return reducer(previousState, action);
    };

    context('with an existing id', () => {
      it('remove from the tasks of state', () => {
        // when
        const state = reduceDeleteTask(1);
        // then
        expect(state.tasks).toHaveLength(previousState.length - 1);
      });
    });
    context('without existing id', () => {
      it('do not work', () => {
        // when
        const state = reduceDeleteTask(1234);
        // then
        expect(state.tasks).toHaveLength(previousState.length);
      });
    });
  });
});
