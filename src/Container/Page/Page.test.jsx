import { render, fireEvent } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Page from './Page';

jest.mock('react-redux');

test('Page', () => {
  const handleChangeTitle = jest.fn();
  const handleClickAddTask = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: '아무것도 하지 않기 #1' },
      { id: 2, title: '아무것도 하지 않기 #2' },
    ],
  }));

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
