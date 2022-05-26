import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Page from './Page';

jest.mock('react-redux');

test('Page', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '코드숨 과제하기1' },
      { id: 2, title: '코드숨 과제하기2' },
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

  expect(getByText(/코드숨 과제하기1/)).not.toBeNull();

  fireEvent.click(getByText('추가'));

  expect(handleClickAddTask).toBeCalled();
});
