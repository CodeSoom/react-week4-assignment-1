import Item from './Item';
import reducer from './reducer';

describe('reducer', () => {
  describe('updateTaskTitle', () => {
    it('returns new state with new task title', ()=> {
      const previousState = {
        taskTitle: '',
      },
  
      const action = {
        type: 'updateTaskTitle',
        payload: {
          title: 'New Title',
        },
      }
  
      const state = reducer(previdousState, action);
  
      expect(state.taskTitle).toBe('New Title');
    });
  });
});