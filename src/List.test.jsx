import { render, fireEvent } from '@testing-library/react';

import { tasks as defaultTasks } from '../fixtures/task-data';

import List from './List';

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
    it('renders tasks', () => {
      const { getByText } = renderList(defaultTasks);

      expect(getByText(/할 일 1/)).not.toBeNull();
      expect(getByText(/할 일 2/)).not.toBeNull();
    });

    it('renders “완료” button to delete a task', () => {
      const { getAllByText } = renderList(defaultTasks);

      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(handleClickDelete).toBeCalledWith(1);
    });
  });

  context('without tasks', () => {
    it('renders no task message', () => {
      const { getByText } = renderList([]);

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });
});
