import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'newTitle',
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  it('taskTitle should be added', () => {
    const { getByText } = render((
      <InputContainer />
    ));

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalled();
    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
