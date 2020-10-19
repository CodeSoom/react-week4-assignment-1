import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무 것도 하지 않기 1' },
      { id: 2, title: '아무 것도 하지 않기 2' },
    ],
  }));

  const { getAllByText } = render((
    <ListContainer />
  ));

  getAllByText(/아무 것도 하지 않기/).forEach((task) => {
    expect(task).not.toBeNull();
  });

  getAllByText(/완료/).forEach((button, index) => {
    fireEvent.click(button);

    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: {
        id: index + 1,
      },
    });
  });
});
