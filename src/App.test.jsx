import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

describe('App에서', () => {
  beforeEach(() => jest.clearAllMocks());

  it('어플리케이션 제목(To-do)를 보여준다.', () => {
    const taskState = {
      taskTitle: '',
      tasks: [
        { id: 100, title: '밥 먹기' },
        { id: 101, title: '누워있기' },
      ],
    };

    useSelector.mockImplementation((selector) => selector(taskState));

    const { getByText } = render(<App />);

    expect(getByText('To-do')).toBeInTheDocument();
  });
});
