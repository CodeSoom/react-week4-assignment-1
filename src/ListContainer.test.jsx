import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  it('should render tasks', () => {
    useSelector.mockImplementation((selector) => selector({
      tasks: [{ id: 1, title: '할일1' }],
    }));

    const { queryByText } = render((
      <ListContainer />
    ));

    expect(queryByText('할일1')).toBeInTheDocument();
  });
});
