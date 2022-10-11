import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import given from 'given2';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    tasks: given.tasks,
  }));

  context('with tasks', () => {
    const tasks = [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ];

    it('renders task list with delete button', () => {
      given('tasks', () => ([
        { id: 1, title: '아무 것도 하지 않기 #1' },
        { id: 2, title: '아무 것도 하지 않기 #2' },
      ]));

      const { getByText, getAllByText } = render((
        <ListContainer />
      ));

      expect(given.tasks).toMatchObject(tasks);
      expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
      expect(getByText(/아무 것도 하지 않기 #2/)).not.toBeNull();

      expect(getAllByText(/완료/)).not.toBeNull();
    });
  });

  context('without task', () => {
    it('renders notification text', () => {
      given('tasks', () => []);

      const { getByText } = render((
        <ListContainer />
      ));

      expect(given.tasks).toMatchObject([]);
      expect(getByText(/할 일이 없어요!/)).not.toBeNull();
    });
  });
});
