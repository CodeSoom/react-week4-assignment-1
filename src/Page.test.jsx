import React from 'react';

import { render, fireEvent } from '@testing-library/react';
import { useSelector } from 'react-redux';

import Page from './Page';

jest.mock('react-redux');

test('Page', () => {
  const tasks = [
    { id: 1, title: '아무 것도 하지 않기 1' },
    { id: 2, title: '아무 것도 하지 않기 2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
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

  expect(getByText(/아무 것도 하지 않기 1/)).not.toBeNull();
  expect(getByText(/아무 것도 하지 않기 2/)).not.toBeNull();

  fireEvent.click(getByText('추가'));

  expect(handleClickAddTask).toBeCalled();
});
