import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '호호호호',
  }));

  it('addTask가 호출된다', () => {
    const { getByText } = render(<InputContainer />);

    const addButton = getByText(/추가/);

    fireEvent.click(addButton);

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });

  it('changeTaskTitle이 호출된다', () => {
    const { getByDisplayValue } = render(<InputContainer />);

    fireEvent.change(getByDisplayValue(/호호호호/), { target: { value: '후후후후' } });

    expect(dispatch).toBeCalledWith({ type: 'changeTaskTitle', payload: { taskTitle: '후후후후' } });
  });
});
