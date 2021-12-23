import { render } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ],
  }));
  useDispatch.mockImplementation(() => dispatch);

  it('with tasks, titles should be rendered', () => {
    const { getByText } = render((
      <ListContainer />
    ));

    expect(getByText(/Task-1/)).not.toBeNull();
    expect(getByText(/Task-2/)).not.toBeNull();
  });
});
