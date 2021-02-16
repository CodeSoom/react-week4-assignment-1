import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

function mockImplementation(taskTitle = '', dispatch = null) {
  if (dispatch) {
    useDispatch.mockImplementation(() => (dispatch));
  }
  useSelector.mockImplementation((selector) => selector({
    taskTitle,
  }));
}

describe('InputContainer는', () => {
  const dispatch = jest.fn();

  it('입력값(인풋)을 화면에 그린다.', () => {
    mockImplementation('밥 먹기');

    const { getByDisplayValue } = render(<InputContainer />);

    expect(getByDisplayValue('밥 먹기')).toBeInTheDocument();
  });

  it('추가버튼을 누르면 할 일을 추가하는 함수를 실행한다.', () => {
    mockImplementation('밥 먹기', dispatch);

    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalled();
  });

  it('입력을 하면 입력을 반영하는 함수가 실행된다.', () => {
    mockImplementation();

    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('할 일'), {
      target: {
        value: '무언가 하기',
      },
    });

    expect(dispatch).toBeCalled();
  });
});
