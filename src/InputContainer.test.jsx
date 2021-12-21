import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { addTask, updateTaskTitle } from './action';

import InputContainer from './InputContainer';

jest.mock('react-redux');

// 입력 할 수 있다.
// 버튼을 누를 수 있다.
describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Input value, calls updateTaskTitle', () => {
    const { getByLabelText } = render(
      <InputContainer />,
    );

    fireEvent.change(getByLabelText(/할 일/), { target: { value: 'New Task' } });

    expect(dispatch).toBeCalledWith(updateTaskTitle('New Task'));
  });

  it('Click "추가" button, calls addTask', () => {
    const { getByText } = render(
      <InputContainer />,
    );
    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith(addTask());
  });
});
