import { render, fireEvent } from '@testing-library/react';

import Page from './Page';

import tasks from '../../fixtures/DataToTest';

test('Page', () => {
  const handleChangeTitle = jest.fn();
  const handleClickAddTask = jest.fn();
  const handleClickDeleteTask = jest.fn();

  const { getByText } = render(
    <Page
      taskTitle=""
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />,
  );

  expect(getByText('아무 것도 하지 않기 #1')).not.toBeNull();
  expect(getByText('아무 것도 하지 않기 #2')).not.toBeNull();

  fireEvent.click(getByText('추가'));

  expect(handleClickAddTask).toBeCalled();
});
