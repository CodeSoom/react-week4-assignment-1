import { fireEvent, render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from '.';
import { ACTION_TYPES } from '../../store/actions';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation(() => ({ taskTitle: '' }));

  it('should change title', () => {
    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '무언가 하기' },
    });

    expect(dispatch).toBeCalledWith({
      type: ACTION_TYPES.CHANGE_TITLE,
      payload: { taskTitle: '무언가 하기' },
    });
  });

  it('should add task', () => {
    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalledWith({
      type: ACTION_TYPES.ADD_TASK,
    });
  });
});
