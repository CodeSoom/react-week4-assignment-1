import { render, fireEvent } from '@testing-library/react';

import { tasks } from './fixtures/task-dummy';

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

  function renderList(propTasks) {
    return render((
      <List
        tasks={propTasks}
        onClickDelete={handleClickDelete}
      />
    ));
  }

  context('tasks가 있을경우', () => {
    it('tasks-title 을 렌더링한다', () => {
      const { getByText } = renderList(tasks);

      expect(getByText(/할일 1/)).not.toBeNull();
      expect(getByText(/할일 2/)).not.toBeNull();
    });

    it('click', () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(handleClickDelete).toBeCalledWith(1);
    });
  });

  context('tasks가 없는경우', () => {
    it('renders no task message', () => {
      const { getByText } = renderList([]);

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });
});
