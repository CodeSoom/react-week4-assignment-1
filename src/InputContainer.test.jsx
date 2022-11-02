import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InpurContainer', () => {
  const dispatch = jest.fn();

  it('InputContainer를 렌더링한다.', () => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ taskTitle: 'New Title' }));

    const { getByText, getByDisplayValue } = render(<InputContainer />);

    expect(getByText('추가')).not.toBeNull();
    expect(getByDisplayValue('New Title')).not.toBeNull();

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
