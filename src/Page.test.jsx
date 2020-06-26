import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Page from './Page';

jest.mock('react-redux');

test('Page', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'New Task #1' },
      { id: 2, title: 'New Task #2' },
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

  expect(getByText(/New Task #1/)).not.toBeNull();
  expect(getByText(/New Task #2/)).not.toBeNull();

  fireEvent.click(getByText('추가'));

  expect(handleClickAddTask).toBeCalled();
});
