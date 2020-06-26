import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import {useSelector } from "react-redux";

import Page from './Page';

jest.mock('react-redux');
test('Page', () => {
  const handleChangeTitle = jest.fn();
  const handleClickAddTask = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    newId: 1,
    tasks: [
      {
        id: 1,
        title: "너의 첫번째 임무다! #1"
      }, {
        id: 2,
        title: "너의 첫번째 임무다! #2"
      }
    ]
  }));

  const { getByText } = render((
    <Page
      taskTitle=""
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
    />
  ));

  expect(getByText(/너의 첫번째 임무다! #1/)).not.toBeNull();
  expect(getByText(/너의 첫번째 임무다! #2/)).not.toBeNull();

  fireEvent.click(getByText('추가'));

  expect(handleClickAddTask).toBeCalled();
});
