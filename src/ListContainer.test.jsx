import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

const { click } = fireEvent;

describe('ListContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  function renderApp() {
    const { container, getAllByText } = render((
      <ListContainer />
    ));

    return {
      container,
      findButtonComplete: () => getAllByText(/완료/)[0],
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

  describe('handleClickDeleteTask', () => {
    it('deletes completed task', () => {
      const { findButtonComplete } = renderApp();

      click(findButtonComplete());
      expect(dispatch).toHaveBeenCalledWith({
        payload: { id: 1 },
        type: 'deleteTask',
      });
    });
  });
});
