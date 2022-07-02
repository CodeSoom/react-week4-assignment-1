import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { addTask, updateTaskTitle } from './actions';

import InputContainer from './InputContainer';
import { tasks } from './fixtures/tasks';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderInput() {
    return render((
      <InputContainer />
    ));
  }

  context('추가 버튼을 누르면', () => {
    it('dispatch가 addTask 액션과 함께 호출됩니다.', () => {
      const { getByText } = renderInput();

      fireEvent.click(getByText('추가'));

      expect(dispatch).toBeCalledWith(addTask());
    });
  });

  context('Input창에 입력을 하면', () => {
    it('dispatch가 updateTaskTitle과 함께 호출됩니다.', () => {
      const { getByLabelText } = renderInput();

      fireEvent.change(getByLabelText('할 일'), { target: { value: '과제1' } });

      expect(dispatch).toBeCalledWith(updateTaskTitle('과제1'));
    });
  });
});
