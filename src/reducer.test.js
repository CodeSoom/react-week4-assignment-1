import reducer, { initialState } from './reducer';

import { addTask, deleteTask, updateTaskTitle } from './actions';

describe('reducer는', () => {
  context('입력이 있을 때는', () => {
    it('새로운 할 일을 추가한다.', () => {
      const preveState = {
        taskTitle: 'New Task',
        tasks: [],
      };

      const state = reducer(preveState, addTask());

      expect(state.taskTitle).toBe('');
      expect(state.tasks).toHaveLength(1);
    });

    it('입력된 인풋으로 TaskTitle를 업데이트한다.', () => {
      const preveState = {
        taskTitle: '',
      };

      const state = reducer(preveState, updateTaskTitle('누워있기'));

      expect(state.taskTitle).toBe('누워있기');
    });

    it('완료된 일을 삭제한다.', () => {
      const preveState = {
        tasks: [
          { id: 100, title: '밥먹기' },
          { id: 101, title: '누워있기' },
        ],
      };

      const state = reducer(preveState, deleteTask(100));

      expect(state.tasks).toHaveLength(1);
    });
  });

  context('입력이 없을 때는', () => {
    it('할 일을 추가하지 않는다.', () => {
      const preveState = {
        taskTitle: '',
        tasks: [],
      };
      const state = reducer(preveState, addTask());

      expect(state.tasks).toHaveLength(0);
    });
  });

  it('인자가 없으면 기본값으로 state를 만든다.', () => {
    const state = reducer();

    expect(state).toBe(initialState);
  });
});
