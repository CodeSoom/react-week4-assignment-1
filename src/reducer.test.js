import { addTask, deleteTask, updateTaskTitle } from './actions';
import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new task title', () => {
      const state = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    const reduceAddTask = (taskTitle) => reducer({
      newId: 1,
      taskTitle,
      tasks: [],
    }, addTask());

    context('with task title', () => {
      it('returns new task on the tasks', () => {
        const state = reduceAddTask('할 일#1');

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('할 일#1');
      });

      it('returns blank taskTitle after add new Task', () => {
        const state = reduceAddTask('할 일#1');

        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("doesn't work", () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with exist task id', () => {
      it('clear the task', () => {
        const state = reducer({
          tasks: [{ id: 1, title: '할 일#1' }],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('without exist task id', () => {
      it("doesn't work", () => {
        const state = reducer({
          tasks: [{ id: 2, title: '할 일#1' }],
        }, deleteTask(1));

        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
