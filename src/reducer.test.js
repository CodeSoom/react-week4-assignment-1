import reducer from './reducer';

import { changeTaskTitle, addTask, deleteTask } from './actions';

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
        const { tasks } = handleAddTask('새로운');
        expect(tasks.length).toBe(1);
        expect(tasks[0].title).toBe('새로운');
        expect(tasks[0].id).toBe(100);
      });

      it('할 일 입력창이 초기화 된다', () => {
        const { taskTitle } = handleAddTask('새로운');
        expect(taskTitle).toBe('');
      });
    });

    context('할 일 이름을 입력하지 않은 경우', () => {
      it('할 일이 추가되지 않는다', () => {
        const { tasks } = handleAddTask('');
        expect(tasks.length).toBe(0);
      });
    });
  });

  describe('deleteTask', () => {
    function handleDeleteTask(id) {
      const prevState = {
        newId: 100,
        taskTitle: '',
        tasks: [
          { id: 1, title: '삭제할 할 일 1' },
          { id: 2, title: '삭제할 할 일 2' },
        ],
      };
      return reducer(prevState, deleteTask(id));
    }

    it('특정 id의 할 일이 삭제된다', () => {
      const { tasks } = handleDeleteTask(1);

      expect(tasks.length).toBe(1);
      expect(tasks[0].id).not.toBe(1);
      expect(tasks[0].title).not.toBe('삭제할 할 일 1');
    });

    it('id가 없으면 삭제되지 않는다', () => {
      const { tasks } = handleDeleteTask();

      expect(tasks.length).toBe(2);
    });

    it('할 일 목록에 존재하는 id가 아니면 삭제되지 않는다', () => {
      const { tasks } = handleDeleteTask(3);

      expect(tasks.length).toBe(2);
    });
  });
});
