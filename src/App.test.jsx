import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { taskTitle, tasks } from '../fixtures/task-data';

import { addTask, deleteTask, updateTaskTitle } from './actions';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((state) => state({
    taskTitle,
    tasks,
  }));

  const renderApp = () => render(<App />);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the title', () => {
    const { container } = renderApp();

    expect(container).toHaveTextContent('To-do');
  });

  it('renders the task title', () => {
    const { getByLabelText } = renderApp();

    expect(getByLabelText('할 일')).toHaveDisplayValue(taskTitle);
  });

  it('dispatches a updateTaskTitle action with input value when the input is changed', () => {
    const { getByLabelText } = renderApp();

    fireEvent.change(getByLabelText('할 일'), { target: { value: '그냥 놀기' } });

    expect(dispatch).toBeCalledWith(updateTaskTitle('그냥 놀기'));
  });

  it('dispatches a addTask action when the button is clicked', () => {
    const { getByRole } = renderApp();

    fireEvent.click(getByRole('button', { name: '추가' }));

    expect(dispatch).toBeCalledWith(addTask(taskTitle));
  });

  it('renders titles of tasks', () => {
    const { container } = renderApp();

    tasks.map((task) => task.title).forEach((title) => {
      expect(container).toHaveTextContent(title);
    });
  });

  it('dispatches a deleteTask action with the task id when complete button is clicked', () => {
    const { getAllByRole } = renderApp();
    const completeButtons = getAllByRole('button', { name: '완료' });

    fireEvent.click(completeButtons[1]);

    expect(dispatch).toBeCalledWith(deleteTask(tasks[1].id));
  });
});
