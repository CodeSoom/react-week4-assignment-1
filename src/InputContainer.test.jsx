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

  const { getByText, getByDisplayValue } = render((
    <InputContainer />
  ));

  expect(getByText(/추가/)).not.toBeNull();
  expect(getByDisplayValue(/New Title/)).not.toBeNull();

  // fireEvent.change(getByLabelText(/할 일/));

  // expect(dispath).toBeCalled();
  // 안되는 이유 찾는 중

  fireEvent.click(getByText(/추가/));

  expect(dispath).toBeCalledWith({
    type: 'addTask',
  });
});
