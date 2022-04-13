import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 #1' },
    { id: 2, title: '아무 것도 하지 않기 #2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
  context('with task', () => {
    it('renders task', () => {
      const { queryByText } = render((
        <ListContainer />
      ));

      expect(queryByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
    });

    it('clicks done button', () => {
      const { getAllByText } = render((
        <ListContainer />
      ));

      fireEvent.click(getAllByText(/완료/)[0]);

      expect(dispatch).toBeCalledWith({
        type: 'deleteTask',
        payload: {
          id: 1,
        },
      });
    });
  });
});
