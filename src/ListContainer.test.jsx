import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('List', () => {
    const tasks = [
      { id: 1, title: '리덕스 공부하기' },
      { id: 2, title: 'TDD 공부하기' },
    ];

    useSelector.mockImplementation((selector) => selector({
      tasks,
    }));

    const { getByText } = render(<ListContainer />);

    expect(getByText('리덕스 공부하기')).not.toBeNull();
  });
});
