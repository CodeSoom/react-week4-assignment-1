import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('할 일 목록을 보여준다.', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks: [
        { id: 1, title: 'New Task #1' },
        { id: 2, title: 'New Task #2' },
      ],
    }));

    const { getByText } = render(<ListContainer />);

    expect(getByText(/New Task #1/)).not.toBeNull();
    expect(getByText(/New Task #2/)).not.toBeNull();
  });
});
