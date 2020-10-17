import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));
  });

  beforeEach(() => jest.clearAllMocks());

  describe("click '추가'button", () => {
    it('calls add dispatch', () => {
      const { getByText } = render((
        <InputContainer />
      ));

      expect(getByText(/추가/)).not.toBeNull();

      fireEvent.click(getByText(/추가/));

      expect(dispatch).toBeCalledWith({ type: 'addTask' });
    });
  });

  describe('change title', () => {
    it('calls update dispatch', () => {
      const { getByDisplayValue } = render((
        <InputContainer />
      ));

      expect(getByDisplayValue(/New Title/)).not.toBeNull();

      fireEvent.change(getByDisplayValue(/New Title/),
        { target: { value: 'changed Title' } });

      expect(dispatch).toBeCalledWith({
        type: 'updateTaskTitle',
        payload: { taskTitle: 'changed Title' },
      });
    });
  });
});
// TODO: 통합 테스트 코드 작성
// CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
