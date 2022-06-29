import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '이발하기',
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  context('추가 버튼을 누르면', () => {
    it('dispatch가 addTask 액션과 함께 호출됩니다.', () => {
      const { getByText } = render((
        <InputContainer />
      ));

      fireEvent.click(getByText('추가'));

      expect(dispatch).toBeCalledWith({ type: 'addTask' });
    });
  });

  context('Input창에 입력을 하면', () => {
    it('dispatch가 updateTaskTitle과 함께 호출됩니다.', () => {
      const { getByLabelText } = render((
        <InputContainer />
      ));

      fireEvent.change(getByLabelText('할 일'), { target: { value: '이발' } });

      expect(dispatch).toBeCalledWith({
        payload: {
          taskTitle: '이발',
        },
        type: 'updateTaskTitle',
      });
    });
  });
});
