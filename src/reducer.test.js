import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  it('returns innitial state at initial situation', () => {
    const state = reducer(undefined, {});

    expect(state.taskTitle).toEqual('');
    expect(state.tasks).toEqual([]);
  });

  context('when recieving unspecified action type', () => {
    it('returns recevied state as is', () => {
      const settingState = {
        taskTitle: 'Task Title',
        tasks: [
          { id: 1, title: 'Task-1' },
          { id: 2, title: 'Task-2' },
        ],
      };

      const { taskTitle, tasks } = reducer(settingState, {});

      expect(taskTitle).toBe(settingState.taskTitle);

      tasks.forEach((task, index) => {
        expect(task.id).toBe(settingState.tasks[index].id);
        expect(task.title).toBe(settingState.tasks[index].title);
      });
    });
  });

  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const { taskTitle } = reducer({
        taskTitle: '',
      }, updateTaskTitle('New Title'));

      expect(taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    function reduceAddTask(taskTitle) {
      return (reducer({
        taskTitle,
        tasks: [],
      }, addTask()));
    }

    context('with task title', () => {
      it('appends a new task into tasks', () => {
        const { tasks } = reduceAddTask('New Title');

        expect(tasks).toHaveLength(1);
        expect(tasks[0].id).not.toBeUndefined();
        expect(tasks[0].title).toBe('New Title');
      });

      it('clears task title', () => {
        const { taskTitle } = reduceAddTask('New Title');

        expect(taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("doesn't work", () => {
        const { tasks } = reduceAddTask('');

        expect(tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with exist task ID', () => {
      it('removes the task from tasks', () => {
        const targetId = 1;

        const { tasks } = reducer({
          tasks: [
            { id: targetId, title: 'Task' },
          ],
        }, deleteTask(targetId));

        expect(tasks).toHaveLength(0);
      });
    });

    context('without exist task ID', () => {
      it("doesn't work", () => {
        const { tasks } = reducer({
          tasks: [
            { id: 1, title: 'Task' },
          ],
        }, deleteTask(100));

        expect(tasks).toHaveLength(1);
      });
    });
  });
});
