import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const tasks = [
    { id: 1, title: '할 일' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  it('render', () => {
    const { getByText } = render(<ListContainer />);
    expect(getByText('할 일')).not.toBeNull();
  });
});
