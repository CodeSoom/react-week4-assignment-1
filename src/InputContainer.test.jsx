import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import { addTask } from './actions';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'task',
      tasks: [
        { id: 1, title: 'Task1' },
      ],
    }));
  });

  it('update a task title when changed', () => {
    const { getByRole } = render((
      <InputContainer />
    ));

    fireEvent.change(getByRole('textbox'), { target: { value: 'Task2' } });

    expect(dispatch).toBeCalled();
  });

  it('add a new task with calling "addTask"', () => {
    const { getByRole } = render((<InputContainer />));

    expect(getByRole('button', { name: '추가' })).not.toBeNull();

    fireEvent.click(getByRole('button', { name: '추가' }));

    expect(dispatch).toBeCalledWith(addTask());
  });
});
