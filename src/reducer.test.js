import reducer from "./reducer";

import {
  updateTaskTitle,
  addTask,
  deleteTask,
} from './actions';

describe('reducer', () => {
  function reduceAddTask(taskTitle) {
    return {
      newId: 100,
      taskTitle: taskTitle,
      tasks: [],
    }
  }
  
  describe('updateTaskTitle', () => {
    it('changes state with new task title', () => {
      const state = reducer(reduceAddTask(''), updateTaskTitle('New Title'));
  
      expect(state.taskTitle).toBe('New Title');
    });
  });

  describe('addTask', () => {

    context('with taskTitle', () => {
      it('appends a new task into tasks', () => {
        const state = reducer(reduceAddTask('New Task'), addTask());
    
        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });
  
      it('clear task title', () => {
        const state = reducer(reduceAddTask('New Task'), addTask());
    
        expect(state.taskTitle).toBe('');
        expect(state.tasks[0].id).not.toBeUndefined();
      });
    });

    context('without taskTitle', () => {
      it('doesnt work', () => {
        const state = reducer(reduceAddTask(''), addTask());
    
        expect(state.tasks).toHaveLength(0);
      });
    });
  });

  describe('deleteTask', () => {
    context('with existed task ID', () => {
      it('remove the task from tasks', () => {
        const state = reducer(reduceAddTask('New Title'), deleteTask(100));
  
        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});