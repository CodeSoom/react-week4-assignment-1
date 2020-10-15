import reducer from './reducer';

import actions, { CHANGE_TITLE, ADD_TASK, REMOVE_TASK } from './actions';

describe('reducer', () => {
  describe(CHANGE_TITLE, () => {
    it('changes task title', () => {
      const previousState = {
        taskTitle: '',
      };
      const action = actions.changeTitle('밥먹기');
      const state = reducer(previousState, action);

      expect(state.taskTitle).toBe('밥먹기');
    });
  });

  describe(ADD_TASK, () => {
    // Given
    const previousState = {
      newId: 100,
      taskTitle: '독서하기',
      tasks: [],
    };
    const action = actions.addTask();

    it('add Task to the list', () => {
      // When
      const state = reducer(previousState, action);

      // Then
      expect(state.tasks).toMatchObject([{ id: 100, title: '독서하기' }]);
    });

    it('initializes task title', () => {
      // When
      const state = reducer(previousState, action);

      // Then
      expect(state.taskTitle).toBe('');
    });
  });

  describe(REMOVE_TASK, () => {
    // Given
    const previousState = {
      newId: 102,
      taskTitle: '',
      tasks: [
        { id: 101, title: '청소하기' },
        { id: 102, title: '운동하기' },
      ],
    };
    const action = actions.removeTask(101);

    it('remove task in the list', () => {
      // When
      const state = reducer(previousState, action);

      // Then
      expect(state.tasks).toMatchObject([{ id: 102, title: '운동하기' }]);
    });
  });
});
