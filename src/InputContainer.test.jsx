import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

// react-redux 이름을 가진 파일을 찾아서
// 찾은 그 파일을 이용하여 테스트를 작동한다.
jest.mock('react-redux');

describe('InputContainer', () => {
  it('change task title', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    const { getByPlaceholderText } = render((
      <InputContainer />
    ));

    fireEvent.change(getByPlaceholderText('할 일을 입력해 주세요')
      , { target: { value: '공부' } });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: { taskTitle: '공부' },
    });
  });

  it('add the task to tasks', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New title',
    }));
    const { getByText, getByDisplayValue } = render((
      <InputContainer />
    ));

    expect(getByText(/추가/)).not.toBeNull();

    // expect(getByText(/New title/)).not.toBeNull();
    expect(getByDisplayValue(/New title/)).not.toBeNull();

    fireEvent.click(getByText(/추가/));

    expect(dispatch).toBeCalledWith({ type: 'addTask' });
  });

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
