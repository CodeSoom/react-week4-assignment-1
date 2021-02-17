import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from '../__mocks__/react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  context('with no tasks', () => {
    it('shows "할 일이 없어요".', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [],
      }));
      const { getByText } = render((
        <App />
      ));
      expect(getByText(/추가/)).not.toBeNull();
      expect(getByText(/할 일이 없어요/)).not.toBeNull();
    });
  });

  context('with tasks', () => {
    it('shows tasks', () => {
      useSelector.mockImplementation((selector) => selector({
        tasks: [
          { id: 1, title: '기모찌' },
        ],
      }));
      const { queryByText } = render((
        <App />
      ));
      expect(queryByText(/기모찌/)).not.toBeNull();
    });
  });
});
