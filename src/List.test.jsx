import { render, fireEvent } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const handleClickDelete = jest.fn();

  const setup = (tasks = []) => render(
    <List
      tasks={tasks}
      onClickDelete={handleClickDelete}
    />,
  );

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('renders tasks', () => {
      const { getByText } = setup(tasks);

      tasks.forEach((task) => {
        expect(getByText(task.title)).not.toBeNull();
      });
    });

    it('renders “완료” button to delete a task', () => {
      const { getAllByText } = setup(tasks);

      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(handleClickDelete).toBeCalledWith(1);
    });
  });

  context('without tasks', () => {
    const tasks = [];

    it('renders no task message', () => {
      const { getByText } = setup(tasks);

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });
});
