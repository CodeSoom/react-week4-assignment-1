import reducer from '.';

import {
  updateTitle,
  addTask,
  deleteTask,
} from '../actions';

describe('reducer', () => {
  describe('updateTitle', () => {
    it('update a taskTitle', () => {
      const title = 'newTitle';

      const state = reducer({
        taskTitle: '',
      }, updateTitle(title));

      expect(state.taskTitle).toBe(title);
    });
  });

  describe('addTask', () => {
    const handleReducer = (title) => reducer({
      taskTitle: title,
      tasks: [],
    }, addTask());

    it('add a task into tasks', () => {
      const title = 'newTitle';
      const state = handleReducer(title);

      expect(state.tasks[0].title).toBe(title);
      expect(state.tasks).toHaveLength(1);
    });

    it('taskTitle should be empty', () => {
      const title = 'newTitle';

      const state = handleReducer(title);
      expect(state.taskTitle).toBe('');
    });
  });

  describe('deleteTask', () => {
    const handleReducer = (id) => reducer({
      taskTitle: '',
      tasks: [
        { id: 1, title: 'title-1' },
        { id: 2, title: 'title-2' },
      ],
    }, deleteTask(id));

    it("if task is deleted, tasks's length is decreased by 1", () => {
      const state = handleReducer(1);

      expect(state.tasks).toHaveLength(1);
      expect(state.tasks[0].title).not.toBe('title-1');
    });

    it('if wrong id is passed, doing nothing', () => {
      const state = handleReducer(100);

      expect(state.tasks).toHaveLength(2);
      expect(state.tasks[0].title).toBe('title-1');
    });
  });
});
