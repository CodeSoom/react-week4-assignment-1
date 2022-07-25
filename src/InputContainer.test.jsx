import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTaskTitle } from './actions';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'New Title',
  }));

  function renderElement() {
    return render((
      <InputContainer />
    ));
  }

  context('add button click', () => {
    it('add task', () => {
      const { getByText } = renderElement();

      fireEvent.click(getByText(/추가/));

      expect(dispatch).toBeCalledWith(addTask());
    });
  });

  context('enter input', () => {
    it('update Task Title', () => {
      const { getByLabelText } = renderElement();
      const input = getByLabelText('할 일');

      fireEvent.change(input, {
        target: {
          value: '과제 하는 중',
        },
      });

      expect(dispatch).toBeCalledWith(updateTaskTitle('과제 하는 중'));
    });
  });
});
