import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: '아무 것도 하지 않기 #1' },
        { id: 2, title: '아무 것도 하지 않기 #2' },
      ],
    }));
  });

  context("when '완료' button isn't clicked", () => {
    it('shows nothing deleted', () => {
      const { queryByText } = render((<ListContainer />));

      expect(queryByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
      expect(queryByText(/아무 것도 하지 않기 #2/)).not.toBeNull();
    });
  });

  context("when '완료' button is clicked", () => {
    it('shows handleClickDelete working', () => {
      const { queryAllByText } = render((<ListContainer />));

      fireEvent.click(queryAllByText(/완료/)[0]);

      expect(dispatch).toBeCalledWith({
        type: 'deleteTask',
        payload: { id: 1 },
      });
    });
  });
});
