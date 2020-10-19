import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무 것도 하지 않기' },
    ],
  }));

  context('with tasks', () => {
    it('renders each task', () => {
      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText(/아무 것도 하지 않기/)).not.toBeNull();
    });
  });

  context('when delete task', () => {
    it('dispatches deleteTask', () => {
      const { getByText } = render((
        <ListContainer />
      ));

      fireEvent.click(getByText('완료'));

      expect(dispatch).toBeCalledWith({
        type: 'deleteTask',
        payload: {
          id: 1,
        },
      });
    });
  });
});
