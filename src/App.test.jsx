import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    todos: {
      taskTitle: '',
      tasks: [
        {
          id: 1, title: 'Task1',
        },
      ],
    },
  }));

  const { getByText } = render((<App />));
  expect(getByText(/추가/)).not.toBeNull();
});
