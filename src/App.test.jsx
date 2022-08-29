import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

function stubSelector({ taskTitle = '', tasks = [] } = {}) {
  useSelector.mockImplementation((selector) => selector({
    taskTitle,
    tasks,
  }));
}

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders title & add button & input', () => {
    stubSelector({ taskTitle: 'Task-example' });

    const { getByText, getByDisplayValue } = render((
      <App />
    ));

    expect(getByText('To-do')).not.toBeNull();
    expect(getByText(/추가/)).not.toBeNull();
    expect(getByDisplayValue(/Task-example/)).toHaveAttribute('type', 'text');
  });

  context('without tasks', () => {
    it('renders no todo message', () => {
      stubSelector();

      const { getByText } = render(
        <App />,
      );

      expect(getByText(/할 일이 없어요!/)).not.toBeNull();
    });
  });

  context('with todos', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('renders tasks', () => {
      stubSelector({ tasks });

      const { getByText, getAllByText } = render(
        <App />,
      );

      tasks.forEach((task) => {
        expect(getByText(task.title)).not.toBeNull();
      });
      expect(getAllByText('완료')).toHaveLength(tasks.length);
    });
  });
});
