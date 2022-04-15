import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
  });

  function renderList() {
    return render((
      <ListContainer />
    ));
  }

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ],
  }));

  context('with tasks', () => {
    it('renders "완료" button to delete a task', () => {
      const { getByText, getAllByText } = renderList();

      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();

      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(dispatch).toBeCalledWith({
        type: 'deleteTask',
        payload: {
          id: 1,
        },
      });
    });
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      const { getByText } = renderList();

      expect(getByText(/Task-1/)).not.toBeNull();
    });
  });
});
