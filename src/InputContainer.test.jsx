import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    newId: 100,
    taskTitle: 'new Task',
    tasks: [],
  }));

  const {
    getByText, getByRole, getByPlaceholderText,
  } = render((
    <InputContainer />
  ));

  expect(getByPlaceholderText(/할 일을 입력해 주세요/)).toBeInTheDocument();
  expect(getByRole('textbox')).toHaveValue('new Task');

  fireEvent.click(getByText(/추가/));

  expect(dispatch).toBeCalledWith({
    type: 'addTask',
  });
});
