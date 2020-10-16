import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from './InputContainer';

jest.mock('react-redux');

const { click } = fireEvent;

function change(target, { value }) {
  fireEvent.change(target, {
    target: { value },
  });
}

describe('InputContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderInputContainer() {
    const {
      container, getByLabelText, getByText,
    } = render((
      <InputContainer />
    ));

    return {
      container,
      input: getByLabelText(/할 일/),
      buttonAdd: getByText(/추가/),
    };
  }

  const tasks = [
    { id: 1, title: '쉬기' },
    { id: 2, title: '놀기' },
  ];

  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
  useDispatch.mockReturnValue(dispatch);

  describe('handleChangeTitle', () => {
    it('changes task title', () => {
      const { input } = renderInputContainer();

      const value = '커버리지 높이기';

      change(input, { value });
      expect(dispatch).toHaveBeenCalledWith({
        payload: { value },
        type: 'changeTaskTitle',
      });
    });
  });

  describe('handleClickAddTask', () => {
    it('adds a new task', () => {
      const { buttonAdd } = renderInputContainer();

      expect(buttonAdd).not.toBeNull();
      click(buttonAdd);
      expect(dispatch).toHaveBeenCalledWith({
        type: 'addTask',
      });
    });
  });
});
