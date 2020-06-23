import { updateTitle, addTask, deleteTask } from './actions';
import reducer from './reducer';

describe('actions', () => {
  describe('updateTitle', () => {
    it('return updated task input', () => {
      const state = reducer(
        {
          taskTitle: '',
        },
        updateTitle('new Title'),
      );
      expect(state.taskTitle).toBe('new Title');
    });
  });
  describe('addTask', () => {
    const reduceAddTask = (taskTitle) => reducer(
      {
        newId: 200,
        taskTitle,
        tasks: [],
      },
      addTask(),
    );

    context('with taskTitle', () => {
      it('append a new task into tasks', () => {
        const state = reduceAddTask('added Task');
        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).toBe(200);
        expect(state.tasks[0].title).toBe('added Task');
      });
      it('clear task input', () => {
        const state = reduceAddTask('added Task');
        expect(state.taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it("dosn't work", () => {
        const state = reduceAddTask('');
        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const state = reducer(
          {
            tasks: [{ id: 1, title: 'remove task' }],
          },
          deleteTask(1),
        );
        expect(state.tasks).toHaveLength(0);
      });
    });
    context('without existed task ID', () => {
      it("dosn't work", () => {
        const state = reducer(
          {
            tasks: [{ id: 1, title: 'remove task' }],
          },
          deleteTask(2),
        );
        expect(state.tasks).toHaveLength(1);
      });
    });
  });
});
