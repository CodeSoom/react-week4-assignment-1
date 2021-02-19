import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  function renderListContainer() {
    return render((
      <ListContainer />
    ));
  }

  function setMockTasks(tasks = []) {
    useSelector
      .mockImplementation(
        (selector) => selector({
          tasks,
        }),
      );
  }

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);
  });

  context(' tasks에 할일이 있으면 ', () => {
    it(' 할일을 보여준다. ', () => {
      const tasks = [
        { id: 1, title: '뭐라도 하기 #1' },
        { id: 2, title: '뭐라도 하기 #2' },
      ];

      setMockTasks(tasks);

      const { queryByText } = renderListContainer();

      tasks.forEach((task) => {
        expect(queryByText(task.title)).not.toBeNull();
      });
    });
  });

  context(' tasks가 비었으면 ', () => {
    it(' 할 일이 없어요! 를 출력한다. ', () => {
      setMockTasks();

      const { queryByText } = renderListContainer();

      expect(queryByText(/할 일이 없어요!/)).not.toBeNull();
    });
  });

  it('완료 버튼을 클릭하면, 할일을 삭제한다. ', () => {
    const tasks = [{ id: 1, taskTitle: '할일' }];

    setMockTasks(tasks);

    const { getByText, queryByText } = renderListContainer();

    expect(queryByText(/완료/)).not.toBeNull();

    fireEvent.click(getByText(/완료/));

    expect(dispatch).toBeCalled();
  });
});
