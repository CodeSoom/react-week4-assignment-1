import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ],
  }));

  context('without "완료" clicked', () => {
    it("handleClickDelete doesn't work", () => {
      const { queryByText } = render((<ListContainer />));

      expect(queryByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
      expect(queryByText(/아무 것도 하지 않기 #2/)).not.toBeNull();
    });
  });

  context('with "완료" clicked', () => {
    it('handleClickDelete works', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      const { queryAllByText } = render((<ListContainer />));

      fireEvent.click(queryAllByText(/완료/)[0]);

      expect(dispatch).toBeCalledWith({
        type: 'deleteTask',
        payload: { id: 1 },
      });
    });
  });
});
