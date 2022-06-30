import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { initialState } from './reducer';

import TASKS from './fixtures/tasks';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector(initialState));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Input이 보인다.', () => {
    const { getByText, getByLabelText } = render((
      <App />
    ));

    expect(getByText(/추가/)).toBeInTheDocument();
    expect(getByLabelText(/할 일/)).toBeInTheDocument();
  });

  context('할 일 목록이 있을 경우', () => {
    it('할 일 목록이 보인다.', () => {
      useSelector.mockImplementation((selector) => selector({
        ...initialState,
        tasks: TASKS,
      }));

      const { container } = render((
        <App />
      ));

      TASKS.forEach((task) => {
        expect(container).toHaveTextContent(task.title);
      });
    });
  });
});
