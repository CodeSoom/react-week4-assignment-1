import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  context('할 일이 있으면', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: 'New Task #1' },
        { id: 2, title: 'New Task #2' },
      ],
    }));

    it('할 일 목록을 보여준다.', () => {
      const { getByText } = render(<ListContainer />);

      expect(getByText(/New Task #1/)).not.toBeNull();
      expect(getByText(/New Task #2/)).not.toBeNull();
    });
  });

  context('할 일이 없으면', () => {
    it('빈 메세지를 출력한다.', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [],
      }));

      const { getByText } = render(<ListContainer />);

      expect(getByText(/할 일이 없어요!/)).not.toBeNull();
    });
  });
});
