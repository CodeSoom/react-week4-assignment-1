import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

function mockImplementation(taskState = {}, dispatch = null) {
  if (dispatch) {
    useDispatch.mockImplementation(() => (dispatch));
  }
  useSelector.mockImplementation((selector) => selector(taskState));
}

describe('App에서', () => {
  const dispatch = jest.fn();

  it('어플리케이션 제목(To-do)를 보여준다.', () => {
    const taskState = {
      taskTitle: '',
      tasks: [
        { id: 100, title: '밥 먹기' },
        { id: 101, title: '누워있기' },
      ],
    };

    mockImplementation(taskState, dispatch);

    const { getByText } = render(<App />);

    expect(getByText('To-do')).toBeInTheDocument();
  });
});
