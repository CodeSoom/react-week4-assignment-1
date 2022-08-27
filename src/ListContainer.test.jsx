import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

function stubSelector(tasks = []) {
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
}

describe('ListContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      stubSelector();

      const { getByText } = render(
        <ListContainer />,
      );

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('renders tasks', () => {
      stubSelector(tasks);

      const { getByText } = render(
        <ListContainer />,
      );

      tasks.forEach((task) => {
        expect(getByText(task.title)).not.toBeNull();
      });
    });

    it('renders “완료” button to delete a task', () => {
      stubSelector(tasks);

      const { getAllByText } = render(
        <ListContainer />,
      );

      expect(dispatch).not.toBeCalled();

      fireEvent.click(getAllByText('완료')[0]);

      expect(dispatch).toBeCalledWith({
        type: 'deleteTask',
        payload: {
          id: 1,
        },
      });
    });
  });
});
