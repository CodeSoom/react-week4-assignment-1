import React from 'react';

import { render } from '@testing-library/react';

import given from 'given2';

import { useSelector } from '../__mocks__/react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  given("state's tasks", () => ({ tasks: given.tasks }));

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      tasks: given.tasks,
    }));
  });

  context('with no tasks', () => {
    it('shows "할 일이 없어요".', () => {
      given('tasks', () => []);

      const { queryByText } = render((<App />));

      expect(queryByText(/추가/)).not.toBeNull();
      expect(queryByText(/할 일이 없어요/)).not.toBeNull();
    });
  });

  context('with tasks', () => {
    it('shows tasks', () => {
      given('tasks', () => [{ id: 1, title: '기모찌' }]);

      const { queryByText } = render((<App />));

      expect(queryByText(/기모찌/)).not.toBeNull();
    });
  });
});
