import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  const testTaskTitle = 'Distribute new version';

  context('when change input task title', () => {
    it('dispatch updateTaskTitle', () => {
      const testInputEvent = { target: { value: testTaskTitle } };

      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
      }));

      const { container } = render((
        <InputContainer />
      ));

      const inputBox = container.querySelector('#input-task-title');

      fireEvent.change(inputBox, testInputEvent);

      expect(dispatch).toBeCalledWith({
        type: 'updateTaskTitle',
        payload: {
          taskTitle: testTaskTitle,
        },
      });
    });
  });

  context('when click add button', () => {
    it('dispatch addTask', () => {
      useSelector.mockImplementation((selector) => selector({
        taskTitle: testTaskTitle,
      }));

      const { getByText, getByDisplayValue } = render((
        <InputContainer />
      ));

      expect(getByText(/추가/)).not.toBeNull();
      expect(getByDisplayValue(testTaskTitle)).not.toBeNull();

      fireEvent.click(getByText(/추가/));

      expect(dispatch).toBeCalledWith({ type: 'addTask' });
    });
  });
});
