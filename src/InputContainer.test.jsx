import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      taskTitle: '할 일1',
    }));
  });

  it('입력된 값과 element들을 출력합니다.', () => {
    const { queryByText, getByLabelText, getByPlaceholderText } = render(<InputContainer />);

    expect(queryByText(/추가/)).not.toBeNull();
    expect(getByLabelText('할 일')).not.toBeNull();
    expect(getByPlaceholderText('할 일을 입력해 주세요')).not.toBeNull();

    expect(queryByText('할 일1')).not.toBeNull();
  });

  it('일정을 추가하는 함수가 실행합니다.', () => {
    const { getByText } = render(<InputContainer />);

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalled();
  });

  it('입력값을 업데이트 하는 함수를 실행합니다.', () => {
    const { getByPlaceholderText } = render(<InputContainer />);

    expect(dispatch).not.toBeCalled();

    fireEvent.change(getByPlaceholderText('할 일을 입력해 주세요'), {
      target: {
        value: '쉬기',
      },
    });

    expect(dispatch).toBeCalled();
  });
});
