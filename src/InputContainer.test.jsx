import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { addTask, updateTaskTitle } from './actions';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  it('새로운 todo를 추가', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'new Title',
    }));

    const { getByText } = render(<InputContainer />);
    expect(getByText(/추가/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));
    expect(dispatch).toBeCalledWith(addTask('new Title'));
  });

  it('input에 값을 update taskTitle을 호출한다', () => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: '',
    }));

    const { getByLabelText } = render(<InputContainer />);
    fireEvent.change(getByLabelText('할 일'), {
      target: {
        value: 'new Title',
      },
    });
    expect(dispatch).toBeCalledWith(updateTaskTitle('new Title'));
  });
});
