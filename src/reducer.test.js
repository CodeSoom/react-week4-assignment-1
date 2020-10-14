import Item from './Item';
import reducer from './reducer';

import {
  updateTaskTitle,
  addTask,
} from './actions';

describe('reducer', () => {
  context('with task title', () => {
    describe('updateTaskTitle', () => {
      it('changes task title', ()=> {
        const state = reducer({
          taskTitle: '',
        }, updateTaskTitle('New Title'));
    
        expect(state.taskTitle).toBe('New Title');
      });
    });
  
    describe('addTask', () => {
      it('appends a new task into tasks', ()=> {
        const state = reducer({
          newId: 100,
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());
    
        expect(state.tasks).toHaveLength(1);
        expect(state.tasks[0].id).not.toBeUndefined();
        expect(state.tasks[0].title).toBe('New Task');
      });
  
      it('clears task title', ()=> {
        const state = reducer({
          newId: 100,
          taskTitle: 'New Task',
          tasks: [],
        }, addTask());
  
        expect(state.taskTitle).toBe('');
      });
    });

    context('without task title', () => {
      it("doesn't work", ()=> {
        const state = reducer({
          newId: 100,
          taskTitle: '',
          tasks: [],
        }, addTask());
    
        expect(state.tasks).toHaveLength(0);
      });
    });
  });
});