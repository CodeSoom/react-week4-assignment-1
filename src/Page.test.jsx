import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';
import Page from './Page';

import tasks from '../fixtures/tasks';

jest.mock('react-redux');

test('Page', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks,
    taskTitle: '',
  }));

  const handleChangeTitle = jest.fn();
  const handleClickAddTask = jest.fn();

  const { getByText } = render((
    <Page
      taskTitle=""
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
    />
  ));

  expect(getByText(/아무것도 하지 않기 #1/)).not.toBeNull();
  expect(getByText(/아무것도 하지 않기 #2/)).not.toBeNull();

  fireEvent.click(getByText('추가'));

  expect(handleClickAddTask).toBeCalled();
});
