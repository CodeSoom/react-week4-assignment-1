import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import userEvent from '@testing-library/user-event';

import { updateTaskTitle, addTask } from './actions';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContaner', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  context('when input value empty', () => {
    it('renders updated taskTitle', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
      }));
      const { getByRole } = render(<InputContainer />);

      const input = getByRole(/textbox/);
      expect(input).not.toBeNull();

      expect(input.value).toBe('');
      userEvent.type(input, '!');
      // fireEvent.change(input, { target: { value: '!' } });

      expect(dispatch).toBeCalledWith(updateTaskTitle('!'));
    });
  });
  context('when input value not empty', () => {
    it('renders value', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: 'new title',
      }));
      const { getByText, getByDisplayValue } = render(<InputContainer />);

      expect(getByText(/추가/)).not.toBeNull();
      expect(getByDisplayValue(/new title/)).not.toBeNull();

      fireEvent.click(getByText(/추가/));
      expect(dispatch).toBeCalledWith(addTask());
    });
  });
});
