import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const tasks = [
    { id: 1, title: '하하하' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));

  it('render', () => {
    const { getByText } = render(<ListContainer />);
    expect(getByText('하하하')).not.toBeNull();
  });
});
