import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './action';

describe('reducer', () => {
  const testTitle = 'Distribute new version';

  // update task title
  describe('updateTaskTitle', () => {
    context('when user input', () => {
      it('change task title', () => {
        const state = reducer({
          taskTitle: '',
        }, updateTaskTitle(testTitle));

        expect(state.taskTitle).toBe(testTitle);
      });
    });
  });

  // add task
  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return reducer({
        newId: 1,
        taskTitle,
        tasks: [],
      }, addTask());
    }

    context('without task title', () => {
      it("doesn't add task into tasks", () => {
        const state = reduceAddTask('');

        expect(state.tasks).toHaveLength(0);
      });
    });

    context('with task title', () => {
      it('add a new task into tasks', () => {
        const state = reduceAddTask(testTitle);

        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe(testTitle);
      });

      it('make task title be empty', () => {
        const state = reduceAddTask(testTitle);

        expect(state.taskTitle).toBe('');
      });
    });
  });

  describe('deleteTask', () => {
    const testTasks = [{ id: 1, title: testTitle }];

    context('without exsited task id', () => {
      it("doesn't delete task from tasks", () => {
        const state = reducer({ tasks: testTasks }, deleteTask(2));

        expect(state.tasks).toHaveLength(1);
      });
    });

    context('with existed task id', () => {
      it('delete task from tasks', () => {
        const state = reducer({ tasks: testTasks }, deleteTask(1));

        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});
