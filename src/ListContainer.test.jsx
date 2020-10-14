import React from 'react';
import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  test('renders elements correctly', () => {
    const initialState = ({
      tasks: [
        { id: 101, title: 'TASK-01' },
        { id: 101, title: 'TASK-02' },
      ],
    });

    useSelector.mockImplementation((selector) => selector(initialState));

    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/TASK-01/)).not.toBeNull();
    expect(getByText(/TASK-02/)).not.toBeNull();
  });
});
