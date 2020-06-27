import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  test('handleClickDeleteTask', () => {
    const dispatch = jest.fn();
    const tasks = [
      {
        id: 1,
        title: 'Handle Click Delete Task',
      },
    ];
  
    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));
    useDispatch.mockImplementation(() => dispatch);
  
    const { getByText } = render(
      <ListContainer />
    );
  
    fireEvent.click(getByText('완료'));
  
    expect(dispatch).toBeCalledTimes(1);
    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: { id: 1 },
    });
  });
});
