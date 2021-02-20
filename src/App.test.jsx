import React from 'react';

import { render } from '@testing-library/react';

import given from 'given2';

import { useSelector } from '../__mocks__/react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  given('tasks', () => ({ tasks: given.tasks }));

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      tasks: given.tasks,
    }));
  });

  context('with no tasks', () => {
    given('tasks', () => []);
    it('shows "할 일이 없어요".', () => {
      const { queryByText } = render((<App />));

      expect(queryByText(/추가/)).not.toBeNull();
      expect(queryByText(/할 일이 없어요/)).not.toBeNull();
    });
  });

  context('with tasks', () => {
    given('tasks', () => [{ id: 1, title: '기모찌' }]);
    it('shows tasks', () => {
      const { queryByText } = render((<App />));

      expect(queryByText(/기모찌/)).not.toBeNull();
    });
  });
});
