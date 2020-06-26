import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

describe('InputContainer', () => {
  context('when change input task title', () => {
    it('dispatch updateTaskTitle', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const testTaskTitle = 'Distribute new version';

      useSelector.mockImplementation((selector) => selector({
        taskTitle: '',
      }));

      const { container, getByText, getByDisplayValue } = render((
        <InputContainer />
      ));

      const inputBox = container.querySelector('#input-task-title');

      expect(getByDisplayValue(testTaskTitle)).toBeNull();

      fireEvent.change(inputBox, testTaskTitle);

      expect(getByDisplayValue(testTaskTitle)).not.toBeNull();

      expect(dispatch).toBeCalledWith({ type: 'updateTaskTitle' });
    });
  });

  context('when click add button', () => {
    it('dispatch addTask', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const testTaskTitle = 'Distribute new version';

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
