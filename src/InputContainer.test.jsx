import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { addTask, updateTaskTitle } from './actions';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'task',
    tasks: [
      { id: 1, title: 'Task1' },
    ],
  }));

  const { getByRole } = render((
    <InputContainer />
  ));

  it('update a task title with calling "updateTaskTitle"', () => {
    fireEvent.change(getByRole('textbox'));

    expect(dispatch).toBeCalledWith(updateTaskTitle('new Title'));
  });

  it('add a new task with calling "addTask"', () => {
    expect(getByRole('button', { name: '추가' })).not.toBeNull();

    fireEvent.click(getByRole('button', { name: '추가' }));

    expect(dispatch).toBeCalledWith(addTask());
  });
});
