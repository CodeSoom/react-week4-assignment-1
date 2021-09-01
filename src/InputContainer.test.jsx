import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispath = jest.fn();

  useDispatch.mockImplementation(() => dispath);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  const { getByText, getByDisplayValue, getByLabelText } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(/New Title/)).not.toBeNull();

  fireEvent.change(getByLabelText(/할 일/), {
    target: { value: 'New Thing' },
  });

  expect(dispath).toBeCalledWith({
    type: 'updateTaskTitle',
    payload: {
      taskTitle: 'New Thing',
    },
  });

  fireEvent.click(getByText(/추가/));

  expect(dispath).toBeCalledWith({
    type: 'addTask',
  });
});
