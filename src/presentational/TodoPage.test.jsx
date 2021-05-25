import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import TodoPage from './TodoPage';

jest.mock('react-redux');

it('renders header', () => {
  const initialState = { taskTitle: '', tasks: [] };
  useSelector.mockImplementation((selector) => selector(initialState));

  const { getByText } = render(<TodoPage />);

  expect(getByText('To-do')).toBeInTheDocument();
});
