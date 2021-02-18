import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import given from 'given2';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => (dispatch));
    useSelector.mockImplementation((selector) => selector({
      tasks: given.tasks,
    }));
  });

  context('할 일 목록이 없을 때', () => {
    given('tasks', () => []);
    it('할 일이 없다는 것을 보여준다.', () => {
      const { getByText } = render(<ListContainer />);

      expect(getByText('할 일이 없어요!')).toBeInTheDocument();
    });
  });

  context('할 일 목록이 있을 때', () => {
    given('tasks', () => ([
      { id: 100, title: '밥 먹기' },
      { id: 101, title: '누워 있기' },
    ]));
    it('할 일을 보여준다.', () => {
      const { queryByText } = render(<ListContainer />);

      expect(queryByText('밥 먹기')).toBeInTheDocument();
      expect(queryByText('누워 있기')).toBeInTheDocument();
    });

    it('완료버튼을 클릭하면 완료한 것을 제거하는 함수가 실행된다.', () => {
      const { getAllByText } = render(<ListContainer />);

      getAllByText('완료').forEach((task) => {
        fireEvent.click(task);
        expect(dispatch).toBeCalled();
      });
    });
  });
});
