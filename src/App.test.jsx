import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';
import App from './App';

jest.mock('react-redux');

beforeEach(() => {
  const tasks = [
    { id: 1, title: 'Task-1' },
    { id: 2, title: 'Task-2' },
  ];

  useSelector.mockImplementation((selector) => selector({
    tasks,
    taskTitle: '',
  }));
});

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  it('renders tasks', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('Task-1')).not.toBeNull();
    expect(getByText('Task-2')).not.toBeNull();
  });

  it('listens change event', () => {
    const { getByLabelText } = render((
      <App />
    ));

    fireEvent.change(getByLabelText('할 일'), {
      target: { value: '무언가 하기' },
    });

    expect(dispatch).toBeCalledWith({
      type: 'updateTaskTitle',
      payload: {
        taskTitle: '무언가 하기',
      },
    });
  });

  // TODO: 통합 테스트 코드 작성
  // CodeceptJS => 실제 브라우저에서 사용자 테스트 실행 가능.
});
