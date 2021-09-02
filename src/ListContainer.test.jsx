import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  describe('useSelector', () => {
    it('shos tasks after get it from store', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [
          { id: 1, title: 'Do Nothing' },
        ],
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText(/Do Nothing/)).not.toBeNull();
    });
  });
  describe('useDispatch', () => {
    it('removes tasks with action', () => {
      const dispath = jest.fn();
      useDispatch.mockImplementation(() => dispath);

      const { getByText } = render((
        <ListContainer />
      ));

      fireEvent.click(getByText(/완료/));

      expect(dispath).toBeCalledWith({
        type: 'deleteTask',
        payload: {
          id: 1,
        },
      });
    });
  });
});
