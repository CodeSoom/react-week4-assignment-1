import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { deleteTask } from './actions';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const tasks = [
    { id: 1, title: '할 일 1' },
    { id: 2, title: '할 일 2' },
  ];

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((state) => state({
    tasks,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders titles of tasks', () => {
    const { container } = render(<ListContainer />);

    tasks.map((task) => task.title).forEach((title) => {
      expect(container).toHaveTextContent(title);
    });
  });

  it('dispatches a deleteTask action with the task id when complete button is clicked', () => {
    const { getAllByRole } = render(<ListContainer />);
    const completeButtons = getAllByRole('button');

    fireEvent.click(completeButtons[1]);

    expect(dispatch).toBeCalledWith(deleteTask(tasks[1].id));
  });
});
