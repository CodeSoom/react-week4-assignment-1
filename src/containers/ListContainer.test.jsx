import { render } from '@testing-library/react';

import ListContainer from './ListContainer';

describe('ListContainer', () => {
  const handleClickDeleteTask = jest.fn();

  it('with tasks, titles should be rendered', () => {
    const tasks = [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ];

    const { getByText } = render((
      <ListContainer
        tasks={tasks}
        onClickDeleteTask={handleClickDeleteTask}
      />
    ));

    expect(getByText(/Task-1/)).not.toBeNull();
    expect(getByText(/Task-2/)).not.toBeNull();
  });
});
