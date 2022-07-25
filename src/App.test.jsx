import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const tasks = [
    {
      id: 1,
      title: '아무 것도 하지 않기',
    },
    {
      id: 2,
      title: '그래도 뭐라도 하기',
    },
  ];

  useSelector.mockImplementation((selector) => selector({
    taskTitle: 'new title',
    tasks,
  }));

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  const { getByText, getAllByText, getByLabelText } = render((
    <App />
  ));

  expect(getByText(/아무 것도 하지 않기/)).not.toBeNull();
  expect(getByText(/그래도 뭐라도 하기/)).not.toBeNull();

  fireEvent.click(getAllByText(/완료/)[0]);

  expect(dispatch).toBeCalledWith({ type: 'deleteTask', payload: { id: 1 } });

  fireEvent.click(getByText(/추가/));

  expect(dispatch).toBeCalledWith({ type: 'addTask' });

  fireEvent.change(getByLabelText(/할 일/), { target: { value: 'a' } });

  expect(dispatch).toBeCalledWith({ type: 'updateTaskTitle', payload: { taskTitle: 'a' } });

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
