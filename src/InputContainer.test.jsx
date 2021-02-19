import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    taskTitle: '할 일1',
  }));

  it('입력된 값을 출력합니다.', () => {
    const { getByText } = render((
      <InputContainer />
    ));
    expect(getByText(/추가/)).not.toBeNull();
    expect(getByText(/할 일1/)).not.toBeNull();
  });

  it('일정을 추가하는 함수가 실행됩니다.', () => {
    const { getByText } = render((
      <InputContainer />
    ));
    expect(dispatch).not.toBeCalled();
    fireEvent.click(getByText(/추가/));
    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });
});
