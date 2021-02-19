import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    tasks: [
      { id: 1, title: 'TDD하기' },
      { id: 2, title: 'TDD두번 하기' },
    ],
  }));

  const { getByText } = render((
    <App />
  ));

  it('element를 출력합니다.', () => {
    expect(getByText(/추가/)).not.toBeNull();
  });
});
