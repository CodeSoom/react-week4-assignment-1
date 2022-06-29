import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    todos: {
      taskTitle: 'New Title',
    },
  }));

  function renderInput() {
    return render((
      <InputContainer />
    ));
  }

  context('with input', () => {
    it('print input', () => {
      const { getByText, getByDisplayValue } = renderInput();

      expect(getByText(/추가/)).not.toBeNull();
      expect(getByDisplayValue(/New Title/)).not.toBeNull();
    });
  });

  context('button click', () => {
    it('call addTask action', () => {
      const { getByText } = renderInput();

      fireEvent.click(getByText(/추가/));

      expect(dispatch).toBeCalledWith({
        type: 'todos/addTask',
      });
    });
  });
});
