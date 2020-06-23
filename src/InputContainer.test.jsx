import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';

import InputContainer from './InputContainer';

jest.mock('react-redux');

test('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    taskTitle: '',
  }));
  const { getByText, getByDisplayValue } = render(<InputContainer />);

  expect(getByText('추가')).not.toBeNull();
  expect(getByDisplayValue('')).not.toBeNull();

  fireEvent.change(getByDisplayValue(''), {
    target: {
      value: 'New Title',
    },
  });

  expect(dispatch).toBeCalledWith({
    type: 'UPDATE_TITLE',
    payload: {
      taskTitle: 'New Title',
    },
  });

  // FIXME:
  // fireEvent.change 후 value 를 체크하면 '' 빈 값으로 나옴.
  expect(getByDisplayValue('New Title')).not.toBeNull();

  fireEvent.click(getByText('추가'));
  expect(dispatch).toBeCalledWith({
    type: 'ADD_TASK',
  });
});
