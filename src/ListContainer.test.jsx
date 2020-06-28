import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('랜더링 확인', () => {
    const tasks = [
      { id: 1, title: '고양이 밥주기' },
    ];
    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));
    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/완료/)).not.toBeNull();
    expect(getByText(/고양이 밥주기/)).not.toBeNull();
  });

  it('완료 클릭하기', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    const tasks = [
      { id: 1, title: '고양이 밥주기' },
    ];
    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));
    const { getByText } = render((
      <ListContainer />
    ));

    fireEvent.click(getByText(/완료/));
    expect(dispatch).toBeCalledWith({
      type: 'deleteTask',
      payload: {
        id: 1,
      },
    });
  });
});
