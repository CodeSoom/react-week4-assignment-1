import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Page from './Page';

jest.mock('react-redux');

test('Page', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'Task-1' },
      { id: 2, title: 'Task-2' },
    ],
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

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();

  fireEvent.click(getByText('??'));

  expect(handleClickAddTask).toBeCalled();
});
