import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

it('renders header', () => {
  const initialState = { taskTitle: '', tasks: [] };
  useSelector.mockImplementation((selector) => selector(initialState));

  const { getByText } = render(<App />);

  expect(getByText('To-do')).toBeInTheDocument();
});
