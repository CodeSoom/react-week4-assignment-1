import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
  });

  context('with taskTitle', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: 'New Title',
      }));
    });

    it('initial state', () => {
      const { getByText, getByDisplayValue } = render((
        <InputContainer />
      ));

      expect(getByText(/추가/)).not.toBeNull();
      expect(getByDisplayValue(/New Title/)).not.toBeNull();
    });

    it('추가 버튼 클릭 할 경우', () => {
      const { getByText } = render((
        <InputContainer />
      ));

      fireEvent.click(getByText(/추가/));

      expect(dispatch).toBeCalledWith({
        type: 'addTask',
      });
    });
  });

  context('without taskTitle', () => {
    beforeEach(() => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
      }));
    });

    it('입력 값 변경', () => {
      const { getByLabelText } = render((
        <InputContainer />
      ));

      fireEvent.change(getByLabelText('할 일'), {
        target: { value: '무언가 하기' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateTaskTitle',
        payload: {
          taskTitle: '무언가 하기',
        },
      });
    });

    it('추가 버튼 클릭할 경우', () => {
      const { getByText } = render((
        <InputContainer />
      ));

      fireEvent.click(getByText(/추가/));

      expect(dispatch).not.toBeCalled();
    });
  });
});
