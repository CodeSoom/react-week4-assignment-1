import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClickDelete = jest.fn();

  const renderList = (tasks) => render((
    <List
      tasks={tasks}
      onClickDelete={handleClickDelete}
    />
  ));

  context('tasks를 없을 때,', () => {
    const tasks = [];

    it('"할 일이 없어요!" 메세지가 나타납니다.', () => {
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent('할 일이 없어요!');
    });
  });

  context('tasks를 있을 때,', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    it('여러 task가 뜹니다.', () => {
      const { container } = renderList(tasks);

      tasks.forEach(({ title }) => {
        expect(container).toHaveTextContent(title);
      });
    });
  });
});
