import { fireEvent, render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

test('ListContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'Do nothig #1' },
      { id: 2, title: 'Do nothig #2' },
    ],
  }));

  const { getByText, getAllByRole } = render(<ListContainer />);

  expect(getByText(/Do nothig #2/)).not.toBeNull();

  const buttons = getAllByRole('button', { name: /완료/ });
  expect(buttons).not.toBeNull();

  fireEvent.click(buttons[0]);

  expect(dispatch).toBeCalledWith({
    type: 'deleteTask',
    payload: {
      id: 1,
    },
  });
});
