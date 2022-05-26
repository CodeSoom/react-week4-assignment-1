import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

const dispatch = jest.fn();

describe('InputContainer', () => {
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      taskTitle: 'New Title',
    }));
  });
  context('with "추가" button when clicked', () => {
    it('call dispatch with type name "addTask"', () => {
      const { getByText, getByDisplayValue } = render(<InputContainer />);

      expect(getByText(/추가/)).not.toBeNull();
      expect(getByDisplayValue(/New Title/)).not.toBeNull();

      fireEvent.click(getByText(/추가/));

      expect(dispatch).toBeCalledWith({
        type: 'addTask',
      });
    });
  });

  context('with typed text', () => {
    it('call dispatch with type name "updateTaskTitle"', () => {
      const { getByDisplayValue } = render(<InputContainer />);

      fireEvent.change(getByDisplayValue(/New Title/), {
        target: { value: 'New Title Changed' },
      });

      expect(dispatch).toBeCalledWith({
        type: 'updateTaskTitle',
        payload: {
          taskTitle: 'New Title Changed',
        },
      });
    });
  });
});
