import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  useSelector.mockImplementation((selector) =>
    selector({
      tasks: [
        { id: 1, title: 'Do nothig #1' },
        { id: 2, title: 'Do nothig #2' },
      ],
    })
  );

  const { getByText } = render(<ListContainer />);

  expect(getByText(/Do nothig #2/)).not.toBeNull();
});
