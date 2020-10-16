import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

const { click } = fireEvent;

function change(target, { value }) {
  fireEvent.change(target, {
    target: { value },
  });
}

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderApp() {
    const {
      container, getByLabelText, getByText, getAllByText,
    } = render((
      <App />
    ));

    return {
      container,
      input: getByLabelText(/할 일/),
      buttonAdd: getByText(/추가/),
      findButtonComplete: () => getAllByText(/완료/)[0],
    };
  }

  const tasks = [
    { id: 1, title: '쉬기' },
    { id: 2, title: '놀기' },
  ];

  const mockDispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
  useDispatch.mockReturnValue(mockDispatch);

  describe('handleChangeTitle', () => {
    it('changes task title', () => {
      const { input } = renderApp();

      const value = '커버리지 높이기';

      change(input, { value });
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: { value },
        type: 'changeTaskTitle',
      });
    });
  });

  describe('handleClickAddTask', () => {
    it('adds a new task', () => {
      const { buttonAdd } = renderApp();

      expect(buttonAdd).not.toBeNull();
      click(buttonAdd);
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'addTask',
      });
    });
  });

  describe('handleClickDeleteTask', () => {
    it('deletes completed task', () => {
      const { findButtonComplete } = renderApp();

      click(findButtonComplete());
      expect(mockDispatch).toHaveBeenCalledWith({
        payload: { id: 1 },
        type: 'deleteTask',
      });
    });
  });
});
