import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import ListContainer from './ListContainer';

jest.mock('react-redux');

function setSelector(tasks = []) {
  useSelector.mockImplementation((selector) => selector({
    tasks,
  }));
}

describe('ListContainer', () => {
  context('with tasks', () => {
    const tasks = [
      { id: 1, title: '아무 것도 하지 않기 #1' },
      { id: 2, title: '아무 것도 하지 않기 #2' },
    ];

    it('renders task list with delete button', () => {
      setSelector(tasks);

      const { getByText, getAllByText } = render((
        <ListContainer />
      ));

      expect(getByText(/아무 것도 하지 않기 #1/)).not.toBeNull();
      expect(getByText(/아무 것도 하지 않기 #2/)).not.toBeNull();

      expect(getAllByText(/완료/)).not.toBeNull();
    });
  });

  context('without task', () => {
    it('renders notification text', () => {
      setSelector([]);

      const { getByText } = render((
        <ListContainer />
      ));

      expect(getByText(/할 일이 없어요!/)).not.toBeNull();
    });
  });
});
