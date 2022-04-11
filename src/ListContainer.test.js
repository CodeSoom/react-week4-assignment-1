import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  function renderListContainer() {
    return render((
      <ListContainer />
    ));
  }

  function returnUseSelector(tasks) {
    return (
      useSelector.mockImplementation((selector) => selector({
        tasks,
      }))
    );
  }

  context('with tasks', () => {
    it('shows existing tasks ', () => {
      const tasks = [
        { id: 1, title: '아무 것도 하지 않기 #1' },
        { id: 2, title: '아무 것도 하지 않기 #2' },
      ];

      returnUseSelector(tasks);

      const { getByText } = renderListContainer();

      expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
    });
  });

  context('without tasks', () => {
    it("shows message: '할 일이 없어요!'", () => {
      const emptyTask = [];

      returnUseSelector(emptyTask);

      const { getByText } = renderListContainer();

      expect(getByText(/할 일이 없어요!/)).not.toBeNull();
    });
  });
});
