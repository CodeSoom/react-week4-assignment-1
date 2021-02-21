import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import given from 'given2';

import { useDispatch, useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  given('tasks', () => (given.tasks));

  context('할 일이 없는 경우', () => {
    it('할 일이 없음을 출력합니다.', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: given.tasks,
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });

  context('할 일이 있는 경우', () => {
    it('할 일이 있음을 출력합니다.', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [
          { id: '1', title: 'TDD연습하기' },
          { id: '2', title: 'TDD연습 두번하기' },
        ],
      }));

      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText(/TDD연습하기/)).not.toBeNull();
    });
  });

  describe('완료 버튼을 누른 경우', () => {
    it('선택된 할 일을 제거하는 함수를 호출합니다.', () => {
      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => (dispatch));
      useSelector.mockImplementation((selector) => selector({
        tasks: [
          { id: '1', title: 'TDD연습하기' },
          { id: '2', title: 'TDD연습 두번하기' },
        ],
      }));

      const { getAllByText } = render((
        <ListContainer />
      ));

      expect(dispatch).not.toBeCalled();
      getAllByText(/완료/).forEach((task) => {
        fireEvent.click(task);
        expect(dispatch).toBeCalled();
      });
    });
  });
});
