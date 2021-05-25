import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';
import {
  updateTaskTitle,
  addTask,
} from '../redux/actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  });

  it('updates taskTitle with input control', () => {
    useSelector.mockImplementation((selector) => selector({ taskTitle: '' }));

    const { getByRole } = render(<InputContainer />);

    fireEvent.change(
      getByRole('textbox', { name: '할 일' }),
      { target: { value: 'codesoom' } },
    );

    expect(dispatch).toBeCalledWith(updateTaskTitle('codesoom'));
  });

  it('adds task to tasks with 추가 button', () => {
    const { getByRole } = render(<InputContainer />);

    fireEvent.click(getByRole('button', { name: '추가' }));

    expect(dispatch).toBeCalledWith(addTask());
  });
});
