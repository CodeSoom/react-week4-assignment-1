import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { tasks } from '../fixtures/task-data';

import { deleteTask } from './actions';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((state) => state({
    tasks,
  }));

  const renderListContainer = () => render(<ListContainer />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders titles of tasks', () => {
    const { container } = renderListContainer();

    tasks.map((task) => task.title).forEach((title) => {
      expect(container).toHaveTextContent(title);
    });
  });

  it('dispatches a deleteTask action with the task id when complete button is clicked', () => {
    const { getAllByRole } = renderListContainer();
    const completeButtons = getAllByRole('button', { name: '완료' });

    fireEvent.click(completeButtons[1]);

    expect(dispatch).toBeCalledWith(deleteTask(tasks[1].id));
  });
});
