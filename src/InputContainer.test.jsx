import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  context('with taskTitle', () => {
    const dispatch = jest.fn();

    it('initial state', () => {
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        taskTitle: 'New Title',
      }));

      const { getByText, getByDisplayValue } = render((
        <InputContainer />
      ));

      expect(getByText(/추가/)).not.toBeNull();
      expect(getByDisplayValue(/New Title/)).not.toBeNull();
    });

    it('추가 버튼 클릭 할 경우', () => {
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        taskTitle: 'New Title',
      }));

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
    const dispatch = jest.fn();

    it('입력 값 변경', () => {
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
      }));

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
  });
});
