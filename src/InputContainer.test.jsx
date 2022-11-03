import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InpurContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({ taskTitle: 'New Title' }));

  it('InputContainer를 렌더링한다.', () => {
    const { getByText, getByDisplayValue } = render(<InputContainer />);

    expect(getByText('추가')).not.toBeNull();
    expect(getByDisplayValue('New Title')).not.toBeNull();
  });

  it('할 일을 입력하면 handleChange가 실행되어 value가 변경된다.', () => {
    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('할 일'), {
      target: {
        value: '무엇인가 하기',
      },
    });

    expect(dispatch).toBeCalledWith({
      type: 'changeTaskTitle',
      payload: {
        taskTitle: '무엇인가 하기',
      },
    });
  });

  it('추가 버튼을 누르면 할 일이 추가된다.', () => {
    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalledWith({
      type: 'addTask',
    });
  });
});
