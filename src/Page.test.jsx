import { render, fireEvent } from '@testing-library/react';

import Page from './Page';

test('Page', () => {
  const handleClickAddTask = jest.fn();
  const handleClickDeleteTask = jest.fn();

  const tasks = [
    { id: 1, title: 'Task-1' },
    { id: 2, title: 'Task-2' },
  ];

  const { getByText } = render((
    <Page
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();

  fireEvent.click(getByText('추가'));

  expect(handleClickAddTask).toBeCalled();
});
