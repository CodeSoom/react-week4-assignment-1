import { addTask, deleteTask, updateTaskTitle } from './action';
import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    function reduceUpdateTaskTitle(taskTitle) {
      const state = {
        newId: 100,
        taskTitle: '',
        tasks: [],
      };

      return reducer(state, updateTaskTitle(taskTitle));
    }

    const newState = reduceUpdateTaskTitle('new TaskTitle');
    expect(newState.taskTitle).toBe('new TaskTitle');
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      const state = {
        newId: 100,
        taskTitle,
        tasks: [],
      };

      return reducer(state, addTask());
    }

    context('taskTtle이 있을 때', () => {
      it('작동 한다.', () => {
        const newState = reduceAddTask('new TaskTitle');

        expect(newState.tasks).toHaveLength(1);
      });
    });

    context('taskTitle이 없을 때', () => {
      it('작동 안한다.', () => {
        const newState = reduceAddTask('');

        expect(newState.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    function reduceDeleteTask(id) {
      const state = {
        newId: 100,
        taskTitle: '',
        tasks: [
          {
            id: 100,
            title: '독서',
          }],
      };

      return reducer(state, deleteTask(id));
    }

    context('wrongId일때', () => {
      it('작동안한다.', () => {
        const newState = reduceDeleteTask(200);

        expect(newState.tasks).toHaveLength(1);
      });
    });

    context('rigthId일때', () => {
      it('작동한다.', () => {
        const newState = reduceDeleteTask(100);

        expect(newState.tasks).toHaveLength(0);
      });
    });
  });
});
