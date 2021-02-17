import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer는', () => {
  const dispatch = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  useDispatch.mockImplementation(() => (dispatch));
  useSelector.mockImplementation((selector) => selector({ taskTitle: '밥 먹기' }));

  it('입력값(인풋)을 화면에 그린다.', () => {
    const { getByDisplayValue } = render(<InputContainer />);

    expect(getByDisplayValue('밥 먹기')).toBeInTheDocument();
  });

  it('추가버튼을 누르면 할 일을 추가하는 함수를 실행한다.', () => {
    const { getByText } = render(<InputContainer />);

    fireEvent.click(getByText('추가'));

    expect(dispatch).toBeCalled();
  });

  it('입력을 하면 입력된 값을 저장하는 함수가 실행된다.', () => {
    const { getByLabelText } = render(<InputContainer />);

    fireEvent.change(getByLabelText('할 일'), {
      target: {
        value: '무언가 하기',
      },
    });

    expect(dispatch).toBeCalled();
  });
});
