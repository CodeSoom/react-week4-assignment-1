import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { deleteTask } from './todosSlice';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    todos: {
      tasks: [
        { id: 101, title: 'Task1' },
        { id: 102, title: 'Task2' },
      ],
    },
  }));

  function renderList() {
    return render((
      <ListContainer />
    ));
  }

  context('with task', () => {
    it('print tasks', () => {
      const { getByText } = renderList();

      expect(getByText(/Task1/)).not.toBeNull();
      expect(getByText(/Task2/)).not.toBeNull();
    });
  });

  context('button click', () => {
    it('call deleteTask action', () => {
      const { getAllByText } = renderList();

      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(dispatch).toBeCalledWith(deleteTask(101));
    });
  });
});
