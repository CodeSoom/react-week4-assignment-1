import reducer, { initialState } from './reducer';

import { addAction, deleteAction, updateAction } from './actions';

describe('reducer는', () => {
  context('입력이 있을 때', () => {
    it('새로운 할 일을 추가한다.', () => {
      const preveState = {
        taskTitle: 'New Task',
        tasks: [],
      };

      const state = reducer(preveState, addAction());

      expect(state.taskTitle).toBe('');
      expect(state.tasks).toHaveLength(1);
    });

    it('입력된 인풋을 반영한다.', () => {
      const preveState = {
        taskTitle: '',
      };

      const state = reducer(preveState, updateAction('누워있기'));

      expect(state.taskTitle).toBe('누워있기');
    });

    it('완료된 일을 삭제한다.', () => {
      const preveState = {
        tasks: [
          { id: 100, title: '밥먹기' },
          { id: 101, title: '누워있기' },
        ],
      };

      const state = reducer(preveState, deleteAction(100));

      expect(state.tasks).toHaveLength(1);
    });
  });

  context('입력이 없을 때', () => {
    it('할 일을 추가하지 않는다.', () => {
      const preveState = {
        taskTitle: '',
        tasks: [],
      };
      const state = reducer(preveState, addAction());

      expect(state.tasks).toHaveLength(0);
    });
  });

  it('기본값을 반영한다.', () => {
    const state = reducer();

    expect(state).toBe(initialState);
  });
});
