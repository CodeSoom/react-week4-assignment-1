import { render, fireEvent } from '@testing-library/react';

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

  context('tasks가 있을경우', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('tasks-title 을 렌더링한다', () => {
      const { getByText } = renderList(tasks);

      expect(getByText(/Task-1/)).not.toBeNull();
      expect(getByText(/Task-2/)).not.toBeNull();
    });

    it('click 이벤트를 listen한다', () => {
      const { getAllByText } = renderList(tasks);

      const buttons = getAllByText('완료');

      fireEvent.click(buttons[0]);

      expect(handleClickDelete).toBeCalledWith(1);
    });
  });

  context('tasks가 없는경우', () => {
    it('renders no task message', () => {
      const tasks = [];

      const { getByText } = renderList(tasks);

      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });
});
