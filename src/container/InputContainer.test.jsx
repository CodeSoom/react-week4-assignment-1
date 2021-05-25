import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';
import {
  updateTaskTitle,
  addTask,
} from '../redux/actions';

jest.mock('react-redux');

it('updates taskTitle with input control', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ taskTitle: '' }));

  const { getByRole } = render(<InputContainer />);

  fireEvent.change(
    getByRole('textbox', { name: '할 일' }),
    { target: { value: 'codesoom' } },
  );

  expect(dispatch).toBeCalledWith(updateTaskTitle('codesoom'));
});

it('adds task to tasks with 추가 button', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  const { getByRole } = render(<InputContainer />);
  fireEvent.click(getByRole('button', { name: '추가' }));

  expect(dispatch).toBeCalledWith(addTask());
});
