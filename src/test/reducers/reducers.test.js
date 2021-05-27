import reducer from '../../reducers/reducers';
import { addTask, deleteTask, updateTaskTitle } from '../../actions/actions';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('changes task title', () => {
      const { taskTitle } = reducer(
        { taskTitle: '' },
        updateTaskTitle('New Title'),
      );

      expect(taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {
    context('with taskTitle', () => {
      const previousState = {
        newId: 100,
        taskTitle: '뭐라도 하기',
        tasks: [],
      };

      it('appends a new task into tasks', () => {
        const { tasks } = reducer(
          previousState,
          addTask(),
        );

        expect(tasks).toHaveLength(1);
        expect(tasks[0].id).not.toBeUndefined();
        expect(tasks[0].title).toBe('뭐라도 하기');
      });

      it('clears taskTitle', () => {
        const { taskTitle } = reducer(
          previousState,
          addTask(),
        );

        expect(taskTitle).toBe('');
      });
    });

    context('without taskTitle', () => {
      it('doesn\'t work', () => {
        const { tasks } = reducer(
          {
            newId: 100,
            taskTitle: '',
            tasks: [],
          },
          addTask(),
        );

        expect(tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const { tasks } = reducer(
          {
            newId: 100,
            taskTitle: '',
            tasks: [
              {
                id: 1,
                title: 'Task',
              },
            ],
          },
          deleteTask(1),
        );

        expect(tasks).toHaveLength(0);
      });
    });

    context('without existed task ID', () => {
      it('doesn\'t work', () => {
        const { tasks } = reducer(
          {
            newId: 100,
            taskTitle: '',
            tasks: [
              {
                id: 1,
                title: 'Task',
              },
            ],
          },
          deleteTask(100),
        );

        expect(tasks).toHaveLength(1);
      });
    });
  });
});
