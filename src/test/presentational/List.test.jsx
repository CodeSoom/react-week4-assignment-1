import { render, fireEvent } from '@testing-library/react';

import List from '../../presentational/List';

// test('테스트 #1')
//
// describe - it => describe('List') => it('renders tasks')
// describe - context - it
// jest-plugins => jest-plugin-context
//
// with tasks
// - List renders tasks...
// - List renders “delete” button to delete a task
// without tasks
// - List renders no task message.
//
// TDD cycle: Red - Green - Refactoring

describe('List', () => {
  const handleClickDelete = jest.fn();

  function renderList(tasks) {
    return render((
      <List
        tasks={tasks}
        onClickDelete={handleClickDelete}
      />
    ));
  }

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('renders tasks', () => {
      const { getByText } = renderList(tasks);

      tasks.forEach((task) => expect(getByText(task.title)).toBeInTheDocument());
    });

    it('renders “완료” button to delete a task', () => {
      const { getAllByRole } = renderList(tasks);

      tasks.forEach((_, index) => {
        fireEvent.click(getAllByRole('button')[index]);

        expect(handleClickDelete).toBeCalledWith(tasks[index].id);
      });
    });
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      const tasks = [];

      const { getByText } = renderList(tasks);

      expect(getByText(/할 일이 없어요/)).toBeInTheDocument();
    });
  });
});
