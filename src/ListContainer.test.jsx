import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('tasks가 없을 경우', () => {
    it('초기화면 로딩', () => {
      const { container } = render((
        <ListContainer />
      ));

      expect(container).toHaveTextContent(/할 일이 없어요/);
    });
  });

  describe('tasks가 있을 경우', () => {
    const tasks = [
      { id: 1, title: 'do nothing 1' },
      { id: 2, title: 'do nothing 2' },
    ];

    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));

    it('할일 목록을 보여준다.', () => {
      const { container } = render((
        <ListContainer />
      ));

      expect(container).toHaveTextContent(/do nothing/);
    });
  });
});
