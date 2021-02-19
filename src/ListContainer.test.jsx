import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('reat-redux');

describe('ListContainer', () => {
  context('할 일이 없는 경우', () => {
    it('할 일이 없음을 출력합니다.', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [],
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
});
