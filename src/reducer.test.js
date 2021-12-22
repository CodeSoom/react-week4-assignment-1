import reducer from './reducer';

import { changeTaskTitle, addTask } from './actions';

describe('reducer', () => {
  describe('changeTaskTitle', () => {
    const prevState = {
      taskTitle: '',
      tasks: [],
    };
    it('새로운 할 일 제목을 저장한다', () => {
      const state = reducer(prevState, changeTaskTitle('호호호'));
      expect(state.taskTitle).toBe('호호호');
    });
  });

  describe('addTask', () => {
    function handleAddTask(taskTitle) {
      const prevState = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };

      return reducer({
        ...prevState,
        taskTitle,
      }, addTask());
    }

    context('할 일 이름을 입력했을 경우', () => {
      it('새로운 할 일이 추가된다', () => {
        const state = handleAddTask('새로운');
        expect(state.tasks.length).toBe(1);
        expect(state.tasks[0].title).toBe('새로운');
        expect(state.tasks[0].id).toBe(100);
      });

      it('할 일 입력창이 초기화 된다', () => {
        const state = handleAddTask('새로운');
        expect(state.taskTitle).toBe('');
      });
    });
  });
});
